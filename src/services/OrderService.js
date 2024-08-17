"use server";

import MerchantOrder from "models/MerchantOrder";
import MyOrder from "models/MyOrder";
import {
  generateMerchantOrderCode,
  generateOrderCode,
} from "utils/codeGenerator";
import { fees, orderStatus, userType } from "utils/constants";
import { dbConnector } from "utils/dbConnector";
import {
  dbObjectToJsObject,
  getContentWithPagination,
  getTotalGrossPriceAndDiscount,
  getTotalNetPrice,
  groupProductsByVendor,
} from "utils/utilFunctions";

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
    return { error: error.message };
  }
}

export async function completeOrder(code) {
  try {
    await dbConnector();

    const res = await MyOrder.findOne({ code: code }).populate(
      "products.owner"
    );

    if (res.status !== orderStatus.COMPLETED) {
      await MyOrder.findOneAndUpdate(
        { code: code },
        { status: orderStatus.COMPLETED }
      );
      const productsByVendor = groupProductsByVendor(res.products);

      for (const owner in productsByVendor) {
        const code = await generateMerchantOrderCode();
        const ownerProducts = productsByVendor[owner];

        const { grossTotalPrice, totalDiscount } =
          getTotalGrossPriceAndDiscount(ownerProducts);

        const merchantOrder = {
          owner: owner,
          products: ownerProducts,
          mainOrder: res._id,
          code: code,
          status: orderStatus.COMPLETED,
          grossTotalPrice: grossTotalPrice,
          totalDiscount: totalDiscount,
          commission: fees.COMMISSION,
          netTotalPrice: getTotalNetPrice(ownerProducts, userType.MERCHANT), // for the merchant we're taking into account the commission if exists
        };

        const newMerchantOrder = new MerchantOrder(merchantOrder);
        await newMerchantOrder.save();
        console.log("newMerchantOrder.save();");
      }
    }

    return dbObjectToJsObject({ ...res, status: orderStatus.COMPLETED });
  } catch (error) {
    console.log("Error >>", error);
    return { error: error.message };
  }
}

export async function findOrders() {
  try {
    await dbConnector();
    const res = await MyOrder.find();

    return dbObjectToJsObject(res);
  } catch (error) {
    console.log("Error >>", error);
    return { error: error.message };
  }
}

export async function findMerchantOrders(merchantId, page, search, limit) {
  try {
    if (merchantId?.length < 24) {
      return { error: "The user Id is not valid." };
    }

    await dbConnector();
    const orders = await MerchantOrder.find({ owner: merchantId }).populate(
      "mainOrder"
    );
    const res = getContentWithPagination(orders, page, search, limit);
    return dbObjectToJsObject(res);
  } catch (error) {
    console.log("findAllByUserId error >> ", error);
    return { error: error.message };
  }
}

export async function findOneMerchantOrderByCode(code) {
  try {
    await dbConnector();
    const order = await MerchantOrder.findOne({ code: code }).populate(
      "mainOrder"
    );

    return dbObjectToJsObject(order);
  } catch (error) {
    console.log("error >> ", error);
    return { error: error.message };
  }
}
