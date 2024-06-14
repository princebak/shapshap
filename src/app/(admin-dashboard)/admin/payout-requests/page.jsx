import { PayoutRequestsPageView } from "pages-sections/vendor-dashboard/payout-requests/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/dashboard";
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
  const requests = await api.payoutRequests();
  return <PayoutRequestsPageView requests={requests} />;
}