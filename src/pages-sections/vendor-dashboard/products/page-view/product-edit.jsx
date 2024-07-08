"use client";

// LOCAL CUSTOM COMPONENT
import ProductForm from "../product-form";
import PageWrapper from "../../page-wrapper";
import { useSelector } from "react-redux";

export default function EditProductPageView() {
  const { currentProduct } = useSelector((state) => state.product);

  return (
    <PageWrapper title="Edit Product">
      <ProductForm product={currentProduct} />
    </PageWrapper>
  );
}
