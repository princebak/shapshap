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

import SearchArea from "../../search-box";
import DriverRow from "../driver-row";
import PageWrapper from "../../page-wrapper";
// TABLE HEAD COLUMN DATA

import { tableHeading } from "../table-heading";
// =============================================================================

// =============================================================================
export default function DriversPageView({ customers }) {
  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort,
  } = useMuiTable({
    listData: customers,
  });
  return (
    <PageWrapper title="Drivers">
      <SearchArea
        handleSearch={() => {}}
        buttonText="Add Driver"
        url="/admin/drivers"
        searchPlaceholder="Search driver..."
      />

      <Card>
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
                {filteredList.map((customer) => (
                  <DriverRow customer={customer} key={customer.id} />
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
      </Card>
    </PageWrapper>
  );
}
