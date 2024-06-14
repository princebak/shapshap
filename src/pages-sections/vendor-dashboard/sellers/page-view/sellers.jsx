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
// Local CUSTOM COMPONENT

import SellerRow from "../seller-row";
import SearchArea from "../../search-box";
import PageWrapper from "../../page-wrapper"; 
// TABLE HEAD COLUMN DATA

import { tableHeading } from "../table-heading"; 
// DATA TYPES


// =============================================================================
export default function SellersPageView({
  sellers
}) {
  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort
  } = useMuiTable({
    listData: sellers
  });
  return <PageWrapper title="Sellers">
      <SearchArea handleSearch={() => {}} buttonText="Add New Seller" url="/admin/sellers" searchPlaceholder="Search Seller..." />

      <Card>
        <Scrollbar>
          <TableContainer sx={{
          minWidth: 1100
        }}>
            <Table>
              <TableHeader order={order} hideSelectBtn orderBy={orderBy} heading={tableHeading} rowCount={sellers.length} numSelected={selected.length} onRequestSort={handleRequestSort} />

              <TableBody>
                {filteredList.map((seller, index) => <SellerRow seller={seller} key={index} />)}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination onChange={handleChangePage} count={Math.ceil(sellers.length / rowsPerPage)} />
        </Stack>
      </Card>
    </PageWrapper>;
}