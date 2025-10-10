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

const NoticePropTable = () => {
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
                  open
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
                Controls whether the notice is visible
              </TableDataCell>
            </TableRow>

            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  setOpen
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                  function
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                  -
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                Function to update the open state
              </TableDataCell>
            </TableRow>

            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  variant
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                <Tooltip
                  position="top"
                  content={`success | warning | error | info | default`}
                >
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    {`"success" | "warning" | "error" | "info" | "default`}
                  </code>
                </Tooltip>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                  {`-`}
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                Visual style variant of the notice
              </TableDataCell>
            </TableRow>

            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  noticeTitle
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
                Title text displayed in the notice header
              </TableDataCell>
            </TableRow>

            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  position
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                <Tooltip position="top" content={`top | bottom`}>
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    {`"top" | "bottom"`}
                  </code>
                </Tooltip>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                  {`"top"`}
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                Position where the notice appears on the screen
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
                  ReactNode
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                  -
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                Content displayed in the notice body
              </TableDataCell>
            </TableRow>

            {/* <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  autoHideDuration
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                  number
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                  -
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                Duration in milliseconds before notice auto-dismisses
              </TableDataCell>
            </TableRow>

            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  onClose
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                  function
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                  -
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                Callback function when notice is closed
              </TableDataCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default NoticePropTable;
