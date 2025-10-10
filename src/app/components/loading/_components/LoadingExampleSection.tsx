"use client";

import React, { useState } from "react";
import {
  Loading,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
  Button,
} from "@atomos_tech/genesis";
import CodeSnippet from "../../button/_components/CodeSnippet";

const LoadingExampleSection = () => {
  const [nestedTabs, setNestedTabs] = useState({
    variants: "react",
    usage: "react",
  });

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 items-start">
      {/* Variants Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Variants</h2>

        {/* Loading variant examples */}
        <div className="flex flex-col gap-6 mb-6">
          <div className="flex flex-col items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700">Default</h3>
            <Loading width="40px" height="40px" />
            <p className="text-xs text-gray-500">Standard loading spinner</p>
          </div>

          <div className="flex flex-col items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700">Light Variant</h3>
            <Loading width="40px" height="40px" variant="light" />
            <p className="text-xs text-gray-500">Lighter stroke weight</p>
          </div>

          <div className="flex flex-col items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700">Heavy Variant</h3>
            <Loading width="40px" height="40px" variant="heavy" />
            <p className="text-xs text-gray-500">Heavier stroke weight</p>
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
              title="Loading Variants"
              code={`{/* Default Variant */}
<div className="flex flex-col items-center gap-3">
  <Loading width="40px" height="40px" />
  <p className="text-xs text-gray-500">Standard loading spinner</p>
</div>

{/* Light Variant */}
<div className="flex flex-col items-center gap-3">
  <Loading width="40px" height="40px" variant="light" />
  <p className="text-xs text-gray-500">Lighter stroke weight</p>
</div>

{/* Heavy Variant */}
<div className="flex flex-col items-center gap-3">
  <Loading width="40px" height="40px" variant="heavy" />
  <p className="text-xs text-gray-500">Heavier stroke weight</p>
</div>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.variants}>
            <CodeSnippet
              title="Loading Variants"
              code={`{/* Default Variant */}
<div className="flex flex-col items-center gap-3">
  <Loading width="40px" height="40px" />
  <p className="text-xs text-gray-500">Standard loading spinner</p>
</div>

{/* Light Variant */}
<div className="flex flex-col items-center gap-3">
  <Loading width="40px" height="40px" variant="light" />
  <p className="text-xs text-gray-500">Lighter stroke weight</p>
</div>

{/* Heavy Variant */}
<div className="flex flex-col items-center gap-3">
  <Loading width="40px" height="40px" variant="heavy" />
  <p className="text-xs text-gray-500">Heavier stroke weight</p>
</div>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* Usage Examples Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Usage Examples
        </h2>

        {/* Loading usage examples */}
        <div className="flex flex-col gap-6 mb-6">
          {/* Full Page Loading */}
          <div className="flex flex-col items-center justify-center gap-3 p-6 bg-gray-50 rounded-lg">
            <Loading width="50px" height="50px" loaderColor="green" />
            <span className="font-bold text-gray-800">Hold On ...</span>
            <p className="text-sm text-gray-500 text-center">
              {` We are running into some issues :(`}
            </p>
          </div>

          {/* Button Loading States */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-medium text-gray-700">
              Button Loading States
            </h3>
            <div className="flex gap-3 flex-wrap">
              <Button>
                Loading <Loading width="15px" height="15px" variant="light" />
              </Button>
              <Button variant="outlined">
                Loading <Loading width="15px" height="15px" variant="heavy" />
              </Button>
              <Button variant="filled" intent={"success"}>
                Processing{" "}
                <Loading
                  width="15px"
                  height="15px"
                  loaderColor="white"
                  variant="light"
                />
              </Button>
            </div>
          </div>

          {/* Custom Colors */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-medium text-gray-700">Custom Colors</h3>
            <div className="flex gap-4 justify-center">
              <Loading width="30px" height="30px" loaderColor="red" />
              <Loading width="30px" height="30px" loaderColor="violet" />
              <Loading width="30px" height="30px" loaderColor="black" />
              <Loading width="30px" height="30px" loaderColor="purple" />
              <Loading width="30px" height="30px" loaderColor="orange" />
              <Loading width="30px" height="30px" loaderColor="bluegray" />
              <Loading width="30px" height="30px" loaderColor="pink" />
              <Loading width="30px" height="30px" loaderColor="blue" />
            </div>
          </div>
        </div>

        <TabsContainer value={nestedTabs.usage}>
          <TabList
            onChange={(val) => handleNestedTabChanges("usage", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.usage}
              onChange={(val) => handleNestedTabChanges("usage", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.usage}
              onChange={(val) => handleNestedTabChanges("usage", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.usage}>
            <CodeSnippet
              title="Loading Usage Examples"
              code={`{/* Full Page Loading */}
<div className="flex flex-col items-center justify-center gap-3 p-6">
  <Loading width="50px" height="50px" loaderColor="green" />
  <span className="font-bold">Hold On ...</span>
  <p className="text-sm text-gray-500">
    We are running into some issues :(
  </p>
</div>

{/* Button Loading States */}
<div className="flex gap-3 flex-wrap">
  <Button>
    Loading <Loading width="15px" height="15px" variant="light" />
  </Button>
  <Button variant="outlined">
    Loading <Loading width="15px" height="15px" variant="heavy" />
  </Button>
  <Button variant="filled" intent={"success"}>
    Processing <Loading width="15px" height="15px" loaderColor="white" variant="light" />
  </Button>
</div>

{/* Custom Colors */}
<div className="flex gap-4 justify-center">
  <Loading width="30px" height="30px" loaderColor="red" />
  <Loading width="30px" height="30px" loaderColor="violet" />
  <Loading width="30px" height="30px" loaderColor="black" />
  <Loading width="30px" height="30px" loaderColor="purple" />
  <Loading width="30px" height="30px" loaderColor="orange" />
  <Loading width="30px" height="30px" loaderColor="bluegray" />
  <Loading width="30px" height="30px" loaderColor="pink" />
  <Loading width="30px" height="30px" loaderColor="blue" />
</div>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.usage}>
            <CodeSnippet
              title="Loading Usage Examples"
              code={`{/* Full Page Loading */}
<div className="flex flex-col items-center justify-center gap-3 p-6">
  <Loading width="50px" height="50px" loaderColor="green" />
  <span className="font-bold">Hold On ...</span>
  <p className="text-sm text-gray-500">
    We are running into some issues :(
  </p>
</div>

{/* Button Loading States */}
<div className="flex gap-3 flex-wrap">
  <Button>
    Loading <Loading width="15px" height="15px" variant="light" />
  </Button>
  <Button variant="outlined">
    Loading <Loading width="15px" height="15px" variant="heavy" />
  </Button>
  <Button variant="filled" intent={"success"}>
    Processing <Loading width="15px" height="15px" loaderColor="white" variant="light" />
  </Button>
</div>

{/* Custom Colors */}
<div className="flex gap-4 justify-center">
 <Loading width="30px" height="30px" loaderColor="red" />
  <Loading width="30px" height="30px" loaderColor="violet" />
  <Loading width="30px" height="30px" loaderColor="black" />
  <Loading width="30px" height="30px" loaderColor="purple" />
  <Loading width="30px" height="30px" loaderColor="orange" />
  <Loading width="30px" height="30px" loaderColor="bluegray" />
  <Loading width="30px" height="30px" loaderColor="pink" />
  <Loading width="30px" height="30px" loaderColor="blue" />
</div>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>
    </div>
  );
};

export default LoadingExampleSection;
