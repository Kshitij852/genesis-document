"use client";
import {
  RiCheckboxCircleLine,
  RiCodeLine,
  RiLightbulbFlashLine,
  RiPriceTag3Line,
} from "@remixicon/react";
import React from "react";

import FeatureCard from "../../../../components/common/FeatureCard";
import ChipExampleSection from "./ChipExampleSection";
import ChipTableProp from "./ChipTableProp";

const MainChip = () => {
  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-primary-100 rounded-lg">
            <RiLightbulbFlashLine size={24} className="text-primary-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Chip Component</h1>
            <p className="text-gray-600 mt-1">
              Compact elements representing an input, attribute, or action.
              Chips can display status, allow selection, or trigger actions. .
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiPriceTag3Line}
          title="Compact & Informative"
          description="Ideal for displaying statuses, categories, or quick bits of information in minimal space."
        />

        <FeatureCard
          icon={RiCodeLine}
          title="Customizable"
          description="Supports multiple intents, sizes, and the optional dot indicator for enhanced visual clarity."
        />
        <FeatureCard
          icon={RiCheckboxCircleLine}
          title="Interactive & Reusable"
          description="Can represent interactive elements like filters, selections, or tags across different contexts."
        />
      </div>

      {/* Chip example component */}
      <ChipExampleSection />

      {/* Props Section */}
      <ChipTableProp />
    </div>
  );
};

export default MainChip;
