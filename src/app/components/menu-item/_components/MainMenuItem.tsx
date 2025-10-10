"use client";
import React from "react";
import FeatureCard from "../../../../components/common/FeatureCard";
import {
  RiMenuLine,
  RiCodeLine,
  RiLink,
  RiLightbulbFlashLine,
} from "@remixicon/react";
import MenuItemsExampleSection from "./MenuItemsExampleSection";
import MenuItemsPropsTable from "./MenuItemsPropsTable";

const MainMenuItems = () => {
  return (
    <div className="space-y-10 p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary-100 rounded-lg">
          <RiLightbulbFlashLine size={26} className="text-primary-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            MenuItems Components
          </h1>
          <p className="text-gray-600 mt-1">
            A comprehensive dropdown menu system with support for nested menus,
            custom triggers, and various content types. Perfect for navigation
            menus, action menus, and complex dropdown interfaces.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiMenuLine}
          title="Nested Menus"
          description="Support for multi-level dropdown menus with nested items and sub-menus for complex navigation structures"
        />
        <FeatureCard
          icon={RiLink}
          title="Flexible Content"
          description="Support for links, custom React components, and various content types within menu items"
        />
        <FeatureCard
          icon={RiCodeLine}
          title="Customizable Triggers"
          description="Fully customizable trigger elements with support for icons, buttons, and custom components"
        />
      </div>

      {/* Example Section */}
      <MenuItemsExampleSection />

      {/* Props Table */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Props</h2>
        <MenuItemsPropsTable />
      </section>
    </div>
  );
};

export default MainMenuItems;
