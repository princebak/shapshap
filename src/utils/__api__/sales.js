import { cache } from "react";
import axios from "../../utils/axiosInstance";
import products from "data/product-database";
const getCategories = cache(async () => {
  const response = await axios.get("/api/sales-1/categories");
  return response.data;
});
const getCategoriesTwo = cache(async () => {
  const response = await axios.get("/api/sales-2/categories");
  return response.data;
});
const getProducts = cache(async (page = 1) => {
  const PAGE_SIZE = 28;
  const currentProducts = products.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE); 
// @ts-ignore

  return currentProducts;
});
export default {
  getCategories,
  getProducts,
  getCategoriesTwo
};