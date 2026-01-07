"use client";

import React, { useState } from "react";
import {
  Callout,
  Button,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
} from "@atomos_tech/genesis";
import {
  RiInformationLine,
  RiCloseLine,
  RiCheckLine,
  RiAlertLine,
  RiErrorWarningLine,
  RiExternalLinkLine,
  RiDownloadLine,
} from "@remixicon/react";
import CodeSnippet from "../../button/_components/CodeSnippet";

const CalloutExampleSection = () => {
  const [nestedTabs, setNestedTabs] = useState({
    variants: "react",
    realworld: "react",
  });

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-4 items-start">
      {/* Variants & Sizes Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Variants & Sizes
        </h2>

        {/* Filled Variant Examples */}
        <div className="flex flex-col gap-6 mb-6">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Filled Variant
            </h3>
            <div className="space-y-3">
              <Callout
                size={"xs"}
                startIcon={<RiInformationLine size={16} />}
                endIcon={<RiCloseLine size={16} />}
              >
                Access denied. Please contact the network administrator to view
                this page.
              </Callout>
              <Callout
                size={"sm"}
                intent={"warning"}
                startIcon={<RiAlertLine size={18} />}
                endIcon={<RiCloseLine size={18} />}
              >
                Access denied. Please contact the network administrator to view
                this page.
              </Callout>
              <Callout
                size={"md"}
                intent={"error"}
                startIcon={<RiErrorWarningLine size={20} />}
                endIcon={<RiCloseLine size={20} />}
              >
                Access denied. Please contact the network administrator to view
                this page.
              </Callout>
              <Callout
                size={"lg"}
                intent={"success"}
                startIcon={<RiCheckLine size={22} />}
                endIcon={<RiCloseLine size={22} />}
              >
                Access denied. Please contact the network administrator to view
                this page.
              </Callout>
              <Callout
                size={"lg"}
                intent={"default"}
                startIcon={<RiInformationLine size={22} />}
                endIcon={<RiCloseLine size={22} />}
              >
                Access denied. Please contact the network administrator to view
                this page.
              </Callout>
            </div>
          </div>

          {/* Outlined Variant Examples */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Outlined Variant
            </h3>
            <div className="space-y-3">
              <Callout
                size={"xs"}
                variant={"outlined"}
                startIcon={<RiInformationLine size={16} />}
                endIcon={<RiCloseLine size={16} />}
              >
                Access denied. Please contact the network administrator to view
                this page.
              </Callout>
              <Callout
                size={"sm"}
                variant={"outlined"}
                intent={"warning"}
                startIcon={<RiAlertLine size={18} />}
                endIcon={<RiCloseLine size={18} />}
              >
                Access denied. Please contact the network administrator to view
                this page.
              </Callout>
              <Callout
                size={"md"}
                variant={"outlined"}
                intent={"error"}
                startIcon={<RiErrorWarningLine size={20} />}
                endIcon={<RiCloseLine size={20} />}
              >
                Access denied. Please contact the network administrator to view
                this page.
              </Callout>
              <Callout
                size={"lg"}
                variant={"outlined"}
                intent={"success"}
                startIcon={<RiCheckLine size={22} />}
                endIcon={
                  <Button
                    size={"sm"}
                    intent={"success"}
                    className="whitespace-nowrap"
                  >
                    Contact Admin
                  </Button>
                }
              >
                Access denied. Please contact the network administrator to view
                this page.
              </Callout>
              <Callout
                size={"lg"}
                variant={"outlined"}
                intent={"default"}
                startIcon={<RiInformationLine size={22} />}
                endIcon={<RiCloseLine size={22} />}
              >
                Access denied. Please contact the network administrator to view
                this page.
              </Callout>
            </div>
          </div>
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
              title="Callout Variants & Sizes"
              code={`import { Callout, Button } from "@atomos_tech/genesis";
import { RiInformationLine, RiCloseLine, RiAlertLine, RiErrorWarningLine, RiCheckLine } from "@remixicon/react";

function App() {
  return (
    <div className="space-y-4">
      {/* Filled Variant */}
      <h3 className="text-sm font-medium">Filled Variant</h3>
      <Callout
        size="xs"
        startIcon={<RiInformationLine size={16} />}
        endIcon={<RiCloseLine size={16} />}
      >
        Access denied. Please contact the network administrator.
      </Callout>

      <Callout
        size="sm"
        intent="warning"
        startIcon={<RiAlertLine size={18} />}
        endIcon={<RiCloseLine size={18} />}
      >
        Access denied. Please contact the network administrator.
      </Callout>

      <Callout
        size="md"
        intent="error"
        startIcon={<RiErrorWarningLine size={20} />}
        endIcon={<RiCloseLine size={20} />}
      >
        Access denied. Please contact the network administrator.
      </Callout>

      <Callout
        size="lg"
        intent="success"
        startIcon={<RiCheckLine size={22} />}
        endIcon={<RiCloseLine size={22} />}
      >
        Access denied. Please contact the network administrator.
      </Callout>

      {/* Outlined Variant */}
      <h3 className="text-sm font-medium mt-6">Outlined Variant</h3>
      <Callout
        size="xs"
        variant="outlined"
        startIcon={<RiInformationLine size={16} />}
        endIcon={<RiCloseLine size={16} />}
      >
        Access denied. Please contact the network administrator.
      </Callout>

      <Callout
        size="sm"
        variant="outlined"
        intent="warning"
        startIcon={<RiAlertLine size={18} />}
        endIcon={<RiCloseLine size={18} />}
      >
        Access denied. Please contact the network administrator.
      </Callout>

      <Callout
        size="lg"
        variant="outlined"
        intent="success"
        startIcon={<RiCheckLine size={22} />}
        endIcon={
          <Button size="sm" intent="success" className="whitespace-nowrap">
            Contact Admin
          </Button>
        }
      >
        Access denied. Please contact the network administrator.
      </Callout>
    </div>
  );
}`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.variants}>
            <CodeSnippet
              title="Callout Variants & Sizes"
              code={`"use client";
import { Callout, Button } from "@atomos_tech/genesis";
import { RiInformationLine, RiCloseLine, RiAlertLine, RiErrorWarningLine, RiCheckLine } from "@remixicon/react";

function Page() {
  return (
    <div className="space-y-4">
      {/* Filled Variant */}
      <h3 className="text-sm font-medium">Filled Variant</h3>
      <Callout
        size="xs"
        startIcon={<RiInformationLine size={16} />}
        endIcon={<RiCloseLine size={16} />}
      >
        Access denied. Please contact the network administrator.
      </Callout>

      <Callout
        size="sm"
        intent="warning"
        startIcon={<RiAlertLine size={18} />}
        endIcon={<RiCloseLine size={18} />}
      >
        Access denied. Please contact the network administrator.
      </Callout>

      <Callout
        size="md"
        intent="error"
        startIcon={<RiErrorWarningLine size={20} />}
        endIcon={<RiCloseLine size={20} />}
      >
        Access denied. Please contact the network administrator.
      </Callout>

      <Callout
        size="lg"
        intent="success"
        startIcon={<RiCheckLine size={22} />}
        endIcon={<RiCloseLine size={22} />}
      >
        Access denied. Please contact the network administrator.
      </Callout>

      {/* Outlined Variant */}
      <h3 className="text-sm font-medium mt-6">Outlined Variant</h3>
      <Callout
        size="xs"
        variant="outlined"
        startIcon={<RiInformationLine size={16} />}
        endIcon={<RiCloseLine size={16} />}
      >
        Access denied. Please contact the network administrator.
      </Callout>

      <Callout
        size="sm"
        variant="outlined"
        intent="warning"
        startIcon={<RiAlertLine size={18} />}
        endIcon={<RiCloseLine size={18} />}
      >
        Access denied. Please contact the network administrator.
      </Callout>

      <Callout
        size="lg"
        variant="outlined"
        intent="success"
        startIcon={<RiCheckLine size={22} />}
        endIcon={
          <Button size="sm" intent="success" className="whitespace-nowrap">
            Contact Admin
          </Button>
        }
      >
        Access denied. Please contact the network administrator.
      </Callout>
    </div>
  );
}`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* Real-world Examples Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Real-world Examples
        </h2>

        {/* Real-world Callout Examples */}
        <div className="flex flex-col gap-6 mb-6">
          {/* Success Messages */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Success Messages
            </h3>
            <div className="space-y-3">
              <Callout
                intent="success"
                size="sm"
                startIcon={<RiCheckLine size={18} />}
              >
                Your changes have been saved successfully.
              </Callout>
              <Callout
                intent="success"
                size="md"
                variant="outlined"
                startIcon={<RiCheckLine size={20} />}
                endIcon={
                  <Button
                    size="sm"
                    className="whitespace-nowrap"
                    intent="success"
                  >
                    View Details
                  </Button>
                }
              >
                Payment processed successfully! Your order will be shipped
                within 2-3 business days.
              </Callout>
            </div>
          </div>

          {/* Warning Messages */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Warning Messages
            </h3>
            <div className="space-y-3">
              <Callout
                intent="warning"
                size="sm"
                startIcon={<RiAlertLine size={18} />}
                endIcon={<RiCloseLine size={18} />}
              >
                Your free trial ends in 3 days. Upgrade to keep all features.
              </Callout>
              <Callout
                intent="warning"
                size="md"
                variant="outlined"
                startIcon={<RiAlertLine size={20} />}
                endIcon={
                  <Button
                    className="text-white"
                    size="sm"
                    intent="warning"
                    variant="outlined"
                  >
                    Upgrade Now
                  </Button>
                }
              >
                <div className="space-y-1">
                  <p className="font-medium">Storage almost full</p>
                  <p className="text-sm">
                    You've used 95% of your storage. Upgrade for more space.
                  </p>
                </div>
              </Callout>
            </div>
          </div>

          {/* Error Messages */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Error Messages
            </h3>
            <div className="space-y-3">
              <Callout
                intent="error"
                size="sm"
                startIcon={<RiErrorWarningLine size={18} />}
              >
                Unable to connect to the server. Please check your internet
                connection.
              </Callout>
              <Callout
                intent="error"
                size="md"
                variant="outlined"
                startIcon={<RiErrorWarningLine size={20} />}
                endIcon={
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="whitespace-nowrap"
                      intent="error"
                    >
                      Report Issue
                    </Button>
                  </div>
                }
              >
                <div className="space-y-1">
                  <p className="font-medium">Failed to save document</p>
                  <p className="text-sm">
                    The file "quarterly_report.pdf" could not be saved due to
                    insufficient permissions.
                  </p>
                </div>
              </Callout>
            </div>
          </div>

          {/* Info Messages */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Informational Messages
            </h3>
            <div className="space-y-3">
              <Callout
                // intent="info"
                size="sm"
                startIcon={<RiInformationLine size={18} />}
                endIcon={<RiExternalLinkLine size={18} />}
              >
                New feature available! Check out our updated dashboard.
              </Callout>
              <Callout
                // intent="info"
                size="md"
                variant="outlined"
                startIcon={<RiInformationLine size={20} />}
                endIcon={
                  <Button
                    className="whitespace-nowrap"
                    size="sm"
                    //   intent="info"
                    variant="outlined"
                  >
                    <RiDownloadLine size={16} className="mr-1" />
                    Download Guide
                  </Button>
                }
              >
                <div className="space-y-1">
                  <p className="font-medium">Maintenance scheduled</p>
                  <p className="text-sm">
                    System maintenance is scheduled for December 30, 2025 from
                    2:00 AM to 4:00 AM UTC.
                  </p>
                </div>
              </Callout>
            </div>
          </div>

          {/* Interactive Callouts */}
          {/* <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Interactive Callouts
            </h3>
            <div className="space-y-3">
              <Callout
                intent="default"
                size="md"
                variant="outlined"
                // startIcon="💡"
                className="cursor-pointer hover:bg-gray-50 transition-colors"
                // onClick={() => alert("Tip clicked!")}
              >
                <div className="space-y-1">
                  <p className="font-medium">Pro Tip</p>
                  <p className="text-sm">
                    Use keyboard shortcuts to speed up your workflow. Press ⌘K
                    to open command palette.
                  </p>
                </div>
              </Callout>

              <Callout
                intent="success"
                size="sm"
                variant="filled"
                // startIcon="🎉"
                endIcon={
                  <Button size="sm" className="text-xs">
                    Claim Now
                  </Button>
                }
              >
                You've earned a new badge! Complete 5 more tasks to unlock the
                next level.
              </Callout>
            </div>
          </div> */}
        </div>

        <TabsContainer value={nestedTabs.realworld}>
          <TabList
            onChange={(val) => handleNestedTabChanges("realworld", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.realworld}
              onChange={(val) => handleNestedTabChanges("realworld", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.realworld}
              onChange={(val) => handleNestedTabChanges("realworld", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.realworld}>
            <CodeSnippet
              title="Real-world Callout Examples"
              code={`import { Callout, Button } from "@atomos_tech/genesis";
import { RiCheckLine, RiAlertLine, RiErrorWarningLine, RiInformationLine, RiExternalLinkLine, RiDownloadLine } from "@remixicon/react";

function App() {
  return (
    <div className="space-y-6">
      {/* Success Messages */}
      <Callout
        intent="success"
        size="md"
        variant="outlined"
        startIcon={<RiCheckLine size={20} />}
        endIcon={<Button size="sm" intent="success">View Details</Button>}
      >
        Payment processed successfully! Your order will be shipped within 2-3 business days.
      </Callout>

      {/* Warning with Action */}
      <Callout
        intent="warning"
        size="md"
        variant="outlined"
        startIcon={<RiAlertLine size={20} />}
        endIcon={
          <Button size="sm" intent="warning" variant="outlined">
            Upgrade Now
          </Button>
        }
      >
        <div className="space-y-1">
          <p className="font-medium">Storage almost full</p>
          <p className="text-sm">You've used 95% of your storage. Upgrade for more space.</p>
        </div>
      </Callout>

      {/* Error with Multiple Actions */}
      <Callout
        intent="error"
        size="md"
        variant="outlined"
        startIcon={<RiErrorWarningLine size={20} />}
        endIcon={
          <div className="flex gap-2">
            <Button size="sm" intent="error" variant="outlined">
              Retry
            </Button>
            <Button size="sm" intent="error">
              Report Issue
            </Button>
          </div>
        }
      >
        <div className="space-y-1">
          <p className="font-medium">Failed to save document</p>
          <p className="text-sm">The file could not be saved due to insufficient permissions.</p>
        </div>
      </Callout>

      {/* Informational with Download */}
      <Callout
        intent="info"
        size="md"
        variant="outlined"
        startIcon={<RiInformationLine size={20} />}
        endIcon={
          <Button size="sm" intent="info" variant="outlined">
            <RiDownloadLine size={16} className="mr-1" />
            Download Guide
          </Button>
        }
      >
        <div className="space-y-1">
          <p className="font-medium">Maintenance scheduled</p>
          <p className="text-sm">System maintenance is scheduled for December 30, 2025.</p>
        </div>
      </Callout>

      {/* Interactive Callout */}
      <Callout
        intent="default"
        size="md"
        variant="outlined"
        startIcon="💡"
        className="cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => alert('Tip clicked!')}
      >
        <div className="space-y-1">
          <p className="font-medium">Pro Tip</p>
          <p className="text-sm">Use keyboard shortcuts to speed up your workflow.</p>
        </div>
      </Callout>
    </div>
  );
}`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.realworld}>
            <CodeSnippet
              title="Real-world Callout Examples"
              code={`"use client";
import { Callout, Button } from "@atomos_tech/genesis";
import { RiCheckLine, RiAlertLine, RiErrorWarningLine, RiInformationLine, RiExternalLinkLine, RiDownloadLine } from "@remixicon/react";

function Page() {
  return (
    <div className="space-y-6">
      {/* Success Messages */}
      <Callout
        intent="success"
        size="md"
        variant="outlined"
        startIcon={<RiCheckLine size={20} />}
        endIcon={<Button size="sm" intent="success">View Details</Button>}
      >
        Payment processed successfully! Your order will be shipped within 2-3 business days.
      </Callout>

      {/* Warning with Action */}
      <Callout
        intent="warning"
        size="md"
        variant="outlined"
        startIcon={<RiAlertLine size={20} />}
        endIcon={
          <Button size="sm" intent="warning" variant="outlined">
            Upgrade Now
          </Button>
        }
      >
        <div className="space-y-1">
          <p className="font-medium">Storage almost full</p>
          <p className="text-sm">You've used 95% of your storage. Upgrade for more space.</p>
        </div>
      </Callout>

      {/* Error with Multiple Actions */}
      <Callout
        intent="error"
        size="md"
        variant="outlined"
        startIcon={<RiErrorWarningLine size={20} />}
        endIcon={
          <div className="flex gap-2">
            <Button size="sm" intent="error" variant="outlined">
              Retry
            </Button>
            <Button size="sm" intent="error">
              Report Issue
            </Button>
          </div>
        }
      >
        <div className="space-y-1">
          <p className="font-medium">Failed to save document</p>
          <p className="text-sm">The file could not be saved due to insufficient permissions.</p>
        </div>
      </Callout>

      {/* Informational with Download */}
      <Callout
        intent="info"
        size="md"
        variant="outlined"
        startIcon={<RiInformationLine size={20} />}
        endIcon={
          <Button size="sm" intent="info" variant="outlined">
            <RiDownloadLine size={16} className="mr-1" />
            Download Guide
          </Button>
        }
      >
        <div className="space-y-1">
          <p className="font-medium">Maintenance scheduled</p>
          <p className="text-sm">System maintenance is scheduled for December 30, 2025.</p>
        </div>
      </Callout>

      {/* Interactive Callout */}
      <Callout
        intent="default"
        size="md"
        variant="outlined"
        startIcon="💡"
        className="cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => alert('Tip clicked!')}
      >
        <div className="space-y-1">
          <p className="font-medium">Pro Tip</p>
          <p className="text-sm">Use keyboard shortcuts to speed up your workflow.</p>
        </div>
      </Callout>
    </div>
  );
}`}
            />
          </TabPanel>
        </TabsContainer>
      </section>
    </div>
  );
};

export default CalloutExampleSection;
