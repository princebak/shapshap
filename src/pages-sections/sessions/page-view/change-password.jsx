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

import { useRouter, useSearchParams } from "next/navigation";
import { Fragment, useState } from "react";
import { H3 } from "components/Typography";
import { changePassword } from "services/UserService";
import Loading from "app/loading";
import MessageAlert from "components/MessageAlert";

const ChangePasswordPageView = () => {
  const { visiblePassword, togglePasswordVisible } = usePasswordVisible();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const nsapi = useSearchParams().get("nsapi");
  // COMMON INPUT PROPS FOR TEXT FIELD

  const inputProps = {
    endAdornment: (
      <EyeToggleButton show={visiblePassword} click={togglePasswordVisible} />
    ),
  };
  // REGISTER FORM FIELDS INITIAL VALUES

  const initialValues = {
    code: nsapi,
    password: "",
    re_password: "",
  };
  // REGISTER FORM FIELD VALIDATION SCHEMA

  const validationSchema = yup.object().shape({
    password: yup.string().required("Password is required"),
    re_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Please re-type password"),
  });

  // Handling submition method
  const submitForm = async (values) => {
    setIsLoading(true);
    const res = await changePassword({
      token: values.code,
      newPassword: values.password,
    });
    if (res.error) {
      setMessage({ content: res.error, color: "red" });
      setIsLoading(false);
    } else {
      setMessage({
        content: "Password changed with success !",
        color: "green",
      });
      router.push("/login");
    }
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        submitForm(values);
      },
    }); 

  return (
    <Fragment>
      <H3 mb={3} textAlign="center">
        Change your password
      </H3>
      <MessageAlert message={message} />

      <form onSubmit={handleSubmit}>
        <input name="code" type="hidden" value={values.code} />

        <BazaarTextField
          mb={1.5}
          fullWidth
          size="small"
          name="password"
          label="New Password"
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
          label="Retype New Password"
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

        {isLoading ? (
          <Loading />
        ) : (
          <Button
            fullWidth
            type="submit"
            color="primary"
            variant="contained"
            size="large"
          >
            Submit
          </Button>
        )}
      </form>
    </Fragment>
  );
};

export default ChangePasswordPageView;
