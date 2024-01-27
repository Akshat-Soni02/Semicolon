import mongoose from "mongoose";

const { Schema, model } = mongoose;

const PostSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please enter your name"],
    unique: true,
  },
  content: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
  },
  image: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  community: {
    type: Schema.Types.ObjectId,
    ref: "Community",
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
});

export default model("Post", PostSchema);
