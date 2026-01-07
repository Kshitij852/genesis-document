// "use client";

// import React, { useState } from "react";
// import {
//   MenuDropdown,
//   MenuItem,
//   MenuSubItem,
//   ListItem,
//   TabsContainer,
//   TabList,
//   Tab,
//   TabPanel,
//   Button,
// } from "@atomos_tech/genesis";
// import CodeSnippet from "../../button/_components/CodeSnippet";
// import { RiAddLine } from "@remixicon/react";
// import Link from "next/link";

// const MenuItemsExampleSection = () => {
//   const [nestedTabs, setNestedTabs] = useState({
//     basic: "react",
//     advanced: "react",
//   });

//   const handleNestedTabChanges = (section: string, value: string) => {
//     setNestedTabs((prev) => ({ ...prev, [section]: value }));
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 items-start">
//       {/* Basic Usage Section */}
//       <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
//         <h2 className="text-lg font-semibold text-gray-800 mb-4">
//           Basic Usage
//         </h2>

//         {/* Basic MenuDropdown Example */}
//         <div className="mb-6">
//           <h3 className="text-sm font-medium text-gray-700 mb-3">
//             Simple Dropdown Menu
//           </h3>
//           <div className="flex gap-4 flex-wrap items-center p-4 bg-gray-50 rounded-lg">
//             <MenuDropdown
//               trigger={
//                 <ListItem
//                   as="button"
//                   title="Products"
//                   icon={<RiAddLine size={20} />}
//                   className="w-max bg-primary-100 hover:bg-primary-200 rounded-full border border-primary-400"
//                 />
//               }
//             >
//               <MenuSubItem label="Inertia" />
//               <MenuItem content={<h6 className="font-semibold">Blaze</h6>}>
//                 <MenuSubItem
//                   label="Flames"
//                   onClick={() => alert("Flames clicked")}
//                 />
//                 <MenuSubItem
//                   label="Blaze"
//                   onClick={() => alert("Blaze clicked")}
//                 />
//                 <MenuSubItem
//                   label="Admin"
//                   onClick={() => alert("Admin clicked")}
//                 />
//               </MenuItem>
//               <Link
//                 href="https://qiwi.mirats.app"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <MenuSubItem label="Qiwi" />
//               </Link>

//               <MenuSubItem label="Audit" />
//             </MenuDropdown>
//           </div>
//         </div>

//         {/* Simple Menu Example */}
//         <div className="mb-6">
//           <h3 className="text-sm font-medium text-gray-700 mb-3">
//             Simple Menu Items
//           </h3>
//           <div className="flex gap-4 flex-wrap items-center p-4 bg-gray-50 rounded-lg">
//             <MenuDropdown
//               trigger={
//                 <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium">
//                   Actions
//                 </button>
//               }
//             >
//               <MenuSubItem label="Home" onClick={() => alert("Home clicked")} />
//               <MenuSubItem
//                 label="Profile"
//                 onClick={() => alert("Profile clicked")}
//               />
//               <MenuSubItem
//                 label="Settings"
//                 onClick={() => alert("Settings clicked")}
//               />
//             </MenuDropdown>
//           </div>
//         </div>

//         {/* Nested Tabs for React / Next */}
//         <TabsContainer value={nestedTabs.basic}>
//           <TabList
//             onChange={(val) => handleNestedTabChanges("basic", val)}
//             ariaLabel="React and Next tabs"
//             className="border-b border-gray-200 mb-4"
//             box
//           >
//             <Tab
//               label="React"
//               value="react"
//               selectedTabValue={nestedTabs.basic}
//               onChange={(val) => handleNestedTabChanges("basic", val)}
//             />
//             <Tab
//               label="Next"
//               value="next"
//               selectedTabValue={nestedTabs.basic}
//               onChange={(val) => handleNestedTabChanges("basic", val)}
//             />
//           </TabList>

//           <TabPanel value="react" currentValue={nestedTabs.basic}>
//             <CodeSnippet
//               title="Basic MenuItems Usage"
//               code={`import { MenuDropdown, MenuItem, MenuSubItem, ListItem } from "@atomos_tech/genesis";
// import { RiAddLine } from "@remixicon/react";
// import Link from "next/link";

