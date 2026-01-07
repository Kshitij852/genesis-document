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

const TreeViewPropsTable = () => {
  return (
    <div className="space-y-8">
      {/* TreeView Props */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium text-gray-700">TreeView Props</h3>
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
                    aria-label
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
                  Accessibility label for the tree view. Required for
                  accessibility.
                </TableDataCell>
              </TableRow>
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    allowMultiple
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
                  Whether multiple tree items can be expanded at once. Set to
                  false for accordion behavior.
                </TableDataCell>
              </TableRow>
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    expandTopLevelByDefault
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
                  Whether top-level items should be expanded by default when the
                  tree loads.
                </TableDataCell>
              </TableRow>
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    defaultExpandedIds
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    string[]
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    []
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Array of item IDs that should be expanded by default when the
                  tree loads.
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
                  Additional CSS classes for custom styling the tree view
                  container.
                </TableDataCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* TreeView.Item Props */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium text-gray-700">
          TreeView.Item Props
        </h3>
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
                    id
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
                  Unique identifier for the tree item. Required for selection
                  and expansion tracking.
                </TableDataCell>
              </TableRow>
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    selected
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
                  Whether the item is currently selected. Managed externally via
                  state.
                </TableDataCell>
              </TableRow>
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    onSelect
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    {`(id: string) => void`}
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    -
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Callback function called when the item is selected. Typically
                  updates selection state.
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
                  Additional CSS classes for custom styling the tree item.
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
                  Content of the tree item. Can be text, icons, or any React
                  elements.
                </TableDataCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Other Subcomponent Props */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-700">
          Subcomponent Props
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">TreeView.SubTree</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                <code className="text-xs">children: React.ReactNode</code> -
                Child items
              </li>
              <li>
                <code className="text-xs">className: string</code> - Custom
                styling
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">
              TreeView.LeadingVisual
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                <code className="text-xs">children: React.ReactNode</code> -
                Icon or visual element
              </li>
              <li>
                <code className="text-xs">className: string</code> - Custom
                styling
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">
              TreeView.TrailingVisual
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                <code className="text-xs">children: React.ReactNode</code> -
                Icon or visual element
              </li>
              <li>
                <code className="text-xs">label: string</code> - Accessibility
                label
              </li>
              <li>
                <code className="text-xs">className: string</code> - Custom
                styling
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeViewPropsTable;
