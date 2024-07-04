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
import { FlexRowCenter } from "components/flex-box";
import { sendEmailWithEmailJs } from "services/NotificationService";
import { emailMetadata } from "utils/constants";
import { useSelector } from "react-redux";

const ValidateResetPW = () => {
  const { justRegisteredUser } = useSelector((state) => state.user);

  const handleResendValidationCode = async (e) => {
    e.preventDefault();
    await sendEmailWithEmailJs({
      receiver: justRegisteredUser,
      subject: emailMetadata.SUBJECT_RESET_PW_VALIDATION,
      validationLink: emailMetadata.RESET_PW_VALIDATION_LINK,
    });
    console.log("validation code resent");
  };

  return (
    <Fragment>
      <H3 mb={3} textAlign="center">
        Validate your reset password
      </H3>

      {/* FORM AREA */}
      <Box
        onSubmit={() => {}}
        component="form"
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <div
          style={{
            backgroundColor: "#eee",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <p>
            Click on the reset Password validation link sent in your mail box;
          </p>
          <p>
            Link not received ?, click the resend button below for a new link,
            then check your mail box again :
          </p>
        </div>
      </Box>

      {/* BOTTOM LINK AREA */}
      <FlexRowCenter mt={3} justifyContent="center" gap={1}>
        Any problem with the code?
        <BoxLink title="Resend" href="#" onClick={handleResendValidationCode} />
      </FlexRowCenter>
    </Fragment>
  );
};

export default ValidateResetPW;
