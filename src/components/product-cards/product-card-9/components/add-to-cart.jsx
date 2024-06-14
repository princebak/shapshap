import Button from "@mui/material/Button"; 
// MUI ICON COMPONENTS

import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove"; 
// GLOBAL CUSTOM COMPONENTS

import { H5 } from "components/Typography";
import { FlexBetween, FlexBox } from "components/flex-box"; 
// ==============================================================


// ==============================================================
export default function AddToCartButton({
  quantity,
  handleDecrement,
  handleIncrement
}) {
  return <FlexBox mt={1} flexShrink={0}>
      {quantity ? <FlexBetween>
          <Button color="primary" variant="contained" sx={{
        padding: 0.5,
        minHeight: 0
      }} onClick={handleIncrement}>
            <Add fontSize="small" />
          </Button>

          <H5 fontWeight="600" fontSize="15px" mx={1.5}>
            {quantity}
          </H5>

          <Button color="primary" variant="contained" sx={{
        padding: 0.5,
        minHeight: 0
      }} onClick={handleDecrement}>
            <Remove fontSize="small" />
          </Button>
        </FlexBetween> : <Button color="primary" variant="contained" onClick={handleIncrement} sx={{
      padding: 0.5,
      minHeight: 0
    }}>
          <Add fontSize="small" />
        </Button>}
    </FlexBox>;
}