import { ProductsPageView } from "pages-sections/vendor-dashboard/products/page-view";
import { findAll } from "services/ProductService";
// API FUNCTIONS

export const metadata = {
  title: "Products - ShapShap225",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [
    {
      name: "UI-LIB",
      url: "https://ui-lib.com",
    },
  ],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};
export default async function Products() {
  return <ProductsPageView />;
}
