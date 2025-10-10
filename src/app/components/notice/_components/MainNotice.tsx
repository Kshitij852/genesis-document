"use client";
import {
  RiCheckboxCircleLine,
  RiCodeLine,
  RiLightbulbFlashLine,
  RiPriceTag3Line,
} from "@remixicon/react";
import React from "react";
import FeatureCard from "../../../../components/common/FeatureCard";
import NoticeExampleSection from "./NoticeExampleSection";
import NoticePropTable from "./NoticePropTable";

const MainNotice = () => {
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
              Notice Component
            </h1>
            <p className="text-gray-600 mt-1">
              Flexible notification components that provide contextual feedback
              messages for user actions with multiple variants and positioning
              options.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiPriceTag3Line}
          title="Multiple Variants"
          description="Success, warning, error, and info variants with appropriate colors and icons for different contexts."
        />
        <FeatureCard
          icon={RiCodeLine}
          title="Flexible Positioning"
          description="Support for top and bottom positioning with smooth animations and auto-dismiss options."
        />
        <FeatureCard
          icon={RiCheckboxCircleLine}
          title="Rich Content"
          description="Ability to include custom content, buttons, and interactive elements within the notice."
        />
      </div>

      {/* Live Examples Section */}
      <NoticeExampleSection />

      {/* Props Section */}
      <NoticePropTable />
    </div>
  );
};

export default MainNotice;
