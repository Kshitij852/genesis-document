import { TabsContainer, TabList, Tab, TabPanel } from "@atomos_tech/genesis";
import { Notice, Button } from "@atomos_tech/genesis";
import React, { useState } from "react";

import CodeSnippet from "../../button/_components/CodeSnippet";

const NoticeExampleSection = () => {
  const [nestedTabs, setNestedTabs] = useState({
    basic: "react",
    advanced: "react",
  });

  const [openWarning, setOpenWarning] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [openTop, setOpenTop] = useState(false);
  const [openBottom, setOpenBottom] = useState(false);

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div className="space-y-8">
      {/* Basic Notice Examples */}
      <section className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">
          Basic Notice Usage
        </h2>

        <div className="space-y-6 mb-6">
          {/* Warning Notice with Actions */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex flex-col w-fit gap-4">
              <h3 className="text-sm font-medium text-gray-700">
                Warning Notice with Actions
              </h3>
              <Button variant="filled" onClick={() => setOpenWarning(true)}>
                Show Warning Notice
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Notice with warning variant and action buttons
            </p>
          </div>

          {/* Success Notice */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex flex-col w-fit gap-4">
              <h3 className="text-sm font-medium text-gray-700">
                Success Notice
              </h3>
              <Button variant="filled" onClick={() => setOpenSuccess(true)}>
                Show Success Notice
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Simple success notice with auto-dismiss
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
              title="Basic Notice Usage"
              code={`import { Notice, Button } from "@atomos_tech/genesis";
import { useState } from "react";

const NoticeExamples = () => {
  const [openWarning, setOpenWarning] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  return (
    <div className="space-y-4">
      {/* Warning Notice with Actions */}
      <div className="flex flex-col w-fit gap-4">
        <Button variant="filled" onClick={() => setOpenWarning(true)}>
          Show Warning Notice
        </Button>
      </div>

      {/* Success Notice */}
      <div className="flex flex-col w-fit gap-4">
        <Button variant="filled" onClick={() => setOpenSuccess(true)}>
          Show Success Notice
        </Button>
      </div>

      {/* Warning Notice Component */}
      <Notice
        open={openWarning}
        setOpen={setOpenWarning}
        variant="warning"
        noticeTitle="Notice Header"
        position="bottom"
      >
        This is a warning notice with an important title and action buttons.
        <section className="flex gap-2 items-center mt-3">
          <Button variant="outlined" intent="error-outlined">
            Cancel
          </Button>
          <Button>Apply</Button>
        </section>
      </Notice>

      {/* Success Notice Component */}
      <Notice
        open={openSuccess}
        setOpen={setOpenSuccess}
        variant="success"
        noticeTitle="Success!"
        position="top"
      >
        Your action was completed successfully.
      </Notice>
    </div>
  );
};

export default NoticeExamples;`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.basic}>
            <CodeSnippet
              title="Basic Notice Usage"
              code={`"use client";
import { Notice, Button } from "@atomos_tech/genesis";
import { useState } from "react";

const NoticeExamples = () => {
  const [openWarning, setOpenWarning] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  return (
    <div className="space-y-4">
      {/* Warning Notice with Actions */}
      <div className="flex flex-col w-fit gap-4">
        <Button variant="filled" onClick={() => setOpenWarning(true)}>
          Show Warning Notice
        </Button>
      </div>

      {/* Success Notice */}
      <div className="flex flex-col w-fit gap-4">
        <Button variant="filled" onClick={() => setOpenSuccess(true)}>
          Show Success Notice
        </Button>
      </div>

      {/* Warning Notice Component */}
      <Notice
        open={openWarning}
        setOpen={setOpenWarning}
        variant="warning"
        noticeTitle="Notice Header"
        position="bottom"
      >
        This is a warning notice with an important title and action buttons.
        <section className="flex gap-2 items-center mt-3">
          <Button variant="outlined" intent="error-outlined">
            Cancel
          </Button>
          <Button>Apply</Button>
        </section>
      </Notice>

      {/* Success Notice Component */}
      <Notice
        open={openSuccess}
        setOpen={setOpenSuccess}
        variant="success"
        noticeTitle="Success!"
        position="top"
      >
        Your action was completed successfully.
      </Notice>
    </div>
  );
};

export default NoticeExamples;`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* Advanced Notice Examples */}
      <section className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">
          Advanced Notice Usage
        </h2>

        <div className="space-y-6 mb-6">
          {/* All Variants */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              All Notice Variants
            </h3>
            <div className="flex gap-4 flex-wrap">
              <Button
                variant="filled"
                intent="success"
                onClick={() => setOpenSuccess(true)}
              >
                Success
              </Button>
              <Button
                variant="filled"
                intent="warning"
                onClick={() => setOpenWarning(true)}
              >
                Warning
              </Button>
              <Button
                variant="filled"
                intent="error"
                onClick={() => setOpenError(true)}
              >
                Error
              </Button>
              <Button
                variant="filled"
                // intent="info"
                onClick={() => setOpenInfo(true)}
              >
                Info
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Different notice variants for various message types
            </p>
          </div>
        </div>

        {/* Code Examples for Advanced Usage */}
        <TabsContainer value={nestedTabs.advanced}>
          <TabList
            onChange={(val) => handleNestedTabChanges("advanced", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.advanced}
              onChange={(val) => handleNestedTabChanges("advanced", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.advanced}
              onChange={(val) => handleNestedTabChanges("advanced", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.advanced}>
            <CodeSnippet
              title="Advanced Notice Usage"
              code={`import { Notice, Button } from "@atomos_tech/genesis";
import { useState } from "react";

const AdvancedNoticeExamples = () => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <div>
      {/* All Notice Variants */}
      <Notice
        open={openSuccess}
        setOpen={setOpenSuccess}
        variant="success"
        noticeTitle="Success!"
        position="top"
      >
        Your action was completed successfully. This is a success message with 
        positive feedback for the user.
      </Notice>

      <Notice
        open={openWarning}
        setOpen={setOpenWarning}
        variant="warning"
        noticeTitle="Warning"
        position="top"
      >
        This action requires your attention. Please review the details before proceeding.
        <section className="flex gap-2 items-center mt-3">
          <Button variant="outlined" intent="error-outlined">
            Cancel
          </Button>
          <Button>Proceed</Button>
        </section>
      </Notice>

      <Notice
        open={openError}
        setOpen={setOpenError}
        variant="error"
        noticeTitle="Error Occurred"
        position="top"
      >
        Something went wrong. Please try again or contact support if the problem persists.
        <section className="flex gap-2 items-center mt-3">
          <Button variant="outlined">Dismiss</Button>
          <Button intent="error">Report Issue</Button>
        </section>
      </Notice>

      <Notice
        open={openInfo}
        setOpen={setOpenInfo}
        variant="info"
        noticeTitle="Information"
        position="bottom"
      >
        Here's some important information you should know about this feature.
      </Notice>
    </div>
  );
};

export default AdvancedNoticeExamples;`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.advanced}>
            <CodeSnippet
              title="Advanced Notice Usage"
              code={`"use client";
import { Notice, Button } from "@atomos_tech/genesis";
import { useState } from "react";

const AdvancedNoticeExamples = () => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <div>
      {/* All Notice Variants */}
      <Notice
        open={openSuccess}
        setOpen={setOpenSuccess}
        variant="success"
        noticeTitle="Success!"
        position="top"
      >
        Your action was completed successfully. This is a success message with 
        positive feedback for the user.
      </Notice>

      <Notice
        open={openWarning}
        setOpen={setOpenWarning}
        variant="warning"
        noticeTitle="Warning"
        position="top"
      >
        This action requires your attention. Please review the details before proceeding.
        <section className="flex gap-2 items-center mt-3">
          <Button variant="outlined" intent="error-outlined">
            Cancel
          </Button>
          <Button>Proceed</Button>
        </section>
      </Notice>

      <Notice
        open={openError}
        setOpen={setOpenError}
        variant="error"
        noticeTitle="Error Occurred"
        position="top"
      >
        Something went wrong. Please try again or contact support if the problem persists.
        <section className="flex gap-2 items-center mt-3">
          <Button variant="outlined">Dismiss</Button>
          <Button intent="error">Report Issue</Button>
        </section>
      </Notice>

      <Notice
        open={openInfo}
        setOpen={setOpenInfo}
        variant="info"
        noticeTitle="Information"
        position="bottom"
      >
        Here's some important information you should know about this feature.
      </Notice>
    </div>
  );
};

export default AdvancedNoticeExamples;`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* Active Notice Components */}
      <Notice
        open={openWarning}
        setOpen={setOpenWarning}
        variant="warning"
        noticeTitle="Notice Header"
        position="bottom"
      >
        This is a warning notice with an important title and both icons.
        <section className="flex gap-2 items-center mt-3">
          <Button variant="outlined" intent="error-outlined">
            Cancel
          </Button>
          <Button>Apply</Button>
        </section>
      </Notice>

      <Notice
        open={openSuccess}
        setOpen={setOpenSuccess}
        variant="success"
        noticeTitle="Success!"
        position="top"
      >
        This is a success notice with an encouraging title and both icons.
      </Notice>

      <Notice
        open={openError}
        setOpen={setOpenError}
        variant="error"
        noticeTitle="Error Occurred"
        position="top"
      >
        Something went wrong. Please check your input and try again.
      </Notice>

      <Notice
        open={openInfo}
        setOpen={setOpenInfo}
        variant="info"
        noticeTitle="Information"
        position="bottom"
      >
        {`Here's some important information about your current operation.`}
      </Notice>
    </div>
  );
};

export default NoticeExampleSection;
