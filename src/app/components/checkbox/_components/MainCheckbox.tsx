"use client";
import React, { useState } from "react";
import {
  Checkbox,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
  Label,
  HelperText,
} from "@atomos_tech/genesis";
import {
  RiCheckboxCircleLine,
  RiCodeLine,
  RiInformationLine,
} from "react-icons/ri";
import CodeSnippet from "../../button/_components/CodeSnippet";
import FeatureCard from "../../../../components/common/FeatureCard";
import { RiLightbulbFlashLine } from "@remixicon/react";
import CheckboxTableProp from "./CheckboxTableProp";

const CheckboxExampleSection = () => {
  const [nestedTabs, setNestedTabs] = useState({
    sizes: "react",
    states: "react",
    withText: "react",
    withSubtext: "react",
  });

  const [checkboxStates, setCheckboxStates] = useState({
    large: false,
    xl: false,
    disabled: false,
    checked: true,
    small: false,
    textSmall: false,
    textLarge: false,
  });

  type CheckboxStateKey =
    | "large"
    | "disabled"
    | "checked"
    | "small"
    | "xl"
    | "textSmall"
    | "textLarge";

  const handleCheckboxChange = (name: CheckboxStateKey) => {
    setCheckboxStates((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 items-start">
      {/* Sizes with Text Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Sizes with Text
        </h2>

        {/* Checkboxes in a column */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <Checkbox
              size="sm"
              checked={checkboxStates.small}
              onChange={() => handleCheckboxChange("small")}
            />
            <Label className="font-semibold text-gray-700">Small</Label>
          </div>

          <div className="flex items-center gap-3">
            <Checkbox
              size="lg"
              checked={checkboxStates.large}
              onChange={() => handleCheckboxChange("large")}
            />
            <Label className="font-semibold text-gray-700">Large</Label>
          </div>

          <div className="flex items-center gap-3">
            <Checkbox
              size="xl"
              checked={checkboxStates.xl}
              onChange={() => handleCheckboxChange("xl")}
            />
            <Label className="font-semibold text-gray-700">XL</Label>
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
              title="Checkbox Sizes with Text"
              code={`<div className="flex items-center gap-3">
  <Checkbox size="sm" />
  <Label className="font-semibold">Small</Label>
</div>

<div className="flex items-center gap-3">
  <Checkbox size="lg" />
  <Label className="font-semibold">Large</Label>
</div>

<div className="flex items-center gap-3">
  <Checkbox size="xl"/>
  <Label className="font-semibold text-gray-700">XL</Label>
</div>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.sizes}>
            <CodeSnippet
              title="Checkbox Sizes with Text"
              code={`<div className="flex items-center gap-3">
  <Checkbox size="xl" />
  <Label className="font-semibold">XL</Label>
</div>

<div className="flex items-center gap-3">
  <Checkbox size="lg" />
  <Label className="font-semibold">Large</Label>
</div>

<div className="flex items-center gap-3">
  <Checkbox size="xl"/>
  <Label className="font-semibold text-gray-700">XL</Label>
</div>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* States Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">States</h2>

        {/* Checkboxes in a column */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <Checkbox
              checked={checkboxStates.disabled}
              onChange={() => handleCheckboxChange("disabled")}
              disabled
            />
            <Label className="text-gray-600">Disabled</Label>
          </div>

          <div className="flex items-center gap-3">
            <Checkbox
              checked={checkboxStates.checked}
              onChange={() => handleCheckboxChange("checked")}
            />
            <Label className="font-semibold text-gray-700">Checked</Label>
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
              title="Checkbox States"
              code={`<Checkbox disabled />\n<Checkbox checked />`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.states}>
            <CodeSnippet
              title="Checkbox States"
              code={`<Checkbox disabled />\n<Checkbox checked />`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* Checkbox with Text and Subtext Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-5">
          Checkbox with Text and Subtext
        </h2>

        <div className="space-y-6 mb-6">
          {/* Text with small checkbox */}
          <div className="flex items-start gap-3">
            <Checkbox
              size="sm"
              checked={checkboxStates.textSmall}
              className="mt-1"
              onChange={() => handleCheckboxChange("textSmall")}
            />
            <div>
              <Label className="font-semibold text-gray-700 block">
                Text with small checkbox
              </Label>
            </div>
          </div>

          {/* Text with large checkbox and helper text */}
          <div className="flex items-start gap-3">
            <Checkbox
              size="lg"
              checked={checkboxStates.textLarge}
              className="mt-1"
              onChange={() => handleCheckboxChange("textLarge")}
            />
            <div>
              <Label className="font-semibold text-gray-700 block">
                Text with large checkbox
              </Label>
              <HelperText className="text-sm text-gray-500 mt-1">
                This is a helper text
              </HelperText>
              <HelperText className="text-sm text-gray-500">
                This is a helper text
              </HelperText>
            </div>
          </div>
        </div>

        {/* Tabs for React / Next examples */}
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
              title="Checkbox with Text and Subtext"
              code={`<div className="flex items-start gap-3">
  <Checkbox size="sm" />
  <div>
    <Label className="font-semibold">Text with small checkbox</Label>
  </div>
</div>

<div className="flex items-start gap-3">
  <Checkbox size="lg" />
  <div>
    <Label className="font-semibold">Text with large checkbox</Label>
    <HelperText className="text-sm text-gray-500 mt-1">This is a helper text</HelperText>
    <HelperText className="text-sm text-gray-500">This is a helper text</HelperText>
  </div>
</div>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.withSubtext}>
            <CodeSnippet
              title="Checkbox with Text and Subtext"
              code={`<div className="flex items-start gap-3">
  <Checkbox size="sm" />
  <div>
    <Label className="font-semibold">Text with small checkbox</Label>
  </div>
</div>

<div className="flex items-start gap-3">
  <Checkbox size="lg" />
  <div>
    <Label className="font-semibold">Text with large checkbox</Label>
    <HelperText className="text-sm text-gray-500 mt-1">This is a helper text</HelperText>
    <HelperText className="text-sm text-gray-500">This is a helper text</HelperText>
  </div>
</div>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>
    </div>
  );
};

const MainCheckbox = () => {
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
              Checkbox Component
            </h1>
            <p className="text-gray-600 mt-1">
              A flexible checkbox component with multiple sizes, states, and
              support for text and subtext labels.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiCheckboxCircleLine}
          title="Multiple Sizes"
          description="Various size options (sm, md, lg, xl) to fit different design contexts and spacing requirements"
        />
        <FeatureCard
          icon={RiCodeLine}
          title="Rich Text Support"
          description="Support for main labels and helper text with proper alignment and spacing"
        />
        <FeatureCard
          icon={RiInformationLine}
          title="Accessible"
          description="Fully accessible with proper ARIA labels, keyboard navigation, and screen reader support"
        />
      </div>

      {/* Example Section */}
      <CheckboxExampleSection />

      {/* Props Section */}
      <CheckboxTableProp />
    </div>
  );
};

export default MainCheckbox;
