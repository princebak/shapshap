import { cache } from "react";
import axios from "../../utils/axiosInstance"; 
// CUSTOM DATA MODEL

export const getTicketList = cache(async () => {
  const response = await axios.get("/api/tickets");
  return response.data;
});
export const getTicket = cache(async slug => {
  const response = await axios.get("/api/tickets/single", {
    params: {
      slug
    }
  });
  return response.data;
});
export const getSlugs = cache(async () => {
  const response = await axios.get("/api/tickets/slugs");
  return response.data;
});
export default {
  getTicketList,
  getTicket,
  getSlugs
};