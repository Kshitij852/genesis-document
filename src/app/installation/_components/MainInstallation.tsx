"use client";
import FeatureCard from "@/components/common/FeatureCard";
import { Tab, TabList, TabPanel, TabsContainer } from "@atomos_tech/genesis";

import {
  RiNpmjsLine,
  RiReactjsLine,
  RiCheckboxCircleLine,
  RiLightbulbFlashLine,
} from "@remixicon/react";
import React, { useState } from "react";
import InstallationReact from "./InstallationReact";
import InstallationNext from "./InstallationNext";

const MainInstallation = () => {
  // tabs
  const [value, setValue] = useState("1");

  const handleTabChange = (newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-primary-100 rounded-lg">
            <RiLightbulbFlashLine size={24} className="text-primary-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Installation Guide
            </h1>
            <p className="text-gray-600 mt-1">
              Get started with Genesis Design System - a comprehensive React
              component library for building modern, accessible web
              applications.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiNpmjsLine}
          title="Easy Installation"
          description="Install via npm, yarn, or pnpm with zero configuration. Just add the package and start building immediately."
        />
        <FeatureCard
          icon={RiReactjsLine}
          title="React & Next.js Ready"
          description="Built specifically for React 18+ with full Next.js App Router support and TypeScript definitions."
        />
        <FeatureCard
          icon={RiCheckboxCircleLine}
          title="Tree Shakeable"
          description="Only bundle what you use. Modern ES modules with optimal bundle sizes for both React and Next.js."
        />
      </div>

      <div className="px-6">
        {" "}
        <TabsContainer value={value}>
          <TabList
            onChange={handleTabChange}
            ariaLabel="lab API tabs example"
            box={false}
            className="border-none w-fit"
          >
            <Tab
              label="React"
              value="1"
              onChange={handleTabChange}
              selectedTabValue={value}
            />
            <Tab
              label="Next.js"
              value="2"
              onChange={handleTabChange}
              selectedTabValue={value}
            />
          </TabList>
          <TabPanel value="1" currentValue={value}>
            <InstallationReact />
          </TabPanel>
          <TabPanel value="2" currentValue={value}>
            <InstallationNext />
          </TabPanel>
        </TabsContainer>
      </div>
    </div>
  );
};

export default MainInstallation;
