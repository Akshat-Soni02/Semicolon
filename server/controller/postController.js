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

  const author = req.user;
  if (!author) {
    return next(new ErrorHandler("Please login first", 401));
  }

  const { title, content, community } = req.body;
  const post = await Post.create({
    title,
    content,
    author,
    community,
    image: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },
  });

  const community1 = await Community.findById(community);
  community1.posts.push(post._id);
  community1.save();

  author.posts.push(post._id);
  author.save();

  res.status(201).json({
    success: true,
    post,
  });
});

//like a post
export const likePost = catchAsyncErrors(async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  const user = req.user;

  if (!post) {
    return next(new ErrorHandler("Post not found", 404));
  }

  if (post.likes.includes(user._id)) {
    return next(new ErrorHandler("You already liked this post", 400));
  }

  post.likes.push(user._id);
  post.save();

  const author = await User.findById(post.author);
  author.points += 10;
  author.save();

  if (post.dislikes.includes(user._id)) {
    post.dislikes.pull(user._id);
    post.save();
    author.points += 5;
  }

  author.save();

  res.status(200).json({
    success: true,
    post,
  });
});

//dislike a post
export const dislikePost = catchAsyncErrors(async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  const user = req.user;

  if (!post) {
    return next(new ErrorHandler("Post not found", 404));
  }

  if (post.dislikes.includes(user._id)) {
    return next(new ErrorHandler("You already disliked this post", 400));
  }

  post.dislikes.push(user._id);
  post.save();

  const author = await User.findById(post.author);
  author.points -= 5;

  if (post.likes.includes(user._id)) {
    post.likes.pull(user._id);
    post.save();
    author.points -= 10;
  }

  author.save();

  res.status(200).json({
    success: true,
    post,
  });
});

//Delete a post
export const deletePost = catchAsyncErrors(async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  const user = req.user;

  if (!post) {
    return next(new ErrorHandler("Post not found", 404));
  }

  if (post.author != user._id) {
    return next(
      new ErrorHandler("You are not authorized to delete this post", 401)
    );
  }

  post.isDeleted = true;
  post.save();

  res.status(200).json({
    success: true,
    post,
  });
});

//Get all comments of a post
export const getComments = catchAsyncErrors(async (req, res, next) => {
  const post = await Post.findById(req.params.id).populate("comments");

  if (!post) {
    return next(new ErrorHandler("Post not found", 404));
  }

  res.status(200).json({
    success: true,
    comments: post.comments,
  });
});

//Get post details
export const getPost = catchAsyncErrors(async (req, res, next) => {
  const post = await Post.findById(req.params.id).populate("author");

  if (!post) {
    return next(new ErrorHandler("Post not found", 404));
  }

  res.status(200).json({
    success: true,
    post,
  });
});
