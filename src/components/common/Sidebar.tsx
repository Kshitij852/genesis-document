"use client";
import React from "react";
import {
  RiAlertLine,
  RiArrowDownSLine,
  RiCheckboxLine,
  RiCircleFill,
  RiDashboardLine,
  RiDivideLine,
  RiEqualizerLine,
  RiFileUploadLine,
  RiFilterLine,
  RiFontSize2,
  RiGhostLine,
  RiGlobalLine,
  RiInformationLine,
  RiInputCursorMove,
  RiInputMethodLine,
  RiLayoutHorizontalLine,
  RiListOrdered,
  RiLoaderLine,
  RiLogoutBoxRLine,
  RiMenu5Line,
  RiMouseLine,
  RiPriceTagLine,
  RiProgress3Line,
  RiRadioButtonLine,
  RiRouteLine,
  RiSideBarLine,
  RiTableLine,
  RiToggleLine,
  RiUser3Line,
  RiWindowLine,
} from "@remixicon/react";
import { Button, Divider, Sidebar } from "@atomos_tech/genesis";
import GenesisLogo from "../../../public/assets/genesisLogo.png";
import Image from "next/image";

interface MainSidebarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainSidebar = ({ collapsed, setCollapsed }: MainSidebarProps) => {
  // // sidebar
  // const [collapsed, setCollapsed] = useState(true);

  const navItems = [
    {
      label: "General",
      items: [
        {
          label: "Overview",
          href: "/components/overview",
          icon: <RiDashboardLine size={18} />,
        },
      ],
    },
    {
      label: "Foundation",
      items: [
        {
          label: "Typography",
          href: "/components/typography",
          icon: <RiFontSize2 size={18} />,
        },
      ],
    },
    {
      label: "Actions",
      items: [
        {
          label: "Button",
          href: "/components/button",
          icon: <RiMouseLine size={18} />,
        },
      ],
    },
    {
      label: "Form",
      items: [
        {
          label: "Toggle",
          href: "/components/toggle",
          icon: <RiToggleLine size={18} />,
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
          label: "Textarea",
          href: "/components/textarea",
          icon: <RiInputCursorMove size={18} />,
        },
      ],
    },
    {
      label: "Data Display",
      items: [
        {
          label: "Chip",
          href: "/components/chip",
          icon: <RiPriceTagLine size={18} />,
        },
        {
          label: "Avatar",
          href: "/components/avatar",
          icon: <RiUser3Line size={18} />,
        },
        {
          label: "Table",
          href: "/components/table",
          icon: <RiTableLine size={18} />,
        },
      ],
    },
    {
      label: "Navigation",
      items: [
        {
          label: "Tabs",
          href: "/components/tabs",
          icon: <RiLayoutHorizontalLine size={18} />,
        },
        {
          label: "Menu Item",
          href: "/components/menu-item",
          icon: <RiMenu5Line size={18} />,
        },
        {
          label: "Stepper",
          href: "/components/stepper",
          icon: <RiListOrdered size={18} />,
        },
        {
          label: "Breadcrumb",
          href: "/components/breadcrumb",
          icon: <RiRouteLine size={18} />,
        },
        {
          label: "Sidebar",
          href: "/components/sidebar",
          icon: <RiSideBarLine size={18} />,
        },
        {
          label: "Global Navigation",
          href: "/components/global-navigation",
          icon: <RiGlobalLine size={18} />,
        },
      ],
    },
    {
      label: "Feedback",
      items: [
        {
          label: "Progress",
          href: "/components/progress",
          icon: <RiProgress3Line size={18} />,
        },
        {
          label: "Loading",
          href: "/components/loading",
          icon: <RiLoaderLine size={18} />,
        },
        {
          label: "Skeleton",
          href: "/components/skeleton",
          icon: <RiGhostLine size={18} />,
        },
        {
          label: "Notice",
          href: "/components/notice",
          icon: <RiAlertLine size={18} />,
        },
      ],
    },
    {
      label: "Overlay",
      items: [
        {
          label: "Tooltip",
          href: "/components/tooltip",
          icon: <RiInformationLine size={18} />,
        },
        {
          label: "Modal",
          href: "/components/modal",
          icon: <RiWindowLine size={18} />,
        },
        {
          label: "Dropdown",
          href: "/components/dropdown",
          icon: <RiFilterLine size={18} />,
        },
      ],
    },
    {
      label: "Layout",
      items: [
        {
          label: "Accordion",
          href: "/components/accordion",
          icon: <RiArrowDownSLine size={18} />,
        },

        {
          label: "Divider",
          href: "/components/divider",
          icon: <RiDivideLine size={18} />,
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
              <span
                className="flex items-center justify-center cursor-pointer p-2"
                onClick={() => setCollapsed((prev) => !prev)}
              >
                <Image
                  src={GenesisLogo} // replace with your logo path
                  alt="Genesis logo"
                  className={`transition-all duration-300 object-contain ${
                    collapsed ? "w-48 h-12" : "w-[120px] h-[40px]"
                  }`}
                />
              </span>{" "}
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
