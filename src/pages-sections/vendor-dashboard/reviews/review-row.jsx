import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating"; 
// MUI ICON COMPONENT

import RemoveRedEye from "@mui/icons-material/RemoveRedEye"; 
// GLOBAL CUSTOM COMPONENTS

import { FlexBox } from "components/flex-box";
import { Paragraph, Small } from "components/Typography"; 
// STYLED COMPONENTS

import { StyledIconButton, StyledTableCell, StyledTableRow } from "../styles"; 
// CUSTOM DATA MODEL


// =============================================================================
export default function ReviewRow({
  review
}) {
  const {
    image,
    name,
    customer,
    comment,
    rating
  } = review || {};
  return <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="left">
        <FlexBox alignItems="center" gap={1.5}>
          <Avatar alt={name} src={image} sx={{
          borderRadius: "8px"
        }} />
          <Paragraph fontWeight={600}>{name}</Paragraph>
        </FlexBox>
      </StyledTableCell>

      <StyledTableCell align="left">{customer}</StyledTableCell>

      <StyledTableCell align="left">
        <Small>{comment}</Small>
      </StyledTableCell>

      <StyledTableCell align="left">
        <Rating value={rating} size="small" color="warning" readOnly />
      </StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton>
          <RemoveRedEye />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>;
}