import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import * as yup from "yup";
import { Formik, useFormik } from "formik";
// DUMMY CUSTOM DATA

import countryList from "data/countryList";
// LOCAL CUSTOM COMPONENTS

import ShippingForm from "./shipping-form";
import BillingAddressForm from "./billing-address-form";
import { useDispatch, useSelector } from "react-redux";
import { changeOrder } from "redux/slices/orderSlice";
export default function CheckoutForm() {
  const router = useRouter();
  const [sameAsShipping, setSameAsShipping] = useState(false);

  const { currentOrder } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  if (currentOrder.billingAddress) {
    initialValues = {
      ...initialValues,
      billing_zip: currentOrder.billingAddress.zipCode,
      billing_name: currentOrder.billingAddress.fullname,
      billing_email: currentOrder.billingAddress.email,
      billing_contact: currentOrder.billingAddress.phone,
      billing_company: currentOrder.billingAddress.company,
      billing_address1: currentOrder.billingAddress.address1,
      billing_address2: currentOrder.billingAddress.address2,
      billing_country: currentOrder.billingAddress.country,
    };
  }

  if (currentOrder.billingAddress) {
    initialValues = {
      ...initialValues,
      shipping_zip: currentOrder.billingAddress.zipCode,
      shipping_name: currentOrder.billingAddress.fullname,
      shipping_email: currentOrder.billingAddress.email,
      shipping_contact: currentOrder.billingAddress.phone,
      shipping_company: currentOrder.billingAddress.company,
      shipping_address1: currentOrder.billingAddress.address1,
      shipping_address2: currentOrder.billingAddress.address2,
      shipping_country: currentOrder.billingAddress.country,
    };
  }

  const handleFormSubmit = (values) => {
    const shippingAdrs = {
      zipCode: values.shipping_zip,
      fullname: values.shipping_name,
      email: values.shipping_email,
      phone: values.shipping_contact,
      company: values.shipping_company,
      address1: values.shipping_address1,
      address2: values.shipping_address2,
      country: values.shipping_country,
    };

    const billingAdrs = {
      zipCode: values.billing_zip,
      fullname: values.billing_name,
      email: values.billing_email,
      phone: values.billing_contact,
      company: values.billing_company,
      address1: values.billing_address1,
      address2: values.billing_address2,
      country: values.billing_country,
    };

    dispatch(
      changeOrder({
        shippingAddress: shippingAdrs,
        billingAddress: billingAdrs,
      })
    );
    router.push("/payment");
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues,
    checkoutSchema,
    onSubmit: (values) => {
      handleFormSubmit(values);
    },
  });

  const handleCheckboxChange = (checked) => {
    setSameAsShipping(checked);
    setFieldValue("same_as_shipping", checked);
    setFieldValue("billing_zip", checked ? values.shipping_zip : "");
    setFieldValue("billing_name", checked ? values.shipping_name : "");
    setFieldValue("billing_email", checked ? values.shipping_email : "");
    setFieldValue("billing_contact", checked ? values.shipping_contact : "");
    setFieldValue("billing_company", checked ? values.shipping_company : "");
    setFieldValue("billing_address1", checked ? values.shipping_address1 : "");
    setFieldValue("billing_address2", checked ? values.shipping_address2 : "");
    setFieldValue("billing_country", checked ? values.shipping_country : "");
  };

  return (
    <form onSubmit={handleSubmit}>
      <ShippingForm
        values={values}
        errors={errors}
        touched={touched}
        handleBlur={handleBlur}
        handleChange={handleChange}
        setFieldValue={setFieldValue}
      />

      <BillingAddressForm
        errors={errors}
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleCheckboxChange={handleCheckboxChange}
        sameAsShipping={sameAsShipping}
        setFieldValue={setFieldValue}
        touched={touched}
        values={values}
      />

      <Grid container spacing={6}>
        <Grid item sm={6} xs={12}>
          <Button
            LinkComponent={Link}
            variant="outlined"
            color="primary"
            type="button"
            href="/cart"
            fullWidth
          >
            Back to Cart
          </Button>
        </Grid>

        <Grid item sm={6} xs={12}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Proceed to Payment
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
let initialValues = {
  shipping_zip: "",
  shipping_name: "",
  shipping_email: "",
  shipping_contact: "",
  shipping_company: "",
  shipping_address1: "",
  shipping_address2: "",
  shipping_country: countryList[229],
  shipping_shoosed_country: "",
  billing_zip: "",
  billing_name: "",
  billing_email: "",
  billing_contact: "",
  billing_company: "",
  billing_address1: "",
  billing_address2: "",
  billing_country: countryList[229],
  billing_shoosed_country: "",
};

const checkoutSchema = yup.object().shape({
  shipping_name: yup.string().required("required"),
  shipping_email: yup.string().email("invalid email").required("required"),
  shipping_contact: yup.string().required("required"),
  shipping_zip: yup.string().required("required"),
  shipping_country: yup.object().required("required"),
  shipping_address1: yup.string().required("required"),
  billing_name: yup.string().required("required"),
  billing_email: yup.string().required("required"),
  billing_contact: yup.string().required("required"),
  billing_zip: yup.string().required("required"),
  billing_country: yup.object().required("required"),
  billing_address1: yup.string().required("required"),
});
