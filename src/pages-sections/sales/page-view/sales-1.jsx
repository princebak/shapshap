"use client";

import { useRef } from "react";
import Container from "@mui/material/Container"; 
// LOCAL CUSTOM COMPONENTS

import SaleNavbar from "../sales-navbar";
import ProductList from "../product-list";
import CategoryList from "../category-list";
import ProductPagination from "../product-pagination"; 
// GLOBAL CUSTOM HOOK

import useScroller from "hooks/useScroller"; 
// LOCAL CUSTOM HOOK

import useSales from "../use-sales"; 
// GLOBAL CUSTOM COMPONENTS

import { H1 } from "components/Typography";
import FlexBox from "components/flex-box/flex-box"; 
// PRODUCT DATA LIST

import productDB from "data/product-database"; 
// STYLED COMPONENT

import { CategoryWrapper } from "../styles";
export default function SalesOnePageView() {
  const categoryRef = useRef(null);
  const {
    isFixedHeader
  } = useScroller(categoryRef);
  const {
    page,
    categories,
    productList,
    selectedCategory,
    PRODUCT_PER_PAGE,
    handlePageChange,
    handleCategoryChange
  } = useSales();
  return <Container className="mt-2">
      {
      /* CATEGORY HEADER NAV */
    }
      <CategoryWrapper show={isFixedHeader ? 1 : 0}>
        <SaleNavbar categories={categories} selected={selectedCategory} onChangeCategory={handleCategoryChange} />
      </CategoryWrapper>

      {
      /* TITLE */
    }
      <FlexBox mb={4} flexWrap="wrap" gap={1}>
        <H1 color="primary.main" lineHeight="1">
          Flash Deals,
        </H1>

        <H1 color="grey.600" lineHeight="1">
          Enjoy Upto 80% discounts
        </H1>
      </FlexBox>

      {
      /* CATEGORY LIST AREA */
    }
      <CategoryList ref={categoryRef} categories={categories} selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} />

      {
      /* PRODUCT LIST AREA */
    }
      <ProductList products={productList} />

      {
      /* PAGINATION AREA */
    }
      <ProductPagination page={page} perPage={PRODUCT_PER_PAGE} totalProducts={productDB.length} handlePageChange={handlePageChange} />
    </Container>;
}