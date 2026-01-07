import {
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "@atomos_tech/genesis";
import React from "react";

const CheckboxTableProp = () => {
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
                  size
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono">
                  {`"sm" | "lg" | "xl"`}
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm">
                <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-mono">
                  {`"lg"`}
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                Controls the size of the checkbox
              </TableDataCell>
            </TableRow>

            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  checked
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
                Whether the checkbox is checked
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
                When true, the checkbox becomes non-interactive
              </TableDataCell>
            </TableRow>

            <TableRow>
              <TableDataCell className="py-4 px-6 font-medium text-gray-900 text-sm">
                <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-mono">
                  withLabel
                </code>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-700 text-sm">
                <div className="flex items-center gap-1">
                  <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-mono border-r border-purple-200">
                    Checkbox
                  </code>
                  <span className="text-gray-400 mx-1">+</span>
                  <code className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs font-mono border-l border-green-200">
                    Label
                  </code>
                </div>
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-400 text-sm">
                -
              </TableDataCell>
              <TableDataCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">
                <div className="space-y-2">
                  <p>
                    Combine with the{" "}
                    <code className="bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded text-xs font-mono">
                      Label
                    </code>{" "}
                    component for accessible form labels and helper text.
                  </p>
                  <div className="bg-gray-50 rounded border border-gray-200 px-3 py-2">
                    <code className="text-xs text-gray-700 font-mono block">
                      &lt;div className=&quot;flex items-start gap-3&quot;&gt;
                      <br />
                      &nbsp;&nbsp;&lt;Checkbox /&gt;
                      <br />
                      &nbsp;&nbsp;&lt;div&gt;
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;Label&gt;Option&lt;/Label&gt;
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;HelperText
                      className=&quot;text-sm text-gray-500&quot;&gt;Helper
                      text&lt;/HelperText&gt;
                      <br />
                      &nbsp;&nbsp;&lt;/div&gt;
                      <br />
                      &lt;/div&gt;
                    </code>
                  </div>
                </div>
              </TableDataCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default CheckboxTableProp;
