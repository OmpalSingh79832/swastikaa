// const { Schema, model } = require("mongoose");
import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      default: "admin",
    },
    status: {
      type: String,
      default: "active",
    },

    // method: {
    //   type: String,
    //   required: true,
    // },
    image: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

adminSchema.index(
  {
    name: "text",
    email: "text",
  },
  {
    weights: {
      name: 5,
      email: 4,
    },
  }
);

const adminModel = mongoose.model("admin", adminSchema);

export default adminModel;
