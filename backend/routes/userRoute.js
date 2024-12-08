import express from "express";

import {
  registerUser,
  loginUser,
  getCurrentUser,
} from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Register Route
router.post("/register", registerUser);

// Login Route
router.post("/login", loginUser);

// Get Current User (Protected)
router.get("/me", authMiddleware, getCurrentUser);

export default router;
