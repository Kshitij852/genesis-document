"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableHeadCell,
  TableDataCell,
} from "@atomos_tech/genesis";
import FeatureCard from "../../../../components/common/FeatureCard";
import {
  RiInformationLine,
  RiCodeLine,
  RiLayoutTopLine,
  RiText,
} from "@remixicon/react";
import TooltipExampleSection from "./TooltipExampleSection";
import TooltipPropsTable from "./TooltipPropsTable";

const MainTooltip = () => {
  return (
    <div className="space-y-10 p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary-100 rounded-lg">
          <RiInformationLine size={26} className="text-primary-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Tooltip Component
          </h1>
          <p className="text-gray-600 mt-1">
            Display contextual information when users hover over or focus on
            elements. Supports multiple positions and rich content formatting.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiLayoutTopLine}
          title="Multiple Positions"
          description="Tooltips can be positioned on top, right, bottom, or left of the trigger element"
        />
        <FeatureCard
          icon={RiText}
          title="Rich Content"
          description="Support for plain text, formatted HTML, and custom React components as content"
        />
        <FeatureCard
          icon={RiCodeLine}
          title="Customizable Styling"
          description="Fully customizable with CSS classes for colors, sizes, and animations"
        />
      </div>

      {/* Example Section */}
      <TooltipExampleSection />

      {/* Props Table */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Props</h2>
        <TooltipPropsTable />
      </section>
    </div>
  );
};

export default MainTooltip;
