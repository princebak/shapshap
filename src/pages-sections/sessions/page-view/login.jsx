"use client";

import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { signIn, useSession } from "next-auth/react";

// LOCAL CUSTOM COMPONENTS

import EyeToggleButton from "../components/eye-toggle-button";
// LOCAL CUSTOM HOOK

import usePasswordVisible from "../use-password-visible";
// GLOBAL CUSTOM COMPONENTS

import BazaarTextField from "components/BazaarTextField";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "components/Loader";
import MessageAlert from "components/MessageAlert";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "redux/slices/userSlice";
import { logMessage } from "utils/constants";
import axios from "axios";
// ==============================================================

// ==============================================================
const LoginPageView = ({ closeDialog }) => {
  const { visiblePassword, togglePasswordVisible } = usePasswordVisible();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const nsapi = useSearchParams().get("nsapi"); // This is the validation token

  const [isTokenUsed, setIsTokenUsed] = useState(false);

  if (
    (!currentUser && session?.user) ||
    (currentUser && currentUser.email !== session?.user.email)
  ) {
    dispatch(loginSuccess(session?.user));
  }

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
      if (res.error === logMessage.USER_NOT_ACTIVE) {
        router.replace("/validate-email");
      }
    } else {
      setMessage({ content: "Logged in with success !", color: "green" });
      router.push("/dashboard");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    console.log("isTokenUsed >>", isTokenUsed);
    let myToken = null;
    if (isTokenUsed === false) {
      myToken = nsapi;
      setIsTokenUsed(true);
    }
    if (myToken) {
      const sendEmailValidationRequestIfTokenExist = async (token) => {
        const res = await axios.get(`/api/email-validation/${token}`);
        const resData = res.data;

        console.log("Email validation res >>", resData);
        if (resData.tokenExpired) {
          router.replace("/validate-email?tokenExpired=true");
        } else if (resData.error) {
          console.log("res.error) >>", res.error);
          setMessage({ content: resData.message, color: "red" });
        } else {
          setMessage({ content: resData.message, color: "green" });
        }
      };
      sendEmailValidationRequestIfTokenExist(myToken);
    }
  }, []);

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
