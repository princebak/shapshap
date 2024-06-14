import { cache } from "react";
import axios from "../../utils/axiosInstance"; 
// CUSTOM DATA MODELS

const getBestSellerProducts = cache(async () => {
  const response = await axios.get("/api/gadget-2/products?tag=best-seller");
  return response.data;
});
const getNewArrivalProducts = cache(async () => {
  const response = await axios.get("/api/gadget-2/products?tag=new-arrival");
  return response.data;
});
const getServices = cache(async () => {
  const response = await axios.get("/api/gadget-2/services");
  return response.data;
});
const getBlogs = cache(async () => {
  const response = await axios.get("/api/gadget-2/blogs");
  return response.data;
});
export default {
  getBestSellerProducts,
  getNewArrivalProducts,
  getServices,
  getBlogs
};