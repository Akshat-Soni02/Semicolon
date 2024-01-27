import express from "express";
import {
  createPost,
  likePost,
  dislikePost,
  deletePost,
  getPost,
} from "../controller/postController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();

// Routes
router.route("/create").post(isAuthenticatedUser, createPost);
router.route("/like/:id").put(isAuthenticatedUser, likePost);
router.route("/dislike/:id").put(isAuthenticatedUser, dislikePost);
router.route("/delete/:id").delete(isAuthenticatedUser, deletePost);
router.route("/:id").get(getPost);

export default router;
