"use client";
import {
  RiCheckboxCircleLine,
  RiCodeLine,
  RiLightbulbFlashLine,
  RiPriceTag3Line,
} from "@remixicon/react";
import React from "react";
import AvatarExampleSection from "./AvatarExampleSection";
import AvatarPropTable from "./AvatarPropTable";
import FeatureCard from "@/components/common/FeatureCard";

const MainAvatar = () => {
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
              Avatar Component
            </h1>
            <p className="text-gray-600 mt-1">
              Versatile avatar components for displaying user profiles, icons,
              or initials with multiple types, sizes, and status indicators.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiPriceTag3Line}
          title="Multiple Types"
          description="Support for text avatars, icon avatars, and image avatars with flexible customization options."
        />
        <FeatureCard
          icon={RiCodeLine}
          title="Status Indicators"
          description="Built-in status badges with customizable positions and icons for online/offline states."
        />
        <FeatureCard
          icon={RiCheckboxCircleLine}
          title="Avatar Groups"
          description="Group multiple avatars together with overflow handling and maximum count limits."
        />
      </div>

      {/* Live Examples Section */}
      <AvatarExampleSection />

      {/* Props Section */}
      <AvatarPropTable />
    </div>
  );
};

export default MainAvatar;
