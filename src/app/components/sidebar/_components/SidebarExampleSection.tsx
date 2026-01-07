"use client";
import React, { useState } from "react";
import {
  Sidebar,
  Button,
  Divider,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
} from "@atomos_tech/genesis";
import {
  RiHomeLine,
  RiDashboardLine,
  RiTeamLine,
  RiUserLine,
  RiFileLine,
  RiLogoutBoxRLine,
  RiCircleFill,
  RiAlertFill,
} from "@remixicon/react";
import CodeSnippet from "../../button/_components/CodeSnippet";

const SidebarExample = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [denseCollapsed, setDenseCollapsed] = useState(true);
  const [nestedTabs, setNestedTabs] = useState({
    sidebar: "react",
    dense: "react",
  });

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  const navItems = [
    {
      label: "Navigation",
      items: [
        {
          id: "home",
          label: "Home",
          href: "/",
          icon: <RiHomeLine size={18} />,
        },
        {
          id: "dashboard",
          label: "Dashboard",
          href: "/pages/dashboard",
          icon: <RiDashboardLine size={18} />,
        },
        {
          id: "team",
          label: "Team",
          href: "/pages/team",
          icon: <RiTeamLine size={18} />,
        },
      ],
    },
    {
      label: "Settings",
      items: [
        {
          id: "profile",
          label: "Profile",
          href: "/settings/profile",
          icon: <RiUserLine size={18} />,
        },
        {
          id: "documents",
          label: "Documents",
          href: "/settings/documents",
          icon: <RiFileLine size={18} />,
        },
      ],
    },
  ];

  const navWithSubMenuItems = [
    {
      label: "Pages",
      items: [
        {
          label: "Home",
          href: "/",
          icon: <RiCircleFill size={18} />,
        },
        {
          label: "Team",
          icon: <RiAlertFill size={18} />,
          subItems: [
            {
              label: "Subteam 1",
              // href: "/pages/team/sub1",
              // icon: <RiCircleFill size={16} />,
            },
            {
              label: "Subteam 2",
              // href: "/pages/team/sub2",
              // icon: <RiCircleFill size={16} />,
            },
          ],
        },
      ],
    },
    {
      label: "Dashboard",
      items: [
        {
          label: "Analytics",
          href: "/dashboard/analytics",
          icon: <RiCircleFill size={18} />,
        },
        {
          label: "Reports",
          icon: <RiAlertFill size={18} />,
          subItems: [
            {
              label: "Monthly",
              href: "/dashboard/reports/monthly",
              icon: <RiCircleFill size={16} />,
            },
            {
              label: "Yearly",
              icon: <RiCircleFill size={16} />,
              subItems: [
                {
                  label: "2023",
                  href: "/dashboard/reports/yearly/2023",
                  icon: <RiCircleFill size={14} />,
                },
                {
                  label: "2024",
                  href: "/dashboard/reports/yearly/2024",
                  icon: <RiCircleFill size={14} />,
                },
              ],
            },
          ],
        },
        {
          label: "Reports",
          icon: <RiAlertFill size={18} />,
          subItems: [
            {
              label: "Monthly",
              href: "/dashboard/reports/monthly",
              icon: <RiCircleFill size={16} />,
            },
            {
              label: "Yearly",
              icon: <RiCircleFill size={16} />,
              subItems: [
                {
                  label: "2023",
                  href: "/dashboard/reports/yearly/2023",
                  icon: <RiCircleFill size={14} />,
                },
                {
                  label: "2024",
                  href: "/dashboard/reports/yearly/2024",
                  icon: <RiCircleFill size={14} />,
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const footerItems = [
    {
      id: "footer1",
      label: "Footer Item 1",
      icon: <RiUserLine size={20} />,
      items: [
        {
          id: "subitem3",
          label: "Subitem 3",
          href: "/footer/sub3",
        },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {/* Live Example Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Live Example
        </h2>

        <div className="flex gap-3 bg-white min-h-[500px] rounded-lg overflow-hidden">
          {/* Sidebar Component */}
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}>
            <Sidebar.Header
            //  collapsed={collapsed}
            //  setCollapsed={setCollapsed}
            >
              <span
                onClick={() => setCollapsed((prev) => !prev)}
                className="cursor-pointer font-semibold"
              >
                {collapsed ? "Logo" : "Logo"}
              </span>
            </Sidebar.Header>

            <Sidebar.Menu
              scroll
              collapsed={collapsed}
              // setCollapsed={setCollapsed}
              navItems={navItems}
            />

            <Sidebar.Footer
              collapsed={collapsed}
              setCollapsed={setCollapsed}
              navItems={footerItems}
            >
              <Divider className="mb-3" />
              <Button
                className="w-full"
                variant="outlined"
                intent="default-outlined"
                startIcon={<RiLogoutBoxRLine size={20} />}
              >
                {!collapsed ? "" : "Logout"}
              </Button>
            </Sidebar.Footer>
          </Sidebar>

          {/* Main Content */}
          <section className="flex-grow ml-[20px] p-6 transition-all duration-300 ease-in-out">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Welcome Back
              </h1>
              <p className="text-gray-600">
                {`Here's your daily summary and quick updates.`}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-blue-600 text-sm font-medium">
                  Active Projects
                </div>
                <div className="text-2xl font-bold text-gray-900">12</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-green-600 text-sm font-medium">
                  Tasks Done
                </div>
                <div className="text-2xl font-bold text-gray-900">24</div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-3">
                Recent Activity
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    New project assigned
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Task completed</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Team meeting at 3 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Tip */}
            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600">
                💡 <strong>Tip:</strong> Use the sidebar to quickly navigate
                between sections.
              </p>
            </div>
          </section>
        </div>
        {/* Code Example Section */}
        <div className="bg-white rounded-xl pt-6">
          <TabsContainer value={nestedTabs.sidebar}>
            <TabList
              onChange={(val) => handleNestedTabChanges("sidebar", val)}
              ariaLabel="React and Next tabs"
              className="border-b border-gray-200 mb-4"
              box
            >
              <Tab
                label="React"
                value="react"
                selectedTabValue={nestedTabs.sidebar}
                onChange={(val) => handleNestedTabChanges("sidebar", val)}
              />
              <Tab
                label="Next"
                value="next"
                selectedTabValue={nestedTabs.sidebar}
                onChange={(val) => handleNestedTabChanges("sidebar", val)}
              />
            </TabList>

            <TabPanel value="react" currentValue={nestedTabs.sidebar}>
              <CodeSnippet
                title="Sidebar Implementation"
                code={`import React, { useState } from "react";
import { Sidebar, Button, Divider } from "@atomos_tech/genesis";
import {
  RiHomeLine,
  RiDashboardLine,
  RiTeamLine,
  RiUserLine,
  RiFileLine,
  RiLogoutBoxRLine,
} from "@remixicon/react";

const App = () => {
  const [collapsed, setCollapsed] = useState(true);

  const navItems = [
    {
      label: "Navigation",
      items: [
        {
          id: "home",
          label: "Home",
          href: "/",
          icon: <RiHomeLine size={18} />,
        },
        {
          id: "dashboard",
          label: "Dashboard",
          href: "/dashboard",
          icon: <RiDashboardLine size={18} />,
        },
        {
          id: "team",
          label: "Team",
          href: "/team",
          icon: <RiTeamLine size={18} />,
        },
      ],
    },
    {
      label: "Settings",
      items: [
        {
          id: "profile",
          label: "Profile",
          href: "/settings/profile",
          icon: <RiUserLine size={18} />,
        },
        {
          id: "documents",
          label: "Documents",
          href: "/settings/documents",
          icon: <RiFileLine size={18} />,
        },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}>
        <Sidebar.Header collapsed={collapsed} setCollapsed={setCollapsed}>
          <span 
            onClick={() => setCollapsed(prev => !prev)}
            className="cursor-pointer font-semibold"
          >
            {collapsed ? "Logo" : "Logo"}
          </span>
        </Sidebar.Header>
        
        <Sidebar.Menu
          scroll
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          navItems={navItems}
        />
        
        <Sidebar.Footer collapsed={collapsed} setCollapsed={setCollapsed}>
          <Divider className="mb-3" />
          <Button
            className="w-full"
            variant="outlined"
            intent="default-outlined"
            startIcon={<RiLogoutBoxRLine size={20} />}
          >
            {!collapsed ? "" : "Logout"}
          </Button>
        </Sidebar.Footer>
      </Sidebar>
      
      <main className="flex-1 ml-[80px] p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h1>
        <p className="text-gray-600">Here's your daily summary and quick updates.</p>
      </main>
    </div>
  );
};

export default App;`}
              />
            </TabPanel>

            <TabPanel value="next" currentValue={nestedTabs.sidebar}>
              <CodeSnippet
                title="Sidebar Implementation"
                code={`"use client";
import { useState } from "react";
import { Sidebar, Button, Divider } from "@atomos_tech/genesis";
import {
  RiHomeLine,
  RiDashboardLine,
  RiTeamLine,
  RiUserLine,
  RiFileLine,
  RiLogoutBoxRLine,
} from "@remixicon/react";

export default function HomePage() {
  const [collapsed, setCollapsed] = useState(true);

  const navItems = [
    {
      label: "Navigation",
      items: [
        {
          id: "home",
          label: "Home",
          href: "/",
          icon: <RiHomeLine size={18} />,
        },
        {
          id: "dashboard",
          label: "Dashboard",
          href: "/dashboard",
          icon: <RiDashboardLine size={18} />,
        },
        {
          id: "team",
          label: "Team",
          href: "/team",
          icon: <RiTeamLine size={18} />,
        },
      ],
    },
    {
      label: "Settings",
      items: [
        {
          id: "profile",
          label: "Profile",
          href: "/settings/profile",
          icon: <RiUserLine size={18} />,
        },
        {
          id: "documents",
          label: "Documents",
          href: "/settings/documents",
          icon: <RiFileLine size={18} />,
        },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}>
        <Sidebar.Header collapsed={collapsed} setCollapsed={setCollapsed}>
          <span 
            onClick={() => setCollapsed(prev => !prev)}
            className="cursor-pointer font-semibold"
          >
            {collapsed ? "Logo" : "Logo"}
          </span>
        </Sidebar.Header>
        
        <Sidebar.Menu
          scroll
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          navItems={navItems}
        />
        
        <Sidebar.Footer collapsed={collapsed} setCollapsed={setCollapsed}>
          <Divider className="mb-3" />
          <Button
            className="w-full"
            variant="outlined"
            intent="default-outlined"
            startIcon={<RiLogoutBoxRLine size={20} />}
          >
            {!collapsed ? "" : "Logout"}
          </Button>
        </Sidebar.Footer>
      </Sidebar>
      
      <main className="flex-1 ml-[80px] p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h1>
        <p className="text-gray-600">Here's your daily summary and quick updates.</p>
      </main>
    </div>
  );
}`}
              />
            </TabPanel>
          </TabsContainer>
        </div>
      </div>

      {/* Dense Sidebar Example */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Dense Sidebar Example
        </h2>

        <div className="flex gap-3 bg-white min-h-[500px] rounded-lg overflow-hidden">
          {/* Dense Sidebar Component */}
          <Sidebar
            dense={true}
            collapsed={denseCollapsed}
            setCollapsed={setDenseCollapsed}
          >
            <Sidebar.Header dense={true}>
              <span
                onClick={() => setDenseCollapsed((prev) => !prev)}
                className="cursor-pointer font-semibold"
              >
                Logo
              </span>
            </Sidebar.Header>

            <Sidebar.Menu
              dense={true}
              scroll
              collapsed={denseCollapsed}
              navItems={navWithSubMenuItems}
            />

            <Sidebar.Footer
              dense={true}
              collapsed={denseCollapsed}
              setCollapsed={setDenseCollapsed}
              navItems={footerItems}
            >
              <Divider className="mb-3" />
              <Button
                className="w-full"
                variant="outlined"
                intent="default-outlined"
                startIcon={<RiLogoutBoxRLine size={20} />}
              >
                {!denseCollapsed ? "" : "Logout"}
              </Button>
            </Sidebar.Footer>
          </Sidebar>

          {/* Main Content */}
          <section className="flex-grow ml-[20px] p-6 transition-all duration-300 ease-in-out">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Dense Sidebar Demo
              </h1>
              <p className="text-gray-600">
                This sidebar uses the{" "}
                <code className="bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded text-xs font-mono">
                  dense={true}
                </code>{" "}
                prop for a more compact layout with nested submenus.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="text-purple-600 text-sm font-medium">
                  Compact Design
                </div>
                <div className="text-gray-900">
                  Smaller padding and spacing for dense layouts
                </div>
              </div>
              <div className="bg-amber-50 rounded-lg p-4">
                <div className="text-amber-600 text-sm font-medium">
                  Nested Menus
                </div>
                <div className="text-gray-900">
                  Supports multi-level submenus
                </div>
              </div>
            </div>

            {/* Dense Sidebar Features */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                Key Features of Dense Sidebar
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Compact spacing for better space utilization
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Nested submenus with multiple levels
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Same collapse/expand functionality
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Ideal for complex applications with many menu items
                  </span>
                </div>
              </div>
            </div>

            {/* Comparison */}
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600">
                💡 <strong>Comparison:</strong> The dense sidebar is perfect for
                admin panels and dashboards where you need to display many
                navigation items without overwhelming the user.
              </p>
            </div>
          </section>
        </div>

        {/* Code Example Section */}
        <div className="bg-white rounded-xl pt-6">
          <TabsContainer value={nestedTabs.dense}>
            <TabList
              onChange={(val) => handleNestedTabChanges("dense", val)}
              ariaLabel="React and Next tabs"
              className="border-b border-gray-200 mb-4"
              box
            >
              <Tab
                label="React"
                value="react"
                selectedTabValue={nestedTabs.dense}
                onChange={(val) => handleNestedTabChanges("dense", val)}
              />
              <Tab
                label="Next"
                value="next"
                selectedTabValue={nestedTabs.dense}
                onChange={(val) => handleNestedTabChanges("dense", val)}
              />
            </TabList>

            <TabPanel value="react" currentValue={nestedTabs.dense}>
              <CodeSnippet
                title="Dense Sidebar Implementation"
                code={`import React, { useState } from "react";
import { Sidebar, Button, Divider } from "@atomos_tech/genesis";
import {
  RiCircleFill,
  RiAlertFill,
  RiLogoutBoxRLine,
} from "@remixicon/react";

const App = () => {
  const [collapsed, setCollapsed] = useState(true);

  const navWithSubMenuItems = [
    {
      label: "Pages",
      items: [
        {
          label: "Home",
          href: "/",
          icon: <RiCircleFill size={18} />,
        },
        {
          label: "Team",
          icon: <RiAlertFill size={18} />,
          subItems: [
            {
              label: "Subteam 1",
            },
            {
              label: "Subteam 2",
            },
          ],
        },
      ],
    },
    {
      label: "Dashboard",
      items: [
        {
          label: "Analytics",
          href: "/dashboard/analytics",
          icon: <RiCircleFill size={18} />,
        },
        {
          label: "Reports",
          icon: <RiAlertFill size={18} />,
          subItems: [
            {
              label: "Monthly",
              href: "/dashboard/reports/monthly",
              icon: <RiCircleFill size={16} />,
            },
            {
              label: "Yearly",
              icon: <RiCircleFill size={16} />,
              subItems: [
                {
                  label: "2023",
                  href: "/dashboard/reports/yearly/2023",
                  icon: <RiCircleFill size={14} />,
                },
                {
                  label: "2024",
                  href: "/dashboard/reports/yearly/2024",
                  icon: <RiCircleFill size={14} />,
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const footerItems = [
    {
      id: "footer1",
      label: "Footer Item 1",
      icon: <RiUserLine size={20} />,
      items: [
        {
          id: "subitem3",
          label: "Subitem 3",
          href: "/footer/sub3",
        },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar dense={true} collapsed={collapsed} setCollapsed={setCollapsed}>
        <Sidebar.Header dense={true}>
          <span 
            onClick={() => setCollapsed(prev => !prev)}
            className="cursor-pointer font-semibold"
          >
            Logo
          </span>
        </Sidebar.Header>
        
        <Sidebar.Menu
          dense={true}
          scroll
          collapsed={collapsed}
          navItems={navWithSubMenuItems}
        />
        
        <Sidebar.Footer
          dense={true}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          navItems={footerItems}
        >
          <Divider className="mb-3" />
          <Button
            className="w-full"
            variant="outlined"
            intent="default-outlined"
            startIcon={<RiLogoutBoxRLine size={20} />}
          >
            {!collapsed ? "" : "Logout"}
          </Button>
        </Sidebar.Footer>
      </Sidebar>
      
      <main className="flex-1 ml-[64px] p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Dense Sidebar Demo</h1>
        <p className="text-gray-600">Compact layout with nested submenus.</p>
      </main>
    </div>
  );
};

export default App;`}
              />
            </TabPanel>

            <TabPanel value="next" currentValue={nestedTabs.dense}>
              <CodeSnippet
                title="Dense Sidebar Implementation"
                code={`"use client";
import { useState } from "react";
import { Sidebar, Button, Divider } from "@atomos_tech/genesis";
import {
  RiCircleFill,
  RiAlertFill,
  RiLogoutBoxRLine,
} from "@remixicon/react";

export default function HomePage() {
  const [collapsed, setCollapsed] = useState(true);

  const navWithSubMenuItems = [
    {
      label: "Pages",
      items: [
        {
          label: "Home",
          href: "/",
          icon: <RiCircleFill size={18} />,
        },
        {
          label: "Team",
          icon: <RiAlertFill size={18} />,
          subItems: [
            {
              label: "Subteam 1",
            },
            {
              label: "Subteam 2",
            },
          ],
        },
      ],
    },
    {
      label: "Dashboard",
      items: [
        {
          label: "Analytics",
          href: "/dashboard/analytics",
          icon: <RiCircleFill size={18} />,
        },
        {
          label: "Reports",
          icon: <RiAlertFill size={18} />,
          subItems: [
            {
              label: "Monthly",
              href: "/dashboard/reports/monthly",
              icon: <RiCircleFill size={16} />,
            },
            {
              label: "Yearly",
              icon: <RiCircleFill size={16} />,
              subItems: [
                {
                  label: "2023",
                  href: "/dashboard/reports/yearly/2023",
                  icon: <RiCircleFill size={14} />,
                },
                {
                  label: "2024",
                  href: "/dashboard/reports/yearly/2024",
                  icon: <RiCircleFill size={14} />,
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const footerItems = [
    {
      id: "footer1",
      label: "Footer Item 1",
      icon: <RiUserLine size={20} />,
      items: [
        {
          id: "subitem3",
          label: "Subitem 3",
          href: "/footer/sub3",
        },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar dense={true} collapsed={collapsed} setCollapsed={setCollapsed}>
        <Sidebar.Header dense={true}>
          <span 
            onClick={() => setCollapsed(prev => !prev)}
            className="cursor-pointer font-semibold"
          >
            Logo
          </span>
        </Sidebar.Header>
        
        <Sidebar.Menu
          dense={true}
          scroll
          collapsed={collapsed}
          navItems={navWithSubMenuItems}
        />
        
        <Sidebar.Footer
          dense={true}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          navItems={footerItems}
        >
          <Divider className="mb-3" />
          <Button
            className="w-full"
            variant="outlined"
            intent="default-outlined"
            startIcon={<RiLogoutBoxRLine size={20} />}
          >
            {!collapsed ? "" : "Logout"}
          </Button>
        </Sidebar.Footer>
      </Sidebar>
      
      <main className="flex-1 ml-[64px] p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Dense Sidebar Demo</h1>
        <p className="text-gray-600">Compact layout with nested submenus.</p>
      </main>
    </div>
  );
}`}
              />
            </TabPanel>
          </TabsContainer>
        </div>
      </div>
    </div>
  );
};

export default SidebarExample;
