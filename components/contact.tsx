"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./submit-button";
import { toast } from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Contact me directly at{" "}
        <a
          className="text-amber-500 underline hover:cursor-pointer"
          href="mailto:mateusoliveirac@hotmail.com"
        >
          mateusoliveirac@hotmail.com
        </a>{" "}
        or through this form bellow:
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:focus:bg-opacity-80 dark:focus:bg-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          placeholder=" Your email"
          required
          maxLength={254}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:focus:bg-opacity-80 dark:focus:bg-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message🫱🏽‍🫲🏼"
          required
          maxLength={2000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
