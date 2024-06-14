import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import FormControlLabel from "@mui/material/FormControlLabel"; 
// GLOBAL CUSTOM COMPONENTS

import { H6 } from "components/Typography"; 
// DUMMY CUSTOM DATA

import countryList from "data/countryList"; 
// ==============================================================


// ==============================================================
export default function BillingAddressForm({
  errors,
  handleBlur,
  handleChange,
  setFieldValue,
  touched,
  values,
  sameAsShipping,
  handleCheckboxChange
}) {
  return <Card sx={{
    mb: 4,
    p: 3
  }}>
      <H6 mb={2}>Billing Address</H6>

      <FormControlLabel label="Same as shipping address" control={<Checkbox size="small" color="secondary" onChange={e => handleCheckboxChange(e.target.checked)} />} sx={{
      zIndex: 1,
      position: "relative",
      mb: sameAsShipping ? "" : "1rem"
    }} />

      {!sameAsShipping && <Grid container spacing={6}>
          <Grid item sm={6} xs={12}>
            <TextField fullWidth sx={{
          mb: 2
        }} label="Full Name" name="billing_name" onBlur={handleBlur} onChange={handleChange} value={values.billing_name} error={!!touched.billing_name && !!errors.billing_name} helperText={touched.billing_name && errors.billing_name} />

            <TextField fullWidth sx={{
          mb: 2
        }} onBlur={handleBlur} label="Phone Number" name="billing_contact" onChange={handleChange} value={values.billing_contact} error={!!touched.billing_contact && !!errors.billing_contact} helperText={touched.billing_contact && errors.billing_contact} />

            <TextField fullWidth type="number" sx={{
          mb: 2
        }} label="Zip Code" name="billing_zip" onBlur={handleBlur} onChange={handleChange} value={values.billing_zip} error={!!touched.billing_zip && !!errors.billing_zip} helperText={touched.billing_zip && errors.billing_zip} />

            <TextField fullWidth label="Address 1" onBlur={handleBlur} onChange={handleChange} name="billing_address1" value={values.billing_address1} error={!!touched.billing_address1 && !!errors.billing_address1} helperText={touched.billing_address1 && errors.billing_address1} />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField fullWidth type="email" sx={{
          mb: 2
        }} onBlur={handleBlur} name="billing_email" label="Email Address" onChange={handleChange} value={values.billing_email} error={!!touched.billing_email && !!errors.billing_email} helperText={touched.billing_email && errors.billing_email} />

            <TextField fullWidth sx={{
          mb: 2
        }} label="Company" onBlur={handleBlur} name="billing_company" onChange={handleChange} value={values.billing_company} error={!!touched.billing_company && !!errors.billing_company} helperText={touched.billing_company && errors.billing_company} />

            <Autocomplete fullWidth sx={{
          mb: 2
        }} options={countryList} value={values.billing_country} getOptionLabel={option => option.label} onChange={(_, value) => setFieldValue("billing_country", value)} renderInput={params => <TextField label="Country" placeholder="Select Country" error={!!touched.billing_country && !!errors.billing_country} helperText={touched.billing_country && errors.billing_country} {...params} />} />

            <TextField fullWidth label="Address 2" onBlur={handleBlur} name="billing_address2" onChange={handleChange} value={values.billing_address2} error={!!touched.billing_address2 && !!errors.billing_address2} helperText={touched.billing_address2 && errors.billing_address2} />
          </Grid>
        </Grid>}
    </Card>;
}