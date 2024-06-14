"use client";

import { Fragment } from "react";
import ShoppingBag from "@mui/icons-material/ShoppingBag"; 
// Local CUSTOM COMPONENTS

import OrderRow from "../order-row";
import Pagination from "../../pagination";
import DashboardHeader from "../../dashboard-header"; 
// CUSTOM DATA MODEL


// ====================================================
export default function OrdersPageView({
  orders
}) {
  return <Fragment>
      {
      /* TITLE HEADER AREA */
    }
      <DashboardHeader Icon={ShoppingBag} title="My Orders" />

      {
      /* ORDER LIST AREA */
    }
      {orders.map(order => <OrderRow order={order} key={order.id} />)}

      {
      /* ORDERS PAGINATION */
    }
      <Pagination count={5} onChange={data => console.log(data)} />
    </Fragment>;
}