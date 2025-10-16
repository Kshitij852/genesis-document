"use client";

import React, { useState } from "react";
import MainSidebar from "@/components/common/Sidebar";
import Header from "@/components/common/Header";
import MainInstallation from "./_components/MainInstallation";

const Installation = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="relative flex h-screen">
      {/* Sidebar - overlay */}
      <div
        className={`fixed top-0 left-0 h-full z-50 transition-all duration-300 ${
          collapsed ? "w-20" : ""
        }`}
      >
        <MainSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>

      {/* Main content area */}
      <div className="flex flex-col flex-1 ml-20 transition-all duration-300">
        {/* Header */}
        <Header />

        {/* Page content */}
        <main className="mt-16">
          <MainInstallation />
        </main>
      </div>
    </div>
  );
};

export default Installation;
