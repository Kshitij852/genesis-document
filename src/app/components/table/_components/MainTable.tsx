"use client";
import { Tab, TabList, TabPanel, TabsContainer } from "@atomos_tech/genesis";
import {
  RiTableLine,
  RiExpandUpDownLine,
  RiCodeLine,
  RiLayoutRowLine,
} from "@remixicon/react";
import React, { useState } from "react";

import FeatureCard from "../../../../components/common/FeatureCard";
import CodeSnippet from "../../button/_components/CodeSnippet";
import TableExpanding from "./TableExpanding";
import TableFixedColumn from "./TableFixedColumn";
import TableSorting from "./TableSorting";

const MainTable = () => {
  // tabs
  const [value, setValue] = useState("1");

  const handleTabChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-primary-100 rounded-lg">
            <RiTableLine size={24} className="text-primary-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Table</h1>
            <p className="text-gray-600 mt-1">
              Powerful and flexible table components with expandable rows,
              pagination, and sorting capabilities for displaying complex data
              sets.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiExpandUpDownLine}
          title="Expandable Rows"
          description="Nested row expansion with collapsible sub-rows for hierarchical data display"
        />
        <FeatureCard
          icon={RiLayoutRowLine}
          title="Pagination"
          description="Built-in pagination with customizable rows per page options and page navigation"
        />
        <FeatureCard
          icon={RiCodeLine}
          title="Customizable"
          description="Flexible API for custom cell rendering, status indicators, and interactive elements"
        />
      </div>

      <TabsContainer value={value}>
        <TabList
          onChange={handleTabChange}
          ariaLabel="Table variants tabs"
          box={false}
          className="border-none"
        >
          <Tab
            label="Expanding Table"
            value="1"
            onChange={handleTabChange}
            selectedTabValue={value}
          />
          <Tab
            label="Fixed Column Table"
            value="2"
            onChange={handleTabChange}
            selectedTabValue={value}
          />
          <Tab
            label="Sortable Table"
            value="3"
            onChange={handleTabChange}
            selectedTabValue={value}
          />
        </TabList>

        {/* Expanding Table Tab */}
        <TabPanel value="1" currentValue={value}>
          <div className="space-y-8">
            {/* Live Example Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 my-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Expanding Table Example
              </h2>

              <TableExpanding />

              <p className="text-xs text-gray-500 mt-2">
                Click on rows with expandable content to reveal nested data.
                Includes pagination and status indicators.
              </p>
              {/* Code Examples */}
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Implementation
                </h2>

                <TabsContainer value="react">
                  <TabList
                    onChange={() => {}}
                    ariaLabel="React and Next tabs"
                    className="border-b border-gray-200 mb-4"
                    box
                  >
                    <Tab
                      label="React"
                      value="react"
                      selectedTabValue="react"
                      onChange={() => {}}
                    />
                    <Tab
                      label="Next"
                      value="next"
                      selectedTabValue="react"
                      onChange={() => {}}
                    />
                  </TabList>

                  <TabPanel value="react" currentValue="react">
                    <CodeSnippet
                      title="Expanding Table Component"
                      code={`"use client";
import Chip from "@/app/components/Chip";
import { tableData } from "@/app/components/Table/table";
import {
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "@/app/components/TableComponents";
import React, { useState } from "react";
import { RiArrowDownSLine } from "@remixicon/react";
import Pagination from "../Pagination";

const TableExpanding = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (newRowsPerPage: number) => {
    setRowsPerPage(newRowsPerPage);
    setPage(0);
  };

  const startIndex = page * rowsPerPage;
  const endIndex = (page + 1) * rowsPerPage;

  const currentPageData = tableData?.slice(startIndex, endIndex);

  // expandable row
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const toggleRowExpansion = (id: number) => {
    setExpandedRows((prevExpandedRows) => {
      if (prevExpandedRows?.includes(id)) {
        return [];
      }
      return [id];
    });
  };

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>First Name</TableHeadCell>
            <TableHeadCell>Last Name</TableHeadCell>
            <TableHeadCell>Age</TableHeadCell>
            <TableHeadCell>Visits</TableHeadCell>
            <TableHeadCell>Progress</TableHeadCell>
            <TableHeadCell>Status</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentPageData?.map((data, index) => (
            <React.Fragment key={index}>
              <TableRow
                className={\`\${
                  expandedRows?.includes(data.id) && expandedRows?.length > 0
                    ? "bg-gray-200"
                    : ""
                }\`}
                onClick={() => toggleRowExpansion(data.id)}
              >
                <TableDataCell>
                  <div className="flex items-center gap-1">
                    {data.firstName}{" "}
                    {data.subRows && data.subRows.length > 0 && (
                      <span className="p-1 rounded-md hover:bg-gray-200">
                        {" "}
                        <RiArrowDownSLine cursor="pointer" size={18} />
                      </span>
                    )}
                  </div>
                </TableDataCell>
                <TableDataCell>{data.lastName}</TableDataCell>
                <TableDataCell>{data.age}</TableDataCell>
                <TableDataCell>{data.visits}</TableDataCell>
                <TableDataCell>{data.progress}</TableDataCell>
                <TableDataCell>
                  <Chip intent="primary">{data.status}</Chip>
                </TableDataCell>
              </TableRow>
              {expandedRows?.includes(data.id) &&
                data.subRows &&
                data.subRows.map((subData, subIndex) => (
                  <TableRow indent key={\`\${index}-\${subIndex}\`}>
                    <TableDataCell>{subData.firstName}</TableDataCell>
                    <TableDataCell>{subData.lastName}</TableDataCell>
                    <TableDataCell>{subData.age}</TableDataCell>
                    <TableDataCell>{subData.visits}</TableDataCell>
                    <TableDataCell>{subData.progress}</TableDataCell>
                    <TableDataCell>
                      <Chip intent="primary">{subData.status}</Chip>
                    </TableDataCell>
                  </TableRow>
                ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
      <Pagination
        count={tableData?.length}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default TableExpanding;`}
                    />
                  </TabPanel>

                  <TabPanel value="next" currentValue="react">
                    <CodeSnippet
                      title="Expanding Table Component"
                      code={`"use client";
import Chip from "@/app/components/Chip";
import { tableData } from "@/app/components/Table/table";
import {
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "@/app/components/TableComponents";
import React, { useState } from "react";
import { RiArrowDownSLine } from "@remixicon/react";
import Pagination from "../Pagination";

const TableExpanding = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (newRowsPerPage: number) => {
    setRowsPerPage(newRowsPerPage);
    setPage(0);
  };

  const startIndex = page * rowsPerPage;
  const endIndex = (page + 1) * rowsPerPage;

  const currentPageData = tableData?.slice(startIndex, endIndex);

  // expandable row
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const toggleRowExpansion = (id: number) => {
    setExpandedRows((prevExpandedRows) => {
      if (prevExpandedRows?.includes(id)) {
        return [];
      }
      return [id];
    });
  };

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>First Name</TableHeadCell>
            <TableHeadCell>Last Name</TableHeadCell>
            <TableHeadCell>Age</TableHeadCell>
            <TableHeadCell>Visits</TableHeadCell>
            <TableHeadCell>Progress</TableHeadCell>
            <TableHeadCell>Status</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentPageData?.map((data, index) => (
            <React.Fragment key={index}>
              <TableRow
                className={\`\${
                  expandedRows?.includes(data.id) && expandedRows?.length > 0
                    ? "bg-gray-200"
                    : ""
                }\`}
                onClick={() => toggleRowExpansion(data.id)}
              >
                <TableDataCell>
                  <div className="flex items-center gap-1">
                    {data.firstName}{" "}
                    {data.subRows && data.subRows.length > 0 && (
                      <span className="p-1 rounded-md hover:bg-gray-200">
                        {" "}
                        <RiArrowDownSLine cursor="pointer" size={18} />
                      </span>
                    )}
                  </div>
                </TableDataCell>
                <TableDataCell>{data.lastName}</TableDataCell>
                <TableDataCell>{data.age}</TableDataCell>
                <TableDataCell>{data.visits}</TableDataCell>
                <TableDataCell>{data.progress}</TableDataCell>
                <TableDataCell>
                  <Chip intent="primary">{data.status}</Chip>
                </TableDataCell>
              </TableRow>
              {expandedRows?.includes(data.id) &&
                data.subRows &&
                data.subRows.map((subData, subIndex) => (
                  <TableRow indent key={\`\${index}-\${subIndex}\`}>
                    <TableDataCell>{subData.firstName}</TableDataCell>
                    <TableDataCell>{subData.lastName}</TableDataCell>
                    <TableDataCell>{subData.age}</TableDataCell>
                    <TableDataCell>{subData.visits}</TableDataCell>
                    <TableDataCell>{subData.progress}</TableDataCell>
                    <TableDataCell>
                      <Chip intent="primary">{subData.status}</Chip>
                    </TableDataCell>
                  </TableRow>
                ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
      <Pagination
        count={tableData?.length}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default TableExpanding;`}
                    />
                  </TabPanel>
                </TabsContainer>
              </div>
            </div>
          </div>
        </TabPanel>

        {/* Basic Table Tab - Empty for now */}
        <TabPanel value="2" currentValue={value}>
          <div className="space-y-8">
            {/* Live Example Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 my-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Fixed Column Table Example
              </h2>

              <TableFixedColumn />

              <p className="text-xs text-gray-500 mt-2">
                Horizontal scrolling table with sticky left and right columns.
                Includes tooltips, pagination, and status chips.
              </p>

              {/* Code Examples */}
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Implementation
                </h2>

                <TabsContainer value="react">
                  <TabList
                    onChange={() => {}}
                    ariaLabel="React and Next tabs"
                    className="border-b border-gray-200 mb-4"
                    box
                  >
                    <Tab
                      label="React"
                      value="react"
                      selectedTabValue="react"
                      onChange={() => {}}
                    />
                    <Tab
                      label="Next"
                      value="next"
                      selectedTabValue="react"
                      onChange={() => {}}
                    />
                  </TabList>

                  <TabPanel value="react" currentValue="react">
                    <CodeSnippet
                      title="Fixed Column Table Component"
                      code={`"use client";
import { tableData } from "@/app/components/Table/table";
import {
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "@/app/components/TableComponents";
import React, { useState } from "react";
import Chip from "../Chip";
import Pagination from "../Pagination";
import { RiInformation2Line } from "@remixicon/react";
import Tooltip from "../Tooltip";
import ListPagination from "../ListPagination";

const TableFixedColumn = () => {
  const [data, setdata] = useState(tableData);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (newRowsPerPage: number) => {
    setRowsPerPage(newRowsPerPage);
    setPage(0);
  };

  const startIndex = page * rowsPerPage;
  const endIndex = (page + 1) * rowsPerPage;

  const currentPageData = data?.slice(startIndex, endIndex);

  return (
    <div>
      <Pagination
        count={tableData?.length}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        variant="secondary"
        countVariable="Logs"
        itemsPerPage={false}
      />
      <div className="overflow-auto">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell sticky left="0px" shadow className="z-[100]">
                ID
              </TableHeadCell>
              <TableHeadCell>First Name</TableHeadCell>
              <TableHeadCell
                icon={
                  <Tooltip
                    position="right"
                    content={
                      <div>
                        <h1 className="font-semibold text-xs">
                          This is a tooltip
                        </h1>
                        <p className="font-normal text-xs">
                          Tooltips are used to describe or identify an element.
                          In most scenarios, tooltips help the user understand
                          the meaning, function or alt-text of an element.
                        </p>
                      </div>
                    }
                  >
                    <RiInformation2Line size={15} />
                  </Tooltip>
                }
              >
                Last Name
              </TableHeadCell>
              <TableHeadCell>Age</TableHeadCell>
              <TableHeadCell>Progress</TableHeadCell>
              <TableHeadCell>Status</TableHeadCell>
              <TableHeadCell>Visits</TableHeadCell>
              <TableHeadCell>Progress Extra</TableHeadCell>
              <TableHeadCell>Status Extra</TableHeadCell>
              <TableHeadCell>Visits Extra</TableHeadCell>
              <TableHeadCell>Progress Extra</TableHeadCell>
              <TableHeadCell>Status Extra</TableHeadCell>
              <TableHeadCell>Visits Extra</TableHeadCell>
              <TableHeadCell>Progress Extra</TableHeadCell>
              <TableHeadCell>Status Extra</TableHeadCell>
              <TableHeadCell sticky right="0px" shadowRight>
                Visits Extra
              </TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPageData?.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableDataCell sticky left="0px" shadow>
                    {item.id}
                  </TableDataCell>
                  <TableDataCell>{item.firstName}</TableDataCell>
                  <TableDataCell>{item.lastName}</TableDataCell>
                  <TableDataCell>{item.age}</TableDataCell>
                  <TableDataCell>{item.progress}</TableDataCell>
                  <TableDataCell>
                    <Chip dot intent={"primary"} size={"sm"}>
                      {item.status}
                    </Chip>
                  </TableDataCell>
                  <TableDataCell>{item.visits}</TableDataCell>
                  <TableDataCell>{item.progress}</TableDataCell>
                  <TableDataCell>
                    <Chip intent={"primary"} size={"sm"}>
                      {item.status}
                    </Chip>
                  </TableDataCell>
                  <TableDataCell>{item.visits}</TableDataCell>
                  <TableDataCell>{item.progress}</TableDataCell>
                  <TableDataCell>
                    <Chip intent={"primary"} size={"sm"}>
                      {item.status}
                    </Chip>
                  </TableDataCell>
                  <TableDataCell>{item.visits}</TableDataCell>
                  <TableDataCell>{item.progress}</TableDataCell>
                  <TableDataCell>
                    <Chip intent={"primary"} size={"sm"}>
                      {item.status}
                    </Chip>
                  </TableDataCell>
                  <TableDataCell sticky right="0px" shadowRight>
                    {item.visits}
                  </TableDataCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <ListPagination
        count={tableData?.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
      />
    </div>
  );
};

export default TableFixedColumn;`}
                    />
                  </TabPanel>

                  <TabPanel value="next" currentValue="react">
                    <CodeSnippet
                      title="Fixed Column Table Component"
                      code={`"use client";
import { tableData } from "@/app/components/Table/table";
import {
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "@/app/components/TableComponents";
import React, { useState } from "react";
import Chip from "../Chip";
import Pagination from "../Pagination";
import { RiInformation2Line } from "@remixicon/react";
import Tooltip from "../Tooltip";
import ListPagination from "../ListPagination";

const TableFixedColumn = () => {
  const [data, setdata] = useState(tableData);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (newRowsPerPage: number) => {
    setRowsPerPage(newRowsPerPage);
    setPage(0);
  };

  const startIndex = page * rowsPerPage;
  const endIndex = (page + 1) * rowsPerPage;

  const currentPageData = data?.slice(startIndex, endIndex);

  return (
    <div>
      <Pagination
        count={tableData?.length}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        variant="secondary"
        countVariable="Logs"
        itemsPerPage={false}
      />
      <div className="overflow-auto">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell sticky left="0px" shadow className="z-[100]">
                ID
              </TableHeadCell>
              <TableHeadCell>First Name</TableHeadCell>
              <TableHeadCell
                icon={
                  <Tooltip
                    position="right"
                    content={
                      <div>
                        <h1 className="font-semibold text-xs">
                          This is a tooltip
                        </h1>
                        <p className="font-normal text-xs">
                          Tooltips are used to describe or identify an element.
                          In most scenarios, tooltips help the user understand
                          the meaning, function or alt-text of an element.
                        </p>
                      </div>
                    }
                  >
                    <RiInformation2Line size={15} />
                  </Tooltip>
                }
              >
                Last Name
              </TableHeadCell>
              <TableHeadCell>Age</TableHeadCell>
              <TableHeadCell>Progress</TableHeadCell>
              <TableHeadCell>Status</TableHeadCell>
              <TableHeadCell>Visits</TableHeadCell>
              <TableHeadCell>Progress Extra</TableHeadCell>
              <TableHeadCell>Status Extra</TableHeadCell>
              <TableHeadCell>Visits Extra</TableHeadCell>
              <TableHeadCell>Progress Extra</TableHeadCell>
              <TableHeadCell>Status Extra</TableHeadCell>
              <TableHeadCell>Visits Extra</TableHeadCell>
              <TableHeadCell>Progress Extra</TableHeadCell>
              <TableHeadCell>Status Extra</TableHeadCell>
              <TableHeadCell sticky right="0px" shadowRight>
                Visits Extra
              </TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPageData?.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableDataCell sticky left="0px" shadow>
                    {item.id}
                  </TableDataCell>
                  <TableDataCell>{item.firstName}</TableDataCell>
                  <TableDataCell>{item.lastName}</TableDataCell>
                  <TableDataCell>{item.age}</TableDataCell>
                  <TableDataCell>{item.progress}</TableDataCell>
                  <TableDataCell>
                    <Chip dot intent={"primary"} size={"sm"}>
                      {item.status}
                    </Chip>
                  </TableDataCell>
                  <TableDataCell>{item.visits}</TableDataCell>
                  <TableDataCell>{item.progress}</TableDataCell>
                  <TableDataCell>
                    <Chip intent={"primary"} size={"sm"}>
                      {item.status}
                    </Chip>
                  </TableDataCell>
                  <TableDataCell>{item.visits}</TableDataCell>
                  <TableDataCell>{item.progress}</TableDataCell>
                  <TableDataCell>
                    <Chip intent={"primary"} size={"sm"}>
                      {item.status}
                    </Chip>
                  </TableDataCell>
                  <TableDataCell>{item.visits}</TableDataCell>
                  <TableDataCell>{item.progress}</TableDataCell>
                  <TableDataCell>
                    <Chip intent={"primary"} size={"sm"}>
                      {item.status}
                    </Chip>
                  </TableDataCell>
                  <TableDataCell sticky right="0px" shadowRight>
                    {item.visits}
                  </TableDataCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <ListPagination
        count={tableData?.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
      />
    </div>
  );
};

export default TableFixedColumn;`}
                    />
                  </TabPanel>
                </TabsContainer>
              </div>
            </div>
          </div>
        </TabPanel>

        {/* Sortable Table Tab - Empty for now */}
        <TabPanel value="3" currentValue={value}>
          <div className="space-y-8">
            {/* Live Example Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 my-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Sortable Table Example
              </h2>

              <TableSorting />

              <p className="text-xs text-gray-500 mt-2">
                Interactive table with column sorting, row selection checkboxes,
                tooltips, and integrated pagination.
              </p>

              {/* Code Examples */}
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Implementation
                </h2>

                <TabsContainer value="react">
                  <TabList
                    onChange={() => {}}
                    ariaLabel="React and Next tabs"
                    className="border-b border-gray-200 mb-4"
                    box
                  >
                    <Tab
                      label="React"
                      value="react"
                      selectedTabValue="react"
                      onChange={() => {}}
                    />
                    <Tab
                      label="Next"
                      value="next"
                      selectedTabValue="react"
                      onChange={() => {}}
                    />
                  </TabList>

                  <TabPanel value="react" currentValue="react">
                    <CodeSnippet
                      title="Sortable Table Component"
                      code={`"use client";
import { tableData, User } from "@/app/components/Table/table";
import {
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "@/app/components/TableComponents";
import React, { useState } from "react";
import { RiSortAsc } from "@remixicon/react";
import Chip from "../Chip";
import Checkbox from "../Checkbox";
import Pagination from "../Pagination";
import Tooltip from "../Tooltip";

const TableSorting = () => {
  const [data, setData] = useState<User[]>(tableData);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof User;
    direction: "ascending" | "descending";
  }>({
    key: "id",
    direction: "ascending",
  });
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  const sortBy = (key: keyof User) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "ascending"
        ? "descending"
        : "ascending";

    const sortedData = [...data].sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];

      // Check if either aValue or bValue is undefined
      if (aValue === undefined || bValue === undefined) {
        return 0; // or handle this case as needed
      }

      if (aValue < bValue) return direction === "ascending" ? -1 : 1;
      if (aValue > bValue) return direction === "ascending" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setData(sortedData);
  };

  // Checkbox

  const toggleSelectAll = () => {
    const newSelectAllChecked = !selectAllChecked;
    setSelectAllChecked(newSelectAllChecked);
    const newData = data.map((item) => ({
      ...item,
      isChecked: newSelectAllChecked,
    }));
    setData(newData);
  };

  const handleCheckboxChange = (id: number) => {
    const newData = data.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );
    setData(newData);
    setSelectAllChecked(newData.every((item) => item.isChecked));
  };

  // pagination

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (newRowsPerPage: number) => {
    setRowsPerPage(newRowsPerPage);
    setPage(0);
  };

  const startIndex = page * rowsPerPage;
  const endIndex = (page + 1) * rowsPerPage;

  const currentPageData = data?.slice(startIndex, endIndex);

  return (
    <div className="overflow-auto shadow-sm rounded-xl">
      <Table dense>
        <TableHead>
          <TableRow className="text-left">
            <TableHeadCell>
              <Checkbox
                id="checkAll"
                checked={selectAllChecked}
                onChange={toggleSelectAll}
              />
            </TableHeadCell>
            <TableHeadCell icon={<RiSortAsc onClick={() => sortBy("id")} />}>
              ID
            </TableHeadCell>
            <TableHeadCell
              icon={<RiSortAsc onClick={() => sortBy("firstName")} />}
            >
              First Name
            </TableHeadCell>
            <TableHeadCell
              icon={<RiSortAsc onClick={() => sortBy("lastName")} />}
            >
              Last Name
            </TableHeadCell>
            <TableHeadCell icon={<RiSortAsc onClick={() => sortBy("age")} />}>
              Age
            </TableHeadCell>
            <TableHeadCell
              icon={<RiSortAsc onClick={() => sortBy("progress")} />}
            >
              Progress
            </TableHeadCell>
            <TableHeadCell
              icon={<RiSortAsc onClick={() => sortBy("status")} />}
            >
              Status
            </TableHeadCell>
            <TableHeadCell
              icon={<RiSortAsc onClick={() => sortBy("visits")} />}
            >
              Visits
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentPageData.map((item) => (
            <TableRow key={item.id} className="text-left">
              <TableDataCell>
                <Checkbox
                  id={\`check-\${item.id}\`}
                  checked={item.isChecked}
                  onChange={() => handleCheckboxChange(item.id)}
                />
              </TableDataCell>
              <TableDataCell>{item.id}</TableDataCell>
              <TableDataCell className="py-10">
                <Tooltip position="top" content={item.firstName}>
                  {item.firstName}
                </Tooltip>
              </TableDataCell>
              <TableDataCell>{item.lastName}</TableDataCell>
              <TableDataCell>{item.age}</TableDataCell>
              <TableDataCell>{item.progress}</TableDataCell>
              <TableDataCell>
                <Chip intent={"primary"} size={"md"}>
                  {item.status}
                </Chip>
              </TableDataCell>
              <TableDataCell>{item.visits}</TableDataCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        count={tableData?.length}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        className="rounded-b-xl"
      />
    </div>
  );
};

export default TableSorting;`}
                    />
                  </TabPanel>

                  <TabPanel value="next" currentValue="react">
                    <CodeSnippet
                      title="Sortable Table Component"
                      code={`"use client";
import { tableData, User } from "@/app/components/Table/table";
import {
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "@/app/components/TableComponents";
import React, { useState } from "react";
import { RiSortAsc } from "@remixicon/react";
import Chip from "../Chip";
import Checkbox from "../Checkbox";
import Pagination from "../Pagination";
import Tooltip from "../Tooltip";

const TableSorting = () => {
  const [data, setData] = useState<User[]>(tableData);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof User;
    direction: "ascending" | "descending";
  }>({
    key: "id",
    direction: "ascending",
  });
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  const sortBy = (key: keyof User) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "ascending"
        ? "descending"
        : "ascending";

    const sortedData = [...data].sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];

      // Check if either aValue or bValue is undefined
      if (aValue === undefined || bValue === undefined) {
        return 0; // or handle this case as needed
      }

      if (aValue < bValue) return direction === "ascending" ? -1 : 1;
      if (aValue > bValue) return direction === "ascending" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setData(sortedData);
  };

  // Checkbox

  const toggleSelectAll = () => {
    const newSelectAllChecked = !selectAllChecked;
    setSelectAllChecked(newSelectAllChecked);
    const newData = data.map((item) => ({
      ...item,
      isChecked: newSelectAllChecked,
    }));
    setData(newData);
  };

  const handleCheckboxChange = (id: number) => {
    const newData = data.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );
    setData(newData);
    setSelectAllChecked(newData.every((item) => item.isChecked));
  };

  // pagination

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (newRowsPerPage: number) => {
    setRowsPerPage(newRowsPerPage);
    setPage(0);
  };

  const startIndex = page * rowsPerPage;
  const endIndex = (page + 1) * rowsPerPage;

  const currentPageData = data?.slice(startIndex, endIndex);

  return (
    <div className="overflow-auto shadow-sm rounded-xl">
      <Table dense>
        <TableHead>
          <TableRow className="text-left">
            <TableHeadCell>
              <Checkbox
                id="checkAll"
                checked={selectAllChecked}
                onChange={toggleSelectAll}
              />
            </TableHeadCell>
            <TableHeadCell icon={<RiSortAsc onClick={() => sortBy("id")} />}>
              ID
            </TableHeadCell>
            <TableHeadCell
              icon={<RiSortAsc onClick={() => sortBy("firstName")} />}
            >
              First Name
            </TableHeadCell>
            <TableHeadCell
              icon={<RiSortAsc onClick={() => sortBy("lastName")} />}
            >
              Last Name
            </TableHeadCell>
            <TableHeadCell icon={<RiSortAsc onClick={() => sortBy("age")} />}>
              Age
            </TableHeadCell>
            <TableHeadCell
              icon={<RiSortAsc onClick={() => sortBy("progress")} />}
            >
              Progress
            </TableHeadCell>
            <TableHeadCell
              icon={<RiSortAsc onClick={() => sortBy("status")} />}
            >
              Status
            </TableHeadCell>
            <TableHeadCell
              icon={<RiSortAsc onClick={() => sortBy("visits")} />}
            >
              Visits
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentPageData.map((item) => (
            <TableRow key={item.id} className="text-left">
              <TableDataCell>
                <Checkbox
                  id={\`check-\${item.id}\`}
                  checked={item.isChecked}
                  onChange={() => handleCheckboxChange(item.id)}
                />
              </TableDataCell>
              <TableDataCell>{item.id}</TableDataCell>
              <TableDataCell className="py-10">
                <Tooltip position="top" content={item.firstName}>
                  {item.firstName}
                </Tooltip>
              </TableDataCell>
              <TableDataCell>{item.lastName}</TableDataCell>
              <TableDataCell>{item.age}</TableDataCell>
              <TableDataCell>{item.progress}</TableDataCell>
              <TableDataCell>
                <Chip intent={"primary"} size={"md"}>
                  {item.status}
                </Chip>
              </TableDataCell>
              <TableDataCell>{item.visits}</TableDataCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        count={tableData?.length}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        className="rounded-b-xl"
      />
    </div>
  );
};

export default TableSorting;`}
                    />
                  </TabPanel>
                </TabsContainer>
              </div>
            </div>
          </div>
        </TabPanel>
      </TabsContainer>
    </div>
  );
};

export default MainTable;
