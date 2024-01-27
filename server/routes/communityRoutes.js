import express from "express";
import {
  createCommunity,
  getAllCommunities,
  getCommunity,
  joinCommunity,
} from "../controller/communityController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();

// Routes
router.route("/community/create").post(isAuthenticatedUser, createCommunity);
router.route("/join/:inviteCode").post(isAuthenticatedUser, joinCommunity);
router.route("/communities").get(isAuthenticatedUser, getAllCommunities);
router.route("/communities/:id").get(isAuthenticatedUser, getCommunity);

export default router;
