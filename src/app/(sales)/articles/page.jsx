import { SalesTwoPageView } from "pages-sections/sales/page-view";
import { findAllPublished } from "services/ProductService";
export const metadata = {
  title: "Articles - ShapShap225",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [
    {
      name: "UI-LIB",
      url: "https://ui-lib.com",
    },
  ],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};
export default async function SalesTwo() {
  const products = await findAllPublished();
  return <SalesTwoPageView products={products}/>;
}
