import mongoose from "mongoose";
import { fees, paymentStatus } from "utils/constants";

const Schema = mongoose.Schema;

const merchantOrderSchema = new Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    mainOrder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MyOrder",
    },
    code: { type: String, required: true, maxLength: 20 },
    status: { type: String, required: true, default: paymentStatus.CREATED },
    products: [],
    grossTotalPrice: { type: Number },
    totalDiscount: { type: Number },
    commission: { type: Number, default: fees.COMMISSION },
    netTotalPrice: { type: Number },
  },
  { timestamps: true }
);

const MerchantOrder =
  mongoose.models?.MerchantOrder ||
  mongoose.model("MerchantOrder", merchantOrderSchema);

export default MerchantOrder;
