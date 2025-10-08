"use client";
import { cn } from "@/utils/util";
import React, { createContext, useContext, useState } from "react";

type ThemeIntent =
  | "theme-primary"
  | "theme-bluegray"
  | "theme-bluelight"
  | "theme-gray"
  | "theme-error"
  | "theme-warning"
  | "theme-success"
  | "theme-indigo"
  | "theme-purple"
  | "theme-violet"
  | "theme-pink"
  | "theme-rose"
  | "theme-orange";

interface ThemeContextProps {
  intent: ThemeIntent;
  setIntent: (intent: ThemeIntent) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [intent, setIntent] = useState<ThemeIntent>("theme-primary");

  return (
    <ThemeContext.Provider value={{ intent, setIntent }}>
      <div className={cn(intent)}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
