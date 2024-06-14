
// MUI ICON COMPONENT
import RemoveRedEye from "@mui/icons-material/RemoveRedEye"; 
// STYLED COMPONENTS

import { StyledIconButton, StyledTableCell, StyledTableRow } from "../styles"; 
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; 
// DATA TYPES


// ==============================================================
export default function PayoutRow({
  payout
}) {
  const {
    no,
    sellerInfo,
    amount,
    date,
    payment
  } = payout || {};
  return <StyledTableRow role="checkbox">
      <StyledTableCell align="left">{no}</StyledTableCell>
      <StyledTableCell align="left">{sellerInfo}</StyledTableCell>
      <StyledTableCell align="left">{currency(amount)}</StyledTableCell>
      <StyledTableCell align="left">{date}</StyledTableCell>
      <StyledTableCell align="center">{payment}</StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton>
          <RemoveRedEye />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>;
}