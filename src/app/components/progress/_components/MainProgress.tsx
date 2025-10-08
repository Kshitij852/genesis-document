"use client";
import React, { useState } from "react";
import { TabsContainer, TabList, Tab, TabPanel } from "@atomos_tech/genesis";
import FeatureCard from "../../../../components/common/FeatureCard";
import {
  RiProgress1Line,
  RiProgress5Line,
  RiInformationLine,
  RiLightbulbFlashLine,
} from "@remixicon/react";
import LinearProgressExample from "./LinearProgressExample";
import CircularProgressExample from "./CircularProgressExample";
import ProgressBarPropsTable from "./ProgressBarPropsTable";

const MainProgressBar = () => {
  const [activeTab, setActiveTab] = useState("linear");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="space-y-10 p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary-100 rounded-lg">
          <RiLightbulbFlashLine size={26} className="text-primary-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Progress Indicators
          </h1>
          <p className="text-gray-600 mt-1">
            Linear and circular progress indicators to show task completion,
            loading states, and progress tracking.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiProgress1Line}
          title="Linear Progress"
          description="Horizontal progress bars with customizable colors and text positioning"
        />
        <FeatureCard
          icon={RiProgress5Line}
          title="Circular Progress"
          description="Circular progress indicators with size, stroke width, and text customization"
        />
        <FeatureCard
          icon={RiInformationLine}
          title="Multiple Variants"
          description="Support for different colors, sizes, and text display options"
        />
      </div>

      {/* Tabs for Progress Types */}
      <div>
        <TabsContainer value={activeTab}>
          <TabList
            onChange={handleTabChange}
            ariaLabel="Progress type tabs"
            box={false}
            className="border-none"
          >
            <Tab
              label="Linear Progress Bar"
              value="linear"
              onChange={handleTabChange}
              selectedTabValue={activeTab}
            />
            <Tab
              label="Circular Progress"
              value="circular"
              onChange={handleTabChange}
              selectedTabValue={activeTab}
            />
          </TabList>

          <TabPanel value="linear" currentValue={activeTab}>
            <div className="bg-white rounded-xl border border-gray-200 p-6 my-5">
              <LinearProgressExample />
            </div>
          </TabPanel>

          <TabPanel value="circular" currentValue={activeTab}>
            <div className="bg-white rounded-xl border border-gray-200 p-6 my-5">
              <CircularProgressExample />
            </div>
          </TabPanel>
        </TabsContainer>
      </div>

      {/* Props Table */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Props</h2>
        <ProgressBarPropsTable />
      </section>
    </div>
  );
};

export default MainProgressBar;
