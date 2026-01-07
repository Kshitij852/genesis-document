"use client";

import React, { useState } from "react";
import {
  TreeView,
  Button,
  Divider,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
} from "@atomos_tech/genesis";
import {
  RiAlertFill,
  RiFolderOpenFill,
  RiFileLine,
  RiAddLine,
  RiEditLine,
  RiFolderLine,
  RiReactjsLine,
  RiNextjsLine,
  RiDatabaseLine,
  RiServerLine,
} from "@remixicon/react";
import CodeSnippet from "../../button/_components/CodeSnippet";

const TreeViewExampleSection = () => {
  const [selected, setSelected] = useState<string>("");
  const [nestedTabs, setNestedTabs] = useState({
    basic: "react",
    advanced: "react",
    modes: "react",
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

        {/* Project Files Tree */}
        <div className="flex flex-col gap-6 mb-6">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Project Structure Tree
            </h3>
            <div className="border p-4 rounded-lg">
              <TreeView
                aria-label="Project files"
                defaultExpandedIds={["frontend"]}
              >
                {/* FRONTEND SECTION */}
                <TreeView.Item
                  id="frontend"
                  onSelect={setSelected}
                  selected={selected === "frontend"}
                >
                  <TreeView.LeadingVisual>
                    <RiAlertFill />{" "}
                  </TreeView.LeadingVisual>{" "}
                  Frontend
                  <TreeView.SubTree>
                    <TreeView.Item
                      id="frontend-react"
                      onSelect={setSelected}
                      selected={selected === "frontend-react"}
                    >
                      React App
                      <TreeView.SubTree>
                        <TreeView.Item
                          id="frontend-react-components"
                          onSelect={setSelected}
                          selected={selected === "frontend-react-components"}
                        >
                          <TreeView.LeadingVisual>
                            <RiAlertFill />{" "}
                          </TreeView.LeadingVisual>{" "}
                          Components
                          <TreeView.SubTree>
                            <TreeView.Item
                              id="frontend-react-components-button"
                              onSelect={setSelected}
                              selected={
                                selected === "frontend-react-components-button"
                              }
                            >
                              <Button
                                onClick={() => {
                                  alert("clicked");
                                }}
                                size="sm"
                                className="px-2.5 py-1.5 text-xs"
                              >
                                Click
                              </Button>
                            </TreeView.Item>
                            <TreeView.Item
                              id="frontend-react-components-modal"
                              onSelect={setSelected}
                              selected={
                                selected === "frontend-react-components-modal"
                              }
                            >
                              Modal
                            </TreeView.Item>
                          </TreeView.SubTree>
                        </TreeView.Item>

                        <TreeView.Item
                          id="frontend-react-hooks"
                          onSelect={setSelected}
                          selected={selected === "frontend-react-hooks"}
                        >
                          Hooks
                        </TreeView.Item>
                        <TreeView.Item
                          id="frontend-react-context"
                          onSelect={setSelected}
                          selected={selected === "frontend-react-context"}
                        >
                          Context
                        </TreeView.Item>
                      </TreeView.SubTree>
                    </TreeView.Item>

                    <TreeView.Item
                      id="frontend-next"
                      onSelect={setSelected}
                      selected={selected === "frontend-next"}
                    >
                      Next.js App
                      <TreeView.SubTree>
                        <TreeView.Item
                          id="frontend-next-pages"
                          onSelect={setSelected}
                          selected={selected === "frontend-next-pages"}
                        >
                          Pages
                        </TreeView.Item>
                        <TreeView.Item
                          id="frontend-next-api"
                          onSelect={setSelected}
                          selected={selected === "frontend-next-api"}
                        >
                          API Routes
                        </TreeView.Item>
                      </TreeView.SubTree>
                    </TreeView.Item>
                  </TreeView.SubTree>
                </TreeView.Item>

                {/* BACKEND SECTION */}
                <TreeView.Item
                  id="backend"
                  onSelect={setSelected}
                  selected={selected === "backend"}
                >
                  Backend
                  <TreeView.SubTree>
                    <TreeView.Item
                      id="backend-api"
                      onSelect={setSelected}
                      selected={selected === "backend-api"}
                    >
                      API Routes
                      <TreeView.SubTree>
                        <TreeView.Item
                          id="backend-api-auth"
                          onSelect={setSelected}
                          selected={selected === "backend-api-auth"}
                        >
                          Auth
                        </TreeView.Item>
                        <TreeView.Item
                          id="backend-api-users"
                          onSelect={setSelected}
                          selected={selected === "backend-api-users"}
                        >
                          Users
                        </TreeView.Item>
                        <TreeView.Item
                          id="backend-api-products"
                          onSelect={setSelected}
                          selected={selected === "backend-api-products"}
                        >
                          Products
                        </TreeView.Item>
                      </TreeView.SubTree>
                    </TreeView.Item>

                    <TreeView.Item
                      id="backend-database"
                      onSelect={setSelected}
                      selected={selected === "backend-database"}
                    >
                      Database
                      <TreeView.SubTree>
                        <TreeView.Item
                          id="backend-database-models"
                          onSelect={setSelected}
                          selected={selected === "backend-database-models"}
                        >
                          Models
                        </TreeView.Item>
                        <TreeView.Item
                          id="backend-database-migrations"
                          onSelect={setSelected}
                          selected={selected === "backend-database-migrations"}
                        >
                          Migrations
                        </TreeView.Item>
                        <TreeView.Item
                          id="backend-database-seeds"
                          onSelect={setSelected}
                          selected={selected === "backend-database-seeds"}
                        >
                          Seeds
                        </TreeView.Item>
                      </TreeView.SubTree>
                    </TreeView.Item>
                  </TreeView.SubTree>
                </TreeView.Item>
              </TreeView>
            </div>
          </div>

          {/* File Changes Tree */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              File Changes with Status
            </h3>
            <div className="border p-4 rounded-lg">
              <TreeView aria-label="Files changed" defaultExpandedIds={["src"]}>
                <TreeView.Item
                  id="src"
                  onSelect={setSelected}
                  selected={selected === "src"}
                >
                  <TreeView.LeadingVisual>
                    <RiFolderOpenFill color="#1765dc" size={16} />
                  </TreeView.LeadingVisual>
                  src
                  <TreeView.SubTree>
                    <TreeView.Item
                      id="src/Avatar.tsx"
                      onSelect={setSelected}
                      selected={selected === "src/Avatar.tsx"}
                    >
                      <TreeView.LeadingVisual>
                        <RiFileLine size={16} />
                      </TreeView.LeadingVisual>
                      Avatar.tsx
                      <TreeView.TrailingVisual label="Added">
                        <RiAddLine size={16} />
                      </TreeView.TrailingVisual>
                    </TreeView.Item>

                    <TreeView.Item
                      id="src/Button.tsx"
                      onSelect={setSelected}
                      selected={selected === "src/Button.tsx"}
                    >
                      <TreeView.LeadingVisual>
                        <RiFileLine size={16} />
                      </TreeView.LeadingVisual>
                      Button.tsx
                      <TreeView.TrailingVisual label="Modified">
                        <RiEditLine size={16} />
                      </TreeView.TrailingVisual>
                    </TreeView.Item>
                  </TreeView.SubTree>
                </TreeView.Item>

                <TreeView.Item
                  id="package.json"
                  onSelect={setSelected}
                  selected={selected === "package.json"}
                >
                  <TreeView.LeadingVisual>
                    <RiFileLine size={16} />
                  </TreeView.LeadingVisual>
                  package.json
                  <TreeView.TrailingVisual label="Modified">
                    <RiEditLine size={16} />
                  </TreeView.TrailingVisual>
                </TreeView.Item>
              </TreeView>
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
              title="Basic TreeView Usage"
              code={`import { useState } from "react";
import { TreeView, Button } from "@atomos_tech/genesis";
import { RiAlertFill, RiFolderOpenFill, RiFileLine, RiAddLine, RiEditLine } from "@remixicon/react";

function App() {
  const [selected, setSelected] = useState("");

  return (
    <div>
      {/* Project Structure Tree */}
      <TreeView aria-label="Project files" defaultExpandedIds={["frontend"]}>
        <TreeView.Item
          id="frontend"
          onSelect={setSelected}
          selected={selected === "frontend"}
        >
          <TreeView.LeadingVisual>
            <RiAlertFill />
          </TreeView.LeadingVisual>
          Frontend
          <TreeView.SubTree>
            <TreeView.Item
              id="frontend-react"
              onSelect={setSelected}
              selected={selected === "frontend-react"}
            >
              React App
              <TreeView.SubTree>
                <TreeView.Item
                  id="frontend-react-components"
                  onSelect={setSelected}
                  selected={selected === "frontend-react-components"}
                >
                  <TreeView.LeadingVisual>
                    <RiAlertFill />
                  </TreeView.LeadingVisual>
                  Components
                  <TreeView.SubTree>
                    <TreeView.Item
                      id="frontend-react-components-button"
                      onSelect={setSelected}
                      selected={selected === "frontend-react-components-button"}
                    >
                      <Button
                        onClick={() => alert("clicked")}
                        size="sm"
                      >
                        Click
                      </Button>
                    </TreeView.Item>
                    <TreeView.Item
                      id="frontend-react-components-modal"
                      onSelect={setSelected}
                      selected={selected === "frontend-react-components-modal"}
                    >
                      Modal
                    </TreeView.Item>
                  </TreeView.SubTree>
                </TreeView.Item>
                <TreeView.Item
                  id="frontend-react-hooks"
                  onSelect={setSelected}
                  selected={selected === "frontend-react-hooks"}
                >
                  Hooks
                </TreeView.Item>
              </TreeView.SubTree>
            </TreeView.Item>
          </TreeView.SubTree>
        </TreeView.Item>

        <TreeView.Item
          id="backend"
          onSelect={setSelected}
          selected={selected === "backend"}
        >
          Backend
          <TreeView.SubTree>
            <TreeView.Item
              id="backend-api"
              onSelect={setSelected}
              selected={selected === "backend-api"}
            >
              API Routes
              <TreeView.SubTree>
                <TreeView.Item
                  id="backend-api-auth"
                  onSelect={setSelected}
                  selected={selected === "backend-api-auth"}
                >
                  Auth
                </TreeView.Item>
              </TreeView.SubTree>
            </TreeView.Item>
          </TreeView.SubTree>
        </TreeView.Item>
      </TreeView>

      {/* File Changes Tree */}
      <TreeView aria-label="Files changed" defaultExpandedIds={["src"]}>
        <TreeView.Item
          id="src"
          onSelect={setSelected}
          selected={selected === "src"}
        >
          <TreeView.LeadingVisual>
            <RiFolderOpenFill color="#1765dc" size={16} />
          </TreeView.LeadingVisual>
          src
          <TreeView.SubTree>
            <TreeView.Item
              id="src/Avatar.tsx"
              onSelect={setSelected}
              selected={selected === "src/Avatar.tsx"}
            >
              <TreeView.LeadingVisual>
                <RiFileLine size={16} />
              </TreeView.LeadingVisual>
              Avatar.tsx
              <TreeView.TrailingVisual label="Added">
                <RiAddLine size={16} />
              </TreeView.TrailingVisual>
            </TreeView.Item>
            <TreeView.Item
              id="src/Button.tsx"
              onSelect={setSelected}
              selected={selected === "src/Button.tsx"}
            >
              <TreeView.LeadingVisual>
                <RiFileLine size={16} />
              </TreeView.LeadingVisual>
              Button.tsx
              <TreeView.TrailingVisual label="Modified">
                <RiEditLine size={16} />
              </TreeView.TrailingVisual>
            </TreeView.Item>
          </TreeView.SubTree>
        </TreeView.Item>
      </TreeView>
    </div>
  );
}`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.basic}>
            <CodeSnippet
              title="Basic TreeView Usage"
              code={`"use client";
import { useState } from "react";
import { TreeView, Button } from "@atomos_tech/genesis";
import { RiAlertFill, RiFolderOpenFill, RiFileLine, RiAddLine, RiEditLine } from "@remixicon/react";

function Page() {
  const [selected, setSelected] = useState("");

  return (
    <div>
      {/* Project Structure Tree */}
      <TreeView aria-label="Project files" defaultExpandedIds={["frontend"]}>
        <TreeView.Item
          id="frontend"
          onSelect={setSelected}
          selected={selected === "frontend"}
        >
          <TreeView.LeadingVisual>
            <RiAlertFill />
          </TreeView.LeadingVisual>
          Frontend
          <TreeView.SubTree>
            <TreeView.Item
              id="frontend-react"
              onSelect={setSelected}
              selected={selected === "frontend-react"}
            >
              React App
              <TreeView.SubTree>
                <TreeView.Item
                  id="frontend-react-components"
                  onSelect={setSelected}
                  selected={selected === "frontend-react-components"}
                >
                  <TreeView.LeadingVisual>
                    <RiAlertFill />
                  </TreeView.LeadingVisual>
                  Components
                  <TreeView.SubTree>
                    <TreeView.Item
                      id="frontend-react-components-button"
                      onSelect={setSelected}
                      selected={selected === "frontend-react-components-button"}
                    >
                      <Button
                        onClick={() => alert("clicked")}
                        size="sm"
                      >
                        Click
                      </Button>
                    </TreeView.Item>
                    <TreeView.Item
                      id="frontend-react-components-modal"
                      onSelect={setSelected}
                      selected={selected === "frontend-react-components-modal"}
                    >
                      Modal
                    </TreeView.Item>
                  </TreeView.SubTree>
                </TreeView.Item>
                <TreeView.Item
                  id="frontend-react-hooks"
                  onSelect={setSelected}
                  selected={selected === "frontend-react-hooks"}
                >
                  Hooks
                </TreeView.Item>
              </TreeView.SubTree>
            </TreeView.Item>
          </TreeView.SubTree>
        </TreeView.Item>

        <TreeView.Item
          id="backend"
          onSelect={setSelected}
          selected={selected === "backend"}
        >
          Backend
          <TreeView.SubTree>
            <TreeView.Item
              id="backend-api"
              onSelect={setSelected}
              selected={selected === "backend-api"}
            >
              API Routes
              <TreeView.SubTree>
                <TreeView.Item
                  id="backend-api-auth"
                  onSelect={setSelected}
                  selected={selected === "backend-api-auth"}
                >
                  Auth
                </TreeView.Item>
              </TreeView.SubTree>
            </TreeView.Item>
          </TreeView.SubTree>
        </TreeView.Item>
      </TreeView>

      {/* File Changes Tree */}
      <TreeView aria-label="Files changed" defaultExpandedIds={["src"]}>
        <TreeView.Item
          id="src"
          onSelect={setSelected}
          selected={selected === "src"}
        >
          <TreeView.LeadingVisual>
            <RiFolderOpenFill color="#1765dc" size={16} />
          </TreeView.LeadingVisual>
          src
          <TreeView.SubTree>
            <TreeView.Item
              id="src/Avatar.tsx"
              onSelect={setSelected}
              selected={selected === "src/Avatar.tsx"}
            >
              <TreeView.LeadingVisual>
                <RiFileLine size={16} />
              </TreeView.LeadingVisual>
              Avatar.tsx
              <TreeView.TrailingVisual label="Added">
                <RiAddLine size={16} />
              </TreeView.TrailingVisual>
            </TreeView.Item>
            <TreeView.Item
              id="src/Button.tsx"
              onSelect={setSelected}
              selected={selected === "src/Button.tsx"}
            >
              <TreeView.LeadingVisual>
                <RiFileLine size={16} />
              </TreeView.LeadingVisual>
              Button.tsx
              <TreeView.TrailingVisual label="Modified">
                <RiEditLine size={16} />
              </TreeView.TrailingVisual>
            </TreeView.Item>
          </TreeView.SubTree>
        </TreeView.Item>
      </TreeView>
    </div>
  );
}`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* Advanced Features Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Advanced Features
        </h2>

        {/* Advanced Tree Examples */}
        <div className="flex flex-col gap-6 mb-6">
          {/* Multiple Expanded Mode */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Multiple Expanded Mode (Default)
            </h3>
            <div className="border p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-3">
                Allow multiple expanded (default)
              </h4>
              <TreeView aria-label="Example Tree" expandTopLevelByDefault>
                <TreeView.Item id="1">
                  Parent 1
                  <TreeView.SubTree>
                    <TreeView.Item id="1.1">Child 1</TreeView.Item>
                    <TreeView.Item id="1.2">Child 2</TreeView.Item>
                  </TreeView.SubTree>
                </TreeView.Item>

                <TreeView.Item id="2">
                  Parent 2
                  <TreeView.SubTree>
                    <TreeView.Item id="2.1">Child A</TreeView.Item>
                    <TreeView.Item id="2.2">Child B</TreeView.Item>
                  </TreeView.SubTree>
                </TreeView.Item>
              </TreeView>
            </div>
          </div>

          {/* Single Expanded Mode (Accordion) */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Single Expanded Mode (Accordion)
            </h3>
            <div className="border p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-3">
                Treeview Mode (only one expanded)
              </h4>
              <TreeView aria-label="Accordion Tree" allowMultiple={false}>
                <TreeView.Item id="1">
                  Section 1
                  <TreeView.SubTree>
                    <TreeView.Item id="1.1">Item A</TreeView.Item>
                  </TreeView.SubTree>
                </TreeView.Item>
                <TreeView.Item id="2">
                  Section 2
                  <TreeView.SubTree>
                    <TreeView.Item id="2.1">Item B</TreeView.Item>
                  </TreeView.SubTree>
                </TreeView.Item>
              </TreeView>
            </div>
          </div>

          {/* Rich Visuals Example */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Rich Visuals Example
            </h3>
            <div className="border p-4 rounded-lg">
              <TreeView
                aria-label="Rich Visuals Tree"
                defaultExpandedIds={["tech-stack"]}
              >
                <TreeView.Item id="tech-stack">
                  <TreeView.LeadingVisual>
                    <RiFolderLine className="text-blue-500" size={18} />
                  </TreeView.LeadingVisual>
                  Technology Stack
                  <TreeView.TrailingVisual label="5 items">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      5
                    </span>
                  </TreeView.TrailingVisual>
                  <TreeView.SubTree>
                    <TreeView.Item id="react">
                      <TreeView.LeadingVisual>
                        <RiReactjsLine className="text-cyan-500" size={18} />
                      </TreeView.LeadingVisual>
                      React
                      <TreeView.TrailingVisual label="Version 18">
                        <span className="text-xs text-gray-500">v18.2.0</span>
                      </TreeView.TrailingVisual>
                    </TreeView.Item>
                    <TreeView.Item id="nextjs">
                      <TreeView.LeadingVisual>
                        <RiNextjsLine className="text-black" size={18} />
                      </TreeView.LeadingVisual>
                      Next.js
                      <TreeView.TrailingVisual label="Version 14">
                        <span className="text-xs text-gray-500">v14.0.0</span>
                      </TreeView.TrailingVisual>
                    </TreeView.Item>
                    <TreeView.Item id="database">
                      <TreeView.LeadingVisual>
                        <RiDatabaseLine
                          className="text-emerald-500"
                          size={18}
                        />
                      </TreeView.LeadingVisual>
                      Database
                      <TreeView.SubTree>
                        <TreeView.Item id="postgres">
                          PostgreSQL
                          <TreeView.TrailingVisual label="Primary">
                            <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">
                              Primary
                            </span>
                          </TreeView.TrailingVisual>
                        </TreeView.Item>
                        <TreeView.Item id="redis">
                          Redis
                          <TreeView.TrailingVisual label="Cache">
                            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">
                              Cache
                            </span>
                          </TreeView.TrailingVisual>
                        </TreeView.Item>
                      </TreeView.SubTree>
                    </TreeView.Item>
                    <TreeView.Item id="backend">
                      <TreeView.LeadingVisual>
                        <RiServerLine className="text-purple-500" size={18} />
                      </TreeView.LeadingVisual>
                      Backend Services
                      <TreeView.TrailingVisual label="3 services">
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                          3
                        </span>
                      </TreeView.TrailingVisual>
                    </TreeView.Item>
                  </TreeView.SubTree>
                </TreeView.Item>
              </TreeView>
            </div>
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
              title="Advanced TreeView Features"
              code={`import { TreeView } from "@atomos_tech/genesis";
import { RiFolderLine, RiReactjsLine, RiNextjsLine, RiDatabaseLine, RiServerLine } from "@remixicon/react";

function App() {
  return (
    <div>
      {/* Multiple Expanded Mode (Default) */}
      <TreeView aria-label="Example Tree" expandTopLevelByDefault>
        <TreeView.Item id="1">
          Parent 1
          <TreeView.SubTree>
            <TreeView.Item id="1.1">Child 1</TreeView.Item>
            <TreeView.Item id="1.2">Child 2</TreeView.Item>
          </TreeView.SubTree>
        </TreeView.Item>
        <TreeView.Item id="2">
          Parent 2
          <TreeView.SubTree>
            <TreeView.Item id="2.1">Child A</TreeView.Item>
            <TreeView.Item id="2.2">Child B</TreeView.Item>
          </TreeView.SubTree>
        </TreeView.Item>
      </TreeView>

      {/* Single Expanded Mode (Accordion) */}
      <TreeView aria-label="Accordion Tree" allowMultiple={false}>
        <TreeView.Item id="1">
          Section 1
          <TreeView.SubTree>
            <TreeView.Item id="1.1">Item A</TreeView.Item>
          </TreeView.SubTree>
        </TreeView.Item>
        <TreeView.Item id="2">
          Section 2
          <TreeView.SubTree>
            <TreeView.Item id="2.1">Item B</TreeView.Item>
          </TreeView.SubTree>
        </TreeView.Item>
      </TreeView>

      {/* Rich Visuals Example */}
      <TreeView aria-label="Rich Visuals Tree" defaultExpandedIds={["tech-stack"]}>
        <TreeView.Item id="tech-stack">
          <TreeView.LeadingVisual>
            <RiFolderLine className="text-blue-500" size={18} />
          </TreeView.LeadingVisual>
          Technology Stack
          <TreeView.TrailingVisual label="5 items">
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">5</span>
          </TreeView.TrailingVisual>
          <TreeView.SubTree>
            <TreeView.Item id="react">
              <TreeView.LeadingVisual>
                <RiReactjsLine className="text-cyan-500" size={18} />
              </TreeView.LeadingVisual>
              React
              <TreeView.TrailingVisual label="Version 18">
                <span className="text-xs text-gray-500">v18.2.0</span>
              </TreeView.TrailingVisual>
            </TreeView.Item>
            <TreeView.Item id="database">
              <TreeView.LeadingVisual>
                <RiDatabaseLine className="text-emerald-500" size={18} />
              </TreeView.LeadingVisual>
              Database
              <TreeView.SubTree>
                <TreeView.Item id="postgres">
                  PostgreSQL
                  <TreeView.TrailingVisual label="Primary">
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">Primary</span>
                  </TreeView.TrailingVisual>
                </TreeView.Item>
              </TreeView.SubTree>
            </TreeView.Item>
          </TreeView.SubTree>
        </TreeView.Item>
      </TreeView>
    </div>
  );
}`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.advanced}>
            <CodeSnippet
              title="Advanced TreeView Features"
              code={`"use client";
import { TreeView } from "@atomos_tech/genesis";
import { RiFolderLine, RiReactjsLine, RiNextjsLine, RiDatabaseLine, RiServerLine } from "@remixicon/react";

function Page() {
  return (
    <div>
      {/* Multiple Expanded Mode (Default) */}
      <TreeView aria-label="Example Tree" expandTopLevelByDefault>
        <TreeView.Item id="1">
          Parent 1
          <TreeView.SubTree>
            <TreeView.Item id="1.1">Child 1</TreeView.Item>
            <TreeView.Item id="1.2">Child 2</TreeView.Item>
          </TreeView.SubTree>
        </TreeView.Item>
        <TreeView.Item id="2">
          Parent 2
          <TreeView.SubTree>
            <TreeView.Item id="2.1">Child A</TreeView.Item>
            <TreeView.Item id="2.2">Child B</TreeView.Item>
          </TreeView.SubTree>
        </TreeView.Item>
      </TreeView>

      {/* Single Expanded Mode (Accordion) */}
      <TreeView aria-label="Accordion Tree" allowMultiple={false}>
        <TreeView.Item id="1">
          Section 1
          <TreeView.SubTree>
            <TreeView.Item id="1.1">Item A</TreeView.Item>
          </TreeView.SubTree>
        </TreeView.Item>
        <TreeView.Item id="2">
          Section 2
          <TreeView.SubTree>
            <TreeView.Item id="2.1">Item B</TreeView.Item>
          </TreeView.SubTree>
        </TreeView.Item>
      </TreeView>

      {/* Rich Visuals Example */}
      <TreeView aria-label="Rich Visuals Tree" defaultExpandedIds={["tech-stack"]}>
        <TreeView.Item id="tech-stack">
          <TreeView.LeadingVisual>
            <RiFolderLine className="text-blue-500" size={18} />
          </TreeView.LeadingVisual>
          Technology Stack
          <TreeView.TrailingVisual label="5 items">
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">5</span>
          </TreeView.TrailingVisual>
          <TreeView.SubTree>
            <TreeView.Item id="react">
              <TreeView.LeadingVisual>
                <RiReactjsLine className="text-cyan-500" size={18} />
              </TreeView.LeadingVisual>
              React
              <TreeView.TrailingVisual label="Version 18">
                <span className="text-xs text-gray-500">v18.2.0</span>
              </TreeView.TrailingVisual>
            </TreeView.Item>
            <TreeView.Item id="database">
              <TreeView.LeadingVisual>
                <RiDatabaseLine className="text-emerald-500" size={18} />
              </TreeView.LeadingVisual>
              Database
              <TreeView.SubTree>
                <TreeView.Item id="postgres">
                  PostgreSQL
                  <TreeView.TrailingVisual label="Primary">
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">Primary</span>
                  </TreeView.TrailingVisual>
                </TreeView.Item>
              </TreeView.SubTree>
            </TreeView.Item>
          </TreeView.SubTree>
        </TreeView.Item>
      </TreeView>
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

export default TreeViewExampleSection;
