import bcrypt from "bcrypt";
import User from "models/User";
import { generateUserCode } from "utils/codeGenerator";
import { dbConnector } from "utils/dbConnector";
import { userType } from "utils/constants";
import { NextResponse } from "next/server";

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

const validateForm = async (fullName, email, password) => {
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

  await dbConnector();
  const userByEmail = await User.findOne({ email: email });

  if (userByEmail) {
    return {
      error: "Change the email please, there is some user with the same.",
    };
  }

  return null;
};

export async function POST() {
  const data = req.body;

  const { name, email, phone, password } = data;

  const validateFormRes = await validateForm(name, email, password);
  if (validateFormRes) {
    return NextResponse.json(validateFormRes, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const codePrefix = data.type === userType.MERCHANT ? "MCT" : "BYR";
  const generatedCode = await generateUserCode(codePrefix);

  const goodData = {
    ...data,
    code: generatedCode,
    password: hashedPassword,
  };

  console.log("goodData >> ", goodData);

  const newUser = new User(goodData);

  try {
    const savedUser = await newUser.save();
    return NextResponse.json(
      { ...savedUser._doc, msg: "Enregistrement reusie." },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error >> ", error);
    return NextResponse.json(error, { status: 500 });
  }
}
