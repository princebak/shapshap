import { EarningHistoryPageView } from "pages-sections/vendor-dashboard/earning-history/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/dashboard";
export const metadata = {
  title: "Earning History - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default async function EarningHistory() {
  const earnings = await api.earningHistory();
  return <EarningHistoryPageView earnings={earnings} />;
}