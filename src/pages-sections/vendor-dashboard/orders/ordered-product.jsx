import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton"; 
// MUI ICON COMPONENT

import Delete from "@mui/icons-material/Delete"; 
// GLOBAL CUSTOM COMPONENTS

import { FlexBetween, FlexBox } from "components/flex-box";
import { H6, Paragraph } from "components/Typography"; 
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; 
// CUSTOM DATA MODEL


// ==============================================================
export default function OrderedProduct({
  product
}) {
  const {
    product_img,
    product_name,
    product_price,
    product_quantity
  } = product || {};
  return <Box my={2} gap={2} display="grid" gridTemplateColumns={{
    md: "1fr 1fr",
    xs: "1fr"
  }}>
      <FlexBox flexShrink={0} gap={1.5} alignItems="center">
        <Avatar src={product_img} alt={product_name} sx={{
        height: 64,
        width: 64,
        borderRadius: 2
      }} />

        <div>
          <H6 mb={1}>{product_name}</H6>

          <FlexBox alignItems="center" gap={1}>
            <Paragraph fontSize={14} color="grey.600">
              {currency(product_price)} x
            </Paragraph>

            <Box maxWidth={60}>
              <TextField defaultValue={product_quantity} type="number" fullWidth />
            </Box>
          </FlexBox>
        </div>
      </FlexBox>

      <FlexBetween flexShrink={0}>
        <Paragraph color="grey.600">Product properties: Black, L</Paragraph>

        <IconButton>
          <Delete sx={{
          color: "grey.600",
          fontSize: 22
        }} />
        </IconButton>
      </FlexBetween>
    </Box>;
}