import { RefundRequestPageView } from "pages-sections/vendor-dashboard/refund-request/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/dashboard";
export const metadata = {
  title: "Refund Request - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default async function RefundRequest() {
  const requests = await api.refundRequests();
  return <RefundRequestPageView requests={requests} />;
}