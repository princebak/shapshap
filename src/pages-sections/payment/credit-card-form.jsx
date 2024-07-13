"use client";

import { useRouter } from "next/navigation";
// MUI

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// YUP

import * as yup from "yup";
// FORMIK

import { useFormik } from "formik";
// STRIPE

import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "components/Loader";
import MessageAlert from "components/MessageAlert";
import { localLink, orderStatus, paymentMethod } from "utils/constants";
import { changeOrder } from "redux/slices/orderSlice";
import { createOrder } from "services/OrderService";

export default function CreditCardForm({ amount }) {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [savedOrderCode, setSavedOrderCode] = useState(null);
  const { currentOrder } = useSelector((state) => state.order);

  const dispatch = useDispatch();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }
    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }
    const { error } = stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${localLink.APP_BASE_PATH}/order-confirmation`,
      },
    });
    if (error) {
      setErrorMessage(error.message);
    } else {
      // When the payment is done, the Order can be completed
      const newOrder = {
        ...currentOrder,
        status: orderStatus.PROCESSING,
        paymentMethod: paymentMethod.CREDIT_DEBIT,
      };

      const savedOrder = await createOrder(newOrder);
      setSavedOrderCode(savedOrder.code);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount,
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  useEffect(() => {
    if (savedOrderCode) {
      dispatch(
        changeOrder({
          code: savedOrderCode,
          status: orderStatus.PROCESSING,
          paymentMethod: paymentMethod.CREDIT_DEBIT,
        })
      );
    }
  }, [savedOrderCode]);

  if (!stripe || !clientSecret || !elements) {
    return <Loader />;
  }

  return (
    <form onSubmit={handleFormSubmit} style={{ marginTop: "10px" }}>
      <MessageAlert message={{ content: errorMessage, color: "red" }} />
      {clientSecret && <PaymentElement />}

      <Grid item sm={6} xs={12} mt={3}>
        <Button
          disabled={!stripe || loading}
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
        >
          {!loading ? `Pay $${amount / 100}` : "Processing..."}
        </Button>
      </Grid>
    </form>
  );
}
