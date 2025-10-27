"use client";
import React from "react";
import Link from "next/link";
import {
  RiMouseLine,
  RiPriceTagLine,
  RiToggleLine,
  RiFontSize2,
  RiCheckboxLine,
  RiRadioButtonLine,
  RiInputMethodLine,
  RiArrowDownSLine,
  RiEqualizerLine,
  RiFileUploadLine,
  RiProgress3Line,
  RiInformationLine,
  RiDivideLine,
  RiInputCursorMove,
  RiLoaderLine,
  RiTableLine,
  RiMenu5Line,
  RiListOrdered,
  RiWindowLine,
  RiRouteLine,
  RiSideBarLine,
  RiGhostLine,
  RiFilterLine,
  RiAlertLine,
  RiUser3Line,
  RiGlobalLine,
  RiPaletteLine,
  RiLayoutLine,
  RiCodeBoxLine,
  RiLayoutHorizontalLine,
} from "@remixicon/react";
import { Chip } from "@atomos_tech/genesis";

const MainOverview = () => {
  const components = [
    {
      name: "Button",
      description:
        "Interactive buttons with various styles, sizes, and states for user actions",
      href: "/components/button",
      icon: <RiMouseLine size={24} className="text-blue-600" />,
      category: "Actions",
      status: "stable",
    },
    {
      name: "Chip",
      description:
        "Compact elements for input, attribution, or action with multiple variants",
      href: "/components/chip",
      icon: <RiPriceTagLine size={24} className="text-green-600" />,
      category: "Data Display",
      status: "stable",
    },
    {
      name: "Toggle",
      description: "Switch controls for binary states with smooth animations",
      href: "/components/toggle",
      icon: <RiToggleLine size={24} className="text-purple-600" />,
      category: "Forms",
      status: "stable",
    },
    {
      name: "Typography",
      description:
        "Consistent text styles and hierarchy for better readability",
      href: "/components/typography",
      icon: <RiFontSize2 size={24} className="text-gray-600" />,
      category: "Foundation",
      status: "stable",
    },
    {
      name: "Checkbox",
      description:
        "Selection controls for multiple options with various states",
      href: "/components/checkbox",
      icon: <RiCheckboxLine size={24} className="text-indigo-600" />,
      category: "Forms",
      status: "stable",
    },
    {
      name: "Radio",
      description: "Exclusive selection controls for single choice scenarios",
      href: "/components/radio",
      icon: <RiRadioButtonLine size={24} className="text-pink-600" />,
      category: "Forms",
      status: "stable",
    },
    {
      name: "Input Field",
      description:
        "Text input fields with validation, icons, and various states",
      href: "/components/input",
      icon: <RiInputMethodLine size={24} className="text-orange-600" />,
      category: "Forms",
      status: "stable",
    },
    {
      name: "Accordion",
      description:
        "Collapsible content sections for organized information display",
      href: "/components/accordion",
      icon: <RiArrowDownSLine size={24} className="text-teal-600" />,
      category: "Layout",
      status: "stable",
    },
    {
      name: "Slider",
      description: "Range selection controls with smooth dragging interaction",
      href: "/components/slider",
      icon: <RiEqualizerLine size={24} className="text-red-600" />,
      category: "Forms",
      status: "stable",
    },
    {
      name: "File Upload",
      description: "Drag and drop file upload with preview and validation",
      href: "/components/file-upload",
      icon: <RiFileUploadLine size={24} className="text-cyan-600" />,
      category: "Forms",
      status: "stable",
    },
    {
      name: "Progress",
      description: "Visual indicators for task completion and loading states",
      href: "/components/progress",
      icon: <RiProgress3Line size={24} className="text-lime-600" />,
      category: "Feedback",
      status: "stable",
    },
    {
      name: "Tooltip",
      description: "Contextual information popups on hover or focus",
      href: "/components/tooltip",
      icon: <RiInformationLine size={24} className="text-amber-600" />,
      category: "Overlay",
      status: "stable",
    },
    {
      name: "Divider",
      description: "Visual separators for content organization and hierarchy",
      href: "/components/divider",
      icon: <RiDivideLine size={24} className="text-gray-500" />,
      category: "Layout",
      status: "stable",
    },
    {
      name: "Textarea",
      description: "Multi-line text input for longer form content",
      href: "/components/textarea",
      icon: <RiInputCursorMove size={24} className="text-emerald-600" />,
      category: "Forms",
      status: "stable",
    },
    {
      name: "Loading",
      description: "Loading indicators and spinners for async operations",
      href: "/components/loading",
      icon: <RiLoaderLine size={24} className="text-blue-500" />,
      category: "Feedback",
      status: "stable",
    },
    {
      name: "Tabs",
      description: "Organized content navigation with multiple tab panels",
      href: "/components/tabs",
      icon: <RiLayoutHorizontalLine size={24} className="text-violet-600" />,
      category: "Navigation",
      status: "stable",
    },
    {
      name: "Menu Item",
      description: "Navigation menu items with icons and nested support",
      href: "/components/menu-item",
      icon: <RiMenu5Line size={24} className="text-rose-600" />,
      category: "Navigation",
      status: "stable",
    },
    {
      name: "Stepper",
      description: "Step-by-step progress indicators for multi-step processes",
      href: "/components/stepper",
      icon: <RiListOrdered size={24} className="text-sky-600" />,
      category: "Navigation",
      status: "stable",
    },
    {
      name: "Modal",
      description: "Dialog windows for focused user interactions",
      href: "/components/modal",
      icon: <RiWindowLine size={24} className="text-fuchsia-600" />,
      category: "Overlay",
      status: "stable",
    },
    {
      name: "Breadcrumb",
      description: "Navigation hierarchy display for current page location",
      href: "/components/breadcrumb",
      icon: <RiRouteLine size={24} className="text-amber-500" />,
      category: "Navigation",
      status: "stable",
    },
    {
      name: "Sidebar",
      description: "Collapsible navigation sidebar with menu items",
      href: "/components/sidebar",
      icon: <RiSideBarLine size={24} className="text-indigo-500" />,
      category: "Navigation",
      status: "stable",
    },
    {
      name: "Skeleton",
      description: "Loading placeholders for content while data loads",
      href: "/components/skeleton",
      icon: <RiGhostLine size={24} className="text-gray-400" />,
      category: "Feedback",
      status: "stable",
    },
    {
      name: "Dropdown",
      description: "Contextual menus with selectable options",
      href: "/components/dropdown",
      icon: <RiFilterLine size={24} className="text-purple-500" />,
      category: "Overlay",
      status: "stable",
    },
    {
      name: "Notice",
      description: "Alert messages and notifications for user feedback",
      href: "/components/notice",
      icon: <RiAlertLine size={24} className="text-yellow-600" />,
      category: "Feedback",
      status: "stable",
    },
    {
      name: "Avatar",
      description: "User profile images with fallbacks and status indicators",
      href: "/components/avatar",
      icon: <RiUser3Line size={24} className="text-green-500" />,
      category: "Data Display",
      status: "stable",
    },
    {
      name: "Global Navigation",
      description: "User menu dropdowns with profile and settings access",
      href: "/components/global-navigation",
      icon: <RiGlobalLine size={24} className="text-blue-600" />,
      category: "Navigation",
      status: "stable",
    },
    {
      name: "Table",
      description: "Data tables with sorting, pagination, and expandable rows",
      href: "/components/table",
      icon: <RiTableLine size={24} className="text-cyan-600" />,
      category: "Data Display",
      status: "stable",
    },
  ];

  const categories = [
    "All",
    "Actions",
    "Forms",
    "Data Display",
    "Navigation",
    "Feedback",
    "Overlay",
    "Layout",
    "Foundation",
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredComponents =
    selectedCategory === "All"
      ? components
      : components.filter(
          (component) => component.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary-100 rounded-xl">
              <RiCodeBoxLine size={32} className="text-primary-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                Component Library
              </h1>
              <p className="text-gray-600 mt-2 text-lg">
                A comprehensive collection of reusable React components built
                with Tailwind CSS
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <RiCodeBoxLine size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {components.length}
                  </p>
                  <p className="text-sm text-gray-600">Components</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <RiPaletteLine size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {categories.length - 1}
                  </p>
                  <p className="text-sm text-gray-600">Categories</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <RiCheckboxLine size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {components.length}
                  </p>
                  <p className="text-sm text-gray-600">Stable</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <RiLayoutLine size={20} className="text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">100%</p>
                  <p className="text-sm text-gray-600">Accessible</p>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Categories
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary-600 text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Components Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredComponents.map((component) => (
              <Link key={component.name} href={component.href}>
                <div className="h-full p-6 hover:shadow-lg transition-all bg-white duration-200 cursor-pointer border border-gray-200 hover:border-primary-300 group">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-primary-50 transition-colors">
                        {component.icon}
                      </div>
                      <Chip size="sm" intent="primary" className="text-xs">
                        {component.status}
                      </Chip>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {component.name}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                      {component.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {component.category}
                      </span>
                      <div className="text-primary-600 group-hover:translate-x-1 transition-transform">
                        →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredComponents.length === 0 && (
            <div className="text-center py-12">
              <RiCodeBoxLine size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No components found
              </h3>
              <p className="text-gray-600">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainOverview;
