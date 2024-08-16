import { Router } from "express";
import {
  changeCurrentPassword,
  getUserChannelProfile,
  getWatchHistory,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  updateUserAvatar,
} from "../controller/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

//register
router.route("/register").post(
  //using fields instead of upload.single-> upload multiple file at different fields
  //if we use upload.array -> then it will store file in one single field
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

router.route("/logout").post(verifyJWT, logoutUser);

router.route("/refresh-token").post(refreshAccessToken);

router.route("/change-password").post(verifyJWT, changeCurrentPassword);

//update user avatar
router
  .route("/update-avatar")
  .patch(verifyJWT, upload.single("avatar"), updateUserAvatar);

//getting username from params
router.route("/c/:username").get(verifyJWT, getUserChannelProfile);

//watch history
router.route("/history").get(verifyJWT, getWatchHistory);

export default router;
