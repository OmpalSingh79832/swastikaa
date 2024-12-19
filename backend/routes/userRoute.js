import express from "express";
import multer from "multer";
// import authMiddleware from "../middleware/authMiddleware.js";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  registerUser,
  loginUser,
  getCurrentUser,
  profile_update,
  changePassword,
} from "../controllers/userController.js";

const upload = multer({ dest: "uploads/user" });

const router = express.Router();

// Register Route
router.post("/register", registerUser);
router.post(
  "/user/profile-update",
  upload.single("image"),
  authMiddleware,
  profile_update
);

// Login Route
router.post("/login", loginUser);

// password change
router.post("/user/change_password", changePassword);

// Get Current User (Protected)
router.get("/me", authMiddleware, getCurrentUser);

export default router;
