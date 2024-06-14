"use client";

import Grid from "@mui/material/Grid"; 
// GLOBAL CUSTOM HOOK

import useCart from "hooks/useCart"; 
// LOCAL CUSTOM COMPONENTS

import CartItem from "../cart-item";
import CheckoutForm from "../checkout-form";
export default function CartPageView() {
  const {
    state
  } = useCart();
  return <Grid container spacing={3}>
      {
      /* CART PRODUCT LIST */
    }
      <Grid item md={8} xs={12}>
        {state.cart.map(({
        name,
        id,
        price,
        qty,
        slug,
        imgUrl
      }) => <CartItem id={id} key={id} qty={qty} name={name} slug={slug} price={price} imgUrl={imgUrl} />)}
      </Grid>

      {
      /* CHECKOUT FORM */
    }
      <Grid item md={4} xs={12}>
        <CheckoutForm />
      </Grid>
    </Grid>;
}