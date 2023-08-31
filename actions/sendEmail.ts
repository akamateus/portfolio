"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

// in utils.ts now

export const sendEmail = async (formData: FormData) => {
  //   console.log("RUNNING ON SERVER");
  //   console.log(formData.get("senderEmail"));
  //   console.log(formData.get("message"));

  //simple server side validation
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  console.log(senderEmail);

  if (!validateString(senderEmail, 254)) {
    return {
      error: "Invalid sender email 🤯",
    };
  }
  if (!validateString(message, 2000)) {
    return {
      error: "Invalid message 🤯",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form 🫱🏽‍🫲🏼 (Portfolio) <onboarding@resend.dev>",
      to: "mateusoliveirac@hotmail.com",
      subject: "message from contact form",
      reply_to: senderEmail as string,
      //   text: message as string,
      // react: <ContactFormEmail message={message} senderEmail={senderEmail} />,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
