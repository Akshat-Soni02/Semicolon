import mongoose from "mongoose";
import { customAlphabet } from "nanoid";

const { Schema, model } = mongoose;

const CommunitySchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    unique: true,
  },
  fee: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    required: [true, "Please enter your email"],
  },
  type: {
    type: String,
    required: true,
  },
  // avatar: {
  //   public_id: {
  //     type: String,
  //     required: true,
  //   },
  //   url: {
  //     type: String,
  //     required: true,
  //   },
  // },
  // banner: {
  //   public_id: {
  //     type: String,
  //     required: true,
  //   },
  //   url: {
  //     type: String,
  //     required: true,
  //   },
  // },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  mods: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  inviteCode: {
    type: String,
  },
});

CommunitySchema.pre("save", async function (next) {
  if (!this.inviteCode) {
    // Function to generate a random referral code
    const generateRandomReferralCode = customAlphabet(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      6
    );
    this.inviteCode = generateRandomReferralCode();
  }
  next();
});

export default model("Community", CommunitySchema);
