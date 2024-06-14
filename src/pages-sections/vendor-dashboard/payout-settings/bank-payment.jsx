import { Fragment } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import * as Yup from "yup"; 
// GLOBAL CUSTOM COMPONENT

import { Paragraph } from "components/Typography";
const VALIDATION_SCHEMA = Yup.object().shape({
  routingNo: Yup.number().required("Routing No is required!"),
  amount: Yup.string().required("Amount is required!"),
  accountNo: Yup.string().required("Account No is required!"),
  accountHolderName: Yup.string().required("Acc. Holder Name is required!")
});
export default function BankPayment() {
  const INITIAL_VALUES = {
    amount: "$250",
    routingNo: "255",
    accountNo: "12345678910",
    accountHolderName: "Gage Paquette"
  };

  const handleSubmit = values => {};

  return <Fragment>
      <Paragraph fontWeight={700} mb={4}>
        Bank Payment
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

              <TextField color="info" size="medium" onBlur={handleBlur} onChange={handleChange} name="accountHolderName" label="Account Holder Name" value={values.accountHolderName} helperText={touched.accountHolderName && errors.accountHolderName} error={Boolean(errors.accountHolderName && touched.accountHolderName)} />

              <TextField color="info" size="medium" name="accountNo" label="Account No" onBlur={handleBlur} onChange={handleChange} value={values.accountNo} helperText={touched.accountNo && errors.accountNo} error={Boolean(errors.accountNo && touched.accountNo)} />

              <TextField color="info" size="medium" name="routingNo" label="Routing No" onBlur={handleBlur} onChange={handleChange} value={values.routingNo} helperText={touched.routingNo && errors.routingNo} error={Boolean(errors.routingNo && touched.routingNo)} />
            </Stack>

            <Button type="submit" color="info" variant="contained">
              Save Changes
            </Button>
          </form>}
      </Formik>
    </Fragment>;
}