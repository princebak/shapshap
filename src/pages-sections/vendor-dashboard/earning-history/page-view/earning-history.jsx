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

import HistoryRow from "../history-row";
import PageWrapper from "../../page-wrapper"; 
// TABLE HEAD COLUMN DATA

import { tableHeading } from "../table-heading"; 
// DATA TYPES


// =============================================================================
export default function EarningHistoryPageView({
  earnings
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
    listData: earnings,
    defaultSort: "no"
  });
  return <PageWrapper title="Earning History">
      <Card>
        <Scrollbar>
          <TableContainer sx={{
          minWidth: 1100
        }}>
            <Table>
              <TableHeader order={order} hideSelectBtn orderBy={orderBy} heading={tableHeading} rowCount={earnings.length} numSelected={selected.length} onRequestSort={handleRequestSort} />

              <TableBody>
                {filteredList.map((item, index) => <HistoryRow history={item} key={index} />)}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination onChange={handleChangePage} count={Math.ceil(earnings.length / rowsPerPage)} />
        </Stack>
      </Card>
    </PageWrapper>;
}