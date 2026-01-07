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
  TableRow,
  TableDataCell,
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
} from "@atomos_tech/genesis";
import { RiMailLine, RiListCheck } from "react-icons/ri";
import CodeSnippet from "../../button/_components/CodeSnippet";
import { cn } from "@/utils/util";

const NormalInput = () => {
  const [nestedTabs, setNestedTabs] = useState({
    sizes: "react",
    states: "react",
  });

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    // Validate the input value
    if (value.length < 5) {
      setError("Input must be at least 5 characters long");
    } else {
      setError("");
    }
  };

  return (
    <div>
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

            {/* Error with icon */}
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
              <HelperText size="sm" error>
                Please enter a valid email address
              </HelperText>
            </div>

            {/* Interactive Error State */}
            <div className="flex flex-col gap-2">
              <Label required htmlFor="email-validation">
                Email Validation
              </Label>
              <Input
                size="lg"
                value={inputValue}
                type="text"
                onChange={handleChange}
                endIcon={
                  <RiListCheck
                    size={16}
                    className={cn(error && "text-error-500")}
                  />
                }
                className={cn(error && "focus-within:border-error-500")}
                placeholder="olivia@untitledui.com"
              />
              {error && (
                <HelperText size="sm" className="text-error-500">
                  {error}
                </HelperText>
              )}
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
                code={`import { useState } from "react";
import { cn } from "@atomos_tech/genesis";
import { RiMailLine, RiListCheck } from "react-icons/ri";

function InputExample() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    // Validate the input value
    if (value.length < 5) {
      setError("Input must be at least 5 characters long");
    } else {
      setError("");
    }
  };

  return (
    <div className="space-y-6">
      {/* With start icon */}
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

      {/* Error state with icon */}
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
      </div>

      {/* Interactive error state */}
      <div className="flex flex-col gap-2">
        <Label required htmlFor="email-validation">
          Email Validation
        </Label>
        <Input
          size="lg"
          value={inputValue}
          type="text"
          onChange={handleChange}
          endIcon={
            <RiListCheck
              size={16}
              className={cn(error && "text-error-500")}
            />
          }
          className={cn(error && "focus-within:border-error-500")}
          placeholder="olivia@untitledui.com"
        />
        {error && (
          <HelperText className="text-error-500">{error}</HelperText>
        )}
      </div>
    </div>
  );
}`}
              />
            </TabPanel>

            <TabPanel value="next" currentValue={nestedTabs.states}>
              <CodeSnippet
                title="Input States"
                code={`"use client";
import { useState } from "react";
import { cn } from "@atomos_tech/genesis";
import { RiMailLine, RiListCheck } from "react-icons/ri";

function InputExample() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    // Validate the input value
    if (value.length < 5) {
      setError("Input must be at least 5 characters long");
    } else {
      setError("");
    }
  };

  return (
    <div className="space-y-6">
      {/* With start icon */}
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

      {/* Error state with icon */}
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
      </div>

      {/* Interactive error state */}
      <div className="flex flex-col gap-2">
        <Label required htmlFor="email-validation">
          Email Validation
        </Label>
        <Input
          size="lg"
          value={inputValue}
          type="text"
          onChange={handleChange}
          endIcon={
            <RiListCheck
              size={16}
              className={cn(error && "text-error-500")}
            />
          }
          className={cn(error && "focus-within:border-error-500")}
          placeholder="olivia@untitledui.com"
        />
        {error && (
          <HelperText className="text-error-500">{error}</HelperText>
        )}
      </div>
    </div>
  );
}`}
              />
            </TabPanel>
          </TabsContainer>
        </section>
      </div>

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
              {/* size */}
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    size
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    {`"sm" | "lg"`}
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    {`"sm"`}
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Controls the size of the input field
                </TableDataCell>
              </TableRow>

              {/* disabled */}
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
                  When true, the input becomes non-interactive
                </TableDataCell>
              </TableRow>

              {/* startIcon */}
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    startIcon
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    ReactNode
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    -
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Icon to display at the start of the input field
                </TableDataCell>
              </TableRow>

              {/* endIcon */}
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    endIcon
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    ReactNode
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    -
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Icon to display at the end of the input field
                </TableDataCell>
              </TableRow>

              {/* error */}
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    error
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    boolean | string
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    false
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Displays an error state and message when provided
                </TableDataCell>
              </TableRow>

              {/* width */}
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    width
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    -
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    -{" "}
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Controls the width of the input and is customizable
                </TableDataCell>
              </TableRow>

              {/* withLabel */}
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    withLabel
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <div className="flex items-center gap-1">
                    <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono border-r border-purple-200">
                      Input
                    </code>
                    <span className="text-gray-400 mx-1">+</span>
                    <code className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs font-mono border-l border-green-200">
                      Label
                    </code>
                    <span className="text-gray-400 mx-1">+</span>
                    <code className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs font-mono border-l border-green-200">
                      HelperText
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
                      and{" "}
                      <code className="bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded text-xs font-mono">
                        HelperText
                      </code>{" "}
                      components for accessible form labels and helper text.
                    </p>
                    <div className="bg-gray-50 rounded border border-gray-200 px-3 py-2">
                      <code className="text-xs text-gray-700 font-mono block">
                        &lt;div className=&quot;flex flex-col gap-2&quot;&gt;
                        <br />
                        &nbsp;&nbsp;&lt;Label required
                        htmlFor=&quot;email&quot;&gt;Email&lt;/Label&gt;
                        <br />
                        &nbsp;&nbsp;&lt;Input id=&quot;email&quot;
                        type=&quot;text&quot; placeholder=&quot;Enter
                        email&quot; /&gt;
                        <br />
                        &nbsp;&nbsp;&lt;HelperText&gt;This is a helper
                        text&lt;/HelperText&gt;
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

export default NormalInput;
