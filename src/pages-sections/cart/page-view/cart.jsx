"use client";

import Grid from "@mui/material/Grid";
// GLOBAL CUSTOM HOOK

import useCart from "hooks/useCart";
// LOCAL CUSTOM COMPONENTS

import CartItem from "../cart-item";
import CheckoutForm from "../checkout-form";
import { useSelector } from "react-redux";
import { getTotalGrossPriceAndDiscount } from "utils/utilFunctions";

export default function CartPageView() {
  const { currentCart } = useSelector((state) => state.cart);

  const { grossTotalPrice, totalDiscount } =
    getTotalGrossPriceAndDiscount(currentCart);

  return (
    <Grid container spacing={3}>
      {/* CART PRODUCT LIST */}

      <Grid item md={8} xs={12}>
        {currentCart.map(({ name, id, price, qty, slug, imgUrl, discount }) => (
          <CartItem
            id={id}
            key={id}
            qty={qty}
            name={name}
            slug={slug}
            price={price}
            imgUrl={imgUrl}
            discount={discount}
          />
        ))}
      </Grid>

      {/* CHECKOUT FORM */}
      <Grid item md={4} xs={12}>
        <CheckoutForm
          total={grossTotalPrice - totalDiscount}
          products={currentCart}
        />
      </Grid>
    </Grid>
  );
}
