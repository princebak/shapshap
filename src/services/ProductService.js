"use server";

import Product from "models/Product";
import { generateProductCode } from "utils/codeGenerator";
import { dbConnector } from "utils/dbConnector";
import { dbObjectToJsObject } from "utils/utilFunctions";

export async function findAll() {
  await dbConnector();
  const products = await Product.find();
  console.log("products", products);
  return dbObjectToJsObject(products);
}

export async function findAllByUserId(userId) {
  await dbConnector();
  console.log("userId >> ", userId);
  const products = await Product.find({ owner: userId });
  console.log("products", products);
  return dbObjectToJsObject(products);
}

export async function findProductByCode(code) {
  await dbConnector();
  const prod = await Product.findOne({ code: code });
  return dbObjectToJsObject(prod);
}

export async function create(product) {
  try {
    await dbConnector();

    const code = await generateProductCode();
    const newProduct = new Product({ ...product, code: code, _id: null });
    const savedProduct = await newProduct.save();

    return dbObjectToJsObject(savedProduct._doc);
  } catch (error) {
    console.log("Product Creation error ", error);

    return { error: "server error" };
  }
}

export async function update(product) {
  try {
    await dbConnector();

    const { _id, ...updatingProduct } = product;
    const updatedProduct = await Product.findByIdAndUpdate(_id, {
      ...updatingProduct,
    });

    return dbObjectToJsObject(updatedProduct._doc);
  } catch (error) {
    console.log("Product update error ", error);
    return { error: "server error" };
  }
}
