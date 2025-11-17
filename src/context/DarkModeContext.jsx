"use client";

import useLocalStorageState from "@/hooks/useLocalStorage";
import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [prefersDark, setPrefersDark] = useState(false);

  // Run on client only
  useEffect(() => {
    setPrefersDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    "isDarkMode",
    prefersDark
  );

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
    document.documentElement.classList.toggle("light-mode", !isDarkMode);
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error("useDarkMode must be used inside DarkModeProvider");
  return context;
}
