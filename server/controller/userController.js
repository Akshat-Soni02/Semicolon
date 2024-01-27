import ErrorHandler from "../Utils/errorHandler.js";
import User from "../models/userModel.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import sendToken from "../Utils/jwtToken.js";
import { sendEmail } from "../Utils/sendEmail.js";
import crypto from "crypto";
import Community from "../models/communityModel.js";
import cloudinary from "cloudinary";

// Register a user => /api/v1/register
export const registerUser = catchAsyncErrors(async (req, res, next) => {
  // const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
  //   folder: "avatars",
  //   width: 150,
  //   crop: "scale",
  // });

  const all = await Community.findOne({
    name: "all",
  });

  // console.log(all);

  const { username, email, password } = req.body;
  const user = await User.create({
    username,
    email,
    password,
    communities: [all._id],
    // avatar: {
    //   public_id: myCloud.public_id,
    //   url: myCloud.secure_url,
    // },
  });

  if (all) {
    all.members.push(user._id);
    all.save();
  }
  sendToken(user, 201, res);
});

// Login User => /api/v1/login
export const loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // Checks if email and password are entered by the user
  if (!email || !password) {
    return next(new ErrorHandler("Please enter email & password", 400));
  }

  // Finding the user in the database
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  // Checks if the password is correct or not
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  sendToken(user, 200, res);
});

// Logout user => /api/v1/logout
export const logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out",
  });
});

// Forgot password => /api/v1/forgotpassword
export const forgotpassword = catchAsyncErrors(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({
    email,
  });

  if (!user) {
    return next(new ErrorHandler("User not found with this email", 404));
  }

  const otp = Math.floor(100000 + Math.random() * 900000);
  // const resetToken = user.getResetPasswordToken();
  user.otp = otp;
  await user.save({ validateBeforeSave: false });

  try {
    await sendEmail({
      email: user.email,
      subject: "OTP Verification",
      text: `Your OTP for Resetting your Password is ${otp}`,
    });
    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email}`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    user.otp = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new ErrorHandler(error.message, 500));
  }
});

// Verify OTP
export const verifyotp = catchAsyncErrors(async (req, res, next) => {
  let { email, otp } = req.body;
  otp = parseInt(otp);
  const user = await User.findOne({
    email,
  });

  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });

  if (user.otp != otp) {
    return next(new ErrorHandler("OTP is not correct", 404));
  }

  res.status(200).json({
    success: true,
    token: resetToken,
  });
});

// Reset Password => /api/v1/password/reset/:token
export const resetPassword = catchAsyncErrors(async (req, res, next) => {
  // Hash URL token
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
  });

  if (!user) {
    return next(
      new ErrorHandler(
        "Password reset token is invalid or has been expired",
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password does not match", 400));
  }

  // Setup new password
  user.password = req.body.password;

  user.otp = undefined;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();

  sendToken(user, 200, res);
});

// Get currently logged-in user details => /api/v1/me
export const getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({
    success: true,
    user,
  });
});

//change title of user => /api/v1/me/title
export const changeTitle = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  const title = req.body.title;
  user.title = title;
  await user.save();
  res.status(200).json({
    success: true,
    user,
  });
});
