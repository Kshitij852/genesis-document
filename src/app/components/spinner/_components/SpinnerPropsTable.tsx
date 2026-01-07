"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableHeadCell,
  TableDataCell,
} from "@atomos_tech/genesis";

const SpinnerPropsTable = () => {
  return (
    <div className="overflow-auto shadow-sm rounded-xl border border-gray-200">
      <Table>
        <TableHead>
          <TableRow className="text-left bg-gray-50">
            <TableHeadCell className="text-sm font-semibold text-gray-700">
              Prop
            </TableHeadCell>
            <TableHeadCell className="text-sm font-semibold text-gray-700">
              Type
            </TableHeadCell>
            <TableHeadCell className="text-sm font-semibold text-gray-700">
              Default
            </TableHeadCell>
            <TableHeadCell className="text-sm font-semibold text-gray-700">
              Description
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
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
                "md"
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
              Predefined size of the spinner. sm: 16px, md: 24px, lg: 32px
            </TableDataCell>
          </TableRow>

          {/* <TableRow>
            <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
              <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                width
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
              <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                string
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
              <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                -
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
              Custom width for the spinner (overrides size prop). Accepts CSS
              values like "50px", "2rem", "100%"
            </TableDataCell>
          </TableRow> */}

          {/* <TableRow>
            <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
              <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                height
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
              <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                string
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
              <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                -
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
              Custom height for the spinner (overrides size prop). Accepts CSS
              values like "50px", "2rem", "100%"
            </TableDataCell>
          </TableRow> */}

          <TableRow>
            <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
              <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                color
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
              <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                string
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
              <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                "currentColor"
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
              Color of the spinner. Accepts CSS color values (hex, rgb, named
              colors). Defaults to current text color
            </TableDataCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default SpinnerPropsTable;
