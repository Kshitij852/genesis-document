"use client";
import React from "react";

import FeatureCard from "../../../../components/common/FeatureCard";
import {
  RiLayoutLine,
  RiPaletteLine,
  RiSettingsLine,
  RiLightbulbFlashLine,
} from "@remixicon/react";
import CardExampleSection from "./CardExampleSection";
import CardPropsTable from "./CardPropsTable";

const MainCard = () => {
  return (
    <div className="space-y-10 p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary-100 rounded-lg">
          <RiLightbulbFlashLine size={26} className="text-primary-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Card Component</h1>
          <p className="text-gray-600 mt-1">
            A flexible, customizable container component for organizing content.
            Supports headers, footers, actions, and full customization for any
            layout need.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiLayoutLine}
          title="Flexible Structure"
          description="Built with separate header, content, and footer sections for maximum layout flexibility"
        />
        <FeatureCard
          icon={RiPaletteLine}
          title="Full Customization"
          description="Complete control over colors, spacing, borders, and styling with className props"
        />
        <FeatureCard
          icon={RiSettingsLine}
          title="Action Integration"
          description="Built-in action area for buttons and CTAs with proper positioning and spacing"
        />
      </div>

      {/* Example Section */}
      <CardExampleSection />

      {/* Props Tables */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Card Props</h2>
        <CardPropsTable />
      </section>
    </div>
  );
};

export default MainCard;
