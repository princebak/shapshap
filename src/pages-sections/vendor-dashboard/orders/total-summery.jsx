import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField"; 
// GLOBAL CUSTOM COMPONENTS

import { FlexBetween, FlexBox } from "components/flex-box";
import { H5, H6, Paragraph } from "components/Typography"; 
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; 
// ==============================================================


// ==============================================================
export default function TotalSummery({
  total,
  discount
}) {
  return <Card sx={{
    px: 3,
    py: 4
  }}>
      <H5 mt={0} mb={2}>
        Total Summary
      </H5>

      <FlexBetween mb={1.5}>
        <Paragraph color="grey.600">Subtotal:</Paragraph>
        <H6>{currency(total)}</H6>
      </FlexBetween>

      <FlexBetween mb={1.5}>
        <Paragraph color="grey.600">Shipping fee:</Paragraph>

        <FlexBox alignItems="center" gap={1} maxWidth={100}>
          <Paragraph>$</Paragraph>
          <TextField color="info" defaultValue={10} type="number" fullWidth />
        </FlexBox>
      </FlexBetween>

      <FlexBetween mb={1.5}>
        <Paragraph color="grey.600">Discount(%):</Paragraph>

        <FlexBox alignItems="center" gap={1} maxWidth={100}>
          <Paragraph>$</Paragraph>
          <TextField color="info" defaultValue={discount} type="number" fullWidth />
        </FlexBox>
      </FlexBetween>

      <Divider sx={{
      my: 2
    }} />

      <FlexBetween mb={2}>
        <H6>Total</H6>
        <H6>{currency(total)}</H6>
      </FlexBetween>

      <Paragraph>Paid by Credit/Debit Card</Paragraph>
    </Card>;
}