"use client";
import React, { useState } from "react";
import {
  Checkbox,
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
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

const CheckboxExampleSection = () => {
  const [nestedTabs, setNestedTabs] = useState({
    sizes: "react",
    states: "react",
    withText: "react",
    withSubtext: "react",
  });

  const [checkboxStates, setCheckboxStates] = useState({
    large: false,
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
              checked={checkboxStates.large}
              onChange={() => handleCheckboxChange("large")}
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
                    size
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    {`"sm" | "lg" | "xl"`}
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    {`"lg"`}
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Controls the size of the checkbox
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    checked
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
                  Whether the checkbox is checked
                </TableDataCell>
              </TableRow>

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
                  When true, the checkbox becomes non-interactive
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    withLabel
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <div className="flex items-center gap-1">
                    <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono border-r border-purple-200">
                      Checkbox
                    </code>
                    <span className="text-gray-400 mx-1">+</span>
                    <code className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs font-mono border-l border-green-200">
                      Label
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
                      component for accessible form labels and helper text.
                    </p>
                    <div className="bg-gray-50 rounded border border-gray-200 px-3 py-2">
                      <code className="text-xs text-gray-700 font-mono block">
                        &lt;div className=&quot;flex items-start gap-3&quot;&gt;
                        <br />
                        &nbsp;&nbsp;&lt;Checkbox /&gt;
                        <br />
                        &nbsp;&nbsp;&lt;div&gt;
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;Label&gt;Option&lt;/Label&gt;
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;HelperText
                        className=&quot;text-sm text-gray-500&quot;&gt;Helper
                        text&lt;/HelperText&gt;
                        <br />
                        &nbsp;&nbsp;&lt;/div&gt;
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

export default MainCheckbox;
