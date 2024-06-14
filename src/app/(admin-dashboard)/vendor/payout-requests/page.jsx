import { VendorPayoutRequestsPageView } from "pages-sections/vendor-dashboard/v-payout-request/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/vendor";
export const metadata = {
  title: "Payout Requests - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default async function PayoutRequests() {
  const requests = await api.getAllPayoutRequests();
  return <VendorPayoutRequestsPageView payoutRequests={requests} />;
}