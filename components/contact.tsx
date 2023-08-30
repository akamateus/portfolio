"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

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
      <p className="text-gray-700 -mt-6">
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
        className="mt-10 flex flex-col"
        action={async (formData) => {
          console.log(formData.get("senderEmail"));
          console.log(formData.get("message"));
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          name="senderEmail"
          type="email"
          placeholder=" Your email"
          required
          maxLength={254}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          name="message"
          placeholder="Your message 🫰🏽"
          required
          maxLength={2000}
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-amber-500 hover:bg-amber-400 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105"
        >
          Send
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}
