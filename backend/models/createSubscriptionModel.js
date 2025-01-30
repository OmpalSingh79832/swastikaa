import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    adminId: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" }, // Admin who created the plan
    name: { type: String, required: true }, // Plan name (e.g., Freelancer, Startup, Enterprise)
    dec: { type: String, required: true }, // Plan name (e.g., Freelancer, Startup, Enterprise)
    price: { type: Number, required: true }, // Price per month
    features: [{ type: String }], // List of features included in the plan
    time: { type: String }, // Support response time
    responseTime: { type: String }, // Support response time
    maxProject: { type: Number }, // Number of products allowed
    status: { type: String, default: "active" }, // Status of the plan (e.g., active, inactive
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Subscription = mongoose.model("Subscription", subscriptionSchema);
export default Subscription;
