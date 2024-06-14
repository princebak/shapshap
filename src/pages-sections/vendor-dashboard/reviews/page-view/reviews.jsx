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

import ReviewRow from "../review-row";
import PageWrapper from "../../page-wrapper";
import { tableHeading } from "../table-heading"; 
// CUSTOM DATA MODEL


// =============================================================================
export default function ReviewsPageView({
  reviews
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
    listData: reviews
  });
  return <PageWrapper title="Product Reviews">
      <Card>
        <Scrollbar>
          <TableContainer sx={{
          minWidth: 1000
        }}>
            <Table>
              <TableHeader order={order} hideSelectBtn orderBy={orderBy} heading={tableHeading} rowCount={reviews.length} numSelected={selected.length} onRequestSort={handleRequestSort} />

              <TableBody>
                {filteredList.map((review, index) => <ReviewRow review={review} key={index} />)}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination onChange={handleChangePage} count={Math.ceil(reviews.length / rowsPerPage)} />
        </Stack>
      </Card>
    </PageWrapper>;
}