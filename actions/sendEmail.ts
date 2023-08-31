"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("RUNNING ON SERVER");
  console.log(formData.get("senderEmail"));
  console.log(formData.get("message"));

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "mateusoliveirac@hotmail.com",
    subject: "message from contact form",
    text: "Hello world",
  });
};
