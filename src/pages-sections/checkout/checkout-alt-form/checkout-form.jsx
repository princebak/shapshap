"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup"; 
// LOCAL CUSTOM COMPONENTS

import DeliveryDate from "./delivery-date";
import PaymentDetails from "./payment-details";
import DeliveryAddress from "./delivery-address";
const checkoutSchema = yup.object().shape({
  card: yup.string().required("required"),
  date: yup.string().required("required"),
  time: yup.string().required("required"),
  address: yup.string().required("required"),
  cardHolderName: yup.string().required("required"),
  cardNumber: yup.number().required("required"),
  cardMonth: yup.string().required("required"),
  cardYear: yup.number().required("required"),
  cardCVC: yup.number().required("required"),
  voucher: yup.string()
});
export default function CheckoutForm() {
  const router = useRouter();
  const [hasVoucher, setHasVoucher] = useState(false);

  const toggleHasVoucher = () => setHasVoucher(has => !has);

  const initialValues = {
    card: "",
    date: "",
    time: "",
    address: "",
    voucher: "",
    cardHolderName: "",
    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cardCVC: ""
  };

  const handleFormSubmit = async values => {
    console.log(values);
    router.push("/payment");
  };

  return <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
      {({
      values,
      errors,
      touched,
      handleChange,
      handleSubmit,
      setFieldValue
    }) => {
      
// CHANGE FIELD VALUE DATA
      const handleFieldValueChange = (value, fieldName) => {
        setFieldValue(fieldName, value);
      };

      return <form onSubmit={handleSubmit}>
            <DeliveryDate errors={errors} values={values} touched={touched} handleChange={handleChange} />

            <DeliveryAddress handleFieldValueChange={handleFieldValueChange} values={values} />

            <PaymentDetails values={values} errors={errors} touched={touched} hasVoucher={hasVoucher} handleChange={handleChange} toggleHasVoucher={toggleHasVoucher} handleFieldValueChange={handleFieldValueChange} />
          </form>;
    }}
    </Formik>;
}