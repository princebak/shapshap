"use client";

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
// LOCAL CUSTOM COMPONENT

import OrderRow from "../order-row";
import SearchArea from "../../search-box";
import PageWrapper from "../../page-wrapper";
// CUSTOM DATA MODEL

// TABLE HEAD COLUMN DATA
import { tableHeading } from "../table-heading";
import NoData from "components/customs/NoData";
import { useEffect, useState } from "react";
import { findMerchantOrders } from "services/OrderService";
import { LensTwoTone } from "@mui/icons-material";
import { useSelector } from "react-redux";
// =============================================================================

// =============================================================================
export default function OrdersPageView() {
  const [filteredOrders, setFilteredOrders] = useState([]);
  const { currentUser } = useSelector((state) => state.user);

  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort,
  } = useMuiTable({
    listData: filteredOrders,
    defaultSort: "purchaseDate",
    defaultOrder: "desc",
  });

  useEffect(() => {
    findMerchantOrders(currentUser._id).then((res) => {
      const filteredOrders = res.content.map((item) => ({
        id: item?._id,
        code: item?.code,
        qty: item?.products?.length,
        purchaseDate: item?.mainOrder?.createdAt,
        billingAddress: item?.mainOrder?.billingAddress,
        amount: item?.netTotalPrice,
        status: item?.status,
      }));
      setFilteredOrders(filteredOrders);
    });
  }, []);

  return (
    <PageWrapper title="Orders">
      <SearchArea
        handleSearch={() => {}}
        buttonText="Create Order"
        url="/admin/orders"
        searchPlaceholder="Search Order..."
        pageName="orders"
      />

      <Card>
        {filteredOrders?.length > 0 ? (
          <>
            <Scrollbar>
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
                    numSelected={selected.length}
                    rowCount={filteredList.length}
                    onRequestSort={handleRequestSort}
                  />

                  <TableBody>
                    {filteredList.map((order) => (
                      <OrderRow order={order} key={order.id} />
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Scrollbar>

            <Stack alignItems="center" my={4}>
              <TablePagination
                onChange={handleChangePage}
                count={Math.ceil(filteredList.length / rowsPerPage)}
              />
            </Stack>
          </>
        ) : (
          <NoData message="There is no order yet." />
        )}
      </Card>
    </PageWrapper>
  );
}
