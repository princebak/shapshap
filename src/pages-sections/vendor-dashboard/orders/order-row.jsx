import { useRouter } from "next/navigation";
import { format } from "date-fns"; 
// MUI ICON COMPONENTS

import Delete from "@mui/icons-material/Delete";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye"; 
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; 
// STYLED COMPONENTS

import { StatusWrapper, StyledIconButton, StyledTableCell, StyledTableRow } from "../styles"; 
// ========================================================================


// ========================================================================
export default function OrderRow({
  order
}) {
  const {
    amount,
    id,
    qty,
    purchaseDate,
    billingAddress,
    status
  } = order || {};
  const router = useRouter();
  return <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="left">#{id.split("-")[0]}</StyledTableCell>
      <StyledTableCell align="left">{qty}</StyledTableCell>

      <StyledTableCell align="left" sx={{
      fontWeight: 400
    }}>
        {format(new Date(purchaseDate), "dd MMM yyyy")}
      </StyledTableCell>

      <StyledTableCell align="left" sx={{
      fontWeight: 400
    }}>
        {billingAddress}
      </StyledTableCell>

      <StyledTableCell align="left">{currency(amount)}</StyledTableCell>

      <StyledTableCell align="left">
        <StatusWrapper status={status}>{status}</StatusWrapper>
      </StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton onClick={() => router.push(`/admin/orders/${id}`)}>
          <RemoveRedEye />
        </StyledIconButton>

        <StyledIconButton>
          <Delete />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>;
}