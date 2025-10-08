"use client";

import React, { useState } from "react";
import { RiCodeLine } from "@remixicon/react";
import { Button } from "@atomos_tech/genesis";
// import { Button } from "@atomos_tech/genesis";

interface CodeSnippetProps {
  title: string;
  code: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ title, code }) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-2">
          <RiCodeLine size={16} className="text-gray-500" />
          <span className="text-sm font-medium text-gray-700">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            // intent={"default"}

            className="text-xs px-3 py-1.5"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? "Hide Code" : "Show Code"}
          </Button>
          <Button
            onClick={copyToClipboard}
            variant={"outlined"}
            className="text-xs px-3 py-1.5"
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
      </div>

      {/* Collapsible Code Area */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto overflow-y-auto max-h-[400px] border border-gray-700">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
