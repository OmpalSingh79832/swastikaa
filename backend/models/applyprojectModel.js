import mongoose from "mongoose";

const { Schema } = mongoose;

const applyProjectSchema = new Schema(
  {
    projectId: {
      type: String,
      required: true,
    },
    userInfo: {
      type: [String],
      required: true,
    },
    userBudget: {
      type: Number,
      required: true,
    },
    preposal: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const ApplyProject = mongoose.model("ApplyProject", applyProjectSchema);

export default ApplyProject;
