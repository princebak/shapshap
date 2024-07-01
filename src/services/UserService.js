"use server";

import bcrypt from "bcrypt";
import User from "models/User";
import { generateUserToken, generateUserCode } from "utils/codeGenerator";
import { dbConnector } from "utils/dbConnector";
import { codePrefix, userType } from "utils/constants";
import ActiveToken from "models/AccessToken";

const validateEmail = (email) => {
  const regExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  return regExp.test(email) && email.length <= 150;
};

const validateFullName = (fullName) => {
  return fullName.length <= 150;
};

const validatePassword = (password) => {
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

  await dbConnector();
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
    const generatedToken = await generateUserToken(codePrefix.EMAIL_VALIDATION);

    const newToken = new ActiveToken({
      owner: savedUser,
      token: generatedToken,
      activeDate: "",
    });
    const userToken = await newToken.save();
    console.log("Registration >>", { savedUser, userToken });
    return { ...savedUser._doc, msg: "Enregistrement reusie." };
  } catch (error) {
    console.log("Error >> ", error);
    return error;
  }
}
