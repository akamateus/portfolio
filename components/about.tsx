"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      {/* className="border-2 rounded-lg border-black/10 p-4" */}
      <div>
        <p className="mb-3">
          Hey there! I'm a Junior{" "}
          <span className="font-medium">Web Developer</span> who just rocked a
          full-stack Bootcamp, diving into all things web like{" "}
          <span className="font-medium">
            HTML, CSS, JavaScript, TypeScript, Next.js, React, and MongoDB.{" "}
          </span>{" "}
          But I'm not just about the code. My background in{" "}
          <span className="font-medium">Journalism</span> has sharpened my{" "}
          <span className="font-medium">communication skills, </span>
          and I've even dabbled in{" "}
          <span className="font- ">
            digital marketing and social media.
          </span>{" "}
          I've got a knack for web design too, which definitely comes in handy
          when I'm jazzing up the frontend of websites – like this one 🧑🏽‍💻
        </p>
        <p>
          I'm like a curious cat with with energy. Learning new things and music
          are <span className="underline">my passion</span>, and I'm always on
          the go – whether I'm coding up a storm, learning the latest tech
          trends, or stumbling upon life hacks. It's like a treasure hunt for
          knowledge, and I'm in it for the long haul. This excitement fuels my
          journey as I create.
          <span className="font-medium"> innovative web solutions</span>.
        </p>
      </div>
    </motion.section>
  );
}
