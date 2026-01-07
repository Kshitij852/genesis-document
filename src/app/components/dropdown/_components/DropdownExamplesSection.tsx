"use client";

import React, { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownWithIcon,
  Tab,
  TabList,
  TabPanel,
  TabsContainer,
  Typography,
} from "@atomos_tech/genesis";
import {
  RiFilterLine,
  RiGlobalLine,
  RiSettings3Line,
  RiUser3Line,
  RiCalendarLine,
  RiMapPinLine,
  RiCheckLine,
} from "@remixicon/react";

import CodeSnippet from "../../button/_components/CodeSnippet";

// Define types
interface Option {
  label: string | number;
  value: string | number;
  info?: string;
  addInfo?: string;
  disabledOption?: boolean;
  tooltipContent?: string;
  labelTextColor?: string;
}

const DropdownExampleSection = () => {
  // Single select options (more realistic)
  const singleOptions: Option[] = [
    { label: "English", value: "en", info: "English language" },
    { label: "Spanish", value: "es", info: "Español" },
    { label: "French", value: "fr", info: "Français" },
    { label: "German", value: "de", info: "Deutsch" },
    { label: "Japanese", value: "ja", info: "日本語", disabledOption: true },
    { label: "Chinese", value: "zh", info: "中文" },
  ];

  // Multi-select options (categories)
  const multiOptions: Option[] = [
    {
      label: "Design",
      value: "design",
      info: "UI/UX Design",
      labelTextColor: "#febec7",
      // addInfo: "User interface and experience design",
    },
    {
      label: "Development",
      value: "development",
      info: "Software Development",
      labelTextColor: "#6d7f9b",
      // addInfo: "Frontend and backend development",
    },
    {
      label: "Marketing",
      value: "marketing",
      info: "Digital Marketing",
      disabledOption: true,
    },
    {
      label: "Sales",
      value: "sales",
      info: "Business Development",
      labelTextColor: "#583325",
      tooltipContent: "Sales and business development activities",
    },
    {
      label: "Customer Support",
      value: "support",
      info: "Customer Service",
      labelTextColor: "#588379",
    },
    {
      label: "Human Resources",
      value: "hr",
      info: "Human Resources",
      labelTextColor: "#a80a20",
      // addInfo: "Recruitment and employee management",
    },
    {
      label: "Finance",
      value: "finance",
      info: "Financial Operations",
      labelTextColor: "#2b1f4c",
    },
    {
      label: "Operations",
      value: "operations",
      info: "Business Operations",
      labelTextColor: "#d4af37",
    },
  ];

  // Status options
  const statusOptions: Option[] = [
    { label: "Active", value: "active", info: "Active users" },
    { label: "Pending", value: "pending", info: "Pending approval" },
    { label: "Suspended", value: "suspended", info: "Suspended accounts" },
    {
      label: "Inactive",
      value: "inactive",
      info: "Inactive users",
      disabledOption: true,
    },
    { label: "Archived", value: "archived", info: "Archived records" },
  ];

  // Priority options
  const priorityOptions: Option[] = [
    { label: "Critical", value: "critical", info: "Highest priority" },
    { label: "High", value: "high", info: "High priority" },
    { label: "Medium", value: "medium", info: "Medium priority" },
    { label: "Low", value: "low", info: "Low priority" },
  ];

  // State for dropdown selections
  const [multiSelect, setMultiSelect] = useState<Option[]>([]);
  const [singleSelect, setSingleSelect] = useState<Option[]>([]);
  const [statusSelect, setStatusSelect] = useState<Option[]>([]);
  const [prioritySelect, setPrioritySelect] = useState<Option[]>([]);
  const [filterSelect, setFilterSelect] = useState<Option[]>([]);
  const [activeTab, setActiveTab] = useState<"react" | "next">("react");
  const handleTabChange = (value: string) => {
    setActiveTab(value as "react" | "next");
  };

  // Reset handlers
  const handleReset = () => {
    setMultiSelect([]);
    setSingleSelect([]);
    setStatusSelect([]);
    setPrioritySelect([]);
    setFilterSelect([]);
  };

  return (
    <div className="space-y-6">
      <Typography variant="h5" className="text-gray-800">
        Dropdown Components
      </Typography>

      {/* Basic Dropdown Examples */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Single Select Dropdown */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <Typography variant="h6" className="mb-4 text-gray-700">
            Single Select
          </Typography>
          <div className="space-y-4">
            <Dropdown
              options={singleOptions}
              selected={singleSelect}
              setSelected={setSingleSelect}
              dropdownText="Select language"
              icon={<RiGlobalLine size={16} />}
              // info="Choose your preferred language"
              width="325px"
            />
            <Dropdown
              options={statusOptions}
              selected={statusSelect}
              setSelected={setStatusSelect}
              dropdownText="Filter by status"
              icon={<RiUser3Line size={16} />}
              width="325px"
              multiple={false}
            />
          </div>
        </div>

        {/* Multi-Select Dropdown */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <Typography variant="h6" className="mb-4 text-gray-700">
            Multi-Select
          </Typography>
          <div className="space-y-4">
            <Dropdown
              options={multiOptions}
              selected={multiSelect}
              setSelected={setMultiSelect}
              dropdownText="Select categories"
              icon={<RiSettings3Line size={16} />}
              multiple={true}
              search={true}
              width="325px"
              height="200px"
            />
            <Dropdown
              options={priorityOptions}
              selected={prioritySelect}
              setSelected={setPrioritySelect}
              dropdownText="Priority levels"
              multiple={true}
              width="325px"
            />
          </div>
        </div>

        {/* Dropdown with Footer */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <Typography variant="h6" className="mb-4 text-gray-700">
            With Footer Actions
          </Typography>
          <div className="space-y-4">
            <Dropdown
              options={multiOptions}
              selected={multiSelect}
              setSelected={setMultiSelect}
              dropdownText="Apply filters"
              multiple={true}
              search={true}
              width="325px"
              height="200px"
              dropdownFooter={true}
              onApply={() => alert("Filters applied!")}
              onReset={handleReset}
            />
            <Dropdown
              options={statusOptions}
              selected={statusSelect}
              setSelected={setStatusSelect}
              dropdownText="Custom footer"
              multiple={true}
              width="325px"
              dropdownFooter={true}
              footerAction={
                <div className="flex gap-2">
                  <Button
                    className="px-2.5 py-1.5"
                    variant="outlined"
                    onClick={handleReset}
                  >
                    Clear
                  </Button>
                  <Button
                    className="px-2 py-1"
                    onClick={() => alert("Custom action")}
                  >
                    <RiCheckLine size={14} className="mr-1" />
                    Confirm
                  </Button>
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* DropdownWithIcon Examples */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <Typography variant="h6" className="mb-4 text-gray-700">
            Icon Trigger Dropdowns
          </Typography>
          <div className="flex flex-wrap gap-4 items-center">
            <div>
              <Typography variant="b4" className="text-gray-600 mb-2">
                Filter Icon
              </Typography>
              <DropdownWithIcon
                options={multiOptions}
                selected={filterSelect}
                setSelected={setFilterSelect}
                search={true}
                multiple={true}
                width="325px"
                height="150px"
                trigger={
                  <RiFilterLine
                    className="hover:bg-gray-100 rounded p-1 w-5 h-5"
                    size={20}
                  />
                }
                dropdownText={`Filters (${filterSelect.length})`}
              />
            </div>

            <div>
              <Typography variant="b4" className="text-gray-600 mb-2">
                Calendar Icon
              </Typography>
              <DropdownWithIcon
                options={singleOptions}
                selected={singleSelect}
                setSelected={setSingleSelect}
                width="250px"
                trigger={
                  <RiCalendarLine
                    className="hover:bg-gray-100 rounded p-1"
                    size={20}
                  />
                }
                dropdownText="Date range"
              />
            </div>

            {/* <div>
              <Typography variant="b4" className="text-gray-600 mb-2">
                Location Icon
              </Typography>
              <DropdownWithIcon
                options={statusOptions}
                selected={statusSelect}
                setSelected={setStatusSelect}
                width="180px"
                trigger={
                  <RiMapPinLine
                    className="hover:bg-gray-100 rounded p-1"
                    size={20}
                  />
                }
                dropdownText="Location"
              />
            </div> */}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <Typography variant="h6" className="mb-4 text-gray-700">
            Custom Trigger Dropdowns
          </Typography>
          <div className="space-y-4">
            <div>
              <Typography variant="b4" className="text-gray-600 mb-2">
                Text Trigger
              </Typography>
              <DropdownWithIcon
                options={priorityOptions}
                selected={prioritySelect}
                setSelected={setPrioritySelect}
                search={true}
                multiple={true}
                width="325px"
                trigger={
                  <span className="ml-[-215px] px-2.5 py-1.5 bg-gray-100 rounded text-sm hover:bg-gray-200">
                    Select Priority
                  </span>
                }
              />
            </div>

            <div>
              <Typography variant="b4" className="text-gray-600 mb-2">
                Button Trigger
              </Typography>
              <DropdownWithIcon
                options={multiOptions}
                selected={multiSelect}
                setSelected={setMultiSelect}
                multiple={true}
                width="325px"
                trigger={
                  <div className="px-2.5 py-1 text-sm flex gap-1 bg-primary-600 border border-primary-600 w-[120px] text-white rounded-lg">
                    <RiSettings3Line size={14} className="mr-1 mt-0.5" />
                    <p>Categories</p>
                  </div>
                }
                position="left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Special Cases */}
      <section className="bg-white rounded-xl border border-gray-200 p-5">
        <Typography variant="h6" className="mb-4 text-gray-700">
          Special Cases
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Disabled Dropdown */}
          <div>
            <Typography variant="b4" className="text-gray-600 mb-2">
              Disabled Dropdown
            </Typography>
            <Dropdown
              options={singleOptions}
              selected={singleSelect}
              setSelected={setSingleSelect}
              dropdownText="Disabled dropdown"
              icon={<RiGlobalLine size={16} />}
              disabled={true}
              width="250px"
            />
          </div>

          {/* Dropdown with Position */}
          <div>
            <Typography variant="b4" className="text-gray-600 mb-2">
              Right Position
            </Typography>
            <DropdownWithIcon
              options={multiOptions}
              selected={multiSelect}
              setSelected={setMultiSelect}
              search={true}
              multiple={true}
              width="325px"
              position="top"
              trigger={
                <RiFilterLine
                  className="hover:bg-gray-100 rounded p-1"
                  size={20}
                />
              }
            />
          </div>

          {/* Dropdown with Tooltip */}
          <div>
            <Typography variant="b4" className="text-gray-600 mb-2">
              With Tooltip Info
            </Typography>
            <Dropdown
              options={multiOptions}
              selected={multiSelect}
              setSelected={setMultiSelect}
              dropdownText="Options with info"
              multiple={true}
              width="325px"
            />
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="bg-white rounded-xl border border-gray-200 p-5">
        <Typography variant="h6" className="mb-4 text-gray-700">
          Code Examples
        </Typography>
        <TabsContainer value="react">
          <TabList
            onChange={handleTabChange}
            ariaLabel="Code examples"
            className="border-b border-gray-200 mb-4"
            box
          >
            <Tab
              onChange={handleTabChange}
              label="React"
              value="react"
              selectedTabValue={activeTab}
            />
            <Tab
              onChange={handleTabChange}
              label="Next.js"
              value="next"
              selectedTabValue={activeTab}
            />
          </TabList>

          <TabPanel value="react" currentValue="react">
            <CodeSnippet
              title="Basic Dropdown Implementation"
              code={`import { useState } from "react";
import { Dropdown, DropdownWithIcon } from "@atomos_tech/genesis";
import { RiFilterLine, RiGlobalLine } from "@remixicon/react";

const DropdownExamples = () => {
  const [singleSelect, setSingleSelect] = useState([]);
  const [multiSelect, setMultiSelect] = useState([]);

  const options = [
    { label: "English", value: "en", info: "English language" },
    { label: "Spanish", value: "es", info: "Español" },
    { label: "French", value: "fr", info: "Français" },
    { label: "German", value: "de", info: "Deutsch" },
    { label: "Japanese", value: "ja", info: "日本語", disabledOption: true },
  ];

  const multiOptions = [
    { label: "Design", value: "design", info: "UI/UX Design" },
    { label: "Development", value: "development", info: "Software Development" },
    { label: "Marketing", value: "marketing", info: "Digital Marketing" },
    { label: "Sales", value: "sales", info: "Business Development" },
    { label: "Support", value: "support", info: "Customer Service" },
  ];

  return (
    <div className="space-y-4">
      {/* Single Select Dropdown */}
      <Dropdown
        options={options}
        selected={singleSelect}
        setSelected={setSingleSelect}
        dropdownText="Select language"
        icon={<RiGlobalLine size={16} />}
        info="Choose your preferred language"
        width="250px"
      />

      {/* Multi-Select Dropdown */}
      <Dropdown
        options={multiOptions}
        selected={multiSelect}
        setSelected={setMultiSelect}
        dropdownText="Select categories"
        multiple={true}
        search={true}
        width="250px"
        dropdownFooter={true}
        onApply={() => console.log("Applied")}
      />

      {/* Icon Trigger Dropdown */}
      <DropdownWithIcon
        options={multiOptions}
        selected={multiSelect}
        setSelected={setMultiSelect}
        search={true}
        multiple={true}
        width="200px"
        trigger={
          <RiFilterLine
            className="hover:bg-gray-100 rounded p-1"
            size={20}
          />
        }
        dropdownText="Filters"
      />
    </div>
  );
};`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue="react">
            <CodeSnippet
              title="Basic Dropdown Implementation"
              code={`"use client";
import { useState } from "react";
import { Dropdown, DropdownWithIcon } from "@atomos_tech/genesis";
import { RiFilterLine, RiGlobalLine } from "@remixicon/react";

const DropdownExamples = () => {
  const [singleSelect, setSingleSelect] = useState([]);
  const [multiSelect, setMultiSelect] = useState([]);

  const options = [
    { label: "English", value: "en", info: "English language" },
    { label: "Spanish", value: "es", info: "Español" },
    { label: "French", value: "fr", info: "Français" },
    { label: "German", value: "de", info: "Deutsch" },
    { label: "Japanese", value: "ja", info: "日本語", disabledOption: true },
  ];

  const multiOptions = [
    { label: "Design", value: "design", info: "UI/UX Design" },
    { label: "Development", value: "development", info: "Software Development" },
    { label: "Marketing", value: "marketing", info: "Digital Marketing" },
    { label: "Sales", value: "sales", info: "Business Development" },
    { label: "Support", value: "support", info: "Customer Service" },
  ];

  return (
    <div className="space-y-4">
      {/* Single Select Dropdown */}
      <Dropdown
        options={options}
        selected={singleSelect}
        setSelected={setSingleSelect}
        dropdownText="Select language"
        icon={<RiGlobalLine size={16} />}
        info="Choose your preferred language"
        width="250px"
      />

      {/* Multi-Select Dropdown */}
      <Dropdown
        options={multiOptions}
        selected={multiSelect}
        setSelected={setMultiSelect}
        dropdownText="Select categories"
        multiple={true}
        search={true}
        width="250px"
        dropdownFooter={true}
        onApply={() => console.log("Applied")}
      />

      {/* Icon Trigger Dropdown */}
      <DropdownWithIcon
        options={multiOptions}
        selected={multiSelect}
        setSelected={setMultiSelect}
        search={true}
        multiple={true}
        width="200px"
        trigger={
          <RiFilterLine
            className="hover:bg-gray-100 rounded p-1"
            size={20}
          />
        }
        dropdownText="Filters"
      />
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

export default DropdownExampleSection;
