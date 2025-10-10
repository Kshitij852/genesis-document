"use client";
import {
  RiCheckboxCircleLine,
  RiCodeLine,
  RiLightbulbFlashLine,
  RiPriceTag3Line,
} from "@remixicon/react";
import React, { useState } from "react";
import FeatureCard from "../../../../components/common/FeatureCard";
import GlobalNavigationExamples from "./GlobalNavigationExamples";
import GlobalNavigationProps from "./GlobalNavigationProps";

const MainGlobalNavigation = () => {
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
              Global Navigation Component
            </h1>
            <p className="text-gray-600 mt-1">
              A versatile navigation component that provides contextual user
              menus with flexible positioning, custom triggers, and rich content
              support.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiPriceTag3Line}
          title="Flexible Positioning"
          description="Support for multiple positions including top/bottom and left/right combinations with precise placement."
        />
        <FeatureCard
          icon={RiCodeLine}
          title="Custom Triggers"
          description="Use any component as a trigger including avatars, buttons, icons, or custom elements."
        />
        <FeatureCard
          icon={RiCheckboxCircleLine}
          title="Rich Content"
          description="Fully customizable content area with support for any React components and layouts."
        />
      </div>

      {/* Live Examples Section */}
      <GlobalNavigationExamples />

      {/* Props Section */}
      <GlobalNavigationProps />
    </div>
  );
};

export default MainGlobalNavigation;
