import Avatar from "@mui/material/Avatar"; 
// MUI ICON COMPONENTS

import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete"; 
// GLOBAL CUSTOM COMPONENTS

import { FlexBox } from "components/flex-box";
import { Paragraph } from "components/Typography"; 
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; 
// STYLED COMPONENTS

import { StyledIconButton, StyledTableCell, StyledTableRow } from "../styles"; 
// ========================================================================


// ========================================================================
export default function CustomerRow({
  customer
}) {
  const {
    email,
    name,
    phone,
    avatar,
    balance,
    orders
  } = customer || {};
  const STYLE = {
    fontWeight: 400
  };
  return <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="left">
        <FlexBox alignItems="center" gap={1.5}>
          <Avatar alt={name} src={avatar} />
          <Paragraph fontWeight={600}>{name}</Paragraph>
        </FlexBox>
      </StyledTableCell>

      <StyledTableCell align="left" sx={STYLE}>
        {phone}
      </StyledTableCell>

      <StyledTableCell align="left" sx={STYLE}>
        {email}
      </StyledTableCell>

      <StyledTableCell align="left" sx={STYLE}>
        {currency(balance)}
      </StyledTableCell>

      <StyledTableCell align="left" sx={STYLE}>
        {orders}
      </StyledTableCell>

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