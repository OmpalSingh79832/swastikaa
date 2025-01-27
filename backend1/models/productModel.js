const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    sellerId: {
      type: Schema.ObjectId,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      // required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      // required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    Shippingcharge: {
      type: String,
    },
    Shippingtime: {
      type: String,
    },
    shopName: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    weight: {
      type: Number,
    },
    unit: {
      type: String,
      enum: ["GM", "KG"],
    },
    points: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

productSchema.index(
  {
    name: "text",
    category: "text",
    brand: "text",
    description: "text",
  },
  {
    weights: {
      name: 5,
      category: 4,
      brand: 3,
      description: 2,
    },
  }
);

module.exports = model("products", productSchema);
