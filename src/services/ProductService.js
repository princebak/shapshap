"use server";

import Product from "models/Product";
import { generateProductCode } from "utils/codeGenerator";
import { productStatus } from "utils/constants";
import { dbConnector } from "utils/dbConnector";
import {
  dbObjectToJsObject,
  getContentWithPagination,
} from "utils/utilFunctions";

export async function findAll(page = 1, search = "") {
  try {
    await dbConnector();
    const products = await Product.find();
    const res = getContentWithPagination(products, page, search);

    return dbObjectToJsObject(res);
  } catch (error) {
    console.log("error >> ", error);
    return { error: error.message };
  }
}

export async function findOneByCode(code) {
  try {
    await dbConnector();
    const product = await Product.findOne({ code: code }).populate("owner");
    return dbObjectToJsObject(product);
  } catch (error) {
    console.log("error >> ", error);
    return { error: error.message };
  }
}

export async function findAllPublished(page, search, limit) {
  try {
    await dbConnector();
    const products = await Product.find({
      status: productStatus.PUBLISHED,
    });
    const res = getContentWithPagination(products, page, search, limit);
    return dbObjectToJsObject(res);
  } catch (error) {
    console.log("findAllPublished error >> ", error);
    return { error: error.message };
  }
}

export async function findAllPublishedByCategory(
  page,
  search,
  category,
  limit
) {
  try {
    await dbConnector();
    const products = await Product.find({
      status: productStatus.PUBLISHED,
      categories: { $in: [category] },
    });
    const res = getContentWithPagination(products, page, search, limit);
    return dbObjectToJsObject(res);
  } catch (error) {
    console.log("findAllPublishedByCategory error >> ", error);
    return { error: error.message };
  }
}

export async function findAllByUserId(userId, page, search, limit) {
  try {
    if (userId?.length < 24) {
      return { error: "The user Id is not valid." };
    }
    await dbConnector();
    const products = await Product.find({ owner: userId });
    const res = getContentWithPagination(products, page, search, limit);
    return dbObjectToJsObject(res);
  } catch (error) {
    console.log("findAllByUserId error >> ", error);
    return { error: error.message };
  }
}

export async function findProductByCode(code) {
  try {
    await dbConnector();
    const prod = await Product.findOne({ code: code });
    return dbObjectToJsObject(prod);
  } catch (error) {
    console.log("findProductByCode error >> ", error);
    return { error: error.message };
  }
}

export async function updateProductStatusByCode(code, newStatus) {
  try {
    await dbConnector();
    await Product.findOneAndUpdate({ code: code }, { status: newStatus });
    return { msg: "updateProductStatusByCode succeeded" };
  } catch (error) {
    console.log(" updateProductStateByCode error >> ", error);
    return { error: error };
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

    return dbObjectToJsObject({ error: error });
  }
}

export async function update(product) {
  try {
    await dbConnector();

    const { _id, ...updatingProduct } = product;
    const updatedProduct = await Product.findByIdAndUpdate(
      _id,
      {
        ...updatingProduct,
      },
      { new: true }
    );

    return dbObjectToJsObject(updatedProduct._doc);
  } catch (error) {
    console.log("Product update error ", error);
    return dbObjectToJsObject({ error: error });
  }
}
