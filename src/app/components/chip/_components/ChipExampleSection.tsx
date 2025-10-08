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

const ChipExampleSection = () => {
  // Give each section its own tab state
  const [nestedTabs, setNestedTabs] = useState({
    sizes: "react",
    withDot: "react",
    withoutDot: "react",
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
          <Chip size="sm" intent="primary" dot>
            Size Sm
          </Chip>
          <Chip size="md" intent="primary" dot>
            Size Md
          </Chip>
          <Chip size="lg" intent="primary" dot>
            Size Lg
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
              code={`<Chip size="sm" intent="primary" dot>Size Sm</Chip>\n<Chip size="md" intent="primary" dot>Size Md</Chip>\n<Chip size="lg" intent="primary" dot>Size Lg</Chip>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.sizes}>
            <CodeSnippet
              title="Size Examples"
              code={`<Chip size="sm" intent="primary" dot>Size Sm</Chip>\n<Chip size="md" intent="primary" dot>Size Md</Chip>\n<Chip size="lg" intent="primary" dot>Size Lg</Chip>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>
    </div>
  );
};

export default ChipExampleSection;
