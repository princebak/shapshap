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
export default function ProductsPageView({ products }) {
  const [productList, setProductList] = useState([]);
  const distpatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (productList.length === 0) {
      const loadProductList = async () => {
        const products = await findAllByUserId(currentUser._id);
        setProductList(products);
        distpatch(loadProducts(products));
      };
      loadProductList();
    }
  }, []);

  // RESHAPE THE PRODUCT LIST BASED TABLE HEAD CELL ID

  const filteredProducts = productList.map((item) => ({
    id: item._id,
    code: item.code,
    name: item.name,
    brand: item.brand,
    price: item.price,
    images: item.images,
    published: item.status === productStatus.PUBLISHED,
    category: item.categories.join(", "),
  }));

  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort,
  } = useMuiTable({
    listData: filteredProducts,
  });
  return (
    <PageWrapper title="Product List">
      <SearchArea
        handleSearch={() => {}}
        buttonText="Add Product"
        url="/vendor/products/create"
        searchPlaceholder="Search Product..."
      />

      <Card>
        {productList.length ? (
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
                    rowCount={productList.length}
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
              <TablePagination
                onChange={handleChangePage}
                count={Math.ceil(productList.length / rowsPerPage)}
              />
            </Stack>
          </>
        ) : (
          <NoData message="There is no product, click the add button." />
        )}
      </Card>
    </PageWrapper>
  );
}
