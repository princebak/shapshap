import axios from "../../utils/axiosInstance";
import { cache } from "react";
const getTopRatedProduct = cache(async () => {
  const response = await axios.get("/api/market-1/toprated-product");
  return response.data;
});
const getTopRatedBrand = cache(async () => {
  const response = await axios.get("/api/market-1/toprated-brand");
  return response.data;
});
const getNewArrivalList = cache(async () => {
  const response = await axios.get("/api/market-1/new-arrivals");
  return response.data;
});
const getCarBrands = cache(async () => {
  const response = await axios.get("/api/market-1/car-brand-list");
  return response.data;
});
const getCarList = cache(async () => {
  const response = await axios.get("/api/market-1/car-list");
  return response.data;
});
const getMobileBrands = cache(async () => {
  const response = await axios.get("/api/market-1/mobile-brand-list");
  return response.data;
});
const getMobileShops = cache(async () => {
  const response = await axios.get("/api/market-1/mobile-shop-list");
  return response.data;
});
const getMobileList = cache(async () => {
  const response = await axios.get("/api/market-1/mobile-list");
  return response.data;
});
const getOpticsBrands = cache(async () => {
  const response = await axios.get("/api/market-1/optics/watch-brands");
  return response.data;
});
const getOpticsShops = cache(async () => {
  const response = await axios.get("/api/market-1/optics/watch-shops");
  return response.data;
});
const getOpticsList = cache(async () => {
  const response = await axios.get("/api/market-1/optics-list");
  return response.data;
});
const getCategories = cache(async () => {
  const response = await axios.get("/api/market-1/bottom-categories");
  return response.data;
});
const getMoreItems = cache(async () => {
  const response = await axios.get("/api/market-1/get-more-items");
  return response.data;
});
const getServiceList = cache(async () => {
  const response = await axios.get("/api/market-1/get-service-list");
  return response.data;
});
const getMainCarousel = cache(async () => {
  const response = await axios.get("/api/market-1/main-carousel");
  return response.data;
});
const getFlashDeals = cache(async () => {
  const response = await axios.get("/api/market-1/flash-deals");
  return response.data;
});
const getTopCategories = cache(async () => {
  const response = await axios.get("/api/market-1/top-categories");
  return response.data;
});
const getBigDiscountList = cache(async () => {
  const response = await axios.get("/api/market-1/big-discounts");
  return response.data;
});
export default {
  getCarList,
  getCarBrands,
  getMoreItems,
  getFlashDeals,
  getMobileList,
  getCategories,
  getOpticsList,
  getServiceList,
  getMobileShops,
  getOpticsShops,
  getMainCarousel,
  getMobileBrands,
  getOpticsBrands,
  getTopCategories,
  getTopRatedBrand,
  getNewArrivalList,
  getBigDiscountList,
  getTopRatedProduct
};