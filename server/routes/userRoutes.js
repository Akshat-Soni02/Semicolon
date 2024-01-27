import express from "express";
import {
  registerUser,
  loginUser,
  logout,
  forgotpassword,
  verifyotp,
  resetPassword,
  getUserDetails,
  getCount,
  addAdmin,
} from "../controller/userController.js"; // Use the .mjs file extension for ESM
import { isAuthenticatedUser } from "../middleware/auth.js"; // Use the .mjs file extension for ESM

const router = express.Router();

// Routes
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/sendotp").post(forgotpassword);
router.route("/verifyotp").post(verifyotp);
router.route("/resetpassword/:token").post(resetPassword);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/getcount").get(getCount);
// router.route("/add").post(addAdmin);

export default router;
