"use client";

import React from "react";
import FeatureCard from "../../../../components/common/FeatureCard";
import {
  RiCodeLine,
  RiCheckboxCircleLine,
  RiFolderUploadLine,
  RiLightbulbFlashLine,
} from "@remixicon/react";
import FileUploadTable from "./FileUploadTable";
import FileUploadExampleSection from "./FileUploadExampleSection";

const MainFileUpload = () => {
  return (
    <div className="space-y-10 p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary-100 rounded-lg">
          <RiLightbulbFlashLine size={26} className="text-primary-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">File Upload</h1>
          <p className="text-gray-600 mt-1">
            Upload single or multiple files easily with drag-and-drop support,
            file previews, and progress indication.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FeatureCard
          icon={RiFolderUploadLine}
          title="Drag & Drop"
          description="Allows users to drag and drop files or select from system dialog."
        />
        <FeatureCard
          icon={RiCheckboxCircleLine}
          title="Progress Tracking"
          description="Integrated progress bar and file management with delete option."
        />
        <FeatureCard
          icon={RiCodeLine}
          title="Multiple File Support"
          description="Supports both single and multiple file uploads with preview layout."
        />
      </div>

      {/* Example Section */}
      <FileUploadExampleSection />

      {/* Props Table */}
      <FileUploadTable />
    </div>
  );
};

export default MainFileUpload;
