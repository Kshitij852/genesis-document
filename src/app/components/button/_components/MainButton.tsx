"use client";

import { Tab, TabList, TabPanel, TabsContainer } from "@atomos_tech/genesis";
import {
  RiCodeLine,
  RiInformationLine,
  RiLightbulbFlashLine,
  RiCheckboxCircleLine,
} from "@remixicon/react";
import React, { useState } from "react";
import FeatureCard from "../../../../components/common/FeatureCard";
import PropsSection from "./PropsSection";
import ExampleSection from "./ExampleSection";

const MainButton = () => {
  const [value, setValue] = useState("1");

  const handleTabChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="px-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary-100 rounded-lg">
              <RiLightbulbFlashLine size={24} className="text-primary-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Button Component
              </h1>
              <p className="text-gray-600 mt-1">
                A versatile button component with multiple variants, sizes, and
                states for all your interaction needs.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <FeatureCard
            icon={RiCheckboxCircleLine}
            title="Accessible"
            description="Fully accessible with proper ARIA labels and keyboard navigation"
          />
          <FeatureCard
            icon={RiCodeLine}
            title="Customizable"
            description="Multiple variants, sizes, and colors to fit any design system"
          />
          <FeatureCard
            icon={RiInformationLine}
            title="TypeScript"
            description="Fully typed with TypeScript for better developer experience"
          />
        </div>

        {/* Tabs */}
        <TabsContainer value={value}>
          <TabList
            onChange={handleTabChange}
            ariaLabel="lab API tabs example"
            box={false}
            className="border-none"
          >
            <Tab
              label="Examples"
              value="1"
              onChange={handleTabChange}
              selectedTabValue={value}
            />
            <Tab
              label="Props"
              value="2"
              onChange={handleTabChange}
              selectedTabValue={value}
            />
          </TabList>
          <TabPanel value="1" currentValue={value}>
            <ExampleSection />
          </TabPanel>

          <TabPanel value="2" currentValue={value}>
            <PropsSection />
          </TabPanel>
        </TabsContainer>
      </div>
    </div>
  );
};

export default MainButton;
