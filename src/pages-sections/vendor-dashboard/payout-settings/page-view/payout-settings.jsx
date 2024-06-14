"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider"; 
// GLOBAL CUSTOM COMPONENT

import { H3 } from "components/Typography"; 
// LOCAL CUSTOM COMPONENTS

import CashPayment from "../cash-payment";
import CardPayment from "../card-payment";
import BankPayment from "../bank-payment";
export default function PayoutSettingsPageView() {
  return <Box py={4} maxWidth={740} margin="auto">
      <H3 mb={2}>Payout Settings</H3>

      <Card sx={{
      p: 3
    }}>
        {
        /* CASH PAYMENT FORM */
      }
        <CashPayment />

        <Divider sx={{
        my: 4
      }} />

        {
        /* CARD PAYMENT FORM */
      }
        <CardPayment />

        <Divider sx={{
        my: 4
      }} />

        {
        /* BANK PAYMENT FORM */
      }
        <BankPayment />
      </Card>
    </Box>;
}