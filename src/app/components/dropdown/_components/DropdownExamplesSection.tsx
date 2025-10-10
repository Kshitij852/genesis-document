import { TabsContainer, TabList, Tab, TabPanel } from "@atomos_tech/genesis";
import { Dropdown, DropdownWithIcon } from "@atomos_tech/genesis";
import { RiFilterLine, RiGlobalLine } from "@remixicon/react";
import React, { useState } from "react";

import CodeSnippet from "../../button/_components/CodeSnippet";

interface Option {
  label: string;
  value: string;
  info?: string;
  tooltipContent?: string;
  labelTextColor?: string;
  disabledOption?: boolean;
  addInfo?: string;
}

const DropdownExamples = () => {
  const [nestedTabs, setNestedTabs] = useState({
    basic: "react",
    advanced: "react",
  });

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  const [multiSelect, setMultiSelect] = useState<Option[]>([]);
  const [singleSelect, setSingleSelect] = useState<Option[]>([]);
  const [dropdownMenuOption, setDropdownMenuOption] = useState<Option[]>([]);
  const [dropdownMenuOptionTwo, setDropdownMenuOptionTwo] = useState<Option[]>(
    []
  );

  const singleOptions = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  const multiOptions = [
    {
      label:
        "appleeeeeeeeeeeeeeeeeeeeeeeeeeeeeee appleeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      value: "apple",
      info: "Modals",
      tooltipContent: "hjsghjwg",
      labelTextColor: "oklch(49.6% 0.265 301.924)",
      disabledOption: true,
    },
    {
      label: "banana",
      value: "banana",
      addInfo: "jdhjaldh",
      labelTextColor: "#1765dc",
    },
    { label: "strawberry", value: "strawberry" },
    { label: "kiwi", value: "kiwi", info: "info4" },
    {
      label: "orangeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      value: "orange",
      tooltipContent: "lower-level components:",
      info: "info5",
    },
    { label: "grapes", value: "grapes" },
    { label: "melon", value: "melon" },
    { label: "mango", value: "mango" },
  ];

  const handleReset = () => {
    console.log("Reset clicked");
  };

  return (
    <div className="space-y-8">
      {/* Basic Dropdown Examples */}
      <section className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">
          Basic Dropdown Usage
        </h2>

        <div className="space-y-6 mb-6">
          {/* Dropdown with Icon */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex gap-6 items-center mb-4">
              <h3 className="text-sm font-medium text-gray-700">
                Dropdown with icon
              </h3>
              <Dropdown
                options={multiOptions}
                selected={dropdownMenuOption}
                setSelected={setDropdownMenuOption}
                search={true}
                multiple={true}
                width="200px"
                id="dropdownMenuOptionOne"
                dropdownFooter={true}
                onApply={() => {
                  alert("Apply button clicked");
                }}
              />
              <DropdownWithIcon
                options={multiOptions}
                selected={dropdownMenuOptionTwo}
                setSelected={setDropdownMenuOptionTwo}
                search={true}
                multiple={true}
                width="200px"
                id="dropdownMenuOptionTwo"
                trigger={
                  <RiFilterLine
                    className="hover:bg-gray-200 rounded"
                    cursor="pointer"
                    size={14}
                  />
                }
              />
            </div>
            <p className="text-xs text-gray-500">
              Basic dropdown with search and multiple selection
            </p>
          </div>

          {/* Multiple Dropdown Types */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-start gap-10 flex-wrap">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  With Custom Trigger
                </h3>
                <DropdownWithIcon
                  options={multiOptions}
                  selected={multiSelect}
                  setSelected={setMultiSelect}
                  search={true}
                  multiple={true}
                  dropdownText={`Selected ${multiSelect?.length} items`}
                  width="200px"
                  trigger={
                    <RiFilterLine
                      className="hover:bg-gray-200 rounded"
                      cursor="pointer"
                      size={14}
                    />
                  }
                />
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Text Trigger
                </h3>
                <DropdownWithIcon
                  options={multiOptions}
                  selected={multiSelect}
                  setSelected={setMultiSelect}
                  search={true}
                  multiple={true}
                  width="100px"
                  trigger={<span>dropdown</span>}
                  onReset={handleReset}
                />
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Multiple Selection
                </h3>
                <Dropdown
                  options={[
                    { label: "High", value: "High", disabledOption: true },
                    { label: "Medium", value: "Medium" },
                    { label: "Low", value: "Low" },
                  ]}
                  selected={multiSelect}
                  setSelected={setMultiSelect}
                  width="300px"
                  icon={<RiGlobalLine size={16} />}
                  dropdownText="Test Test"
                  multiple
                  search
                  position="bottom"
                  onApply={() => {
                    alert("Apply button clicked");
                  }}
                  onReset={handleReset}
                />
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Single Selection
                </h3>
                <Dropdown
                  options={multiOptions}
                  selected={singleSelect}
                  icon={<RiGlobalLine size={16} />}
                  setSelected={setSingleSelect}
                  dropdownText="single text"
                  info="info"
                  width="250px"
                />
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Disabled State
                </h3>
                <Dropdown
                  options={singleOptions}
                  selected={singleSelect}
                  setSelected={setSingleSelect}
                  multiple={false}
                  info="info"
                  disabled={true}
                  width="200px"
                />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Various dropdown configurations including custom triggers,
              multiple/single selection, and disabled states
            </p>
          </div>
        </div>

        {/* Code Examples for Basic Usage */}
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
              title="Complete Dropdown Examples"
              code={`import { Dropdown, DropdownWithIcon } from "@atomos_tech/genesis";
import { RiFilterLine, RiGlobalLine } from "@remixicon/react";
import { useState } from "react";

const DropdownExamples = () => {
  const [multiSelect, setMultiSelect] = useState([]);
  const [singleSelect, setSingleSelect] = useState([]);
  const [dropdownMenuOption, setDropdownMenuOption] = useState([]);
  const [dropdownMenuOptionTwo, setDropdownMenuOptionTwo] = useState([]);

  const singleOptions = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  const multiOptions = [
    {
      label: "appleeeeeeeeeeeeeeeeeeeeeeeeeeeeeee appleeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      value: "apple",
      info: "Modals",
      tooltipContent: "hjsghjwg",
      labelTextColor: "oklch(49.6% 0.265 301.924)",
      disabledOption: true,
    },
    {
      label: "banana",
      value: "banana",
      addInfo: "jdhjaldh",
      labelTextColor: "#1765dc",
    },
    { label: "strawberry", value: "strawberry" },
    { label: "kiwi", value: "kiwi", info: "info4" },
    {
      label: "orangeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      value: "orange",
      tooltipContent: "lower-level components:",
      info: "info5",
    },
    { label: "grapes", value: "grapes" },
    { label: "melon", value: "melon" },
    { label: "mango", value: "mango" },
  ];

  const handleReset = () => {
    console.log("Reset clicked");
  };

  return (
    <div>
      {/* First Row: Basic Dropdowns with Icons */}
      <section className="flex gap-6 items-center">
        <h1 className="text-lg">Dropdown with icon</h1>
        
        {/* Basic Dropdown with Footer */}
         <Dropdown
          options={multiOptions}
          selected={dropdownMenuOption}
          setSelected={setDropdownMenuOption}
          search={true}
          multiple={true}
          width="200px"
          id="dropdownMenuOptionOne"
          dropdownFooter={true}
          onApply={() => {
            alert("Apply button clicked");
          }}
        />
        
        {/* Dropdown with Custom Icon Trigger */}
        <DropdownWithIcon
          options={multiOptions}
          selected={dropdownMenuOptionTwo}
          setSelected={setDropdownMenuOptionTwo}
          search={true}
          multiple={true}
          width="200px"
          id="dropdownMenuOptionTwo"
          trigger={
            <RiFilterLine
              className="hover:bg-gray-200 rounded"
              cursor="pointer"
              size={14}
            />
          }
        />
      </section>

      {/* Second Row: Various Dropdown Configurations */}
      <section className="flex items-start gap-10">
        
        {/* Dropdown with Custom Trigger and Dynamic Text */}
        <div>
          <h1 className="">Dropdown with icon</h1>
          <DropdownWithIcon
            options={multiOptions}
            selected={multiSelect}
            setSelected={setMultiSelect}
            search={true}
            multiple={true}
            dropdownText={\`Selected \${multiSelect?.length} items\`}
            width="200px"
            trigger={
              <RiFilterLine
                className="hover:bg-gray-200 rounded"
                cursor="pointer"
                size={14}
              />
            }
          />
        </div>

        {/* Dropdown with Text Trigger and Reset */}
        <div>
          <h1>Dropdown with icon</h1>
          <DropdownWithIcon
            options={multiOptions}
            selected={multiSelect}
            setSelected={setMultiSelect}
            search={true}
            multiple={true}
            width="100px"
            trigger={<span>dropdown</span>}
            onReset={handleReset}
          />
        </div>

        {/* Multiple Selection Dropdown with Icon */}
        <div>
          <h1 className="text-lg">Multiple Dropdown</h1>
          <Dropdown
            options={[
              { label: "High", value: "High", disabledOption: true },
              { label: "Medium", value: "Medium" },
              { label: "Low", value: "Low" },
              { label: "High", value: "High" },
              { label: "Medium", value: "Medium" },
              { label: "Low", value: "Low" },
              { label: "High", value: "High" },
              { label: "Medium", value: "Medium" },
              { label: "Low", value: "Low" },
            ]}
            selected={multiSelect}
            setSelected={setMultiSelect}
            width="300px"
            icon={<RiGlobalLine size={16} />}
            dropdownText="Test Test"
            multiple
            search
            position="bottom"
            onApply={() => {
              alert("Apply button clicked");
            }}
            onReset={handleReset}
          />
        </div>

        {/* Single Selection Dropdown */}
        <div>
          <h1 className="text-lg">Single Dropdown Language</h1>
          <Dropdown
            options={multiOptions}
            selected={singleSelect}
            icon={<RiGlobalLine size={16} />}
            setSelected={setSingleSelect}
            dropdownText="single text"
            info="info"
          />
        </div>

        {/* Disabled Dropdown */}
        <div>
          <h1 className="text-lg">Disabled Dropdown</h1>
          <Dropdown
            options={singleOptions}
            selected={singleSelect}
            setSelected={setSingleSelect}
            multiple={false}
            info="info"
            disabled={true}
          />
        </div>

        {/* Right Positioned Dropdown */}
        <div className="ml-10">
          <DropdownWithIcon
            options={multiOptions}
            selected={multiSelect}
            setSelected={setMultiSelect}
            search={true}
            multiple={true}
            width="100px"
            position="right"
            trigger={
              <RiFilterLine
                className="hover:bg-gray-200 rounded"
                cursor="pointer"
                size={14}
              />
            }
          />
        </div>
      </section>
    </div>
  );
};

export default DropdownExamples;`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.basic}>
            <CodeSnippet
              title="Complete Dropdown Examples"
              code={`"use client";
import { Dropdown, DropdownWithIcon } from "@atomos_tech/genesis";
import { RiFilterLine, RiGlobalLine } from "@remixicon/react";
import { useState } from "react";

const DropdownExamples = () => {
  const [multiSelect, setMultiSelect] = useState([]);
  const [singleSelect, setSingleSelect] = useState([]);
  const [dropdownMenuOption, setDropdownMenuOption] = useState([]);
  const [dropdownMenuOptionTwo, setDropdownMenuOptionTwo] = useState([]);

  const singleOptions = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  const multiOptions = [
    {
      label: "appleeeeeeeeeeeeeeeeeeeeeeeeeeeeeee appleeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      value: "apple",
      info: "Modals",
      tooltipContent: "hjsghjwg",
      labelTextColor: "oklch(49.6% 0.265 301.924)",
      disabledOption: true,
    },
    {
      label: "banana",
      value: "banana",
      addInfo: "jdhjaldh",
      labelTextColor: "#1765dc",
    },
    { label: "strawberry", value: "strawberry" },
    { label: "kiwi", value: "kiwi", info: "info4" },
    {
      label: "orangeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      value: "orange",
      tooltipContent: "lower-level components:",
      info: "info5",
    },
    { label: "grapes", value: "grapes" },
    { label: "melon", value: "melon" },
    { label: "mango", value: "mango" },
  ];

  const handleReset = () => {
    console.log("Reset clicked");
  };

  return (
    <div>
      {/* First Row: Basic Dropdowns with Icons */}
      <section className="flex gap-6 items-center">
        <h1 className="text-lg">Dropdown with icon</h1>
        
        {/* Basic Dropdown with Footer */}
         <Dropdown
          options={multiOptions}
          selected={dropdownMenuOption}
          setSelected={setDropdownMenuOption}
          search={true}
          multiple={true}
          width="200px"
          id="dropdownMenuOptionOne"
          dropdownFooter={true}
          onApply={() => {
            alert("Apply button clicked");
          }}
        />
        
        {/* Dropdown with Custom Icon Trigger */}
        <DropdownWithIcon
          options={multiOptions}
          selected={dropdownMenuOptionTwo}
          setSelected={setDropdownMenuOptionTwo}
          search={true}
          multiple={true}
          width="200px"
          id="dropdownMenuOptionTwo"
          trigger={
            <RiFilterLine
              className="hover:bg-gray-200 rounded"
              cursor="pointer"
              size={14}
            />
          }
        />
      </section>

      {/* Second Row: Various Dropdown Configurations */}
      <section className="flex items-start gap-10">
        
        {/* Dropdown with Custom Trigger and Dynamic Text */}
        <div>
          <h1 className="">Dropdown with icon</h1>
          <DropdownWithIcon
            options={multiOptions}
            selected={multiSelect}
            setSelected={setMultiSelect}
            search={true}
            multiple={true}
            dropdownText={\`Selected \${multiSelect?.length} items\`}
            width="200px"
            trigger={
              <RiFilterLine
                className="hover:bg-gray-200 rounded"
                cursor="pointer"
                size={14}
              />
            }
          />
        </div>

        {/* Dropdown with Text Trigger and Reset */}
        <div>
          <h1>Dropdown with icon</h1>
          <DropdownWithIcon
            options={multiOptions}
            selected={multiSelect}
            setSelected={setMultiSelect}
            search={true}
            multiple={true}
            width="100px"
            trigger={<span>dropdown</span>}
            onReset={handleReset}
          />
        </div>

        {/* Multiple Selection Dropdown with Icon */}
        <div>
          <h1 className="text-lg">Multiple Dropdown</h1>
          <Dropdown
            options={[
              { label: "High", value: "High", disabledOption: true },
              { label: "Medium", value: "Medium" },
              { label: "Low", value: "Low" },
              { label: "High", value: "High" },
              { label: "Medium", value: "Medium" },
              { label: "Low", value: "Low" },
              { label: "High", value: "High" },
              { label: "Medium", value: "Medium" },
              { label: "Low", value: "Low" },
            ]}
            selected={multiSelect}
            setSelected={setMultiSelect}
            width="300px"
            icon={<RiGlobalLine size={16} />}
            dropdownText="Test Test"
            multiple
            search
            position="bottom"
            onApply={() => {
              alert("Apply button clicked");
            }}
            onReset={handleReset}
          />
        </div>

        {/* Single Selection Dropdown */}
        <div>
          <h1 className="text-lg">Single Dropdown Language</h1>
          <Dropdown
            options={multiOptions}
            selected={singleSelect}
            icon={<RiGlobalLine size={16} />}
            setSelected={setSingleSelect}
            dropdownText="single text"
            info="info"
          />
        </div>

        {/* Disabled Dropdown */}
        <div>
          <h1 className="text-lg">Disabled Dropdown</h1>
          <Dropdown
            options={singleOptions}
            selected={singleSelect}
            setSelected={setSingleSelect}
            multiple={false}
            info="info"
            disabled={true}
          />
        </div>

        {/* Right Positioned Dropdown */}
        <div className="ml-10">
          <DropdownWithIcon
            options={multiOptions}
            selected={multiSelect}
            setSelected={setMultiSelect}
            search={true}
            multiple={true}
            width="100px"
            position="right"
            trigger={
              <RiFilterLine
                className="hover:bg-gray-200 rounded"
                cursor="pointer"
                size={14}
              />
            }
          />
        </div>
      </section>
    </div>
  );
};

export default DropdownExamples;`}
            />
          </TabPanel>
        </TabsContainer>
      </section>
    </div>
  );
};

export default DropdownExamples;
