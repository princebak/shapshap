"use client";

import Link from "next/link";
import { Fragment } from "react";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import clsx from "clsx"; 
// MUI ICON COMPONENTS

import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove"; 
// GLOBAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import { FlexBox } from "components/flex-box";
import { H6, Paragraph } from "components/Typography"; 
// LOCAL CUSTOM HOOKS

import useProduct from "../use-product"; 
// CUSTOM UTILS LIBRARY FUNCTIONS

import { calculateDiscount, currency } from "lib"; 
// STYLED COMPONENTS

import { Content, PriceText } from "./styles"; 
// CUSTOM DATA MODEL


// ==============================================================
export default function ProductCard14({
  product,
  btnSmall = false
}) {
  const {
    id,
    slug,
    title,
    thumbnail,
    price,
    discount
  } = product || {};
  const {
    cartItem,
    handleCartAmountChange
  } = useProduct(slug);

  const handleIncrementQuantity = () => {
    const product = {
      id,
      slug,
      price,
      name: title,
      imgUrl: thumbnail,
      qty: (cartItem?.qty || 0) + 1
    };
    handleCartAmountChange(product);
  };

  const handleDecrementQuantity = () => {
    const product = {
      id,
      slug,
      price,
      name: title,
      imgUrl: thumbnail,
      qty: (cartItem?.qty || 0) - 1
    };
    handleCartAmountChange(product, "remove");
  };

  return <Fragment>
      <Link href={`/products/${slug}`}>
        <FlexBox bgcolor="grey.50" borderRadius={3} mb={2}>
          <LazyImage alt={title} width={260} height={280} src={thumbnail} />
        </FlexBox>
      </Link>

      <Content>
        <H6 fontSize={17} fontWeight={700}>
          {title}
        </H6>

        <Paragraph color="grey.600" fontWeight={600}>
          12 pcs
        </Paragraph>

        <PriceText>
          {calculateDiscount(price, discount)}
          {discount ? <span className="base-price">{currency(price)}</span> : null}
        </PriceText>

        <div className={clsx({
        "button-small": btnSmall
      })}>
          {!cartItem?.qty ? <Button fullWidth disableElevation color="primary" variant="contained" onClick={handleIncrementQuantity}>
              Add To Cart
            </Button> : <div className="button-group">
              <ButtonBase className="base-button" onClick={handleDecrementQuantity}>
                <Remove fontSize="small" />
              </ButtonBase>

              <Paragraph flex={1} fontWeight="600" lineHeight={1.75}>
                {cartItem?.qty}
              </Paragraph>

              <ButtonBase className="base-button" onClick={handleIncrementQuantity}>
                <Add fontSize="small" />
              </ButtonBase>
            </div>}
        </div>
      </Content>
    </Fragment>;
}