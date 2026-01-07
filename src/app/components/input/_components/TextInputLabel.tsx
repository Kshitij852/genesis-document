"use client";

import React, { useState } from "react";
import {
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
  HelperText,
  TextInputWithLabel,
  TableDataCell,
  TableRow,
  TableHead,
  Table,
  TableHeadCell,
  TableBody,
} from "@atomos_tech/genesis";
import CodeSnippet from "../../button/_components/CodeSnippet";

const TextInputLabel = () => {
  const [nestedTabs, setNestedTabs] = useState({
    tagsOtp: "react",
  });

  const [tags, setTags] = useState<string[]>([]);

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 my-4 items-start">
        <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Text Input With Label (Tags Input)
          </h2>

          <div className="space-y-4 mb-6">
            <div className="space-y-2">
              <TextInputWithLabel
                tags={tags}
                setTags={setTags}
                placeholder="Add tags"
                intent="primary"
              />
              <HelperText size="sm" className="mt-1.5">
                Note: Paste comma separated values
              </HelperText>
            </div>

            {/* Current Tags Display */}
            {tags.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Current Tags ({tags.length}):
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 test rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                    >
                      {tag}
                      <button
                        onClick={() => {
                          const newTags = [...tags];
                          newTags.splice(index, 1);
                          setTags(newTags);
                        }}
                        className="ml-2 text-primary-600 hover:text-primary-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Code Tabs */}
          <TabsContainer value={nestedTabs.tagsOtp}>
            <TabList
              onChange={(val) => handleNestedTabChanges("tagsOtp", val)}
              ariaLabel="React and Next tabs"
              className="border-b border-gray-200 mb-4"
              box
            >
              <Tab
                label="React"
                value="react"
                selectedTabValue={nestedTabs.tagsOtp}
                onChange={(val) => handleNestedTabChanges("tagsOtp", val)}
              />
              <Tab
                label="Next"
                value="next"
                selectedTabValue={nestedTabs.tagsOtp}
                onChange={(val) => handleNestedTabChanges("tagsOtp", val)}
              />
            </TabList>

            <TabPanel value="react" currentValue={nestedTabs.tagsOtp}>
              <CodeSnippet
                title="Text Input With Label (Tags Input)"
                code={`import { useState } from "react";
import { TextInputWithLabel, HelperText } from "@atomos_tech/genesis";

function App() {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <div className="space-y-2 w-1/2">
      <TextInputWithLabel
        tags={tags}
        setTags={setTags}
        placeholder="Add tags"
        intent="primary"
      />
      <HelperText>Note: Paste comma separated values</HelperText>

      {/* Display current tags */}
      {tags.length > 0 && (
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Current Tags ({tags.length}):
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
              >
                {tag}
                <button
                  onClick={() => {
                    const newTags = [...tags];
                    newTags.splice(index, 1);
                    setTags(newTags);
                  }}
                  className="ml-2 text-primary-600 hover:text-primary-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}`}
              />
            </TabPanel>

            <TabPanel value="next" currentValue={nestedTabs.tagsOtp}>
              <CodeSnippet
                title="Text Input With Label (Tags Input)"
                code={`"use client";
import { useState } from "react";
import { TextInputWithLabel, HelperText } from "@atomos_tech/genesis";

function Page() {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <div className="space-y-2 w-1/2">
      <TextInputWithLabel
        tags={tags}
        setTags={setTags}
        placeholder="Add tags"
        intent="primary"
      />
      <HelperText>Note: Paste comma separated values</HelperText>

      {/* Display current tags */}
      {tags.length > 0 && (
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Current Tags ({tags.length}):
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
              >
                {tag}
                <button
                  onClick={() => {
                    const newTags = [...tags];
                    newTags.splice(index, 1);
                    setTags(newTags);
                  }}
                  className="ml-2 text-primary-600 hover:text-primary-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}`}
              />
            </TabPanel>
          </TabsContainer>
        </section>
      </div>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          TextInputWithLabel Props
        </h2>

        <div className="overflow-auto shadow-sm rounded-xl border border-gray-200">
          <Table>
            <TableHead>
              <TableRow className="text-left bg-gray-50">
                <TableHeadCell className="text-sm font-semibold text-gray-700">
                  Prop
                </TableHeadCell>
                <TableHeadCell className="text-sm font-semibold text-gray-700">
                  Type
                </TableHeadCell>
                <TableHeadCell className="text-sm font-semibold text-gray-700">
                  Default
                </TableHeadCell>
                <TableHeadCell className="text-sm font-semibold text-gray-700">
                  Description
                </TableHeadCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {/* tags */}
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    tags
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    string[]
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    []
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Array of tags currently displayed. Managed by parent component
                  state.
                </TableDataCell>
              </TableRow>

              {/* setTags */}
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    setTags
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    {`(tags: string[]) => void`}
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    -
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  State setter function for updating tags. Typically from
                  useState hook.
                </TableDataCell>
              </TableRow>

              {/* placeholder */}
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    placeholder
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    string
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    "Add tags"
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Placeholder text displayed in the input field.
                </TableDataCell>
              </TableRow>

              {/* intent */}
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    intent
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="inline-block bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono max-w-[260px]">
                    {`"default" | "primary" | "success" | "warning" | "error" | "info"`}
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    "default"
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Visual intent of the tags input. Affects tag colors and input
                  styling.
                </TableDataCell>
              </TableRow>

              {/* label */}
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    label
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    string
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    -
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Optional label text displayed above the input field.
                </TableDataCell>
              </TableRow>

              {/* helperText */}
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    helperText
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    string
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    -
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Optional helper text displayed below the input field.
                </TableDataCell>
              </TableRow>

              {/* separator */}
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    separator
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    string
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    ","
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Character used to separate tags when pasting or typing
                  multiple values.
                </TableDataCell>
              </TableRow>

              {/* className */}
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    className
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    string
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    -
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Additional CSS classes for custom styling the component.
                </TableDataCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
};

export default TextInputLabel;
