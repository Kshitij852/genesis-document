"use client";

import React, { useState, ChangeEvent } from "react";
import {
  FileUpload,
  ProgressBar,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
} from "@atomos_tech/genesis";
import CodeSnippet from "../../button/_components/CodeSnippet";

const FileUploadExampleSection = () => {
  // --- Single File Upload ---
  const [selectedSingleFiles, setSelectedSingleFiles] = useState<File[]>([]);

  const handleFileChangeSingle = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setSelectedSingleFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleDeleteFileSingle = (file: string | File) => {
    setSelectedSingleFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  // --- Multiple File Upload ---
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChangeMultiple = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleDeleteFile = (file: string | File) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  const [nestedTabs, setNestedTabs] = useState({
    single: "react",
    multiple: "react",
  });

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 items-start">
      {/* --- Single File Upload --- */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Single File Upload
        </h2>

        <div className="max-w-lg space-y-3">
          <FileUpload
            id="single"
            selectedFile={selectedSingleFiles}
            setSelectedFile={setSelectedSingleFiles}
            onChange={handleFileChangeSingle}
            onDelete={() => handleDeleteFileSingle(selectedSingleFiles[0])}
            title="SVG, PNG, JPG or GIF (max. 800x400px)"
          >
            <ProgressBar progressColor="bg-primary-600" progress={50} />
          </FileUpload>
        </div>

        {/* Tabs for Code Snippet */}
        <TabsContainer value={nestedTabs.single}>
          <TabList
            onChange={(val) => handleNestedTabChanges("single", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4 mt-6"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.single}
              onChange={(val) => handleNestedTabChanges("single", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.single}
              onChange={(val) => handleNestedTabChanges("single", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.single}>
            <CodeSnippet
              title="Single File Upload"
              code={`import { useState, ChangeEvent } from "react";
import { FileUpload, ProgressBar } from "@atomos_tech/genesis";

const SingleFileUploadExample = () => {
  const [selectedSingleFiles, setSelectedSingleFiles] = useState<File[]>([]);

  const handleFileChangeSingle = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setSelectedSingleFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleDeleteFileSingle = (file: string | File) => {
    setSelectedSingleFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  return (
    <FileUpload
      id="single"
      selectedFile={selectedSingleFiles}
      setSelectedFile={setSelectedSingleFiles}
      onChange={handleFileChangeSingle}
      onDelete={() => handleDeleteFileSingle(selectedSingleFiles[0])}
      title="SVG, PNG, JPG or GIF (max. 800x400px)"
    >
      <ProgressBar progressColor="bg-primary-600" progress={50} />
    </FileUpload>
  );
};`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.single}>
            <CodeSnippet
              title="Single File Upload"
              code={`"use client";
import { useState, ChangeEvent } from "react";
import { FileUpload, ProgressBar } from "@atomos_tech/genesis";

const SingleFileUploadExample = () => {
  const [selectedSingleFiles, setSelectedSingleFiles] = useState<File[]>([]);

  const handleFileChangeSingle = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setSelectedSingleFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleDeleteFileSingle = (file: string | File) => {
    setSelectedSingleFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  return (
    <FileUpload
      id="single"
      selectedFile={selectedSingleFiles}
      setSelectedFile={setSelectedSingleFiles}
      onChange={handleFileChangeSingle}
      onDelete={() => handleDeleteFileSingle(selectedSingleFiles[0])}
      title="SVG, PNG, JPG or GIF (max. 800x400px)"
    >
      <ProgressBar progressColor="bg-primary-600" progress={50} />
    </FileUpload>
  );
};`}
            />
          </TabPanel>
        </TabsContainer>
      </div>

      {/* --- Multiple File Upload --- */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Multiple File Upload
        </h2>

        <div className="max-w-lg space-y-3">
          <FileUpload
            multiple
            id="multiple"
            selectedFile={selectedFiles}
            setSelectedFile={setSelectedFiles}
            onChange={handleFileChangeMultiple}
            onDelete={() => handleDeleteFile(selectedFiles[0])}
            title="SVG, PNG, JPG or GIF (max. 800x400px)"
            filePreviewClassName="grid grid-cols-2 gap-2"
          />
        </div>

        {/* Tabs for Code Snippet */}
        <TabsContainer value={nestedTabs.multiple}>
          <TabList
            onChange={(val) => handleNestedTabChanges("multiple", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4 mt-6"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.multiple}
              onChange={(val) => handleNestedTabChanges("multiple", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.multiple}
              onChange={(val) => handleNestedTabChanges("multiple", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.multiple}>
            <CodeSnippet
              title="Multiple File Upload"
              code={`import { useState, ChangeEvent } from "react";
import { FileUpload } from "@atomos_tech/genesis";

const MultipleFileUploadExample = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChangeMultiple = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleDeleteFile = (file: string | File) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  return (
    <FileUpload
      multiple
      id="multiple"
      selectedFile={selectedFiles}
      setSelectedFile={setSelectedFiles}
      onChange={handleFileChangeMultiple}
      onDelete={() => handleDeleteFile(selectedFiles[0])}
      title="SVG, PNG, JPG or GIF (max. 800x400px)"
      filePreviewClassName="grid grid-cols-2 gap-2"
    />
  );
};`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.multiple}>
            <CodeSnippet
              title="Multiple File Upload"
              code={`"use client";
import { useState, ChangeEvent } from "react";
import { FileUpload } from "@atomos_tech/genesis";

const MultipleFileUploadExample = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChangeMultiple = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleDeleteFile = (file: string | File) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  return (
    <FileUpload
      multiple
      id="multiple"
      selectedFile={selectedFiles}
      setSelectedFile={setSelectedFiles}
      onChange={handleFileChangeMultiple}
      onDelete={() => handleDeleteFile(selectedFiles[0])}
      title="SVG, PNG, JPG or GIF (max. 800x400px)"
      filePreviewClassName="grid grid-cols-2 gap-2"
    />
  );
};`}
            />
          </TabPanel>
        </TabsContainer>
      </div>
    </section>
  );
};

export default FileUploadExampleSection;
