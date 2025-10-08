import { Button, Tooltip } from "@atomos_tech/genesis";
import { RiPaletteLine } from "@remixicon/react";
import React from "react";

import ThemePalette from "./Palatte";

const Header = () => {
  return (
    <header className="bg-white shadow-sm h-16 flex items-center px-6 fixed top-0 left-0 w-full ml-20 z-10 border-b border-gray-100">
      <div className="flex justify-between items-center w-[1100px] max-w-7xl mx-auto ">
        {/* Navigation Buttons */}
        <div className="flex gap-8 items-center ">
          <Button
            variant="outlined"
            className="hover:bg-gray-50 hover:shadow-sm transition-all duration-200 px-4 py-2"
          >
            Documentation
          </Button>
          <Button
            variant="outlined"
            className="hover:bg-gray-50 hover:shadow-sm transition-all duration-200 px-4 py-2"
          >
            Blog
          </Button>
          <Button
            variant="outlined"
            className="hover:bg-gray-50 hover:shadow-sm transition-all duration-200 px-4 py-2"
          >
            Resource
          </Button>
        </div>

        {/* Palette Icon with Enhanced Hover Effect */}
        {/* <Tooltip position="bottom" content="Customize theme"> */}
        {/* <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-md hover:scale-105 mr-5">
            <RiPaletteLine
              size={20}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            />
          </button> */}
        <ThemePalette />
        {/* </Tooltip> */}
      </div>
    </header>
  );
};

export default Header;
