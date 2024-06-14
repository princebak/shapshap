import { cache } from "react";
import axios from "../../utils/axiosInstance"; 
// CUSTOM DATA MODELS

const getProducts = cache(async () => {
  const response = await axios.get("/api/fashion-3/products?tag=feature");
  return response.data;
});
const getBestProducts = cache(async () => {
  const response = await axios.get("/api/fashion-3/products?tag=best");
  return response.data;
});
const getMainCarouselData = cache(async () => {
  const response = await axios.get("/api/fashion-3/main-carousel");
  return response.data;
});
const getServices = cache(async () => {
  const response = await axios.get("/api/fashion-3/services");
  return response.data;
});
const getBlogs = cache(async () => {
  const response = await axios.get("/api/fashion-3/blogs");
  return response.data;
});
const getBrands = cache(async () => {
  const response = await axios.get("/api/fashion-3/brands");
  return response.data;
});
export default {
  getProducts,
  getBestProducts,
  getMainCarouselData,
  getServices,
  getBlogs,
  getBrands
};