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

const LoadingPropsTable = () => {
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
              {`Width of the loading spinner (e.g., "50px", "2rem", "100%")`}
            </TableDataCell>
          </TableRow>

          <TableRow>
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
              {`Height of the loading spinner (e.g., "50px", "2rem", "100%")`}
            </TableDataCell>
          </TableRow>

          <TableRow>
            <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
              <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                variant
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
              <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                {`"light" | "heavy"`}
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
              <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                -
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
              Visual variant of the loading spinner. Light has thinner strokes,
              heavy has thicker strokes
            </TableDataCell>
          </TableRow>

          <TableRow>
            <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
              <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                loaderColor
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
              Color of the loading spinner. Can be any CSS color value (hex,
              rgb, color name, etc.)
            </TableDataCell>
          </TableRow>

          <TableRow>
            <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
              <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                className
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
              Additional CSS classes for custom styling the loading container
            </TableDataCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default LoadingPropsTable;
