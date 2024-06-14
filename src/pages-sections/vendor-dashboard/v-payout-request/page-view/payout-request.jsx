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

import RequestRow from "../request-row";
import PageWrapper from "../../page-wrapper";
import { tableHeading } from "../table-heading"; 
// DATA TYPES


// ==============================================================
export default function PayoutRequestsPageView({
  payoutRequests
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
    listData: payoutRequests,
    defaultSort: "no"
  });
  return <PageWrapper title="Payout Requests">
      <Card>
        <Scrollbar>
          <TableContainer sx={{
          minWidth: 800
        }}>
            <Table>
              <TableHeader order={order} hideSelectBtn orderBy={orderBy} heading={tableHeading} numSelected={selected.length} rowCount={filteredList.length} onRequestSort={handleRequestSort} />

              <TableBody>
                {filteredList.map((payout, index) => <RequestRow row={payout} key={index} />)}
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