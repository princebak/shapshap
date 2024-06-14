import { cache } from "react";
import axios from "../../utils/axiosInstance";
const getFeaturedCategories = cache(async () => {
  const response = await axios.get("/api/gadget-1/featured-categories");
  return response.data;
});
const getTwoBanner = cache(async () => {
  const response = await axios.get("/api/gadget-1/two-banners");
  return response.data;
});
const getBlogLists = cache(async () => {
  const response = await axios.get("/api/gadget-1/blog-lists");
  return response.data;
});
const getMainCarousel = cache(async () => {
  const response = await axios.get("/api/gadget-1/main-carousel");
  return response.data;
});
const getTopPicksList = cache(async () => {
  const response = await axios.get("/api/gadget-1/products?tag=top-picks");
  return response.data;
});
const getMostViewedList = cache(async () => {
  const response = await axios.get("/api/gadget-1/products?tag=most-viewed");
  return response.data;
});
const getNewArrival = cache(async () => {
  const response = await axios.get("/api/gadget-1/products?tag=new-arrival");
  return response.data;
});
export default {
  getTwoBanner,
  getBlogLists,
  getNewArrival,
  getMainCarousel,
  getTopPicksList,
  getMostViewedList,
  getFeaturedCategories
};