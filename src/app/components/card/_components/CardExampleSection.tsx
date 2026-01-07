"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
  Button,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
} from "@atomos_tech/genesis";
import CodeSnippet from "../../button/_components/CodeSnippet";

const CardExampleSection = () => {
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
          Basic Usage
        </h2>

        {/* Basic Card Examples */}
        <div className="flex flex-col gap-6 mb-6">
          {/* Default Card */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">Default Card</h3>
            <div className="space-y-5">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                  <CardAction>
                    <Button>Action Button</Button>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Minimal Card */}
          {/* <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">Minimal Card</h3>
            <div className="space-y-5">
              <Card 
              variant="outlined" 
              padding="sm">
                <CardContent>
                  <div className="text-center py-4">
                    <p className="font-medium text-gray-800">
                      Simple Content Card
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      No header or footer needed
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div> */}

          {/* Card with Image */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Card with Image
            </h3>

            <div className="space-y-5">
              <Card className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
                  alt="Mountain landscape"
                  className="h-40 w-full object-cover"
                />

                <CardContent className="pt-4">
                  <CardTitle className="mb-2">Beautiful Landscape</CardTitle>
                  <CardDescription className="mb-4">
                    A stunning view of mountains and lakes
                  </CardDescription>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-500">
                      Photo by Nature Lover
                    </span>
                    <Button size="sm">View</Button>
                  </div>
                </CardContent>
              </Card>
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
              title="Basic Card Usage"
              code={`{/* Default Card */}
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardAction>
      <Button>Action Button</Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

{/* Card with Image */}
<Card className="overflow-hidden">
<img
    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
    alt="Mountain landscape"
    className="h-40 w-full object-cover"
/>

<CardContent className="pt-4">
    <CardTitle className="mb-2">Beautiful Landscape</CardTitle>
    <CardDescription className="mb-4">
    A stunning view of mountains and lakes
    </CardDescription>

    <div className="flex justify-between items-center mt-4">
    <span className="text-sm text-gray-500">
        Photo by Nature Lover
    </span>
    <Button size="sm">View</Button>
    </div>
</CardContent>
</Card>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.basic}>
            <CodeSnippet
              title="Basic Card Usage"
              code={`{/* Default Card */}
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardAction>
      <Button>Action Button</Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

{/* Card with Image */}
<Card className="overflow-hidden">
<img
    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
    alt="Mountain landscape"
    className="h-40 w-full object-cover"
/>

<CardContent className="pt-4">
    <CardTitle className="mb-2">Beautiful Landscape</CardTitle>
    <CardDescription className="mb-4">
    A stunning view of mountains and lakes
    </CardDescription>

    <div className="flex justify-between items-center mt-4">
    <span className="text-sm text-gray-500">
        Photo by Nature Lover
    </span>
    <Button size="sm">View</Button>
    </div>
</CardContent>
</Card>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* Advanced Customization Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Advanced Customization
        </h2>

        {/* Advanced Card Examples */}
        <div className="flex flex-col gap-6 mb-6">
          {/* Custom Styled Card */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Custom Styled Card
            </h3>
            <div className="space-y-5">
              <Card className="p-0 bg-gradient-to-br from-primary-50 w-full to-primary-100 border-2 border-primary-200 rounded-2xl shadow-sm">
                <CardHeader className="px-6 pt-6 pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl font-bold text-primary-800">
                        Project Dashboard
                      </CardTitle>
                      <CardDescription className="text-primary-600">
                        Manage your projects and tasks efficiently
                      </CardDescription>
                    </div>
                    <CardAction>
                      <Button
                        variant="filled"
                        intent="primary"
                        className="shadow-md"
                      >
                        Create New
                      </Button>
                    </CardAction>
                  </div>
                </CardHeader>
                <CardContent className="px-6 py-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                      <span className="font-medium text-gray-700">
                        Active Projects
                      </span>
                      <span className="font-bold text-blue-700 text-lg">
                        12
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                      <span className="font-medium text-gray-700">
                        Completed Tasks
                      </span>
                      <span className="font-bold text-green-600 text-lg">
                        45
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                      <span className="font-medium text-gray-700">
                        Pending Reviews
                      </span>
                      <span className="font-bold text-amber-600 text-lg">
                        3
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-6 py-4 border-t border-blue-200/50">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-sm text-primary-600">
                      Last updated: Today
                    </span>
                    <Button
                      variant="outlined"
                      size="sm"
                      className="border-primary-300 text-primary-700"
                    >
                      View All
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Variant Examples */}
          {/* <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">Card Variants</h3>
            <div className="grid grid-cols-2 gap-4">
              <Card
                //    variant="outlined"
                className="text-center py-4"
              >
                <CardContent>
                  <p className="font-medium">Outlined</p>
                  <p className="text-xs text-gray-500 mt-1">Strong border</p>
                </CardContent>
              </Card>
              <Card
                //   variant="elevated"
                className="text-center py-4"
              >
                <CardContent>
                  <p className="font-medium">Elevated</p>
                  <p className="text-xs text-gray-500 mt-1">With shadow</p>
                </CardContent>
              </Card>
              <Card
                //   variant="filled"
                className="text-center py-4 bg-blue-50"
              >
                <CardContent>
                  <p className="font-medium">Filled</p>
                  <p className="text-xs text-gray-500 mt-1">Background color</p>
                </CardContent>
              </Card>
              <Card className="text-center py-4">
                <CardContent>
                  <p className="font-medium">Default</p>
                  <p className="text-xs text-gray-500 mt-1">Subtle border</p>
                </CardContent>
              </Card>
            </div>
          </div> */}

          {/* Interactive Card */}
          {/* <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">
              Interactive Card
            </h3>
            <div className="space-y-5">
              <Card
                className="cursor-pointer hover:shadow-lg transition-shadow duration-200"
                onClick={() => alert("Card clicked!")}
              >
                <CardHeader>
                  <CardTitle>Clickable Card</CardTitle>
                  <CardDescription>Click anywhere on this card</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    This card has an onClick handler. Try clicking it!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div> */}

          {/* Stats Card */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">Stats Card</h3>
            <div className="space-y-5">
              <Card className="bg-gradient-to-r from-primary-50 to-primary-100">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Monthly Revenue
                      </p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">
                        $24,580
                      </p>
                      <p className="text-sm text-primary-600 mt-1">
                        ↑ 12.5% from last month
                      </p>
                    </div>
                    <div className="p-3 bg-primary-500/10 rounded-full">
                      <span className="text-2xl">💰</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
              title="Advanced Card Customization"
              code={`{/* Custom Styled Card */}
<Card className="w-full p-0 bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-bluprimarye-200 rounded-2xl shadow-sm">
  <CardHeader className="px-6 pt-6 pb-4">
    <div className="flex justify-between items-start">
      <div>
        <CardTitle className="text-2xl font-bold text-primary-800">
          Project Dashboard
        </CardTitle>
        <CardDescription className="text-primary-600">
          Manage your projects and tasks efficiently
        </CardDescription>
      </div>
      <CardAction>
        <Button variant="filled" intent="primary" className="shadow-md">
          Create New
        </Button>
      </CardAction>
    </div>
  </CardHeader>
  <CardContent className="px-6 py-4">
    <div className="space-y-3">
      <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
        <span className="font-medium text-gray-700">Active Projects</span>
        <span className="font-bold text-blue-700 text-lg">12</span>
      </div>
      <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
        <span className="font-medium text-gray-700">Completed Tasks</span>
        <span className="font-bold text-green-600 text-lg">45</span>
      </div>
      <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
        <span className="font-medium text-gray-700">Pending Reviews</span>
        <span className="font-bold text-amber-600 text-lg">3</span>
      </div>
    </div>
  </CardContent>
  <CardFooter className="px-6 py-4 border-t border-primary-200/50">
    <div className="flex justify-between items-center w-full">
      <span className="text-sm text-primary-600">Last updated: Today</span>
      <Button variant="outlined" size="sm" className="border-primary-300 text-primary-700">
        View All
      </Button>
    </div>
  </CardFooter>
</Card>

{/* Stats Card */}
<Card className="bg-gradient-to-r from-primary-50 to-primary-100">
  <CardContent className="p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
        <p className="text-3xl font-bold text-gray-900 mt-2">$24,580</p>
        <p className="text-sm text-primary-600 mt-1">↑ 12.5% from last month</p>
      </div>
      <div className="p-3 bg-primary-500/10 rounded-full">
        <span className="text-2xl">💰</span>
      </div>
    </div>
  </CardContent>
</Card>`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.advanced}>
            <CodeSnippet
              title="Advanced Card Customization"
              code={`{/* Custom Styled Card */}
<Card className="w-full p-0 bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200 rounded-2xl shadow-sm">
  <CardHeader className="px-6 pt-6 pb-4">
    <div className="flex justify-between items-start">
      <div>
        <CardTitle className="text-2xl font-bold text-primary-800">
          Project Dashboard
        </CardTitle>
        <CardDescription className="text-primary-600">
          Manage your projects and tasks efficiently
        </CardDescription>
      </div>
      <CardAction>
        <Button variant="filled" intent="primary" className="shadow-md">
          Create New
        </Button>
      </CardAction>
    </div>
  </CardHeader>
  <CardContent className="px-6 py-4">
    <div className="space-y-3">
      <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
        <span className="font-medium text-gray-700">Active Projects</span>
        <span className="font-bold text-blue-700 text-lg">12</span>
      </div>
      <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
        <span className="font-medium text-gray-700">Completed Tasks</span>
        <span className="font-bold text-green-600 text-lg">45</span>
      </div>
      <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
        <span className="font-medium text-gray-700">Pending Reviews</span>
        <span className="font-bold text-amber-600 text-lg">3</span>
      </div>
    </div>
  </CardContent>
  <CardFooter className="px-6 py-4 border-t border-blue-200/50">
    <div className="flex justify-between items-center w-full">
      <span className="text-sm text-primary-600">Last updated: Today</span>
      <Button variant="outlined" size="sm" className="border-primary-300 text-primary-700">
        View All
      </Button>
    </div>
  </CardFooter>
</Card>

{/* Stats Card */}
<Card className="bg-gradient-to-r from-primary-50 to-primary-100">
  <CardContent className="p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
        <p className="text-3xl font-bold text-gray-900 mt-2">$24,580</p>
        <p className="text-sm text-primary-600 mt-1">↑ 12.5% from last month</p>
      </div>
      <div className="p-3 bg-primary-500/10 rounded-full">
        <span className="text-2xl">💰</span>
      </div>
    </div>
  </CardContent>
</Card>`}
            />
          </TabPanel>
        </TabsContainer>
      </section>
    </div>
  );
};

export default CardExampleSection;
