"use client";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button"; 
// LOCAL CUSTOM COMPONENT

import OrderActions from "../order-actions";
import TotalSummery from "../total-summery";
import PageWrapper from "../../page-wrapper";
import OrderedProduct from "../ordered-product";
import ShippingAddress from "../shipping-address"; 
// CUSTOM DATA MODEL


// ==============================================================
export default function OrderDetailsPageView({
  order
}) {
  return <PageWrapper title="Order Details">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card sx={{
          p: 3
        }}>
            {
            /* ADD PRODUCT & CHANGE ORDER STATUS ACTION  */
          }
            <OrderActions id={order.id} createdAt={order.createdAt} status={order.status} />

            {
            /* ORDERED PRODUCT LIST */
          }
            {order.items.map((item, index) => <OrderedProduct product={item} key={index} />)}
          </Card>
        </Grid>

        {
        /* SHIPPING ADDRESS & CUSTOMER NOTES */
      }
        <Grid item md={6} xs={12}>
          <ShippingAddress address={order.shippingAddress} />
        </Grid>

        {
        /* TOTAL SUMMERY OF ORDER */
      }
        <Grid item md={6} xs={12}>
          <TotalSummery total={order.totalPrice} discount={order.discount} />
        </Grid>

        {
        /* CHANGE BUTTON */
      }
        <Grid item xs={12}>
          <Button variant="contained" color="info">
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </PageWrapper>;
}