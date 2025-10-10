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

const AvatarProps = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Avatar Props</h2>

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
                  type
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                <Tooltip position="top" content={`"text" | "icon" | "image"`}>
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    {`"text" | "icon" | "image"`}
                  </code>
                </Tooltip>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                  {`"text"`}
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                Type of avatar content
              </TableDataCell>
            </TableRow>

            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  size
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                <Tooltip position="top" content={`"sm" | "md" | "lg"`}>
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    {`"sm" | "md" | "lg"`}
                  </code>
                </Tooltip>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                  {`"md"`}
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                Size of the avatar
              </TableDataCell>
            </TableRow>

            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  text
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
                Text content for text avatars
              </TableDataCell>
            </TableRow>

            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  icon
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
                Icon component for icon avatars
              </TableDataCell>
            </TableRow>

            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  src
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
                Image source URL for image avatars
              </TableDataCell>
            </TableRow>

            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  alt
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
                Alt text for image avatars
              </TableDataCell>
            </TableRow>

            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  rounded
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
                Whether the avatar should be circular
              </TableDataCell>
            </TableRow>

            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  border
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
                Whether to show a border around the avatar
              </TableDataCell>
            </TableRow>

            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  borderWidth
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                  string
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                  {`-`}
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                {`Width of the border (e.g., "2px", "0.5rem")`}
              </TableDataCell>
            </TableRow>

            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  borderColor
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
                Color of the border (CSS color value)
              </TableDataCell>
            </TableRow>

            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  statusIcon
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
                Status indicator icon component
              </TableDataCell>
            </TableRow>

            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  statusPosition
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                <Tooltip
                  position="top"
                  content={`"top-left" | "top-right" | "bottom-left" | "bottom-right"`}
                >
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    {`"top-left" | "top-right" | "bottom-left" | "bottom-right"`}
                  </code>
                </Tooltip>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                  {`"bottom-right"`}
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                Position of the status indicator
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
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                  false
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                Whether the avatar is disabled
              </TableDataCell>
            </TableRow>

            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  onClick
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
                Click handler function
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
                Additional CSS classes
              </TableDataCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* AvatarGroup Props Table */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          AvatarGroup Props
        </h3>
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
                    avatars
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    AvatarProps[]
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    -
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Array of avatar objects with their individual props
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    size
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <Tooltip position="top" content={`"sm" | "md" | "lg"`}>
                    <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                      {`"sm" | "md" | "lg"`}
                    </code>
                  </Tooltip>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    {`"md"`}
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Size of all avatars in the group
                </TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    max
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
                  Maximum number of avatars to show before showing +X count
                </TableDataCell>
              </TableRow>

              {/* <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    spacing
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    string
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    {`"-0.5rem"`}
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Negative margin between overlapping avatars
                </TableDataCell>
              </TableRow> */}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default AvatarProps;
