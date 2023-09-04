import React from "react";
import { BsSun } from "react-icons/bs";

export default function DarkMode() {
  return (
    <button className="fixed bottom-5 right-5 bg-white w-[2.5rem] h-[2.5rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white  border-opacity-40 shadow-2xl rounded-lg flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all">
      <BsSun />
    </button>
  );
}
