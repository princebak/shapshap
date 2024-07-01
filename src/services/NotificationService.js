"use server";

import { codePrefix, emailMetadata, remoteLink } from "utils/constants";
import * as sgMail from "@sendgrid/mail";
import { Resend } from "resend";
import axios from "axios";
import { generateUserToken } from "utils/codeGenerator";
import AccessToken from "models/AccessToken";

export async function sendEmail({ to, from, subject, text, html }) {
  console.log("Sent email request >>", { to, from, subject, text, html });
  sgMail.setApiKey(remoteLink.SENDGRID_API_KEY);
  const msg = {
    to: to,
    from: from,
    subject: subject,
    text: text,
    html: html,
  };
  try {
    console.log("Sending >> ", msg);
    const res = await sgMail.send(msg);
    console.log("Sent mail response >>", res);
    return { msg: "Mail sent with success !" };
  } catch (error) {
    console.log("Sent email error >>", error);
    return { error: "Mail not sent, try again later, or contact us." };
  }
}

export async function sendEmailWithResend({ to, from, subject, html }) {
  const resend = new Resend(remoteLink.RESEND_API_KEY);

  const msg = {
    to: to,
    from: from,
    subject: subject,
    html: html,
  };
  try {
    console.log("Sending >> ", msg);
    const res = await resend.emails.send(msg);
    console.log("Sent mail response >>", res);
    return { msg: "Mail sent with success !" };
  } catch (error) {
    console.log("Sent email error >>", error);
    return { error: "Mail not sent, try again later, or contact us." };
  }
}

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
      validationLink: `${validationLink}/${savedToken._id}`,
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