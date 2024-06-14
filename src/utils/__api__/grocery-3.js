import { cache } from "react";
import axios from "../../utils/axiosInstance";
const getTopSailedProducts = cache(async () => {
  const response = await axios.get("/api/grocery-3/products?tag=top-sailed");
  return response.data;
});
const getAllProducts = cache(async () => {
  const response = await axios.get("/api/grocery-3/products");
  return response.data;
});
const getOfferCards = cache(async () => {
  const response = await axios.get("/api/grocery-3/products?tag=offer");
  return response.data;
});
const getMainCarousel = cache(async () => {
  const response = await axios.get("/api/grocery-3/main-carousel");
  return response.data;
});
export default {
  getOfferCards,
  getAllProducts,
  getMainCarousel,
  getTopSailedProducts
};