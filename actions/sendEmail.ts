"use server";
export const sendEmail = async (formData: FormData) => {
  console.log("RUNNING ON SERVER");
  console.log(formData.get("senderEmail"));
  console.log(formData.get("message"));
};
