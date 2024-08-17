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

import { useEffect, useState } from "react";
import {
  findAllPublished,
  findAllPublishedByCategory,
} from "services/ProductService";
import { loadProducts } from "redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { getTheDesiredPage } from "utils/utilFunctions";
import { useSearchParams } from "next/navigation";
import NoData from "components/customs/NoData";

export default function SalesTwoPageView() {
  const { categories, selectedCategory, handleCategoryChange } = useSales(
    "men",
    1
  );

  /* const searchParams = useSearchParams();
  const pageIn = searchParams.get("page");
  const search = searchParams.get("search");
  const category = searchParams.get("category"); */

  // Pagination and Search
  const [page, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [pageLimit, setPageLimit] = useState();
  const [totalPages, setTotalPages] = useState(0);
  const distpatch = useDispatch();
  // const { productList: list } = useSelector((state) => state.product);

  const [productList, setProductList] = useState([]); //useState(list);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const loadProductList = async () => {
      /* const res = category
        ? await findAllPublishedByCategory(page, search, category, null)
        : await findAllPublished(page, search); */

      const res = await findAllPublished(page, "");
      setProductList(res.content);
      setPageLimit(res.pageLimit);
      setTotalElements(res.totalElements);
      setPage(res.currentPage);
      setTotalPages(res.totalPages);
      distpatch(loadProducts(res.content));
      // setIsDataLoaded(true);
    };
    loadProductList();
  }, [page]);

  const handleChangePage = (e) => {
    const el = e.target.outerHTML;

    if (el.includes("NavigateNextIcon")) {
      console.log("NavigateNextIcon", el);
      setPage(page + 1);
    } else if (el.includes("NavigateBeforeIcon")) {
      setPage(page - 1);
      console.log("NavigateBeforeIcon", el);
    } else {
      const p = getTheDesiredPage(el);
      console.log("other", el);

      setPage(p);
    }
  };

  const handleSearch = (e) => {
    setTimeout(() => {
      setSearch(e.target.value);
    }, 2000);
  };

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
    <SalesLayout type="two" categoryNav={""}>
      <Container className="mt-2">
        {productList.length > 0 ? (
          <>
            <ProductList products={productList} />

            <ProductPagination
              page={page}
              perPage={pageLimit}
              handlePageChange={handleChangePage}
              totalProducts={totalElements}
            />
          </>
        ) : (
          <NoData message="There is no article yet." />
        )}
      </Container>
    </SalesLayout>
  );
}
