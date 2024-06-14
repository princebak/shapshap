import { cache } from "react";
import axios from "../../utils/axiosInstance";
export const getFrequentlyBought = cache(async () => {
  const response = await axios.get("/api/frequently-bought-products");
  return response.data;
});
export const getRelatedProducts = cache(async () => {
  const response = await axios.get("/api/related-products");
  return response.data;
});