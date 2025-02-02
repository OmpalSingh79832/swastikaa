import mongoose from "mongoose";

const userSubscriptionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    subscriptionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subscription",
      required: true,
    },
    projectQue: { type: Number, default: 0 }, // Payment status
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, required: true }, // End date based on duration
    status: { type: String, default: "pending" }, // Status: active, expired, cancelled
    paymentStatus: { type: String, default: "pending" }, // Payment status
  },
  { timestamps: true }
);

const UserSubscription = mongoose.model(
  "UserSubscription",
  userSubscriptionSchema
);
export default UserSubscription;
