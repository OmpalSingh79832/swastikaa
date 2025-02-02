import express from "express";
import {
  createSubscription,
  getSubscriptions,
  getSubscriptionById,
  updateSubscription,
  deleteSubscription,
} from "../../controllers/dashboard/crateSubscriptonController.js";
import { adminMiddleware } from "../../middleware/adminMiddleware.js";

const router = express.Router();

router.post("/create/subscription", adminMiddleware, createSubscription);
router.get("/subscription/get-all", adminMiddleware, getSubscriptions);
router.get("/get-subscription-byId/:id", adminMiddleware, getSubscriptionById);
router.put("/update-subscription/:id", updateSubscription);
router.delete("/delete-subscription/:id", deleteSubscription);

export default router;
