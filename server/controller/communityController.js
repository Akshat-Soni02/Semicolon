import ErrorHandler from "../Utils/errorHandler.js";
import Community from "../models/communityModel.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import User from "../models/userModel.js";
import cloudinary from "cloudinary";
import ApiFeatures from "../Utils/apifeatures.js";

//create a community
export const createCommunity = catchAsyncErrors(async (req, res, next) => {
  const { name, description, type } = req.body;

  const mem = [req.user._id];

  // const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
  //   folder: "communityAvatars",
  //   width: 150,
  //   crop: "scale",
  // });

  // const myCloud1 = await cloudinary.v2.uploader.upload(req.body.banner, {
  //   folder: "communityBanners",
  //   width: 150,
  //   crop: "scale",
  // });

  const owner = await User.findById(req.user._id);

  if (!owner) {
    return next(new ErrorHandler("Invalid User", 401));
  }

  const community = await Community.create({
    name,
    description,
    type,
    owner,
    mods: mem,
    members: mem,
    // avatar: {
    //   public_id: myCloud.public_id,
    //   url: myCloud.secure_url,
    // },
    // banner: {
    //   public_id: myCloud1.public_id,
    //   url: myCloud1.secure_url,
    // },
  });

  // console.log(owner);
  owner.communities.push(community._id);
  owner.save();

  res.status(201).json({
    success: true,
    community,
  });
});

export const joinCommunity = catchAsyncErrors(async (req, res, next) => {
  const { inviteCode } = req.params;

  const community = await Community.findOne({ inviteCode });

  if (!community) {
    return next(new ErrorHandler("Invalid invite code", 401));
  }

  if (community.type === "paid") {
    return res.status(200).json({
      success: true,
      community,
    });
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    return next(new ErrorHandler("Invalid User", 401));
  }

  community.members.push(user);
  community.save();

  res.status(200).json({
    success: true,
    community,
  });
});

//get all communities
export const getAllCommunities = catchAsyncErrors(async (req, res, next) => {
  const resPerPage = 10;

  // Get the user ID from the token
  const userId = req.user.id;

  // Find the user using the ID and populate the "communities" field
  const user = await User.findById(userId).populate("communities");

  // Filter communities based on user's joined communities or type "free"
  const joinedCommunities = user.communities.map((community) => community._id);
  const apiFeatures = new ApiFeatures(
    Community.find({
      $or: [
        { _id: { $in: joinedCommunities } },
        { type: { $in: ["free", "paid"] } },
      ],
    }),
    req.query
  )
    .search()
    .filter();

  const communities = await apiFeatures.query;
  const communitiesCount = communities.length;

  apiFeatures.pagination(resPerPage);

  res.status(200).json({
    success: true,
    communities,
    communitiesCount,
  });
});

//get a community
export const getCommunity = catchAsyncErrors(async (req, res, next) => {
  const community = await Community.findById(req.params.id);

  if (!community) {
    return next(new ErrorHandler("Community not found", 404));
  }

  res.status(200).json({
    success: true,
    community,
  });
});
