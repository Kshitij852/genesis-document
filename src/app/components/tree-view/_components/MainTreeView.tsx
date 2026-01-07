"use client";
import React from "react";

import FeatureCard from "../../../../components/common/FeatureCard";
import {
  RiSettingsLine,
  RiExpandUpDownLine,
  RiLightbulbFlashLine,
  RiTreeLine,
} from "@remixicon/react";
import TreeViewPropsTable from "./TreeViewPropsTable";
import TreeViewExampleSection from "./TreeViewExampleSection";

const MainTreeView = () => {
  return (
    <div className="space-y-10 p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary-100 rounded-lg">
          <RiLightbulbFlashLine size={26} className="text-primary-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            TreeView Component
          </h1>
          <p className="text-gray-600 mt-1">
            A hierarchical tree component for displaying nested data structures.
            Perfect for file explorers, navigation menus, organizational charts,
            and any hierarchical data representation.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiTreeLine}
          title="Nested Structure"
          description="Support for unlimited nesting levels with expandable/collapsible nodes"
        />
        <FeatureCard
          icon={RiExpandUpDownLine}
          title="Flexible Expansion"
          description="Choose between single or multiple expanded nodes with various expansion modes"
        />
        <FeatureCard
          icon={RiSettingsLine}
          title="Rich Visuals"
          description="Custom leading/trailing visuals, icons, labels, and interactive elements"
        />
      </div>

      {/* Example Section */}
      <TreeViewExampleSection />

      {/* Props Table */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Props</h2>
        <TreeViewPropsTable />
      </section>
    </div>
  );
};

export default MainTreeView;
