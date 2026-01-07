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
  Button,
} from "@atomos_tech/genesis";
import CodeSnippet from "../../button/_components/CodeSnippet";
import { RiAlertFill } from "@remixicon/react";

const AccordionExampleSection = () => {
  const [nestedTabs, setNestedTabs] = useState({
    single: "react",
    multiple: "react",
    expandCollapse: "react",
  });
  const [isExpanded, setIsExpanded] = useState(false);

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
                {` Yes. It comes with default styles that match the other
                components' aesthetic.`}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger defaultOpen={true}>
                Is it animated?
              </AccordionTrigger>
              <AccordionContent>
                {` Yes. It's animated by default, but you can disable it if you
                prefer.`}
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
                {` Yes. It comes with default styles that match the other
                components' aesthetic.`}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger defaultOpen={true}>
                Is it animated?
              </AccordionTrigger>
              <AccordionContent>
                {`Yes. It's animated by default, but you can disable it if you
                prefer.`}
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

      {/* Expand/Collapse All Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col md:col-span-2">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Expand/Collapse All Functionality
        </h2>

        <div className="mb-6">
          <div className="my-5 flex gap-4 items-center">
            <Button onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? "Collapse All" : "Expand All"}
            </Button>
            <span className="text-sm text-gray-500">
              {isExpanded
                ? "All accordion items are expanded"
                : "All accordion items are collapsed"}
            </span>
          </div>

          <Accordion
            type="single"
            collapsible
            className="w-full space-y-2"
            expanded={isExpanded}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger defaultOpen={true}>
                <p className="font-medium">
                  What is your favorite template from BRIX Templates?
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="p-6 border border-gray-200 rounded-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger defaultOpen={true}>
                Is it easy to customize the templates?
              </AccordionTrigger>
              <AccordionContent>
                Yes, all our templates are built with customization in mind.
                They use modern CSS and are structured for easy modifications.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger defaultOpen={true}>
                Are the templates responsive?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! All BRIX Templates are fully responsive and work
                perfectly on desktop, tablet, and mobile devices.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger defaultOpen={true}>
                What kind of support do you provide?
              </AccordionTrigger>
              <AccordionContent>
                We provide comprehensive documentation and email support. For
                enterprise customers, we also offer priority support and
                customization services.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger defaultOpen={true}>
                Can I use the templates for commercial projects?
              </AccordionTrigger>
              <AccordionContent>
                Yes, all our templates come with a commercial license that
                allows you to use them in both personal and commercial projects
                without any restrictions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <TabsContainer value={nestedTabs.expandCollapse}>
          <TabList
            onChange={(val) => handleNestedTabChanges("expandCollapse", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.expandCollapse}
              onChange={(val) => handleNestedTabChanges("expandCollapse", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.expandCollapse}
              onChange={(val) => handleNestedTabChanges("expandCollapse", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.expandCollapse}>
            <CodeSnippet
              title="Expand/Collapse All Functionality"
              code={`import React, { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, Button } from "@atomos_tech/genesis";

const FAQSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="my-5">
      <section className="my-5 flex gap-4 items-center">
        <Button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Collapse All" : "Expand All"}
        </Button>
      </section>

      <Accordion
        type="single"
        collapsible
        className="w-full space-y-2"
        expanded={isExpanded}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger defaultOpen={true}>
            <p className="font-medium">
              What is your favorite template from BRIX Templates?
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <div className="p-6 border border-gray-200 rounded-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger defaultOpen={true}>
            Is it easy to customize the templates?
          </AccordionTrigger>
          <AccordionContent>
            Yes, all our templates are built with customization in mind. They use modern CSS and are structured for easy modifications.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger defaultOpen={true}>
            Are the templates responsive?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely! All BRIX Templates are fully responsive and work perfectly on desktop, tablet, and mobile devices.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQSection;`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.expandCollapse}>
            <CodeSnippet
              title="Expand/Collapse All Functionality"
              code={`"use client";
import { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, Button } from "@atomos_tech/genesis";

export default function FAQPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="my-5">
      <section className="my-5 flex gap-4 items-center">
        <Button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Collapse All" : "Expand All"}
        </Button>
      </section>

      <Accordion
        type="single"
        collapsible
        className="w-full space-y-2"
        expanded={isExpanded}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger defaultOpen={true}>
            <p className="font-medium">
              What is your favorite template from BRIX Templates?
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <div className="p-6 border border-gray-200 rounded-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger defaultOpen={true}>
            Is it easy to customize the templates?
          </AccordionTrigger>
          <AccordionContent>
            Yes, all our templates are built with customization in mind. They use modern CSS and are structured for easy modifications.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger defaultOpen={true}>
            Are the templates responsive?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely! All BRIX Templates are fully responsive and work perfectly on desktop, tablet, and mobile devices.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
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

export default AccordionExampleSection;
