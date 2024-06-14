import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { format } from "date-fns"; 
// GLOBAL CUSTOM COMPONENTS

import { FlexBox } from "components/flex-box";
import { Paragraph, Span } from "components/Typography"; 
// ==============================================================


// ==============================================================
export default function OrderActions({
  id,
  createdAt,
  status
}) {
  return <div>
      <FlexBox flexWrap="wrap" alignItems="center" columnGap={4} rowGap={1}>
        <Paragraph>
          <Span color="grey.600">Order ID:</Span> {id}
        </Paragraph>

        <Paragraph>
          <Span color="grey.600">Placed on:</Span> {format(new Date(createdAt), "dd MMM, yyyy")}
        </Paragraph>
      </FlexBox>

      <FlexBox gap={3} my={3} flexDirection={{
      sm: "row",
      xs: "column"
    }}>
        <TextField fullWidth color="info" size="medium" variant="outlined" label="Add Product" placeholder="Type product name" />

        <TextField select fullWidth color="info" size="medium" defaultValue={status} label="Order Status" inputProps={{
        IconComponent: () => <KeyboardArrowDown sx={{
          color: "grey.600",
          mr: 1
        }} />
      }}>
          <MenuItem value="Processing">Processing</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Delivered">Delivered</MenuItem>
          <MenuItem value="Cancelled">Cancelled</MenuItem>
        </TextField>
      </FlexBox>
    </div>;
}