"use client";

import { Fragment } from "react";
import Card from "@mui/material/Card";
import CreditCard from "@mui/icons-material/CreditCard"; 
// Local CUSTOM COMPONENT

import PaymentForm from "../payment-form";
import DashboardHeader from "../../dashboard-header";
export default function PaymentDetailsPageView() {
  return <Fragment>
      {
      /* TITLE HEADER AREA */
    }
      <DashboardHeader title="Add New" Icon={CreditCard} href="/payment-methods" buttonText="Back Payment Methods" />

      {
      /* PAYMENT DETAILS EDIT FORM */
    }
      <Card sx={{
      padding: 3
    }}>
        <PaymentForm />
      </Card>
    </Fragment>;
}