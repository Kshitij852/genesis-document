import {
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableHeadCell,
  TableDataCell,
} from "@atomos_tech/genesis";
import React from "react";

const FileUploadTable = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Props</h2>

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
            {/* id */}
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
                Unique identifier for the file input element.
              </TableDataCell>
            </TableRow>

            {/* multiple */}
            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  multiple
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
                Enables selecting multiple files at once.
              </TableDataCell>
            </TableRow>

            {/* selectedFile */}
            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  selectedFile
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono whitespace-nowrap">
                  File[]
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                  []
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                Array of files currently selected or uploaded.
              </TableDataCell>
            </TableRow>

            {/* setSelectedFile */}
            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  setSelectedFile
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono whitespace-nowrap">
                  (files: File[]) =&gt; void
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                  -
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                Updates the current file list in the parent component.
              </TableDataCell>
            </TableRow>

            {/* onChange */}
            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  onChange
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono whitespace-nowrap">
                  (e: ChangeEvent&lt;HTMLInputElement&gt;) =&gt; void
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                  -
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                Handles the file selection event when files are chosen.
              </TableDataCell>
            </TableRow>

            {/* onDelete */}
            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  onDelete
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                  (file: File) =&gt; void
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                  -
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                Deletes a file from the list of selected files.
              </TableDataCell>
            </TableRow>

            {/* title */}
            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  title
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
                Helper text displayed inside the upload area.
              </TableDataCell>
            </TableRow>

            {/* filePreviewClassName */}
            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  filePreviewClassName
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
                Custom class for preview layout styling (e.g., grid or flex).
              </TableDataCell>
            </TableRow>

            {/* progressBar */}
            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  progressBar
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
                Optionally displays a progress bar to indicate upload status or
                progress to the user.
              </TableDataCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default FileUploadTable;
