import ErrorHandler from "../Utils/errorHandler.js";
import User from "../models/userModel.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import Post from "../models/postModel.js";
import Community from "../models/communityModel.js";
import cloudinary from "cloudinary";

//create a post
export const createPost = catchAsyncErrors(async (req, res, next) => {
  const myCloud = await cloudinary.v2.uploader.upload(req.body.image, {
    folder: "posts",
    width: 150,
    crop: "scale",
  });

  const { title, content, community } = req.body;
  const post = await Post.create({
    title,
    content,
    image: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },
  });
});
