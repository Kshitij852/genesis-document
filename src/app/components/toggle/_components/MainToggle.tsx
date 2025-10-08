"use client";
import React, { useState } from "react";
import {
  Toggle,
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
} from "@atomos_tech/genesis";
import {
  RiLightbulbFlashLine,
  RiCheckboxCircleLine,
  RiCodeLine,
  RiInformationLine,
} from "react-icons/ri";
import CodeSnippet from "../../button/_components/CodeSnippet";
import FeatureCard from "../../../../components/common/FeatureCard";

const ToggleExampleSection = () => {
  const [nestedTabs, setNestedTabs] = useState({
    sizes: "react",
    variants: "react",
    withLabels: "react",
    states: "react",
  });

  const [toggleStates, setToggleStates] = useState({
    default: false,
    primary: true,
    success: true,
    warning: false,
    error: false,
    small: true,
    medium: false,
    large: true,
    filled: true,
    outlined: false,
    withLabels: true,
  });

  type ToggleStateKey =
    | "default"
    | "primary"
    | "success"
    | "warning"
    | "error"
    | "small"
    | "medium"
    | "large"
    | "filled"
    | "outlined"
    | "withLabels";

  const handleToggleChange = (name: ToggleStateKey) => {
    setToggleStates((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 items-start">
      {/* Sizes Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Sizes</h2>

        {/* Toggles on the same line */}
        <div className="flex items-center gap-6 mb-4">
          <div className="flex items-center gap-2">
            <Toggle
              size="sm"
              checked={toggleStates.small}
              onChange={() => handleToggleChange("small")}
            />
            <span className="text-sm text-gray-600">Small</span>
          </div>

          <div className="flex items-center gap-2">
            <Toggle
              size="md"
              checked={toggleStates.medium}
              onChange={() => handleToggleChange("medium")}
            />
            <span className="text-sm text-gray-600">Medium</span>
          </div>

          <div className="flex items-center gap-2">
            <Toggle
              size="lg"
              checked={toggleStates.large}
              onChange={() => handleToggleChange("large")}
            />
            <span className="text-sm text-gray-600">Large</span>
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
              title="Toggle Sizes"
              code={`<Toggle size="sm" />\n<Toggle size="md" />\n<Toggle size="lg" />`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.sizes}>
            <CodeSnippet
              title="Toggle Sizes"
              code={`<Toggle size="sm" />\n<Toggle size="md" />\n<Toggle size="lg" />`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* States Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">States</h2>

        {/* Put toggles in a row */}
        <div className="flex items-center gap-8 mb-4">
          <div className="flex items-center gap-2">
            <Toggle
              intent="primary"
              checked={toggleStates.primary}
              onChange={() => handleToggleChange("primary")}
            />
            <span className="text-sm text-gray-600">Primary</span>
          </div>

          <div className="flex items-center gap-2">
            <Toggle
              intent="success"
              checked={toggleStates.success}
              onChange={() => handleToggleChange("success")}
            />
            <span className="text-sm text-gray-600">Success</span>
          </div>

          <div className="flex items-center gap-2">
            <Toggle disabled />
            <span className="text-sm text-gray-600">Disabled</span>
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
              title="Toggle States"
              code={`<Toggle size="md" intent="primary" />\n<Toggle size="md" intent="success" />\n<Toggle size="md"  disabled />`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.states}>
            <CodeSnippet
              title="Toggle States"
              code={`<Toggle size="md" intent="primary" />\n<Toggle size="md" intent="success" />\n<Toggle size="md"  disabled />`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* With Labels Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-5">
          With Labels
        </h2>

        <div className="flex items-center gap-8 mb-6">
          {/* Label on the left */}
          <div className="flex items-center gap-2">
            <Label htmlFor="toggle-left" className="text-sm text-gray-600">
              Left Label
            </Label>
            <Toggle size="md" id="toggle-left" intent="primary" />
          </div>

          {/* Label on the right */}
          <div className="flex items-center gap-2">
            <Toggle size="md" id="toggle-right" intent="success" />
            <Label htmlFor="toggle-right" className="text-sm text-gray-600">
              Right Label
            </Label>
          </div>
        </div>

        {/* Tabs for React / Next examples */}
        <TabsContainer value={nestedTabs.withLabels}>
          <TabList
            onChange={(val) => handleNestedTabChanges("withLabels", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.withLabels}
              onChange={(val) => handleNestedTabChanges("withLabels", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.withLabels}
              onChange={(val) => handleNestedTabChanges("withLabels", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.withLabels}>
            <CodeSnippet
              title="Toggle with Left / Right Labels"
              code={`<div className="flex items-center gap-2">
  <Label htmlFor="toggle-left">Left Label</Label>
  <Toggle id="toggle-left"  />
</div>

<div className="flex items-center gap-2">
  <Toggle id="toggle-right"  />
  <Label htmlFor="toggle-right">Right Label</Label>
</div>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.withLabels}>
            <CodeSnippet
              title="Toggle with Left / Right Labels"
              code={`<div className="flex items-center gap-2">
  <Label htmlFor="toggle-left">Left Label</Label>
  <Toggle id="toggle-left"  />
</div>

<div className="flex items-center gap-2">
  <Toggle id="toggle-right"  />
  <Label htmlFor="toggle-right">Right Label</Label>
</div>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>
    </div>
  );
};

const MainToggle = () => {
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
              Toggle Component
            </h1>
            <p className="text-gray-600 mt-1">
              A customizable toggle switch component with multiple variants,
              sizes, and states for user preferences and settings.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiCheckboxCircleLine}
          title="Multiple Sizes"
          description="Three size variants (sm, md, lg) to fit different design contexts and spacing requirements"
        />
        <FeatureCard
          icon={RiCodeLine}
          title="Flexible Variants"
          description="Filled and outlined variants with customizable colors and optional labels"
        />
        <FeatureCard
          icon={RiInformationLine}
          title="Accessible"
          description="Fully accessible with proper ARIA labels and keyboard navigation support"
        />
      </div>

      {/* Example Section */}
      <ToggleExampleSection />

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
                    "sm" | "md" | "lg"
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    "md"
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Controls the size of the toggle switch
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    intent
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    "primary" | "success"
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    "primary"
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Color intent for the toggle in checked state
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
                      Toggle
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
                      component for accessible form labels.
                    </p>
                    <div className="bg-gray-50 rounded border border-gray-200 px-3 py-2">
                      <code className="text-xs text-gray-700 font-mono block">
                        &lt;Label htmlFor="toggle"&gt;Enable
                        feature&lt;/Label&gt;
                        <br />
                        &lt;Toggle id="toggle"/&gt;
                      </code>
                    </div>
                  </div>
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
                  When true, the toggle becomes non-interactive
                </TableDataCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
};

export default MainToggle;
