"use client";

import React, { useEffect, useState } from "react";
import {
  ProgressBar,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
} from "@atomos_tech/genesis";
import CodeSnippet from "../../button/_components/CodeSnippet";

const LinearProgressExample = () => {
  const [progress, setProgress] = useState(0);
  const [nestedTabs, setNestedTabs] = useState({
    linear: "react",
  });

  useEffect(() => {
    const timer = setTimeout(() => setProgress(80), 2000);
    return () => clearTimeout(timer);
  }, [progress]);

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div className="space-y-6">
      {/* Progress Bar Examples */}
      <div className="space-y-4">
        <ProgressBar
          progressColor="bg-success-600"
          progress={progress}
          progressText={"Progress text on top"}
          progressTextPosition="top"
        />
        <ProgressBar
          progressColor="bg-primary-600"
          progress={progress}
          progressText={"Progress text on right"}
          progressTextPosition="right"
        />
        <ProgressBar
          progressColor="bg-bluegray-600"
          progress={20}
          progressText={"Progress text on left"}
          progressTextPosition="left"
        />
        <ProgressBar
          progressColor="bg-error-600"
          progress={progress}
          progressText={"Progress text on bottom"}
          progressTextPosition="bottom"
        />
      </div>

      {/* Nested Tabs for React / Next */}
      <TabsContainer value={nestedTabs.linear}>
        <TabList
          onChange={(val) => handleNestedTabChanges("linear", val)}
          ariaLabel="React and Next tabs"
          className="border-b border-gray-200 mb-4"
          box
        >
          <Tab
            label="React"
            value="react"
            selectedTabValue={nestedTabs.linear}
            onChange={(val) => handleNestedTabChanges("linear", val)}
          />
          <Tab
            label="Next"
            value="next"
            selectedTabValue={nestedTabs.linear}
            onChange={(val) => handleNestedTabChanges("linear", val)}
          />
        </TabList>

        <TabPanel value="react" currentValue={nestedTabs.linear}>
          <CodeSnippet
            title="Linear Progress Bar - React"
            code={`import { useState, useEffect } from "react";
import { ProgressBar } from "@atomos_tech/genesis";

const LinearProgressExample = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(80), 2000);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="space-y-4">
      <ProgressBar
        progressColor="bg-success-600"
        progress={progress}
        progressText="Progress text on top"
        progressTextPosition="top"
      />
      <ProgressBar
        progressColor="bg-primary-600"
        progress={progress}
        progressText="Progress text on right"
        progressTextPosition="right"
      />
      <ProgressBar
        progressColor="bg-bluegray-600"
        progress={20}
        progressText="Progress text on left"
        progressTextPosition="left"
      />
      <ProgressBar
        progressColor="bg-error-600"
        progress={progress}
        progressText="Progress text on bottom"
        progressTextPosition="bottom"
      />
    </div>
  );
};

export default LinearProgressExample;`}
          />
        </TabPanel>

        <TabPanel value="next" currentValue={nestedTabs.linear}>
          <CodeSnippet
            title="Linear Progress Bar - Next.js"
            code={`"use client";

import { useState, useEffect } from "react";
import { ProgressBar } from "@atomos_tech/genesis";

const LinearProgressExample = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(80), 2000);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="space-y-4">
      <ProgressBar
        progressColor="bg-success-600"
        progress={progress}
        progressText="Progress text on top"
        progressTextPosition="top"
      />
      <ProgressBar
        progressColor="bg-primary-600"
        progress={progress}
        progressText="Progress text on right"
        progressTextPosition="right"
      />
      <ProgressBar
        progressColor="bg-bluegray-600"
        progress={20}
        progressText="Progress text on left"
        progressTextPosition="left"
      />
      <ProgressBar
        progressColor="bg-error-600"
        progress={progress}
        progressText="Progress text on bottom"
        progressTextPosition="bottom"
      />
    </div>
  );
};

export default LinearProgressExample;`}
          />
        </TabPanel>
      </TabsContainer>
    </div>
  );
};

export default LinearProgressExample;
