
// MUI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import ButtonBase from "@mui/material/ButtonBase";
import FormControlLabel from "@mui/material/FormControlLabel"; 
// FORMIK


// LOCAL CUSTOM COMPONENT
import Heading from "./heading"; 
// GLOBAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import { FlexBox } from "components/flex-box";
import { Paragraph } from "components/Typography"; 
// DATA

import { months, years } from "data/months-years"; 
// CUSTOM DATA MODEL


// ==============================================================
const PaymentDetails = ({
  values,
  errors,
  touched,
  hasVoucher,
  handleChange,
  toggleHasVoucher,
  handleFieldValueChange
}) => {
  return <Card sx={{
    p: 3,
    mb: 3
  }}>
      <Heading number={3} title="Payment Details" />

      {
      /* CARD INFORMATION FORM  */
    }
      <Box mb={3}>
        <Paragraph mb={1.5}>Enter Card Information</Paragraph>

        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <TextField fullWidth type="text" name="cardHolderName" onChange={handleChange} label="Enter Your Name" value={values.cardHolderName} helperText={touched.cardHolderName && errors.cardHolderName} error={Boolean(touched.cardHolderName && errors.cardHolderName)} />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField fullWidth type="number" name="cardNumber" onChange={handleChange} label="Enter Your Card Number" value={values.cardNumber} helperText={touched.cardNumber && errors.cardNumber} error={Boolean(touched.cardNumber && errors.cardNumber)} />
          </Grid>

          <Grid item sm={4} xs={12}>
            <TextField select fullWidth type="number" name="cardMonth" onChange={handleChange} value={values.cardMonth} label="Expire Card Month" helperText={touched.cardMonth && errors.cardMonth} error={Boolean(touched.cardMonth && errors.cardMonth)}>
              {months.map(item => <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>)}
            </TextField>
          </Grid>

          <Grid item sm={4} xs={12}>
            <TextField select fullWidth type="number" name="cardYear" onChange={handleChange} value={values.cardYear} label="Expire Card Year" helperText={touched.cardYear && errors.cardYear} error={Boolean(touched.cardYear && errors.cardYear)}>
              {years.map(item => <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>)}
            </TextField>
          </Grid>

          <Grid item sm={4} xs={12}>
            <TextField fullWidth type="number" name="cardCVC" label="CVC/CVV" value={values.cardCVC} onChange={handleChange} helperText={touched.cardCVC && errors.cardCVC} error={Boolean(touched.cardCVC && errors.cardCVC)} />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel label="Save this card" control={<Checkbox size="small" />} onChange={e => console.log(e.target)} />
          </Grid>
        </Grid>
      </Box>

      {
      /* SAVED CARD LIST */
    }
      <Box mb={3}>
        <Paragraph mb={1.5}>Saved Cards</Paragraph>

        <Grid container spacing={3}>
          {paymentMethodList.map(item => <Grid item md={4} sm={6} xs={12} key={item.last4Digits}>
              <Card onClick={() => handleFieldValueChange(item.last4Digits, "card")} sx={{
            padding: 2,
            boxShadow: "none",
            cursor: "pointer",
            border: "1px solid",
            backgroundColor: "grey.100",
            borderColor: item.last4Digits === values.card ? "primary.main" : "transparent"
          }}>
                <Box height={24} width={36} position="relative" mb={1}>
                  <LazyImage fill alt={item.name} src={`/assets/images/payment-methods/${item.cardType}.svg`} />
                </Box>

                <Paragraph color="grey.700">**** **** **** {item.last4Digits}</Paragraph>
                <Paragraph color="grey.700">{item.name}</Paragraph>
              </Card>
            </Grid>)}
        </Grid>
      </Box>

      {
      /* VOUCHER ACTION FIELD */
    }
      <Box mb={3}>
        <ButtonBase disableRipple onClick={toggleHasVoucher} sx={{
        color: "primary.main",
        fontWeight: 600
      }}>
          I have a voucher
        </ButtonBase>

        <Collapse in={hasVoucher}>
          <FlexBox mt={3} gap={2} maxWidth="400px">
            <TextField fullWidth name="voucher" value={values.voucher} onChange={handleChange} placeholder="Enter voucher code here" />
            <Button variant="contained" color="primary" type="button">
              Apply
            </Button>
          </FlexBox>
        </Collapse>
      </Box>

      <Button fullWidth type="submit" color="primary" variant="contained">
        Place Order
      </Button>
    </Card>;
};

const paymentMethodList = [{
  cardType: "Amex",
  last4Digits: "4765",
  name: "Jaslynn Land"
}, {
  cardType: "Mastercard",
  last4Digits: "5432",
  name: "Jaslynn Land"
}, {
  cardType: "Visa",
  last4Digits: "4543",
  name: "Jaslynn Land"
}];
export default PaymentDetails;