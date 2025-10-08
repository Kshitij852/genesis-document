"use client";

import React, { useState } from "react";
import {
  Textarea,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
  Label,
  HelperText,
} from "@atomos_tech/genesis";
import CodeSnippet from "../../button/_components/CodeSnippet";

const TextareaExampleSection = () => {
  const [nestedTabs, setNestedTabs] = useState({
    sizes: "react",
    states: "react",
  });

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 items-start">
      {/* Sizes Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Sizes</h2>

        {/* Textarea size examples */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex flex-col gap-1">
            <Label className="text-sm font-medium text-gray-700">Large</Label>
            <Textarea
              placeholder="This is a large textarea"
              rows={5}
              size="lg"
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label className="text-sm font-medium text-gray-700">Small</Label>
            <Textarea
              placeholder="This is a small textarea"
              rows={3}
              size="sm"
            />
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
              title="Textarea Sizes"
              code={`{/* Large */}
  <Label className="text-sm font-medium text-gray-700">Large</Label>
  <Textarea
    placeholder="This is a large textarea"
    rows={5}
    size="lg"
  />

{/* Small */}
  <Label className="text-sm font-medium text-gray-700">Small</Label>
  <Textarea
    placeholder="This is a small textarea"
    rows={3}
    size="sm"
  />`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.sizes}>
            <CodeSnippet
              title="Textarea Sizes"
              code={`{/* Large */}
  <Label className="text-sm font-medium text-gray-700">Large</Label>
  <Textarea
    placeholder="This is a large textarea"
    rows={5}
    size="lg"
  />

{/* Small */}
  <Label className="text-sm font-medium text-gray-700">Small</Label>
  <Textarea
    placeholder="This is a small textarea"
    rows={3}
    size="sm"
  />`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* States Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">States</h2>

        {/* Textarea state examples */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex flex-col gap-1">
            <Label className="text-sm font-medium text-gray-700">Default</Label>
            <Textarea placeholder="This is a default textarea" rows={2} />
          </div>

          <div className="flex flex-col gap-1">
            <Label className="text-sm font-medium text-gray-700">Focused</Label>
            <Textarea
              placeholder="This textarea has focus styles"
              rows={2}
              className="ring-2 ring-primary-500 border-primary-500"
              defaultValue="This field is focused"
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label className="text-sm font-medium text-gray-700">
              Disabled
            </Label>
            <Textarea
              placeholder="This textarea is disabled"
              rows={2}
              disabled
            />
            <HelperText size="sm">This is a disabled textarea</HelperText>
          </div>
        </div>

        <TabsContainer value={nestedTabs.states}>
          <TabList
            onChange={(val) => handleNestedTabChanges("states", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.states}
              onChange={(val) => handleNestedTabChanges("states", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.states}
              onChange={(val) => handleNestedTabChanges("states", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.states}>
            <CodeSnippet
              title="Textarea States"
              code={`{/* Default */}
  <Label className="text-sm font-medium text-gray-700">Default</Label>
  <Textarea
    placeholder="This is a default textarea"
    rows={2}
  />

{/* Focused */}
<div className="flex flex-col gap-1">
  <Label className="text-sm font-medium text-gray-700">Focused</Label>
  <Textarea
    placeholder="This textarea has focus styles"
    rows={2}
    className="ring-2 ring-primary-500 border-primary-500"
    defaultValue="This field is focused"
  />
</div>

{/* Disabled */}
<div className="flex flex-col gap-1">
  <Label className="text-sm font-medium text-gray-700">Disabled</Label>
  <Textarea
    placeholder="This textarea is disabled"
    rows={2}
    disabled
  />
  <HelperText size="sm">This is a disabled textarea</HelperText>
</div>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.states}>
            <CodeSnippet
              title="Textarea States"
              code={`{/* Default */}
  <Label className="text-sm font-medium text-gray-700">Default</Label>
  <Textarea
    placeholder="This is a default textarea"
    rows={2}
  />

{/* Focused */}
<div className="flex flex-col gap-1">
  <Label className="text-sm font-medium text-gray-700">Focused</Label>
  <Textarea
    placeholder="This textarea has focus styles"
    rows={2}
    className="ring-2 ring-primary-500 border-primary-500"
    defaultValue="This field is focused"
  />
</div>

{/* Disabled */}
<div className="flex flex-col gap-1">
  <Label className="text-sm font-medium text-gray-700">Disabled</Label>
  <Textarea
    placeholder="This textarea is disabled"
    rows={2}
    disabled
  />
  <HelperText size="sm">This is a disabled textarea</HelperText>
</div>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>
    </div>
  );
};

export default TextareaExampleSection;
