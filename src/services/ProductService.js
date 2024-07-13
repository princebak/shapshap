"use server";

import Product from "models/Product";
import { generateProductCode } from "utils/codeGenerator";
import { productStatus } from "utils/constants";
import { dbConnector } from "utils/dbConnector";
import { dbObjectToJsObject } from "utils/utilFunctions";

export async function findAll() {
  try {
    await dbConnector();
    const products = await Product.find();
    return dbObjectToJsObject(products);
  } catch (error) {
    console.log("error >> ", error);
    return { error: "Server error" };
  }
}

export async function findOneByCode(code) {
  try {
    await dbConnector();
    const product = await Product.findOne({ code: code });
    return dbObjectToJsObject(product);
  } catch (error) {
    console.log("error >> ", error);
    return { error: "Server error" };
  }
}

export async function findAllPublished() {
  try {
    await dbConnector();
    const products = await Product.find({ status: productStatus.PUBLISHED });
    return dbObjectToJsObject(products);
  } catch (error) {
    console.log("error >> ", error);
    return { error: "Server error" };
  }
}

export async function findAllByUserId(userId) {
  try {
    await dbConnector();
    const products = await Product.find({ owner: userId });
    return dbObjectToJsObject(products);
  } catch (error) {
    console.log("findAllByUserId error >> ", error);
    return { error: "Server error" };
  }
}

export async function findProductByCode(code) {
  try {
    await dbConnector();
    const prod = await Product.findOne({ code: code });
    return dbObjectToJsObject(prod);
  } catch (error) {
    console.log("findProductByCode error >> ", error);
    return { error: "Server error" };
  }
}

export async function updateProductStatusByCode(code, newStatus) {
  try {
    await dbConnector();
    await Product.findOneAndUpdate({ code: code }, { status: newStatus });
    return { msg: "updateProductStatusByCode succeeded" };
  } catch (error) {
    console.log(" updateProductStateByCode error >> ", error);
    return { error: "Server error" };
  }
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
