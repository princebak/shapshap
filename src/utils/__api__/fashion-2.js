import { cache } from "react";
import axios from "../../utils/axiosInstance";
const getProducts = cache(async () => {
  const response = await axios.get("/api/fashion-shop-2/products");
  return response.data;
});
const getFeatureProducts = cache(async () => {
  const response = await axios.get("/api/fashion-shop-2/products?tag=feature");
  return response.data;
});
const getSaleProducts = cache(async () => {
  const response = await axios.get("/api/fashion-shop-2/products?tag=sale");
  return response.data;
});
const getPopularProducts = cache(async () => {
  const response = await axios.get("/api/fashion-shop-2/products?tag=popular");
  return response.data;
});
const getLatestProducts = cache(async () => {
  const response = await axios.get("/api/fashion-shop-2/products?tag=latest");
  return response.data;
});
const getBestWeekProducts = cache(async () => {
  const response = await axios.get("/api/fashion-shop-2/products?tag=best-week");
  return response.data;
});
const getBlogs = cache(async () => {
  const response = await axios.get("/api/fashion-shop-2/blogs");
  return response.data;
});
const getServices = cache(async () => {
  const response = await axios.get("/api/fashion-shop-2/service");
  return response.data;
});
const getCategories = cache(async () => {
  const response = await axios.get("/api/fashion-shop-2/category");
  return response.data;
});
const getMainCarouselData = cache(async () => {
  const response = await axios.get("/api/fashion-shop-2/main-carousel");
  return response.data;
});
const getBrands = cache(async () => {
  const response = await axios.get("/api/fashion-shop-2/brands");
  return response.data;
});
export default {
  getBlogs,
  getBrands,
  getProducts,
  getServices,
  getCategories,
  getSaleProducts,
  getLatestProducts,
  getPopularProducts,
  getFeatureProducts,
  getBestWeekProducts,
  getMainCarouselData
};