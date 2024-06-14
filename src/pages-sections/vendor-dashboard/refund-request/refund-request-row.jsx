import Avatar from "@mui/material/Avatar"; 
// MUI ICON COMPONENTS

import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye"; 
// GLOBAL CUSTOM COMPONENTS

import FlexBox from "components/flex-box/flex-box";
import { Paragraph } from "components/Typography"; 
// STYLED COMPONENTS

import { StatusWrapper, StyledTableRow, StyledTableCell, StyledIconButton } from "../styles"; 
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; 
// DATA TYPES


// ========================================================================
export default function RefundRequestRow({
  request
}) {
  const {
    name,
    image,
    orderNo,
    shopName,
    amount,
    status
  } = request || {};
  return <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="left">#{orderNo}</StyledTableCell>

      <StyledTableCell align="left" sx={{
      fontWeight: 400
    }}>
        {shopName}
      </StyledTableCell>

      <StyledTableCell align="left">
        <FlexBox alignItems="center" gap={1.5}>
          <Avatar alt={name} src={image} sx={{
          borderRadius: 2
        }} />
          <Paragraph>{name}</Paragraph>
        </FlexBox>
      </StyledTableCell>

      <StyledTableCell align="left" sx={{
      fontWeight: 400
    }}>
        {currency(amount)}
      </StyledTableCell>

      <StyledTableCell align="left" sx={{
      fontWeight: 400
    }}>
        <StatusWrapper status={status}>{status}</StatusWrapper>
      </StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton>
          <Edit />
        </StyledIconButton>

        <StyledIconButton>
          <RemoveRedEye />
        </StyledIconButton>

        <StyledIconButton>
          <Delete />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>;
}