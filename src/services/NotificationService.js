"use server";

import { codePrefix, emailMetadata, localLink, remoteLink } from "utils/constants";
import * as sgMail from "@sendgrid/mail";
import { Resend } from "resend";
import axios from "axios";
import { generateUserToken } from "utils/codeGenerator";
import AccessToken from "models/AccessToken";


export async function sendEmailWithEmailJs({
  receiver,
  subject,
  validationLink,
}) {
  // Saving the generated token first, to concat with validation link
  const newToken = new AccessToken({
    owner: receiver,
    type: subject,
  });
  const savedToken = await newToken.save();

  const msg = {
    service_id: remoteLink.EMAILJS_SERVICE_ID,
    template_id: remoteLink.EMAILJS_TEMPLATE_ID,
    user_id: remoteLink.EMAILJS_USER_ID,
    accessToken: remoteLink.EMAILJS_ACCESS_TOKEN,
    template_params: {
      to_name: receiver.name,
      to_email: receiver.email,
      from_name: emailMetadata.SENDER_NAME,
      subject: subject,
      validationLink: `${localLink.APP_BASE_PATH}${validationLink}/${savedToken._id}`,
    },
  };

  try {
    // Then we Send email
    console.log("Sending msg >> ", msg);

    const res = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      JSON.stringify(msg),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Sent mail response >>", res.data);

    return { msg: "Mail sent with success !" };
  } catch (error) {
    console.log("Sent email error >>", error);
    return { error: "Mail not sent, try again later, or contact us." };
  }
}
