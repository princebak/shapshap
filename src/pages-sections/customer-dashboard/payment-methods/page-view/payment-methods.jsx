"use client";

import { Fragment } from "react";
import CreditCard from "@mui/icons-material/CreditCard"; 
// Local CUSTOM COMPONENT

import ListCard from "../list-card";
import Pagination from "../../pagination";
import DashboardHeader from "../../dashboard-header";
const PAYMENT_METHODS = [{
  id: "1050017AA",
  exp: "08 / 2022",
  payment_method: "Amex",
  card_no: "1234 **** **** ****"
}, {
  id: "1050017AB",
  exp: "10 / 2025",
  payment_method: "Mastercard",
  card_no: "1234 **** **** ****"
}, {
  id: "1050017AC",
  exp: "N/A",
  payment_method: "PayPal",
  card_no: "ui-lib@email.com"
}, {
  id: "1050017AD",
  exp: "08 / 2022",
  payment_method: "Visa",
  card_no: "1234 **** **** ****"
}];
export default function PaymentMethodsPageView() {
  return <Fragment>
      {
      /* TITLE HEADER AREA */
    }
      <DashboardHeader Icon={CreditCard} buttonText="Add New" title="Payment Methods" href="/payment-methods/add" />

      {
      /* ALL PAYMENT LIST AREA */
    }
      {PAYMENT_METHODS.map(item => <ListCard id={item.id} key={item.id} exp={item.exp} card_no={item.card_no} payment_method={item.payment_method} />)}

      {
      /* PAGINATION AREA */
    }
      <Pagination count={5} onChange={data => console.log(data)} />
    </Fragment>;
}