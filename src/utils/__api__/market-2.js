import { cache } from "react";
import axios from "../../utils/axiosInstance";
const getProducts = cache(async () => {
  const response = await axios.get("/api/market-2/products");
  return response.data;
});
const getServices = cache(async () => {
  const response = await axios.get("/api/market-2/service");
  return response.data;
});
const getCategories = cache(async () => {
  const response = await axios.get("/api/market-2/categories");
  return response.data;
});
const getBrands = cache(async () => {
  const response = await axios.get("/api/market-2/brand");
  return response.data;
});
const getMainCarouselData = cache(async () => {
  const response = await axios.get("/api/market-2/main-carousel");
  return response.data;
});
const getElectronicsProducts = cache(async () => {
  const response = await axios.get("/api/market-2/category-based-product?tag=electronics");
  return response.data;
});
const getMenFashionProducts = cache(async () => {
  const response = await axios.get("/api/market-2/category-based-product?tag=men");
  return response.data;
});
const getWomenFashionProducts = cache(async () => {
  const response = await axios.get("/api/market-2/category-based-product?tag=women");
  return response.data;
});
export default {
  getBrands,
  getProducts,
  getServices,
  getCategories,
  getMainCarouselData,
  getMenFashionProducts,
  getElectronicsProducts,
  getWomenFashionProducts
};