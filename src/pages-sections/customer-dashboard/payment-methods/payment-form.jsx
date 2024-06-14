import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField"; 
// FORMIK

import { Formik } from "formik"; 
// YUP

import * as yup from "yup";
export default function PaymentForm() {
  const INITIAL_VALUES = {
    exp: "",
    cvc: "",
    name: "",
    card_no: ""
  };
  const VALIDATION_SCHEMA = yup.object().shape({
    name: yup.string().required("required"),
    card_no: yup.string().required("required"),
    exp: yup.string().required("required"),
    cvc: yup.string().required("required")
  });

  const handleFormSubmit = async values => {
    console.log(values);
  };

  return <Formik onSubmit={handleFormSubmit} initialValues={INITIAL_VALUES} validationSchema={VALIDATION_SCHEMA}>
      {({
      values,
      errors,
      touched,
      handleBlur,
      handleChange,
      handleSubmit
    }) => <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField fullWidth name="card_no" label="Card Number" onBlur={handleBlur} onChange={handleChange} value={values.card_no || ""} error={!!touched.card_no && !!errors.card_no} helperText={touched.card_no && errors.card_no} />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField fullWidth name="name" label="Name on Card" onBlur={handleBlur} onChange={handleChange} value={values.name || ""} error={!!touched.name && !!errors.name} helperText={touched.name && errors.name} />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField fullWidth name="exp" label="Exp. Date" onBlur={handleBlur} onChange={handleChange} value={values.exp || ""} error={!!touched.exp && !!errors.exp} helperText={touched.exp && errors.exp} />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField fullWidth name="cvc" label="CVC" onBlur={handleBlur} onChange={handleChange} value={values.cvc || ""} error={!!touched.cvc && !!errors.cvc} helperText={touched.cvc && errors.cvc} />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </form>}
    </Formik>;
}