"use client";

import React, { useState } from "react";
import CodeSnippet from "../../button/_components/CodeSnippet";
import { RiSearch2Line, RiUserLine, RiSettingsLine } from "@remixicon/react";
import { Tab, TabList, TabPanel, TabsContainer } from "@atomos_tech/genesis";

const TabsExampleSection = () => {
  const [nestedTabs, setNestedTabs] = useState({
    variants: "react",
    customization: "react",
    additional: "react",
  });

  const [exampleTabs, setExampleTabs] = useState("1");
  const [pillTabs, setPillTabs] = useState("1");
  const [verticalTabs, setVerticalTabs] = useState("1");

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  const handleExampleTabChange = (newValue: string) => {
    setExampleTabs(newValue);
  };

  const handlePillTabChange = (newValue: string) => {
    setPillTabs(newValue);
  };

  const handleVerticalTabChange = (newValue: string) => {
    setVerticalTabs(newValue);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 items-start">
      {/* Variants Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Variants</h2>

        {/* Default Tabs Example */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Default Tabs
          </h3>
          <TabsContainer value={exampleTabs}>
            <TabList
              onChange={handleExampleTabChange}
              ariaLabel="Default tabs example"
              box={false}
            >
              <Tab
                label="Item One"
                content="(12)"
                icon={<RiSearch2Line size={16} />}
                value="1"
                onChange={handleExampleTabChange}
                selectedTabValue={exampleTabs}
              />
              <Tab
                label="Item Two"
                value="2"
                onChange={handleExampleTabChange}
                selectedTabValue={exampleTabs}
              />
              <Tab
                label="Item Three"
                value="3"
                onChange={handleExampleTabChange}
                selectedTabValue={exampleTabs}
              />
            </TabList>
            <TabPanel value="1" currentValue={exampleTabs}>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  Item One Content - Default tabs with underline indicator
                </p>
              </div>
            </TabPanel>
            <TabPanel value="2" currentValue={exampleTabs}>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Item Two Content</p>
              </div>
            </TabPanel>
            <TabPanel value="3" currentValue={exampleTabs}>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Item Three Content</p>
              </div>
            </TabPanel>
          </TabsContainer>
        </div>

        {/* Box Variant Tabs Example */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Box Variant
          </h3>
          <TabsContainer value={exampleTabs}>
            <TabList
              onChange={handleExampleTabChange}
              ariaLabel="Box tabs example"
              box={true}
            >
              <Tab
                label="Item One"
                value="1"
                content="(12)"
                icon={<RiSearch2Line size={16} />}
                onChange={handleExampleTabChange}
                selectedTabValue={exampleTabs}
              />
              <Tab
                label="Item Two"
                value="2"
                onChange={handleExampleTabChange}
                selectedTabValue={exampleTabs}
              />
              <Tab
                label="Item Three"
                value="3"
                onChange={handleExampleTabChange}
                selectedTabValue={exampleTabs}
              />
            </TabList>
            <TabPanel value="1" currentValue={exampleTabs}>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  Item One Content - Box style with contained background
                </p>
              </div>
            </TabPanel>
            <TabPanel value="2" currentValue={exampleTabs}>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Item Two Content</p>
              </div>
            </TabPanel>
            <TabPanel value="3" currentValue={exampleTabs}>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Item Three Content</p>
              </div>
            </TabPanel>
          </TabsContainer>
        </div>

        {/* Pill Variant Tabs Example */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Pill Variant
          </h3>
          <TabsContainer value={pillTabs}>
            <TabList
              onChange={handlePillTabChange}
              ariaLabel="Pill tabs example"
              pill={true}
            >
              <Tab
                label="Item One"
                value="1"
                content="(12)"
                icon={<RiSearch2Line size={16} />}
                onChange={handlePillTabChange}
                selectedTabValue={pillTabs}
              />
              <Tab
                label="Item Two"
                value="2"
                onChange={handlePillTabChange}
                selectedTabValue={pillTabs}
              />
              <Tab
                label="Item Three"
                value="3"
                onChange={handlePillTabChange}
                selectedTabValue={pillTabs}
              />
            </TabList>
            <TabPanel value="1" currentValue={pillTabs}>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  Item One Content - Pill style with rounded corners
                </p>
              </div>
            </TabPanel>
            <TabPanel value="2" currentValue={pillTabs}>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Item Two Content</p>
              </div>
            </TabPanel>
            <TabPanel value="3" currentValue={pillTabs}>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Item Three Content</p>
              </div>
            </TabPanel>
          </TabsContainer>
        </div>

        {/* Nested Tabs for React / Next */}
        <TabsContainer value={nestedTabs.variants}>
          <TabList
            onChange={(val) => handleNestedTabChanges("variants", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.variants}
              onChange={(val) => handleNestedTabChanges("variants", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.variants}
              onChange={(val) => handleNestedTabChanges("variants", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.variants}>
            <CodeSnippet
              title="Tabs Variants"
              code={`import { useState } from "react";
import { TabsContainer, TabList, Tab, TabPanel } from "@atomos_tech/genesis";
import { RiSearch2Line } from "@remixicon/react";

const TabExample = () => {
  const [value, setValue] = useState("1");

  const handleTabChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    {/* Default Tabs */}
    <TabsContainer value={value}>
      <TabList
        onChange={handleTabChange}
        ariaLabel="Default tabs example"
        box={false}
      >
        <Tab
          label="Item One"
          content="(12)"
          icon={<RiSearch2Line size={16} />}
          value="1"
          onChange={handleTabChange}
          selectedTabValue={value}
        />
        <Tab
          label="Item Two"
          value="2"
          onChange={handleTabChange}
          selectedTabValue={value}
        />
        <Tab
          label="Item Three"
          value="3"
          onChange={handleTabChange}
          selectedTabValue={value}
        />
      </TabList>
      <TabPanel value="1" currentValue={value}>
        Item One Content
      </TabPanel>
      <TabPanel value="2" currentValue={value}>
        Item Two Content
      </TabPanel>
      <TabPanel value="3" currentValue={value}>
        Item Three Content
      </TabPanel>
    </TabsContainer>

    {/* Box Variant */}
    <TabsContainer value={value}>
      <TabList
        onChange={handleTabChange}
        ariaLabel="Box tabs example"
        box={true}
      >
        <Tab
          label="Item One"
          value="1"
          content="(12)"
          icon={<RiSearch2Line size={16} />}
          onChange={handleTabChange}
          selectedTabValue={value}
        />
        <Tab
          label="Item Two"
          value="2"
          onChange={handleTabChange}
          selectedTabValue={value}
        />
        <Tab
          label="Item Three"
          value="3"
          onChange={handleTabChange}
          selectedTabValue={value}
        />
      </TabList>
      <TabPanel value="1" currentValue={value}>
        Item One Content
      </TabPanel>
      <TabPanel value="2" currentValue={value}>
        Item Two Content
      </TabPanel>
      <TabPanel value="3" currentValue={value}>
        Item Three Content
      </TabPanel>
    </TabsContainer>

    {/* Pill Variant */}
    <TabsContainer value={value}>
      <TabList
        onChange={handleTabChange}
        ariaLabel="Pill tabs example"
        pill={true}
      >
        <Tab
          label="Item One"
          value="1"
          content="(12)"
          icon={<RiSearch2Line size={16} />}
          onChange={handleTabChange}
          selectedTabValue={value}
        />
        <Tab
          label="Item Two"
          value="2"
          onChange={handleTabChange}
          selectedTabValue={value}
        />
        <Tab
          label="Item Three"
          value="3"
          onChange={handleTabChange}
          selectedTabValue={value}
        />
      </TabList>
      <TabPanel value="1" currentValue={value}>
        Item One Content
      </TabPanel>
      <TabPanel value="2" currentValue={value}>
        Item Two Content
      </TabPanel>
      <TabPanel value="3" currentValue={value}>
        Item Three Content
      </TabPanel>
    </TabsContainer>
  );
};`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.variants}>
            <CodeSnippet
              title="Tabs Variants"
              code={`"use client";
import { useState } from "react";
import { TabsContainer, TabList, Tab, TabPanel } from "@atomos_tech/genesis";
import { RiSearch2Line } from "@remixicon/react";

const TabExample = () => {
  const [value, setValue] = useState("1");

  const handleTabChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    {/* Default Tabs */}
    <TabsContainer value={value}>
      <TabList
        onChange={handleTabChange}
        ariaLabel="Default tabs example"
        box={false}
      >
        <Tab
          label="Item One"
          content="(12)"
          icon={<RiSearch2Line size={16} />}
          value="1"
          onChange={handleTabChange}
          selectedTabValue={value}
        />
        <Tab
          label="Item Two"
          value="2"
          onChange={handleTabChange}
          selectedTabValue={value}
        />
        <Tab
          label="Item Three"
          value="3"
          onChange={handleTabChange}
          selectedTabValue={value}
        />
      </TabList>
      <TabPanel value="1" currentValue={value}>
        Item One Content
      </TabPanel>
      <TabPanel value="2" currentValue={value}>
        Item Two Content
      </TabPanel>
      <TabPanel value="3" currentValue={value}>
        Item Three Content
      </TabPanel>
    </TabsContainer>

    {/* Box Variant */}
    <TabsContainer value={value}>
      <TabList
        onChange={handleTabChange}
        ariaLabel="Box tabs example"
        box={true}
      >
        <Tab
          label="Item One"
          value="1"
          content="(12)"
          icon={<RiSearch2Line size={16} />}
          onChange={handleTabChange}
          selectedTabValue={value}
        />
        <Tab
          label="Item Two"
          value="2"
          onChange={handleTabChange}
          selectedTabValue={value}
        />
        <Tab
          label="Item Three"
          value="3"
          onChange={handleTabChange}
          selectedTabValue={value}
        />
      </TabList>
      <TabPanel value="1" currentValue={value}>
        Item One Content
      </TabPanel>
      <TabPanel value="2" currentValue={value}>
        Item Two Content
      </TabPanel>
      <TabPanel value="3" currentValue={value}>
        Item Three Content
      </TabPanel>
    </TabsContainer>

    {/* Pill Variant */}
    <TabsContainer value={value}>
      <TabList
        onChange={handleTabChange}
        ariaLabel="Pill tabs example"
        pill={true}
      >
        <Tab
          label="Item One"
          value="1"
          content="(12)"
          icon={<RiSearch2Line size={16} />}
          onChange={handleTabChange}
          selectedTabValue={value}
        />
        <Tab
          label="Item Two"
          value="2"
          onChange={handleTabChange}
          selectedTabValue={value}
        />
        <Tab
          label="Item Three"
          value="3"
          onChange={handleTabChange}
          selectedTabValue={value}
        />
      </TabList>
      <TabPanel value="1" currentValue={value}>
        Item One Content
      </TabPanel>
      <TabPanel value="2" currentValue={value}>
        Item Two Content
      </TabPanel>
      <TabPanel value="3" currentValue={value}>
        Item Three Content
      </TabPanel>
    </TabsContainer>
  );
};`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* Customization Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Customization
        </h2>

        {/* Custom Styling Example */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Custom Styling
          </h3>
          <TabsContainer value={exampleTabs}>
            <TabList
              onChange={handleExampleTabChange}
              ariaLabel="Custom styled tabs example"
              className="border-none"
            >
              <Tab
                label="Item One"
                value="1"
                onChange={handleExampleTabChange}
                selectedTabValue={exampleTabs}
                className="bg-primary-600 text-white rounded-2xl hover:bg-primary-100 hover:text-black border-b-0 hover:rounded-2xl"
              />
              <Tab
                label="Item Two"
                value="2"
                onChange={handleExampleTabChange}
                selectedTabValue={exampleTabs}
                className="hover:bg-success-100 hover:text-success-800"
              />
              <Tab
                label="Item Three"
                value="3"
                onChange={handleExampleTabChange}
                selectedTabValue={exampleTabs}
                className="hover:bg-warning-100 hover:text-warning-800"
              />
            </TabList>
            <TabPanel value="1" currentValue={exampleTabs}>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  Custom styled tab with primary colors and rounded corners
                </p>
              </div>
            </TabPanel>
            <TabPanel value="2" currentValue={exampleTabs}>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Item Two Content</p>
              </div>
            </TabPanel>
            <TabPanel value="3" currentValue={exampleTabs}>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Item Three Content</p>
              </div>
            </TabPanel>
          </TabsContainer>
        </div>

        {/* Rich Content Example */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Rich Content Tabs
          </h3>
          <TabsContainer value={exampleTabs}>
            <TabList
              onChange={handleExampleTabChange}
              ariaLabel="Rich content tabs example"
              box={true}
            >
              <Tab
                label="Profile"
                value="1"
                icon={<RiUserLine size={16} />}
                content={
                  <span className="ml-1 px-1.5 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full">
                    3
                  </span>
                }
                onChange={handleExampleTabChange}
                selectedTabValue={exampleTabs}
              />
              <Tab
                label="Search"
                value="2"
                icon={<RiSearch2Line size={16} />}
                content="(24)"
                onChange={handleExampleTabChange}
                selectedTabValue={exampleTabs}
              />
              <Tab
                label="Settings"
                value="3"
                icon={<RiSettingsLine size={16} />}
                onChange={handleExampleTabChange}
                selectedTabValue={exampleTabs}
              />
            </TabList>
            <TabPanel value="1" currentValue={exampleTabs}>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  Profile tab with user icon and badge count
                </p>
              </div>
            </TabPanel>
            <TabPanel value="2" currentValue={exampleTabs}>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  Search tab with result count
                </p>
              </div>
            </TabPanel>
            <TabPanel value="3" currentValue={exampleTabs}>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  Settings tab with gear icon
                </p>
              </div>
            </TabPanel>
          </TabsContainer>
        </div>

        {/* Vertical Tabs Example */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Vertical Tabs
          </h3>
          <TabsContainer
            value={verticalTabs}
            position="vertical"
            className="flex gap-4"
          >
            <TabList
              onChange={handleVerticalTabChange}
              ariaLabel="Vertical tabs example"
              position="vertical"
              className="w-48"
            >
              <Tab
                label="Item One"
                value="1"
                onChange={handleVerticalTabChange}
                selectedTabValue={verticalTabs}
                position="vertical"
              />
              <Tab
                label="Item Two"
                value="2"
                onChange={handleVerticalTabChange}
                selectedTabValue={verticalTabs}
                position="vertical"
              />
              <Tab
                label="Item Three"
                value="3"
                onChange={handleVerticalTabChange}
                selectedTabValue={verticalTabs}
                position="vertical"
              />
            </TabList>
            <div className="flex-1">
              <TabPanel value="1" currentValue={verticalTabs}>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Item One Content - Vertical tabs layout
                  </p>
                </div>
              </TabPanel>
              <TabPanel value="2" currentValue={verticalTabs}>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Item Two Content</p>
                </div>
              </TabPanel>
              <TabPanel value="3" currentValue={verticalTabs}>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Item Three Content</p>
                </div>
              </TabPanel>
            </div>
          </TabsContainer>
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
              title="Tabs Customization"
              code={`{/* Custom Styling */}
<TabsContainer value={value}>
  <TabList
    onChange={handleTabChange}
    ariaLabel="Custom styled tabs example"
    className="border-none"
  >
    <Tab
      label="Item One"
      value="1"
      onChange={handleTabChange}
      selectedTabValue={value}
      className="bg-primary-600 text-white rounded-2xl hover:bg-primary-100 hover:text-black border-b-0 hover:rounded-2xl"
    />
    <Tab
      label="Item Two"
      value="2"
      onChange={handleTabChange}
      selectedTabValue={value}
      className="hover:bg-success-100 hover:text-success-800"
    />
    <Tab
      label="Item Three"
      value="3"
      onChange={handleTabChange}
      selectedTabValue={value}
      className="hover:bg-warning-100 hover:text-warning-800"
    />
  </TabList>
  <TabPanel value="1" currentValue={value}>
    <div className="p-4 bg-gray-50 rounded-lg">
      <p className="text-sm text-gray-600">
        Custom styled tab with primary colors and rounded corners
      </p>
    </div>
  </TabPanel>
  <TabPanel value="2" currentValue={value}>
    <div className="p-4 bg-gray-50 rounded-lg">
      <p className="text-sm text-gray-600">Item Two Content</p>
    </div>
  </TabPanel>
  <TabPanel value="3" currentValue={value}>
    <div className="p-4 bg-gray-50 rounded-lg">
      <p className="text-sm text-gray-600">Item Three Content</p>
    </div>
  </TabPanel>
</TabsContainer>

{/* Rich Content Tabs */}
<TabsContainer value={value}>
  <TabList
    onChange={handleTabChange}
    ariaLabel="Rich content tabs example"
    box={true}
  >
    <Tab
      label="Profile"
      value="1"
      icon={<RiUserLine size={16} />}
      content={<span className="ml-1 px-1.5 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full">3</span>}
      onChange={handleTabChange}
      selectedTabValue={value}
    />
    <Tab
      label="Search"
      value="2"
      icon={<RiSearch2Line size={16} />}
      content="(24)"
      onChange={handleTabChange}
      selectedTabValue={value}
    />
    <Tab
      label="Settings"
      value="3"
      icon={<RiSettingsLine size={16} />}
      onChange={handleTabChange}
      selectedTabValue={value}
    />
  </TabList>
  <TabPanel value="1" currentValue={value}>
    <div className="p-4 bg-gray-50 rounded-lg">
      <p className="text-sm text-gray-600">
        Profile tab with user icon and badge count
      </p>
    </div>
  </TabPanel>
  <TabPanel value="2" currentValue={value}>
    <div className="p-4 bg-gray-50 rounded-lg">
      <p className="text-sm text-gray-600">
        Search tab with result count
      </p>
    </div>
  </TabPanel>
  <TabPanel value="3" currentValue={value}>
    <div className="p-4 bg-gray-50 rounded-lg">
      <p className="text-sm text-gray-600">
        Settings tab with gear icon
      </p>
    </div>
  </TabPanel>
</TabsContainer>

{/* Vertical Tabs */}
<TabsContainer
  value={value}
  position="vertical"
  className="flex gap-4"
>
  <TabList
    onChange={handleTabChange}
    ariaLabel="Vertical tabs example"
    position="vertical"
    className="w-48"
  >
    <Tab
      label="Item One"
      value="1"
      onChange={handleTabChange}
      selectedTabValue={value}
      position="vertical"
    />
    <Tab
      label="Item Two"
      value="2"
      onChange={handleTabChange}
      selectedTabValue={value}
      position="vertical"
    />
    <Tab
      label="Item Three"
      value="3"
      onChange={handleTabChange}
      selectedTabValue={value}
      position="vertical"
    />
  </TabList>
  <div className="flex-1">
    <TabPanel value="1" currentValue={value}>
      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          Item One Content - Vertical tabs layout
        </p>
      </div>
    </TabPanel>
    <TabPanel value="2" currentValue={value}>
      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">Item Two Content</p>
      </div>
    </TabPanel>
    <TabPanel value="3" currentValue={value}>
      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">Item Three Content</p>
      </div>
    </TabPanel>
  </div>
</TabsContainer>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.customization}>
            <CodeSnippet
              title="Tabs Customization"
              code={`{/* Custom Styling */}
<TabsContainer value={value}>
  <TabList
    onChange={handleTabChange}
    ariaLabel="Custom styled tabs example"
    className="border-none"
  >
    <Tab
      label="Item One"
      value="1"
      onChange={handleTabChange}
      selectedTabValue={value}
      className="bg-primary-600 text-white rounded-2xl hover:bg-primary-100 hover:text-black border-b-0 hover:rounded-2xl"
    />
    <Tab
      label="Item Two"
      value="2"
      onChange={handleTabChange}
      selectedTabValue={value}
      className="hover:bg-success-100 hover:text-success-800"
    />
    <Tab
      label="Item Three"
      value="3"
      onChange={handleTabChange}
      selectedTabValue={value}
      className="hover:bg-warning-100 hover:text-warning-800"
    />
  </TabList>
  <TabPanel value="1" currentValue={value}>
    <div className="p-4 bg-gray-50 rounded-lg">
      <p className="text-sm text-gray-600">
        Custom styled tab with primary colors and rounded corners
      </p>
    </div>
  </TabPanel>
  <TabPanel value="2" currentValue={value}>
    <div className="p-4 bg-gray-50 rounded-lg">
      <p className="text-sm text-gray-600">Item Two Content</p>
    </div>
  </TabPanel>
  <TabPanel value="3" currentValue={value}>
    <div className="p-4 bg-gray-50 rounded-lg">
      <p className="text-sm text-gray-600">Item Three Content</p>
    </div>
  </TabPanel>
</TabsContainer>

{/* Rich Content Tabs */}
<TabsContainer value={value}>
  <TabList
    onChange={handleTabChange}
    ariaLabel="Rich content tabs example"
    box={true}
  >
    <Tab
      label="Profile"
      value="1"
      icon={<RiUserLine size={16} />}
      content={<span className="ml-1 px-1.5 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full">3</span>}
      onChange={handleTabChange}
      selectedTabValue={value}
    />
    <Tab
      label="Search"
      value="2"
      icon={<RiSearch2Line size={16} />}
      content="(24)"
      onChange={handleTabChange}
      selectedTabValue={value}
    />
    <Tab
      label="Settings"
      value="3"
      icon={<RiSettingsLine size={16} />}
      onChange={handleTabChange}
      selectedTabValue={value}
    />
  </TabList>
  <TabPanel value="1" currentValue={value}>
    <div className="p-4 bg-gray-50 rounded-lg">
      <p className="text-sm text-gray-600">
        Profile tab with user icon and badge count
      </p>
    </div>
  </TabPanel>
  <TabPanel value="2" currentValue={value}>
    <div className="p-4 bg-gray-50 rounded-lg">
      <p className="text-sm text-gray-600">
        Search tab with result count
      </p>
    </div>
  </TabPanel>
  <TabPanel value="3" currentValue={value}>
    <div className="p-4 bg-gray-50 rounded-lg">
      <p className="text-sm text-gray-600">
        Settings tab with gear icon
      </p>
    </div>
  </TabPanel>
</TabsContainer>

{/* Vertical Tabs */}
<TabsContainer
  value={value}
  position="vertical"
  className="flex gap-4"
>
  <TabList
    onChange={handleTabChange}
    ariaLabel="Vertical tabs example"
    position="vertical"
    className="w-48"
  >
    <Tab
      label="Item One"
      value="1"
      onChange={handleTabChange}
      selectedTabValue={value}
      position="vertical"
    />
    <Tab
      label="Item Two"
      value="2"
      onChange={handleTabChange}
      selectedTabValue={value}
      position="vertical"
    />
    <Tab
      label="Item Three"
      value="3"
      onChange={handleTabChange}
      selectedTabValue={value}
      position="vertical"
    />
  </TabList>
  <div className="flex-1">
    <TabPanel value="1" currentValue={value}>
      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          Item One Content - Vertical tabs layout
        </p>
      </div>
    </TabPanel>
    <TabPanel value="2" currentValue={value}>
      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">Item Two Content</p>
      </div>
    </TabPanel>
    <TabPanel value="3" currentValue={value}>
      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">Item Three Content</p>
      </div>
    </TabPanel>
  </div>
</TabsContainer>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>
    </div>
  );
};

export default TabsExampleSection;
