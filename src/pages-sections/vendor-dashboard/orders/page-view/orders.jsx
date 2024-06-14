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
// =============================================================================


// =============================================================================
export default function OrdersPageView({
  orders
}) {
  
// RESHAPE THE ORDER LIST BASED TABLE HEAD CELL ID
  const filteredOrders = orders.map(item => ({
    id: item.id,
    qty: item.items.length,
    purchaseDate: item.createdAt,
    billingAddress: item.shippingAddress,
    amount: item.totalPrice,
    status: item.status
  }));
  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort
  } = useMuiTable({
    listData: filteredOrders,
    defaultSort: "purchaseDate",
    defaultOrder: "desc"
  });
  return <PageWrapper title="Orders">
      <SearchArea handleSearch={() => {}} buttonText="Create Order" url="/admin/orders" searchPlaceholder="Search Order..." />

      <Card>
        <Scrollbar>
          <TableContainer sx={{
          minWidth: 900
        }}>
            <Table>
              <TableHeader order={order} hideSelectBtn orderBy={orderBy} heading={tableHeading} numSelected={selected.length} rowCount={filteredList.length} onRequestSort={handleRequestSort} />

              <TableBody>
                {filteredList.map(order => <OrderRow order={order} key={order.id} />)}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination onChange={handleChangePage} count={Math.ceil(filteredList.length / rowsPerPage)} />
        </Stack>
      </Card>
    </PageWrapper>;
}