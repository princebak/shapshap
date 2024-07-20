import Product from "models/Product";
import User from "models/User";
import { dbConnector } from "./dbConnector";
import MyOrder from "models/MyOrder";
import MerchantOrder from "models/MerchantOrder";

export const generateUserCode = async (prefix) => {
  await dbConnector();
  let generatedCode = "";
  try {
    while (generatedCode == "") {
      console.log("Prefix >> ", prefix);
      generatedCode = generateCode(prefix);
      let existingCode = await User.findOne({ code: generatedCode });
      if (existingCode) {
        generatedCode = "";
      }
    }
  } catch (error) {
    console.log("generateUserCode error >> " + error);
  }

  return generatedCode;
};

export const generateOrderCode = async () => {
  await dbConnector();
  let generatedCode = "";
  try {
    while (generatedCode == "") {
      generatedCode = generateCode("ODR");
      let existingCode = await MyOrder.findOne({ code: generatedCode });
      if (existingCode) {
        generatedCode = "";
      }
    }
  } catch (error) {
    console.log("generateOrderCode error >> " + error);
  }

  return generatedCode;
};

export const generateMerchantOrderCode = async () => {
  await dbConnector();
  let generatedCode = "";
  try {
    while (generatedCode == "") {
      generatedCode = generateCode("MOR");
      let existingCode = await MerchantOrder.findOne({ code: generatedCode });
      if (existingCode) {
        generatedCode = "";
      }
    }
  } catch (error) {
    console.log("generateMerchantOrderCode error >> " + error);
  }

  return generatedCode;
};

export const generateProductCode = async () => {
  await dbConnector();

  let generatedCode = "";
  try {
    while (generatedCode == "") {
      generatedCode = generateCode("PRD");
      let existingCode = await Product.findOne({ code: generatedCode });
      if (existingCode) {
        generatedCode = "";
      }
    }
  } catch (error) {
    console.log("generateUserCode error >> " + error);
  }

  return generatedCode;
};

function generateCode(prefix) {
  let generatedCode = prefix;
  let letters =
    "ABCDEFGHIJKLMNPQRSTUVWXYZABCDEFGHIJKLMNPQRSTUVWXYZABCDEFGHIJKLMNPQRSTUVWXYZ";
  let numbers = "012345678901234567890123456789";

  for (let i = 0; i < 5; i++) {
    let randomIndex = Math.floor(Math.random() * numbers.length);
    generatedCode += numbers.charAt(randomIndex);
  }

  for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * letters.length);
    generatedCode += letters.charAt(randomIndex);
  }

  return generatedCode;
}
