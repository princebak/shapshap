import mongoose from "mongoose";
import { userStatus, userType } from "utils/constants";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
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
    email: {
      type: String,
      required: true,
      unique: true,
      maxLength: 200,
    },
    phone: {
      type: String,
      required: true,
      maxLength: 15,
    },
    address: {
      type: String,
    },
    country: {
      type: String,
    },
    type: {
      type: String,
      required: true,
      default: userType.MERCHANT,
    },
    shop: {
      type: {
        name: {
          type: String,
          required: true,
          maxLength: 200,
        },
        phone: {
          type: String,
          required: true,
          maxLength: 20,
        },
        description: {
          type: String,
          required: true,
          maxLength: 250,
        },
        address: {
          type: String,
          required: true,
          maxLength: 250,
        },
        profilPicUrl: {
          type: String,
          required: true,
          maxLength: 250,
        },
      },
      required: false,
    },
    password: {
      type: String,
      required: true,
      minLength: 5,
      select: false,
    },
    profilPicUrl: { type: String },
    status: {
      type: String,
      required: true,
      default: userStatus.CREATED,
    },
  },
  { timestamps: true }
);

const User = mongoose.models?.User || mongoose.model("User", userSchema);

export default User;
