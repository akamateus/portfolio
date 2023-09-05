"use client";
import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Mode = "light" | "dark";

type ModeContextProviderProps = {
  children: React.ReactNode;
};

type ModeContextType = {
  mode: Mode;
  toggleMode: () => void;
};
const ModeContext = createContext<ModeContextType | null>(null);

export default function ModeContextProvider({
  children,
}: ModeContextProviderProps) {
  const [mode, setMode] = useState<Mode>("dark");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  //getting the mode from local storage
  useEffect(() => {
    const localMode = window.localStorage.getItem("mode") as Mode | null;

    if (localMode) {
      setMode(localMode);

      if (localMode === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setMode("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ModeContext.Provider
      value={{
        mode,
        toggleMode,
      }}
    >
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ModeContextProvider");
  }

  return context;
}
