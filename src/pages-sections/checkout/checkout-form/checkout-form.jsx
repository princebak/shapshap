import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import * as yup from "yup";
import { Formik } from "formik"; 
// DUMMY CUSTOM DATA

import countryList from "data/countryList"; 
// LOCAL CUSTOM COMPONENTS

import ShippingForm from "./shipping-form";
import BillingAddressForm from "./billing-address-form";
export default function CheckoutForm() {
  const router = useRouter();
  const [sameAsShipping, setSameAsShipping] = useState(false);

  const handleFormSubmit = async values => {
    router.push("/payment");
  };

  return <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
      {({
      values,
      errors,
      touched,
      handleBlur,
      handleChange,
      handleSubmit,
      setFieldValue
    }) => {
      const handleCheckboxChange = checked => {
        setSameAsShipping(checked);
        setFieldValue("same_as_shipping", checked);
        setFieldValue("billing_name", checked ? values.shipping_name : "");
      };

      return <form onSubmit={handleSubmit}>
            <ShippingForm values={values} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange} setFieldValue={setFieldValue} />

            <BillingAddressForm errors={errors} handleBlur={handleBlur} handleChange={handleChange} handleCheckboxChange={handleCheckboxChange} sameAsShipping={sameAsShipping} setFieldValue={setFieldValue} touched={touched} values={values} />

            <Grid container spacing={6}>
              <Grid item sm={6} xs={12}>
                <Button LinkComponent={Link} variant="outlined" color="primary" type="button" href="/cart" fullWidth>
                  Back to Cart
                </Button>
              </Grid>

              <Grid item sm={6} xs={12}>
                <Button variant="contained" color="primary" type="submit" fullWidth>
                  Proceed to Payment
                </Button>
              </Grid>
            </Grid>
          </form>;
    }}
    </Formik>;
}
const initialValues = {
  shipping_zip: "",
  shipping_name: "",
  shipping_email: "",
  shipping_contact: "",
  shipping_company: "",
  shipping_address1: "",
  shipping_address2: "",
  shipping_country: countryList[229],
  billing_zip: "",
  billing_name: "",
  billing_email: "",
  billing_contact: "",
  billing_company: "",
  billing_address1: "",
  billing_address2: "",
  billing_country: countryList[229]
}; 
// uncomment these fields below for from validation

const checkoutSchema = yup.object().shape({
// shipping_name: yup.string().required("required"),
  
// shipping_email: yup.string().email("invalid email").required("required"),
  
// shipping_contact: yup.string().required("required"),
  
// shipping_zip: yup.string().required("required"),
  
// shipping_country: yup.object().required("required"),
  
// shipping_address1: yup.string().required("required"),
  
// billing_name: yup.string().required("required"),
  
// billing_email: yup.string().required("required"),
  
// billing_contact: yup.string().required("required"),
  
// billing_zip: yup.string().required("required"),
  
// billing_country: yup.object().required("required"),
  
// billing_address1: yup.string().required("required"),
});