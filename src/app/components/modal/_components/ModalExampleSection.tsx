"use client";

import React, { useState } from "react";
import {
  Modal,
  Button,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
  Input,
  Textarea,
  Label,
  HelperText,
} from "@atomos_tech/genesis";
import CodeSnippet from "../../button/_components/CodeSnippet";
import { RiInformationLine, RiCheckboxCircleLine } from "@remixicon/react";

const ModalExampleSection = () => {
  const [nestedTabs, setNestedTabs] = useState({
    basic: "react",
    advanced: "react",
  });

  const [showBasicModal, setShowBasicModal] = useState(false);
  const [showStyledModal, setShowStyledModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 items-start">
        {/* Basic Usage Section */}
        <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Basic Usage
          </h2>

          {/* Basic Modal Example */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Basic Modal
            </h3>
            <div className="flex gap-4 flex-wrap items-center p-4 bg-gray-50 rounded-lg">
              <Button onClick={() => setShowBasicModal(true)}>
                Basic Modal
              </Button>
              <Modal
                showModal={showBasicModal}
                setShowModal={setShowBasicModal}
                closeModal={true}
                closeOnOutsideClick={true}
                width="60%"
              >
                <div className="max-w-[500px] mx-auto p-6">
                  <div className="text-center">
                    <RiInformationLine
                      size={48}
                      className="mx-auto text-blue-500 mb-4"
                    />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Basic Modal Example
                    </h3>
                    <p className="text-gray-600 mb-6">
                      This is a basic modal with close button and outside click
                      functionality. You can put any content here including
                      forms, images, or other components.
                    </p>
                    <div className="flex gap-3 justify-center">
                      <Button
                        variant="outlined"
                        onClick={() => setShowBasicModal(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="filled"
                        onClick={() => setShowBasicModal(false)}
                      >
                        Confirm
                      </Button>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </div>

          {/* Nested Tabs for React / Next */}
          <TabsContainer value={nestedTabs.basic}>
            <TabList
              onChange={(val) => handleNestedTabChanges("basic", val)}
              ariaLabel="React and Next tabs"
              className="border-b border-gray-200 mb-4"
              box
            >
              <Tab
                label="React"
                value="react"
                selectedTabValue={nestedTabs.basic}
                onChange={(val) => handleNestedTabChanges("basic", val)}
              />
              <Tab
                label="Next"
                value="next"
                selectedTabValue={nestedTabs.basic}
                onChange={(val) => handleNestedTabChanges("basic", val)}
              />
            </TabList>

            <TabPanel value="react" currentValue={nestedTabs.basic}>
              <CodeSnippet
                title="Basic Modal Usage"
                code={`import { useState } from "react";
import { Modal, Button } from "@atomos_tech/genesis";
import { RiInformationLine } from "@remixicon/react";

const ModalExample = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {/* Basic Modal Trigger */}
      <Button onClick={() => setShowModal(true)}>
        Basic Modal
      </Button>

      {/* Basic Modal */}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        closeModal={true}
        closeOnOutsideClick={true}
        width="60%"
      >
        <div className="max-w-[500px] mx-auto p-6">
          <div className="text-center">
            <RiInformationLine size={48} className="mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Basic Modal Example</h3>
            <p className="text-gray-600 mb-6">
              This is a basic modal with close functionality.
            </p>
            <div className="flex gap-3 justify-center">
              <Button variant="outlined" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button variant="filled" onClick={() => setShowModal(false)}>
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};`}
              />
            </TabPanel>

            <TabPanel value="next" currentValue={nestedTabs.basic}>
              <CodeSnippet
                title="Basic Modal Usage"
                code={`"use client";
import { useState } from "react";
import { Modal, Button } from "@atomos_tech/genesis";
import { RiInformationLine } from "@remixicon/react";

const ModalExample = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {/* Basic Modal Trigger */}
      <Button onClick={() => setShowModal(true)}>
        Basic Modal
      </Button>

      {/* Basic Modal */}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        closeModal={true}
        closeOnOutsideClick={true}
        width="60%"
      >
        <div className="max-w-[500px] mx-auto p-6">
          <div className="text-center">
            <RiInformationLine size={48} className="mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Basic Modal Example</h3>
            <p className="text-gray-600 mb-6">
              This is a basic modal with close functionality.
            </p>
            <div className="flex gap-3 justify-center">
              <Button variant="outlined" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button variant="filled" onClick={() => setShowModal(false)}>
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};`}
              />
            </TabPanel>
          </TabsContainer>
        </section>

        {/* Advanced Usage Section */}
        <section className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Advanced Features
          </h2>

          {/* Form Modal Example */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Form Modal
            </h3>
            <div className="flex gap-4 flex-wrap items-center p-4 bg-gray-50 rounded-lg">
              <Button onClick={() => setShowFormModal(true)}>Form Modal</Button>
              <Modal
                showModal={showFormModal}
                setShowModal={setShowFormModal}
                closeModal={true}
                closeOnOutsideClick={true}
                width="50%"
              >
                <div className="max-w-[700px] mx-auto">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Create New Project
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Fill in the details to create a new project.
                  </p>

                  <form className="space-y-4">
                    <div className="space-y-1">
                      <Label required>Project Name</Label>
                      <Input type="text" placeholder="Enter project name" />
                    </div>

                    <div className="space-y-1">
                      <Label>Description</Label>
                      <Textarea
                        placeholder="Enter project description"
                        rows={4}
                        className="w-full"
                      />
                      <HelperText size="sm">Enter you description</HelperText>
                    </div>

                    <div className="flex gap-3 justify-end mt-6">
                      <Button
                        variant="outlined"
                        onClick={() => setShowFormModal(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="filled"
                        startIcon={
                          <RiCheckboxCircleLine size={16} className="mr-2" />
                        }
                        onClick={() => setShowFormModal(false)}
                      >
                        Create Project
                      </Button>
                    </div>
                  </form>
                </div>
              </Modal>
            </div>
          </div>

          {/* Close Behavior Examples */}
          {/* <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Close Behaviors
          </h3>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <RiCloseLine size={16} className="text-gray-400" />
                <span>
                  <strong>Close Button:</strong> Visible when{" "}
                  <code>closeModal=true</code>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <RiFocusLine size={16} className="text-gray-400" />
                <span>
                  <strong>Outside Click:</strong> Closes modal when{" "}
                  <code>closeOnOutsideClick=true</code>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-gray-200 rounded text-xs flex items-center justify-center">
                  ESC
                </span>
                <span>
                  <strong>ESC Key:</strong> Always available for accessibility
                </span>
              </div>
            </div>
          </div>
        </div> */}

          <TabsContainer value={nestedTabs.advanced}>
            <TabList
              onChange={(val) => handleNestedTabChanges("advanced", val)}
              ariaLabel="React and Next tabs"
              className="border-b border-gray-200 mb-4"
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
                title="Advanced Modal Features"
                code={`import { useState } from "react";
import { Modal, Button } from "@atomos_tech/genesis";
import { RiCheckboxCircleLine } from "@remixicon/react";

const AdvancedModalExample = () => {
  const [showFormModal, setShowFormModal] = useState(false);

  return (
    <div className="space-y-4">
      {/* Form Modal */}
      <Button onClick={() => setShowFormModal(true)}>
        Form Modal
      </Button>

      <Modal
        showModal={showFormModal}
        setShowModal={setShowFormModal}
        closeModal={true}
        closeOnOutsideClick={true}
        width="50%"
      >
        <div className="max-w-[700px] mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Create New Project</h3>
          <p className="text-gray-600 mb-6">Fill in the project details.</p>
          
          <form className="space-y-4">
             <div className="space-y-1">
              <Label required>Project Name</Label>
              <Input type="text" placeholder="Enter project name" />
            </div>
            
             <div className="space-y-1">
               <Label>Description</Label>
                <Textarea
                  placeholder="Enter project description"
                  rows={4}
                  className="w-full"
                />
            </div>

          <div className="flex gap-3 justify-end mt-6">
            <Button variant="outlined" onClick={() => setShowFormModal(false)}>
              Cancel
            </Button>
            <Button variant="filled" onClick={() => setShowFormModal(false)}>
              <RiCheckboxCircleLine size={16} className="mr-2" />
              Create Project
            </Button>
          </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};`}
              />
            </TabPanel>

            <TabPanel value="next" currentValue={nestedTabs.advanced}>
              <CodeSnippet
                title="Advanced Modal Features"
                code={`"use client";
import { useState } from "react";
import { Modal, Button } from "@atomos_tech/genesis";
import { RiCheckboxCircleLine } from "@remixicon/react";

const AdvancedModalExample = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);

  return (
    <div className="space-y-4">
      {/* Form Modal */}
      <Button onClick={() => setShowFormModal(true)}>
        Form Modal
      </Button>

      <Modal
        showModal={showFormModal}
        setShowModal={setShowFormModal}
        closeModal={true}
        closeOnOutsideClick={true}
        width="50%"
      >
        <div className="max-w-[700px] mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Create New Project</h3>
          <p className="text-gray-600 mb-6">Fill in the project details.</p>
          
          <form className="space-y-4">
             <div className="space-y-1">
              <Label required>Project Name</Label>
              <Input type="text" placeholder="Enter project name" />
            </div>
            
             <div className="space-y-1">
              <Label>Description</Label>
              <Textarea
                placeholder="Enter project description"
                rows={4}
                className="w-full"
              />
            </div>

          <div className="flex gap-3 justify-end mt-6">
            <Button variant="outlined" onClick={() => setShowFormModal(false)}>
              Cancel
            </Button>
            <Button variant="filled" onClick={() => setShowFormModal(false)}>
              <RiCheckboxCircleLine size={16} className="mr-2" />
              Create Project
            </Button>
          </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};`}
              />
            </TabPanel>
          </TabsContainer>
        </section>
      </div>

      {/* Additional Information Section */}
      <div className="bg-primary-50 border-l-4 border-primary-400 p-5 rounded-lg shadow-sm mt-4">
        <div className="flex items-center mb-3">
          <div className="bg-primary-200 p-0.5 rounded-full mr-2.5">
            <svg
              className="w-5 h-5 text-primary-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 12h2v2H9v-2zm0-8h2v6H9V4z" />
            </svg>
          </div>
          <h3 className="text-base font-semibold text-primary-800">
            Using Components Inside Modals
          </h3>
        </div>
        <div className="text-sm text-primary-700 space-y-2">
          <p>
            The <span className="font-medium">Modal</span> component works
            seamlessly with other components in the design system. You can
            include{" "}
            <span className="font-medium">
              inputs, buttons, labels, tooltips, forms
            </span>
            , and various other interactive elements to create rich, contextual
            experiences.
          </p>
          <p>
            Modals are ideal for tasks that require user focus, such as
            <span className="font-medium">forms, confirmations</span>, or
            <span className="font-medium">quick actions</span>. By combining
            multiple components inside a modal, you can guide users through
            workflows without navigating away from the current page.
          </p>
          <p>
            This flexibility allows you to build consistent, reusable UI
            patterns across your application while maintaining a clean and
            accessible design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalExampleSection;
