import Link from "next/link";
// MUI

import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
// GLOBAL CUSTOM HOOK

// GLOBAL CUSTOM COMPONENTS

import { Span } from "components/Typography";
import { FlexBetween, FlexBox } from "components/flex-box";
// DUMMY CUSTOM DATA

// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeOrder } from "redux/slices/orderSlice";
import { useRouter } from "next/navigation";

export default function CheckoutForm({ total, products }) {
  const { currentOrder } = useSelector((state) => state.order);
  const [note, setNote] = useState(currentOrder.note);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleNext = (e) => {
    e.preventDefault();
    const rawTotal = products.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );
    const totalDiscount = products.reduce((acc, item) => {
      const discount = item.discount || 0;
      const price = item.price || 0;
      const discountAmount = ((price * discount) / 100) * item.qty;
      return acc + discountAmount;
    }, 0);
    const shippingFee = 0;
    const tax = 0;
    const total = rawTotal - totalDiscount + shippingFee + tax;

    dispatch(
      changeOrder({
        note: note,
        products: products,
        rawTotal: rawTotal,
        totalDiscount: totalDiscount,
        shippingFee: shippingFee,
        tax: tax,
        total: total,
      })
    );
    router.push("/checkout");
  };

  return (
    <Card
      sx={{
        padding: 3,
      }}
    >
      <FlexBetween mb={2}>
        <Span color="grey.600">Total:</Span>

        <Span fontSize={18} fontWeight={600} lineHeight="1">
          {currency(total)}
        </Span>
      </FlexBetween>

      <Divider
        sx={{
          mb: 2,
        }}
      />

      <FlexBox alignItems="center" columnGap={1} mb={2}>
        <Span fontWeight="600">Additional Comments</Span>

        <Span
          p="6px 10px"
          fontSize={12}
          lineHeight="1"
          borderRadius="3px"
          color="primary.main"
          bgcolor="primary.light"
        >
          Note
        </Span>
      </FlexBox>
      {/* COMMENTS TEXT FIELD */}
      <TextField
        variant="outlined"
        rows={6}
        fullWidth
        multiline
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <Divider
        sx={{
          mb: 2,
        }}
      />

      <Button
        fullWidth
        color="primary"
        variant="contained"
        type="submit"
        onClick={(e) => handleNext(e)}
      >
        Checkout Now
      </Button>
    </Card>
  );
}
