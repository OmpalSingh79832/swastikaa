import { Schema, model } from "mongoose";

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    sector: {
      type: String,
      required: true,
    },
    sectorslug: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
    },
    rating: {
      type: Number,
      default: 0,
    },
    keyPoints: {
      type: [String],
      default: [],
    },
    executiondetails: [
      {
        name: { type: String },
        phone: { type: String },
        email: { type: String },
      },
    ],
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    categoryslug: {
      type: String,
    },
    status: {
      type: Number,
      default: 0,
    },
    // questions: [
    //   {
    //     question: { type: String, required: true },
    //     answer: { type: String, required: true },
    //   },
    // ],
  },
  { timestamps: true }
);

const projectModel = model("Project", projectSchema);

export default projectModel;
