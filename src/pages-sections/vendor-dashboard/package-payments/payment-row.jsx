
// MUI ICON COMPONENTS
import Delete from "@mui/icons-material/Delete";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye"; 
// STYLED COMPONENTS

import { StyledIconButton, StyledTableCell, StyledTableRow } from "../styles"; 
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; 
// DATA TYPES


// ==============================================================
export default function PaymentRow({
  payment
}) {
  const {
    no,
    date,
    seller,
    amount,
    package: sellerPackage,
    payment: packagePayment
  } = payment || {};
  return <StyledTableRow role="checkbox">
      <StyledTableCell align="left">{no}</StyledTableCell>
      <StyledTableCell align="left">{seller}</StyledTableCell>
      <StyledTableCell align="left">{sellerPackage}</StyledTableCell>
      <StyledTableCell align="left">{currency(amount)}</StyledTableCell>
      <StyledTableCell align="left">{packagePayment}</StyledTableCell>
      <StyledTableCell align="left">{date}</StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton>
          <RemoveRedEye />
        </StyledIconButton>

        <StyledIconButton>
          <Delete />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>;
}