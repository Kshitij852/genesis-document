import React from "react";

const InstallationReact = () => {
  return (
    <div className="my-8 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Installation Guide for React
      </h2>

      <div className="space-y-8">
        {" "}
        {/* Step 1 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">
            Step 1: Installation
          </h3>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            npm i @atomos_tech/genesis-react
          </div>
          <p className="text-gray-600 mt-2 text-sm">
            Begin by installing the Atomos Genesis Component Library(React) via
            npm:
          </p>
        </div>
        {/* Step 2 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-3 ">
            Step 2: Import CSS
          </h3>
          <p className="text-gray-600 mt-2 text-sm mb-2">
            {` Import the library's CSS in your root layout file to apply the
            default styles.`}
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            {`import "@atomos_tech/genesis-react/style";`}
          </div>

          <h4 className="font-semibold text-md my-3">
            Or if you are getting error for style then import css from your node
            modules like the example below:
          </h4>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            {`import "../node_modules/@atomos_tech/genesis-react/dist/index.css";`}
          </div>

          <h4 className="font-normal text-md my-3">
            Also, Make sure to import it right above your global.css file to
            override the default colour palette!
          </h4>
          <p className="text-sm mt-3 mb-2">For example:</p>

          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            {`import "@atomos_tech/genesis-react/style";`} <br />
            <div className="text-gray-500">{"// or node_modules import"}</div>
            {`import "../node_modules/@atomos_tech/genesis-react/dist/index.css";`}{" "}
            <br />
            {`import "./globals.css";`}
          </div>
        </div>
        {/* Step 3 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">
            Step 3: Set Up Theme Container
          </h3>
          <p className="text-gray-600 mt-2 text-sm mb-2">
            Wrap your application content within a <code>theme-primary</code>{" "}
            class to ensure consistent theming across your app. Add this snippet
            to your root or base page(main.tsx or App.tsx):
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            {`<div className="theme-primary">{children}</div>`}
          </div>
        </div>
        {/* Step 4 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">
            Step 4: Configure Tailwind
          </h3>
          <p className="text-gray-600 mt-2 text-sm mb-2">
            You can set up the Tailwind CSS configuration in your
            <code className="bg-gray-200 px-1 py-0.5 rounded mx-1">
              tailwind.config.ts
            </code>
            or
            <code className="bg-gray-200 px-1 py-0.5 rounded mx-1">
              tailwind.config.js
            </code>
            and copy the theme styling below:
          </p>

          {/* Code block */}
          <div className="relative bg-gray-100 text-gray-800 p-5 mt-3 rounded-lg overflow-x-auto shadow-sm">
            <pre className="whitespace-pre-wrap text-sm font-mono leading-snug">
              <code>
                {`theme: {
    extend: {
      colors: {
        backdrop: "rgba(0, 0, 0, 0.5)",

        // Primary Colors
        primary: {
          25: "var(--primary-25)",
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
        },

        // Gray Colors
        gray: {
          25: "var(--gray-25)",
          50: "var(--gray-50)",
          100: "var(--gray-100)",
          200: "var(--gray-200)",
          300: "var(--gray-300)",
          400: "var(--gray-400)",
          500: "var(--gray-500)",
          600: "var(--gray-600)",
          700: "var(--gray-700)",
          800: "var(--gray-800)",
          900: "var(--gray-900)",
        },

        // Error Colors
        error: {
          25: "var(--error-25)",
          50: "var(--error-50)",
          100: "var(--error-100)",
          200: "var(--error-200)",
          300: "var(--error-300)",
          400: "var(--error-400)",
          500: "var(--error-500)",
          600: "var(--error-600)",
          700: "var(--error-700)",
          800: "var(--error-800)",
          900: "var(--error-900)",
        },

        // Warning Colors
        warning: {
          25: "var(--warning-25)",
          50: "var(--warning-50)",
          100: "var(--warning-100)",
          200: "var(--warning-200)",
          300: "var(--warning-300)",
          400: "var(--warning-400)",
          500: "var(--warning-500)",
          600: "var(--warning-600)",
          700: "var(--warning-700)",
          800: "var(--warning-800)",
          900: "var(--warning-900)",
        },

        // Success Colors
        success: {
          25: "var(--success-25)",
          50: "var(--success-50)",
          100: "var(--success-100)",
          200: "var(--success-200)",
          300: "var(--success-300)",
          400: "var(--success-400)",
          500: "var(--success-500)",
          600: "var(--success-600)",
          700: "var(--success-700)",
          800: "var(--success-800)",
          900: "var(--success-900)",
        },

        bluegray: {
          25: "#fcfcfd",
          50: "#f8f9fc",
          100: "#eaecf5",
          200: "#d5d9eb",
          300: "#afb5d9",
          400: "#717bbc",
          500: "#4e5ba6",
          600: "#3e4784",
          700: "#363f72",
          800: "#293056",
          900: "#101323",
        },

        bluelight: {
          25: "#f5fbff",
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#b9e6fe",
          300: "#7cd4fd",
          400: "#36bffa",
          500: "#0ba5ec",
          600: "#0086c9",
          700: "#026aa2",
          800: "#065986",
          900: "#0b4a6f",
        },

        indigo: {
          25: "#f5f8ff",
          50: "#eef4ff",
          100: "#e0eaff",
          200: "#c7d7fe",
          300: "#a4bcfd",
          400: "#8098f9",
          500: "#6172f3",
          600: "#444ce7",
          700: "#3538cd",
          800: "#2d31a6",
          900: "#2d3282",
        },

        purple: {
          25: "#fafaff",
          50: "#f4f3ff",
          100: "#ebe9fe",
          200: "#d9d6fe",
          300: "#bdb4fe",
          400: "#9b8afb",
          500: "#7a5af8",
          600: "#6938ef",
          700: "#5925dc",
          800: "#4a1fb8",
          900: "#3e1c96",
        },

        violet: {
          25: "#fcfaff",
          50: "#f9f5ff",
          100: "#f4ebff",
          200: "#e9d7fe",
          300: "#d6bbfb",
          400: "#b692f6",
          500: "#9e77ed",
          600: "#7f56d9",
          700: "#6941c6",
          800: "#53389e",
          900: "#42307d",
        },

        pink: {
          25: "#fef6fb",
          50: "#fdf2fa",
          100: "#fce7f6",
          200: "#fcceee",
          300: "#faa7e0",
          400: "#f670c7",
          500: "#ee46bc",
          600: "#dd2590",
          700: "#c11574",
          800: "#9e165f",
          900: "#851651",
        },

        rose: {
          25: " #fff5f6",
          50: "#fff1f3",
          100: "#ffe4e8",
          200: "#fecdd6",
          300: "#fea3b4",
          400: "#fd6f8e",
          500: "#f63d68",
          600: "#e31b54",
          700: "#c01048",
          800: "#a11043",
          900: "#89123e",
        },

        orange: {
          25: "#fffaf5",
          50: "#fff6ed",
          100: "#ffead5",
          200: "#fddcab",
          300: "#feb273",
          400: "#fd853a",
          500: "#fb6514",
          600: "#ec4a0a",
          700: "#c4320a",
          800: "#9c2a10",
          900: "#7e2410",
        },
      },
      fontSize: {
        "display-2xl": "4.5rem", // 72px
        "display-xl": "3.75rem", // 60px
        "display-lg": "3rem", // 48px
        "display-md": "2.25rem", // 36px
        "display-sm": "1.875rem", // 30px
        "display-xs": "1.5rem", // 24px
        "text-xl": "1.25rem", // 20px
        "text-lg": "1.125rem", // 18px
        "text-md": "1rem", // 16px
        "text-sm": "0.875rem", // 14px
        "text-xs": "0.75rem", // 12px
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      boxShadow: {
        sm: "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.1)",
        md: "1px 2px 12px 0px rgba(112, 112, 112, 0.25)",
        lg: "0px 4px 12px 0px rgba(16, 24, 40, 0.25)",
        table: "inset -3px 0px 0px 0px #EAECF0",
      },
      animation: {
        "slide-in-top": "slide-in-top 0.5s ease forwards",
        "slide-in-right": "slide-in-right 0.5s ease forwards",
        "spin-slow": "spin-slow 1.5s linear infinite",
      },
      keyframes: {
        "slide-in-top": {
          from: {
            transform: "translateY(-100%)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        "slide-in-right": {
          from: {
            transform: "translateX(100%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        "spin-slow": {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },`}
              </code>
            </pre>
          </div>

          <p className="text-gray-600 mt-3 text-sm">
            This configuration extends your Tailwind theme with Genesis design
            tokens, colors, typography, and animations.
          </p>
        </div>
        {/* Step 5 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">
            Step 5: Define Global Styles
          </h3>

          <p className="text-gray-600 mt-2 text-sm mb-2">
            Add the following CSS to your
            <code className="bg-gray-200 px-1 py-0.5 rounded mx-1">
              index.css
            </code>
            file to define the theme variables and base styles:
          </p>

          {/* Code block */}
          <div className="relative bg-gray-100 text-gray-800 p-5 mt-3 rounded-lg overflow-x-auto shadow-sm">
            <pre className="whitespace-pre-wrap text-sm font-mono leading-snug">
              <code>{`@layer base {
  :root {
    /* Theme Primary Colors */
    .theme-primary {
      --primary-25: #f5faff;
      --primary-50: #eff8ff;
      --primary-100: #d1e9ff;
      --primary-200: #b2ddff;
      --primary-300: #84caff;
      --primary-400: #53b1fd;
      --primary-500: #2e90fa;
      --primary-600: #1570ef;
      --primary-700: #175cd3;
      --primary-800: #1849a9;
      --primary-900: #194185;
    }

    /* Gray Colors */
    --gray-25: #fff;
    --gray-50: #f9fafb;
    --gray-100: #f2f4f7;
    --gray-200: #eaecf0;
    --gray-300: #d0d5dd;
    --gray-400: #98a2b3;
    --gray-500: #667085;
    --gray-600: #475467;
    --gray-700: #344054;
    --gray-800: #1d2939;
    --gray-900: #101828;

    /* Error Colors */
    --error-25: #fffbfa;
    --error-50: #fef3f2;
    --error-100: #fee4e2;
    --error-200: #fecdca;
    --error-300: #fda29b;
    --error-400: #f97066;
    --error-500: #f04438;
    --error-600: #d92d20;
    --error-700: #b42318;
    --error-800: #912018;
    --error-900: #7a271a;

    /* Warning Colors */
    --warning-25: #fffdf5;
    --warning-50: #fffaeb;
    --warning-100: #fef0c7;
    --warning-200: #fedf89;
    --warning-300: #fec84b;
    --warning-400: #fdb022;
    --warning-500: #f79009;
    --warning-600: #dc6803;
    --warning-700: #b54708;
    --warning-800: #93370d;
    --warning-900: #7a2e0e;

    /* Success Colors */
    --success-25: #f6fef9;
    --success-50: #ecfdf3;
    --success-100: #d1fadf;
    --success-200: #a6f4c5;
    --success-300: #6ce9a6;
    --success-400: #32d583;
    --success-500: #12b76a;
    --success-600: #039855;
    --success-700: #027a48;
    --success-800: #05603a;
    --success-900: #054f31;
  }
}`}</code>
            </pre>
          </div>

          <p className="text-gray-600 mt-3 text-sm">
            These variables provide consistent color tokens across your app and
            can be used to match Genesis UI components with your brand theme.
          </p>
        </div>
        {/* Step 6 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">
            Step 6: Usage
          </h3>

          <p className="text-gray-600 mt-2 text-sm mb-2">
            With the library set up, you can start using the provided
            components. Below are examples of how to implement the{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded mx-1">Button</code>{" "}
            and{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded mx-1">Chip</code>{" "}
            components.
          </p>

          <h4 className="text-gray-700 font-semibold mt-4 mb-2 text-lg">
            Import Components
          </h4>
          <p className="text-gray-600 text-sm mb-2">
            Import the required components from the{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded mx-1">
              @atomos_tech/genesis-react
            </code>{" "}
            package:
          </p>

          {/* Import Code Block */}
          <div className="relative bg-gray-100 text-gray-800 p-5 mt-3 rounded-lg overflow-x-auto shadow-sm">
            <pre className="whitespace-pre-wrap text-sm font-mono leading-snug">
              <code>{`import { Button, Chip } from "@atomos_tech/genesis";`}</code>
            </pre>
          </div>

          <h4 className="text-gray-700 font-medium mt-6 mb-2 text-sm">
            Example Usage
          </h4>
          <p className="text-gray-600 text-sm mb-2">
            Here’s how you can integrate the{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded mx-1">Button</code>{" "}
            and{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded mx-1">Chip</code>{" "}
            into your page:
          </p>

          {/* Example Usage Code Block */}
          <div className="relative bg-gray-100 text-gray-800 p-5 mt-3 rounded-lg overflow-x-auto shadow-sm">
            <pre className="whitespace-pre-wrap text-sm font-mono leading-snug">
              <code>{`<Button variant="filled" intent="primary">
  Primary
</Button>

<Chip intent="primary" size="lg">
  Primary
</Chip>`}</code>
            </pre>
          </div>

          {/* <p className="text-gray-600 mt-3 text-sm">
            You can customize the{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded">variant</code>,{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded">intent</code>, and{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded">size</code> props
            to match your design requirements.
          </p> */}
        </div>
      </div>

      <div className="mb-2 mt-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-3">
          Step 7: Example Pages
        </h3>

        <p className="text-gray-600 mt-2 text-sm mb-4">
          Here are two examples demonstrating how you can set up pages using the{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded mx-1">
            @atomos_tech/genesis-react
          </code>{" "}
          library — a simple example and one with interactivity.
        </p>

        {/* Two-column responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Example Page */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
            <h4 className="text-gray-700 font-medium text-sm mb-3">
              Example Page
            </h4>
            <p className="text-gray-600 text-sm mb-3">
              A simple example of using the{" "}
              <code className="bg-gray-200 px-1 py-0.5 rounded">Button</code>{" "}
              and <code className="bg-gray-200 px-1 py-0.5 rounded">Chip</code>{" "}
              components:
            </p>
            <div className="relative bg-gray-100 text-gray-800 p-5 rounded-lg overflow-x-auto shadow-sm h-[76vh]">
              <pre className="whitespace-pre-wrap text-sm font-mono leading-snug">
                <code>{`import { Button, Chip } from "@atomos_tech/genesis-react";

export default function ExamplePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Atomos Genesis Example(React)</h1>
      <div className="mb-4">
        <Button variant="filled" intent="primary">
          Primary Button
        </Button>
      </div>
      <div>
        <Chip intent="primary" size="lg">
          Primary Chip
        </Chip>
      </div>
    </div>
  );
}`}</code>
              </pre>
            </div>
          </div>

          {/* Interactive Example */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
            <h4 className="text-gray-700 font-medium text-sm mb-3">
              Interactive Example
            </h4>
            <p className="text-gray-600 text-sm mb-3">
              This version adds interactivity using{" "}
              <code className="bg-gray-200 px-1 py-0.5 rounded">useState</code>{" "}
              from React:
            </p>
            <div className="relative bg-gray-100 text-gray-800 p-5 rounded-lg overflow-x-auto shadow-sm">
              <pre className="whitespace-pre-wrap text-sm font-mono leading-snug">
                <code>{`import { Button, Chip } from "@atomos_tech/genesis-react";
import { useState } from "react";

export default function InteractivePage() {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Interactive Atomos Genesis(React) Example
      </h1>

      <div className="mb-4">
        <Button
          variant="filled"
          intent="primary"
          onClick={() => setButtonClicked(!buttonClicked)}
        >
          {buttonClicked ? "Clicked!" : "Click Me"}
        </Button>
      </div>

      <div className="mb-4">
        <Chip intent="primary" size="lg">
          {buttonClicked ? "Active Chip" : "Inactive Chip"}
        </Chip>
      </div>
    </div>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mt-6 text-sm">
          These examples demonstrate how to integrate and utilize the{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded">
            @atomos_tech/genesis-react
          </code>{" "}
          {`library in your web applications, providing a consistent and visually
          appealing user interface.`}
        </p>
      </div>
    </div>
  );
};

export default InstallationReact;
