
// MUI ICON COMPONENT
import RemoveRedEye from "@mui/icons-material/RemoveRedEye"; 
// STYLED COMPONENTS

import { StatusWrapper, StyledTableRow, StyledTableCell, StyledIconButton } from "../styles"; 
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; 
// DATA TYPES


// ==============================================================
export default function RequestRow({
  request
}) {
  const {
    no,
    seller,
    shopName,
    totalAmount,
    requestAmount,
    date,
    status
  } = request || {};
  return <StyledTableRow role="checkbox">
      <StyledTableCell align="left">{no}</StyledTableCell>
      <StyledTableCell align="left">{seller}</StyledTableCell>
      <StyledTableCell align="left">{shopName}</StyledTableCell>
      <StyledTableCell align="left">{currency(totalAmount)}</StyledTableCell>
      <StyledTableCell align="left">{currency(requestAmount)}</StyledTableCell>
      <StyledTableCell align="left">{date}</StyledTableCell>

      <StyledTableCell align="center">
        <StatusWrapper status={status}>{status}</StatusWrapper>
      </StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton>
          <RemoveRedEye />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>;
}