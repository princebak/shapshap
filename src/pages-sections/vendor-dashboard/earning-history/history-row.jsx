import RemoveRedEye from "@mui/icons-material/RemoveRedEye"; 
// STYLED COMPONENTS

import { StyledIconButton, StyledTableCell, StyledTableRow } from "../styles"; 
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; 
// DATA TYPES


// ==============================================================
export default function HistoryRow({
  history
}) {
  const {
    no,
    orderNo,
    shopName,
    adminCommission,
    sellerEarning,
    date
  } = history || {};
  return <StyledTableRow role="checkbox">
      <StyledTableCell align="left">{no}</StyledTableCell>
      <StyledTableCell align="left">{orderNo}</StyledTableCell>
      <StyledTableCell align="left">{shopName}</StyledTableCell>
      <StyledTableCell align="center">{currency(adminCommission)}</StyledTableCell>
      <StyledTableCell align="center">{currency(sellerEarning)}</StyledTableCell>
      <StyledTableCell align="left">{date}</StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton>
          <RemoveRedEye />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>;
}