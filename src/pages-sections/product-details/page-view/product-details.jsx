import Container from "@mui/material/Container";
// Local CUSTOM COMPONENTS

import ProductTabs from "../product-tabs";
import ProductIntro from "../product-intro";
import AvailableShops from "../available-shops";
import RelatedProducts from "../related-products";
import FrequentlyBought from "../frequently-bought";
import { categories } from "__server__/__db__/market-1/data";
import shop from "utils/__api__/shop";
// CUSTOM DATA MODEL

// ==============================================================
export default function ProductDetailsPageView({ product }) {
  const article = {
    id: product?._id,
    price: product?.price,
    title: product?.name,
    images: product?.images,
    slug: product?.code,
    thumbnail: product?.images[0],
    description: product?.description,
    brand: product?.brand,
    categories: product.categories,
    stock: product.stock,
    owner: product.owner,
    discount: product.discount,
  };
  return (
    <Container className="mt-2 mb-2">
      {/* PRODUCT DETAILS INFO AREA */}
      <ProductIntro product={article} />

      {/* PRODUCT DESCRIPTION AND REVIEW */}
      <ProductTabs description={product?.description} owner={product?.owner} />
    </Container>
  );
}
