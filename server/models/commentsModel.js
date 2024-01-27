import mongoose from "mongoose";

const { Schema, model } = mongoose;

const CommentSchema = new Schema({
  content: {
    type: String,
    required: [true, "Please enter your name"],
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "Comment",
    default: null,
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  dislikes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export default model("Comment", CommentSchema);
