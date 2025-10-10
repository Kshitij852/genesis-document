import {
  GlobalNavigation,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
} from "@atomos_tech/genesis";
import { HelperText, Divider, Button } from "@atomos_tech/genesis";
import { RiLogoutBoxRLine } from "@remixicon/react";
import React, { useState } from "react";

import CodeSnippet from "../../button/_components/CodeSnippet";

// Sample navigation component for demonstration
const GlobalNavigationComponent = () => {
  return (
    <>
      <div>
        <p className="h-14 w-14 rounded-full text-primary-700 text-lg border border-primary-300 flex justify-center items-center">
          JD
        </p>
      </div>
      <div className="text-center text-gray-900">
        <p className="text-base font-semibold w-[250px] whitespace-nowrap text-ellipsis overflow-hidden block">
          John Doe
        </p>
        <HelperText
          size="sm"
          className="w-[250px] whitespace-nowrap text-ellipsis overflow-hidden block"
        >
          john.doe@email.com
        </HelperText>
      </div>
      <Divider />
      <Button
        className="w-full"
        variant="outlined"
        size={"sm"}
        fullWidth
        startIcon={<RiLogoutBoxRLine size={20} />}
        onClick={() => {
          alert("Logout button clicked");
        }}
      >
        Logout
      </Button>
    </>
  );
};

const GlobalNavigationExamples = () => {
  const [nestedTabs, setNestedTabs] = useState({
    basic: "react",
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div className="space-y-8">
      {/* Basic GlobalNavigation Example */}
      <section className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">
          Global Navigation
        </h2>

        <div className="space-y-6 mb-6">
          {/* Basic Navigation */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              Basic Global Navigation
            </h3>
            <div className="flex items-center w-full justify-center">
              <GlobalNavigation
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                // position="bottom-left"
                trigger={
                  <p className="h-14 w-14 rounded-full text-lg border bg-primary-200 text-primary-700 flex justify-center items-center cursor-pointer">
                    JD
                  </p>
                }
                className="max-w-[270px] p-4 flex flex-col gap-4 justify-center items-center"
              >
                <GlobalNavigationComponent />
              </GlobalNavigation>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Click on the avatar to open the global navigation menu
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
              title="Global Navigation Usage"
              code={`import { HelperText, Divider, Button } from "@atomos_tech/genesis";
import { GlobalNavigation } from "@atomos_tech/genesis";
import { RiLogoutBoxRLine } from "@remixicon/react";
import { useState } from "react";

// Navigation component content
const GlobalNavigationComponent = () => {
  return (
    <>
      <div>
        <p className="h-14 w-14 rounded-full text-lg border flex justify-center items-center">
          JD
        </p>
      </div>
      <div className="text-center text-gray-900">
        <p className="text-base font-semibold w-[250px] whitespace-nowrap text-ellipsis overflow-hidden block">
          John Doe
        </p>
        <HelperText
          size="sm"
          className="w-[250px] whitespace-nowrap text-ellipsis overflow-hidden block"
        >
          john.doe@email.com
        </HelperText>
      </div>
      <Divider />
      <Button
        className="w-full"
        variant="outlined"
        intent="default-outlined"
        size={"sm"}
        fullWidth
        startIcon={<RiLogoutBoxRLine size={20} />}
        onClick={() => {
          alert("Logout button clicked");
        }}
      >
        Logout
      </Button>
    </>
  );
};

const GlobalNavigationExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <GlobalNavigation
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        position="bottom-left"
        trigger={
          <p className="h-14 w-14 rounded-full text-lg border flex justify-center items-center cursor-pointer">
            JD
          </p>
        }
        className="max-w-[270px] p-4 flex flex-col gap-4 justify-center items-center"
      >
        <GlobalNavigationComponent />
      </GlobalNavigation>
    </div>
  );
};

export default GlobalNavigationExample;`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.basic}>
            <CodeSnippet
              title="Global Navigation Usage"
              code={`"use client";
import { HelperText, Divider, Button } from "@atomos_tech/genesis";
import { GlobalNavigation } from "@atomos_tech/genesis";
import { RiLogoutBoxRLine } from "@remixicon/react";
import { useState } from "react";

// Navigation component content
const GlobalNavigationComponent = () => {
  return (
    <>
      <div>
        <p className="h-14 w-14 rounded-full text-lg border flex justify-center items-center">
          JD
        </p>
      </div>
      <div className="text-center text-gray-900">
        <p className="text-base font-semibold w-[250px] whitespace-nowrap text-ellipsis overflow-hidden block">
          John Doe
        </p>
        <HelperText
          size="sm"
          className="w-[250px] whitespace-nowrap text-ellipsis overflow-hidden block"
        >
          john.doe@email.com
        </HelperText>
      </div>
      <Divider />
      <Button
        className="w-full"
        variant="outlined"
        intent="default-outlined"
        size={"sm"}
        fullWidth
        startIcon={<RiLogoutBoxRLine size={20} />}
        onClick={() => {
          alert("Logout button clicked");
        }}
      >
        Logout
      </Button>
    </>
  );
};

const GlobalNavigationExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <GlobalNavigation
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        position="bottom-left"
        trigger={
          <p className="h-14 w-14 rounded-full text-lg border flex justify-center items-center cursor-pointer">
            JD
          </p>
        }
        className="max-w-[270px] p-4 flex flex-col gap-4 justify-center items-center"
      >
        <GlobalNavigationComponent />
      </GlobalNavigation>
    </div>
  );
};

export default GlobalNavigationExample;`}
            />
          </TabPanel>
        </TabsContainer>
      </section>
    </div>
  );
};

export default GlobalNavigationExamples;
