"use client";
import {
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Tooltip,
  Skeleton,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
} from "@atomos_tech/genesis";
import {
  RiCheckboxCircleLine,
  RiCodeLine,
  RiLightbulbFlashLine,
  RiPriceTag3Line,
} from "@remixicon/react";
import React, { useState } from "react";
import FeatureCard from "../../../../components/common/FeatureCard";
import CodeSnippet from "../../button/_components/CodeSnippet";

const MainSkeleton = () => {
  const [nestedTabs, setNestedTabs] = useState({
    basic: "react",
    fluid: "react",
    variants: "react",
  });

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

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
              Skeleton Component
            </h1>
            <p className="text-gray-600 mt-1">
              Placeholder loading components that provide a low-fidelity preview
              of content before it loads, improving perceived performance and
              user experience.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiPriceTag3Line}
          title="Loading States"
          description="Perfect for indicating content is being loaded, reducing layout shift and improving UX."
        />

        <FeatureCard
          icon={RiCodeLine}
          title="Flexible Shapes"
          description="Support for rectangles, circles, and custom dimensions with fluid responsiveness."
        />
        <FeatureCard
          icon={RiCheckboxCircleLine}
          title="Smooth Animations"
          description="Built-in pulse animation to indicate active loading states."
        />
      </div>

      {/* Live Examples Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column - Basic Usage */}
        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Basic Usage
          </h2>

          <div className="space-y-6 mb-6">
            {/* Rectangle Skeleton */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-4 mb-4">
                <Skeleton width="64px" height="64px" />
                <div className="flex-1 space-y-2">
                  <Skeleton width="60%" height="16px" />
                  <Skeleton width="40%" height="12px" />
                  <Skeleton width="80%" height="12px" />
                </div>
              </div>
              <p className="text-xs text-gray-500">Rectangle with text lines</p>
            </div>

            {/* Circle Skeleton */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-4">
                <Skeleton width="72px" height="72px" circle />
                <div className="flex-1 space-y-2">
                  <Skeleton width="50%" height="20px" />
                  <Skeleton width="30%" height="30px" />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Circle with text lines
              </p>
            </div>
          </div>

          {/* Code Examples for Basic Usage */}
          <TabsContainer value={nestedTabs.basic}>
            <TabList
              onChange={(val) => handleNestedTabChanges("basic", val)}
              ariaLabel="React and Next tabs"
              className="border-b border-gray-200 mb-4"
              box
            >
              <Tab
                label="React"
                value="react"
                selectedTabValue={nestedTabs.basic}
                onChange={(val) => handleNestedTabChanges("basic", val)}
              />
              <Tab
                label="Next"
                value="next"
                selectedTabValue={nestedTabs.basic}
                onChange={(val) => handleNestedTabChanges("basic", val)}
              />
            </TabList>

            <TabPanel value="react" currentValue={nestedTabs.basic}>
              <CodeSnippet
                title="Basic Skeleton Usage"
                code={`import { Skeleton } from "@atomos_tech/genesis";

<div className="flex items-center gap-4">
    <Skeleton width="64px" height="64px" />
        <div className="flex-1 space-y-2">
        <Skeleton width="60%" height="16px" />
        <Skeleton width="40%" height="12px" />
        <Skeleton width="80%" height="12px" />
    </div>
</div>

<div className="flex items-center gap-4">
    <Skeleton width="72px" height="72px" circle />
    <div className="flex-1 space-y-2">
        <Skeleton width="50%" height="20px" />
        <Skeleton width="30%" height="30px" />
    </div>
</div>`}
              />
            </TabPanel>

            <TabPanel value="next" currentValue={nestedTabs.basic}>
              <CodeSnippet
                title="Basic Skeleton Usage"
                code={`import { Skeleton } from "@atomos_tech/genesis";

<div className="flex items-center gap-4">
    <Skeleton width="64px" height="64px" />
        <div className="flex-1 space-y-2">
        <Skeleton width="60%" height="16px" />
        <Skeleton width="40%" height="12px" />
        <Skeleton width="80%" height="12px" />
    </div>
</div>

<div className="flex items-center gap-4">
    <Skeleton width="72px" height="72px" circle />
    <div className="flex-1 space-y-2">
        <Skeleton width="50%" height="20px" />
        <Skeleton width="30%" height="30px" />
    </div>
</div>`}
              />
            </TabPanel>
          </TabsContainer>
        </section>

        {/* Right Column - Fluid Examples */}
        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Fluid & Responsive
          </h2>

          <div className="space-y-6 mb-6">
            {/* Fluid rectangle skeleton */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="w-full h-auto aspect-[2/1] mb-2">
                <Skeleton animation="wave" width="100%" height="100%" />
              </div>
              <p className="text-xs text-gray-500">
                Fluid rectangle with pulse animation
              </p>
            </div>

            {/* Fluid circle skeleton */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-center mb-2">
                <Skeleton
                  animation="pulse"
                  width="128px"
                  height="128px"
                  circle
                />
              </div>
              <p className="text-xs text-gray-500 text-center">
                Fixed size circle
              </p>
            </div>
          </div>

          {/* Code Examples for Fluid Usage */}
          <TabsContainer value={nestedTabs.fluid}>
            <TabList
              onChange={(val) => handleNestedTabChanges("fluid", val)}
              ariaLabel="React and Next tabs"
              className="border-b border-gray-200 mb-4"
              box
            >
              <Tab
                label="React"
                value="react"
                selectedTabValue={nestedTabs.fluid}
                onChange={(val) => handleNestedTabChanges("fluid", val)}
              />
              <Tab
                label="Next"
                value="next"
                selectedTabValue={nestedTabs.fluid}
                onChange={(val) => handleNestedTabChanges("fluid", val)}
              />
            </TabList>

            <TabPanel value="react" currentValue={nestedTabs.fluid}>
              <CodeSnippet
                title="Fluid & Responsive Usage"
                code={`import { Skeleton } from "@atomos_tech/genesis";

// Fluid rectangle with wave animation
<div className="w-full h-auto aspect-[2/1]">
  <Skeleton animation="wave" width="100%" height="100%" />
</div>

// Fixed size circle with pusle animation
  <Skeleton animation="pulse" width="128px" height="128px" circle />`}
              />
            </TabPanel>

            <TabPanel value="next" currentValue={nestedTabs.fluid}>
              <CodeSnippet
                title="Fluid & Responsive Usage"
                code={`import { Skeleton } from "@atomos_tech/genesis";

// Fluid rectangle with wave animation
<div className="w-full h-auto aspect-[2/1]">
  <Skeleton animation="wave" width="100%" height="100%" />
</div>

// Fixed size circle with pusle animation
  <Skeleton animation="pulse" width="128px" height="128px" circle />`}
              />
            </TabPanel>
          </TabsContainer>
        </section>
      </div>

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
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    width
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    string
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    {`"100%"`}
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Width of the skeleton loader (px, %, rem, etc.)
                </TableDataCell>
              </TableRow>
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    height
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    string
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    -
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Height of the skeleton loader (px, %, rem, etc.)
                </TableDataCell>
              </TableRow>
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    circle
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
                  When true, renders a circular skeleton instead of rectangular
                </TableDataCell>
              </TableRow>
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    animation
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <Tooltip
                    position="top"
                    content={`"pulse" | "shimmer" | "wave"`}
                  >
                    <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                      {`"pulse" | "shimmer" | "wave"`}
                    </code>
                  </Tooltip>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    {`"shimmer"`}
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Animation type for the skeleton loader
                </TableDataCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
};

export default MainSkeleton;
