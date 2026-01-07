// "use client";
// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableRow,
//   TableHead,
//   TableHeadCell,
//   TableDataCell,
// } from "@atomos_tech/genesis";

// const MenuItemsPropsTable = () => {
//   return (
//     <div className="overflow-auto shadow-sm rounded-xl border border-gray-200">
//       <Table>
//         <TableHead>
//           <TableRow className="text-left bg-gray-50">
//             <TableHeadCell className="text-sm font-semibold text-gray-700">
//               Component
//             </TableHeadCell>
//             <TableHeadCell className="text-sm font-semibold text-gray-700">
//               Prop
//             </TableHeadCell>
//             <TableHeadCell className="text-sm font-semibold text-gray-700">
//               Type
//             </TableHeadCell>
//             <TableHeadCell className="text-sm font-semibold text-gray-700">
//               Default
//             </TableHeadCell>
//             <TableHeadCell className="text-sm font-semibold text-gray-700">
//               Description
//             </TableHeadCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {/* MenuDropdown Props */}
//           <TableRow>
//             <TableDataCell
//               className="py-4 px-6 font-medium text-gray-900 text-sm"
//               rowSpan={3}
//             >
//               <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                 MenuDropdown
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//               <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                 trigger
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//               <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                 ReactNode
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//               <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                 -
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//               The element that triggers the dropdown menu (e.g., Button,
//               ListItem, custom component)
//             </TableDataCell>
//           </TableRow>

//           <TableRow>
//             <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//               <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                 children
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//               <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                 ReactNode
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//               <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                 -
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//               Menu items and content to display in the dropdown (MenuItem,
//               MenuSubItem, Links)
//             </TableDataCell>
//           </TableRow>

//           <TableRow>
//             <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//               <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                 className
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//               <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                 string
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//               <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                 -
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//               Additional CSS classes for custom styling the dropdown
//             </TableDataCell>
//           </TableRow>

//           {/* ListItem Props (used in trigger) */}
//           <TableRow>
//             <TableDataCell
//               className="py-4 px-6 font-medium text-gray-900 text-sm"
//               rowSpan={4}
//             >
//               <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                 ListItem
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//               <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                 as
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//               <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                 string
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//               <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                 -{" "}
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//               {`HTML element or component to render (e.g., "button")`}
//             </TableDataCell>
//           </TableRow>

//           <TableRow>
//             <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//               <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                 title
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//               <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                 string
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//               <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                 -
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//               The main text content of the list item
//             </TableDataCell>
//           </TableRow>

//           <TableRow>
//             <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//               <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                 icon
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//               <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                 ReactNode
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//               <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                 -
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//               Icon element to display alongside the title
//             </TableDataCell>
//           </TableRow>

//           <TableRow>
//             <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//               <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                 className
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//               <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                 string
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//               <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                 -
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//               Additional CSS classes for custom styling the list item
//             </TableDataCell>
//           </TableRow>

//           {/* MenuItem Props */}
//           <TableRow>
//             <TableDataCell
//               className="py-4 px-6 font-medium text-gray-900 text-sm"
//               rowSpan={2}
//             >
//               <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                 MenuItem
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//               <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                 content
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//               <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                 ReactNode
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//               <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                 -
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//               Content to display for the menu item (label, icon, etc.)
//             </TableDataCell>
//           </TableRow>

//           <TableRow>
//             <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//               <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                 children
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//               <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                 ReactNode
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//               <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                 -
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//               Nested menu items for creating sub-menus
//             </TableDataCell>
//           </TableRow>

//           {/* MenuSubItem Props */}
//           <TableRow>
//             <TableDataCell
//               className="py-4 px-6 font-medium text-gray-900 text-sm"
//               rowSpan={4}
//             >
//               <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                 MenuSubItem
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//               <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                 label
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//               <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                 string
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//               <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                 -
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//               Text label for the menu item
//             </TableDataCell>
//           </TableRow>

//           <TableRow>
//             <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//               <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                 onClick
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//               <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                 () =&gt; void
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//               <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                 -
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//               Callback function when the menu item is clicked
//             </TableDataCell>
//           </TableRow>

//           <TableRow>
//             <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//               <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                 className
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//               <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                 string
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//               <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                 -
//               </code>
//             </TableDataCell>
//             <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//               Additional CSS classes for custom styling the menu item
//             </TableDataCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default MenuItemsPropsTable;
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

const MenuItemsPropsTable = () => {
  return (
    <div className="space-y-8">
      {/* DropdownMenu Props */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium text-gray-700">
          DropdownMenu Props
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
                  Must contain DropdownMenuTrigger and DropdownMenuContent
                  components
                </TableDataCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* DropdownMenuTrigger Props */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium text-gray-700">
          DropdownMenuTrigger Props
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
                  The button or element that triggers the dropdown menu
                </TableDataCell>
              </TableRow>
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    asChild
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
                  Merge props onto the child element instead of rendering a
                  button
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
                  Additional CSS classes for custom styling the trigger element
                </TableDataCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* DropdownMenuContent Props */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium text-gray-700">
          DropdownMenuContent Props
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
                    align
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    {`"start" | "center" | "end" | "top" | "bottom" | "left" | "right"`}
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    "start"
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Alignment of the menu relative to the trigger. Use
                  top/bottom/left/right for positioning
                </TableDataCell>
              </TableRow>
              <TableRow>
                <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                    sideOffset
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                    number
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                  <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                    4
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Distance in pixels from the trigger element
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
                  Additional CSS classes for custom styling the menu content
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
                    "auto"
                  </code>
                </TableDataCell>
                <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                  Width of the menu. Accepts CSS values like "w-56", "w-64",
                  "min-w-200px", etc.
                </TableDataCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* DropdownMenuItem Props */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium text-gray-700">
          DropdownMenuItem Props
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
                  Click handler for the menu item
                </TableDataCell>
              </TableRow>
              {/* <TableRow>
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
                  Whether the menu item is disabled and non-interactive
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
                  Additional CSS classes for custom styling the menu item
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
                  Content of the menu item (text, icons, etc.)
                </TableDataCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Other Subcomponent Props */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-700">
          Other Subcomponent Props
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">
              DropdownMenuLabel
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                <code className="text-xs">className: string</code> - Custom
                styling
              </li>
              <li>
                <code className="text-xs">children: React.ReactNode</code> -
                Label text
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">
              DropdownMenuSeparator
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                <code className="text-xs">className: string</code> - Custom
                styling
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">DropdownMenuSub</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                <code className="text-xs">children: React.ReactNode</code> -
                Must contain SubTrigger and SubContent
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">
              DropdownMenuSubTrigger
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                <code className="text-xs">className: string</code> - Custom
                styling
              </li>
              <li>
                <code className="text-xs">children: React.ReactNode</code> -
                Trigger content
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">
              DropdownMenuSubContent
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                <code className="text-xs">className: string</code> - Custom
                styling
              </li>
              <li>
                <code className="text-xs">align: string</code> - Submenu
                alignment
              </li>
              <li>
                <code className="text-xs">sideOffset: number</code> - Distance
                from trigger
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemsPropsTable;
