"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
} from "@atomos_tech/genesis";
import CodeSnippet from "../../button/_components/CodeSnippet";
import { RiAlertFill } from "@remixicon/react";
const AccordionExampleSection = () => {
  const [nestedTabs, setNestedTabs] = useState({
    single: "react",
    multiple: "react",
  });

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 items-start">
      {/* Accordion Single Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Accordion Single
        </h2>

        {/* Accordion examples */}
        <div className="mb-6">
          <Accordion type="single" collapsible className="w-full space-y-2">
            <AccordionItem value="item-1">
              <AccordionTrigger defaultOpen={true}>
                <p className="font-medium">
                  What is your favorite template from BRIX Templates?
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger defaultOpen={true}>
                Is it styled?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that match the other
                components' aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger defaultOpen={true}>
                Is it animated?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Nested Tabs for React / Next */}
        <TabsContainer value={nestedTabs.single}>
          <TabList
            onChange={(val) => handleNestedTabChanges("single", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.single}
              onChange={(val) => handleNestedTabChanges("single", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.single}
              onChange={(val) => handleNestedTabChanges("single", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.single}>
            <CodeSnippet
              title="Accordion Single"
              code={`<Accordion type="single" collapsible className="w-full space-y-2">
  <AccordionItem value="item-1">
    <AccordionTrigger defaultOpen={true}>
      <p className="font-medium">
        What is your favorite template from BRIX Templates?
      </p>
    </AccordionTrigger>
    <AccordionContent>
      <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.
      </div>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger defaultOpen={true}>
      Is it styled?
    </AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that match the other components'
      aesthetic.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger defaultOpen={true}>
      Is it animated?
    </AccordionTrigger>
    <AccordionContent>
      Yes. It's animated by default, but you can disable it if you prefer.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.single}>
            <CodeSnippet
              title="Accordion Single"
              code={`<Accordion type="single" collapsible className="w-full space-y-2">
  <AccordionItem value="item-1">
    <AccordionTrigger defaultOpen={true}>
      <p className="font-medium">
        What is your favorite template from BRIX Templates?
      </p>
    </AccordionTrigger>
    <AccordionContent>
      <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.
      </div>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger defaultOpen={true}>
      Is it styled?
    </AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that match the other components'
      aesthetic.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger defaultOpen={true}>
      Is it animated?
    </AccordionTrigger>
    <AccordionContent>
      Yes. It's animated by default, but you can disable it if you prefer.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* Accordion Multiple Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Accordion Multiple
        </h2>

        {/* Accordion examples */}
        <div className="mb-6">
          <Accordion type="multiple" className="w-full space-y-2">
            <AccordionItem value="item-1">
              <AccordionTrigger
                className="text-yellow-600"
                triggerIcon={<RiAlertFill />}
              >
                What is your favorite template from BRIX Templates?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that match the other
                components' aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger defaultOpen={true}>
                Is it animated?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <TabsContainer value={nestedTabs.multiple}>
          <TabList
            onChange={(val) => handleNestedTabChanges("multiple", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.multiple}
              onChange={(val) => handleNestedTabChanges("multiple", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.multiple}
              onChange={(val) => handleNestedTabChanges("multiple", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.multiple}>
            <CodeSnippet
              title="Accordion Multiple"
              code={`<Accordion type="multiple" className="w-full space-y-2">
  <AccordionItem value="item-1">
    <AccordionTrigger
      className="text-yellow-600"
      triggerIcon={<RiAlertFill />}
    >
      What is your favorite template from BRIX Templates?
    </AccordionTrigger>
    <AccordionContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that match the other components'
      aesthetic.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger defaultOpen={true}>
      Is it animated?
    </AccordionTrigger>
    <AccordionContent>
      Yes. It's animated by default, but you can disable it if you prefer.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.multiple}>
            <CodeSnippet
              title="Accordion Multiple"
              code={`<Accordion type="multiple" className="w-full space-y-2">
  <AccordionItem value="item-1">
    <AccordionTrigger
      className="text-yellow-600"
      triggerIcon={<RiAlertFill />}
    >
      What is your favorite template from BRIX Templates?
    </AccordionTrigger>
    <AccordionContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that match the other components'
      aesthetic.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger defaultOpen={true}>
      Is it animated?
    </AccordionTrigger>
    <AccordionContent>
      Yes. It's animated by default, but you can disable it if you prefer.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>
    </div>
  );
};
export default AccordionExampleSection;
