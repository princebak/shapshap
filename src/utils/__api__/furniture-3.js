import { cache } from "react";
import axios from "../axiosInstance"; 
// CUSTOM DATA MODEL

const getAllProducts = cache(async () => {
  const response = await axios.get("/api/furniture-3/products");
  return response.data;
});
const getAllProductsBySlug = cache(async () => {
  const response = await axios.get("/api/furniture-3/products-by-slug");
  return response.data;
});
const getCategories = cache(async () => {
  const response = await axios.get("/api/furniture-3/categories");
  return response.data;
});
const getBreadcrumb = cache(async slug => {
  const response = await axios.get("/api/furniture-3/breadcrumb", {
    params: {
      slug
    }
  });
  return response.data;
});
export default {
  getAllProducts,
  getCategories,
  getBreadcrumb,
  getAllProductsBySlug
};