"use client";

import React, { useState } from "react";
import {
  Spinner,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
  Button,
} from "@atomos_tech/genesis";
import CodeSnippet from "../../button/_components/CodeSnippet";

const SpinnerExampleSection = () => {
  const [nestedTabs, setNestedTabs] = useState({
    sizes: "react",
    customization: "react",
  });

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 items-start">
      {/* Sizes Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Size Variants
        </h2>

        {/* Spinner size examples */}
        <div className="flex flex-col gap-6 mb-6">
          {/* Predefined Sizes */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Predefined Sizes
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-lg">
                <Spinner size="xs" />
                <span className="text-sm font-medium text-gray-700">
                  Extra Small (xs)
                </span>
                {/* <code className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  16px
                </code> */}
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-lg">
                <Spinner size="sm" />
                <span className="text-sm font-medium text-gray-700">
                  Small (sm)
                </span>
                {/* <code className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  16px
                </code> */}
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-lg">
                <Spinner size="md" />
                <span className="text-sm font-medium text-gray-700">
                  Medium (md)
                </span>
                {/* <code className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  24px
                </code> */}
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-lg">
                <Spinner size="lg" />
                <span className="text-sm font-medium text-gray-700">
                  Large (lg)
                </span>
                {/* <code className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  32px
                </code> */}
              </div>
            </div>
          </div>
        </div>

        {/* Nested Tabs for React / Next */}
        <TabsContainer value={nestedTabs.sizes}>
          <TabList
            onChange={(val) => handleNestedTabChanges("sizes", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.sizes}
              onChange={(val) => handleNestedTabChanges("sizes", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.sizes}
              onChange={(val) => handleNestedTabChanges("sizes", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.sizes}>
            <CodeSnippet
              title="Spinner Size Examples"
              code={`{/* Predefined Sizes */}
<div className="grid grid-cols-2 gap-4">
  <div className="flex flex-col items-center gap-2">
    <Spinner size="xs" />
    <span>Extra Small (xs)</span>
  </div>
  <div className="flex flex-col items-center gap-2">
    <Spinner size="sm" />
    <span>Small (sm)</span>
  </div>
  <div className="flex flex-col items-center gap-2">
    <Spinner size="md" />
    <span>Medium (md)</span>
  </div>
  <div className="flex flex-col items-center gap-2">
    <Spinner size="lg" />
    <span>Large (lg)</span>
  </div>
 </div>
</div>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.sizes}>
            <CodeSnippet
              title="Spinner Size Examples"
              code={`{/* Predefined Sizes */}
<div className="grid grid-cols-2 gap-4">
  <div className="flex flex-col items-center gap-2">
    <Spinner size="xs" />
    <span>Extra Small (xs)</span>
  </div>
  <div className="flex flex-col items-center gap-2">
    <Spinner size="sm" />
    <span>Small (sm)</span>
  </div>
  <div className="flex flex-col items-center gap-2">
    <Spinner size="md" />
    <span>Medium (md)</span>
  </div>
  <div className="flex flex-col items-center gap-2">
    <Spinner size="lg" />
    <span>Large (lg)</span>
  </div>
 </div>
</div>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* Customization Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Customization
        </h2>

        {/* Spinner customization examples */}
        <div className="flex flex-col gap-6 mb-6">
          {/* Color Variants */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Color Variants
            </h3>
            <div className="grid grid-cols-4 gap-3">
              <div className="flex flex-col items-center gap-1 p-3 bg-gray-50 rounded-lg">
                <Spinner size="md" color="#3B82F6" />
                <span className="text-xs text-gray-600">Blue</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-3 bg-gray-50 rounded-lg">
                <Spinner size="md" color="#EF4444" />
                <span className="text-xs text-gray-600">Red</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-3 bg-gray-50 rounded-lg">
                <Spinner size="md" color="#10B981" />
                <span className="text-xs text-gray-600">Green</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-3 bg-gray-50 rounded-lg">
                <Spinner size="md" color="#8B5CF6" />
                <span className="text-xs text-gray-600">Purple</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-3 bg-gray-50 rounded-lg">
                <Spinner size="md" color="#F59E0B" />
                <span className="text-xs text-gray-600">Amber</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-3 bg-gray-50 rounded-lg">
                <Spinner size="md" color="#EC4899" />
                <span className="text-xs text-gray-600">Pink</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-3 bg-gray-50 rounded-lg">
                <Spinner size="md" color="#6B7280" />
                <span className="text-xs text-gray-600">Gray</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-3 bg-gray-50 rounded-lg">
                <Spinner size="md" color="#000000" />
                <span className="text-xs text-gray-600">Black</span>
              </div>
            </div>
          </div>

          {/* Usage in Buttons */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-700">
              Button Integration
            </h3>
            <div className="flex gap-3 flex-wrap">
              <Button>
                <Spinner size="sm" color="white" /> Loading...
              </Button>
              <Button variant="outlined">
                Processing <Spinner size="sm" />
              </Button>
              <Button variant="filled" intent="success">
                <Spinner size="sm" color="white" /> Saving
              </Button>
              <Button variant="filled" intent="warning">
                <Spinner size="sm" color="black" /> Submitting
              </Button>
            </div>
          </div>
        </div>

        <TabsContainer value={nestedTabs.customization}>
          <TabList
            onChange={(val) => handleNestedTabChanges("customization", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.customization}
              onChange={(val) => handleNestedTabChanges("customization", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.customization}
              onChange={(val) => handleNestedTabChanges("customization", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.customization}>
            <CodeSnippet
              title="Spinner Customization Examples"
              code={`{/* Color Variants */}
<div className="grid grid-cols-4 gap-3">
  <div className="flex flex-col items-center">
    <Spinner size="md" color="#3B82F6" />
    <span>Blue</span>
  </div>
  <div className="flex flex-col items-center">
    <Spinner size="md" color="#EF4444" />
    <span>Red</span>
  </div>
  <div className="flex flex-col items-center">
    <Spinner size="md" color="#10B981" />
    <span>Green</span>
  </div>
  <div className="flex flex-col items-center">
    <Spinner size="md" color="#8B5CF6" />
    <span>Purple</span>
  </div>
</div>

{/* Button Integration */}
<div className="flex gap-3 flex-wrap">
  <Button>
    <Spinner size="sm" color="white" /> Loading...
  </Button>
  <Button variant="outlined">
    Processing <Spinner size="sm" />
  </Button>
  <Button variant="filled" intent="success">
    <Spinner size="sm" color="white" /> Saving
  </Button>
   <Button variant="filled" intent="success">
    <Spinner size="sm" color="black" /> Submitting
  </Button>
</div>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.customization}>
            <CodeSnippet
              title="Spinner Customization Examples"
              code={`{/* Color Variants */}
<div className="grid grid-cols-4 gap-3">
  <div className="flex flex-col items-center">
    <Spinner size="md" color="#3B82F6" />
    <span>Blue</span>
  </div>
  <div className="flex flex-col items-center">
    <Spinner size="md" color="#EF4444" />
    <span>Red</span>
  </div>
  <div className="flex flex-col items-center">
    <Spinner size="md" color="#10B981" />
    <span>Green</span>
  </div>
  <div className="flex flex-col items-center">
    <Spinner size="md" color="#8B5CF6" />
    <span>Purple</span>
  </div>
</div>

{/* Button Integration */}
<div className="flex gap-3 flex-wrap">
  <Button>
    <Spinner size="sm" color="white" /> Loading...
  </Button>
  <Button variant="outlined">
    Processing <Spinner size="sm" />
  </Button>
  <Button variant="filled" intent="success">
    <Spinner size="sm" color="white" /> Saving
  </Button>
   <Button variant="filled" intent="success">
    <Spinner size="sm" color="black" /> Submitting
  </Button>
</div>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>
    </div>
  );
};

export default SpinnerExampleSection;
