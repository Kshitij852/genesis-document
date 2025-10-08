"use client";

import React, { useState } from "react";
import {
  Tooltip,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
  Button,
} from "@atomos_tech/genesis";
import CodeSnippet from "../../button/_components/CodeSnippet";
import { RiInformationLine } from "@remixicon/react";
const TooltipExampleSection = () => {
  const [nestedTabs, setNestedTabs] = useState({
    positions: "react",
    content: "react",
  });

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 items-start">
      {/* Positions Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Positions</h2>

        {/* Tooltip examples */}
        <div className="flex items-center gap-8 mb-6 flex-wrap">
          <Tooltip
            position="top"
            className="text-success-500 max-w-[200px]"
            content="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element."
          >
            Top
          </Tooltip>

          <Tooltip
            position="right"
            content="Tooltips provide additional information on hover or focus."
          >
            Right
          </Tooltip>

          <Tooltip
            position="bottom"
            content="Tooltips are used to describe or identify an element."
          >
            Bottom
          </Tooltip>

          <Tooltip
            position="left"
            content="Tooltips help users understand UI elements."
            className="max-w-[200px]"
          >
            Left
          </Tooltip>
        </div>

        {/* Nested Tabs for React / Next */}
        <TabsContainer value={nestedTabs.positions}>
          <TabList
            onChange={(val) => handleNestedTabChanges("positions", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.positions}
              onChange={(val) => handleNestedTabChanges("positions", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.positions}
              onChange={(val) => handleNestedTabChanges("positions", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.positions}>
            <CodeSnippet
              title="Tooltip Positions"
              code={`<Tooltip
  position="top"
  className="text-success-500 max-w-[200px]"
  content="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element."
  > 
  Top
</Tooltip>

<Tooltip
  position="right"
  content="Tooltips provide additional information on hover or focus."
  >
  Right
</Tooltip>

<Tooltip
  position="bottom"
  content="Tooltips are used to describe or identify an element."
  >
  Bottom
</Tooltip>

<Tooltip
  position="left"
  content="Tooltips help users understand UI elements."
  >
  Left
</Tooltip>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.positions}>
            <CodeSnippet
              title="Tooltip Positions"
              code={`<Tooltip
  position="top"
  className="text-success-500 max-w-[200px]"
  content="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element."
  > 
  Top
</Tooltip>

<Tooltip
  position="right"
  content="Tooltips provide additional information on hover or focus."
  >
  Right
</Tooltip>

<Tooltip
  position="bottom"
  content="Tooltips are used to describe or identify an element."
  >
  Bottom
</Tooltip>

<Tooltip
  position="left"
  content="Tooltips help users understand UI elements."
  >
  Left
</Tooltip>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* Content Types Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Content Types
        </h2>

        {/* Tooltip content examples */}
        <div className="flex items-center gap-6 mb-6 flex-wrap">
          <Tooltip
            position="top"
            content="Simple text tooltip with basic information"
          >
            <Button
              variant={"outlined"}
              intent={"default-outlined"}
              className="text-xs py-1.5 px-2.5"
            >
              Simple Text
            </Button>
          </Tooltip>

          <Tooltip
            position="top"
            content={
              <div>
                <h1 className="font-semibold text-xs mb-1">
                  Rich Content Tooltip
                </h1>
                <p className="font-normal text-xs">
                  Tooltips can contain formatted content with headings and
                  paragraphs for better information hierarchy.
                </p>
              </div>
            }
          >
            <Button
              variant={"outlined"}
              intent={"warning-outlined"}
              className="text-xs py-1.5 px-2.5"
            >
              Rich Content
            </Button>
          </Tooltip>

          <Tooltip
            position="right"
            content="Custom styled tooltip with different colors"
            className="bg-primary-500 text-white max-w-[180px]"
          >
            <Button
              variant={"outlined"}
              intent={"primary-outlined"}
              className="text-xs py-1.5 px-2.5"
            >
              Custom Style
            </Button>
          </Tooltip>

          <Tooltip position="bottom" content="Tooltip with icon trigger">
            <RiInformationLine size={16} />
          </Tooltip>
        </div>

        <TabsContainer value={nestedTabs.content}>
          <TabList
            onChange={(val) => handleNestedTabChanges("content", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.content}
              onChange={(val) => handleNestedTabChanges("content", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.content}
              onChange={(val) => handleNestedTabChanges("content", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.content}>
            <CodeSnippet
              title="Tooltip Content Types"
              code={`   {/* Simple Text */}
      <Tooltip
        position="top"
        content="Simple text tooltip with basic information"
      >
        <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">
          Simple Text
        </button>
      </Tooltip>

      {/* Rich Content */}
      <Tooltip
        position="top"
        content={
          <div>
            <h1 className="font-semibold text-xs mb-1">Rich Content Tooltip</h1>
            <p className="font-normal text-xs">
              Tooltips can contain formatted content with headings and paragraphs for better information hierarchy.
            </p>
          </div>
        }
      >
        <button className="px-3 py-2 bg-primary-100 text-primary-700 rounded-md text-sm font-medium">
          Rich Content
        </button>
      </Tooltip>

      {/* Custom Styled */}
      <Tooltip
        position="right"
        content="Custom styled tooltip with different colors"
        className="bg-purple-500 text-white max-w-[180px]"
      >
        <button className="px-3 py-2 bg-purple-100 text-purple-700 rounded-md text-sm font-medium">
          Custom Style
        </button>
      </Tooltip>

      {/* Icon Trigger */}
      <Tooltip
        position="bottom"
        content="Tooltip with icon trigger"
      >
        <button className="p-2 bg-bluegray-100 text-bluegray-700 rounded-md">
          <RiInformationLine size={16} />
        </button>
      </Tooltip>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.content}>
            <CodeSnippet
              title="Tooltip Content Types"
              code={`      {/* Simple Text */}
      <Tooltip
        position="top"
        content="Simple text tooltip with basic information"
      >
        <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">
          Simple Text
        </button>
      </Tooltip>

      {/* Rich Content */}
      <Tooltip
        position="top"
        content={
          <div>
            <h1 className="font-semibold text-xs mb-1">Rich Content Tooltip</h1>
            <p className="font-normal text-xs">
              Tooltips can contain formatted content with headings and paragraphs for better information hierarchy.
            </p>
          </div>
        }
      >
        <button className="px-3 py-2 bg-primary-100 text-primary-700 rounded-md text-sm font-medium">
          Rich Content
        </button>
      </Tooltip>

      {/* Custom Styled */}
      <Tooltip
        position="right"
        content="Custom styled tooltip with different colors"
        className="bg-purple-500 text-white max-w-[180px]"
      >
        <button className="px-3 py-2 bg-purple-100 text-purple-700 rounded-md text-sm font-medium">
          Custom Style
        </button>
      </Tooltip>

      {/* Icon Trigger */}
      <Tooltip
        position="bottom"
        content="Tooltip with icon trigger"
      >
        <button className="p-2 bg-bluegray-100 text-bluegray-700 rounded-md">
          <RiInformationLine size={16} />
        </button>
      </Tooltip>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>
    </div>
  );
};

export default TooltipExampleSection;
