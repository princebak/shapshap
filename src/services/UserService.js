"use server";

import bcrypt, { compare } from "bcrypt";
import User from "models/User";
import { generateUserCode } from "utils/codeGenerator";
import { dbConnector } from "utils/dbConnector";
import {
  codePrefix,
  emailMetadata,
  logMessage,
  userStatus,
  userTokenStatus,
  userType,
} from "utils/constants";
import { sendEmailWithEmailJs } from "./NotificationService";
import AccessToken from "models/AccessToken";
import { dbObjectToJsObject, isTheUserTokenValid } from "utils/utilFunctions";

const validateEmail = (email) => {
  const regExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (email === "updateUser") {
    return true;
  }

  return regExp.test(email) && email.length <= 150;
};

const validateFullName = (fullName) => {
  return fullName.length <= 150;
};

const validatePassword = (password) => {
  if (password === "updateUser") {
    return true;
  }
  return password.length >= 5;
};

const validatePhone = (phone) => {
  return phone.length <= 20;
};

const validateForm = async (fullName, email, phone, password) => {
  if (!validateFullName(fullName)) {
    return { error: "Invalid name, too long." };
  }

  if (!validateEmail(email)) {
    return { error: "The email is invalid" };
  }

  if (!validatePassword(password)) {
    return {
      error: "The passwor is invalid",
    };
  }

  if (!validatePhone(phone)) {
    return {
      error: "The phone is invalid",
    };
  }

  const userByEmail = await User.findOne({ email: email });

  if (userByEmail) {
    return {
      error: "Change the email please, there is some user with the same.",
    };
  }

  return null;
};

export async function register(data) {
  const { name, email, phone, password } = data;
  await dbConnector();

  const validateFormRes = await validateForm(name, email, phone, password);

  if (validateFormRes) {
    return validateFormRes;
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const prefix =
    data.type === userType.MERCHANT ? codePrefix.MERCHANT : codePrefix.BUYER;
  const generatedCode = await generateUserCode(prefix);

  const goodData = {
    ...data,
    code: generatedCode,
    password: hashedPassword,
  };

  const newUser = new User(goodData);

  try {
    const savedUser = await newUser.save();

    await sendEmailWithEmailJs({
      receiver: savedUser,
      subject: emailMetadata.SUBJECT_EMAIL_VALIDATION,
      validationLink: emailMetadata.EMAIL_VALIDATION_LINK,
    });

    const { _id, name, email } = savedUser._doc;

    return { _id, name, email };
  } catch (error) {
    console.log("Error >> ", error);
    return { error: "Server error" };
  }
}

export async function authenticate(data) {
  await dbConnector();

  console.log("authenticating...", data);

  const user = await User.findOne({
    email: data.email,
  }).select("+password");

  if (!user) {
    throw new Error("Email is not registered");
  }

  const { password, ...userWithoutPassword } = user._doc;

  if (user.status === userStatus.CREATED) {
    await sendEmailWithEmailJs({
      receiver: user,
      subject: emailMetadata.SUBJECT_EMAIL_VALIDATION,
      validationLink: emailMetadata.EMAIL_VALIDATION_LINK,
    });

    throw new Error(logMessage.USER_NOT_ACTIVE);
  }

  const isPasswordCorrect = await compare(data.password, user.password);

  if (!isPasswordCorrect) {
    throw new Error("Password is incorrect");
  }

  return userWithoutPassword;
}

export async function updateUser(data) {
  const { name, phone, address, profilPicUrl } = data;

  await dbConnector();

  const validateFormRes = await validateForm(
    // TODO set a good way to validate for updateUser
    name,
    "updateUser",
    phone,
    "updateUser"
  ); // TODO add shop fields

  if (validateFormRes) {
    return validateFormRes; // Text response if invalid
  }

  try {
    const savedUser = await User.findByIdAndUpdate(
      data._id,
      {
        ...data,
        status: userStatus.VALIDATED, // TODO when the block user flow is done this has to be conditional (only if user is active)
      },
      { new: true }
    );

    console.log("savedUser .. ", savedUser);

    return dbObjectToJsObject(savedUser._doc);
  } catch (error) {
    console.log("Error >> ", error);
    return { error: "Server error" };
  }
}

export async function changePassword({ token, newPassword }) {
  try {
    await dbConnector();

    const userAccessToken = await AccessToken.findById(token).populate("owner");

    const user = userAccessToken.owner;

    const hashedPassword = await bcrypt.hash(newPassword, 12);

    if (userAccessToken && userAccessToken.status === userTokenStatus.PENDING) {
      await AccessToken.findByIdAndUpdate(userAccessToken._id, {
        status: userTokenStatus.USED,
      });

      await User.findByIdAndUpdate(user._id, { password: hashedPassword });

      return { msg: "Password changed with success !" };
    } else {
      return { error: "Token invalid, the reset password process failed !" };
    }
  } catch (error) {
    return { error: "Sever Error" };
  }
}

export async function sendResetPwLink(email) {
  try {
    await dbConnector();

    const user = await User.findOne({ email: email });

    if (user) {
      const res = await sendEmailWithEmailJs({
        receiver: user,
        subject: emailMetadata.SUBJECT_RESET_PW_VALIDATION,
        validationLink: emailMetadata.RESET_PW_VALIDATION_LINK,
      });

      return { msg: "Reset password link sent with success !" };
    } else {
      return { error: "This email address is not registered !" };
    }
  } catch (error) {
    return { error: "Server error !" };
  }
}

export async function getRefusedAccessReason(userToken) {
  if (!userToken) {
    return { message: "Unauthorized, a user token is required !", status: 401 };
  }

  await dbConnector();

  let existingToken = null;

  try {
    existingToken = await AccessToken.findById(userToken);
  } catch (error) {
    console.log("Error, existingToken ", existingToken);
    return {
      message: "Bad request!",
      status: 400,
    };
  }

  if (!existingToken) {
    return {
      message: "Unauthorized, the user token doesn't exist!",
      status: 401,
    };
  }

  if (!isTheUserTokenValid(existingToken)) {
    console.log("Error, existingToken invalid", existingToken);

    await AccessToken.findByIdAndDelete(existingToken._id);

    return {
      message: "Unauthorized, the user token isn't valid!",
      status: 401,
    };
  }

  // refresh the token
  await AccessToken.findByIdAndUpdate(existingToken._id, {
    status: userTokenStatus.REFRESHED,
  });

  return null;
}