"use client";

import React, { useState } from "react";
import {
  Radio,
  Label,
  HelperText,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
} from "@atomos_tech/genesis";
import CodeSnippet from "../../button/_components/CodeSnippet";

const RadioExampleSection = () => {
  const [nestedTabs, setNestedTabs] = useState({
    sizes: "react",
    states: "react",
    withSubtext: "react",
  });

  const [selectedRadio, setSelectedRadio] = useState({
    option1: "",
    option2: "",
  });

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 items-start">
      {/* Size with Text */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Size with Text
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <Radio
              name="sizeExample"
              size="sm"
              checked={selectedRadio.option1 === "small"}
              onChange={() =>
                setSelectedRadio((prev) => ({ ...prev, option1: "small" }))
              }
            />
            <Label className="font-semibold text-gray-700">Small</Label>
          </div>

          <div className="flex items-center gap-3">
            <Radio
              name="sizeExample"
              size="lg"
              checked={selectedRadio.option1 === "large"}
              onChange={() =>
                setSelectedRadio((prev) => ({ ...prev, option1: "large" }))
              }
            />
            <Label className="font-semibold text-gray-700">Large</Label>
          </div>
        </div>

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
              title="Radio Sizes with Text"
              code={`<div className="flex items-center gap-3">
  <Radio size="sm" />
  <Label className="font-semibold">Small</Label>
</div>

<div className="flex items-center gap-3">
  <Radio size="lg" />
  <Label className="font-semibold">Large</Label>
</div>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.sizes}>
            <CodeSnippet
              title="Radio Sizes with Text"
              code={`<div className="flex items-center gap-3">
  <Radio size="sm" />
  <Label className="font-semibold">Small</Label>
</div>

<div className="flex items-center gap-3">
  <Radio size="lg" />
  <Label className="font-semibold">Large</Label>
</div>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* States */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">States</h2>

        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <Radio disabled />
            <Label className="text-gray-500">Disabled</Label>
          </div>

          <div className="flex items-center gap-3">
            <Radio />
            <Label className="font-semibold text-gray-700">Checked</Label>
          </div>

          <div className="flex items-center gap-3">
            <Radio checked readOnly />
            <Label className="font-semibold text-gray-700">Read only</Label>
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
              title="Radio States"
              code={`<Radio disabled />\n<Radio />\n<Radio readOnly checked />`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.states}>
            <CodeSnippet
              title="Radio States"
              code={`<Radio disabled />\n<Radio />\n<Radio readOnly checked />`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* Radio with Text and Subtext */}
      <section className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-5">
          Radio with Text and Subtext
        </h2>

        <div className="space-y-6 mb-6">
          <div className="flex items-start gap-3">
            <Radio size="sm" />
            <div>
              <Label className="font-semibold text-gray-700 block">
                Text with small radio button
              </Label>
              <HelperText className="text-sm text-gray-500 mt-1">
                This is a helper text
              </HelperText>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Radio size="lg" />
            <div>
              <Label className="font-semibold text-gray-700 block">
                Text with large radio button
              </Label>
              <HelperText className="text-sm text-gray-500 mt-1">
                This is a helper text
              </HelperText>
            </div>
          </div>
        </div>

        <TabsContainer value={nestedTabs.withSubtext}>
          <TabList
            onChange={(val) => handleNestedTabChanges("withSubtext", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.withSubtext}
              onChange={(val) => handleNestedTabChanges("withSubtext", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.withSubtext}
              onChange={(val) => handleNestedTabChanges("withSubtext", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.withSubtext}>
            <CodeSnippet
              title="Radio with Text and Subtext"
              code={`<div className="flex items-start gap-3">
  <Radio size="sm" />
  <div>
    <Label className="font-semibold">Text with small radio button</Label>
    <HelperText className="text-sm text-gray-500 mt-1">This is a helper text</HelperText>
  </div>
</div>

<div className="flex items-start gap-3">
  <Radio size="lg" />
  <div>
    <Label className="font-semibold">Text with large radio button</Label>
    <HelperText className="text-sm text-gray-500 mt-1">This is a helper text</HelperText>
  </div>
</div>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.withSubtext}>
            <CodeSnippet
              title="Radio with Text and Subtext"
              code={`<div className="flex items-start gap-3">
  <Radio size="sm" />
  <div>
    <Label className="font-semibold">Text with small radio button</Label>
    <HelperText className="text-sm text-gray-500 mt-1">This is a helper text</HelperText>
  </div>
</div>

<div className="flex items-start gap-3">
  <Radio size="lg" />
  <div>
    <Label className="font-semibold">Text with large radio button</Label>
    <HelperText className="text-sm text-gray-500 mt-1">This is a helper text</HelperText>
  </div>
</div>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>
    </div>
  );
};

export default RadioExampleSection;
