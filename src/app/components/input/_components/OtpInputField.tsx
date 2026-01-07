"use client";

import React, { useState } from "react";
import {
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
  Label,
  HelperText,
  OTPInput,
  TableDataCell,
  TableRow,
  Table,
  TableBody,
  TableHeadCell,
  TableHead,
} from "@atomos_tech/genesis";
import CodeSnippet from "../../button/_components/CodeSnippet";

const OtpInputComponent = () => {
  const [nestedTabs, setNestedTabs] = useState({
    tagsOtp: "react",
  });

  const [otp, setOtp] = useState<string>("");

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 my-4 items-start">
        <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            OTP Input Field
          </h2>

          <div className="space-y-6 mb-6">
            <div className="space-y-4">
              {/* Text OTP */}
              <div>
                <Label htmlFor="otp-text">Text OTP (4 digits)</Label>
                <div className="mt-1">
                  <OTPInput type="text" length={4} onChange={setOtp} />
                </div>
              </div>

              {/* Number OTP */}
              <div>
                <Label htmlFor="otp-number">Number OTP (5 digits)</Label>
                <div className="mt-1">
                  <OTPInput type="number" length={5} onChange={setOtp} />
                </div>
              </div>

              {/* Password OTP */}
              <div>
                <Label htmlFor="otp-password">Password OTP (6 digits)</Label>
                <div className="mt-1">
                  <OTPInput type="password" length={6} onChange={setOtp} />
                </div>
              </div>

              {/* Current OTP Display */}
              <div className="pt-4 border-t border-gray-200">
                <Label>Current OTP Value</Label>
                <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                  <p className="font-mono text-lg font-medium text-gray-900">
                    {otp || "No OTP entered yet"}
                  </p>
                </div>
              </div>

              <HelperText>
                Note: You can also paste values into OTP fields
              </HelperText>
            </div>
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
                title="OTP Input Field"
                code={`import { useState } from "react";
import { OTPInput, Label, HelperText } from "@atomos_tech/genesis";

function App() {
  const [otp, setOtp] = useState("");

  return (
    <div className="space-y-4">
      {/* Text OTP */}
      <div>
        <Label htmlFor="otp-text">Text OTP (4 digits)</Label>
        <div className="mt-1">
          <OTPInput type="text" length={4} onChange={setOtp} />
        </div>
      </div>

      {/* Number OTP */}
      <div>
        <Label htmlFor="otp-number">Number OTP (5 digits)</Label>
        <div className="mt-1">
          <OTPInput type="number" length={5} onChange={setOtp} />
        </div>
      </div>

      {/* Password OTP */}
      <div>
        <Label htmlFor="otp-password">Password OTP (6 digits)</Label>
        <div className="mt-1">
          <OTPInput type="password" length={6} onChange={setOtp} />
        </div>
      </div>

      {/* Current OTP Display */}
      <div className="pt-4 border-t border-gray-200">
        <Label>Current OTP Value</Label>
        <div className="mt-2 p-3 bg-gray-50 rounded-lg">
          <p className="font-mono text-lg font-medium text-gray-900">
            {otp || "No OTP entered yet"}
          </p>
        </div>
      </div>

      <HelperText>Note: You can also paste values into OTP fields</HelperText>
    </div>
  );
}`}
              />
            </TabPanel>

            <TabPanel value="next" currentValue={nestedTabs.tagsOtp}>
              <CodeSnippet
                title="OTP Input Field"
                code={`"use client";
import { useState } from "react";
import { OTPInput, Label, HelperText } from "@atomos_tech/genesis";

function Page() {
  const [otp, setOtp] = useState("");

  return (
    <div className="space-y-4">
      {/* Text OTP */}
      <div>
        <Label htmlFor="otp-text">Text OTP (4 digits)</Label>
        <div className="mt-1">
          <OTPInput type="text" length={4} onChange={setOtp} />
        </div>
      </div>

      {/* Number OTP */}
      <div>
        <Label htmlFor="otp-number">Number OTP (5 digits)</Label>
        <div className="mt-1">
          <OTPInput type="number" length={5} onChange={setOtp} />
        </div>
      </div>

      {/* Password OTP */}
      <div>
        <Label htmlFor="otp-password">Password OTP (6 digits)</Label>
        <div className="mt-1">
          <OTPInput type="password" length={6} onChange={setOtp} />
        </div>
      </div>

      {/* Current OTP Display */}
      <div className="pt-4 border-t border-gray-200">
        <Label>Current OTP Value</Label>
        <div className="mt-2 p-3 bg-gray-50 rounded-lg">
          <p className="font-mono text-lg font-medium text-gray-900">
            {otp || "No OTP entered yet"}
          </p>
        </div>
      </div>

      <HelperText>Note: You can also paste values into OTP fields</HelperText>
    </div>
  );
}`}
              />
            </TabPanel>
          </TabsContainer>
        </section>
      </div>

      {/* OTPInput Props Table */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">OTPInput Props</h2>

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
              {/* type */}
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    type
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    {`"text" | "number" | "password"`}
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    "text"
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Type of OTP input. "number" restricts to numeric values,
                  "password" hides input.
                </TableDataCell>
              </TableRow>

              {/* length */}
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    length
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    number
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    6
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Number of OTP digits/characters. Typically 4-8 for most use
                  cases.
                </TableDataCell>
              </TableRow>

              {/* onChange */}
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    onChange
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    {`(value: string) => void`}
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    -
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Callback function when OTP value changes. Returns the complete
                  OTP string.
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
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
};

export default OtpInputComponent;
