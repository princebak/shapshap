import { useState } from "react";
import Avatar from "@mui/material/Avatar"; 
// MUI ICON COMPONENT

import Delete from "@mui/icons-material/Delete"; 
// GLOBAL CUSTOM COMPONENTS

import { FlexBox } from "components/flex-box";
import BazaarSwitch from "components/BazaarSwitch";
import { Paragraph, Small } from "components/Typography"; 
// STYLED COMPONENTS

import { StyledIconButton, StyledTableCell, StyledTableRow } from "../styles"; 
// ========================================================================


// ========================================================================
export default function ReviewRow({
  review
}) {
  const {
    customer,
    product,
    comment,
    published,
    productImage
  } = review || {};
  const [productPublish, setProductPublish] = useState(published);
  return <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="left">
        <FlexBox alignItems="center" gap={1.5}>
          <Avatar alt="product" src={productImage} sx={{
          borderRadius: 2
        }} />
          <Paragraph fontWeight={600}>{product}</Paragraph>
        </FlexBox>
      </StyledTableCell>

      <StyledTableCell align="left">{customer}</StyledTableCell>

      <StyledTableCell align="left">
        <Small>{comment}</Small>
      </StyledTableCell>

      <StyledTableCell align="left">
        <BazaarSwitch color="info" checked={productPublish} onChange={() => setProductPublish(state => !state)} />
      </StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton>
          <Delete />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>;
}