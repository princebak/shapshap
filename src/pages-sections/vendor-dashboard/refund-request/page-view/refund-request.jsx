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

import PageWrapper from "../../page-wrapper";
import RefundRequestRow from "../refund-request-row"; 
// TABLE HEAD COLUMN DATA

import { tableHeading } from "../table-heading"; 
// DATA TYPES


// =============================================================================
export default function RefundRequestPageView({
  requests
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
    listData: requests
  });
  return <PageWrapper title="Refund Request">
      <Card>
        <Scrollbar>
          <TableContainer sx={{
          minWidth: 900
        }}>
            <Table>
              <TableHeader order={order} hideSelectBtn orderBy={orderBy} heading={tableHeading} rowCount={requests.length} numSelected={selected.length} onRequestSort={handleRequestSort} />

              <TableBody>
                {filteredList.map((request, index) => <RefundRequestRow request={request} key={index} />)}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination onChange={handleChangePage} count={Math.ceil(requests.length / rowsPerPage)} />
        </Stack>
      </Card>
    </PageWrapper>;
}