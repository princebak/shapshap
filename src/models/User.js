import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true,
      unique: true,
      maxLength: 150
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxLength: 200
    },
    phone: {
      type: String,
      required: true,
      maxLength: 15
    },
    gender: {
      type: String
    },
    dob: {
      type: Date
    },
    address: {
      type: String
    },
    type: {
      type: String,
      required: true,
      default: 'client'
    },
    password: {
      type: String,
      required: true,
      minLength: 5,
      select: false
    },
    profilPicUrl: { type: String },
    status: {
      type: String,
      required: true,
      default: 'created'
    }
  },
  { timestamps: true }
)

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User