//     {/* Products Dropdown */}
//     <MenuDropdown
//       trigger={
//         <ListItem
//           as="button"
//           title="Products"
//           icon={<RiAddLine size={20} />}
//           className="w-max bg-primary-100 hover:bg-primary-200 rounded-full border border-primary-400"
//         />
//       }
//     >
//       <MenuSubItem label="Inertia" />

//       <MenuItem content={<h6 className="font-semibold">Blaze</h6>}>
//         <MenuSubItem label="Flames" onClick={() => alert("Flames clicked")} />
//         <MenuSubItem label="Blaze" onClick={() => alert("Blaze clicked")} />
//         <MenuSubItem label="Admin" onClick={() => alert("Admin clicked")} />
//       </MenuItem>

//       <Link
//         href="https://qiwi.mirats.app"
//         target="_blank"
//         rel="noopener noreferrer"
//         >
//         <MenuSubItem label="Qiwi" />
//       </Link>

//       <MenuSubItem label="Audit" />
//     </MenuDropdown>

//     {/* Simple Actions Menu */}
//     <MenuDropdown
//       trigger={
//         <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium">
//           Actions
//         </button>
//       }
//     >
//       <MenuSubItem label="Home" onClick={() => alert("Home clicked")} />
//       <MenuSubItem label="Profile" onClick={() => alert("Profile clicked")} />
//       <MenuSubItem label="Settings" onClick={() => alert("Settings clicked")} />
//     </MenuDropdown>`}
//             />
//           </TabPanel>

//           <TabPanel value="next" currentValue={nestedTabs.basic}>
//             <CodeSnippet
//               title="Basic MenuItems Usage"
//               code={`import { MenuDropdown, MenuItem, MenuSubItem, ListItem } from "@atomos_tech/genesis";
// import { RiAddLine } from "@remixicon/react";
// import Link from "next/link";

//     {/* Products Dropdown */}
//     <MenuDropdown
//       trigger={
//         <ListItem
//           as="button"
//           title="Products"
//           icon={<RiAddLine size={20} />}
//           className="w-max bg-primary-100 hover:bg-primary-200 rounded-full border border-primary-400"
//         />
//       }
//     >
//       <MenuSubItem label="Inertia" />

//       <MenuItem content={<h6 className="font-semibold">Blaze</h6>}>
//         <MenuSubItem label="Flames" onClick={() => alert("Flames clicked")} />
//         <MenuSubItem label="Blaze" onClick={() => alert("Blaze clicked")} />
//         <MenuSubItem label="Admin" onClick={() => alert("Admin clicked")} />
//       </MenuItem>

//       <Link
//         href="https://qiwi.mirats.app"
//         target="_blank"
//         rel="noopener noreferrer"
//         >
//         <MenuSubItem label="Qiwi" />
//       </Link>

//       <MenuSubItem label="Audit" />
//     </MenuDropdown>

//     {/* Simple Actions Menu */}
//     <MenuDropdown
//       trigger={
//         <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium">
//           Actions
//         </button>
//       }
//     >
//       <MenuSubItem label="Home" onClick={() => alert("Home clicked")} />
//       <MenuSubItem label="Profile" onClick={() => alert("Profile clicked")} />
//       <MenuSubItem label="Settings" onClick={() => alert("Settings clicked")} />
//     </MenuDropdown>`}
//             />
//           </TabPanel>
//         </TabsContainer>
//       </section>

//       {/* Advanced Usage Section */}
//       <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
//         <h2 className="text-lg font-semibold text-gray-800 mb-4">
//           Advanced Features
//         </h2>

//         {/* External Links Example */}
//         <div className="mb-6">
//           <h3 className="text-sm font-medium text-gray-700 mb-3">
//             External Links
//           </h3>
//           <div className="flex gap-4 flex-wrap items-center p-4 bg-gray-50 rounded-lg">
//             <MenuDropdown
//               trigger={
//                 <Button variant={"outlined"} className="rounded-3xl">
//                   Resources
//                 </Button>
//               }
//             >
//               <Link href="https://example.com" target="_blank">
//                 <MenuSubItem label="External Link" />
//               </Link>
//               <Link href="https://docs.example.com" target="_blank">
//                 <MenuSubItem label="Documentation" />
//               </Link>
//               <MenuSubItem
//                 label="Internal Page"
//                 onClick={() => alert("Internal navigation")}
//               />
//             </MenuDropdown>
//           </div>
//         </div>

