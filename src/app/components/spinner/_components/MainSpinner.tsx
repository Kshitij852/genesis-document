"use client";
import React from "react";

import {
  RiLoaderLine,
  RiPaletteLine,
  RiTimerLine,
  RiLightbulbFlashLine,
} from "@remixicon/react";
import FeatureCard from "@/components/common/FeatureCard";
import SpinnerExampleSection from "./SpinnerExampleSection";
import SpinnerPropsTable from "./SpinnerPropsTable";
import { Spinner } from "@atomos_tech/genesis";

const MainSpinner = () => {
  return (
    <div className="space-y-10 p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary-100 rounded-lg">
          <RiLightbulbFlashLine size={26} className="text-primary-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Spinner Component
          </h1>
          <p className="text-gray-600 mt-1">
            A lightweight, customizable spinner for indicating loading states.
            Built with SVG for smooth animations and complete control over
            appearance and behavior.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiLoaderLine}
          title="Multiple Sizes"
          description="Predefined size options (sm, md, lg) and custom sizing for perfect fit in any context"
        />
        <FeatureCard
          icon={RiTimerLine}
          title="Speed Control"
          description="Adjustable animation speed to match your application's rhythm and user experience"
        />
        <FeatureCard
          icon={RiPaletteLine}
          title="Fully Customizable"
          description="Complete control over colors, stroke width, and animation properties"
        />
      </div>

      {/* Quick Preview */}
      <section className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Quick Preview
        </h2>
        <div className="flex items-center gap-6">
          <h3 className="text-lg text-gray-700">Spinner Sizes:</h3>
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </div>
      </section>

      {/* Example Section */}
      <SpinnerExampleSection />

      {/* Props Table */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Props</h2>
        <SpinnerPropsTable />
      </section>
    </div>
  );
};

export default MainSpinner;
