"use client";
import React from "react";
import FeatureCard from "../../../../components/common/FeatureCard";
import {
  RiCodeLine,
  RiPaletteLine,
  RiAppsLine,
  RiLightbulbFlashLine,
} from "@remixicon/react";
import TabsExampleSection from "./TabsExampleSection";
import TabsPropsTable from "./TabsPropsTable";

const MainTabs = () => {
  return (
    <div className="space-y-10 p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary-100 rounded-lg">
          <RiLightbulbFlashLine size={26} className="text-primary-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tabs Component</h1>
          <p className="text-gray-600 mt-1">
            A flexible tab navigation system for organizing content into
            multiple panels. Supports various styles, icons, and custom content
            for enhanced user experience.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiAppsLine}
          title="Multiple Variants"
          description="Choose from default and box-style tabs with different visual presentations and interactions"
        />
        <FeatureCard
          icon={RiPaletteLine}
          title="Rich Content"
          description="Support for icons, badges, and custom content in tab labels for better information hierarchy"
        />
        <FeatureCard
          icon={RiCodeLine}
          title="Fully Customizable"
          description="Complete control over styling with CSS classes for colors, borders, and animations"
        />
      </div>

      {/* Example Section */}
      <TabsExampleSection />

      {/* Props Table */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Props</h2>
        <TabsPropsTable />
      </section>
    </div>
  );
};

export default MainTabs;
