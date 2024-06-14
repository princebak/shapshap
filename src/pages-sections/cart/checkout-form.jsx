import Link from "next/link"; 
// MUI

import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete"; 
// GLOBAL CUSTOM HOOK

import useCart from "hooks/useCart"; 
// GLOBAL CUSTOM COMPONENTS

import { Span } from "components/Typography";
import { FlexBetween, FlexBox } from "components/flex-box"; 
// DUMMY CUSTOM DATA

import countryList from "data/countryList"; 
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib";
export default function CheckoutForm() {
  const {
    state
  } = useCart();

  const getTotalPrice = () => state.cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const STATE_LIST = [{
    value: "new-york",
    label: "New York"
  }, {
    value: "chicago",
    label: "Chicago"
  }];
  return <Card sx={{
    padding: 3
  }}>
      <FlexBetween mb={2}>
        <Span color="grey.600">Total:</Span>

        <Span fontSize={18} fontWeight={600} lineHeight="1">
          {currency(getTotalPrice())}
        </Span>
      </FlexBetween>

      <Divider sx={{
      mb: 2
    }} />

      <FlexBox alignItems="center" columnGap={1} mb={2}>
        <Span fontWeight="600">Additional Comments</Span>

        <Span p="6px 10px" fontSize={12} lineHeight="1" borderRadius="3px" color="primary.main" bgcolor="primary.light">
          Note
        </Span>
      </FlexBox>

      {
      /* COMMENTS TEXT FIELD */
    }
      <TextField variant="outlined" rows={6} fullWidth multiline />

      <Divider sx={{
      mb: 2
    }} />

      {
      /* APPLY VOUCHER TEXT FIELD */
    }
      <TextField fullWidth size="small" label="Voucher" variant="outlined" placeholder="Voucher" />

      <Button variant="outlined" color="primary" fullWidth sx={{
      mt: 2,
      mb: 4
    }}>
        Apply Voucher
      </Button>

      <Divider sx={{
      mb: 2
    }} />

      <Span fontWeight={600} mb={2} display="block">
        Shipping Estimates
      </Span>

      {
      /* COUNTRY TEXT FIELD */
    }
      <Autocomplete fullWidth sx={{
      mb: 2
    }} options={countryList} renderInput={params => <TextField {...params} size="small" label="Country" variant="outlined" placeholder="Select Country" />} />

      {
      /* STATE/CITY TEXT FIELD */
    }
      <TextField select fullWidth size="small" label="State" variant="outlined" placeholder="Select State" defaultValue="new-york">
        {STATE_LIST.map(({
        label,
        value
      }) => <MenuItem value={value} key={label}>
            {label}
          </MenuItem>)}
      </TextField>

      {
      /* ZIP-CODE TEXT FIELD */
    }
      <TextField fullWidth size="small" label="Zip Code" placeholder="3100" variant="outlined" sx={{
      mt: 2
    }} />

      <Button variant="outlined" color="primary" fullWidth sx={{
      my: 2
    }}>
        Calculate Shipping
      </Button>

      <Button fullWidth color="primary" href="/checkout" variant="contained" LinkComponent={Link}>
        Checkout Now
      </Button>
    </Card>;
}