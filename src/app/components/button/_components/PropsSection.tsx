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

const PropsSection = () => {
  return (
    <div className="overflow-auto shadow-sm rounded-xl my-4">
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
                variant
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
              <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                {` "filled" | "outlined"`}
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
              <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                {`                "filled"
`}{" "}
              </code>
            </TableDataCell>
            <TableDataCell className="text-gray-700">
              Button visual style selection
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
            <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
              <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                {`"sm"`}
              </code>
            </TableDataCell>
            <TableDataCell className="text-gray-700">
              Determines the size of button
            </TableDataCell>
          </TableRow>

          <TableRow>
            <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
              <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                intent (filled)
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
              <Tooltip
                position="bottom"
                content={`primary | success | warning | error | default | indigo | orange | pink | purple | violet | bluegray | bluelight | rose`}
              >
                <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono whitespace-nowrap">
                  primary | success | warning | …
                </code>
              </Tooltip>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
              <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                primary
              </code>
            </TableDataCell>
            <TableDataCell className="text-gray-700">
              Defines filled button color intents
            </TableDataCell>
          </TableRow>

          <TableRow>
            <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
              <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                intent (outlined)
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
              <Tooltip
                position="bottom"
                content={`primary-outlined | success-outlined | warning-outlined | error-outlined | default-outlined | indigo-outlined | orange-outlined | pink-outlined | purple-outlined | violet-outlined | bluegray-outlined | bluelight-outlined | rose-outlined`}
              >
                <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono whitespace-nowrap">
                  primary-outlined | success-outlined | …
                </code>
              </Tooltip>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
              <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                primary-outlined
              </code>
            </TableDataCell>
            <TableDataCell className="text-gray-700">
              Defines outlined button color intents
            </TableDataCell>
          </TableRow>

          <TableRow>
            <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
              <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                disabled
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
              <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                boolean
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
              <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                false
              </code>
            </TableDataCell>
            <TableDataCell className="text-gray-700">
              Disables user interaction with button
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
              <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                fullWidth
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
              <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                boolean
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
              <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                false
              </code>
            </TableDataCell>
            <TableDataCell className="text-gray-700">
              Makes button occupy full width
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
                IconType
              </code>
            </TableDataCell>
            <TableDataCell>-</TableDataCell>
            <TableDataCell className="text-gray-700">
              Icon displayed at button start
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
                IconType
              </code>
            </TableDataCell>
            <TableDataCell>-</TableDataCell>
            <TableDataCell className="text-gray-700">
              Icon displayed at button end
            </TableDataCell>
          </TableRow>

          <TableRow>
            <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
              <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                type
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
              <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                {`"submit" | "reset" | "button"`}
              </code>
            </TableDataCell>
            <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
              <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                {` "button"`}
              </code>
            </TableDataCell>
            <TableDataCell className="text-gray-700">
              Specifies HTML button element type
            </TableDataCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default PropsSection;
