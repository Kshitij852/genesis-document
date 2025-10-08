"use client";

import React, { useState } from "react";
import {
  Divider,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableHeadCell,
  TableDataCell,
} from "@atomos_tech/genesis";
import FeatureCard from "../../../../components/common/FeatureCard";
import CodeSnippet from "../../button/_components/CodeSnippet";
import {
  RiCodeLine,
  RiLayoutColumnLine,
  RiLayoutRowLine,
  RiLightbulbFlashLine,
} from "@remixicon/react";

const DividerExampleSection = () => {
  const [nestedTabs, setNestedTabs] = useState({
    horizontal: "react",
    vertical: "react",
  });

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 items-start">
      {/* Horizontal Divider Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Horizontal Dividers
        </h2>

        {/* Horizontal divider examples */}
        <div className="space-y-6 mb-6">
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Default horizontal divider
              </p>
              <Divider className="my-4" />
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">Custom color divider</p>
              <Divider className="my-4 border-primary-600 border-2" />
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">Thick divider</p>
              <Divider className="my-4 border-8" />
            </div>
          </div>
        </div>

        {/* Nested Tabs for React / Next */}
        <TabsContainer value={nestedTabs.horizontal}>
          <TabList
            onChange={(val) => handleNestedTabChanges("horizontal", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.horizontal}
              onChange={(val) => handleNestedTabChanges("horizontal", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.horizontal}
              onChange={(val) => handleNestedTabChanges("horizontal", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.horizontal}>
            <CodeSnippet
              title="Horizontal Dividers"
              code={`{/* Default horizontal divider */}
<Divider className="my-4" />

{/* Custom color divider */}
<Divider className="my-4 border-primary-600 border-2" />

{/* Thick divider */}
<Divider className="my-4 border-8" />`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.horizontal}>
            <CodeSnippet
              title="Horizontal Dividers"
              code={`{/* Default horizontal divider */}
<Divider className="my-4" />

{/* Custom color divider */}
<Divider className="my-4 border-primary-600 border-2" />

{/* Thick divider */}
<Divider className="my-4 border-8" />`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* Vertical Divider Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Vertical Dividers
        </h2>

        {/* Vertical divider examples */}
        <div className="space-y-5 mb-6">
          <div className="flex items-center justify-center gap-8 p-6 border border-gray-200 rounded-lg">
            <div className="text-center">
              <p className="text-sm font-medium">Section 1</p>
              <p className="text-xs text-gray-600">Left content</p>
            </div>

            <Divider position="vertical" height="60px" className="mx-4" />

            <div className="text-center">
              <p className="text-sm font-medium">Section 2</p>
              <p className="text-xs text-gray-600">Right content</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 p-4 border border-gray-200 rounded-lg">
            <span className="text-sm text-gray-700">Item 1</span>

            <Divider position="vertical" height="40px" />

            <span className="text-sm text-gray-700">Item 2</span>

            <Divider position="vertical" height="40px" />

            <span className="text-sm text-gray-700">Item 3</span>
          </div>

          <div className="flex items-center justify-center gap-4 p-4 border border-gray-200 rounded-lg">
            <div className="h-20 w-20 bg-primary-100 rounded-lg flex items-center justify-center">
              <span className="text-primary-700 font-medium">A</span>
            </div>

            <Divider
              position="vertical"
              height="80px"
              className="border-2 border-primary-600"
            />

            <div className="h-20 w-20 bg-primary-100 rounded-lg flex items-center justify-center">
              <span className="text-primary-700 font-medium">B</span>
            </div>
          </div>
        </div>

        <TabsContainer value={nestedTabs.vertical}>
          <TabList
            onChange={(val) => handleNestedTabChanges("vertical", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.vertical}
              onChange={(val) => handleNestedTabChanges("vertical", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.vertical}
              onChange={(val) => handleNestedTabChanges("vertical", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.vertical}>
            <CodeSnippet
              title="Vertical Dividers"
              code={`{/* Basic vertical divider between sections */}
    <div className="flex items-center justify-center gap-8 p-6 border border-gray-200 rounded-lg">
    <div className="text-center">
        <p className="text-sm font-medium">Section 1</p>
        <p className="text-xs text-gray-600">Left content</p>
    </div>
    
    <Divider
        position="vertical"
        height="60px"
        className="mx-4"
    />
    
    <div className="text-center">
        <p className="text-sm font-medium">Section 2</p>
        <p className="text-xs text-gray-600">Right content</p>
    </div>
    </div>

{/* Multiple vertical dividers */}
    <div className="flex items-center justify-center gap-6 p-4 border border-gray-200 rounded-lg">
    <span className="text-sm text-gray-700">Item 1</span>
    
    <Divider
        position="vertical"
        height="40px"
        className="border-primary-600"
    />
    
    <span className="text-sm text-gray-700">Item 2</span>
    
    <Divider
        position="vertical"
        height="40px"
        className="border-dashed border-warning-600"
    />
    
    <span className="text-sm text-gray-700">Item 3</span>
    </div>

{/* Vertical divider with custom elements */}
    <div className="flex items-center justify-center gap-4 p-4 border border-gray-200 rounded-lg">
    <div className="h-20 w-20 bg-primary-100 rounded-lg flex items-center justify-center">
        <span className="text-primary-700 font-medium">A</span>
    </div>
    
    <Divider
        position="vertical"
        height="80px"
        className="border-2 border-success-600"
    />
    
    <div className="h-20 w-20 bg-success-100 rounded-lg flex items-center justify-center">
        <span className="text-success-700 font-medium">B</span>
    </div>
    </div>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.vertical}>
            <CodeSnippet
              title="Vertical Dividers"
              code={`{/* Basic vertical divider between sections */}
    <div className="flex items-center justify-center gap-8 p-6 border border-gray-200 rounded-lg">
    <div className="text-center">
        <p className="text-sm font-medium">Section 1</p>
        <p className="text-xs text-gray-600">Left content</p>
    </div>
    
    <Divider
        position="vertical"
        height="60px"
        className="mx-4"
    />
    
    <div className="text-center">
        <p className="text-sm font-medium">Section 2</p>
        <p className="text-xs text-gray-600">Right content</p>
    </div>
    </div>

{/* Multiple vertical dividers */}
    <div className="flex items-center justify-center gap-6 p-4 border border-gray-200 rounded-lg">
    <span className="text-sm text-gray-700">Item 1</span>
    
    <Divider
        position="vertical"
        height="40px"
        className="border-primary-600"
    />
    
    <span className="text-sm text-gray-700">Item 2</span>
    
    <Divider
        position="vertical"
        height="40px"
        className="border-dashed border-warning-600"
    />
    
    <span className="text-sm text-gray-700">Item 3</span>
    </div>

{/* Vertical divider with custom elements */}
    <div className="flex items-center justify-center gap-4 p-4 border border-gray-200 rounded-lg">
    <div className="h-20 w-20 bg-primary-100 rounded-lg flex items-center justify-center">
        <span className="text-primary-700 font-medium">A</span>
    </div>
    
    <Divider
        position="vertical"
        height="80px"
        className="border-2 border-success-600"
    />
    
    <div className="h-20 w-20 bg-success-100 rounded-lg flex items-center justify-center">
        <span className="text-success-700 font-medium">B</span>
    </div>
    </div>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>
    </div>
  );
};

const DividerPropsTable = () => {
  return (
    <div className="overflow-auto shadow-sm rounded-xl border border-gray-200">
      <Table>
        <TableHead>
          <TableRow className="text-left bg-gray-50">
            <TableHeadCell className="text-sm font-semibold text-gray-700">
              Prop
            </TableHeadCell>
            <TableHeadCell className="text-sm font-semibold text-gray-700">
              Type
            </TableHeadCell>
            <TableHeadCell className="text-sm font-semibold text-gray-700">
              Default
            </TableHeadCell>
            <TableHeadCell className="text-sm font-semibold text-gray-700">
              Description
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
              <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                position
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
              <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                "horizontal" | "vertical"
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
              <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                "horizontal"
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
              Orientation of the divider - horizontal or vertical
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
              Height of the vertical divider (e.g., "200px", "50%", "2rem")
            </TableDataCell>
          </TableRow>

          <TableRow>
            <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
              <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                className
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
              Additional CSS classes for custom styling (colors, borders, etc.)
            </TableDataCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

const MainDivider = () => {
  return (
    <div className="space-y-10 p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary-100 rounded-lg">
          <RiLightbulbFlashLine size={26} className="text-primary-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Divider Component
          </h1>
          <p className="text-gray-600 mt-1">
            Separate content with horizontal or vertical dividers. Perfect for
            creating visual hierarchy and organizing sections in your layout.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiLayoutRowLine}
          title="Horizontal Dividers"
          description="Separate content vertically with customizable colors and styles"
        />
        <FeatureCard
          icon={RiLayoutColumnLine}
          title="Vertical Dividers"
          description="Divide content horizontally with adjustable height and styling"
        />
        <FeatureCard
          icon={RiCodeLine}
          title="Fully Customizable"
          description="Customize colors, borders, thickness, and styles with Tailwind classes"
        />
      </div>

      {/* Example Section */}
      <DividerExampleSection />

      {/* Props Table */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Props</h2>
        <DividerPropsTable />
      </section>
    </div>
  );
};

export default MainDivider;
