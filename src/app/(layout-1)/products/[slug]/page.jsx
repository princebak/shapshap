import { notFound } from "next/navigation";
// PAGE VIEW COMPONENT

import { ProductDetailsPageView } from "pages-sections/product-details/page-view";
import { findOneByCode } from "services/ProductService";
// API FUNCTIONS

import api from "utils/__api__/products";
import {
  getFrequentlyBought,
  getRelatedProducts,
} from "utils/__api__/related-products";
export const metadata = {
  title: "Product Details - ShapShap225",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [
    {
      name: "UI-LIB",
      url: "https://ui-lib.com",
    },
  ],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};
export default async function ProductDetails({ params }) {
  try {
    const product = await findOneByCode(params.slug);

    const relatedProducts = await getRelatedProducts(); // ToDO update
    const frequentlyBought = await getFrequentlyBought(); // ToDO update
    return (
      <ProductDetailsPageView
        product={product}
        relatedProducts={relatedProducts}
        frequentlyBought={frequentlyBought}
      />
    );
  } catch (error) {
    notFound();
  }
}
