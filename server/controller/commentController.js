import ErrorHandler from "../Utils/errorHandler.js";
import User from "../models/userModel.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import Post from "../models/postModel.js";
import Community from "../models/communityModel.js";
import Comment from "../models/commentsModel.js";

//create a comment
export const createComment = catchAsyncErrors(async (req, res, next) => {
  const author = req.user;
  if (!author) {
    return next(new ErrorHandler("Please login first", 401));
  }

  const { content, post, parent } = req.body;
  const comment = await Comment.create({
    content,
    author,
    post,
    parent,
  });

  const post1 = await Post.findById(post);
  post1.comments.push(comment._id);
  post1.save();

  author.comments.push(comment._id);
  author.save();

  res.status(201).json({
    success: true,
    comment,
  });
});

//like a comment
export const likeComment = catchAsyncErrors(async (req, res, next) => {
  const comment = await Comment.findById(req.params.id);
  const user = req.user;

  if (!comment) {
    return next(new ErrorHandler("Comment not found", 404));
  }

  if (comment.likes.includes(user._id)) {
    return next(new ErrorHandler("You already liked this comment", 400));
  }

  comment.likes.push(user._id);
  comment.save();

  const author = await User.findById(comment.author);
  author.points += 5;
  author.save();

  if (comment.dislikes.includes(user._id)) {
    comment.dislikes.pull(user._id);
    comment.save();
    author.points += 3;
  }

  author.save();

  res.status(200).json({
    success: true,
    comment,
  });
});

//dislike a comment
export const dislikeComment = catchAsyncErrors(async (req, res, next) => {
  const comment = await Comment.findById(req.params.id);
  const user = req.user;

  if (!comment) {
    return next(new ErrorHandler("Comment not found", 404));
  }

  if (comment.dislikes.includes(user._id)) {
    return next(new ErrorHandler("You already disliked this comment", 400));
  }

  comment.dislikes.push(user._id);
  comment.save();

  const author = await User.findById(comment.author);
  author.points -= 3;
  author.save();

  if (comment.likes.includes(user._id)) {
    comment.likes.pull(user._id);
    comment.save();
    author.points -= 5;
  }

  author.save();

  res.status(200).json({
    success: true,
    comment,
  });
});

// delete a comment
export const deleteComment = catchAsyncErrors(async (req, res, next) => {
  const comment = await Comment.findById(req.params.id);
  const user = req.user;

  if (!comment) {
    return next(new ErrorHandler("Comment not found", 404));
  }

  if (comment.author.toString() !== user._id.toString()) {
    return next(
      new ErrorHandler("You are not authorized to delete this comment", 401)
    );
  }

  const post = await Post.findById(comment.post);
  post.comments.pull(comment._id);
  post.save();

  const author = await User.findById(comment.author);
  author.comments.pull(comment._id);
  author.save();

  await comment.remove();

  res.status(200).json({
    success: true,
    comment,
  });
});

//get comment
export const getComment = catchAsyncErrors(async (req, res, next) => {
  const comment = await Comment.findById(req.params.id);

  if (!comment) {
    return next(new ErrorHandler("Comment not found", 404));
  }

  res.status(200).json({
    success: true,
    comment,
  });
});
