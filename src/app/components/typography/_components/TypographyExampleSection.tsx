"use client";
import {
  Tab,
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
  TabList,
  TabPanel,
  TabsContainer,
  Typography,
} from "@atomos_tech/genesis";
import React, { useState } from "react";

import CodeSnippet from "../../button/_components/CodeSnippet";

const TypographyExampleSection = () => {
  const [nestedTabs, setNestedTabs] = useState({
    headlines: "react",
    bodyText: "react",
    intents: "react",
    scale: "react",
  });

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div className="space-y-8">
      {/* Headlines Section */}
      <section className="space-y-5">
        <div>
          <Typography variant="h5" className="text-gray-800 mt-3">
            Headlines
          </Typography>
          <Typography variant="b3" className="text-gray-600">
            Six headline variants for creating clear visual hierarchy.
          </Typography>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          {/* Live preview */}
          <div className="space-y-4 mb-6">
            <Typography variant="h1">H1 Headline</Typography>
            <Typography variant="h2">H2 Headline</Typography>
            <Typography variant="h3">H3 Headline</Typography>
            <Typography variant="h4">H4 Headline</Typography>
            <Typography variant="h5">H5 Headline</Typography>
            <Typography variant="h6">H6 Headline</Typography>
          </div>

          {/* Code Tabs */}
          <TabsContainer value={nestedTabs.headlines}>
            <TabList
              onChange={(val) => handleNestedTabChanges("headlines", val)}
              ariaLabel="React and Next tabs"
              className="border-b border-gray-200 mb-4"
              box
            >
              <Tab
                label="React"
                value="react"
                selectedTabValue={nestedTabs.headlines}
                onChange={(val) => handleNestedTabChanges("headlines", val)}
              />
              <Tab
                label="Next"
                value="next"
                selectedTabValue={nestedTabs.headlines}
                onChange={(val) => handleNestedTabChanges("headlines", val)}
              />
            </TabList>

            <TabPanel value="react" currentValue={nestedTabs.headlines}>
              <CodeSnippet
                title="Headlines"
                code={`import { Typography } from "@atomos_tech/genesis";

<Typography variant="h1">H1 Headline</Typography>
<Typography variant="h2">H2 Headline</Typography>
<Typography variant="h3">H3 Headline</Typography>
<Typography variant="h4">H4 Headline</Typography>
<Typography variant="h5">H5 Headline</Typography>
<Typography variant="h6">H6 Headline</Typography>`}
              />
            </TabPanel>

            <TabPanel value="next" currentValue={nestedTabs.headlines}>
              <CodeSnippet
                title="Headlines"
                code={`"use client";
import { Typography } from "@atomos_tech/genesis";

<Typography variant="h1">H1 Headline</Typography>
<Typography variant="h2">H2 Headline</Typography>
<Typography variant="h3">H3 Headline</Typography>
<Typography variant="h4">H4 Headline</Typography>
<Typography variant="h5">H5 Headline</Typography>
<Typography variant="h6">H6 Headline</Typography>`}
              />
            </TabPanel>
          </TabsContainer>
        </div>
      </section>

      {/* Body Text Section */}
      <section className="space-y-5">
        <div>
          <Typography variant="h5" className="text-gray-800">
            Body Text
          </Typography>
          <Typography variant="b3" className="text-gray-600">
            Five body text variants with different sizes for various content
            needs.
          </Typography>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          {/* Live preview */}
          <div className="space-y-4 mb-6">
            <Typography variant="b1">
              Body 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Typography variant="b2">
              Body 2 - Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Typography variant="b3">
              Body 3 - Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
            <Typography variant="b4">
              Body 4 - Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Typography variant="b5">
              Body 5 - Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium.
            </Typography>
          </div>

          {/* Code Tabs */}
          <TabsContainer value={nestedTabs.bodyText}>
            <TabList
              onChange={(val) => handleNestedTabChanges("bodyText", val)}
              ariaLabel="React and Next tabs"
              className="border-b border-gray-200 mb-4"
              box
            >
              <Tab
                label="React"
                value="react"
                selectedTabValue={nestedTabs.bodyText}
                onChange={(val) => handleNestedTabChanges("bodyText", val)}
              />
              <Tab
                label="Next"
                value="next"
                selectedTabValue={nestedTabs.bodyText}
                onChange={(val) => handleNestedTabChanges("bodyText", val)}
              />
            </TabList>

            <TabPanel value="react" currentValue={nestedTabs.bodyText}>
              <CodeSnippet
                title="Body Text"
                code={`import { Typography } from "@atomos_tech/genesis";

<Typography variant="b1">
  Body 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</Typography>
<Typography variant="b2">
  Body 2 - Ut enim ad minim veniam, quis nostrud exercitation ullamco.
</Typography>
<Typography variant="b3">
  Body 3 - Duis aute irure dolor in reprehenderit in voluptate velit.
</Typography>
<Typography variant="b4">
  Body 4 - Excepteur sint occaecat cupidatat non proident.
</Typography>
<Typography variant="b5">
  Body 5 - Sed ut perspiciatis unde omnis iste natus error.
</Typography>`}
              />
            </TabPanel>

            <TabPanel value="next" currentValue={nestedTabs.bodyText}>
              <CodeSnippet
                title="Body Text"
                code={`"use client";
import { Typography } from "@atomos_tech/genesis";

<Typography variant="b1">
  Body 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</Typography>
<Typography variant="b2">
  Body 2 - Ut enim ad minim veniam, quis nostrud exercitation ullamco.
</Typography>
<Typography variant="b3">
  Body 3 - Duis aute irure dolor in reprehenderit in voluptate velit.
</Typography>
<Typography variant="b4">
  Body 4 - Excepteur sint occaecat cupidatat non proident.
</Typography>
<Typography variant="b5">
  Body 5 - Sed ut perspiciatis unde omnis iste natus error.
</Typography>`}
              />
            </TabPanel>
          </TabsContainer>
        </div>
      </section>

      {/* Intents Section */}
      <section className="space-y-5">
        <div>
          <Typography variant="h5" className="text-gray-800">
            Intents
          </Typography>
          <Typography variant="b3" className="text-gray-600">
            Body text variants with different color intents for semantic
            meaning.
          </Typography>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          {/* Live preview */}
          <div className="space-y-3 mb-6">
            <Typography variant="b1" intent="primary">
              Body 1 - Primary
            </Typography>
            <Typography variant="b2" intent="success">
              Body 2 - Success
            </Typography>
            <Typography variant="b3" intent="error">
              Body 3 - Error
            </Typography>
            <Typography variant="b4" intent="warning">
              Body 4 - Warning
            </Typography>
            <Typography variant="b5" intent="default">
              Body 5 - Default
            </Typography>
          </div>

          {/* Code Tabs */}
          <TabsContainer value={nestedTabs.intents}>
            <TabList
              onChange={(val) => handleNestedTabChanges("intents", val)}
              ariaLabel="React and Next tabs"
              className="border-b border-gray-200 mb-4"
              box
            >
              <Tab
                label="React"
                value="react"
                selectedTabValue={nestedTabs.intents}
                onChange={(val) => handleNestedTabChanges("intents", val)}
              />
              <Tab
                label="Next"
                value="next"
                selectedTabValue={nestedTabs.intents}
                onChange={(val) => handleNestedTabChanges("intents", val)}
              />
            </TabList>

            <TabPanel value="react" currentValue={nestedTabs.intents}>
              <CodeSnippet
                title="Typography Intents"
                code={`import { Typography } from "@atomos_tech/genesis";

<Typography variant="b1" intent="primary">
  Body 1 - Primary
</Typography>
<Typography variant="b2" intent="success">
  Body 2 - Success
</Typography>
<Typography variant="b3" intent="error">
  Body 3 - Error
</Typography>
<Typography variant="b4" intent="warning">
  Body 4 - Warning
</Typography>
<Typography variant="b5" intent="default">
  Body 5 - Default
</Typography>`}
              />
            </TabPanel>

            <TabPanel value="next" currentValue={nestedTabs.intents}>
              <CodeSnippet
                title="Typography Intents"
                code={`"use client";
import { Typography } from "@atomos_tech/genesis";

<Typography variant="b1" intent="primary">
  Body 1 - Primary
</Typography>
<Typography variant="b2" intent="success">
  Body 2 - Success
</Typography>
<Typography variant="b3" intent="error">
  Body 3 - Error
</Typography>
<Typography variant="b4" intent="warning">
  Body 4 - Warning
</Typography>
<Typography variant="b5" intent="default">
  Body 5 - Default
</Typography>`}
              />
            </TabPanel>
          </TabsContainer>
        </div>
      </section>

      {/* Scale Reference Table */}
      <section className="space-y-5">
        <div>
          <Typography variant="h5" className="text-gray-800">
            Scale Reference
          </Typography>
          <Typography variant="b3" className="text-gray-600">
            Complete reference for all typography variants and their use cases.
          </Typography>
        </div>

        <div className="overflow-auto shadow-sm rounded-xl">
          <Table>
            <TableHead>
              <TableRow className="text-left">
                <TableHeadCell>Variant</TableHeadCell>
                <TableHeadCell>Class / Component</TableHeadCell>
                <TableHeadCell>Use Case</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 pt-8 text-sm">
                  <Typography variant="h1">H1</Typography>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    variant="h1"
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Main page titles, hero sections
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm pt-6">
                  <Typography variant="h2">H2</Typography>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    variant="h2"
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Major section headings
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm pt-6">
                  <Typography variant="h3">H3</Typography>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    variant="h3"
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Subsection headings
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm pt-6">
                  <Typography variant="h4">H4</Typography>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    variant="h4"
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Card titles, smaller headings
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm pt-4">
                  <Typography variant="h5">H5</Typography>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    variant="h5"
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Widget titles, small headings
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <Typography variant="h6">H6</Typography>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    variant="h6"
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Smallest headings, labels
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <Typography variant="b1">Body 1</Typography>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    variant="b1"
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Large body text, lead paragraphs
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <Typography variant="b2">Body 2</Typography>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    variant="b2"
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Standard body text, paragraphs
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <Typography variant="b3">Body 3</Typography>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    variant="b3"
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Smaller body text, captions
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <Typography variant="b4">Body 4</Typography>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    variant="b4"
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Small text, form labels, notes
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <Typography variant="b5">Body 5</Typography>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    variant="b5"
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Extra small text, metadata, legal
                </TableDataCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
};

export default TypographyExampleSection;
