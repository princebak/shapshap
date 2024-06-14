"use client";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider"; 
// GLOBAL CUSTOM COMPONENTS

import { Paragraph } from "components/Typography"; 
// GLOBAL CUSTOM HOOK

import useCart from "hooks/useCart"; 
// LOCAL CUSTOM COMPONENTS

import CartItem from "./cart-item";
import ListItem from "../list-item";
export default function CheckoutAltSummary() {
  const {
    state
  } = useCart();
  return <div>
      <Paragraph color="secondary.900" fontWeight={700} mb={2}>
        Your order
      </Paragraph>

      {state.cart.map(({
      name,
      qty,
      price,
      id
    }) => <CartItem name={name} price={price} qty={qty} key={id} />)}

      <Box component={Divider} borderColor="grey.300" my={3} />

      <ListItem title="Subtotal" value={2610} />
      <ListItem title="Shipping" />
      <ListItem title="Tax" value={40} />
      <ListItem title="Discount" mb={3} />

      <Box component={Divider} borderColor="grey.300" mb={1} />

      <ListItem title="Total" value={2650} color="inherit" />
    </div>;
}