// import {
//   Table,
//   TableBody,
//   TableDataCell,
//   TableHead,
//   TableHeadCell,
//   TableRow,
// } from "@atomos_tech/genesis";
// import React from "react";

// const InputPropTable = () => {
//   return (
//     <section className="space-y-6">
//       <h2 className="text-2xl font-semibold text-gray-800">Props</h2>

//       <div className="overflow-auto shadow-sm rounded-xl">
//         <Table>
//           <TableHead>
//             <TableRow className="text-left">
//               <TableHeadCell>Prop</TableHeadCell>
//               <TableHeadCell>Type</TableHeadCell>
//               <TableHeadCell>Default</TableHeadCell>
//               <TableHeadCell>Description</TableHeadCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {/* size */}
//             <TableRow>
//               <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//                 <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                   size
//                 </code>
//               </TableDataCell>
//               <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//                 <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                   {`"sm" | "lg"`}
//                 </code>
//               </TableDataCell>
//               <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//                 <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                   {`"sm"`}
//                 </code>
//               </TableDataCell>
//               <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//                 Controls the size of the input field
//               </TableDataCell>
//             </TableRow>

//             {/* disabled */}
//             <TableRow>
//               <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//                 <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                   disabled
//                 </code>
//               </TableDataCell>
//               <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//                 <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                   boolean
//                 </code>
//               </TableDataCell>
//               <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//                 <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                   false
//                 </code>
//               </TableDataCell>
//               <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//                 When true, the input becomes non-interactive
//               </TableDataCell>
//             </TableRow>

//             {/* startIcon */}
//             <TableRow>
//               <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//                 <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                   startIcon
//                 </code>
//               </TableDataCell>
//               <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//                 <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                   ReactNode
//                 </code>
//               </TableDataCell>
//               <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//                 <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                   -
//                 </code>
//               </TableDataCell>
//               <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//                 Icon to display at the start of the input field
//               </TableDataCell>
//             </TableRow>

//             {/* endIcon */}
//             <TableRow>
//               <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//                 <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                   endIcon
//                 </code>
//               </TableDataCell>
//               <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//                 <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                   ReactNode
//                 </code>
//               </TableDataCell>
//               <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//                 <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                   -
//                 </code>
//               </TableDataCell>
//               <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//                 Icon to display at the end of the input field
//               </TableDataCell>
//             </TableRow>

//             {/* error */}
//             <TableRow>
//               <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//                 <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                   error
//                 </code>
//               </TableDataCell>
//               <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//                 <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                   boolean | string
//                 </code>
//               </TableDataCell>
//               <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//                 <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                   false
//                 </code>
//               </TableDataCell>
//               <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//                 Displays an error state and message when provided
//               </TableDataCell>
//             </TableRow>

//             {/* width */}
//             <TableRow>
//               <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//                 <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                   width
//                 </code>
//               </TableDataCell>
//               <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//                 <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                   -
//                 </code>
//               </TableDataCell>
//               <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//                 <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                   -{" "}
//                 </code>
//               </TableDataCell>
//               <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//                 Controls the width of the input and is customizable
//               </TableDataCell>
//             </TableRow>

//             {/* withLabel */}
//             <TableRow>
//               <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//                 <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                   withLabel
//                 </code>
//               </TableDataCell>
//               <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//                 <div className="flex items-center gap-1">
//                   <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono border-r border-purple-200">
//                     Input
//                   </code>
//                   <span className="text-gray-400 mx-1">+</span>
//                   <code className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs font-mono border-l border-green-200">
//                     Label
//                   </code>
//                   <span className="text-gray-400 mx-1">+</span>
//                   <code className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs font-mono border-l border-green-200">
//                     HelperText
//                   </code>
//                 </div>
//               </TableDataCell>
//               <TableDataCell className="py-4 px-6 text-gray-400 text-sm">
//                 -
//               </TableDataCell>
//               <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//                 <div className="space-y-2">
//                   <p>
//                     Combine with the{" "}
//                     <code className="bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded text-xs font-mono">
//                       Label
//                     </code>{" "}
//                     and{" "}
//                     <code className="bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded text-xs font-mono">
//                       HelperText
//                     </code>{" "}
//                     components for accessible form labels and helper text.
//                   </p>
//                   <div className="bg-gray-50 rounded border border-gray-200 px-3 py-2">
//                     <code className="text-xs text-gray-700 font-mono block">
//                       &lt;div className=&quot;flex flex-col gap-2&quot;&gt;
//                       <br />
//                       &nbsp;&nbsp;&lt;Label required
//                       htmlFor=&quot;email&quot;&gt;Email&lt;/Label&gt;
//                       <br />
//                       &nbsp;&nbsp;&lt;Input id=&quot;email&quot;
//                       type=&quot;text&quot; placeholder=&quot;Enter email&quot;
//                       /&gt;
//                       <br />
//                       &nbsp;&nbsp;&lt;HelperText&gt;This is a helper
//                       text&lt;/HelperText&gt;
//                       <br />
//                       &lt;/div&gt;
//                     </code>
//                   </div>
//                 </div>
//               </TableDataCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </div>

//       {/* TextInputWithLabel Props Table */}
//       <section className="space-y-6">
//         <h2 className="text-2xl font-semibold text-gray-800">
//           TextInputWithLabel Props
//         </h2>

