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

import FormLabel from "./form-label";
import CreditCardForm from "./credit-card-form";
export default function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const handlePaymentMethodChange = event => {
    setPaymentMethod(event.target.name);
  };

  return <Fragment>
      <Card sx={{
      padding: {
        sm: 3,
        xs: 2
      },
      mb: 4
    }}>
        {
        /* CREDIT CARD OPTION */
      }
        <FormLabel name="credit-card" title="Pay with credit card" handleChange={handlePaymentMethodChange} checked={paymentMethod === "credit-card"} />

        {paymentMethod === "credit-card" && <CreditCardForm />}

        <Divider sx={{
        my: 3,
        mx: -4
      }} />

        {
        /* PAYPAL CARD OPTION */
      }
        <FormLabel name="paypal" title="Pay with Paypal" handleChange={handlePaymentMethodChange} checked={paymentMethod === "paypal"} />

        {paymentMethod === "paypal" && <FlexBox alignItems="flex-end" gap={2} mb={4}>
            <TextField fullWidth name="email" type="email" label="Paypal Email" />
            <Button variant="outlined" color="primary" type="button">
              Submit
            </Button>
          </FlexBox>}

        <Divider sx={{
        my: 3,
        mx: -4
      }} />

        {
        /* CASH ON DELIVERY OPTION */
      }
        <FormLabel name="cod" title="Cash On Delivery" handleChange={handlePaymentMethodChange} checked={paymentMethod === "cod"} />
      </Card>

      {
      /* BUTTONS SECTION */
    }
      <Stack direction="row" spacing={3}>
        <Button LinkComponent={Link} href="/checkout" variant="outlined" color="primary" type="button" fullWidth>
          Back to checkout
        </Button>

        <Button LinkComponent={Link} variant="contained" color="primary" href="/orders" type="submit" fullWidth>
          Review
        </Button>
      </Stack>
    </Fragment>;
}