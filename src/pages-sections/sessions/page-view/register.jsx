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

import { Span } from "components/Typography";
import { FlexBox } from "components/flex-box";
import BazaarTextField from "components/BazaarTextField";
import { MenuItem } from "@mui/material";
import { localLink, userType } from "utils/constants";
import { useRouter } from "next/navigation";
import { register } from "services/UserService";
import MessageAlert from "components/MessageAlert";
import { useState } from "react";
import Loader from "components/Loader";
import { sendEmailWithEmailJs } from "services/NotificationService";

const RegisterPageView = () => {
  const { visiblePassword, togglePasswordVisible } = usePasswordVisible();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [agreementNotAccepted, setAgreementNotAccepted] = useState(false);

  const router = useRouter();
  // COMMON INPUT PROPS FOR TEXT FIELD

  const inputProps = {
    endAdornment: (
      <EyeToggleButton show={visiblePassword} click={togglePasswordVisible} />
    ),
  };
  // REGISTER FORM FIELDS INITIAL VALUES

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    type: "",
    password: "",
    re_password: "",
    agreement: false,
  };

  // REGISTER FORM FIELD VALIDATION SCHEMA

  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    phone: yup.string().required("Phone number is required"),
    type: yup.string().required("Account type is required"),
    email: yup.string().email("invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
    re_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Please re-type password"),
  });
  // Handling Email validation
  const sendValidationEmail = async (data) => {
    const res = await sendEmailWithEmailJs(data);
    console.log("Validation email response >> ", res);
    return res;
  };

  // Handling submition method
  const submitForm = async (values) => {
    /** TODO :
     * 1. save the user DONE
     * 2. send the validation code to the user
     */
    if (!values.agreement) {
      setAgreementNotAccepted(true);
      setTimeout(() => {
        setAgreementNotAccepted(false);
      }, 3000);
    } else {
      setIsLoading(true);
    
      const res = await register(values);

      if (res.error) {
        setMessage({ content: res.error, color: "red" });
      } else {
        setMessage({ content: "Registrated with success !", color: "green" });

        router.push("/validate-email");
      }
      setIsLoading(false);
    }
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        console.log("User Registration >> ", values);
        submitForm(values);
      },
    }); //TODO: try to use this formit method for submition

  return (
    <form onSubmit={handleSubmit}>
      <MessageAlert message={message} />
      <BazaarTextField
        mb={1.5}
        fullWidth
        name="name"
        size="small"
        label="Full Name"
        variant="outlined"
        onBlur={handleBlur}
        value={values.name}
        onChange={handleChange}
        placeholder="Prince Ilunga"
        error={!!touched.name && !!errors.name}
        helperText={touched.name && errors.name}
      />

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
        name="phone"
        size="small"
        label="Phone number"
        variant="outlined"
        onBlur={handleBlur}
        value={values.phone}
        onChange={handleChange}
        placeholder="+243 828 414 084"
        error={!!touched.phone && !!errors.phone}
        helperText={touched.phone && errors.phone}
      />

      <BazaarTextField
        mb={1.5}
        fullWidth
        size="small"
        name="type"
        label="Account Type"
        variant="outlined"
        autoComplete="on"
        placeholder="Select the account type"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.type}
        select
      >
        <MenuItem value={userType.BUYER}>Buyer</MenuItem>
        <MenuItem value={userType.MERCHANT}>Merchant</MenuItem>
      </BazaarTextField>

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
      />

      <FormControlLabel
        name="agreement"
        className="agreement"
        onChange={handleChange}
        control={
          <Checkbox
            size="small"
            color="secondary"
            checked={values.agreement || false}
          />
        }
        label={
          <FlexBox
            flexWrap="wrap"
            alignItems="center"
            justifyContent="flex-start"
            gap={1}
          >
            <Span
              display={{
                sm: "inline-block",
                xs: "none",
              }}
            >
              By signing up, you agree to
            </Span>
            <Span
              display={{
                sm: "none",
                xs: "inline-block",
              }}
            >
              Accept Our
            </Span>
            <BoxLink
              title="Terms & Conditions"
              href={localLink.TERMS_AND_CONDITIONS}
              target="_blank"
            />
            {agreementNotAccepted && (
              <MessageAlert
                message={{
                  content: "You have to agree with our Terms and Conditions!",
                  color: "red",
                }}
              />
            )}
          </FlexBox>
        }
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
          Create Account
        </Button>
      )}
    </form>
  );
};

export default RegisterPageView;
