"use client";

import React, { useState } from "react";
import {
  MenuDropdown,
  MenuItem,
  MenuSubItem,
  ListItem,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
  Button,
} from "@atomos_tech/genesis";
import CodeSnippet from "../../button/_components/CodeSnippet";
import { RiAddLine } from "@remixicon/react";
import Link from "next/link";

const MenuItemsExampleSection = () => {
  const [nestedTabs, setNestedTabs] = useState({
    basic: "react",
    advanced: "react",
  });

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 items-start">
      {/* Basic Usage Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Basic Usage
        </h2>

        {/* Basic MenuDropdown Example */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Simple Dropdown Menu
          </h3>
          <div className="flex gap-4 flex-wrap items-center p-4 bg-gray-50 rounded-lg">
            <MenuDropdown
              trigger={
                <ListItem
                  as="button"
                  title="Products"
                  icon={<RiAddLine size={20} />}
                  className="w-max bg-primary-100 hover:bg-primary-200 rounded-full border border-primary-400"
                />
              }
            >
              <MenuSubItem label="Inertia" />
              <MenuItem content={<h6 className="font-semibold">Blaze</h6>}>
                <MenuSubItem
                  label="Flames"
                  onClick={() => alert("Flames clicked")}
                />
                <MenuSubItem
                  label="Blaze"
                  onClick={() => alert("Blaze clicked")}
                />
                <MenuSubItem
                  label="Admin"
                  onClick={() => alert("Admin clicked")}
                />
              </MenuItem>
              <Link
                href="https://qiwi.mirats.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MenuSubItem label="Qiwi" />
              </Link>

              <MenuSubItem label="Audit" />
            </MenuDropdown>
          </div>
        </div>

        {/* Simple Menu Example */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Simple Menu Items
          </h3>
          <div className="flex gap-4 flex-wrap items-center p-4 bg-gray-50 rounded-lg">
            <MenuDropdown
              trigger={
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium">
                  Actions
                </button>
              }
            >
              <MenuSubItem label="Home" onClick={() => alert("Home clicked")} />
              <MenuSubItem
                label="Profile"
                onClick={() => alert("Profile clicked")}
              />
              <MenuSubItem
                label="Settings"
                onClick={() => alert("Settings clicked")}
              />
            </MenuDropdown>
          </div>
        </div>

        {/* Nested Tabs for React / Next */}
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
              title="Basic MenuItems Usage"
              code={`import { MenuDropdown, MenuItem, MenuSubItem, ListItem } from "@atomos_tech/genesis";
import { RiAddLine } from "@remixicon/react";
import Link from "next/link";

    {/* Products Dropdown */}
    <MenuDropdown
      trigger={
        <ListItem
          as="button"
          title="Products"
          icon={<RiAddLine size={20} />}
          className="w-max bg-primary-100 hover:bg-primary-200 rounded-full border border-primary-400"
        />
      }
    >
      <MenuSubItem label="Inertia" />

      <MenuItem content={<h6 className="font-semibold">Blaze</h6>}>
        <MenuSubItem label="Flames" onClick={() => alert("Flames clicked")} />
        <MenuSubItem label="Blaze" onClick={() => alert("Blaze clicked")} />
        <MenuSubItem label="Admin" onClick={() => alert("Admin clicked")} />
      </MenuItem>

      <Link
        href="https://qiwi.mirats.app"
        target="_blank"
        rel="noopener noreferrer"
        >
        <MenuSubItem label="Qiwi" />
      </Link>

      <MenuSubItem label="Audit" />
    </MenuDropdown>

    {/* Simple Actions Menu */}
    <MenuDropdown
      trigger={
        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium">
          Actions
        </button>
      }
    >
      <MenuSubItem label="Home" onClick={() => alert("Home clicked")} />
      <MenuSubItem label="Profile" onClick={() => alert("Profile clicked")} />
      <MenuSubItem label="Settings" onClick={() => alert("Settings clicked")} />
    </MenuDropdown>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.basic}>
            <CodeSnippet
              title="Basic MenuItems Usage"
              code={`import { MenuDropdown, MenuItem, MenuSubItem, ListItem } from "@atomos_tech/genesis";
import { RiAddLine } from "@remixicon/react";
import Link from "next/link";

    {/* Products Dropdown */}
    <MenuDropdown
      trigger={
        <ListItem
          as="button"
          title="Products"
          icon={<RiAddLine size={20} />}
          className="w-max bg-primary-100 hover:bg-primary-200 rounded-full border border-primary-400"
        />
      }
    >
      <MenuSubItem label="Inertia" />

      <MenuItem content={<h6 className="font-semibold">Blaze</h6>}>
        <MenuSubItem label="Flames" onClick={() => alert("Flames clicked")} />
        <MenuSubItem label="Blaze" onClick={() => alert("Blaze clicked")} />
        <MenuSubItem label="Admin" onClick={() => alert("Admin clicked")} />
      </MenuItem>

      <Link
        href="https://qiwi.mirats.app"
        target="_blank"
        rel="noopener noreferrer"
        >
        <MenuSubItem label="Qiwi" />
      </Link>

      <MenuSubItem label="Audit" />
    </MenuDropdown>

    {/* Simple Actions Menu */}
    <MenuDropdown
      trigger={
        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium">
          Actions
        </button>
      }
    >
      <MenuSubItem label="Home" onClick={() => alert("Home clicked")} />
      <MenuSubItem label="Profile" onClick={() => alert("Profile clicked")} />
      <MenuSubItem label="Settings" onClick={() => alert("Settings clicked")} />
    </MenuDropdown>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* Advanced Usage Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Advanced Features
        </h2>

        {/* External Links Example */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            External Links
          </h3>
          <div className="flex gap-4 flex-wrap items-center p-4 bg-gray-50 rounded-lg">
            <MenuDropdown
              trigger={
                <Button variant={"outlined"} className="rounded-3xl">
                  Resources
                </Button>
              }
            >
              <Link href="https://example.com" target="_blank">
                <MenuSubItem label="External Link" />
              </Link>
              <Link href="https://docs.example.com" target="_blank">
                <MenuSubItem label="Documentation" />
              </Link>
              <MenuSubItem
                label="Internal Page"
                onClick={() => alert("Internal navigation")}
              />
            </MenuDropdown>
          </div>
        </div>

        {/* Custom Styling Example */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Custom Styling
          </h3>
          <div className="flex gap-4 flex-wrap items-center p-4 bg-gray-50 rounded-lg">
            <MenuDropdown
              trigger={
                <Button className="text-xs py-1.5 px-2.5">Styled Menu</Button>
              }
              className="bg-primary-50 border-primary-200"
            >
              <MenuSubItem
                label="Warning Item"
                className="text-primary-700 hover:bg-primary-100"
                onClick={() => alert("Warning action")}
              />
              <MenuSubItem
                label="Another Item"
                className="text-primary-700 hover:bg-primary-100"
                onClick={() => alert("Another action")}
              />
            </MenuDropdown>
          </div>
        </div>

        {/* Complex Nested Menu */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Complex Nested Menu
          </h3>
          <div className="flex gap-4 flex-wrap items-center p-4 bg-gray-50 rounded-lg">
            <MenuDropdown
              trigger={
                <Button variant={"outlined"} className="text-xs py-1.5 px-2.5">
                  Navigation
                </Button>
              }
            >
              <MenuSubItem
                label="Dashboard"
                onClick={() => alert("Dashboard")}
              />
              <MenuItem
                content={
                  <span className="font-semibold text-gray-700">Products</span>
                }
              >
                <MenuItem
                  content={
                    <span className="text-sm text-gray-600">Web Apps</span>
                  }
                >
                  <MenuSubItem
                    label="E-commerce"
                    onClick={() => alert("E-commerce")}
                  />
                  <MenuSubItem label="CMS" onClick={() => alert("CMS")} />
                </MenuItem>
                <MenuItem
                  content={
                    <span className="text-sm text-gray-600">Mobile Apps</span>
                  }
                >
                  <MenuSubItem label="iOS" onClick={() => alert("iOS")} />
                  <MenuSubItem
                    label="Android"
                    onClick={() => alert("Android")}
                  />
                </MenuItem>
              </MenuItem>
              <MenuSubItem label="Settings" onClick={() => alert("Settings")} />
            </MenuDropdown>
          </div>
        </div>

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
              title="Advanced MenuItems Features"
              code={`{/* External Links */}
<MenuDropdown
  trigger={
     <Button variant={"outlined"} className="rounded-3xl">
        Resources
     </Button>
  }
>
  <Link href="https://example.com" target="_blank">
    <MenuSubItem 
      label="External Link" 
      icon={<RiExternalLinkLine size={16} />}
    />
  </Link>
  <Link href="https://docs.example.com" target="_blank">
    <MenuSubItem 
      label="Documentation" 
      icon={<RiExternalLinkLine size={16} />}
    />
  </Link>
</MenuDropdown>

{/* Custom Styling */}
<MenuDropdown
  trigger={
    <Button className="text-xs py-1.5 px-2.5">Styled Menu</Button>
  }
    className="bg-primary-50 border-primary-200"
>
   <MenuSubItem
    label="Warning Item"
    className="text-primary-700 hover:bg-primary-100"
    onClick={() => alert("Warning action")}
    />
    <MenuSubItem
    label="Another Item"
    className="text-primary-700 hover:bg-primary-100"
    onClick={() => alert("Another action")}
    />
</MenuDropdown>

{/* Complex Nested Menu */}
<MenuDropdown
  trigger={
    <Button variant={"outlined"} className="text-xs py-1.5 px-2.5">
       Navigation
    </Button>
  }
>
  <MenuSubItem 
    label="Dashboard" 
    onClick={() => alert("Dashboard")}
  />
  <MenuItem content={<span className="font-semibold text-gray-700">Products</span>}>
    <MenuItem content={<span className="text-sm text-gray-600">Web Apps</span>}>
      <MenuSubItem label="E-commerce" onClick={() => alert("E-commerce")} />
      <MenuSubItem label="CMS" onClick={() => alert("CMS")} />
    </MenuItem>
    <MenuItem content={<span className="text-sm text-gray-600">Mobile Apps</span>}>
      <MenuSubItem label="iOS" onClick={() => alert("iOS")} />
      <MenuSubItem label="Android" onClick={() => alert("Android")} />
    </MenuItem>
  </MenuItem>
  <MenuSubItem 
    label="Settings" 
    onClick={() => alert("Settings")}
  />
</MenuDropdown>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.advanced}>
            <CodeSnippet
              title="Advanced MenuItems Features"
              code={`{/* External Links */}
<MenuDropdown
  trigger={
     <Button variant={"outlined"} className="rounded-3xl">
        Resources
     </Button>
  }
>
  <Link href="https://example.com" target="_blank">
    <MenuSubItem 
      label="External Link" 
      icon={<RiExternalLinkLine size={16} />}
    />
  </Link>
  <Link href="https://docs.example.com" target="_blank">
    <MenuSubItem 
      label="Documentation" 
      icon={<RiExternalLinkLine size={16} />}
    />
  </Link>
</MenuDropdown>

{/* Custom Styling */}
<MenuDropdown
  trigger={
    <Button className="text-xs py-1.5 px-2.5">Styled Menu</Button>
  }
    className="bg-primary-50 border-primary-200"
>
   <MenuSubItem
    label="Warning Item"
    className="text-primary-700 hover:bg-primary-100"
    onClick={() => alert("Warning action")}
    />
    <MenuSubItem
    label="Another Item"
    className="text-primary-700 hover:bg-primary-100"
    onClick={() => alert("Another action")}
    />
</MenuDropdown>

{/* Complex Nested Menu */}
<MenuDropdown
  trigger={
    <Button variant={"outlined"} className="text-xs py-1.5 px-2.5">
       Navigation
    </Button>
  }
>
  <MenuSubItem 
    label="Dashboard" 
    onClick={() => alert("Dashboard")}
  />
  <MenuItem content={<span className="font-semibold text-gray-700">Products</span>}>
    <MenuItem content={<span className="text-sm text-gray-600">Web Apps</span>}>
      <MenuSubItem label="E-commerce" onClick={() => alert("E-commerce")} />
      <MenuSubItem label="CMS" onClick={() => alert("CMS")} />
    </MenuItem>
    <MenuItem content={<span className="text-sm text-gray-600">Mobile Apps</span>}>
      <MenuSubItem label="iOS" onClick={() => alert("iOS")} />
      <MenuSubItem label="Android" onClick={() => alert("Android")} />
    </MenuItem>
  </MenuItem>
  <MenuSubItem 
    label="Settings" 
    onClick={() => alert("Settings")}
  />
</MenuDropdown>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>
    </div>
  );
};

export default MenuItemsExampleSection;
