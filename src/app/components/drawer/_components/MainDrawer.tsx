"use client";
import React from "react";

import FeatureCard from "../../../../components/common/FeatureCard";
import {
  RiLayoutLine,
  RiSettingsLine,
  RiLightbulbFlashLine,
  RiSidebarUnfoldLine,
} from "@remixicon/react";
import DrawerExampleSection from "./DrawerExampleSection";
import DrawerPropsTable from "./DrawerPropsTable";

const MainDrawer = () => {
  return (
    <div className="space-y-10 p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary-100 rounded-lg">
          <RiLightbulbFlashLine size={26} className="text-primary-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Drawer Component</h1>
          <p className="text-gray-600 mt-1">
            A versatile sliding panel component that appears from any screen
            edge. Perfect for sidebars, settings panels, notifications, and
            temporary overlays.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiSidebarUnfoldLine}
          title="Multiple Positions"
          description="Slide in from top, right, bottom, or left - perfect for any interface layout"
        />
        <FeatureCard
          icon={RiLayoutLine}
          title="Flexible Sizing"
          description="Full control over dimensions with customizable width and height options"
        />
        <FeatureCard
          icon={RiSettingsLine}
          title="Customizable Behavior"
          description="Configure backdrop opacity, outside click behavior, and animation settings"
        />
      </div>

      {/* Example Section */}
      <DrawerExampleSection />

      {/* Props Table */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Props</h2>
        <DrawerPropsTable />
      </section>
    </div>
  );
};

export default MainDrawer;
