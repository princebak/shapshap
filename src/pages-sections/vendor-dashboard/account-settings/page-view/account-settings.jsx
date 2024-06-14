"use client";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Formik } from "formik";
import * as yup from "yup"; 
// DATA

import countryList from "data/countryList"; 
// LOCAL CUSTOM COMPONENT

import CoverPicSection from "../cover-pic-section";
import PageWrapper from "../../page-wrapper";
const ACCOUNT_SCHEMA = yup.object().shape({
  city: yup.string().required("City is required"),
  country: yup.mixed().required("Country is required"),
  contact: yup.string().required("Contact is required"),
  last_name: yup.string().required("Last name is required"),
  first_name: yup.string().required("First name is required"),
  email: yup.string().email("Invalid Email").required("Email is required")
});
export default function AccountSettingsPageView() {
  const INITIAL_VALUES = {
    city: "",
    email: "",
    contact: "",
    country: null,
    last_name: "",
    first_name: ""
  };

  const handleFormSubmit = async values => {
    console.log(values.city);
  };

  return <PageWrapper title="Account Setting">
      <Card className="p-2">
        {
        /* COVER SECTION */
      }
        <CoverPicSection />

        {
        /* FORM SECTION */
      }
        <Formik onSubmit={handleFormSubmit} initialValues={INITIAL_VALUES} validationSchema={ACCOUNT_SCHEMA}>
          {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue
        }) => <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <TextField fullWidth color="info" size="medium" name="first_name" label="First Name" onBlur={handleBlur} onChange={handleChange} value={values.first_name} error={!!touched.first_name && !!errors.first_name} helperText={touched.first_name && errors.first_name} />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField fullWidth color="info" size="medium" name="last_name" label="Last Name" onBlur={handleBlur} onChange={handleChange} value={values.last_name} error={!!touched.last_name && !!errors.last_name} helperText={touched.last_name && errors.last_name} />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField fullWidth color="info" name="email" type="email" label="Email" size="medium" onBlur={handleBlur} value={values.email} onChange={handleChange} error={!!touched.email && !!errors.email} helperText={touched.email && errors.email} />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField fullWidth type="tel" color="info" size="medium" name="contact" label="Phone" onBlur={handleBlur} value={values.contact} onChange={handleChange} error={!!touched.contact && !!errors.contact} helperText={touched.contact && errors.contact} />
                </Grid>

                <Grid item md={6} xs={12}>
                  <Autocomplete fullWidth disablePortal options={countryList} value={values.country} getOptionLabel={option => option.label} onChange={(_, value) => setFieldValue("country", value)} renderInput={params => <TextField color="info" label="Country" variant="outlined" placeholder="Select Country" error={!!touched.country && !!errors.country} helperText={touched.country && errors.country} {...params} size="medium" />} />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField fullWidth name="city" label="City" color="info" size="medium" onBlur={handleBlur} value={values.city} onChange={handleChange} error={!!touched.city && !!errors.city} helperText={touched.city && errors.city} />
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="info">
                    Save Changes
                  </Button>
                </Grid>
              </Grid>
            </form>}
        </Formik>
      </Card>
    </PageWrapper>;
}