import {
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Tooltip,
} from "@atomos_tech/genesis";
import React from "react";

const ChipTableProp = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Props</h2>

      <div className="overflow-auto shadow-sm rounded-xl">
        <Table>
          <TableHead>
            <TableRow className="text-left">
              <TableHeadCell>Prop</TableHeadCell>
              <TableHeadCell>Type</TableHeadCell>
              <TableHeadCell>Default</TableHeadCell>
              <TableHeadCell>Description</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  intent
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                <Tooltip
                  position="bottom"
                  content={`primary | success | error | warning | default | indigo | orange | pink | purple | violet | bluegray | bluelight | rose`}
                >
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono whitespace-nowrap">
                    {`"primary" | "success" | "error" | …`}
                  </code>
                </Tooltip>
              </TableDataCell>

              <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                  {`"primary"`}
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                Defines the color scheme and visual style of the chip
              </TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  size
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                  {`"sm" | "md" | "lg"`}
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                  {`"md"`}
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                Controls the overall dimensions and padding of the chip
              </TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  dot
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                  boolean
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                  false
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                When true, displays a colored dot indicator before the chip
                content
              </TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  startIcon
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                  ReactNode
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                  -
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                Icon element to display at the start (left) of the chip content
              </TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  endIcon
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                  ReactNode
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                  -
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                Icon element to display at the end (right) of the chip content
              </TableDataCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default ChipTableProp;
