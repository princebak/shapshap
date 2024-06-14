import Link from "next/link";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton"; 
// MUI ICON COMPONENTS

import Add from "@mui/icons-material/Add";
import Close from "@mui/icons-material/Close";
import Remove from "@mui/icons-material/Remove"; 
// GLOBAL CUSTOM COMPONENTS

import Image from "components/BazaarImage";
import { Span } from "components/Typography";
import { FlexBox } from "components/flex-box"; 
// GLOBAL CUSTOM HOOK

import useCart from "hooks/useCart"; 
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; 
// STYLED COMPONENT

import { Wrapper } from "./styles"; 
// =========================================================


// =========================================================
export default function CartItem({
  id,
  name,
  qty,
  price,
  imgUrl,
  slug
}) {
  const {
    dispatch
  } = useCart(); 
// HANDLE CHANGE CART PRODUCT QUANTITY

  const handleCartAmountChange = amount => () => {
    dispatch({
      type: "CHANGE_CART_AMOUNT",
      payload: {
        id,
        name,
        price,
        imgUrl,
        qty: amount,
        slug
      }
    });
  };

  return <Wrapper>
      <Image alt={name} width={140} height={140} display="block" src={imgUrl || "/assets/images/products/iphone-xi.png"} />

      {
      /* DELETE BUTTON */
    }
      <IconButton size="small" onClick={handleCartAmountChange(0)} sx={{
      position: "absolute",
      right: 15,
      top: 15
    }}>
        <Close fontSize="small" />
      </IconButton>

      <FlexBox p={2} rowGap={2} width="100%" flexDirection="column">
        <Link href={`/products/${slug}`}>
          <Span ellipsis fontWeight="600" fontSize={18}>
            {name}
          </Span>
        </Link>

        {
        /* PRODUCT PRICE SECTION */
      }
        <FlexBox gap={1} flexWrap="wrap" alignItems="center">
          <Span color="grey.600">
            {currency(price)} x {qty}
          </Span>

          <Span fontWeight={600} color="primary.main">
            {currency(price * qty)}
          </Span>
        </FlexBox>

        {
        /* PRODUCT QUANTITY INC/DEC BUTTONS */
      }
        <FlexBox alignItems="center">
          <Button color="primary" sx={{
          p: "5px"
        }} variant="outlined" disabled={qty === 1} onClick={handleCartAmountChange(qty - 1)}>
            <Remove fontSize="small" />
          </Button>

          <Span mx={1} fontWeight={600} fontSize={15}>
            {qty}
          </Span>

          <Button color="primary" sx={{
          p: "5px"
        }} variant="outlined" onClick={handleCartAmountChange(qty + 1)}>
            <Add fontSize="small" />
          </Button>
        </FlexBox>
      </FlexBox>
    </Wrapper>;
}