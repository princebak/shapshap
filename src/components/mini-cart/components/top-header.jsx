import IconButton from "@mui/material/IconButton";
import Clear from "@mui/icons-material/Clear"; 
// LOCAL CUSTOM COMPONENTS

import { Paragraph } from "components/Typography";
import { FlexBetween, FlexBox } from "components/flex-box"; 
// CUSTOM ICON COMPONENT

import CartBag from "icons/CartBag"; 
// ==============================================================


// ==============================================================
export default function TopHeader({
  toggle,
  total
}) {
  return <FlexBetween mx={3} height={74}>
      <FlexBox gap={1} alignItems="center" color="secondary.main">
        <CartBag color="inherit" />

        <Paragraph lineHeight={0} fontWeight={600}>
          {total} item
        </Paragraph>
      </FlexBox>

      <IconButton onClick={toggle}>
        <Clear />
      </IconButton>
    </FlexBetween>;
}