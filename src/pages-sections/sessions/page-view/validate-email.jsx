"use client";

import { Fragment } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
// LOCAL CUSTOM COMPONENT

import BoxLink from "../components/box-link";
// GLOBAL CUSTOM COMPONENTS

import { H3 } from "components/Typography";
import { FlexBox, FlexRowCenter } from "components/flex-box";
import { useRouter } from "next/navigation";

const ValidateEmail = () => {
  const router = useRouter();
  // FORM FIELD INITIAL VALUE
  const initialValues = {
    code: "",
  };
  // FORM FIELD VALIDATION SCHEMA

  const validationSchema = yup.object().shape({
    code: yup.string().required("Code is required"),
  });
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        console.log("Submitting >> ", values);
      },
    });

  const submitForm = () => {
    console.log("submitForm");
    router.push("/login");
  };

  const handleResendValidationCode = async(e) => {
    e.preventDefault();
    await send
    console.log("validation code sent");
  };
  return (
    <Fragment>
      <H3 mb={3} textAlign="center">
        Validate your email
      </H3>

      {/* FORM AREA */}
      <Box
        onSubmit={submitForm}
        component="form"
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <p>Click on the email validation link sent in your mail;</p>
        <p>
          or click the resend button below for a new link, then check your mail
          box :
        </p>
      </Box>

      {/* BOTTOM LINK AREA */}
      <FlexRowCenter mt={3} justifyContent="center" gap={1}>
        Any problem with the code?
        <BoxLink title="Resend" href="#" onClick={handleResendValidationCode} />
      </FlexRowCenter>
    </Fragment>
  );
};

export default ValidateEmail;
