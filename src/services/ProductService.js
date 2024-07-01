"use server";

import Product from "models/Product";

export async function findAll() {
  return await Product.find();
}

export async function create(product) {
  try {
    const newProduct = new Product(product);
    return await newProduct.save();
  } catch (error) {
    console.log("Product Creation error ", error);
  }
}

export async function update(product) {
  try {
    const { _id, ...updatingProduct } = product;
    return await Product.findByIdAndUpdate(_id, { ...updatingProduct });
  } catch (error) {
    console.log("Product Creation error ", error);
  }
}
