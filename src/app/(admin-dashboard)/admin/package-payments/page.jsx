import { PackagePaymentPageView } from "pages-sections/vendor-dashboard/package-payments/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/dashboard";
export const metadata = {
  title: "Package Payments - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default async function PackagePayments() {
  const payments = await api.packagePayments();
  return <PackagePaymentPageView payments={payments} />;
}