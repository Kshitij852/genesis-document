import Link from "next/link";
import React from "react";

import ThemePalette from "./Palatte";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md h-16 shadow-sm flex items-center px-6 fixed ml-10 top-0 left-0 w-full z-20 border-b border-gray-100">
      <div className="flex justify-between items-center w-[1300px] max-w-[1360px] mx-auto">
        <nav className="flex gap-10 items-center">
          {[{ label: "Installation", href: "/installation" }].map((item) => (
            <Link key={item.label} href={item.href} className="group relative">
              <span className="font-medium text-primary-500 text-sm tracking-wide transition-colors duration-300 group-hover:text-primary-800">
                {item.label}
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <ThemePalette />
      </div>
    </header>
  );
};

export default Header;
