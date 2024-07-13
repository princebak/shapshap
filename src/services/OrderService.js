"use server";

import MyOrder from "models/MyOrder";
import { generateOrderCode } from "utils/codeGenerator";
import { orderStatus } from "utils/constants";
import { dbConnector } from "utils/dbConnector";
import { dbObjectToJsObject } from "utils/utilFunctions";

export async function createOrder(order) {
  try {
    await dbConnector();
    const code = await generateOrderCode();
    const data = {
      code,
      ...order,
    };
    const newOrder = new MyOrder(data);
    const res = await newOrder.save();

    return dbObjectToJsObject(res);
  } catch (error) {
    console.log("Error >>", error);
    return { error: "Server error" };
  }
}

export async function completeOrder(code) {
  try {
    await dbConnector();

    const res = await MyOrder.findOneAndUpdate({code:code}, {status: orderStatus.COMPLETED})

    return dbObjectToJsObject(res);
  } catch (error) {
    console.log("Error >>", error);
    return { error: "Server error" };
  }
}

export async function findOrders() {
  try {
    await dbConnector();
    console.log("Finding orders");
    const res = await MyOrder.find();

    return dbObjectToJsObject(res);
  } catch (error) {
    console.log("Error >>", error);
    return { error: "Server error" };
  }
}
