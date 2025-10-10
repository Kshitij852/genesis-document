"use client";
import React, { useState } from "react";
import FeatureCard from "../../../../components/common/FeatureCard";
import { RiLayoutMasonryLine, RiCodeLine, RiFocusLine } from "@remixicon/react";
import ModalExampleSection from "./ModalExampleSection";
import ModalPropsTable from "./ModalPropsTable";
import { Tab, TabList, TabPanel, TabsContainer } from "@atomos_tech/genesis";

const MainModal = () => {
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
          <RiLayoutMasonryLine size={26} className="text-primary-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Modal Component</h1>
          <p className="text-gray-600 mt-1">
            A flexible and accessible modal dialog for displaying content,
            forms, and interactive elements. Supports various sizes, close
            behaviors, and custom content.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiFocusLine}
          title="Multiple Close Options"
          description="Close modal via close button, outside click, or ESC key for optimal user experience"
        />
        <FeatureCard
          icon={RiLayoutMasonryLine}
          title="Customizable Sizing"
          description="Flexible width control with responsive design and maximum content constraints"
        />
        <FeatureCard
          icon={RiCodeLine}
          title="Rich Content Support"
          description="Support for any React content including forms, tooltips, and complex components"
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
          <ModalExampleSection />
        </TabPanel>
        <TabPanel value="2" currentValue={value}>
          {/* Props Table */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Props</h2>
            <ModalPropsTable />
          </section>
        </TabPanel>
      </TabsContainer>
    </div>
  );
};

export default MainModal;
