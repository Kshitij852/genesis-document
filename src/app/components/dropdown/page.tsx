"use client";
import FeatureCard from "@/components/common/FeatureCard";
import {
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Tooltip,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
} from "@atomos_tech/genesis";
import {
  RiCheckboxCircleLine,
  RiCodeLine,
  RiLightbulbFlashLine,
  RiPriceTag3Line,
  RiFilterLine,
  RiGlobalLine,
} from "@remixicon/react";
import React, { useState } from "react";
import DropdownPropsTable from "./_components/DropdownPropsTable";
import DropdownExamplesSection from "./_components/DropdownExamplesSection";

const MainDropdown = () => {
  const [nestedTabs, setNestedTabs] = useState({
    basic: "react",
    advanced: "react",
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
            <h1 className="text-3xl font-bold text-gray-900">
              Dropdown Component
            </h1>
            <p className="text-gray-600 mt-1">
              Flexible dropdown menus with support for single/multiple
              selection, search functionality, custom triggers, and various
              configurations for enhanced user experience.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiPriceTag3Line}
          title="Multiple Selection"
          description="Support for both single and multiple selection modes with customizable options and states."
        />
        <FeatureCard
          icon={RiCodeLine}
          title="Search & Filter"
          description="Built-in search functionality to filter options quickly in large datasets."
        />
        <FeatureCard
          icon={RiCheckboxCircleLine}
          title="Customizable Triggers"
          description="Flexible trigger components including icons, text, and custom elements with full control."
        />
      </div>

      {/* Live Examples Section */}
      <DropdownExamplesSection />

      {/* Props Section */}
      <DropdownPropsTable />
    </div>
  );
};

export default MainDropdown;
