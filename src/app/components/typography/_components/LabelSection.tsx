import {
  Input,
  Label,
  Tab,
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
  TabList,
  TabPanel,
  TabsContainer,
} from "@atomos_tech/genesis";
import React, { useState } from "react";

import CodeSnippet from "../../button/_components/CodeSnippet";

const LabelSection = () => {
  const [value, setValue] = useState("1");

  const handleTabChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      {" "}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-5 items-start">
        {/* Label Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Label</h2>
          <p className="text-gray-600 leading-relaxed">
            The{" "}
            <code className="text-blue-600 bg-blue-50 px-1 rounded">Label</code>{" "}
            component identifies input fields and improves accessibility by
            linking text descriptions to inputs. Use the{" "}
            <code className="text-purple-600 bg-purple-50 px-1 rounded">
              required
            </code>{" "}
            prop to indicate mandatory fields.
          </p>

          <div className="space-y-5">
            <div>
              <Label size={"lg"} htmlFor="fullName">
                Full Name
              </Label>
              <Input type="text" placeholder="John Doe" />
            </div>
            <div>
              <Label className="text-gray-500" required>
                Email Address
              </Label>
              <Input type="email" placeholder="john@example.com" />
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
                  title="Label Example"
                  code={`<Label size={'lg'} htmlFor="fullName">Full Name</Label>
<Input type="text" placeholder="John Doe" />

<Label required>Email Address</Label>
<Input type="email" placeholder="john@example.com" />`}
                />
              </div>
            </TabPanel>

            <TabPanel value="2" currentValue={value}>
              <div className="mt-4">
                <CodeSnippet
                  title="Label Example"
                  code={`<Label size={'lg'} htmlFor="fullName">Full Name</Label>
<Input type="text" placeholder="John Doe" />

<Label required>Email Address</Label>
<Input type="email" placeholder="john@example.com" />`}
                />
              </div>
            </TabPanel>
          </TabsContainer>
        </div>
      </section>
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
                <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                  "sm" | "md" | "lg"
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                  "md"
                </code>
              </TableDataCell>
              <TableDataCell className="text-gray-700">
                Adjusts the label text size to match input size for consistent
                visual hierarchy.
              </TableDataCell>
            </TableRow>

            {/* required prop */}
            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  required
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
                Marks the field as mandatory and displays an asterisk to
                indicate required input.
              </TableDataCell>
            </TableRow>

            {/* htmlFor prop */}
            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  htmlFor
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
                Links the label to a corresponding input element by matching the
                input’s <code>id</code> value. <br /> Enhances accessibility for
                screen readers.
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
                Allows you to apply custom styling such as{" "}
                <code>text-gray-500</code>, <code>font-semibold</code> <br /> or{" "}
                <code>tracking-wide</code> for more control over label
                appearance.
              </TableDataCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LabelSection;
