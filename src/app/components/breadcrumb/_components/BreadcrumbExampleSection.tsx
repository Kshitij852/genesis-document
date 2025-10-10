"use client";
import React, { useState } from "react";
import {
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
  BreadCrumb,
} from "@atomos_tech/genesis";
import Link from "next/link";
import {
  RiStackLine,
  RiHome2Line,
  RiArrowRightSLine,
  RiTeamLine,
} from "@remixicon/react";
import CodeSnippet from "../../button/_components/CodeSnippet";

const BreadcrumbExampleSection = () => {
  const [nestedTabs, setNestedTabs] = useState({
    basic: "react",
    customSeparator: "react",
    withIcons: "react",
    styled: "react",
  });

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 items-start">
      {/* Basic Breadcrumb */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Basic Breadcrumb
        </h2>
        <div className="mb-4">
          <BreadCrumb aria-label="breadcrumb" separator="/">
            <Link href="/">Home</Link>
            <Link href="/pages/dashboard">Dashboard</Link>
            <Link href="/pages/team">Team</Link>
          </BreadCrumb>
        </div>

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
              title="Basic Breadcrumb"
              code={`<BreadCrumb aria-label="breadcrumb" separator="/">
  <Link href="/">Home</Link>
  <Link href="/pages/dashboard">Dashboard</Link>
  <Link href="/pages/team">Team</Link>
</BreadCrumb>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.basic}>
            <CodeSnippet
              title="Basic Breadcrumb"
              code={`<BreadCrumb aria-label="breadcrumb" separator="/">
  <Link href="/">Home</Link>
  <Link href="/pages/dashboard">Dashboard</Link>
  <Link href="/pages/team">Team</Link>
</BreadCrumb>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* Custom Separator */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Custom Separator
        </h2>
        <div className="mb-4">
          <BreadCrumb
            aria-label="breadcrumb"
            separator={
              <span className="mx-2 text-gray-400">
                <RiArrowRightSLine size={16} />
              </span>
            }
          >
            <Link href="/">Home</Link>
            <Link href="/pages/dashboard">Dashboard</Link>
            <Link href="/pages/team">Team</Link>
          </BreadCrumb>
        </div>

        <TabsContainer value={nestedTabs.customSeparator}>
          <TabList
            onChange={(val) => handleNestedTabChanges("customSeparator", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.customSeparator}
              onChange={(val) => handleNestedTabChanges("customSeparator", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.customSeparator}
              onChange={(val) => handleNestedTabChanges("customSeparator", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.customSeparator}>
            <CodeSnippet
              title="Custom Separator"
              code={`<BreadCrumb 
  aria-label="breadcrumb" 
  separator={
    <span className="mx-2 text-gray-400">
      <RiArrowRightSLine size={16} />
    </span>
  }
>
  <Link href="/">Home</Link>
  <Link href="/pages/dashboard">Dashboard</Link>
  <Link href="/pages/team">Team</Link>
</BreadCrumb>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.customSeparator}>
            <CodeSnippet
              title="Custom Separator"
              code={`<BreadCrumb 
  aria-label="breadcrumb" 
  separator={
    <span className="mx-2 text-gray-400">
      <RiArrowRightSLine size={16} />
    </span>
  }
>
  <Link href="/">Home</Link>
  <Link href="/pages/dashboard">Dashboard</Link>
  <Link href="/pages/team">Team</Link>
</BreadCrumb>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* With Icons */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">With Icons</h2>
        <div className="mb-4">
          <BreadCrumb aria-label="breadcrumb" separator="/">
            <Link href="/" className="flex items-center gap-1">
              <RiHome2Line size={16} />
              Home
            </Link>
            <Link href="/pages/dashboard" className="flex items-center gap-1">
              <RiStackLine size={16} />
              Dashboard
            </Link>
            <Link href="/pages/team" className="flex items-center gap-1">
              <RiTeamLine size={16} />
              Team
            </Link>
          </BreadCrumb>
        </div>

        <TabsContainer value={nestedTabs.withIcons}>
          <TabList
            onChange={(val) => handleNestedTabChanges("withIcons", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.withIcons}
              onChange={(val) => handleNestedTabChanges("withIcons", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.withIcons}
              onChange={(val) => handleNestedTabChanges("withIcons", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.withIcons}>
            <CodeSnippet
              title="Breadcrumb with Icons"
              code={`<BreadCrumb aria-label="breadcrumb" separator="/">
  <Link href="/" className="flex items-center gap-1">
    <RiHome2Line size={16} />
    Home
  </Link>
  <Link href="/pages/dashboard" className="flex items-center gap-1">
    <RiStackLine size={16} />
    Dashboard
  </Link>
  <Link href="/pages/team" className="flex items-center gap-1">
     <RiTeamLine size={16} />
     Team
  </Link>
</BreadCrumb>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.withIcons}>
            <CodeSnippet
              title="Breadcrumb with Icons"
              code={`<BreadCrumb aria-label="breadcrumb" separator="/">
  <Link href="/" className="flex items-center gap-1">
    <RiHome2Line size={16} />
    Home
  </Link>
  <Link href="/pages/dashboard" className="flex items-center gap-1">
    <RiStackLine size={16} />
    Dashboard
  </Link>
  <Link href="/pages/team" className="flex items-center gap-1">
    <RiTeamLine size={16} />
    Team
  </Link>
</BreadCrumb>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* Styled Breadcrumb */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Styled Breadcrumb
        </h2>
        <div className="mb-4">
          <BreadCrumb
            aria-label="breadcrumb"
            separator="/"
            // className="bg-gray-50 p-3 rounded-lg"
          >
            <Link
              href="/"
              className="text-primary-600 hover:text-primary-800 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/pages/dashboard"
              className="text-primary-600 hover:text-primary-800 transition-colors underline"
            >
              Dashboard
            </Link>
            <Link
              href="/pages/team"
              className="text-primary-600 bg-primary-200 px-2 py-1 rounded-full font-semibold"
            >
              Team
            </Link>
          </BreadCrumb>
        </div>

        <TabsContainer value={nestedTabs.styled}>
          <TabList
            onChange={(val) => handleNestedTabChanges("styled", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.styled}
              onChange={(val) => handleNestedTabChanges("styled", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.styled}
              onChange={(val) => handleNestedTabChanges("styled", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.styled}>
            <CodeSnippet
              title="Styled Breadcrumb"
              code={`<BreadCrumb 
  aria-label="breadcrumb" 
  separator="/"
  className="bg-gray-50 p-3 rounded-lg"
>
  <Link 
    href="/" 
    className="text-primary-600 hover:text-primary-800 transition-colors"
  >
    Home
  </Link>
  <Link 
    href="/pages/dashboard"
    className="text-primary-600 hover:text-primary-800 transition-colors underline"
  >
    Dashboard
  </Link>
  <Link 
    href="/pages/team"
    className="text-primary-600 bg-primary-200 px-2 py-1 rounded-full font-semibold"
  >
    Team
  </Link>
</BreadCrumb>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.styled}>
            <CodeSnippet
              title="Styled Breadcrumb"
              code={`<BreadCrumb 
  aria-label="breadcrumb" 
  separator="/"
  className="bg-gray-50 p-3 rounded-lg"
>
  <Link 
    href="/" 
    className="text-primary-600 hover:text-primary-800 transition-colors"
  >
    Home
  </Link>
  <Link 
    href="/pages/dashboard"
    className="text-primary-600 hover:text-primary-800 transition-colors underline"
  >
    Dashboard
  </Link>
  <Link 
    href="/pages/team"
    className="text-primary-600 bg-primary-200 px-2 py-1 rounded-full font-semibold"
  >
    Team
  </Link>
</BreadCrumb>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>
    </div>
  );
};

export default BreadcrumbExampleSection;
