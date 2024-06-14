import { useRouter } from "next/navigation"; 
// MUI

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField"; 
// YUP

import * as yup from "yup"; 
// FORMIK

import { Formik } from "formik";
export default function CreditCardForm() {
  const router = useRouter();
  const INITIAL_VALUES = {
    card_no: "",
    name: "",
    exp_date: "",
    cvc: "",
    shipping_zip: "",
    shipping_country: "",
    shipping_address1: "",
    shipping_address2: "",
    billing_name: "",
    billing_email: "",
    billing_contact: "",
    billing_company: "",
    billing_zip: "",
    billing_country: "",
    billing_address1: "",
    billing_address2: ""
  };
  const VALIDATION_SCHEMA = yup.object().shape({
    card_no: yup.string().required("required"),
    name: yup.string().required("required"),
    exp_date: yup.string().required("required"),
    cvc: yup.string().required("required") 
// shipping_zip: yup.string().required("required"),
    
// shipping_country: yup.object().required("required"),
    
// shipping_address1: yup.string().required("required"),
    
// billing_name: yup.string().required("required"),
    
// billing_email: yup.string().required("required"),
    
// billing_contact: yup.string().required("required"),
    
// billing_zip: yup.string().required("required"),
    
// billing_country: yup.string().required("required"),
    
// billing_address1: yup.string().required("required"),

  });

  const handleFormSubmit = values => {
    router.push("/payment");
    console.log(values);
  };

  return <Formik onSubmit={handleFormSubmit} initialValues={INITIAL_VALUES} validationSchema={VALIDATION_SCHEMA}>
      {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit
    }) => <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item sm={6} xs={12}>
              <TextField fullWidth name="card_no" label="Card Number" onBlur={handleBlur} value={values.card_no} onChange={handleChange} helperText={touched.card_no && errors.card_no} />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField fullWidth name="exp_date" label="Exp Date" placeholder="MM/YY" onBlur={handleBlur} onChange={handleChange} value={values.exp_date} helperText={touched.exp_date && errors.exp_date} />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField fullWidth name="name" onBlur={handleBlur} value={values.name} label="Name on Card" onChange={handleChange} helperText={touched.name && errors.name} />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField fullWidth name="name" onBlur={handleBlur} value={values.name} label="Name on Card" onChange={handleChange} helperText={touched.name && errors.name} />
            </Grid>

            <Grid item sm={6} xs={12}>
              <Button variant="outlined" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>}
    </Formik>;
}