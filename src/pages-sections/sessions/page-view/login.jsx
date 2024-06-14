"use client";

import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup"; 
// LOCAL CUSTOM COMPONENTS

import EyeToggleButton from "../components/eye-toggle-button"; 
// LOCAL CUSTOM HOOK

import usePasswordVisible from "../use-password-visible"; 
// GLOBAL CUSTOM COMPONENTS

import BazaarTextField from "components/BazaarTextField"; 
// ==============================================================


// ==============================================================
const LoginPageView = ({
  closeDialog
}) => {
  const {
    visiblePassword,
    togglePasswordVisible
  } = usePasswordVisible(); 
// LOGIN FORM FIELDS INITIAL VALUES

  const initialValues = {
    email: "",
    password: ""
  }; 
// LOGIN FORM FIELD VALIDATION SCHEMA

  const validationSchema = yup.object().shape({
    password: yup.string().required("Password is required"),
    email: yup.string().email("invalid email").required("Email is required")
  });
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      console.log(values);
      closeDialog?.();
    }
  });
  return <form onSubmit={handleSubmit}>
      <BazaarTextField mb={1.5} fullWidth name="email" size="small" type="email" variant="outlined" onBlur={handleBlur} value={values.email} onChange={handleChange} label="Email or Phone Number" placeholder="exmple@mail.com" helperText={touched.email && errors.email} error={Boolean(touched.email && errors.email)} />

      <BazaarTextField mb={2} fullWidth size="small" name="password" label="Password" autoComplete="on" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.password} placeholder="*********" type={visiblePassword ? "text" : "password"} helperText={touched.password && errors.password} error={Boolean(touched.password && errors.password)} InputProps={{
      endAdornment: <EyeToggleButton show={visiblePassword} click={togglePasswordVisible} />
    }} />

      <Button fullWidth type="submit" color="primary" variant="contained" size="large">
        Login
      </Button>
    </form>;
};

export default LoginPageView;