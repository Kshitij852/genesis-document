"use client";
import React, { useState } from "react";
import FeatureCard from "../../../../components/common/FeatureCard";
import {
  RiCodeLine,
  RiLayoutLine,
  RiArrowLeftRightLine,
  RiLightbulbFlashLine,
} from "@remixicon/react";
import StepperExampleSection from "./StepperExampleSection";
import StepperPropsTable from "./StepperPropsTable";
import { Tab, TabList, TabPanel, TabsContainer } from "@atomos_tech/genesis";

const MainStepper = () => {
  // tabs
  const [value, setValue] = useState("1");

  const handleTabChange = (newValue: string) => {
    setValue(newValue);
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
            Stepper Component
          </h1>
          <p className="text-gray-600 mt-1">
            A versatile stepper component for guiding users through multi-step
            processes. Supports both horizontal and vertical layouts with
            customizable step configurations.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiLayoutLine}
          title="Multiple Layouts"
          description="Choose between horizontal and vertical stepper layouts to fit your design and space requirements"
        />
        <FeatureCard
          icon={RiArrowLeftRightLine}
          title="Flexible Navigation"
          description="Complete control over step progression with next/previous buttons and direct step selection"
        />
        <FeatureCard
          icon={RiCodeLine}
          title="Customizable Steps"
          description="Fully configurable steps with custom names, components, and completion states"
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
          {/* Example Section */}
          <StepperExampleSection />{" "}
        </TabPanel>
        <TabPanel value="2" currentValue={value}>
          {/* Props Table */}
          <section className="space-y-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800">Props</h2>
            <StepperPropsTable />
          </section>{" "}
        </TabPanel>
      </TabsContainer>
    </div>
  );
};

export default MainStepper;
