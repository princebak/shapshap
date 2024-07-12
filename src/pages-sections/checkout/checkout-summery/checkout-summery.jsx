import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
// LOCAL CUSTOM COMPONENT

import ListItem from "../list-item";
// GLOBAL CUSTOM COMPONENTS

import { Paragraph } from "components/Typography";
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib";
import { useSelector } from "react-redux";
export default function CheckoutSummary() {
  const { currentOrder } = useSelector((state) => state.order);
  return (
    <Card
      sx={{
        p: 3,
      }}
    >
      <ListItem mb={1} title="Subtotal" value={currentOrder.rawTotal} />
      <ListItem mb={1} title="Shipping" value={currentOrder.shippingFee} />
      <ListItem mb={1} title="Tax" value={currentOrder.tax} />
      <ListItem mb={1} title="Discount" value={currentOrder.totalDiscount} />

      <Divider
        sx={{
          my: 2,
        }}
      />

      <Paragraph fontSize={25} fontWeight={600} lineHeight={1}>
        {currency(currentOrder.total)}
      </Paragraph>
    </Card>
  );
}
