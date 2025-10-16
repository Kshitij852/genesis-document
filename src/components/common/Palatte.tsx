"use client";
import React, { useState, useRef, useEffect } from "react";
import { RiPaletteLine } from "@remixicon/react";
import { useTheme } from "@/context/ThemeContext";

const ThemePalette = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { setIntent, intent } = useTheme();

  const colors = [
    { name: "Primary", intent: "theme-primary", hex: "#1570ef" }, // primary-600
    { name: "Blue Gray", intent: "theme-bluegray", hex: "#3e4784" }, // bluegray-600
    { name: "Blue Light", intent: "theme-bluelight", hex: "#0086c9" }, // bluelight-600
    { name: "Gray", intent: "theme-gray", hex: "#475467" }, // gray-600
    { name: "Error", intent: "theme-error", hex: "#d92d20" }, // error-600
    { name: "Warning", intent: "theme-warning", hex: "#dc6803" }, // warning-600
    { name: "Success", intent: "theme-success", hex: "#039855" }, // success-600
    { name: "Indigo", intent: "theme-indigo", hex: "#444ce7" }, // indigo-600
    { name: "Purple", intent: "theme-purple", hex: "#6938ef" }, // purple-600
    { name: "Violet", intent: "theme-violet", hex: "#7f56d9" }, // violet-600
    { name: "Pink", intent: "theme-pink", hex: "#dd2590" }, // pink-600
    { name: "Rose", intent: "theme-rose", hex: "#e31b54" }, // rose-600
    { name: "Orange", intent: "theme-orange", hex: "#ec4a0a" }, // orange-600
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleColorChange = (intent: string) => {
    setIntent(intent as any);
    setOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Palette button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-md hover:scale-105"
      >
        <RiPaletteLine
          size={20}
          className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute top-12 right-0 bg-white shadow-lg border border-gray-200 rounded-lg p-3 w-[300px] z-50 animate-fadeIn">
          <p className="text-sm text-gray-500 mb-2">Choose Theme</p>
          <div className="grid grid-cols-4 gap-3">
            {colors.map((c) => (
              <div
                key={c.name}
                className={`flex flex-col items-center p-2 rounded-lg transition-all whitespace-nowrap duration-200 ${
                  intent === c.intent ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
              >
                <button
                  onClick={() => handleColorChange(c.intent)}
                  className={`w-6 h-6 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                    intent === c.intent ? "" : "border-gray-200"
                  }`}
                  title={c.name}
                  style={{ backgroundColor: c.hex }}
                />
                <span
                  className={`text-xs mt-1 ${
                    intent === c.intent
                      ? "text-gray-800 font-medium"
                      : "text-gray-600"
                  }`}
                >
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemePalette;
