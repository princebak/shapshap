import Link from "next/link";
import { Fragment, useState } from "react";
// MUI

import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
// GLOBAL CUSTOM COMPONENTS

import FlexBox from "components/flex-box/flex-box";
// Local CUSTOM COMPONENTS

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import FormLabel from "./form-label";
import CreditCardForm from "./credit-card-form";
import { convertToSubCurrency } from "utils/utilFunctions";
import { useSelector } from "react-redux";

const stripePromise = loadStripe(
  "pk_test_51IsqFIHteDFlXfC5jq5UwTbQDkHz5JUPkzJTwZwbVE63kzn2T65f3STLeHMQjRhD0MAycmzXU0r92lV9YZMwlOeT00RXQAUwrc"
);

export default function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const { currentOrder } = useSelector((state) => state.order);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.name);
  };

  return (
    <Fragment>
      <Card
        sx={{
          padding: {
            sm: 3,
            xs: 2,
          },
          mb: 4,
        }}
      >
        {/* CREDIT CARD OPTION */}
        <FormLabel
          name="credit-card"
          title="Pay with Stripe"
          handleChange={handlePaymentMethodChange}
          checked={paymentMethod === "credit-card"}
        />

        {paymentMethod === "credit-card" && (
          <Elements
            stripe={stripePromise}
            options={{
              mode: "payment",
              amount: convertToSubCurrency(currentOrder.total),
              currency: "usd",
            }}
          >
            <CreditCardForm amount={convertToSubCurrency(currentOrder.total)} />
          </Elements>
        )}

        <Divider
          sx={{
            my: 3,
            mx: -4,
          }}
        />

        {/* PAYPAL CARD OPTION */}
        {/*       <FormLabel name="paypal" title="Pay with Paypal" handleChange={handlePaymentMethodChange} checked={paymentMethod === "paypal"} />

        {paymentMethod === "paypal" && <FlexBox alignItems="flex-end" gap={2} mb={4}>
            <TextField fullWidth name="email" type="email" label="Paypal Email" />
            <Button variant="outlined" color="primary" type="button">
              Submit
            </Button>
          </FlexBox>}

        <Divider sx={{
        my: 3,
        mx: -4
      }} /> */}

        {/* CASH ON DELIVERY OPTION */}
        <FormLabel
          name="cod"
          title="Cash On Delivery"
          handleChange={handlePaymentMethodChange}
          checked={paymentMethod === "cod"}
        />
      </Card>

      {/* BUTTONS SECTION */}
      <Stack direction="row" spacing={3}>
        <Button
          LinkComponent={Link}
          href="/checkout"
          variant="outlined"
          color="primary"
          type="button"
          fullWidth
        >
          Back to checkout
        </Button>
      </Stack>
    </Fragment>
  );
}
