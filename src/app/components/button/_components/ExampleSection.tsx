"use client";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  SplitButton,
  Tab,
  TabList,
  TabPanel,
  TabsContainer,
} from "@atomos_tech/genesis";
import React, { useState } from "react";

import CodeSnippet from "./CodeSnippet";
import {
  RiAddLine,
  RiAlertLine,
  RiArrowDownSLine,
  RiDownloadLine,
  RiListUnordered,
  RiSaveLine,
} from "@remixicon/react";

const ExampleSection = () => {
  const [nestedTabs, setNestedTabs] = useState({
    fullWidth: "react",
    variants: "react",
    disabled: "react",
    sizes: "react",
    states: "react",
    icons: "react",
    custom: "react",
    filledStates: "react",
    outlinedStates: "react",
    splitButtons: "react",
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
      {/* Filled States Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Filled States colour vairant
        </h2>

        {/* Buttons */}
        <div className="flex gap-3 flex-wrap mb-4">
          <Button intent="primary">Primary</Button>
          <Button intent="error">Error</Button>
          <Button intent="success">Success</Button>
          <Button intent="warning">Warning</Button>
          <Button intent="default">Default</Button>
          <Button intent="blue">Blue</Button>
          <Button intent="bluegray">Bluegray</Button>
          <Button intent="bluelight">Bluelight</Button>
          <Button intent="indigo">Indigo</Button>
          <Button intent="purple">Purple</Button>
          <Button intent="violet">Violet</Button>
          <Button intent="pink">Pink</Button>
          <Button intent="rose">Rose</Button>
          <Button intent="orange">Orange</Button>
        </div>

        {/* Nested Tabs */}
        <TabsContainer value={nestedTabs.filledStates}>
          <TabList
            onChange={(val) => handleNestedTabChanges("filledStates", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box={true}
          >
            <Tab
              label="React"
              value="react"
              onChange={(val) => handleNestedTabChanges("filledStates", val)}
              selectedTabValue={nestedTabs.filledStates}
            />
            <Tab
              label="Next"
              value="next"
              onChange={(val) => handleNestedTabChanges("filledStates", val)}
              selectedTabValue={nestedTabs.filledStates}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.filledStates}>
            <div className="mt-2">
              <CodeSnippet
                title="Filled State Examples"
                code={`<Button intent="primary">Primary</Button>
<Button intent="error">Error</Button>
<Button intent="success">Success</Button>
<Button intent="warning">Warning</Button>
<Button intent="default">Default</Button>
<Button intent="blue">Blue</Button>
<Button intent="bluegray">Bluegray</Button>
<Button intent="bluelight">Bluelight</Button>
<Button intent="indigo">Indigo</Button>
<Button intent="purple">Purple</Button>
<Button intent="violet">Violet</Button>
<Button intent="pink">Pink</Button>
<Button intent="rose">Rose</Button>
<Button intent="orange">Orange</Button>`}
              />
            </div>
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.filledStates}>
            <div className="mt-2">
              <CodeSnippet
                title="Filled State Examples"
                code={`<Button intent="primary">Primary</Button>
<Button intent="error">Error</Button>
<Button intent="success">Success</Button>
<Button intent="warning">Warning</Button>
<Button intent="default">Default</Button>
<Button intent="blue">Blue</Button>
<Button intent="bluegray">Bluegray</Button>
<Button intent="bluelight">Bluelight</Button>
<Button intent="indigo">Indigo</Button>
<Button intent="purple">Purple</Button>
<Button intent="violet">Violet</Button>
<Button intent="pink">Pink</Button>
<Button intent="rose">Rose</Button>
<Button intent="orange">Orange</Button>`}
              />
            </div>
          </TabPanel>
        </TabsContainer>
      </section>
      {/* Outlined States Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Outlined States colour vairant
        </h2>

        {/* Buttons */}
        <div className="flex gap-3 flex-wrap mb-4">
          <Button intent="primary-outlined" variant="outlined">
            Primary
          </Button>
          <Button intent="error-outlined" variant="outlined">
            Error
          </Button>
          <Button intent="success-outlined" variant="outlined">
            Success
          </Button>
          <Button intent="warning-outlined" variant="outlined">
            Warning
          </Button>
          <Button intent="default-outlined" variant="outlined">
            Default
          </Button>
          <Button intent="blue-outlined" variant="outlined">
            Blue
          </Button>
          <Button intent="bluegray-outlined" variant="outlined">
            Bluegray
          </Button>
          <Button intent="bluelight-outlined" variant="outlined">
            Bluelight
          </Button>
          <Button intent="indigo-outlined" variant="outlined">
            Indigo
          </Button>
          <Button intent="purple-outlined" variant="outlined">
            Purple
          </Button>
          <Button intent="violet-outlined" variant="outlined">
            Violet
          </Button>
          <Button intent="pink-outlined" variant="outlined">
            Pink
          </Button>
          <Button intent="rose-outlined" variant="outlined">
            Rose
          </Button>
          <Button intent="orange-outlined" variant="outlined">
            Orange
          </Button>
        </div>

        {/* Nested Tabs */}
        <TabsContainer value={nestedTabs.outlinedStates}>
          <TabList
            onChange={(val) => handleNestedTabChanges("outlinedStates", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box={true}
          >
            <Tab
              label="React"
              value="react"
              onChange={(val) => handleNestedTabChanges("outlinedStates", val)}
              selectedTabValue={nestedTabs.outlinedStates}
            />
            <Tab
              label="Next"
              value="next"
              onChange={(val) => handleNestedTabChanges("outlinedStates", val)}
              selectedTabValue={nestedTabs.outlinedStates}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.outlinedStates}>
            <div className="mt-2">
              <CodeSnippet
                title="Outlined State Examples"
                code={`<Button intent="primary" variant="outlined">Primary</Button>
<Button intent="error" variant="outlined">Error</Button>
<Button intent="success" variant="outlined">Success</Button>
<Button intent="warning" variant="outlined">Warning</Button>
<Button intent="default" variant="outlined">Default</Button>
<Button intent="blue" variant="outlined">Blue</Button>
<Button intent="bluegray" variant="outlined">Bluegray</Button>
<Button intent="bluelight" variant="outlined">Bluelight</Button>
<Button intent="indigo" variant="outlined">Indigo</Button>
<Button intent="purple" variant="outlined">Purple</Button>
<Button intent="violet" variant="outlined">Violet</Button>
<Button intent="pink" variant="outlined">Pink</Button>
<Button intent="rose" variant="outlined">Rose</Button>
<Button intent="orange" variant="outlined">Orange</Button>`}
              />
            </div>
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.outlinedStates}>
            <div className="mt-2">
              <CodeSnippet
                title="Outlined State Examples"
                code={`<Button intent="primary" variant="outlined">Primary</Button>
<Button intent="error" variant="outlined">Error</Button>
<Button intent="success" variant="outlined">Success</Button>
<Button intent="warning" variant="outlined">Warning</Button>
<Button intent="default" variant="outlined">Default</Button>
<Button intent="blue" variant="outlined">Blue</Button>
<Button intent="bluegray" variant="outlined">Bluegray</Button>
<Button intent="bluelight" variant="outlined">Bluelight</Button>
<Button intent="indigo" variant="outlined">Indigo</Button>
<Button intent="purple" variant="outlined">Purple</Button>
<Button intent="violet" variant="outlined">Violet</Button>
<Button intent="pink" variant="outlined">Pink</Button>
<Button intent="rose" variant="outlined">Rose</Button>
<Button intent="orange" variant="outlined">Orange</Button>`}
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

      {/* Split Button Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Split Buttons
        </h2>

        <div className="space-y-6 mb-6">
          <div className="flex justify-between items-center">
            {/* Compact Split Button */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Compact Split Button
              </h3>
              <div className="flex items-center gap-4">
                <SplitButton compact>
                  <Button className="rounded-r-none">
                    Split Button Compact
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button
                        startIcon={<RiAddLine size={20} />}
                        className="rounded-l-none border-l border-l-primary-200"
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48" align="right">
                      <DropdownMenuLabel>Save Options</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <div className="flex justify-center">
                          <RiSaveLine size={16} className="mr-2" />
                          <span>Save as draft</span>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <div className="flex justify-center">
                          <RiSaveLine size={16} className="mr-2" />
                          Save and publish
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <div className="flex justify-center">
                          <RiSaveLine size={16} className="mr-2" />
                          Save as template
                        </div>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SplitButton>
              </div>
            </div>

            {/* Outlined Split Button */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Outlined Split Button
              </h3>
              <div className="flex items-center gap-4">
                <SplitButton>
                  <Button
                    variant="outlined"
                    intent="primary-outlined"
                    className="rounded-r-none"
                  >
                    Split Button
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button
                        variant="outlined"
                        intent="primary-outlined"
                        startIcon={<RiAddLine size={20} />}
                        className="rounded-l-none border-l border-l-gray-300"
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48" align="left">
                      <DropdownMenuLabel>Save Options</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Save as draft</DropdownMenuItem>
                      <DropdownMenuItem>Save and publish</DropdownMenuItem>
                      <DropdownMenuItem>Save as template</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SplitButton>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            {/* Primary Split Button with Arrow */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Primary Split Button with Arrow
              </h3>
              <div className="flex items-center gap-4">
                <SplitButton>
                  <Button intent="primary" className="rounded-r-none">
                    Download Now
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button
                        intent="primary"
                        startIcon={<RiArrowDownSLine size={20} />}
                        className="rounded-l-none border-l border-l-primary-400"
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48" align="right">
                      <DropdownMenuLabel>Download Options</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <div className="flex justify-center">
                          <RiDownloadLine size={16} className="mr-2" />
                          Download PDF
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <div className="flex justify-center">
                          <RiDownloadLine size={16} className="mr-2" />
                          Download Excel
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <div className="flex justify-center">
                          <RiDownloadLine size={16} className="mr-2" />
                          Download CSV
                        </div>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SplitButton>
              </div>
            </div>

            {/* Success Split Button */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Success Split Button
              </h3>
              <div className="flex items-center gap-4">
                <SplitButton>
                  <Button intent="success" className="rounded-r-none">
                    Complete Task
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button
                        intent="success"
                        startIcon={<RiArrowDownSLine size={20} />}
                        className="rounded-l-none border-l border-l-success-400"
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48" align="left">
                      <DropdownMenuLabel>Task Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Mark as Completed</DropdownMenuItem>
                      <DropdownMenuItem>Add to Favorites</DropdownMenuItem>
                      <DropdownMenuItem>Share with Team</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SplitButton>
              </div>
            </div>
          </div>
        </div>

        {/* Nested Tabs for Code */}
        <TabsContainer value={nestedTabs.splitButtons}>
          <TabList
            onChange={(val) => handleNestedTabChanges("splitButtons", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box={true}
          >
            <Tab
              label="React"
              value="react"
              onChange={(val) => handleNestedTabChanges("splitButtons", val)}
              selectedTabValue={nestedTabs.splitButtons}
            />
            <Tab
              label="Next"
              value="next"
              onChange={(val) => handleNestedTabChanges("splitButtons", val)}
              selectedTabValue={nestedTabs.splitButtons}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.splitButtons}>
            <div className="mt-2">
              <CodeSnippet
                title="Split Button Examples"
                code={`import { RiAddLine, RiArrowDownSLine, RiSaveLine, RiDownloadLine } from "@remixicon/react";

{/* Compact Split Button */}
<SplitButton compact>
  <Button className="rounded-r-none">Split Button Compact</Button>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button
        startIcon={<RiAddLine size={20} />}
        className="rounded-l-none border-l border-l-primary-200"
      />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-48" align="right">
      <DropdownMenuLabel>Save Options</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <RiSaveLine size={16} className="mr-2" />
        Save as draft
      </DropdownMenuItem>
      <DropdownMenuItem>
        <RiSaveLine size={16} className="mr-2" />
        Save and publish
      </DropdownMenuItem>
      <DropdownMenuItem>
        <RiSaveLine size={16} className="mr-2" />
        Save as template
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</SplitButton>

{/* Outlined Split Button */}
<SplitButton>
  <Button
    variant="outlined"
    intent="primary-outlined"
    className="rounded-r-none"
  >
    Split Button
  </Button>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button
        variant="outlined"
        intent="primary-outlined"
        startIcon={<RiAddLine size={20} />}
        className="rounded-l-none border-l border-l-gray-300"
      />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-48" align="left">
      <DropdownMenuLabel>Save Options</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        Save as draft
      </DropdownMenuItem>
      <DropdownMenuItem>
        Save and publish
      </DropdownMenuItem>
      <DropdownMenuItem>
        Save as template
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</SplitButton>

{/* Primary Split Button with Arrow */}
<SplitButton>
  <Button intent="primary" className="rounded-r-none">
    Download Now
  </Button>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button
        intent="primary"
        startIcon={<RiArrowDownSLine size={20} />}
        className="rounded-l-none border-l border-l-primary-400"
      />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-48" align="right">
      <DropdownMenuLabel>Download Options</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <RiDownloadLine size={16} className="mr-2" />
        Download PDF
      </DropdownMenuItem>
      <DropdownMenuItem>
        <RiDownloadLine size={16} className="mr-2" />
        Download Excel
      </DropdownMenuItem>
      <DropdownMenuItem>
        <RiDownloadLine size={16} className="mr-2" />
        Download CSV
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</SplitButton>

{/* Success Split Button */}
<SplitButton>
  <Button intent="success" className="rounded-r-none">
    Complete Task
  </Button>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button
        intent="success"
        startIcon={<RiArrowDownSLine size={20} />}
        className="rounded-l-none border-l border-l-success-400"
      />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-48" align="right">
      <DropdownMenuLabel>Task Actions</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Mark as Completed</DropdownMenuItem>
      <DropdownMenuItem>Add to Favorites</DropdownMenuItem>
      <DropdownMenuItem>Share with Team</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</SplitButton>`}
              />
            </div>
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.splitButtons}>
            <div className="mt-2">
              <CodeSnippet
                title="Split Button Examples"
                code={`"use client";
import { RiAddLine, RiArrowDownSLine, RiSaveLine, RiDownloadLine } from "@remixicon/react";

{/* Compact Split Button */}
<SplitButton compact>
  <Button className="rounded-r-none">Split Button Compact</Button>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button
        startIcon={<RiAddLine size={20} />}
        className="rounded-l-none border-l border-l-primary-200"
      />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-48" align="right">
      <DropdownMenuLabel>Save Options</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <RiSaveLine size={16} className="mr-2" />
        Save as draft
      </DropdownMenuItem>
      <DropdownMenuItem>
        <RiSaveLine size={16} className="mr-2" />
        Save and publish
      </DropdownMenuItem>
      <DropdownMenuItem>
        <RiSaveLine size={16} className="mr-2" />
        Save as template
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</SplitButton>

{/* Outlined Split Button */}
<SplitButton>
  <Button
    variant="outlined"
    intent="primary-outlined"
    className="rounded-r-none"
  >
    Split Button
  </Button>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button
        variant="outlined"
        intent="primary-outlined"
        startIcon={<RiAddLine size={20} />}
        className="rounded-l-none border-l border-l-gray-300"
      />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-48" align="left">
      <DropdownMenuLabel>Save Options</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        Save as draft
      </DropdownMenuItem>
      <DropdownMenuItem>
        Save and publish
      </DropdownMenuItem>
      <DropdownMenuItem>
        Save as template
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</SplitButton>

{/* Primary Split Button with Arrow */}
<SplitButton>
  <Button intent="primary" className="rounded-r-none">
    Download Now
  </Button>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button
        intent="primary"
        startIcon={<RiArrowDownSLine size={20} />}
        className="rounded-l-none border-l border-l-primary-400"
      />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-48" align="right">
      <DropdownMenuLabel>Download Options</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <RiDownloadLine size={16} className="mr-2" />
        Download PDF
      </DropdownMenuItem>
      <DropdownMenuItem>
        <RiDownloadLine size={16} className="mr-2" />
        Download Excel
      </DropdownMenuItem>
      <DropdownMenuItem>
        <RiDownloadLine size={16} className="mr-2" />
        Download CSV
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</SplitButton>

{/* Success Split Button */}
<SplitButton>
  <Button intent="success" className="rounded-r-none">
    Complete Task
  </Button>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button
        intent="success"
        startIcon={<RiArrowDownSLine size={20} />}
        className="rounded-l-none border-l border-l-success-400"
      />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-48" align="right">
      <DropdownMenuLabel>Task Actions</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Mark as Completed</DropdownMenuItem>
      <DropdownMenuItem>Add to Favorites</DropdownMenuItem>
      <DropdownMenuItem>Share with Team</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</SplitButton>`}
              />
            </div>
          </TabPanel>
        </TabsContainer>
      </section>
    </div>
  );
};

export default ExampleSection;
