import { cache } from "react";
import axios from "../../utils/axiosInstance"; 
// CUSTOM DATA MODELS

const getFeaturedProducts = cache(async () => {
  const response = await axios.get("/api/medical/products?tag=featured");
  return response.data;
});
const getBestSellerProducts = cache(async () => {
  const response = await axios.get("/api/medical/products?tag=best");
  return response.data;
});
const getTestimonials = cache(async () => {
  const response = await axios.get("/api/medical/testimonials");
  return response.data;
});
const getServices = cache(async () => {
  const response = await axios.get("/api/medical/services");
  return response.data;
});
const getBlogs = cache(async () => {
  const response = await axios.get("/api/medical/blogs");
  return response.data;
});
export default {
  getFeaturedProducts,
  getBestSellerProducts,
  getTestimonials,
  getServices,
  getBlogs
};