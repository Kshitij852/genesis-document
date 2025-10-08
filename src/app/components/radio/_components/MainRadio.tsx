"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  TableRow,
  TableDataCell,
} from "@atomos_tech/genesis";
import {
  RiCheckboxCircleLine,
  RiCodeLine,
  RiInformationLine,
} from "react-icons/ri";
import FeatureCard from "../../../../components/common/FeatureCard";
import RadioExampleSection from "./RadioExampleSection";
import { RiLightbulbFlashLine } from "@remixicon/react";

const MainRadio = () => {
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
              Radio Component
            </h1>
            <p className="text-gray-600 mt-1">
              A flexible and accessible radio button component supporting
              multiple sizes, states, and text configurations.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiCheckboxCircleLine}
          title="Multiple Sizes"
          description="Supports small and large variants for consistent spacing across form designs."
        />
        <FeatureCard
          icon={RiCodeLine}
          title="Label & Helper Support"
          description="Easily pair with labels and helper texts for clarity and accessibility."
        />
        <FeatureCard
          icon={RiInformationLine}
          title="Accessible"
          description="Fully compliant with ARIA standards, keyboard navigation, and screen readers."
        />
      </div>

      {/* Example Section */}
      <RadioExampleSection />

      {/* Props Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Props</h2>

        <div className="overflow-auto shadow-sm rounded-xl">
          <Table>
            <TableHead>
              <TableRow className="text-left">
                <TableHeadCell>Prop</TableHeadCell>
                <TableHeadCell>Type</TableHeadCell>
                <TableHeadCell>Default</TableHeadCell>
                <TableHeadCell>Description</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableDataCell>
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    size
                  </code>
                </TableDataCell>
                <TableDataCell>
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    "sm" | "lg"
                  </code>
                </TableDataCell>
                <TableDataCell>
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    "lg"
                  </code>
                </TableDataCell>
                <TableDataCell>
                  Controls the size of the radio button
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell>
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    checked
                  </code>
                </TableDataCell>
                <TableDataCell>
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    boolean
                  </code>
                </TableDataCell>
                <TableDataCell>
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    false
                  </code>
                </TableDataCell>
                <TableDataCell>
                  Determines if the radio is selected
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell>
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    disabled
                  </code>
                </TableDataCell>
                <TableDataCell>
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    boolean
                  </code>
                </TableDataCell>
                <TableDataCell>
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    false
                  </code>
                </TableDataCell>
                <TableDataCell>Makes the radio non-interactive</TableDataCell>
              </TableRow>

              {/* ✅ Added ReadOnly Row */}
              <TableRow>
                <TableDataCell>
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    readOnly
                  </code>
                </TableDataCell>
                <TableDataCell>
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    boolean
                  </code>
                </TableDataCell>
                <TableDataCell>
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    false
                  </code>
                </TableDataCell>
                <TableDataCell>
                  Prevents user interaction but keeps the radio visually active
                  and focusable
                </TableDataCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
};

export default MainRadio;
