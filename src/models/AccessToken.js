import mongoose from "mongoose";
import { userTokenStatus } from "utils/constants";

const Schema = mongoose.Schema;

const accessTokenSchema = new Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    type: {
      type: String,
    },
    status: {
      type: String,
      required: true,
      default: userTokenStatus.UNUSED,
    },
  },
  { timestamps: true }
);

const AccessToken =
  mongoose.models.AccessToken ||
  mongoose.model("AccessToken", accessTokenSchema);

export default AccessToken;
