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

const DrawerPropsTable = () => {
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
                isOpen
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
              Controls whether the drawer is visible or hidden. Must be managed
              with state
            </TableDataCell>
          </TableRow>

          <TableRow>
            <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
              <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                setIsOpen
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
              <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                {`(isOpen: boolean) => void`}
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
              <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                -
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
              Callback function to update the isOpen state. Typically your state
              setter function
            </TableDataCell>
          </TableRow>

          <TableRow>
            <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
              <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                position
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
              <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                {`"top" | "right" | "bottom" | "left"`}
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
              <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                "right"
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
              Edge from which the drawer slides in. Top and bottom for
              horizontal drawers, left and right for vertical
            </TableDataCell>
          </TableRow>

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
              Width of the drawer (for left/right positions). Accepts Tailwind
              classes like "w-96", "max-w-md", etc.
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
              Height of the drawer (for top/bottom positions). Accepts Tailwind
              classes like "h-96", "max-h-[80vh]", etc.
            </TableDataCell>
          </TableRow>

          <TableRow>
            <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
              <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                closeOnOutsideClick
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
              <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                boolean
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
              <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                true
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
              Whether clicking outside the drawer (on the backdrop) should close
              it
            </TableDataCell>
          </TableRow>

          {/* <TableRow>
            <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
              <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                showBackdrop
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
              <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                boolean
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
              <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                true
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
              Whether to show a semi-transparent backdrop behind the drawer
            </TableDataCell>
          </TableRow>

          <TableRow>
            <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
              <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                backdropOpacity
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
              <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                {`"light" | "medium" | "dark"`}
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
              <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                "medium"
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
              Opacity level of the backdrop. Light: 25%, Medium: 50%, Dark: 75%
            </TableDataCell>
          </TableRow>

          <TableRow>
            <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
              <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                disableScroll
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
              <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                boolean
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
              <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                true
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
              Whether to disable body scroll when the drawer is open
            </TableDataCell>
          </TableRow> */}

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
              Additional CSS classes for custom styling the drawer container
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
              Content to render inside the drawer. Can be any React elements
            </TableDataCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default DrawerPropsTable;
