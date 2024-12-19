import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const sectorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

sectorSchema.index({
  name: "text",
});

const sectorModel = mongoose.model("sector", sectorSchema);

export default sectorModel;
