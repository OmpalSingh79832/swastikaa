import express from "express";
import { buySubscription } from "../controllers/userSubscriptionController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// User buys a subscription plan
router.post("/buy/subscription", authMiddleware, buySubscription);

export default router;
