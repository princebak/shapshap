import { SellerPackagePageView } from "pages-sections/vendor-dashboard/seller-package/page-view";
export const metadata = {
  title: "Seller Package - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default async function SellerPackage() {
  return <SellerPackagePageView />;
}