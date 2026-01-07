"use client";

import React, { useState, ChangeEvent, useRef } from "react";
import {
  FileUpload,
  ProgressBar,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
  Button,
  FileSelector,
} from "@atomos_tech/genesis";
import { RiUpload2Line } from "@remixicon/react";
import CodeSnippet from "../../button/_components/CodeSnippet";

interface FileItem {
  id: string;
  file: File;
  status: "pending" | "uploading" | "uploaded" | "error";
  progress: number;
  error?: string;
}

const FileUploadExampleSection = () => {
  // --- Single File Upload ---
  const [selectedSingleFiles, setSelectedSingleFiles] = useState<File[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  // --- File Selector Refs ---
  const fileRef = useRef<HTMLInputElement>(null);
  const fileMultiRef = useRef<HTMLInputElement>(null);

  // --- Image Upload Controlled ---
  const [items, setItems] = useState<FileItem[]>([]);

  // --- Handlers ---
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

  // File Selector handlers
  const handleSingleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      console.log("Single file selected:", files[0]);
      // Handle single file upload
    }
  };

  const handleMultipleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      console.log("Multiple files selected:", files);
      // Handle multiple file upload
    }
  };

  // ImageUploadControlled handlers
  const handleAddFiles = (newFiles: File[]) => {
    const newItems: FileItem[] = newFiles.map((file) => ({
      id: Math.random().toString(36).substring(7),
      file,
      status: "pending",
      progress: 0,
    }));
    setItems([...items, ...newItems]);
  };

  const handleUpdateItem = (id: string, updates: Partial<FileItem>) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, ...updates } : item))
    );
  };

  const handleDelete = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleUpload = () => {
    // Simulate upload process
    items.forEach((item, index) => {
      if (item.status === "pending") {
        setTimeout(() => {
          handleUpdateItem(item.id, { status: "uploading", progress: 0 });

          // Simulate progress
          const interval = setInterval(() => {
            setItems((prev) =>
              prev.map((i) => {
                if (i.id === item.id && i.progress < 100) {
                  const newProgress = Math.min(i.progress + 20, 100);
                  const newStatus =
                    newProgress === 100 ? "uploaded" : "uploading";
                  return { ...i, progress: newProgress, status: newStatus };
                }
                return i;
              })
            );

            if (item.progress >= 100) {
              clearInterval(interval);
            }
          }, 500);
        }, index * 1000);
      }
    });
  };

  const handlePreview = (id: string) => {
    const item = items.find((item) => item.id === id);
    if (item) {
      console.log("Preview file:", item.file);
      // Implement preview logic
    }
  };

  const [nestedTabs, setNestedTabs] = useState({
    single: "react",
    multiple: "react",
    advanced: "react",
  });

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div className="space-y-8">
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

      {/* --- Advanced File Upload Components --- */}
      <section className="bg-white rounded-xl border border-gray-200 p-5">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Advanced File Upload Components
        </h2>

        <div className="space-y-8">
          {/* File Selector Section */}
          <div className="space-y-4">
            <h3 className="text-md font-medium text-gray-700">File Selector</h3>
            <div className="flex flex-wrap gap-4">
              <FileSelector
                ref={fileRef}
                id="singleselect"
                component={
                  <Button
                    size="sm"
                    variant="outlined"
                    endIcon={<RiUpload2Line size={18} />}
                  >
                    Upload Single File
                  </Button>
                }
                onChange={handleSingleChange}
              />
              <FileSelector
                ref={fileMultiRef}
                id="multiselect"
                component={<Button>Upload Multiple Files</Button>}
                multiple
                onChange={handleMultipleChange}
              />
            </div>
          </div>

          {/* Image Upload Controlled Section */}
          {/* <div className="space-y-4">
            <h3 className="text-md font-medium text-gray-700">
              Image Upload Controlled
            </h3>
            <div className="w-full">
              <ImageUploadControlled
                items={items}
                onAddFiles={handleAddFiles}
                onUpdateItem={handleUpdateItem}
                onDelete={handleDelete}
                onUpload={handleUpload}
                onPreview={handlePreview}
                multiple={true}
                accept="image/*, .pdf, .doc, .docx, .xlsx, .mp3"
                maxSizeMB={15}
                hintText="Drag and drop files or click to upload"
              />
            </div>
          </div> */}
        </div>

        {/* Tabs for Code Snippet */}
        <TabsContainer value={nestedTabs.advanced}>
          <TabList
            onChange={(val) => handleNestedTabChanges("advanced", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4 mt-6"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.advanced}
              onChange={(val) => handleNestedTabChanges("advanced", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.advanced}
              onChange={(val) => handleNestedTabChanges("advanced", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.advanced}>
            <CodeSnippet
              title="Advanced File Upload Components"
              code={`import { useState, useRef, ChangeEvent } from "react";
import { FileSelector, ImageUploadControlled, Button } from "@atomos_tech/genesis";
import { RiUpload2Line } from "@remixicon/react";

interface FileItem {
  id: string;
  file: File;
  status: 'pending' | 'uploading' | 'uploaded' | 'error';
  progress: number;
  error?: string;
}

const AdvancedFileUploadExample = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const fileMultiRef = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<FileItem[]>([]);

  // File Selector handlers
  const handleSingleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      console.log("Single file selected:", files[0]);
    }
  };

  const handleMultipleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      console.log("Multiple files selected:", files);
    }
  };

  // ImageUploadControlled handlers
  const handleAddFiles = (newFiles: File[]) => {
    const newItems: FileItem[] = newFiles.map(file => ({
      id: Math.random().toString(36).substring(7),
      file,
      status: 'pending',
      progress: 0,
    }));
    setItems([...items, ...newItems]);
  };

  const handleUpdateItem = (id: string, updates: Partial<FileItem>) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, ...updates } : item
    ));
  };

  const handleDelete = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleUpload = () => {
    // Implement upload logic
    console.log("Uploading files:", items);
  };

  const handlePreview = (id: string) => {
    const item = items.find(item => item.id === id);
    if (item) {
      console.log("Preview file:", item.file);
    }
  };

  return (
    <div className="space-y-8">
      {/* File Selector */}
      <div className="flex flex-wrap gap-4">
        <FileSelector
          ref={fileRef}
          id="singleselect"
          component={
            <Button
              size="sm"
              variant="outlined"
              endIcon={<RiUpload2Line size={18} />}
            >
              Upload Single File
            </Button>
          }
          onChange={handleSingleChange}
        />
        <FileSelector
          ref={fileMultiRef}
          id="multiselect"
          component={<Button>Upload Multiple Files</Button>}
          multiple
          onChange={handleMultipleChange}
        />
      </div>
    </div>
  );
};`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.advanced}>
            <CodeSnippet
              title="Advanced File Upload Components"
              code={`"use client";
import { useState, useRef, ChangeEvent } from "react";
import { FileSelector, ImageUploadControlled, Button } from "@atomos_tech/genesis";
import { RiUpload2Line } from "@remixicon/react";

interface FileItem {
  id: string;
  file: File;
  status: 'pending' | 'uploading' | 'uploaded' | 'error';
  progress: number;
  error?: string;
}

const AdvancedFileUploadExample = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const fileMultiRef = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<FileItem[]>([]);

  // File Selector handlers
  const handleSingleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      console.log("Single file selected:", files[0]);
    }
  };

  const handleMultipleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      console.log("Multiple files selected:", files);
    }
  };

  // ImageUploadControlled handlers
  const handleAddFiles = (newFiles: File[]) => {
    const newItems: FileItem[] = newFiles.map(file => ({
      id: Math.random().toString(36).substring(7),
      file,
      status: 'pending',
      progress: 0,
    }));
    setItems([...items, ...newItems]);
  };

  const handleUpdateItem = (id: string, updates: Partial<FileItem>) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, ...updates } : item
    ));
  };

  const handleDelete = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleUpload = () => {
    // Implement upload logic
    console.log("Uploading files:", items);
  };

  const handlePreview = (id: string) => {
    const item = items.find(item => item.id === id);
    if (item) {
      console.log("Preview file:", item.file);
    }
  };

  return (
    <div className="space-y-8">
      {/* File Selector */}
      <div className="flex flex-wrap gap-4">
        <FileSelector
          ref={fileRef}
          id="singleselect"
          component={
            <Button
              size="sm"
              variant="outlined"
              endIcon={<RiUpload2Line size={18} />}
            >
              Upload Single File
            </Button>
          }
          onChange={handleSingleChange}
        />
        <FileSelector
          ref={fileMultiRef}
          id="multiselect"
          component={<Button>Upload Multiple Files</Button>}
          multiple
          onChange={handleMultipleChange}
        />
      </div>
    </div>
  );
};`}
            />
          </TabPanel>
        </TabsContainer>
      </section>
    </div>
  );
};

export default FileUploadExampleSection;