//         {/* Custom Styling Example */}
//         <div className="mb-6">
//           <h3 className="text-sm font-medium text-gray-700 mb-3">
//             Custom Styling
//           </h3>
//           <div className="flex gap-4 flex-wrap items-center p-4 bg-gray-50 rounded-lg">
//             <MenuDropdown
//               trigger={
//                 <Button className="text-xs py-1.5 px-2.5">Styled Menu</Button>
//               }
//               className="bg-primary-50 border-primary-200"
//             >
//               <MenuSubItem
//                 label="Warning Item"
//                 className="text-primary-700 hover:bg-primary-100"
//                 onClick={() => alert("Warning action")}
//               />
//               <MenuSubItem
//                 label="Another Item"
//                 className="text-primary-700 hover:bg-primary-100"
//                 onClick={() => alert("Another action")}
//               />
//             </MenuDropdown>
//           </div>
//         </div>

//         {/* Complex Nested Menu */}
//         <div className="mb-6">
//           <h3 className="text-sm font-medium text-gray-700 mb-3">
//             Complex Nested Menu
//           </h3>
//           <div className="flex gap-4 flex-wrap items-center p-4 bg-gray-50 rounded-lg">
//             <MenuDropdown
//               trigger={
//                 <Button variant={"outlined"} className="text-xs py-1.5 px-2.5">
//                   Navigation
//                 </Button>
//               }
//             >
//               <MenuSubItem
//                 label="Dashboard"
//                 onClick={() => alert("Dashboard")}
//               />
//               <MenuItem
//                 content={
//                   <span className="font-semibold text-gray-700">Products</span>
//                 }
//               >
//                 <MenuItem
//                   content={
//                     <span className="text-sm text-gray-600">Web Apps</span>
//                   }
//                 >
//                   <MenuSubItem
//                     label="E-commerce"
//                     onClick={() => alert("E-commerce")}
//                   />
//                   <MenuSubItem label="CMS" onClick={() => alert("CMS")} />
//                 </MenuItem>
//                 <MenuItem
//                   content={
//                     <span className="text-sm text-gray-600">Mobile Apps</span>
//                   }
//                 >
//                   <MenuSubItem label="iOS" onClick={() => alert("iOS")} />
//                   <MenuSubItem
//                     label="Android"
//                     onClick={() => alert("Android")}
//                   />
//                 </MenuItem>
//               </MenuItem>
//               <MenuSubItem label="Settings" onClick={() => alert("Settings")} />
//             </MenuDropdown>
//           </div>
//         </div>

//         <TabsContainer value={nestedTabs.advanced}>
//           <TabList
//             onChange={(val) => handleNestedTabChanges("advanced", val)}
//             ariaLabel="React and Next tabs"
//             className="border-b border-gray-200 mb-4"
//             box
//           >
//             <Tab
//               label="React"
//               value="react"
//               selectedTabValue={nestedTabs.advanced}
//               onChange={(val) => handleNestedTabChanges("advanced", val)}
//             />
//             <Tab
//               label="Next"
//               value="next"
//               selectedTabValue={nestedTabs.advanced}
//               onChange={(val) => handleNestedTabChanges("advanced", val)}
//             />
//           </TabList>

//           <TabPanel value="react" currentValue={nestedTabs.advanced}>
//             <CodeSnippet
//               title="Advanced MenuItems Features"
//               code={`{/* External Links */}
// <MenuDropdown
//   trigger={
//      <Button variant={"outlined"} className="rounded-3xl">
//         Resources
//      </Button>
//   }
// >
//   <Link href="https://example.com" target="_blank">
//     <MenuSubItem
//       label="External Link"
//       icon={<RiExternalLinkLine size={16} />}
//     />
//   </Link>
//   <Link href="https://docs.example.com" target="_blank">
//     <MenuSubItem
//       label="Documentation"
//       icon={<RiExternalLinkLine size={16} />}
//     />
//   </Link>
// </MenuDropdown>

// {/* Custom Styling */}
// <MenuDropdown
//   trigger={
//     <Button className="text-xs py-1.5 px-2.5">Styled Menu</Button>
//   }
//     className="bg-primary-50 border-primary-200"
// >
//    <MenuSubItem
//     label="Warning Item"
//     className="text-primary-700 hover:bg-primary-100"
//     onClick={() => alert("Warning action")}
//     />
//     <MenuSubItem
//     label="Another Item"
//     className="text-primary-700 hover:bg-primary-100"
//     onClick={() => alert("Another action")}
//     />
// </MenuDropdown>

