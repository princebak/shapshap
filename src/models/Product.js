import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      maxLength: 150,
    },
    description: {
      type: String,
      required: true,
      maxLength: 250,
    },
    brand: {
      type: String,
      maxLength: 200,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
      maxLength: 50,
    },
    discount: {
      type: Number,
      default: 0,
    },
    images: [],
    categories: [],
    tags: {
      type: String,
      maxLength: 150,
    },
    unit: { type: String },
    rating: {
      type: Number,
    },
    status: {
      type: String,
      required: true,
      default: "created",
    },
  },
  { timestamps: true }
);

const Product =
  mongoose.models?.Product || mongoose.model("Product", productSchema);

export default Product;
