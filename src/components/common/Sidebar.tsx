"use client";
import React from "react";
import {
  RiArrowDownSLine,
  RiCheckboxLine,
  RiCircleFill,
  RiDashboardLine,
  RiEqualizerLine,
  RiFileUploadLine,
  RiFontSize2,
  RiInformationLine,
  RiInputCursorMove,
  RiInputMethodLine,
  RiLogoutBoxRLine,
  RiMouseLine,
  RiPriceTagLine,
  RiProgress3Line,
  RiRadioButtonLine,
  RiSeparator,
  RiToggleLine,
} from "@remixicon/react";
import { Button, Divider, Sidebar } from "@atomos_tech/genesis";

interface MainSidebarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainSidebar = ({ collapsed, setCollapsed }: MainSidebarProps) => {
  // // sidebar
  // const [collapsed, setCollapsed] = useState(true);

  const navItems = [
    {
      label: "Page",
      items: [
        {
          label: "Overview",
          href: "/components/overview",
          icon: <RiDashboardLine size={18} />,
        },
        {
          label: "Button",
          href: "/components/button",
          icon: <RiMouseLine size={18} />,
        },
        {
          label: "Chip",
          href: "/components/chip",
          icon: <RiPriceTagLine size={18} />,
        },
        {
          label: "Toggle",
          href: "/components/toggle",
          icon: <RiToggleLine size={18} />,
        },
        {
          label: "Typography",
          href: "/components/typography",
          icon: <RiFontSize2 size={18} />,
        },
        {
          label: "Checkbox",
          href: "/components/checkbox",
          icon: <RiCheckboxLine size={18} />,
        },
        {
          label: "Radio",
          href: "/components/radio",
          icon: <RiRadioButtonLine size={18} />,
        },
        {
          label: "Input Field",
          href: "/components/input",
          icon: <RiInputMethodLine size={18} />,
        },
        {
          label: "Accordion",
          href: "/components/accordion",
          icon: <RiArrowDownSLine size={18} />,
        },
        {
          label: "Slider",
          href: "/components/slider",
          icon: <RiEqualizerLine size={18} />,
        },
        {
          label: "File Upload",
          href: "/components/file-upload",
          icon: <RiFileUploadLine size={18} />,
        },
        {
          label: "Progress",
          href: "/components/progress",
          icon: <RiProgress3Line size={18} />,
        },
        {
          label: "Tooltip",
          href: "/components/tooltip",
          icon: <RiInformationLine size={18} />,
        },
        {
          label: "Divider",
          href: "/components/divider",
          icon: <RiSeparator size={18} />,
        },
        {
          label: "Textarea",
          href: "/components/textarea",
          icon: <RiInputCursorMove size={18} />,
        },
      ],
    },
    {
      label: "Page",
      items: [
        {
          label: "Dashboard",
          href: "/pages/dashboard",
          icon: <RiCircleFill size={18} />,
        },
        {
          label: "Team",
          href: "/pages/team",
          icon: <RiCircleFill size={18} />,
        },
      ],
    },
  ];

  const footerItems = [
    {
      label: "Footer Item 1",
      items: [
        {
          label: "Subitem 3",
          href: "/subitem3",
          icon: <RiCircleFill size={18} />,
        },
      ],
    },
  ];

  return (
    <div>
      {" "}
      {/* Sidebar */}
      <div className="relative flex gap-3 bg-white z-50">
        <section className=" bg-white">
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}>
            <Sidebar.Header collapsed={collapsed} setCollapsed={setCollapsed}>
              <span onClick={() => setCollapsed((prev) => !prev)}>Logo</span>
            </Sidebar.Header>

            <Sidebar.Menu
              scroll
              collapsed={collapsed}
              setCollapsed={setCollapsed}
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
        </section>
      </div>
    </div>
  );
};

export default MainSidebar;
