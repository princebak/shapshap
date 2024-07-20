import mongoose from "mongoose";
import { fees, orderStatus } from "utils/constants";

const Schema = mongoose.Schema;

const myOrderSchema = new Schema(
  {
    code: { type: String, required: true, maxLength: 20 },
    status: { type: String, required: true, default: orderStatus.CREATED },
    products: [],
    shippingAddress: {
      type: {
        fullname: { type: String, required: true, maxLength: 150 },
        email: { type: String, required: true, maxLength: 250 },
        phone: { type: String, required: true, maxLength: 20 },
        zipCode: { type: String, maxLength: 30 },
        address1: { type: String, required: true, maxLength: 250 },
        address2: { type: String, maxLength: 250 },
        company: { type: String, maxLength: 250 },
        country: {
          type: {
            label: { type: String, required: true, maxLength: 250 },
            value: { type: String, required: true, maxLength: 50 },
          },
          required: true,
        },
      },
      required: true,
    },
    grossTotalPrice: { type: Number },
    totalDiscount: { type: Number },
    shippingFee: { type: Number, default: fees.SHIPPING },
    tax: { type: Number, default: fees.TAX },
    netTotalPrice: { type: Number },

    billingAddress: {
      type: {
        fullname: { type: String, required: true, maxLength: 150 },
        email: { type: String, required: true, maxLength: 250 },
        phone: { type: String, required: true, maxLength: 20 },
        zipCode: { type: String, maxLength: 30 },
        address1: { type: String, required: true, maxLength: 250 },
        address2: { type: String, maxLength: 250 },
        company: { type: String, maxLength: 250 },
        country: {
          type: {
            label: { type: String, required: true, maxLength: 250 },
            value: { type: String, required: true, maxLength: 50 },
          },
          required: true,
        },
      },
      required: true,
    },
    note: { type: String, maxLength: 250 },
    paymentMethod: { type: String, required: true, maxLength: 150 },
  },
  { timestamps: true }
);

const MyOrder = mongoose.models?.MyOrder || mongoose.model("MyOrder", myOrderSchema);

export default MyOrder;
