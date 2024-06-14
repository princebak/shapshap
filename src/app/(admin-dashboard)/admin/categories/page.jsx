import { CategoriesPageView } from "pages-sections/vendor-dashboard/categories/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/dashboard";
export const metadata = {
  title: "Categories - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default async function Categories() {
  const categories = await api.category();
  return <CategoriesPageView categories={categories} />;
}