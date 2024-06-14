import { cache } from "react";
import axios from "../../utils/axiosInstance"; 
// CUSTOM DATA MODEL

const getAddressList = cache(async () => {
  const response = await axios.get("/api/address/user");
  return response.data;
});
const getIds = cache(async () => {
  const response = await axios.get("/api/address/address-ids");
  return response.data;
});
const getAddress = cache(async id => {
  const response = await axios.get("/api/address/user/1", {
    params: {
      id
    }
  });
  return response.data;
});
export default {
  getAddressList,
  getIds,
  getAddress
};