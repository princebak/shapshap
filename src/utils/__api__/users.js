import { cache } from "react";
import axios from "../../utils/axiosInstance"; 
// CUSTOM DATA MODEL

export const getUser = cache(async () => {
  const response = await axios.get("/api/user-list/1");
  return response.data;
});
export const getUserIds = cache(async () => {
  const response = await axios.get("/api/user-list/id-list");
  return response.data;
});
export default {
  getUser,
  getUserIds
};