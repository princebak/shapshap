import { useState } from "react";
import Avatar from "@mui/material/Avatar"; 
// MUI ICON COMPONENTS

import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye"; 
// GLOBAL CUSTOM COMPONENTS

import FlexBox from "components/flex-box/flex-box";
import BazaarSwitch from "components/BazaarSwitch";
import { Paragraph, Small } from "components/Typography"; 
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; 
// STYLED COMPONENTS

import { StyledIconButton, StyledTableCell, StyledTableRow } from "../styles"; 
// DATA TYPES


// ========================================================================
export default function SellerRow({
  seller
}) {
  const {
    name,
    phone,
    image,
    balance,
    published,
    shopName,
    package: sellerPackage
  } = seller || {};
  const [shopPublish, setShopPublish] = useState(published);
  return <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="left">
        <FlexBox alignItems="center" gap={1.5}>
          <Avatar src={image} alt={name} />

          <div>
            <Paragraph fontWeight={600}>{name}</Paragraph>
            <Small color="grey.600">{phone}</Small>
          </div>
        </FlexBox>
      </StyledTableCell>

      <StyledTableCell align="left">{shopName}</StyledTableCell>

      <StyledTableCell align="left" sx={{
      fontWeight: 400
    }}>
        {sellerPackage}
      </StyledTableCell>

      <StyledTableCell align="left" sx={{
      fontWeight: 400
    }}>
        {currency(balance)}
      </StyledTableCell>

      <StyledTableCell align="left">
        <BazaarSwitch color="info" checked={shopPublish} onChange={() => setShopPublish(state => !state)} />
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