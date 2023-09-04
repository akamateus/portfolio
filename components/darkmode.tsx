"use client";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion } from "framer-motion";

type Mode = "light" | "dark";

//set the dark and light mode
export default function DarkMode() {
  const [mode, setMode] = useState<Mode>("dark");

  //to save on local storage
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      window.localStorage.setItem("mode", "dark");
    } else {
      setMode("light");
      window.localStorage.setItem("mode", "light");
    }
  };

  //getting the mode from local storage
  useEffect(() => {
    const localMode = window.localStorage.getItem("mode") as Mode | null;

    if (localMode) {
      setMode(localMode);
    }
  }, []);

  return (
    <motion.button
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.175 }}
      className="fixed bottom-5 right-5 bg-white w-[2.5rem] h-[2.5rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white  border-opacity-40 shadow-2xl rounded-lg flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
      onClick={toggleMode}
    >
      {mode === "light" ? <BsSun /> : <BsMoon />}
    </motion.button>
  );
}
