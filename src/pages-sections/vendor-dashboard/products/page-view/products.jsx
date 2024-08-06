"use client";

import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
// GLOBAL CUSTOM COMPONENTS

import Scrollbar from "components/scrollbar";
import { TableHeader, TablePagination } from "components/data-table";
// GLOBAL CUSTOM HOOK

import useMuiTable from "hooks/useMuiTable";
//  LOCAL CUSTOM COMPONENT

import ProductRow from "../product-row";
import SearchArea from "../../search-box";
import PageWrapper from "../../page-wrapper";
import { productStatus } from "utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { findAll, findAllByUserId } from "services/ProductService";
import { loadProducts } from "redux/slices/productSlice";
import NoData from "components/customs/NoData";
import { getTheDesiredPage } from "utils/utilFunctions";
// CUSTOM DATA MODEL

// TABLE HEADING DATA LIST
const tableHeading = [
  {
    id: "name",
    label: "Name",
    align: "left",
  },
  {
    id: "category",
    label: "Category",
    align: "left",
  },
  {
    id: "brand",
    label: "Brand",
    align: "left",
  },
  {
    id: "price",
    label: "Price",
    align: "left",
  },
  {
    id: "published",
    label: "Published",
    align: "left",
  },
  {
    id: "action",
    label: "Action",
    align: "center",
  },
];
// =============================================================================

// =============================================================================
export default function ProductsPageView() {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const distpatch = useDispatch();
  // Pagination and Search
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [totalElements, setTotalElements] = useState(0);
  const [pageLimit, setPageLimit] = useState();
  const [totalPages, setTotalPages] = useState(0);

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    console.log("useEffect", page);
    const loadProductList = async () => {
      const res = await findAllByUserId(currentUser._id, page, search); // findAll(page, search); //
      console.log("TEST59 >> ", res);
      setFilteredProducts(getFilteredProducts(res.content));
      setPageLimit(res.pageLimit);
      setTotalElements(res.totalElements);
      setPage(res.currentPage);
      setTotalPages(res.totalPages);
      distpatch(loadProducts(res.content));
    };
    loadProductList();
  }, [page, search]);

  // RESHAPE THE PRODUCT LIST BASED TABLE HEAD CELL ID

  const { order, orderBy, selected, filteredList, handleRequestSort } =
    useMuiTable({
      listData: filteredProducts,
    });

  const handleChangePage = (e) => {
    const el = e.target.outerHTML;

    if (el.includes("NavigateNextIcon")) {
      console.log("NavigateNextIcon");
      setPage(page + 1);
    } else if (el.includes("NavigateBeforeIcon")) {
      setPage(page - 1);
      console.log("NavigateBeforeIcon");
    } else {
      const p = getTheDesiredPage(el);
      console.log("other");

      setPage(p);
    }
  };

  const handleSearch = (e) => {
    setTimeout(() => {
      setSearch(e.target.value);
    }, 2000);
  };

  const getFilteredProducts = (list) => {
    return list.map((item) => ({
      id: item._id,
      code: item.code,
      name: item.name,
      brand: item.brand,
      price: item.price,
      images: item.images,
      published: item.status === productStatus.PUBLISHED,
      category: item.categories.join(", "),
    }));
  };

  return (
    <PageWrapper title="Product List">
      <SearchArea
        handleSearch={handleSearch}
        buttonText="Add Product"
        url="/vendor/products/create"
        searchPlaceholder="Search Product..."
      />

      <Card>
        {filteredProducts.length ? (
          <>
            <Scrollbar autoHide={false}>
              <TableContainer
                sx={{
                  minWidth: 900,
                }}
              >
                <Table>
                  <TableHeader
                    order={order}
                    hideSelectBtn
                    orderBy={orderBy}
                    heading={tableHeading}
                    rowCount={filteredProducts.length}
                    numSelected={selected.length}
                    onRequestSort={handleRequestSort}
                  />

                  <TableBody>
                    {filteredList.map((product, index) => (
                      <ProductRow key={index} product={product} />
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Scrollbar>

            <Stack alignItems="center" my={4}>
              <TablePagination onChange={handleChangePage} count={totalPages} />
            </Stack>
          </>
        ) : (
          <NoData message="There is no product, click the add button." />
        )}
      </Card>
    </PageWrapper>
  );
}
