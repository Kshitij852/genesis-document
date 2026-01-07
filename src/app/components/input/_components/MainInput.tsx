"use client";
import React from "react";

import { RiCodeLine, RiInformationLine } from "react-icons/ri";
import FeatureCard from "../../../../components/common/FeatureCard";
import { RiInputMethodLine, RiLightbulbFlashLine } from "@remixicon/react";
import InputExampleSection from "./InputExampleSection";

const MainInput = () => {
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
              Input Component
            </h1>
            <p className="text-gray-600 mt-1">
              A versatile input field component with multiple sizes, states, and
              support for icons and validation.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiInputMethodLine}
          title="Multiple Sizes"
          description="Various size options to fit different design contexts and spacing requirements"
        />
        <FeatureCard
          icon={RiCodeLine}
          title="Rich States"
          description="Support for different states including disabled, error, and success with icons"
        />
        <FeatureCard
          icon={RiInformationLine}
          title="Accessible"
          description="Fully accessible with proper ARIA labels, keyboard navigation, and screen reader support"
        />
      </div>

      {/* Example Section */}
      <InputExampleSection />

      {/* Props Section */}
      {/* <InputPropTable /> */}
    </div>
  );
};

export default MainInput;
