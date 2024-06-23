"use client";

import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useFormik } from "formik";
import * as yup from "yup";
// LOCAL CUSTOM COMPONENTS

import EyeToggleButton from "../components/eye-toggle-button";
// LOCAL CUSTOM HOOK

import BoxLink from "../components/box-link";
import usePasswordVisible from "../use-password-visible";
// GLOBAL CUSTOM COMPONENTS

import { FlexBox, FlexRowCenter } from "components/flex-box";
import BazaarTextField from "components/BazaarTextField";

import { useRouter } from "next/navigation";
import { Fragment } from "react";
import { H3 } from "components/Typography";

const ChangePasswordPageView = () => {
  const { visiblePassword, togglePasswordVisible } = usePasswordVisible();
  const router = useRouter();
  // COMMON INPUT PROPS FOR TEXT FIELD

  const inputProps = {
    endAdornment: (
      <EyeToggleButton show={visiblePassword} click={togglePasswordVisible} />
    ),
  };
  // REGISTER FORM FIELDS INITIAL VALUES

  const initialValues = {
    email: "",
    code: "",
    password: "",
    re_password: "",
  };
  // REGISTER FORM FIELD VALIDATION SCHEMA

  const validationSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("Email is required"),
    code: yup.string().required("Reset code is required"),
    password: yup.string().required("Password is required"),
    re_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Please re-type password"),
  });

  // Handling submition method
  const submitForm = () => {
    /** TODO :
     * 1. save the user with new password
     */
    router.push("/login");
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    }); //TODO: try to use this formit method for submition

  return (
    <Fragment>
      <H3 mb={3} textAlign="center">
        Change your password
      </H3>
      <form onSubmit={submitForm}>
        <BazaarTextField
          mb={1.5}
          fullWidth
          name="email"
          size="small"
          type="email"
          variant="outlined"
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
          label="Email"
          placeholder="exmple@mail.com"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
        />

        <BazaarTextField
          mb={1.5}
          fullWidth
          name="code"
          size="small"
          label="Reset code"
          variant="outlined"
          onBlur={handleBlur}
          value={values.code}
          onChange={handleChange}
          placeholder=""
          error={!!touched.code && !!errors.code}
          helperText={touched.code && errors.code}
        />

        <BazaarTextField
          mb={1.5}
          fullWidth
          size="small"
          name="password"
          label="Password"
          variant="outlined"
          autoComplete="on"
          placeholder="*********"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          type={visiblePassword ? "text" : "password"}
          error={!!touched.password && !!errors.password}
          helperText={touched.password && errors.password}
          InputProps={inputProps}
        />

        <BazaarTextField
          fullWidth
          size="small"
          autoComplete="on"
          name="re_password"
          variant="outlined"
          label="Retype Password"
          placeholder="*********"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.re_password}
          type={visiblePassword ? "text" : "password"}
          error={!!touched.re_password && !!errors.re_password}
          helperText={touched.re_password && errors.re_password}
          InputProps={inputProps}
          mb={2}
        />

        <Button
          fullWidth
          type="submit"
          color="primary"
          variant="contained"
          size="large"
        >
          Create Account
        </Button>
      </form>
    </Fragment>
  );
};

export default ChangePasswordPageView;
