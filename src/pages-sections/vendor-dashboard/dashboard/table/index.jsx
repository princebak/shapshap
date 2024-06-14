import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import styled from "@mui/material/styles/styled";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Done from "@mui/icons-material/Done"; 
// GLOBAL CUSTOM HOOK

import useMuiTable from "hooks/useMuiTable"; 
// CUSTOM ICON COMPONENT

import Reload from "icons/Reload"; 
// GLOBAL CUSTOM COMPONENTS

import Scrollbar from "components/scrollbar";

// Local CUSTOM COMPONENT
import TableHeader from "./table-head"; 
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; 
// STYLED COMPONENTS

const StyledTableCell = styled(TableCell)(({
  theme
}) => ({
  fontSize: 13,
  paddingTop: 16,
  fontWeight: 600,
  paddingBottom: 16,
  color: theme.palette.grey[600],
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  ":first-of-type": {
    paddingLeft: 24
  }
}));
const StatusWrapper = styled("div", {
  shouldForwardProp: prop => prop !== "payment"
})(({
  theme,
  payment
}) => ({
  gap: 8,
  alignItems: "center",
  borderRadius: "8px",
  padding: "3px 12px",
  display: "inline-flex",
  color: payment ? theme.palette.error.main : theme.palette.success.main,
  backgroundColor: payment ? theme.palette.error[100] : theme.palette.success[100]
}));
const StyledTableRow = styled(TableRow)({
  ":last-child .MuiTableCell-root": {
    border: 0
  }
}); 
// =============================================================================


// =============================================================================
export default function DataListTable({
  dataList,
  tableHeading,
  type
}) {
  const {
    order,
    orderBy,
    filteredList,
    handleRequestSort
  } = useMuiTable({
    listData: dataList
  });
  let BODY_CONTENT = null;
  /* FOR STOCK OUT TABLE */

  if (type === "STOCK_OUT") {
    BODY_CONTENT = <TableBody>
        {filteredList.map((row, index) => {
        const {
          amount,
          stock,
          product
        } = row;
        return <StyledTableRow key={index}>
              <StyledTableCell align="left">{product}</StyledTableCell>
              <StyledTableCell align="center" sx={{
            color: "error.main"
          }}>
                {stock}
              </StyledTableCell>

              <StyledTableCell align="center">{currency(amount)}</StyledTableCell>
            </StyledTableRow>;
      })}
      </TableBody>;
  }
  /* FOR RECENT PURCHASE TABLE */


  if (type === "RECENT_PURCHASE") {
    BODY_CONTENT = <TableBody>
        {filteredList.map((row, index) => {
        const {
          id,
          amount,
          payment,
          product
        } = row;
        return <StyledTableRow key={index}>
              <StyledTableCell align="left">{id}</StyledTableCell>
              <StyledTableCell align="left">{product}</StyledTableCell>

              <StyledTableCell align="left">
                <StatusWrapper payment={payment === "Pending" ? 1 : 0}>
                  <div>{payment}</div>
                  {payment === "Pending" && <Reload sx={{
                fontSize: 13
              }} />}
                  {payment !== "Pending" && <Done sx={{
                fontSize: 13
              }} />}
                </StatusWrapper>
              </StyledTableCell>

              <StyledTableCell align="center">{currency(amount)}</StyledTableCell>
            </StyledTableRow>;
      })}
      </TableBody>;
  }

  return <Scrollbar>
      <TableContainer sx={{
      minWidth: type === "RECENT_PURCHASE" ? 600 : 0
    }}>
        <Table>
          <TableHeader order={order} orderBy={orderBy} heading={tableHeading} onRequestSort={handleRequestSort} />

          {BODY_CONTENT}
        </Table>
      </TableContainer>
    </Scrollbar>;
}