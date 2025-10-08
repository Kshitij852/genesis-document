"use client";

import React, { useState } from "react";
import {
  CircularProgress,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
} from "@atomos_tech/genesis";
import CodeSnippet from "../../button/_components/CodeSnippet";

const CircularProgressExample = () => {
  const [nestedTabs, setNestedTabs] = useState({
    circular: "react",
  });

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div className="space-y-6">
      {/* Circular Progress Examples */}
      <div className="flex items-center gap-8 py-6 flex-wrap">
        <div className="flex flex-col items-center gap-2">
          <CircularProgress size={50} strokeWidth={4} percentage={50} />
          <span className="text-sm text-gray-600">Small</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <CircularProgress size={90} strokeWidth={10} percentage={70} />
          <span className="text-sm text-gray-600">Medium</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <CircularProgress
            size={160}
            strokeWidth={8}
            percentage={60}
            text="60%"
            textClassName="text-primary-600 font-semibold"
          />
          <span className="text-sm text-gray-600">Large with Text</span>
        </div>
      </div>

      {/* Nested Tabs for React / Next */}
      <TabsContainer value={nestedTabs.circular}>
        <TabList
          onChange={(val) => handleNestedTabChanges("circular", val)}
          ariaLabel="React and Next tabs"
          className="border-b border-gray-200 mb-4"
          box
        >
          <Tab
            label="React"
            value="react"
            selectedTabValue={nestedTabs.circular}
            onChange={(val) => handleNestedTabChanges("circular", val)}
          />
          <Tab
            label="Next"
            value="next"
            selectedTabValue={nestedTabs.circular}
            onChange={(val) => handleNestedTabChanges("circular", val)}
          />
        </TabList>

        <TabPanel value="react" currentValue={nestedTabs.circular}>
          <CodeSnippet
            title="Circular Progress - React"
            code={`import { CircularProgress } from "@atomos_tech/genesis";

const CircularProgressExample = () => {
  return (
    <div className="flex items-center gap-8 flex-wrap">
      <div className="flex flex-col items-center gap-2">
        <CircularProgress size={50} strokeWidth={4} percentage={50} />
        <span className="text-sm text-gray-600">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CircularProgress size={90} strokeWidth={10} percentage={70} />
        <span className="text-sm text-gray-600">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CircularProgress
          size={120}
          strokeWidth={8}
          percentage={60}
          text="60%"
          textClassName="text-primary-600 font-semibold"
        />
        <span className="text-sm text-gray-600">Large with Text</span>
      </div>
    </div>
  );
};

export default CircularProgressExample;`}
          />
        </TabPanel>

        <TabPanel value="next" currentValue={nestedTabs.circular}>
          <CodeSnippet
            title="Circular Progress - Next.js"
            code={`"use client";

import { CircularProgress } from "@atomos_tech/genesis";

const CircularProgressExample = () => {
  return (
    <div className="flex items-center gap-8 flex-wrap">
      <div className="flex flex-col items-center gap-2">
        <CircularProgress size={50} strokeWidth={4} percentage={50} />
        <span className="text-sm text-gray-600">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CircularProgress size={90} strokeWidth={10} percentage={70} />
        <span className="text-sm text-gray-600">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CircularProgress
          size={120}
          strokeWidth={8}
          percentage={60}
          text="60%"
          textClassName="text-primary-600 font-semibold"
        />
        <span className="text-sm text-gray-600">Large with Text</span>
      </div>
    </div>
  );
};

export default CircularProgressExample;`}
          />
        </TabPanel>
      </TabsContainer>
    </div>
  );
};

export default CircularProgressExample;
