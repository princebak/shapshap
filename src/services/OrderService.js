import Order from "models/Order";
import { generateOrderCode } from "utils/codeGenerator";
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
    const newOrder = new Order(data);
    const res = await newOrder.save();

    return dbObjectToJsObject(res);
  } catch (error) {
    console.log("Error >>", error);
    return { error: "Server error" };
  }
}

export async function findOrders() {
  try {
    await dbConnector();
    
    const res = await Order.find();

    return dbObjectToJsObject(res);
  } catch (error) {
    console.log("Error >>", error);
    return { error: "Server error" };
  }
}