//         <div className="overflow-auto shadow-sm rounded-xl border border-gray-200">
//           <Table>
//             <TableHead>
//               <TableRow className="text-left bg-gray-50">
//                 <TableHeadCell className="text-sm font-semibold text-gray-700">
//                   Prop
//                 </TableHeadCell>
//                 <TableHeadCell className="text-sm font-semibold text-gray-700">
//                   Type
//                 </TableHeadCell>
//                 <TableHeadCell className="text-sm font-semibold text-gray-700">
//                   Default
//                 </TableHeadCell>
//                 <TableHeadCell className="text-sm font-semibold text-gray-700">
//                   Description
//                 </TableHeadCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {/* tags */}
//               <TableRow>
//                 <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//                   <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                     tags
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//                   <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                     string[]
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//                   <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                     []
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//                   Array of tags currently displayed. Managed by parent component
//                   state.
//                 </TableDataCell>
//               </TableRow>

//               {/* setTags */}
//               <TableRow>
//                 <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//                   <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                     setTags
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//                   <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                     {`(tags: string[]) => void`}
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//                   <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                     -
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//                   State setter function for updating tags. Typically from
//                   useState hook.
//                 </TableDataCell>
//               </TableRow>

//               {/* placeholder */}
//               <TableRow>
//                 <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//                   <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                     placeholder
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//                   <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                     string
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//                   <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                     "Add tags"
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//                   Placeholder text displayed in the input field.
//                 </TableDataCell>
//               </TableRow>

//               {/* intent */}
//               <TableRow>
//                 <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//                   <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                     intent
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//                   <code className="inline-block bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono max-w-[260px]">
//                     {`"default" | "primary" | "success" | "warning" | "error" | "info"`}
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//                   <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                     "default"
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//                   Visual intent of the tags input. Affects tag colors and input
//                   styling.
//                 </TableDataCell>
//               </TableRow>

//               {/* label */}
//               <TableRow>
//                 <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//                   <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                     label
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//                   <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                     string
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//                   <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                     -
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//                   Optional label text displayed above the input field.
//                 </TableDataCell>
//               </TableRow>

//               {/* helperText */}
//               <TableRow>
//                 <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//                   <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                     helperText
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//                   <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                     string
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//                   <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                     -
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//                   Optional helper text displayed below the input field.
//                 </TableDataCell>
//               </TableRow>

//               {/* separator */}
//               <TableRow>
//                 <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//                   <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                     separator
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//                   <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                     string
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//                   <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                     ","
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//                   Character used to separate tags when pasting or typing
//                   multiple values.
//                 </TableDataCell>
//               </TableRow>

//               {/* className */}
//               <TableRow>
//                 <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//                   <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                     className
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//                   <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                     string
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//                   <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                     -
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//                   Additional CSS classes for custom styling the component.
//                 </TableDataCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </div>
//       </section>

//       {/* OTPInput Props Table */}
//       <section className="space-y-6">
//         <h2 className="text-2xl font-semibold text-gray-800">OTPInput Props</h2>

//         <div className="overflow-auto shadow-sm rounded-xl border border-gray-200">
//           <Table>
//             <TableHead>
//               <TableRow className="text-left bg-gray-50">
//                 <TableHeadCell className="text-sm font-semibold text-gray-700">
//                   Prop
//                 </TableHeadCell>
//                 <TableHeadCell className="text-sm font-semibold text-gray-700">
//                   Type
//                 </TableHeadCell>
//                 <TableHeadCell className="text-sm font-semibold text-gray-700">
//                   Default
//                 </TableHeadCell>
//                 <TableHeadCell className="text-sm font-semibold text-gray-700">
//                   Description
//                 </TableHeadCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {/* type */}
//               <TableRow>
//                 <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//                   <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                     type
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//                   <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                     {`"text" | "number" | "password"`}
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//                   <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                     "text"
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//                   Type of OTP input. "number" restricts to numeric values,
//                   "password" hides input.
//                 </TableDataCell>
//               </TableRow>

//               {/* length */}
//               <TableRow>
//                 <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//                   <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                     length
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//                   <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                     number
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//                   <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                     6
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//                   Number of OTP digits/characters. Typically 4-8 for most use
//                   cases.
//                 </TableDataCell>
//               </TableRow>

//               {/* onChange */}
//               <TableRow>
//                 <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//                   <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                     onChange
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//                   <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                     {`(value: string) => void`}
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//                   <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                     -
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//                   Callback function when OTP value changes. Returns the complete
//                   OTP string.
//                 </TableDataCell>
//               </TableRow>
//               {/* label */}
//               <TableRow>
//                 <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//                   <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                     label
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//                   <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                     string
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//                   <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                     -
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//                   Optional label text displayed above the input field.
//                 </TableDataCell>
//               </TableRow>

//               {/* helperText */}
//               <TableRow>
//                 <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
//                   <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
//                     helperText
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
//                   <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
//                     string
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
//                   <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
//                     -
//                   </code>
//                 </TableDataCell>
//                 <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
//                   Optional helper text displayed below the input field.
//                 </TableDataCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </div>
//       </section>
//     </section>
//   );
// };

// export default InputPropTable;
