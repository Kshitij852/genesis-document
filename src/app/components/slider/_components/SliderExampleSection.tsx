"use client";

import React, { useState } from "react";
import {
  Slider,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
  HelperText,
} from "@atomos_tech/genesis";
import CodeSnippet from "../../button/_components/CodeSnippet";

const SliderExampleSection = () => {
  const [nestedTabs, setNestedTabs] = useState({
    basic: "react",
    sizes: "react",
  });

  // ✅ Separate states for both sliders
  const [basicSliderValue, setBasicSliderValue] = useState(50);
  const [sizeSliderValue, setSizeSliderValue] = useState(50);

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 items-start">
      {/* --- Basic Slider Section --- */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Basic Slider
        </h2>

        <div className="space-y-6 mb-6">
          <div className="space-y-3">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Min: 10</span>
              <span>Current: {basicSliderValue}</span>
              <span>Max: 100</span>
            </div>
            <Slider
              value={basicSliderValue}
              min={10}
              max={100}
              onChange={(e) => setBasicSliderValue(Number(e.target.value))}
            />
          </div>
        </div>

        {/* React / Next Tabs */}
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
              title="Basic Slider"
              code={`import { useState } from "react";
import { Slider } from "@atomos_tech/genesis";

const BasicSliderExample = () => {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="space-y-3">
      <div className="flex justify-between text-sm text-gray-600">
        <span>Min: 10</span>
        <span>Current: {sliderValue}</span>
        <span>Max: 100</span>
      </div>
      <Slider
        value={sliderValue}
        min={10}
        max={100}
        onChange={(e) => setSliderValue(Number(e.target.value))}
      />
    </div>
  );
};`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.basic}>
            <CodeSnippet
              title="Basic Slider"
              code={`"use client";
import { useState } from "react";
import { Slider } from "@atomos_tech/genesis";

const BasicSliderExample = () => {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="space-y-3">
      <div className="flex justify-between text-sm text-gray-600">
        <span>Min: 10</span>
        <span>Current: {sliderValue}</span>
        <span>Max: 100</span>
      </div>
      <Slider
        value={sliderValue}
        min={10}
        max={100}
        onChange={(e) => setSliderValue(Number(e.target.value))}
      />
    </div>
  );
};`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* --- Sizes and Steps Section --- */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Sizes and Steps
        </h2>

        <div className="space-y-8 mb-6">
          <div className="space-y-3">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Min: 10</span>
              <span>Current: {sizeSliderValue}</span>
              <span>Max: 100</span>
            </div>
            <Slider
              value={sizeSliderValue}
              min={10}
              step={10}
              max={100}
              size="lg"
              onChange={(e) => setSizeSliderValue(Number(e.target.value))}
            />
            <HelperText className="text-xs text-gray-500">
              Step size: 10
            </HelperText>
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
              title="Slider with Steps and Size"
              code={`import { useState } from "react";
import { Slider } from "@atomos_tech/genesis";

const AdvancedSliderExample = () => {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="space-y-3">
      <div className="flex justify-between text-sm text-gray-600">
        <span>Min: 10</span>
        <span>Current: {sliderValue}</span>
        <span>Max: 100</span>
      </div>
      <Slider
        value={sliderValue}
        min={10}
        step={10}
        max={100}
        size="lg"
        onChange={(e) => setSliderValue(Number(e.target.value))}
      />
      <HelperText className="text-xs text-gray-500">Step size: 10</HelperText>
    </div>
  );
};`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.sizes}>
            <CodeSnippet
              title="Slider with Steps and Size"
              code={`"use client";
import { useState } from "react";
import { Slider } from "@atomos_tech/genesis";

const AdvancedSliderExample = () => {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="space-y-3">
      <div className="flex justify-between text-sm text-gray-600">
        <span>Min: 10</span>
        <span>Current: {sliderValue}</span>
        <span>Max: 100</span>
      </div>
      <Slider
        value={sliderValue}
        min={10}
        step={10}
        max={100}
        size="lg"
        onChange={(e) => setSliderValue(Number(e.target.value))}
      />
      <HelperText className="text-xs text-gray-500">Step size: 10</HelperText>
    </div>
  );
};`}
            />
          </TabPanel>
        </TabsContainer>
      </section>
    </div>
  );
};

export default SliderExampleSection;
