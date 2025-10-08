import {
  HelperText,
  Input,
  Label,
  Tab,
  TabList,
  TabPanel,
  TabsContainer,
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "@atomos_tech/genesis";
import { RiErrorWarningLine } from "@remixicon/react";
import React, { useState } from "react";

import CodeSnippet from "../../button/_components/CodeSnippet";

const HelpertextSection = () => {
  const [value, setValue] = useState("1");

  const handleTabChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 py-5 items-start">
        {/* Helper Text Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Helper Text</h2>
          <p className="text-gray-600 leading-relaxed">
            The{" "}
            <code className="text-blue-600 bg-blue-50 px-1 rounded">
              HelperText
            </code>{" "}
            component provides contextual feedback below input fields — helping
            users understand validation rules, hints, or success messages. It
            can display plain text or icons for visual emphasis.
          </p>

          <div className="space-y-5">
            {/* Hint Example */}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
              <HelperText size="sm" className="text-error-600">
                Email should always be unique.
              </HelperText>
            </div>

            {/* Error Example */}
            <div>
              <Label htmlFor="password" required>
                Password
              </Label>
              <Input id="password" type="password" placeholder="••••••••" />
              <HelperText size="sm">
                <div className="flex items-center gap-1">
                  <RiErrorWarningLine className="text-red-500" size={16} />
                  Password must be at least 8 characters.
                </div>
              </HelperText>
            </div>

            {/* Conditional Error Rendering */}
            <div className="pt-2">
              <p className="text-gray-600 text-sm italic">
                You can also conditionally render errors:
              </p>
              <pre className="bg-gray-50 text-gray-700 text-sm rounded-md p-2 border border-gray-200 mt-1">
                {"{error && <HelperText error>{error}</HelperText>}"}
              </pre>
            </div>
          </div>

          {/* React / Next Nested Tabs */}
          <TabsContainer value={value}>
            <TabList
              onChange={handleTabChange}
              ariaLabel="React and Next tabs"
              className="border-b border-gray-200 mt-4"
              box={true}
            >
              <Tab
                label="React"
                value="1"
                onChange={handleTabChange}
                selectedTabValue={value}
              />
              <Tab
                label="Next"
                value="2"
                onChange={handleTabChange}
                selectedTabValue={value}
              />
            </TabList>

            <TabPanel value="1" currentValue={value}>
              <div className="mt-4">
                <CodeSnippet
                  title="HelperText Example (React)"
                  code={`<div>
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="john@example.com" />
  <HelperText size="sm" className="text-error-600">Email should always be unique.</HelperText>
</div>

  <Label htmlFor="password" required>Password</Label>
  <Input id="password" type="password" placeholder="••••••••" />
  <HelperText size="sm">
    <div className="flex items-center gap-1">
      <RiErrorWarningLine className="text-red-500" size={16} />
      Password must be at least 8 characters.
    </div>
  </HelperText>

// Conditional rendering
{error && <HelperText error>{error}</HelperText>}`}
                />
              </div>
            </TabPanel>

            <TabPanel value="2" currentValue={value}>
              <div className="mt-4">
                <CodeSnippet
                  title="HelperText Example (Next)"
                  code={`<div>
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="john@example.com" />
  <HelperText size="sm" className="text-error-600">Email should always be unique.</HelperText>
</div>

<div>
  <Label htmlFor="password" required>Password</Label>
  <Input id="password" type="password" placeholder="••••••••" />
  <HelperText size="sm">
    <div className="flex items-center gap-1">
      <RiErrorWarningLine className="text-red-500" size={16} />
      Password must be at least 8 characters.
    </div>
  </HelperText>
</div>

// Conditional rendering
{error && <HelperText error>{error}</HelperText>}`}
                />
              </div>
            </TabPanel>
          </TabsContainer>
        </div>
      </section>

      {/* Props Table */}
      <h3 className="font-semibold text-display-xs">Props</h3>
      <div className="overflow-auto shadow-sm rounded-xl my-3">
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
            {/* size prop */}
            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  size
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs text-nowrap font-mono">
                  {`"sm" | "lg"`}
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                  {`"sm"`}
                </code>
              </TableDataCell>
              <TableDataCell className="text-gray-700">
                Defines the text size of the helper message. Use <code>sm</code>{" "}
                for subtle inline hints <br /> and <code>lg</code> for prominent
                guidance.
              </TableDataCell>
            </TableRow>

            {/* error prop */}
            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  error
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                  boolean
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                  false
                </code>
              </TableDataCell>
              <TableDataCell className="text-gray-700">
                Displays the helper text in an error style (e.g., red color) to
                indicate validation issues. <br /> Commonly used with
                conditional rendering:{" "}
                <code>{`{error && <HelperText error>{error}</HelperText>}`}</code>
                .
              </TableDataCell>
            </TableRow>

            {/* className prop */}
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
              <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                  -
                </code>
              </TableDataCell>
              <TableDataCell className="text-gray-700">
                Custom class names to extend or override default styles. <br />{" "}
                For example:{" "}
                <code>text-gray-500 font-medium tracking-wide</code>.
              </TableDataCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default HelpertextSection;
