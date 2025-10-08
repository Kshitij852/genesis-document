"use client";

import React, { useState } from "react";
import {
  Input,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
  Label,
  HelperText,
} from "@atomos_tech/genesis";
import { RiMailLine, RiListCheck } from "react-icons/ri";
import CodeSnippet from "../../button/_components/CodeSnippet";

const InputExampleSection = () => {
  const [nestedTabs, setNestedTabs] = useState({
    sizes: "react",
    states: "react",
    withHelper: "react",
  });

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

        {/* Input examples */}
        <div className="space-y-6 mb-6">
          <div className="flex flex-col gap-1">
            <Label htmlFor="email-basic">Email address</Label>
            <Input size="sm" type="email" placeholder="Enter your email" />
            <HelperText className="text-sm text-gray-500">
              {` We'll never share your email.`}
            </HelperText>
          </div>

          <div className="flex flex-col gap-1">
            <Label required htmlFor="first-name">
              First Name
            </Label>
            <Input size="lg" type="text" placeholder="Enter first name" />
            <HelperText size="sm">First Name is required.</HelperText>
          </div>
        </div>

        {/* Code Tabs */}
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
              title="Input Sizes with Text"
              code={`<div className="flex flex-col gap-1">
  <Label htmlFor="email">Email address</Label>
  <Input size="sm" type="email" placeholder="Enter your email" />
  <HelperText className="text-sm text-gray-500">
    We'll never share your email.
  </HelperText>
</div>

<div className="flex flex-col gap-1">
  <Label required htmlFor="first-name">First Name</Label>
  <Input size="lg" type="text" placeholder="Enter first name" />
  <HelperText size="sm">First Name is required.</HelperText>
</div>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.sizes}>
            <CodeSnippet
              title="Input Sizes with Text"
              code={`<div className="flex flex-col gap-1">
  <Label htmlFor="email">Email address</Label>
  <Input size="sm" type="email" placeholder="Enter your email" />
  <HelperText className="text-sm text-gray-500">
    We'll never share your email.
  </HelperText>
</div>

<div className="flex flex-col gap-1">
  <Label required htmlFor="first-name">First Name</Label>
  <Input size="lg" type="text" placeholder="Enter first name" />
  <HelperText size="sm">First Name is required.</HelperText>
</div>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* States Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">States</h2>

        <div className="space-y-6 mb-6">
          {/* Start icon */}
          <Input
            type="text"
            startIcon={<RiMailLine size={16} />}
            size="lg"
            placeholder="olivia@untitledui.com"
          />

          {/* Disabled */}
          <Input
            type="text"
            disabled
            size="lg"
            placeholder="olivia@untitledui.com"
          />

          {/* Error */}
          <div className="flex flex-col gap-2">
            <Label required htmlFor="email">
              Email
            </Label>
            <Input
              size="lg"
              type="text"
              endIcon={<RiListCheck size={16} className="text-error-500" />}
              className="focus-within:border-error-500"
              placeholder="olivia@untitledui.com"
            />
            <HelperText error>Please enter a valid email address</HelperText>
          </div>
        </div>

        {/* Code Tabs */}
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
              title="Input States"
              code={`{/* With start icon */}
<Input
  type="text"
  startIcon={<RiMailLine size={16} />}
  size="lg"
  placeholder="olivia@untitledui.com"
/>

{/* Disabled state */}
<Input
  type="text"
  disabled
  size="lg"
  placeholder="olivia@untitledui.com"
/>

{/* Error state */}
<div className="flex flex-col gap-2">
  <Label required htmlFor="email">Email</Label>
  <Input
    size="lg"
    type="text"
    endIcon={<RiListCheck size={16} className="text-error-500" />}
    className="focus-within:border-error-500"
    placeholder="olivia@untitledui.com"
  />
  <HelperText error>Please enter a valid email address</HelperText>
</div>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.states}>
            <CodeSnippet
              title="Input States"
              code={`{/* With start icon */}
<Input
  type="text"
  startIcon={<RiMailLine size={16} />}
  size="lg"
  placeholder="olivia@untitledui.com"
/>

{/* Disabled state */}
<Input
  type="text"
  disabled
  size="lg"
  placeholder="olivia@untitledui.com"
/>

{/* Error state */}
<div className="flex flex-col gap-2">
  <Label required htmlFor="email">Email</Label>
  <Input
    size="lg"
    type="text"
    endIcon={<RiListCheck size={16} className="text-error-500" />}
    className="focus-within:border-error-500"
    placeholder="olivia@untitledui.com"
  />
  <HelperText error>Please enter a valid email address</HelperText>
</div>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>
    </div>
  );
};

export default InputExampleSection;
