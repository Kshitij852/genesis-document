"use client";
import React from "react";

import {
  RiArrowDownSLine,
  RiCodeLine,
  RiInformationLine,
} from "react-icons/ri";
import FeatureCard from "../../../../components/common/FeatureCard";
import AccordionExampleSection from "./AccordionExampleSection";
import { RiLightbulbFlashLine } from "@remixicon/react";
import AccordionPropTable from "./AccordionPropTable";

const MainAccordion = () => {
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
              Accordion Component
            </h1>
            <p className="text-gray-600 mt-1">
              A collapsible accordion component for displaying and hiding
              content with smooth animations and customizable styles.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiArrowDownSLine}
          title="Single & Multiple Modes"
          description="Support for both single item (accordion) and multiple items (expandable) opening modes"
        />
        <FeatureCard
          icon={RiCodeLine}
          title="Customizable Icons"
          description="Custom trigger icons and styling options for personalized appearance"
        />
        <FeatureCard
          icon={RiInformationLine}
          title="Smooth Animations"
          description="Built-in smooth animations with configurable transition effects"
        />
      </div>

      {/* Example Section */}
      <AccordionExampleSection />

      {/* Props Section */}
      <AccordionPropTable />
    </div>
  );
};

export default MainAccordion;
