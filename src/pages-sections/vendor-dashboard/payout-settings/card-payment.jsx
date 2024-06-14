import { Fragment } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import * as Yup from "yup"; 
// GLOBAL CUSTOM COMPONENTS

import { Paragraph } from "components/Typography";
const VALIDATION_SCHEMA = Yup.object().shape({
  cardCvc: Yup.number().required("Card CVC is required!"),
  amount: Yup.string().required("Amount is required!"),
  cardNo: Yup.string().required("Card No is required!"),
  cardHolderName: Yup.string().required("Card Holder Name is required!")
});
export default function CardPayment() {
  const INITIAL_VALUES = {
    amount: "$250",
    cardCvc: "255",
    cardNo: "12345678910",
    cardHolderName: "Gage Paquette"
  };

  const handleSubmit = values => {};

  return <Fragment>
      <Paragraph fontWeight={700} mb={4}>
        Card Payment
      </Paragraph>

      <Formik onSubmit={handleSubmit} initialValues={INITIAL_VALUES} validationSchema={VALIDATION_SCHEMA}>
        {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
      }) => <form onSubmit={handleSubmit}>
            <Stack spacing={3} mb={3}>
              <TextField color="info" size="medium" name="amount" label="Amount" onBlur={handleBlur} value={values.amount} onChange={handleChange} helperText={touched.amount && errors.amount} error={Boolean(errors.amount && touched.amount)} />

              <TextField color="info" size="medium" onBlur={handleBlur} name="cardHolderName" onChange={handleChange} label="Card Holder Name" value={values.cardHolderName} helperText={touched.cardHolderName && errors.cardHolderName} error={Boolean(errors.cardHolderName && touched.cardHolderName)} />

              <TextField color="info" size="medium" name="cardNo" label="Card No" onBlur={handleBlur} value={values.cardNo} onChange={handleChange} helperText={touched.cardNo && errors.cardNo} error={Boolean(errors.cardNo && touched.cardNo)} />

              <TextField color="info" size="medium" name="cardCvc" label="Card CVC" onBlur={handleBlur} value={values.cardCvc} onChange={handleChange} helperText={touched.cardCvc && errors.cardCvc} error={Boolean(errors.cardCvc && touched.cardCvc)} />
            </Stack>

            <Button type="submit" color="info" variant="contained">
              Save Changes
            </Button>
          </form>}
      </Formik>
    </Fragment>;
}