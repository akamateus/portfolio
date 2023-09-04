"use client";
import Image from "next/image";
import profile from "@/public/profile.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { setActiveSection, SetTimeOfLastClick } = useActiveSectionContext();

  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profile}
              alt="Mateus portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="
            h-28 w-28 rounded-full object-cover shadow-lg
            "
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🫱🏽‍🫲🏼
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Ahoy, I'm Mateus</span>, a junior{" "}
        <span className="font-bold">full-stack Web Developer & Journalist</span>
        . Now, I'm immersed in the world of code, specialized in{" "}
        <span className="  italic underline">React and Next.js </span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-amber-500 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-amber-400 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            SetTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className=" group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:text-amber-500 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 text-[1.30rem] flex items-center gap-2 rounded-full focus:scale-[1.15]  hover:text-amber-500 hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:text-white/60 dark:bg-white/10 "
          href="https://github.com/akamateus"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15]  hover:text-amber-500 active:scale-105 transition cursor-pointer borderBlack dark:text-white/60 dark:bg-white/10 "
          href="https://www.linkedin.com/in/akamateus/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </motion.div>
    </section>
  );
}
