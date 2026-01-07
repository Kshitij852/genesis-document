"use client";
import React, { useState } from "react";
import {
  Chip,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
} from "@atomos_tech/genesis";
import CodeSnippet from "../../button/_components/CodeSnippet";
import {
  RiCheckLine,
  RiCloseLine,
  RiAlertLine,
  RiStarLine,
  RiArrowRightLine,
  RiDownloadLine,
  RiTimeLine,
  RiDeleteBinLine,
  RiUploadLine,
  RiBellLine,
  RiMailLine,
  RiFireLine,
  RiHeartLine,
  RiSparklingLine,
  RiUserLine,
  RiInformationLine,
  RiSettingsLine,
  RiLockLine,
  RiShareLine,
} from "@remixicon/react";

const ChipExampleSection = () => {
  // Give each section its own tab state
  const [nestedTabs, setNestedTabs] = useState({
    sizes: "react",
    withDot: "react",
    withoutDot: "react",
    icons: "react",
  });

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 items-start">
      {/* Without Dot Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Chips without Dot
        </h2>
        <div className="flex flex-wrap gap-3">
          <Chip intent="primary">Primary</Chip>
          <Chip intent="success">Success</Chip>
          <Chip intent="warning">Warning</Chip>
          <Chip intent="error">Error</Chip>
          <Chip intent="default">Default</Chip>
          <Chip intent="bluegray">Bluegray</Chip>
          <Chip intent="bluelight">Bluelight</Chip>
          <Chip intent="violet">Violet</Chip>
          <Chip intent="indigo">Indigo</Chip>
          <Chip intent="purple">Purple</Chip>
          <Chip intent="pink">Pink</Chip>
          <Chip intent="rose">Rose</Chip>
          <Chip intent="orange">Orange</Chip>
        </div>

        <TabsContainer value={nestedTabs.withoutDot}>
          <TabList
            onChange={(val) => handleNestedTabChanges("withoutDot", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4 mt-4"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.withoutDot}
              onChange={(val) => handleNestedTabChanges("withoutDot", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.withoutDot}
              onChange={(val) => handleNestedTabChanges("withoutDot", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.withoutDot}>
            <CodeSnippet
              title="Chips without Dot"
              code={`<Chip intent="primary">Primary</Chip>
<Chip intent="success">Success</Chip>
<Chip intent="warning">Warning</Chip>
<Chip intent="error">Error</Chip>
<Chip intent="default">Default</Chip>
<Chip intent="bluegray">Bluegray</Chip>
<Chip intent="bluelight">Bluelight</Chip>
<Chip intent="violet">Violet</Chip>
<Chip intent="indigo">Indigo</Chip>
<Chip intent="purple">Purple</Chip>
<Chip intent="pink">Pink</Chip>
<Chip intent="rose">Rose</Chip>
<Chip intent="orange">Orange</Chip>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.withoutDot}>
            <CodeSnippet
              title="Chips without Dot"
              code={`<Chip intent="primary">Primary</Chip>
<Chip intent="success">Success</Chip>
<Chip intent="warning">Warning</Chip>
<Chip intent="error">Error</Chip>
<Chip intent="default">Default</Chip>
<Chip intent="bluegray">Bluegray</Chip>
<Chip intent="bluelight">Bluelight</Chip>
<Chip intent="violet">Violet</Chip>
<Chip intent="indigo">Indigo</Chip>
<Chip intent="purple">Purple</Chip>
<Chip intent="pink">Pink</Chip>
<Chip intent="rose">Rose</Chip>
<Chip intent="orange">Orange</Chip>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>
      {/* With Dot Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Chips with Dot
        </h2>
        <div className="flex flex-wrap gap-3 mb-4">
          <Chip intent="primary" dot>
            Primary
          </Chip>
          <Chip intent="success" dot>
            Success
          </Chip>
          <Chip intent="warning" dot>
            Warning
          </Chip>
          <Chip intent="error" dot>
            Error
          </Chip>
          <Chip intent="default" dot>
            Default
          </Chip>
          <Chip intent="bluegray" dot>
            Bluegray
          </Chip>
          <Chip intent="bluelight" dot>
            Bluelight
          </Chip>
          <Chip intent="violet" dot>
            Violet
          </Chip>
          <Chip intent="indigo" dot>
            Indigo
          </Chip>
          <Chip intent="purple" dot>
            Purple
          </Chip>
          <Chip intent="pink" dot>
            Pink
          </Chip>
          <Chip intent="rose" dot>
            Rose
          </Chip>
          <Chip intent="orange" dot>
            Orange
          </Chip>
        </div>

        <TabsContainer value={nestedTabs.withDot}>
          <TabList
            onChange={(val) => handleNestedTabChanges("withDot", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.withDot}
              onChange={(val) => handleNestedTabChanges("withDot", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.withDot}
              onChange={(val) => handleNestedTabChanges("withDot", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.withDot}>
            <CodeSnippet
              title="Chips with Dot"
              code={`<Chip intent="primary" dot>Primary</Chip>
<Chip intent="success" dot>Success</Chip>
<Chip intent="warning" dot>Warning</Chip>
<Chip intent="error" dot>Error</Chip>
<Chip intent="default" dot>Default</Chip>
<Chip intent="bluegray" dot>Bluegray</Chip>
<Chip intent="bluelight" dot>Bluelight</Chip>
<Chip intent="violet" dot>Violet</Chip>
<Chip intent="indigo" dot>Indigo</Chip>
<Chip intent="purple" dot>Purple</Chip>
<Chip intent="pink" dot>Pink</Chip>
<Chip intent="rose" dot>Rose</Chip>
<Chip intent="orange" dot>Orange</Chip>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.withDot}>
            <CodeSnippet
              title="Chips with Dot"
              code={`<Chip intent="primary" dot>Primary</Chip>
<Chip intent="success" dot>Success</Chip>
<Chip intent="warning" dot>Warning</Chip>
<Chip intent="error" dot>Error</Chip>
<Chip intent="default" dot>Default</Chip>
<Chip intent="bluegray" dot>Bluegray</Chip>
<Chip intent="bluelight" dot>Bluelight</Chip>
<Chip intent="violet" dot>Violet</Chip>
<Chip intent="indigo" dot>Indigo</Chip>
<Chip intent="purple" dot>Purple</Chip>
<Chip intent="pink" dot>Pink</Chip>
<Chip intent="rose" dot>Rose</Chip>
<Chip intent="orange" dot>Orange</Chip>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>
      {/* Sizes Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Sizes</h2>
        <div className="flex gap-6 flex-wrap mb-4">
          <Chip size="sm" intent="primary">
            Size sm
          </Chip>
          <Chip size="md" intent="primary">
            Size md
          </Chip>
          <Chip size="lg" intent="primary">
            Size lg
          </Chip>
        </div>

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
              title="Size Examples"
              code={`<Chip size="sm" intent="primary">Size Sm</Chip>\n<Chip size="md" intent="primary">Size Md</Chip>\n<Chip size="lg" intent="primary">Size Lg</Chip>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.sizes}>
            <CodeSnippet
              title="Size Examples"
              code={`<Chip size="sm" intent="primary">Size Sm</Chip>\n<Chip size="md" intent="primary">Size Md</Chip>\n<Chip size="lg" intent="primary">Size Lg</Chip>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* Icons Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Chips with Icons
        </h2>
        <div className="space-y-4 mb-4">
          {/* Start Icon Only */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Start Icon Only
            </h3>
            <div className="flex flex-wrap gap-3">
              <Chip intent="primary" startIcon={<RiCheckLine size={14} />}>
                Success
              </Chip>
              <Chip intent="success" startIcon={<RiCheckLine size={14} />}>
                Verified
              </Chip>
              <Chip intent="warning" startIcon={<RiAlertLine size={14} />}>
                Warning
              </Chip>
              <Chip intent="error" startIcon={<RiCloseLine size={14} />}>
                Error
              </Chip>
              <Chip intent="violet" startIcon={<RiStarLine size={14} />}>
                Premium
              </Chip>
            </div>
          </div>

          {/* End Icon Only */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              End Icon Only
            </h3>
            <div className="flex flex-wrap gap-3">
              <Chip intent="primary" endIcon={<RiArrowRightLine size={14} />}>
                Next
              </Chip>
              <Chip intent="success" endIcon={<RiDownloadLine size={14} />}>
                Download
              </Chip>
              <Chip intent="warning" endIcon={<RiTimeLine size={14} />}>
                Timeout
              </Chip>
              <Chip intent="error" endIcon={<RiDeleteBinLine size={14} />}>
                Delete
              </Chip>
              <Chip intent="indigo" endIcon={<RiUploadLine size={14} />}>
                Upload
              </Chip>
            </div>
          </div>

          {/* Both Icons */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Both Icons
            </h3>
            <div className="flex flex-wrap gap-3">
              <Chip
                intent="primary"
                startIcon={<RiStarLine size={14} />}
                endIcon={<RiArrowRightLine size={14} />}
              >
                Star Rating
              </Chip>
              <Chip
                intent="success"
                startIcon={<RiCheckLine size={14} />}
                endIcon={<RiCheckLine size={14} />}
              >
                Payment
              </Chip>
              <Chip
                intent="warning"
                startIcon={<RiAlertLine size={14} />}
                endIcon={<RiAlertLine size={14} />}
              >
                Review Needed
              </Chip>
              <Chip
                intent="pink"
                startIcon={<RiHeartLine size={14} />}
                endIcon={<RiMailLine size={14} />}
              >
                Favorites
              </Chip>
              <Chip
                intent="orange"
                startIcon={<RiFireLine size={14} />}
                endIcon={<RiSparklingLine size={14} />}
              >
                Trending
              </Chip>
            </div>
          </div>

          {/* With Dot and Icon */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              With Dot and Icon
            </h3>
            <div className="flex flex-wrap gap-3">
              <Chip intent="primary" dot startIcon={<RiBellLine size={14} />}>
                Notifications
              </Chip>
              <Chip intent="success" dot startIcon={<RiMailLine size={14} />}>
                Messages
              </Chip>
              <Chip intent="error" dot startIcon={<RiAlertLine size={14} />}>
                Alerts
              </Chip>
              <Chip intent="bluelight" dot endIcon={<RiUserLine size={14} />}>
                Online Users
              </Chip>
            </div>
          </div>

          {/* More Examples */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              More Examples
            </h3>
            <div className="flex flex-wrap gap-3">
              <Chip
                intent="bluegray"
                startIcon={<RiInformationLine size={14} />}
              >
                Info
              </Chip>
              <Chip intent="purple" startIcon={<RiSettingsLine size={14} />}>
                Settings
              </Chip>
              <Chip intent="rose" startIcon={<RiLockLine size={14} />}>
                Secure
              </Chip>
              <Chip intent="default" endIcon={<RiShareLine size={14} />}>
                Share
              </Chip>
            </div>
          </div>
        </div>

        <TabsContainer value={nestedTabs.icons}>
          <TabList
            onChange={(val) => handleNestedTabChanges("icons", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.icons}
              onChange={(val) => handleNestedTabChanges("icons", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.icons}
              onChange={(val) => handleNestedTabChanges("icons", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.icons}>
            <CodeSnippet
              title="Chips with Icons"
              code={`import { RiCheckLine, RiCloseLine, RiAlertLine, RiStarLine, RiArrowRightLine, RiDownloadLine, RiTimeLine, RiDeleteBinLine, RiUploadLine, RiBellLine, RiMailLine, RiFireLine, RiHeartLine, RiSparklingLine, RiUserLine, RiInformationLine, RiSettingsLine, RiLockLine, RiShareLine } from "@remixicon/react";

{/* Start Icon Only */}
<Chip intent="primary" startIcon={<RiCheckLine size={14} />}>Success</Chip>
<Chip intent="success" startIcon={<RiCheckLine size={14} />}>Verified</Chip>
<Chip intent="warning" startIcon={<RiAlertLine size={14} />}>Warning</Chip>
<Chip intent="error" startIcon={<RiCloseLine size={14} />}>Error</Chip>
<Chip intent="violet" startIcon={<RiStarLine size={14} />}>Premium</Chip>

{/* End Icon Only */}
<Chip intent="primary" endIcon={<RiArrowRightLine size={14} />}>Next</Chip>
<Chip intent="success" endIcon={<RiDownloadLine size={14} />}>Download</Chip>
<Chip intent="warning" endIcon={<RiTimeLine size={14} />}>Timeout</Chip>
<Chip intent="error" endIcon={<RiDeleteBinLine size={14} />}>Delete</Chip>
<Chip intent="indigo" endIcon={<RiUploadLine size={14} />}>Upload</Chip>

{/* Both Icons */}
<Chip intent="primary" startIcon={<RiStarLine size={14} />} endIcon={<RiArrowRightLine size={14} />}>Star Rating</Chip>
<Chip intent="success" startIcon={<RiCheckLine size={14} />} endIcon={<RiCheckLine size={14} />}>Payment</Chip>
<Chip intent="warning" startIcon={<RiAlertLine size={14} />} endIcon={<RiAlertLine size={14} />}>Review Needed</Chip>
<Chip intent="pink" startIcon={<RiHeartLine size={14} />} endIcon={<RiMailLine size={14} />}>Favorites</Chip>
<Chip intent="orange" startIcon={<RiFireLine size={14} />} endIcon={<RiSparklingLine size={14} />}>Trending</Chip>

{/* With Dot and Icon */}
<Chip intent="primary" dot startIcon={<RiBellLine size={14} />}>Notifications</Chip>
<Chip intent="success" dot startIcon={<RiMailLine size={14} />}>Messages</Chip>
<Chip intent="error" dot startIcon={<RiAlertLine size={14} />}>Alerts</Chip>
<Chip intent="bluelight" dot endIcon={<RiUserLine size={14} />}>Online Users</Chip>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.icons}>
            <CodeSnippet
              title="Chips with Icons"
              code={`"use client";
import { RiCheckLine, RiCloseLine, RiAlertLine, RiStarLine, RiArrowRightLine, RiDownloadLine, RiTimeLine, RiDeleteBinLine, RiUploadLine, RiBellLine, RiMailLine, RiFireLine, RiHeartLine, RiSparklingLine, RiUserLine, RiInformationLine, RiSettingsLine, RiLockLine, RiShareLine } from "@remixicon/react";

{/* Start Icon Only */}
<Chip intent="primary" startIcon={<RiCheckLine size={14} />}>Success</Chip>
<Chip intent="success" startIcon={<RiCheckLine size={14} />}>Verified</Chip>
<Chip intent="warning" startIcon={<RiAlertLine size={14} />}>Warning</Chip>
<Chip intent="error" startIcon={<RiCloseLine size={14} />}>Error</Chip>
<Chip intent="violet" startIcon={<RiStarLine size={14} />}>Premium</Chip>

{/* End Icon Only */}
<Chip intent="primary" endIcon={<RiArrowRightLine size={14} />}>Next</Chip>
<Chip intent="success" endIcon={<RiDownloadLine size={14} />}>Download</Chip>
<Chip intent="warning" endIcon={<RiTimeLine size={14} />}>Timeout</Chip>
<Chip intent="error" endIcon={<RiDeleteBinLine size={14} />}>Delete</Chip>
<Chip intent="indigo" endIcon={<RiUploadLine size={14} />}>Upload</Chip>

{/* Both Icons */}
<Chip intent="primary" startIcon={<RiStarLine size={14} />} endIcon={<RiArrowRightLine size={14} />}>Star Rating</Chip>
<Chip intent="success" startIcon={<RiCheckLine size={14} />} endIcon={<RiCheckLine size={14} />}>Payment</Chip>
<Chip intent="warning" startIcon={<RiAlertLine size={14} />} endIcon={<RiAlertLine size={14} />}>Review Needed</Chip>
<Chip intent="pink" startIcon={<RiHeartLine size={14} />} endIcon={<RiMailLine size={14} />}>Favorites</Chip>
<Chip intent="orange" startIcon={<RiFireLine size={14} />} endIcon={<RiSparklingLine size={14} />}>Trending</Chip>

{/* With Dot and Icon */}
<Chip intent="primary" dot startIcon={<RiBellLine size={14} />}>Notifications</Chip>
<Chip intent="success" dot startIcon={<RiMailLine size={14} />}>Messages</Chip>
<Chip intent="error" dot startIcon={<RiAlertLine size={14} />}>Alerts</Chip>
<Chip intent="bluelight" dot endIcon={<RiUserLine size={14} />}>Online Users</Chip>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>
    </div>
  );
};

export default ChipExampleSection;
