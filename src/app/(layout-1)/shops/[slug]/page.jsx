import { notFound } from "next/navigation";
// API FUNCTIONS

import api from "utils/__api__/shop";
// PAGE VIEW COMPONENT

import { ShopDetailsPageView } from "pages-sections/shops/page-view";
export const metadata = {
  title: "Shop Details - ShapShap225",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [
    {
      name: "UI-LIB",
      url: "https://ui-lib.com",
    },
  ],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};
export default async function ShopDetails({ params }) {
  try {
    const shop = await api.getProductsBySlug(String(params.slug));
    return <ShopDetailsPageView shop={shop} />;
  } catch (error) {
    notFound();
  }
}
