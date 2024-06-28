"use client";

import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { signIn } from "next-auth/react";

// LOCAL CUSTOM COMPONENTS

import EyeToggleButton from "../components/eye-toggle-button";
// LOCAL CUSTOM HOOK

import usePasswordVisible from "../use-password-visible";
// GLOBAL CUSTOM COMPONENTS

import BazaarTextField from "components/BazaarTextField";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loader from "components/Loader";
import MessageAlert from "components/MessageAlert";
// ==============================================================

// ==============================================================
const LoginPageView = ({ closeDialog }) => {
  const { visiblePassword, togglePasswordVisible } = usePasswordVisible();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // LOGIN FORM FIELDS INITIAL VALUES

  const initialValues = {
    email: "",
    password: "",
  };
  // LOGIN FORM FIELD VALIDATION SCHEMA

  const validationSchema = yup.object().shape({
    password: yup.string().required("Password is required"),
    email: yup.string().email("invalid email").required("Email is required"),
  });
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        console.log(values);
        submitForm(values);
      },
    });

  const submitForm = async (data) => {
    setIsLoading(true);
    const loginForm = {
      email: data.email,
      password: data.password,
      redirect: false,
    };
    const res = await signIn("credentials", loginForm);

    if (res.error) {
      setMessage({ content: res.error, color: "red" });
    } else {
      setMessage({ content: "Logged in with success !", color: "green" });

      router.push("/dashboard");
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <MessageAlert message={message} />

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
        helperText={touched.email && errors.email}
        error={Boolean(touched.email && errors.email)}
      />

      <BazaarTextField
        mb={2}
        fullWidth
        size="small"
        name="password"
        label="Password"
        autoComplete="on"
        variant="outlined"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
        placeholder="*********"
        type={visiblePassword ? "text" : "password"}
        helperText={touched.password && errors.password}
        error={Boolean(touched.password && errors.password)}
        InputProps={{
          endAdornment: (
            <EyeToggleButton
              show={visiblePassword}
              click={togglePasswordVisible}
            />
          ),
        }}
      />

      {isLoading ? (
        <Loader />
      ) : (
        <Button
          fullWidth
          type="submit"
          color="primary"
          variant="contained"
          size="large"
        >
          Login
        </Button>
      )}
    </form>
  );
};

export default LoginPageView;
