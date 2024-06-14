import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete"; 
// GLOBAL CUSTOM COMPONENT

import { H6 } from "components/Typography"; 
// DUMMY CUSTOM DATA

import countryList from "data/countryList"; 
// ==============================================================


// ==============================================================
export default function ShippingForm({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue
}) {
  return <Card sx={{
    mb: 4,
    p: 3
  }}>
      <H6 mb={2}>Shipping Address</H6>

      <Grid container spacing={6}>
        <Grid item sm={6} xs={12}>
          <TextField fullWidth sx={{
          mb: 2
        }} label="Full Name" onBlur={handleBlur} name="shipping_name" onChange={handleChange} value={values.shipping_name} error={!!touched.shipping_name && !!errors.shipping_name} helperText={touched.shipping_name && errors.shipping_name} />

          <TextField fullWidth sx={{
          mb: 2
        }} onBlur={handleBlur} label="Phone Number" onChange={handleChange} name="shipping_contact" value={values.shipping_contact} error={!!touched.shipping_contact && !!errors.shipping_contact} helperText={touched.shipping_contact && errors.shipping_contact} />

          <TextField fullWidth type="number" sx={{
          mb: 2
        }} label="Zip Code" name="shipping_zip" onBlur={handleBlur} onChange={handleChange} value={values.shipping_zip} error={!!touched.shipping_zip && !!errors.shipping_zip} helperText={touched.shipping_zip && errors.shipping_zip} />

          <TextField fullWidth label="Address 1" onBlur={handleBlur} onChange={handleChange} name="shipping_address1" value={values.shipping_address1} error={!!touched.shipping_address1 && !!errors.shipping_address1} helperText={touched.shipping_address1 && errors.shipping_address1} />
        </Grid>

        <Grid item sm={6} xs={12}>
          <TextField fullWidth type="email" sx={{
          mb: 2
        }} onBlur={handleBlur} name="shipping_email" label="Email Address" onChange={handleChange} value={values.shipping_email} error={!!touched.shipping_email && !!errors.shipping_email} helperText={touched.shipping_email && errors.shipping_email} />

          <TextField fullWidth sx={{
          mb: 2
        }} label="Company" onBlur={handleBlur} onChange={handleChange} name="shipping_company" value={values.shipping_company} error={!!touched.shipping_company && !!errors.shipping_company} helperText={touched.shipping_company && errors.shipping_company} />

          <Autocomplete fullWidth sx={{
          mb: 2
        }} options={countryList} value={values.shipping_country} getOptionLabel={option => option.label} onChange={(_, value) => setFieldValue("shipping_country", value)} renderInput={params => <TextField label="Country" variant="outlined" placeholder="Select Country" error={!!touched.shipping_country && !!errors.shipping_country} helperText={touched.shipping_country && errors.shipping_country} {...params} />} />

          <TextField fullWidth label="Address 2" onBlur={handleBlur} onChange={handleChange} name="shipping_address2" value={values.shipping_address2} error={!!touched.shipping_address2 && !!errors.shipping_address2} helperText={touched.shipping_address2 && errors.shipping_address2} />
        </Grid>
      </Grid>
    </Card>;
}