import { cache } from "react";
import axios from "../../utils/axiosInstance"; 
// CUSTOM DATA MODELS

const getNewArrivalProducts = cache(async () => {
  const response = await axios.get("/api/furniture-2/products?tag=new-arrival");
  return response.data;
});
const getTrendingProducts = cache(async () => {
  const response = await axios.get("/api/furniture-2/products?tag=trending");
  return response.data;
});
const getTestimonial = cache(async () => {
  const response = await axios.get("/api/furniture-2/testimonial");
  return response.data;
});
const getServices = cache(async () => {
  const response = await axios.get("/api/furniture-2/services");
  return response.data;
});
export default {
  getNewArrivalProducts,
  getTrendingProducts,
  getTestimonial,
  getServices
};