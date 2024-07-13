"use client";

import Container from "@mui/material/Container";
// LOCAL CUSTOM COMPONENTS

import SaleNavbar from "../sales-navbar";
import ProductList from "../product-list";
import ProductPagination from "../product-pagination";
// GLOBAL CUSTOM COMPONENTS

import Sticky from "components/sticky";
import SalesLayout from "components/layouts/sales-layout";
// LOCAL CUSTOM HOOK

import useSales from "../use-sales";
// PRODUCT DATA LIST

import productDatabase from "data/product-database";
import { useEffect, useState } from "react";
import { findAllPublished } from "services/ProductService";
export default function SalesTwoPageView({products}) {
  const {
    page,
    categories,
    selectedCategory,
    PRODUCT_PER_PAGE,
    handlePageChange,
    handleCategoryChange,
  } = useSales("men", 1);

  const [productList, setProductList] = useState(products);

  // CATEGORY NAV LIST

  const CATEGORY_NAV = (
    <Sticky fixedOn={0} scrollDistance={200}>
      <SaleNavbar
        categories={categories}
        selected={selectedCategory}
        onChangeCategory={handleCategoryChange}
      />
    </Sticky>
  );
  return (
    <SalesLayout type="two" categoryNav={CATEGORY_NAV}>
      <Container className="mt-2">
        {/* PRODUCT LIST AREA */}
        <ProductList products={productList} />

        {/* PAGINATION AREA */}
        <ProductPagination
          page={page}
          perPage={PRODUCT_PER_PAGE}
          handlePageChange={handlePageChange}
          totalProducts={productDatabase.length}
        />
      </Container>
    </SalesLayout>
  );
}
