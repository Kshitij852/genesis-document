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
} from "@atomos_tech/genesis";
import React, { useState } from "react";

import CodeSnippet from "../../button/_components/CodeSnippet";

const TypographyExampleSection = () => {
  const [nestedTabs, setNestedTabs] = useState({
    fontSizes: "react",
    fontWeights: "react",
    headings: "react",
    bodyText: "react",
  });

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };
  return (
    <div>
      {" "}
      <section className="space-y-5 py-5">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Font Sizes</h2>
          <p className="text-gray-600">
            A complete typographic scale with display and text sizes for every
            use case.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
          {/* Live preview */}
          <div>
            <h3 className="text-lg font-medium text-gray-700">Display Sizes</h3>
            <div className="space-y-2">
              <h1 className="text-display-2xl font-bold text-gray-900">
                Display 2xl
              </h1>
              <h2 className="text-display-xl font-bold text-gray-900">
                Display xl
              </h2>
              <h3 className="text-display-lg font-bold text-gray-900">
                Display lg
              </h3>
              <h4 className="text-display-md font-bold text-gray-900">
                Display md
              </h4>
              <h5 className="text-display-sm font-bold text-gray-900">
                Display sm
              </h5>
              <h6 className="text-display-xs font-bold text-gray-900">
                Display xs
              </h6>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">
              Text Sizes
            </h3>
            <div className="space-y-3">
              <p className="text-xl text-gray-700">Text xl</p>
              <p className="text-lg text-gray-700">Text lg</p>
              <p className="text-base text-gray-700">Text md</p>
              <p className="text-sm text-gray-700">Text sm</p>
              <p className="text-xs text-gray-700">Text xs</p>
            </div>
          </div>

          {/* Tabs only for the code snippet */}
          <TabsContainer value={nestedTabs.fontSizes}>
            <TabList
              onChange={(val) => handleNestedTabChanges("fontSizes", val)}
              ariaLabel="React and Next tabs"
              className="border-b border-gray-200 mb-4"
              box
            >
              <Tab
                label="React"
                value="react"
                selectedTabValue={nestedTabs.fontSizes}
                onChange={(val) => handleNestedTabChanges("fontSizes", val)}
              />
              <Tab
                label="Next"
                value="next"
                selectedTabValue={nestedTabs.fontSizes}
                onChange={(val) => handleNestedTabChanges("fontSizes", val)}
              />
            </TabList>

            <TabPanel value="react" currentValue={nestedTabs.fontSizes}>
              <CodeSnippet
                title="Typography - Font Size"
                code={`<h1 className="text-display-2xl font-bold text-gray-900">Display 2xl</h1>
<h1 className="text-display-xl font-bold text-gray-900">Display xl</h1>
<h1 className="text-display-lg font-bold text-gray-900">Display lg</h1>
<h1 className="text-display-md font-bold text-gray-900">Display md</h1>
<h1 className="text-display-sm font-bold text-gray-900">Display sm</h1>
<h1 className="text-display-xs font-bold text-gray-900">Display xs</h1>
<p className="text-xl text-gray-700">Text xl</p>
<p className="text-lg text-gray-700">Text lg</p>
<p className="text-base text-gray-700">Text md</p>
<p className="text-sm text-gray-700">Text sm</p>
<p className="text-xs text-gray-700">Text xs</p>`}
              />
            </TabPanel>

            <TabPanel value="next" currentValue={nestedTabs.fontSizes}>
              <CodeSnippet
                title="Typography - Font Size"
                code={`<h1 className="text-display-2xl font-bold text-gray-900">Display 2xl</h1>
<h1 className="text-display-xl font-bold text-gray-900">Display xl</h1>
<h1 className="text-display-lg font-bold text-gray-900">Display lg</h1>
<h1 className="text-display-md font-bold text-gray-900">Display md</h1>
<h1 className="text-display-sm font-bold text-gray-900">Display sm</h1>
<h1 className="text-display-xs font-bold text-gray-900">Display xs</h1>
<p className="text-xl text-gray-700">Text xl</p>
<p className="text-lg text-gray-700">Text lg</p>
<p className="text-base text-gray-700">Text md</p>
<p className="text-sm text-gray-700">Text sm</p>
<p className="text-xs text-gray-700">Text xs</p>`}
              />
            </TabPanel>
          </TabsContainer>
        </div>
      </section>
      {/* Font Weights Section */}
      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Font Weights</h2>
          <p className="text-gray-600">
            Four distinct font weights to create visual hierarchy and emphasis.
          </p>
        </div>

        {/* Single card containing both preview and tabs */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          {/* Live preview section */}
          <div className="space-y-4 mb-6">
            <p className="text-xl font-normal text-gray-700">
              Regular - Font Weight 400
            </p>
            <p className="text-xl font-medium text-gray-700">
              Medium - Font Weight 500
            </p>
            <p className="text-xl font-semibold text-gray-700">
              Semi Bold - Font Weight 600
            </p>
            <p className="text-xl font-bold text-gray-700">
              Bold - Font Weight 700
            </p>
          </div>

          {/* Tabs for code snippet - inside the same card */}
          <TabsContainer value={nestedTabs.fontWeights}>
            <TabList
              onChange={(val) => handleNestedTabChanges("fontWeights", val)}
              ariaLabel="React and Next tabs"
              className="border-b border-gray-200 mb-4"
              box
            >
              <Tab
                label="React"
                value="react"
                selectedTabValue={nestedTabs.fontWeights}
                onChange={(val) => handleNestedTabChanges("fontWeights", val)}
              />
              <Tab
                label="Next"
                value="next"
                selectedTabValue={nestedTabs.fontWeights}
                onChange={(val) => handleNestedTabChanges("fontWeights", val)}
              />
            </TabList>

            <TabPanel value="react" currentValue={nestedTabs.fontWeights}>
              <CodeSnippet
                title="Typography - Font Weight"
                code={`<h1 className="text-xl font-normal text-gray-700">Regular</h1>
<h1 className="text-xl font-medium text-gray-700">Medium</h1>
<h1 className="text-xl font-semibold text-gray-700">Semi Bold</h1>
<h1 className="text-xl font-bold text-gray-700">Bold</h1>`}
              />
            </TabPanel>

            <TabPanel value="next" currentValue={nestedTabs.fontWeights}>
              <CodeSnippet
                title="Typography - Font Weight"
                code={`<h1 className="text-xl font-normal text-gray-700">Regular</h1>
<h1 className="text-xl font-medium text-gray-700">Medium</h1>
<h1 className="text-xl font-semibold text-gray-700">Semi Bold</h1>
<h1 className="text-xl font-bold text-gray-700">Bold</h1>`}
              />
            </TabPanel>
          </TabsContainer>
        </div>
      </section>
      {/* Usage Examples Section */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-gray-800 pt-4">
          Usage Examples
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 items-start">
          {/* Headings Example */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Headings</h3>
            <div className="space-y-3 mb-6">
              <h1 className="text-3xl font-bold text-gray-900">Page Title</h1>
              <h2 className="text-2xl font-semibold text-gray-800">
                Section Heading
              </h2>
              <h3 className="text-xl font-medium text-gray-700">Subsection</h3>
              <h4 className="text-lg font-normal text-gray-600">Card Title</h4>
            </div>

            {/* Nested Tabs for Headings */}
            <TabsContainer value={nestedTabs.headings}>
              <TabList
                onChange={(val) => handleNestedTabChanges("headings", val)}
                ariaLabel="React and Next tabs for headings"
                className="border-b border-gray-200 mb-4"
                box
              >
                <Tab
                  label="React"
                  value="react"
                  selectedTabValue={nestedTabs.headings}
                  onChange={(val) => handleNestedTabChanges("headings", val)}
                />
                <Tab
                  label="Next"
                  value="next"
                  selectedTabValue={nestedTabs.headings}
                  onChange={(val) => handleNestedTabChanges("headings", val)}
                />
              </TabList>

              <TabPanel value="react" currentValue={nestedTabs.headings}>
                <CodeSnippet
                  title="Headings Example"
                  code={`<h1 className="text-3xl font-bold text-gray-900">Page Title</h1>
<h2 className="text-2xl font-semibold text-gray-800">Section Heading</h2>
<h3 className="text-xl font-medium text-gray-700">Subsection</h3>
<h4 className="text-lg font-normal text-gray-600">Card Title</h4>`}
                />
              </TabPanel>

              <TabPanel value="next" currentValue={nestedTabs.headings}>
                <CodeSnippet
                  title="Headings Example"
                  code={`<h1 className="text-3xl font-bold text-gray-900">Page Title</h1>
<h2 className="text-2xl font-semibold text-gray-800">Section Heading</h2>
<h3 className="text-xl font-medium text-gray-700">Subsection</h3>
<h4 className="text-lg font-normal text-gray-600">Card Title</h4>`}
                />
              </TabPanel>
            </TabsContainer>
          </div>

          {/* Body Text Example */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Body Text
            </h3>
            <div className="space-y-3 mb-6">
              <p className="text-md text-gray-700 font-medium">
                This is regular body text with comfortable line height for
                optimal readability.
              </p>
              <p className="text-sm text-gray-600">
                This is smaller supporting text for captions, labels, and
                secondary information.
              </p>
              <p className="text-xs text-gray-500">
                This is the smallest text size, perfect for metadata and fine
                print.
              </p>
            </div>

            {/* Nested Tabs for Body Text */}
            <TabsContainer value={nestedTabs.bodyText}>
              <TabList
                onChange={(val) => handleNestedTabChanges("bodyText", val)}
                ariaLabel="React and Next tabs for body text"
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
                  title="Body Text Example"
                  code={`<p className="text-md font-medium">This is regular body text with comfortable line height.</p>
<p className="text-sm">This is smaller supporting text for captions, labels, and secondary info.</p>
<p className="text-xs text-gray-500">This is the smallest text size, perfect for metadata and fine print.</p>`}
                />
              </TabPanel>

              <TabPanel value="next" currentValue={nestedTabs.bodyText}>
                <CodeSnippet
                  title="Body Text Example"
                  code={`<p className="text-md font-medium">This is regular body text with comfortable line height.</p>
<p className="text-sm">This is smaller supporting text for captions, labels, and secondary info.</p>
<p className="text-xs text-gray-500">This is the smallest text size, perfect for metadata and fine print.</p>`}
                />
              </TabPanel>
            </TabsContainer>
          </div>
        </div>
      </section>
      {/* Scale Reference Table */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-gray-800 pt-4">
          Scale Reference
        </h2>

        <div className="overflow-auto shadow-sm rounded-xl">
          <Table>
            <TableHead>
              <TableRow className="text-left">
                <TableHeadCell>Size</TableHeadCell>
                <TableHeadCell>Class</TableHeadCell>
                <TableHeadCell>Use Case</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 pt-8 text-sm">
                  <span className="text-display-2xl font-bold">Aa</span>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    text-display-2xl
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Hero sections, billboard headlines
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm pt-6">
                  <span className="text-display-xl font-bold">Aa</span>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    text-display-xl
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Landing hero titles, major headings
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm pt-6">
                  <span className="text-display-lg font-bold">Aa</span>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    text-display-lg
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Page titles, primary section headers
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm pt-6">
                  <span className="text-display-md font-bold">Aa</span>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    text-display-md
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Section headings, feature titles
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm pt-4">
                  <span className="text-display-sm font-bold">Aa</span>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    text-display-sm
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Subheadings, card titles
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <span className="text-display-xs font-bold">Aa</span>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    text-display-xs
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Smaller subheads, emphasized labels
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <span className="text-text-xl font-bold">Aa</span>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    text-xl
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Lead paragraphs, intro copy
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <span className="text-text-lg font-bold">Aa</span>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    text-lg
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Large body text, important content
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <span className="text-text-md font-bold">Aa</span>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    text-md
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Base body text, paragraphs, UI copy
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <span className="text-text-sm font-bold">Aa</span>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    text-sm
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Small text, captions, form labels
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <span className="text-text-xs font-bold">Aa</span>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    text-xs
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Fine print, metadata, legal notes
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
