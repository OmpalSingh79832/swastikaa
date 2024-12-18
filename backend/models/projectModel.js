import { Schema, model } from "mongoose";

const projectSchema = new Schema(
  {
    title: {
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
      required: true,
    },
    prepsole: {
      type: String, // Stores the URL of the uploaded PDF
      required: false,
    },
    rating: {
      type: Number,
      default: 0,
    },
    keyPoints: {
      type: [String],
      default: [],
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
