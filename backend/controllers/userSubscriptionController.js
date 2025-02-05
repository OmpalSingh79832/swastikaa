import UserSubscription from "../models/userSubscriptionModel.js";
import Subscription from "../models/createSubscriptionModel.js";
import User from "../models/userModel.js";
import e from "express";

// Buy a subscription plan (User Side)
export const buySubscription = async (req, res) => {
  const { id } = req.user;
  console.log("id", id);
  const { subscriptionId } = req.body;
  console.log("object", subscriptionId);

  try {
    // Validate user
    const user = await User.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Validate subscription plan
    const subscription = await Subscription.findById(subscriptionId);
    console.log("subscription", subscription);
    if (!subscription) {
      return res
        .status(404)
        .json({ success: false, message: "Subscription plan not found" });
    }

    console.log("subscription.yearMonthTime", subscription.yearMonthTime);
    console.log("subscription.time", subscription.time);

    // Calculate the end date
    const endDate = new Date();

    if (subscription.yearMonthTime === "Year") {
      endDate.setFullYear(endDate.getFullYear() + subscription.time); // Add years
    } else if (subscription.yearMonthTime === "Month") {
      endDate.setMonth(endDate.getMonth() + subscription.time); // Add months
    } else if (subscription.yearMonthTime === "Day") {
      endDate.setDate(endDate.getDate() + subscription.time); // Add days
    } else {
      endDate.setDate(endDate.getDate() + subscription.time); // Default to days
    }

    console.log("endDate", endDate);

    // Create user subscription entry
    const newSubscription = new UserSubscription({
      userId: id,
      subscriptionId,
      projectQue: subscription.maxProject,
      startDate: new Date(),
      endDate,
      status: "pending",
      paymentStatus: "pending", // Payment should be completed later
    });

    await newSubscription.save();
    res.status(201).json({
      success: true,
      message: "Subscription purchased successfully",
      data: newSubscription,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateUserSubscription = async (req, res) => {
  const { id } = req.user;

  try {
    const userSubscription = await UserSubscription.find({ userId: id });
    res.status(200).json(userSubscription);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
