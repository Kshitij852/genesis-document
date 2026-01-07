"use client";

import React, { useState } from "react";
import {
  Drawer,
  Button,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@atomos_tech/genesis";
import CodeSnippet from "../../button/_components/CodeSnippet";

type DrawerPosition = "top" | "right" | "bottom" | "left" | undefined;

const DrawerExampleSection = () => {
  const [openPosition, setOpenPosition] = useState<DrawerPosition>(undefined);
  const [customOpen, setCustomOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const positions: DrawerPosition[] = ["top", "right", "bottom", "left"];
  const [nestedTabs, setNestedTabs] = useState({
    basic: "react",
    advanced: "react",
  });

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-4 items-start">
      {/* Basic Usage Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Basic Usage & Positions
        </h2>

        {/* Position Examples */}
        <div className="flex flex-col gap-6 mb-6">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">All Positions</h3>
            <div className="flex gap-3 flex-wrap">
              {positions.map((pos) => (
                <Button key={pos} onClick={() => setOpenPosition(pos)}>
                  Show {pos} Drawer
                </Button>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              Click any button to see the drawer slide in from that position
            </p>
          </div>

          {/* Simple Drawer Example */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">Simple Usage</h3>
            <Button onClick={() => setCustomOpen(true)}>
              Open Custom Drawer
            </Button>
            <Drawer
              isOpen={customOpen}
              setIsOpen={setCustomOpen}
              position="right"
              width="w-96"
            >
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Custom Drawer
                </h3>
                <p className="text-gray-600">
                  This is a simple drawer with custom content. You can put any
                  React components inside.
                </p>
                <div className="pt-4">
                  <Button onClick={() => setCustomOpen(false)}>
                    Close Drawer
                  </Button>
                </div>
              </div>
            </Drawer>
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
              title="Basic Drawer Usage"
              code={`import { useState } from "react";
import { Drawer, Button } from "@atomos_tech/genesis";

type DrawerPosition = "top" | "right" | "bottom" | "left" | undefined;

function App() {
  const [openPosition, setOpenPosition] = useState<DrawerPosition>(undefined);
  const positions: DrawerPosition[] = ["top", "right", "bottom", "left"];

  return (
    <div>
      {/* Position Examples */}
      <div className="flex gap-3 flex-wrap">
        {positions.map((pos) => (
          <Button key={pos} onClick={() => setOpenPosition(pos)}>
            Show {pos} Drawer
          </Button>
        ))}
      </div>

      {/* Drawers for each position */}
      {positions.map((pos) => (
        <Drawer
          key={pos}
          isOpen={openPosition === pos}
          setIsOpen={(isOpen) => {
            if (!isOpen) setOpenPosition(undefined);
          }}
          position={pos}
          width={pos === "left" || pos === "right" ? "w-[500px]" : undefined}
          height={pos === "top" || pos === "bottom" ? "h-[500px]" : undefined}
        >
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">{pos.toUpperCase()} Drawer</h3>
            <p>This is a {pos} drawer.</p>
            <p>You can change its position, width, and height using props.</p>
          </div>
        </Drawer>
      ))}

      {/* Simple Custom Drawer */}
      <Button onClick={() => setCustomOpen(true)}>
        Open Custom Drawer
      </Button>
      <Drawer
        isOpen={customOpen}
        setIsOpen={setCustomOpen}
        position="right"
        width="w-96"
      >
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold">Custom Drawer</h3>
          <p>This is a simple drawer with custom content.</p>
          <Button onClick={() => setCustomOpen(false)}>
            Close Drawer
          </Button>
        </div>
      </Drawer>
    </div>
  );
}`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.basic}>
            <CodeSnippet
              title="Basic Drawer Usage"
              code={`"use client";
import { useState } from "react";
import { Drawer, Button } from "@atomos_tech/genesis";

type DrawerPosition = "top" | "right" | "bottom" | "left" | undefined;

function Page() {
  const [openPosition, setOpenPosition] = useState<DrawerPosition>(undefined);
  const positions: DrawerPosition[] = ["top", "right", "bottom", "left"];

  return (
    <div>
      {/* Position Examples */}
      <div className="flex gap-3 flex-wrap">
        {positions.map((pos) => (
          <Button key={pos} onClick={() => setOpenPosition(pos)}>
            Show {pos} Drawer
          </Button>
        ))}
      </div>

      {/* Drawers for each position */}
      {positions.map((pos) => (
        <Drawer
          key={pos}
          isOpen={openPosition === pos}
          setIsOpen={(isOpen) => {
            if (!isOpen) setOpenPosition(undefined);
          }}
          position={pos}
          width={pos === "left" || pos === "right" ? "w-[500px]" : undefined}
          height={pos === "top" || pos === "bottom" ? "h-[500px]" : undefined}
        >
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">{pos.toUpperCase()} Drawer</h3>
            <p>This is a {pos} drawer.</p>
            <p>You can change its position, width, and height using props.</p>
          </div>
        </Drawer>
      ))}

      {/* Simple Custom Drawer */}
      <Button onClick={() => setCustomOpen(true)}>
        Open Custom Drawer
      </Button>
      <Drawer
        isOpen={customOpen}
        setIsOpen={setCustomOpen}
        position="right"
        width="w-96"
      >
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold">Custom Drawer</h3>
          <p>This is a simple drawer with custom content.</p>
          <Button onClick={() => setCustomOpen(false)}>
            Close Drawer
          </Button>
        </div>
      </Drawer>
    </div>
  );
}`}
            />
          </TabPanel>
        </TabsContainer>

        {/* Position Drawers */}
        {positions.map((pos) => (
          <Drawer
            key={pos}
            isOpen={openPosition === pos}
            setIsOpen={(isOpen) => {
              if (!isOpen) setOpenPosition(undefined);
            }}
            closeOnOutsideClick={true}
            position={pos}
            width={pos === "left" || pos === "right" ? "w-[500px]" : undefined}
            height={pos === "top" || pos === "bottom" ? "h-[500px]" : undefined}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {pos?.toUpperCase()} DRAWER
              </h3>
              <p className="text-gray-600 mb-3">
                This is a {pos} drawer. It slides in from the {pos} edge of the
                screen.
              </p>
              <p className="text-gray-600 mb-4">
                You can change its position, width, and height using props. The
                backdrop can be clicked to close this drawer.
              </p>
              <div className="mt-6">
                <Button onClick={() => setOpenPosition(undefined)}>
                  Close Drawer
                </Button>
              </div>
            </div>
          </Drawer>
        ))}
      </section>

      {/* Advanced Customization Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Real-world Examples
        </h2>

        {/* Real-world Drawer Examples */}
        <div className="flex flex-col gap-4 mb-5">
          {/* Settings Drawer */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-700">
              Settings Panel
            </h3>
            <Button onClick={() => setSettingsOpen(true)}>Open Settings</Button>
            <Drawer
              isOpen={settingsOpen}
              setIsOpen={setSettingsOpen}
              position="right"
              width="w-[420px]"
              //   backdropOpacity="light"
            >
              <div className="h-full flex flex-col">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">Settings</h3>
                  <p className="text-gray-600 mt-1">
                    Customize your preferences
                  </p>
                </div>
                <div className="flex-1 p-6 overflow-y-auto space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">
                      Notifications
                    </h4>
                    <div className="space-y-3">
                      <label className="flex items-center justify-between">
                        <span className="text-gray-700">
                          Email notifications
                        </span>
                        <input
                          type="checkbox"
                          className="toggle"
                          defaultChecked
                        />
                      </label>
                      <label className="flex items-center justify-between">
                        <span className="text-gray-700">
                          Push notifications
                        </span>
                        <input type="checkbox" className="toggle" />
                      </label>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Theme</h4>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 border rounded-lg">
                        Light
                      </button>
                      <button className="px-4 py-2 bg-gray-900 text-white rounded-lg">
                        Dark
                      </button>
                      <button className="px-4 py-2 border rounded-lg">
                        System
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6 border-t border-gray-200">
                  <div className="flex gap-3">
                    <Button
                      variant="outlined"
                      onClick={() => setSettingsOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button onClick={() => setSettingsOpen(false)}>
                      Save Changes
                    </Button>
                  </div>
                </div>
              </div>
            </Drawer>
          </div>

          {/* Shopping Cart Drawer */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-700">Shopping Cart</h3>
            <Button onClick={() => setCartOpen(true)}>
              View Cart (3 items)
            </Button>
            <Drawer
              isOpen={cartOpen}
              setIsOpen={setCartOpen}
              position="right"
              width="w-96"
              closeOnOutsideClick={false}
            >
              <div className="h-full flex flex-col">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">Your Cart</h3>
                  <p className="text-gray-600 mt-1">3 items in your cart</p>
                </div>
                <div className="flex-1 p-6 overflow-y-auto space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 p-3 border rounded-lg"
                    >
                      <div className="w-16 h-16 bg-gray-200 rounded"></div>
                      <div className="flex-1">
                        <h4 className="font-medium">Product {item}</h4>
                        <p className="text-sm text-gray-500">$29.99 × 1</p>
                      </div>
                      <button className="text-red-500">×</button>
                    </div>
                  ))}
                </div>
                <div className="p-6 border-t border-gray-200 space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Total:</span>
                    <span className="font-bold">$89.97</span>
                  </div>
                  <Button className="w-full">Proceed to Checkout</Button>
                  <Button
                    variant="outlined"
                    className="w-full"
                    onClick={() => setCartOpen(false)}
                  >
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </Drawer>
          </div>

          {/* Notification Drawer */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-700">Notifications</h3>
            <Button onClick={() => setNotificationOpen(true)}>
              Show Notifications
            </Button>
            <Drawer
              isOpen={notificationOpen}
              setIsOpen={setNotificationOpen}
              position="top"
              height="h-[400px]"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    Notifications
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="font-medium">New message received</p>
                    <p className="text-sm text-gray-600">From: John Doe</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="font-medium">Order shipped</p>
                    <p className="text-sm text-gray-600">
                      Your order #12345 is on its way
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <p className="font-medium">System update</p>
                    <p className="text-sm text-gray-600">
                      Maintenance scheduled for tonight
                    </p>
                  </div>
                </div>
              </div>
            </Drawer>
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
              title="Real-world Drawer Examples"
              code={`{/* Settings Panel */}
<Drawer
  isOpen={settingsOpen}
  setIsOpen={setSettingsOpen}
  position="right"
  width="w-[420px]"
  backdropOpacity="light"
>
  <div className="h-full flex flex-col">
    <div className="p-6 border-b border-gray-200">
      <h3 className="text-xl font-bold">Settings</h3>
      <p className="text-gray-600 mt-1">Customize your preferences</p>
    </div>
    <div className="flex-1 p-6 overflow-y-auto space-y-6">
      {/* Settings content */}
    </div>
    <div className="p-6 border-t border-gray-200">
      <div className="flex gap-3">
        <Button variant="outlined" onClick={() => setSettingsOpen(false)}>
          Cancel
        </Button>
        <Button onClick={() => setSettingsOpen(false)}>
          Save Changes
        </Button>
      </div>
    </div>
  </div>
</Drawer>

{/* Shopping Cart */}
<Drawer
  isOpen={cartOpen}
  setIsOpen={setCartOpen}
  position="right"
  width="w-96"
  closeOnOutsideClick={false}
>
  <div className="h-full flex flex-col">
    <div className="p-6 border-b border-gray-200">
      <h3 className="text-xl font-bold">Your Cart</h3>
      <p className="text-gray-600 mt-1">3 items in your cart</p>
    </div>
    <div className="flex-1 p-6 overflow-y-auto">
      {/* Cart items */}
    </div>
    <div className="p-6 border-t border-gray-200">
      <div className="flex justify-between mb-4">
        <span className="font-medium">Total:</span>
        <span className="font-bold">$89.97</span>
      </div>
      <Button className="w-full">Proceed to Checkout</Button>
    </div>
  </div>
</Drawer>

{/* Notifications */}
<Drawer
  isOpen={notificationOpen}
  setIsOpen={setNotificationOpen}
  position="top"
  height="h-[400px]"
  backdropOpacity="dark"
>
  <div className="p-6">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-xl font-bold">Notifications</h3>
      <button onClick={() => setNotificationOpen(false)}>✕</button>
    </div>
    {/* Notification items */}
  </div>
</Drawer>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.advanced}>
            <CodeSnippet
              title="Real-world Drawer Examples"
              code={`{/* Settings Panel */}
<Drawer
  isOpen={settingsOpen}
  setIsOpen={setSettingsOpen}
  position="right"
  width="w-[420px]"
  backdropOpacity="light"
>
  <div className="h-full flex flex-col">
    <div className="p-6 border-b border-gray-200">
      <h3 className="text-xl font-bold">Settings</h3>
      <p className="text-gray-600 mt-1">Customize your preferences</p>
    </div>
    <div className="flex-1 p-6 overflow-y-auto space-y-6">
      {/* Settings content */}
    </div>
    <div className="p-6 border-t border-gray-200">
      <div className="flex gap-3">
        <Button variant="outlined" onClick={() => setSettingsOpen(false)}>
          Cancel
        </Button>
        <Button onClick={() => setSettingsOpen(false)}>
          Save Changes
        </Button>
      </div>
    </div>
  </div>
</Drawer>

{/* Shopping Cart */}
<Drawer
  isOpen={cartOpen}
  setIsOpen={setCartOpen}
  position="right"
  width="w-96"
  closeOnOutsideClick={false}
>
  <div className="h-full flex flex-col">
    <div className="p-6 border-b border-gray-200">
      <h3 className="text-xl font-bold">Your Cart</h3>
      <p className="text-gray-600 mt-1">3 items in your cart</p>
    </div>
    <div className="flex-1 p-6 overflow-y-auto">
      {/* Cart items */}
    </div>
    <div className="p-6 border-t border-gray-200">
      <div className="flex justify-between mb-4">
        <span className="font-medium">Total:</span>
        <span className="font-bold">$89.97</span>
      </div>
      <Button className="w-full">Proceed to Checkout</Button>
    </div>
  </div>
</Drawer>

{/* Notifications */}
<Drawer
  isOpen={notificationOpen}
  setIsOpen={setNotificationOpen}
  position="top"
  height="h-[400px]"
  backdropOpacity="dark"
>
  <div className="p-6">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-xl font-bold">Notifications</h3>
      <button onClick={() => setNotificationOpen(false)}>✕</button>
    </div>
    {/* Notification items */}
  </div>
</Drawer>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>
    </div>
  );
};

export default DrawerExampleSection;
