"use client";
import React from "react";

import { RiCodeLine, RiInformationLine } from "react-icons/ri";

import FeatureCard from "../../../../components/common/FeatureCard";
import { RiEqualizerLine, RiLightbulbFlashLine } from "@remixicon/react";
import SliderExampleSection from "./SliderExampleSection";
import SliderTable from "./SliderTable";

const MainSlider = () => {
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
              Slider Component
            </h1>
            <p className="text-gray-600 mt-1">
              A customizable range slider component for selecting values with
              smooth interaction and visual feedback.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiEqualizerLine}
          title="Customizable Range"
          description="Fully configurable min, max, and step values for precise value selection"
        />
        <FeatureCard
          icon={RiCodeLine}
          title="Multiple Sizes"
          description="Different size variants to fit various design contexts and spacing requirements"
        />
        <FeatureCard
          icon={RiInformationLine}
          title="Smooth Interaction"
          description="Smooth dragging and value updates with proper accessibility support"
        />
      </div>

      {/* Example Section */}
      <SliderExampleSection />

      {/* Props Section */}
      <SliderTable />
    </div>
  );
};

export default MainSlider;
