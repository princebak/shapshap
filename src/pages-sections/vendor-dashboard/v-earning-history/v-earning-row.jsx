
// MUI ICON COMPONENTS
import RemoveRedEye from "@mui/icons-material/RemoveRedEye"; 
// STYLED COMPONENTS

import { StyledIconButton, StyledTableCell, StyledTableRow } from "../styles"; 
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; 
// CUSTOM DATA MODEL


// =============================================================================
export default function VendorEarningRow({
  row
}) {
  const {
    no,
    orderNo,
    adminCommission,
    sellerEarning,
    date
  } = row || {};
  return <StyledTableRow role="checkbox">
      <StyledTableCell align="left">{no}</StyledTableCell>
      <StyledTableCell align="left">{orderNo}</StyledTableCell>
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