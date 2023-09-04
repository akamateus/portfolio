"use client";
import React, { useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion } from "framer-motion";
import { useMode } from "@/context/mode-context";

type Mode = "light" | "dark";

//set the dark and light mode
export default function DarkMode() {
  const { mode, toggleMode } = useMode();
  //to save on local storage

  return (
    <motion.button
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.175 }}
      className="fixed bottom-5 right-5 bg-white w-[2.5rem]  h-[2.5rem] bg-opacity-80 backdrop-blur-[0.5rem] border dark:border-white  border-opacity-40 shadow-2xl rounded-lg flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-900"
      onClick={toggleMode}
    >
      {mode === "light" ? <BsMoon /> : <BsSun />}
    </motion.button>
  );
}
