import { cache } from "react";
import axios from "../../utils/axiosInstance"; 
// CUSTOM DATA MODEL

export const getShopList = cache(async () => {
  const response = await axios.get("/api/shops");
  return response.data;
});
export const getSlugs = cache(async () => {
  const response = await axios.get("/api/shops/slugs");
  return response.data;
});
export const getProductsBySlug = cache(async slug => {
  const response = await axios.get("/api/shops/single", {
    params: {
      slug
    }
  });
  return response.data;
});
export default {
  getShopList,
  getSlugs,
  getProductsBySlug
};