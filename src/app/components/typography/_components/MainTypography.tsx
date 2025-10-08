"use client";
import {
  HelperText,
  Input,
  Label,
  Tab,
  TabList,
  TabPanel,
  TabsContainer,
} from "@atomos_tech/genesis";
import {
  RiLightbulbFlashLine,
  RiCheckboxCircleLine,
  RiCodeLine,
  RiInformationLine,
} from "react-icons/ri";
import React, { useState } from "react";

import FeatureCard from "../../../../components/common/FeatureCard";
import CodeSnippet from "../../button/_components/CodeSnippet";
import TypographyExampleSection from "./TypographyExampleSection";
import { RiErrorWarningLine } from "@remixicon/react";
import LabelSection from "./LabelSection";
import HelpertextSection from "./HelpertextSection";

const MainTypography = () => {
  // tabs
  const [value, setValue] = useState("1");

  const handleTabChange = (newValue: string) => {
    setValue(newValue);
  };

  const [nestedTabs, setNestedTabs] = useState({
    label: "react",
    helper: "react",
  });

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
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
            <h1 className="text-3xl font-bold text-gray-900">Typography</h1>
            <p className="text-gray-600 mt-1">
              A comprehensive typography system with consistent font sizes,
              weights, and styles for building beautiful, accessible interfaces.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiCheckboxCircleLine}
          title="Consistent Scale"
          description="Carefully crafted font size hierarchy from display to text sizes for visual harmony"
        />
        <FeatureCard
          icon={RiCodeLine}
          title="Multiple Weights"
          description="Four font weights (Regular, Medium, Semi Bold, Bold) for emphasis and hierarchy"
        />
        <FeatureCard
          icon={RiInformationLine}
          title="Accessible"
          description="Optimized for readability with proper line heights and contrast ratios"
        />
      </div>

      <TabsContainer value={value}>
        <TabList
          onChange={handleTabChange}
          ariaLabel="lab API tabs example"
          box={false}
          className="border-none"
        >
          <Tab
            label="Example"
            value="1"
            onChange={handleTabChange}
            selectedTabValue={value}
          />
          <Tab
            label="Label"
            value="2"
            onChange={handleTabChange}
            selectedTabValue={value}
          />
          <Tab
            label="Helper Text"
            value="3"
            onChange={handleTabChange}
            selectedTabValue={value}
          />
        </TabList>
        <TabPanel value="1" currentValue={value}>
          <TypographyExampleSection />
        </TabPanel>
        <TabPanel value="2" currentValue={value}>
          <LabelSection />
        </TabPanel>
        <TabPanel value="3" currentValue={value}>
          <HelpertextSection />
        </TabPanel>
      </TabsContainer>
    </div>
  );
};

export default MainTypography;
