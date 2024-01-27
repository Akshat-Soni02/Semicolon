import express from "express";
import {
  createComment,
  likeComment,
  dislikeComment,
  deleteComment,
  getComment,
} from "../controller/commentController";

const router = express.Router();

// Routes
router.route("/comment/create").post(createComment);
router.route("/comment/:id").get(getComment);
router.route("/comment/:id/like").patch(likeComment);
router.route("/comment/:id/dislike").patch(dislikeComment);
router.route("/comment/:id/delete").delete(deleteComment);

export default router;
