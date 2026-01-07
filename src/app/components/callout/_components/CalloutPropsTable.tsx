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

const CalloutPropsTable = () => {
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
                intent
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
              <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                {`"default" | "success" | "warning" | "error" | "info"`}
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
              <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                "default"
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
              Visual intent of the callout. Affects background, border, and text
              colors
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
                {`"filled" | "outlined"`}
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
              <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                "filled"
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
              Visual style variant. Filled has solid background, outlined has
              border with transparent background
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
                {`"xs" | "sm" | "md" | "lg"`}
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
              <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                "md"
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
              Size of the callout. Affects padding, font size, and icon sizes
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
                React.ReactNode
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
              <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                -
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
              Icon or element to display at the start of the callout. Typically
              used for status icons
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
                React.ReactNode
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
              <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                -
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
              Icon, button, or element to display at the end of the callout.
              Often used for close buttons or actions
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
              Additional CSS classes for custom styling the callout container
            </TableDataCell>
          </TableRow>

          <TableRow>
            <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
              <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                children
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
              <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                React.ReactNode
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
              <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                -
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
              Content of the callout. Can be text, links, or any React elements
            </TableDataCell>
          </TableRow>

          {/* <TableRow>
            <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
              <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                onClick
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
              <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                {`() => void`}
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
              <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                -
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
              Click handler for the entire callout. Useful for making callouts
              dismissible
            </TableDataCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </div>
  );
};

export default CalloutPropsTable;
