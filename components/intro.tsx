"use client";
import Image from "next/image";
import React from "react";
import profile from "@/public/profile.jpg";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section>
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
            h-28 w-28 rounded-full object-cover border-[0.20rem] border-white shadow-lg
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

      <p>
        Hello, I'm Mateus, but you can call me{" "}
        <span className="font-bold">Matt</span>, a junior{" "}
        <span className="font-bold">full-stack developer</span>. My journey
        started with a journalism degree, cultivating{" "}
        <span className="font-bold">strong communication skills</span> . Now,
        I'm immersed in the world of code, specializing in{" "}
        <span className=" font-bold italic">React and Next.js </span>. Let's
        build the future of the web <span className="underline">together</span>.
      </p>
    </section>
  );
}
