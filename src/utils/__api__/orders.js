import { cache } from "react";
import axios from "../../utils/axiosInstance"; 
// CUSTOM DATA MODEL

const getOrders = cache(async () => {
  const response = await axios.get("/api/users/orders");
  return response.data;
});
const getIds = cache(async () => {
  const response = await axios.get("/api/users/order-ids");
  return response.data;
});
const getOrder = cache(async id => {
  const response = await axios.get("/api/users/order", {
    params: {
      id
    }
  });
  return response.data;
});
export default {
  getOrders,
  getOrder,
  getIds
};