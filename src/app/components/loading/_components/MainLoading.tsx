"use client";
import React from "react";

import FeatureCard from "../../../../components/common/FeatureCard";
import {
  RiCodeLine,
  RiPaletteLine,
  RiTimerLine,
  RiLightbulbFlashLine,
} from "@remixicon/react";
import LoadingExampleSection from "./LoadingExampleSection";
import LoadingPropsTable from "./LoadingPropsTable";

const MainLoading = () => {
  return (
    <div className="space-y-10 p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary-100 rounded-lg">
          <RiLightbulbFlashLine size={26} className="text-primary-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Loading Component
          </h1>
          <p className="text-gray-600 mt-1">
            A versatile loading spinner for indicating progress and processing
            states. Supports multiple variants, colors, and customizable sizing
            for seamless integration.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiPaletteLine}
          title="Multiple Variants"
          description="Choose from different spinner styles including light, heavy, and custom variants for various use cases"
        />
        <FeatureCard
          icon={RiTimerLine}
          title="Flexible Sizing"
          description="Customizable width and height to fit any context from small buttons to full-page loaders"
        />
        <FeatureCard
          icon={RiCodeLine}
          title="Customizable Colors"
          description="Full control over spinner colors to match your brand and design system requirements"
        />
      </div>

      {/* Example Section */}
      <LoadingExampleSection />

      {/* Props Table */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Props</h2>
        <LoadingPropsTable />
      </section>
    </div>
  );
};

export default MainLoading;
