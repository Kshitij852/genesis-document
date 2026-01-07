"use client";
import React from "react";

import FeatureCard from "../../../../components/common/FeatureCard";
import {
  RiAlertLine,
  RiPaletteLine,
  RiSettingsLine,
  RiLightbulbFlashLine,
} from "@remixicon/react";
import CalloutExampleSection from "./CalloutExampleSection";
import CalloutPropsTable from "./CalloutPropsTable";

const MainCallout = () => {
  return (
    <div className="space-y-10 p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary-100 rounded-lg">
          <RiLightbulbFlashLine size={26} className="text-primary-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Callout Component
          </h1>
          <p className="text-gray-600 mt-1">
            A versatile alert component for displaying important messages,
            notifications, warnings, and success messages. Supports multiple
            intents, sizes, variants, and customizable icons.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiAlertLine}
          title="Multiple Intents"
          description="Built-in support for success, warning, error, info, and default states with appropriate styling"
        />
        <FeatureCard
          icon={RiPaletteLine}
          title="Flexible Variants"
          description="Choose between filled and outlined styles to match your design system"
        />
        <FeatureCard
          icon={RiSettingsLine}
          title="Customizable Icons"
          description="Add start and end icons, buttons, or any React elements for enhanced messaging"
        />
      </div>

      {/* Example Section */}
      <CalloutExampleSection />

      {/* Props Table */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Props</h2>
        <CalloutPropsTable />
      </section>
    </div>
  );
};

export default MainCallout;
