
// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "lib"; 
// STYLED COMPONENTS

import { StatusWrapper, StyledTableCell, StyledTableRow } from "../styles"; 
// DATA TYPES


// ==============================================================
export default function RequestRow({
  row
}) {
  const {
    no,
    date,
    status,
    message,
    amount
  } = row || {};
  return <StyledTableRow role="checkbox">
      <StyledTableCell align="left">{no}</StyledTableCell>
      <StyledTableCell align="left">{date}</StyledTableCell>
      <StyledTableCell align="center">{currency(amount)}</StyledTableCell>
      <StyledTableCell align="center">
        <StatusWrapper status={status}>{status}</StatusWrapper>
      </StyledTableCell>
      <StyledTableCell align="center">{message}</StyledTableCell>
    </StyledTableRow>;
}