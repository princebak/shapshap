import Box from "@mui/material/Box"; 
// GLOBAL CUSTOM COMPONENTS

import { FlexBox } from "components/flex-box";
import { Paragraph } from "components/Typography"; 
// CUSTOM UTILS LIBRARY FUNCTIONS

import { calculateDiscount, currency } from "lib"; 
// ==============================================================


// ==============================================================
export default function ProductPrice({
  price,
  off
}) {
  return <FlexBox gap={1} alignItems="center">
      <Paragraph fontWeight="600" color="primary.main">
        {calculateDiscount(price, off)}
      </Paragraph>

      {off ? <Box component="del" fontWeight="600" color="grey.600">
          {currency(price)}
        </Box> : null}
    </FlexBox>;
}