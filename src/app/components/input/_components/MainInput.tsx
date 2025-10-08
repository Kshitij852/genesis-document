"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "@atomos_tech/genesis";
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
              {/* size */}
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    size
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    "sm" | "lg"
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    "sm"
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Controls the size of the input field
                </TableDataCell>
              </TableRow>

              {/* disabled */}
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    disabled
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    boolean
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    false
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  When true, the input becomes non-interactive
                </TableDataCell>
              </TableRow>

              {/* startIcon */}
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    startIcon
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    ReactNode
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    -
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Icon to display at the start of the input field
                </TableDataCell>
              </TableRow>

              {/* endIcon */}
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    endIcon
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    ReactNode
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    -
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Icon to display at the end of the input field
                </TableDataCell>
              </TableRow>

              {/* error */}
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    error
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    boolean | string
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    false
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Displays an error state and message when provided
                </TableDataCell>
              </TableRow>

              {/* width */}
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    width
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    -
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    -{" "}
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Controls the width of the input and is customizable
                </TableDataCell>
              </TableRow>

              {/* withLabel */}
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    withLabel
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <div className="flex items-center gap-1">
                    <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono border-r border-purple-200">
                      Input
                    </code>
                    <span className="text-gray-400 mx-1">+</span>
                    <code className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs font-mono border-l border-green-200">
                      Label
                    </code>
                    <span className="text-gray-400 mx-1">+</span>
                    <code className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs font-mono border-l border-green-200">
                      HelperText
                    </code>
                  </div>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-400 text-sm">
                  -
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  <div className="space-y-2">
                    <p>
                      Combine with the{" "}
                      <code className="bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded text-xs font-mono">
                        Label
                      </code>{" "}
                      and{" "}
                      <code className="bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded text-xs font-mono">
                        HelperText
                      </code>{" "}
                      components for accessible form labels and helper text.
                    </p>
                    <div className="bg-gray-50 rounded border border-gray-200 px-3 py-2">
                      <code className="text-xs text-gray-700 font-mono block">
                        &lt;div className="flex flex-col gap-2"&gt;
                        <br />
                        &nbsp;&nbsp;&lt;Label required
                        htmlFor="email"&gt;Email&lt;/Label&gt;
                        <br />
                        &nbsp;&nbsp;&lt;Input id="email" type="text"
                        placeholder="Enter email" /&gt;
                        <br />
                        &nbsp;&nbsp;&lt;HelperText&gt;This is a helper
                        text&lt;/HelperText&gt;
                        <br />
                        &lt;/div&gt;
                      </code>
                    </div>
                  </div>
                </TableDataCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
};

export default MainInput;
