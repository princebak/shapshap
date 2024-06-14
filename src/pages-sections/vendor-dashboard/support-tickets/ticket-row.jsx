
// MUI ICON COMPONENTS
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete"; 
// STYLED COMPONENTS

import { StatusWrapper, StyledTableRow, StyledTableCell, StyledIconButton } from "../styles"; 
// CUSTOM DATA MODEL


// ==============================================================
export default function TicketRow({
  ticket
}) {
  const {
    title,
    type,
    date,
    category
  } = ticket || {};
  return <StyledTableRow role="checkbox">
      <StyledTableCell align="left">{title}</StyledTableCell>

      <StyledTableCell align="left">
        <StatusWrapper status={type}>{type}</StatusWrapper>
      </StyledTableCell>

      <StyledTableCell align="left">{date}</StyledTableCell>
      <StyledTableCell align="left">{category}</StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton>
          <Edit />
        </StyledIconButton>

        <StyledIconButton>
          <Delete />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>;
}