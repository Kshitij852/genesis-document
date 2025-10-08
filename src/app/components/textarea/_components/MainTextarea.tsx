"use client";
import React from "react";
import FeatureCard from "../../../../components/common/FeatureCard";
import {
  RiText,
  RiCodeLine,
  RiLayoutTopLine,
  RiFocusLine,
} from "@remixicon/react";
import TextareaExampleSection from "./TextareaExampleSection";
import TextareaPropsTable from "./TextareaPropsTable";

const MainTextarea = () => {
  return (
    <div className="space-y-10 p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary-100 rounded-lg">
          <RiText size={26} className="text-primary-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Textarea Component
          </h1>
          <p className="text-gray-600 mt-1">
            A multi-line text input field for longer form content. Supports
            various sizes, states, and customizable styling for optimal user
            experience.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiLayoutTopLine}
          title="Multiple Sizes"
          description="Choose from small, medium, and large sizes to match your form hierarchy and design requirements"
        />
        <FeatureCard
          icon={RiFocusLine}
          title="Interactive States"
          description="Clear visual feedback with focus, disabled, and error states for better user interaction"
        />
        <FeatureCard
          icon={RiCodeLine}
          title="Customizable"
          description="Fully customizable with CSS classes, placeholder text, and row configuration"
        />
      </div>

      {/* Example Section */}
      <TextareaExampleSection />

      {/* Props Table */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Props</h2>
        <TextareaPropsTable />
      </section>
    </div>
  );
};

export default MainTextarea;