// {/* Complex Nested Menu */}
// <MenuDropdown
//   trigger={
//     <Button variant={"outlined"} className="text-xs py-1.5 px-2.5">
//        Navigation
//     </Button>
//   }
// >
//   <MenuSubItem
//     label="Dashboard"
//     onClick={() => alert("Dashboard")}
//   />
//   <MenuItem content={<span className="font-semibold text-gray-700">Products</span>}>
//     <MenuItem content={<span className="text-sm text-gray-600">Web Apps</span>}>
//       <MenuSubItem label="E-commerce" onClick={() => alert("E-commerce")} />
//       <MenuSubItem label="CMS" onClick={() => alert("CMS")} />
//     </MenuItem>
//     <MenuItem content={<span className="text-sm text-gray-600">Mobile Apps</span>}>
//       <MenuSubItem label="iOS" onClick={() => alert("iOS")} />
//       <MenuSubItem label="Android" onClick={() => alert("Android")} />
//     </MenuItem>
//   </MenuItem>
//   <MenuSubItem
//     label="Settings"
//     onClick={() => alert("Settings")}
//   />
// </MenuDropdown>`}
//             />
//           </TabPanel>

//           <TabPanel value="next" currentValue={nestedTabs.advanced}>
//             <CodeSnippet
//               title="Advanced MenuItems Features"
//               code={`{/* External Links */}
// <MenuDropdown
//   trigger={
//      <Button variant={"outlined"} className="rounded-3xl">
//         Resources
//      </Button>
//   }
// >
//   <Link href="https://example.com" target="_blank">
//     <MenuSubItem
//       label="External Link"
//       icon={<RiExternalLinkLine size={16} />}
//     />
//   </Link>
//   <Link href="https://docs.example.com" target="_blank">
//     <MenuSubItem
//       label="Documentation"
//       icon={<RiExternalLinkLine size={16} />}
//     />
//   </Link>
// </MenuDropdown>

// {/* Custom Styling */}
// <MenuDropdown
//   trigger={
//     <Button className="text-xs py-1.5 px-2.5">Styled Menu</Button>
//   }
//     className="bg-primary-50 border-primary-200"
// >
//    <MenuSubItem
//     label="Warning Item"
//     className="text-primary-700 hover:bg-primary-100"
//     onClick={() => alert("Warning action")}
//     />
//     <MenuSubItem
//     label="Another Item"
//     className="text-primary-700 hover:bg-primary-100"
//     onClick={() => alert("Another action")}
//     />
// </MenuDropdown>

// {/* Complex Nested Menu */}
// <MenuDropdown
//   trigger={
//     <Button variant={"outlined"} className="text-xs py-1.5 px-2.5">
//        Navigation
//     </Button>
//   }
// >
//   <MenuSubItem
//     label="Dashboard"
//     onClick={() => alert("Dashboard")}
//   />
//   <MenuItem content={<span className="font-semibold text-gray-700">Products</span>}>
//     <MenuItem content={<span className="text-sm text-gray-600">Web Apps</span>}>
//       <MenuSubItem label="E-commerce" onClick={() => alert("E-commerce")} />
//       <MenuSubItem label="CMS" onClick={() => alert("CMS")} />
//     </MenuItem>
//     <MenuItem content={<span className="text-sm text-gray-600">Mobile Apps</span>}>
//       <MenuSubItem label="iOS" onClick={() => alert("iOS")} />
//       <MenuSubItem label="Android" onClick={() => alert("Android")} />
//     </MenuItem>
//   </MenuItem>
//   <MenuSubItem
//     label="Settings"
//     onClick={() => alert("Settings")}
//   />
// </MenuDropdown>`}
//             />
//           </TabPanel>
//         </TabsContainer>
//       </section>
//     </div>
//   );
// };

// export default MenuItemsExampleSection;
"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  Button,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
} from "@atomos_tech/genesis";
import CodeSnippet from "../../button/_components/CodeSnippet";

