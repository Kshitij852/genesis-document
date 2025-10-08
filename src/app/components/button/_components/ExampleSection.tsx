"use client";
import {
  Button,
  Tab,
  TabList,
  TabPanel,
  TabsContainer,
} from "@atomos_tech/genesis";
import React, { useState } from "react";

import CodeSnippet from "./CodeSnippet";
import { RiAlertLine, RiListUnordered } from "@remixicon/react";

const ExampleSection = () => {
  const [nestedTabs, setNestedTabs] = useState({
    fullWidth: "react",
    variants: "react",
    disabled: "react",
    sizes: "react",
    states: "react",
    icons: "react",
    custom: "react",
  });

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-4 items-start">
      {/* Full Width */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Full Width</h2>

        <Button intent="primary" fullWidth>
          Full width
        </Button>

        {/* Nested Tabs (React and Next) */}
        <TabsContainer value={nestedTabs.fullWidth}>
          <TabList
            onChange={(val) => handleNestedTabChanges("fullWidth", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mt-4"
            box={true}
          >
            <Tab
              label="React"
              value="react"
              onChange={(val) => handleNestedTabChanges("fullWidth", val)}
              selectedTabValue={nestedTabs.fullWidth}
            />
            <Tab
              label="Next"
              value="next"
              onChange={(val) => handleNestedTabChanges("fullWidth", val)}
              selectedTabValue={nestedTabs.fullWidth}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.fullWidth}>
            <div className="mt-4">
              <CodeSnippet
                title="Full Width Example"
                code={`<Button fullWidth intent="primary">Full width</Button>`}
              />
            </div>
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.fullWidth}>
            <div className="mt-4">
              <CodeSnippet
                title="Full Width Example"
                code={`<Button fullWidth intent="primary">Full width</Button>`}
              />
            </div>
          </TabPanel>
        </TabsContainer>
      </section>

      {/* Variants Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Variants</h2>

        {/* Buttons first */}
        <div className="flex gap-4 flex-wrap mb-4">
          <Button variant="filled">Filled</Button>
          <Button variant="outlined">Outlined</Button>
        </div>

        {/* Nested Tabs below buttons */}
        <TabsContainer value={nestedTabs.variants}>
          <TabList
            onChange={(val) => handleNestedTabChanges("variants", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box={true}
          >
            <Tab
              label="React"
              value="react"
              onChange={(val) => handleNestedTabChanges("variants", val)}
              selectedTabValue={nestedTabs.variants}
            />
            <Tab
              label="Next"
              value="next"
              onChange={(val) => handleNestedTabChanges("variants", val)}
              selectedTabValue={nestedTabs.variants}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.variants}>
            <div className="mt-2">
              <CodeSnippet
                title="Variant Examples"
                code={`<Button variant="filled">Filled</Button>\n<Button variant="outlined">Outlined</Button>\n`}
              />
            </div>
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.variants}>
            <div className="mt-2">
              <CodeSnippet
                title="Variant Examples"
                code={`<Button variant="filled">Filled</Button>\n<Button variant="outlined">Outlined</Button>\n`}
              />
            </div>
          </TabPanel>
        </TabsContainer>
      </section>

      {/* Disabled Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Disabled</h2>

        {/* Buttons first */}
        <div className="flex gap-4 mb-4">
          <Button variant="filled" disabled>
            Filled
          </Button>
          <Button variant="outlined" disabled>
            Outlined
          </Button>
        </div>

        {/* Nested Tabs below buttons */}
        <TabsContainer value={nestedTabs.disabled}>
          <TabList
            onChange={(val) => handleNestedTabChanges("disabled", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box={true}
          >
            <Tab
              label="React"
              value="react"
              onChange={(val) => handleNestedTabChanges("disabled", val)}
              selectedTabValue={nestedTabs.disabled}
            />
            <Tab
              label="Next"
              value="next"
              onChange={(val) => handleNestedTabChanges("disabled", val)}
              selectedTabValue={nestedTabs.disabled}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.disabled}>
            <div className="mt-2">
              <CodeSnippet
                title="Disabled Buttons"
                code={`<Button disabled>Filled</Button>\n<Button variant="outlined" disabled>Outlined</Button>`}
              />
            </div>
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.disabled}>
            <div className="mt-2">
              <CodeSnippet
                title="Disabled Buttons"
                code={`<Button variant="filled" disabled>Filled</Button>\n<Button variant="outlined" disabled>Outlined</Button>`}
              />
            </div>
          </TabPanel>
        </TabsContainer>
      </section>

      {/* Sizes Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Sizes</h2>

        {/* Buttons first */}
        <div className="flex gap-4 flex-wrap mb-4">
          <Button size="sm">Size sm</Button>
          <Button size="md">Size md</Button>
          <Button size="lg">Size lg</Button>
        </div>

        {/* Nested Tabs below buttons */}
        <TabsContainer value={nestedTabs.sizes}>
          <TabList
            onChange={(val) => handleNestedTabChanges("sizes", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box={true}
          >
            <Tab
              label="React"
              value="react"
              onChange={(val) => handleNestedTabChanges("sizes", val)}
              selectedTabValue={nestedTabs.sizes}
            />
            <Tab
              label="Next"
              value="next"
              onChange={(val) => handleNestedTabChanges("sizes", val)}
              selectedTabValue={nestedTabs.sizes}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.sizes}>
            <div className="mt-2">
              <CodeSnippet
                title="Size Variants"
                code={`<Button size="sm">Size sm</Button>\n<Button size="md">Size md</Button>\n<Button size="lg">Size lg</Button>`}
              />
            </div>
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.sizes}>
            <div className="mt-2">
              <CodeSnippet
                title="Size Variants"
                code={`<Button size="sm">Size sm</Button>\n<Button size="md">Size md</Button>\n<Button size="lg">Size lg</Button>`}
              />
            </div>
          </TabPanel>
        </TabsContainer>
      </section>

      {/* States Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">States</h2>

        {/* Buttons first */}
        <div className="flex gap-2 flex-wrap mb-4">
          <Button intent="primary">Primary</Button>
          <Button intent="warning">Warning</Button>
          <Button intent="success">Success</Button>
          <Button intent="error">Error</Button>
          <Button intent="default">Default</Button>
        </div>

        {/* Nested Tabs below buttons */}
        <TabsContainer value={nestedTabs.states}>
          <TabList
            onChange={(val) => handleNestedTabChanges("states", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box={true}
          >
            <Tab
              label="React"
              value="react"
              onChange={(val) => handleNestedTabChanges("states", val)}
              selectedTabValue={nestedTabs.states}
            />
            <Tab
              label="Next"
              value="next"
              onChange={(val) => handleNestedTabChanges("states", val)}
              selectedTabValue={nestedTabs.states}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.states}>
            <div className="mt-2">
              <CodeSnippet
                title="State Examples"
                code={`<Button intent="default">Default</Button>\n<Button intent="error">Error</Button>\n<Button intent="success">Success</Button>\n<Button intent="warning">Warning</Button>\n<Button intent="primary">Primary</Button>`}
              />
            </div>
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.states}>
            <div className="mt-2">
              <CodeSnippet
                title="State Examples"
                code={`<Button intent="theme-default">Default</Button>\n<Button intent="theme-error">Error</Button>\n<Button intent="theme-success">Success</Button>\n<Button intent="theme-warning">Warning</Button>\n<Button intent="primary">Primary</Button>`}
              />
            </div>
          </TabPanel>
        </TabsContainer>
      </section>

      {/* Custom Styling Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Custom Styling
        </h2>

        {/* Buttons first */}
        <div className="flex gap-4 flex-wrap mb-4">
          {/* Gradient Indigo → Pink */}
          <Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg border-none">
            Gradient Button
          </Button>

          {/* Gradient Amber → Red */}
          <Button className="bg-gradient-to-r from-amber-400 via-orange-400 to-error-500 text-white font-semibold shadow-lg hover:opacity-90 transition border-none">
            Warm Gradient
          </Button>
        </div>

        {/* Nested Tabs below buttons */}
        <TabsContainer value={nestedTabs.custom}>
          <TabList
            onChange={(val) => handleNestedTabChanges("custom", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box={true}
          >
            <Tab
              label="React"
              value="react"
              onChange={(val) => handleNestedTabChanges("custom", val)}
              selectedTabValue={nestedTabs.custom}
            />
            <Tab
              label="Next"
              value="next"
              onChange={(val) => handleNestedTabChanges("custom", val)}
              selectedTabValue={nestedTabs.custom}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.custom}>
            <div className="mt-2">
              <CodeSnippet
                title="Custom Button Examples"
                code={`<Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">Gradient Button</Button>\n<Button className="bg-gradient-to-r from-orange-400 to-error-500 text-white font-semibold shadow-lg hover:opacity-90 transition">Warm Gradient</Button>`}
              />
            </div>
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.custom}>
            <div className="mt-2">
              <CodeSnippet
                title="Custom Button Examples"
                code={`<Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">Gradient Button</Button>\n<Button className="bg-gradient-to-r from-orange-400 to-error-500 text-white font-semibold shadow-lg hover:opacity-90 transition">Warm Gradient</Button>`}
              />
            </div>
          </TabPanel>
        </TabsContainer>
      </section>

      {/* With Icons Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">With Icons</h2>

        {/* Buttons first */}
        <div className="flex gap-4 flex-wrap mb-4">
          <Button intent="primary" startIcon={<RiAlertLine />}>
            Start Icon
          </Button>
          <Button
            variant="outlined"
            intent="primary-outlined"
            endIcon={<RiListUnordered />}
          >
            End Icon
          </Button>
          <Button
            variant="filled"
            startIcon={<RiAlertLine />}
            endIcon={<RiListUnordered />}
          >
            Both Icons
          </Button>
        </div>

        {/* Nested Tabs below buttons */}
        <TabsContainer value={nestedTabs.icons}>
          <TabList
            onChange={(val) => handleNestedTabChanges("icons", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box={true}
          >
            <Tab
              label="React"
              value="react"
              onChange={(val) => handleNestedTabChanges("icons", val)}
              selectedTabValue={nestedTabs.icons}
            />
            <Tab
              label="Next"
              value="next"
              onChange={(val) => handleNestedTabChanges("icons", val)}
              selectedTabValue={nestedTabs.icons}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.icons}>
            <div className="mt-2">
              <CodeSnippet
                title="Buttons with Icons"
                code={`<Button intent="primary" startIcon={<RiAlertLine />}>Filled With Icons</Button>\n<Button variant="outlined" endIcon={<RiListUnordered />}>Filled With Icons</Button>\n<Button intent="primary" startIcon={<RiAlertLine />} endIcon={<RiListUnordered />}>Both Icons</Button>`}
              />
            </div>
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.icons}>
            <div className="mt-2">
              <CodeSnippet
                title="Buttons with Icons"
                code={`<Button intent="primary" startIcon={<RiAlertLine />}>Filled With Icons</Button>\n<Button variant="filled" endIcon={<RiListUnordered />}>Both Icons</Button>\n<Button intent="primary" startIcon={<RiAlertLine />} endIcon={<RiListUnordered />}>Both Icons</Button>`}
              />
            </div>
          </TabPanel>
        </TabsContainer>
      </section>

      {/* Just Icons Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Buttons with only Icons
        </h2>

        {/* Buttons first */}
        <div className="flex gap-4 flex-wrap mb-4">
          <Button intent="primary" startIcon={<RiAlertLine />}></Button>
          <Button variant="outlined" endIcon={<RiListUnordered />}></Button>
        </div>

        {/* Nested Tabs below buttons */}
        <TabsContainer value={nestedTabs.icons}>
          <TabList
            onChange={(val) => handleNestedTabChanges("icons", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box={true}
          >
            <Tab
              label="React"
              value="react"
              onChange={(val) => handleNestedTabChanges("icons", val)}
              selectedTabValue={nestedTabs.icons}
            />
            <Tab
              label="Next"
              value="next"
              onChange={(val) => handleNestedTabChanges("icons", val)}
              selectedTabValue={nestedTabs.icons}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.icons}>
            <div className="mt-2">
              <CodeSnippet
                title="Buttons with Icons"
                code={`<Button intent="primary" startIcon={<RiAlertLine />}></Button>\n<Button variant="outlined" intent="primary"  endIcon={<RiListUnordered />}></Button>`}
              />
            </div>
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.icons}>
            <div className="mt-2">
              <CodeSnippet
                title="Buttons with Icons"
                code={`<Button intent="primary" startIcon={<RiAlertLine />}></Button>\n<Button variant="outlined" intent="primary" endIcon={<RiListUnordered />}></Button>`}
              />
            </div>
          </TabPanel>
        </TabsContainer>
      </section>
    </div>
  );
};

export default ExampleSection;
