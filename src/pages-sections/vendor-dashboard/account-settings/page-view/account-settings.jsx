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
  name: yup.string().required("Name is required"),
  address: yup.string().required("Address is required"),
  country: yup.string().required("Country is required"),
  profilPicUrl: yup.string().required("User profil picture is required"),
  phone: yup.string().required("Phone is required"),
  name: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid Email").required("Email is required"),
  shop: {
    name: yup.string().required("Shop's name is required"),
    phone: yup.string().required("Shop's phone is required"),
    description: yup.string().required("Shop's description is required"),
    address: yup.string().required("Shop's address is required"),
    profilPicUrl: yup.string().required("Shop's profil picture is required"),
  },
});
export default function AccountSettingsPageView() {
  const INITIAL_VALUES = {
    _id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    profilPicUrl: "",
    country: null,
    shop: {
      name: "",
      phone: "",
      description: "",
      address: "",
      profilPicUrl: "",
    },
  };

  const handleFormSubmit = async (values) => {
    console.log("Profile update request >> ", values);
  };

  return (
    <PageWrapper title="Account Settings">
      <Card className="p-2">
        <CoverPicSection />
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={INITIAL_VALUES}
          validationSchema={ACCOUNT_SCHEMA}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    color="info"
                    size="medium"
                    name="name"
                    label="Full Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    error={!!touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    color="info"
                    name="email"
                    type="email"
                    label="Email"
                    size="medium"
                    onBlur={handleBlur}
                    value={values.email}
                    onChange={handleChange}
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    type="tel"
                    color="info"
                    size="medium"
                    name="contact"
                    label="Phone"
                    onBlur={handleBlur}
                    value={values.contact}
                    onChange={handleChange}
                    error={!!touched.contact && !!errors.contact}
                    helperText={touched.contact && errors.contact}
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <Autocomplete
                    fullWidth
                    disablePortal
                    options={countryList}
                    value={values.country}
                    getOptionLabel={(option) => option.label}
                    onChange={(_, value) => setFieldValue("country", value)}
                    renderInput={(params) => (
                      <TextField
                        color="info"
                        label="Country"
                        variant="outlined"
                        placeholder="Select Country"
                        error={!!touched.country && !!errors.country}
                        helperText={touched.country && errors.country}
                        {...params}
                        size="medium"
                      />
                    )}
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    name="city"
                    label="City"
                    color="info"
                    size="medium"
                    onBlur={handleBlur}
                    value={values.city}
                    onChange={handleChange}
                    error={!!touched.city && !!errors.city}
                    helperText={touched.city && errors.city}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="info">
                    Save Changes
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Card>
    </PageWrapper>
  );
}