const MenuItemsExampleSection = () => {
  const [nestedTabs, setNestedTabs] = useState({
    basic: "react",
    positioning: "react",
  });

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-4 items-start">
      {/* Basic Usage Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Basic Usage
        </h2>

        {/* Basic Dropdown Examples */}
        <div className="flex flex-col gap-6 mb-6">
          {/* Standard Dropdown */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Standard Dropdown Menu
            </h3>
            <div className="p-4 bg-gray-50 rounded-lg">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button> Open Menu </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64">
                  <DropdownMenuLabel>Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      More Options
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
                      <DropdownMenuItem>Support</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                  <DropdownMenuLabel>Label One</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Menu One</DropdownMenuItem>
                  <DropdownMenuItem>Menu Two</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Simple Menu with Actions */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Simple Action Menu
            </h3>
            <div className="p-4 bg-gray-50 rounded-lg">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="outlined">Actions</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuItem>Share</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Complex Nested Menu */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Complex Nested Menu
            </h3>
            <div className="p-4 bg-gray-50 rounded-lg">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="filled" intent="primary">
                    Navigation
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem>Home</DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Products</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          Web Apps
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>Dashboard</DropdownMenuItem>
                          <DropdownMenuItem>E-commerce</DropdownMenuItem>
                          <DropdownMenuItem>Analytics</DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          Mobile Apps
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>iOS</DropdownMenuItem>
                          <DropdownMenuItem>Android</DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                      <DropdownMenuItem>API Services</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                  <DropdownMenuItem>Pricing</DropdownMenuItem>
                  <DropdownMenuItem>Documentation</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
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
              title="Basic DropdownMenu Usage"
              code={`import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent, Button } from "@atomos_tech/genesis";

function App() {
  return (
    <div>
      {/* Standard Dropdown Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button> Open Menu </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64">
          <DropdownMenuLabel>Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>More Options</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuLabel>Label One</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Menu One</DropdownMenuItem>
          <DropdownMenuItem>Menu Two</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Simple Action Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outlined">Actions</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Duplicate</DropdownMenuItem>
          <DropdownMenuItem>Share</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.basic}>
            <CodeSnippet
              title="Basic DropdownMenu Usage"
              code={`"use client";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent, Button } from "@atomos_tech/genesis";

function Page() {
  return (
    <div>
      {/* Standard Dropdown Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button> Open Menu </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64">
          <DropdownMenuLabel>Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>More Options</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuLabel>Label One</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Menu One</DropdownMenuItem>
          <DropdownMenuItem>Menu Two</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Simple Action Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outlined">Actions</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Duplicate</DropdownMenuItem>
          <DropdownMenuItem>Share</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* Positioning & Alignment Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Positioning & Alignment
        </h2>

        {/* Positioning Examples */}
        <div className="flex flex-col gap-6 mb-6">
          {/* All Alignments */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              All Alignment Options
            </h3>
            <div className="grid grid-cols-2 gap-4 p-8 w-full whitespace-nowrap">
              <div className="flex justify-center gap-6 ml-[268px]">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button variant="outlined">Top</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="top">
                    <DropdownMenuLabel>Top Position</DropdownMenuLabel>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        Invite users
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Email</DropdownMenuItem>
                        <DropdownMenuItem>Message</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>More...</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button variant="outlined">Bottom</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="bottom">
                    <DropdownMenuLabel>Bottom Position</DropdownMenuLabel>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        Invite users
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Email</DropdownMenuItem>
                        <DropdownMenuItem>Message</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>More...</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button variant="outlined">Wide Menu</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-80" align="end">
                    <DropdownMenuLabel>Wide Menu (320px)</DropdownMenuLabel>
                    <DropdownMenuItem>
                      Profile with very long text
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Settings with extra content
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        Invite users with long text
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Email invitation</DropdownMenuItem>
                        <DropdownMenuItem>Message invitation</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>More options...</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        Invite users with long text
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Email invitation</DropdownMenuItem>
                        <DropdownMenuItem>Message invitation</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>More options...</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button variant="outlined">Right</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="right">
                    <DropdownMenuLabel>Right Position</DropdownMenuLabel>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        Invite users
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Email</DropdownMenuItem>
                        <DropdownMenuItem>Message</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>More...</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button variant="outlined">Center</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="center">
                    <DropdownMenuLabel>Center Aligned</DropdownMenuLabel>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        Invite users
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Email</DropdownMenuItem>
                        <DropdownMenuItem>Message</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>More...</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button variant="outlined">Left</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="left">
                    <DropdownMenuLabel>Left Position</DropdownMenuLabel>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        Invite users
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Email</DropdownMenuItem>
                        <DropdownMenuItem>Message</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>More...</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          {/* Wide Menu Example */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Custom Width Menu
            </h3>
            <div className="p-4 bg-gray-50 rounded-lg">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="outlined">Wide Menu (320px)</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80" align="end">
                  <DropdownMenuLabel>Wide Menu Example</DropdownMenuLabel>
                  <DropdownMenuItem>
                    Profile with very long text description that might wrap to
                    multiple lines
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Settings with additional configuration options and extended
                    content
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      Invite users with extended label text that demonstrates
                      wrapping
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        Email invitation to team members and collaborators
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Message via internal system with notification
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        More options and advanced settings...
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Real-world Examples */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Real-world Examples
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button size="sm" className="w-full">
                      User Menu
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48">
                    <DropdownMenuLabel>john@example.com</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>My Profile</DropdownMenuItem>
                    <DropdownMenuItem>Account Settings</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button size="sm" className="w-full">
                      File Actions
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48">
                    <DropdownMenuItem>Open</DropdownMenuItem>
                    <DropdownMenuItem>Save</DropdownMenuItem>
                    <DropdownMenuItem>Save As...</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>Export</DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>PDF</DropdownMenuItem>
                        <DropdownMenuItem>CSV</DropdownMenuItem>
                        <DropdownMenuItem>Excel</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                    <DropdownMenuItem>Print</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>

        <TabsContainer value={nestedTabs.positioning}>
          <TabList
            onChange={(val) => handleNestedTabChanges("positioning", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.positioning}
              onChange={(val) => handleNestedTabChanges("positioning", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.positioning}
              onChange={(val) => handleNestedTabChanges("positioning", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.positioning}>
            <CodeSnippet
              title="Positioning & Alignment Examples"
              code={`import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent, Button } from "@atomos_tech/genesis";

function App() {
  return (
    <div className="grid grid-cols-2 gap-4 p-8 w-full whitespace-nowrap">
      <div className="flex justify-center gap-6">
        {/* Top Alignment */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outlined">Top</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="top">
            <DropdownMenuLabel>Top Position</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Bottom Alignment */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outlined">Bottom</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="bottom">
            <DropdownMenuLabel>Bottom Position</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Left Alignment */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outlined">Left</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="left">
            <DropdownMenuLabel>Left Position</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Right Alignment */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outlined">Right</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="right">
            <DropdownMenuLabel>Right Position</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Center Alignment */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outlined">Center</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="center">
            <DropdownMenuLabel>Center Aligned</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Wide Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outlined">Wide Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80" align="end">
            <DropdownMenuLabel>Wide Menu (320px)</DropdownMenuLabel>
            <DropdownMenuItem>Profile with very long text</DropdownMenuItem>
            <DropdownMenuItem>Settings with extra content</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                Invite users with long text
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email invitation</DropdownMenuItem>
                <DropdownMenuItem>Message invitation</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More options...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.positioning}>
            <CodeSnippet
              title="Positioning & Alignment Examples"
              code={`"use client";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent, Button } from "@atomos_tech/genesis";

function Page() {
  return (
    <div className="grid grid-cols-2 gap-4 p-8 w-full whitespace-nowrap">
      <div className="flex justify-center gap-6">
        {/* Top Alignment */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outlined">Top</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="top">
            <DropdownMenuLabel>Top Position</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Bottom Alignment */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outlined">Bottom</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="bottom">
            <DropdownMenuLabel>Bottom Position</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Left Alignment */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outlined">Left</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="left">
            <DropdownMenuLabel>Left Position</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Right Alignment */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outlined">Right</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="right">
            <DropdownMenuLabel>Right Position</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Center Alignment */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outlined">Center</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="center">
            <DropdownMenuLabel>Center Aligned</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Wide Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outlined">Wide Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80" align="end">
            <DropdownMenuLabel>Wide Menu (320px)</DropdownMenuLabel>
            <DropdownMenuItem>Profile with very long text</DropdownMenuItem>
            <DropdownMenuItem>Settings with extra content</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                Invite users with long text
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email invitation</DropdownMenuItem>
                <DropdownMenuItem>Message invitation</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More options...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
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

export default MenuItemsExampleSection;
