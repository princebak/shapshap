"use client";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// FORMIK

import { Formik } from "formik";
// YUP

import * as yup from "yup";
// CUSTOM DATA MODEL

// ==============================================================
export default function ProfileEditForm({ user }) {
  const INITIAL_VALUES = {
    email: user.email || "",
    contact: user.phone || "",
    last_name: user.name.lastName || "",
    first_name: user.name.firstName || "",
  };
  const VALIDATION_SCHEMA = yup.object().shape({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    email: yup.string().email("invalid email").required("Email is required"),
    contact: yup.string().required("Contact is required"),
  });

  const handleFormSubmit = async (values) => {
    console.log(values);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
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
                name="first_name"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.first_name}
                error={!!touched.first_name && !!errors.first_name}
                helperText={touched.first_name && errors.first_name}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="last_name"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.last_name}
                error={!!touched.last_name && !!errors.last_name}
                helperText={touched.last_name && errors.last_name}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="email"
                type="email"
                label="Email"
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
                label="Phone"
                name="contact"
                onBlur={handleBlur}
                value={values.contact}
                onChange={handleChange}
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
              />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}
