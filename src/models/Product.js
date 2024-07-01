import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
      maxLength: 150,
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
      type: Number,
    },
    discount: {
      type: Number,
    },
    images: [],
    category: [],
    tags: [],
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
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
