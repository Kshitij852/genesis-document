"use client";

import React, { useState } from "react";
import {
  Stepper,
  Button,
  TabsContainer,
  TabList,
  Tab,
  TabPanel,
} from "@atomos_tech/genesis";
import CodeSnippet from "../../button/_components/CodeSnippet";

const StepperExampleSection = () => {
  const [nestedTabs, setNestedTabs] = useState({
    horizontal: "react",
    vertical: "react",
  });

  // Example steps configuration
  const stepsConfig = [
    {
      name: "Step Name One",
      helperName: "step1",
      Component: () => (
        <div className="py-3 font-bold text-2xl">Step 1 Component</div>
      ),
    },
    {
      name: "Step Name Two",
      helperName: "step2",
      Component: () => (
        <div className="py-3 font-bold text-2xl">
          Step 2 Component with more content
        </div>
      ),
    },
    {
      name: "Step Name Three",
      helperName: "step3",
      Component: () => (
        <div className="py-3 font-bold text-2xl">Step 3 Component</div>
      ),
    },
    {
      name: "Step Name Four",
      helperName: "step4",
      Component: () => (
        <div className="py-3 font-bold text-2xl">Step 4 Component</div>
      ),
    },
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleNestedTabChanges = (section: string, value: string) => {
    setNestedTabs((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <div className="space-y-8 my-6">
      {/* Horizontal Stepper Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Horizontal Stepper
        </h2>

        {/* Horizontal Stepper Example */}
        <div className="mb-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <Stepper
              stepsConfig={stepsConfig}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              isComplete={isComplete}
              setIsComplete={setIsComplete}
              position="horizontal"
            />
            <section className="my-5 flex justify-end items-center gap-4">
              <Button
                variant="outlined"
                onClick={handlePrev}
                disabled={currentStep === 1}
              >
                Prev
              </Button>
              <Button variant="filled" onClick={handleNext}>
                {currentStep === stepsConfig.length ? "Finish" : "Next"}
              </Button>
            </section>
          </div>
        </div>

        {/* Horizontal Stepper Code */}
        <TabsContainer value={nestedTabs.horizontal}>
          <TabList
            onChange={(val) => handleNestedTabChanges("horizontal", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.horizontal}
              onChange={(val) => handleNestedTabChanges("horizontal", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.horizontal}
              onChange={(val) => handleNestedTabChanges("horizontal", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.horizontal}>
            <CodeSnippet
              title="Horizontal Stepper Implementation"
              code={`import { useState } from "react";
import { Stepper, Button } from "@atomos_tech/genesis";

const HorizontalStepperExample = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const stepsConfig = [
    {
      name: "Step Name One",
      helperName: "step1",
      Component: () => <div>Step 1 Component</div>,
    },
    {
      name: "Step Name Two",
      helperName: "step2",
      Component: () => <div>Step 2 Component</div>,
    },
    {
      name: "Step Name Three",
      helperName: "step3",
      Component: () => <div>Step 3 Component</div>,
    },
    {
      name: "Step Name Four",
      helperName: "step4",
      Component: () => <div>Step 4 Component</div>,
    },
  ];

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="mx-auto w-full">
      <Stepper
        stepsConfig={stepsConfig}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        isComplete={isComplete}
        setIsComplete={setIsComplete}
        position="horizontal"
      />
      <section className="my-5 flex justify-end items-center gap-4">
        <Button
          variant="outlined"
          onClick={handlePrev}
          disabled={currentStep === 1}
        >
          Prev
        </Button>
        <Button variant="filled" onClick={handleNext}>
          {currentStep === stepsConfig.length ? "Finish" : "Next"}
        </Button>
      </section>
    </div>
  );
};`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.horizontal}>
            <CodeSnippet
              title="Horizontal Stepper Implementation"
              code={`"use client";
import { useState } from "react";
import { Stepper, Button } from "@atomos_tech/genesis";

const HorizontalStepperExample = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const stepsConfig = [
    {
      name: "Step Name One",
      helperName: "step1",
      Component: () => <div>Step 1 Component</div>,
    },
    {
      name: "Step Name Two",
      helperName: "step2",
      Component: () => <div>Step 2 Component</div>,
    },
    {
      name: "Step Name Three",
      helperName: "step3",
      Component: () => <div>Step 3 Component</div>,
    },
    {
      name: "Step Name Four",
      helperName: "step4",
      Component: () => <div>Step 4 Component</div>,
    },
  ];

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="mx-auto w-full">
      <Stepper
        stepsConfig={stepsConfig}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        isComplete={isComplete}
        setIsComplete={setIsComplete}
        position="horizontal"
      />
     
      <section className="my-5 flex justify-end items-center gap-4">
        <Button
          variant="outlined"
          onClick={handlePrev}
          disabled={currentStep === 1}
        >
          Prev
        </Button>
        <Button variant="filled" onClick={handleNext}>
          {currentStep === stepsConfig.length ? "Finish" : "Next"}
        </Button>
      </section>
    </div>
  );
};`}
            />
          </TabPanel>
        </TabsContainer>
      </section>

      {/* Vertical Stepper Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-5">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Vertical Stepper
        </h2>

        {/* Vertical Stepper Example */}
        <div className="mb-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div>
              <Stepper
                stepsConfig={stepsConfig}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                isComplete={isComplete}
                setIsComplete={setIsComplete}
                position="vertical"
              />

              <section className="my-5 flex justify-end items-center gap-4">
                <Button
                  variant="outlined"
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                >
                  Prev
                </Button>
                <Button variant="filled" onClick={handleNext}>
                  {currentStep === stepsConfig.length ? "Finish" : "Next"}
                </Button>
              </section>
            </div>
          </div>
        </div>

        {/* Vertical Stepper Code */}
        <TabsContainer value={nestedTabs.vertical}>
          <TabList
            onChange={(val) => handleNestedTabChanges("vertical", val)}
            ariaLabel="React and Next tabs"
            className="border-b border-gray-200 mb-4"
            box
          >
            <Tab
              label="React"
              value="react"
              selectedTabValue={nestedTabs.vertical}
              onChange={(val) => handleNestedTabChanges("vertical", val)}
            />
            <Tab
              label="Next"
              value="next"
              selectedTabValue={nestedTabs.vertical}
              onChange={(val) => handleNestedTabChanges("vertical", val)}
            />
          </TabList>

          <TabPanel value="react" currentValue={nestedTabs.vertical}>
            <CodeSnippet
              title="Vertical Stepper Implementation"
              code={`import { useState } from "react";
import { Stepper, Button } from "@atomos_tech/genesis";

const VerticalStepperExample = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const stepsConfig = [
    {
      name: "Step Name One",
      helperName: "step1",
      Component: () => <div>Step 1 Component</div>,
    },
    {
      name: "Step Name Two",
      helperName: "step2",
      Component: () => <div>Step 2 Component</div>,
    },
    {
      name: "Step Name Three",
      helperName: "step3",
      Component: () => <div>Step 3 Component</div>,
    },
    {
      name: "Step Name Four",
      helperName: "step4",
      Component: () => <div>Step 4 Component</div>,
    },
  ];

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="w-[50%] mx-auto">
      <Stepper
        stepsConfig={stepsConfig}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        isComplete={isComplete}
        setIsComplete={setIsComplete}
        position="vertical"
      />
      <section className="my-5 flex justify-end items-center gap-4">
        <Button
          variant="outlined"
          onClick={handlePrev}
          disabled={currentStep === 1}
        >
          Prev
        </Button>
        <Button variant="filled" onClick={handleNext}>
          {currentStep === stepsConfig.length ? "Finish" : "Next"}
        </Button>
      </section>
    </div>
  );
};`}
            />
          </TabPanel>

          <TabPanel value="next" currentValue={nestedTabs.vertical}>
            <CodeSnippet
              title="Vertical Stepper Implementation"
              code={`"use client";
import { useState } from "react";
import { Stepper, Button } from "@atomos_tech/genesis";

const VerticalStepperExample = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const stepsConfig = [
    {
      name: "Step Name One",
      helperName: "step1",
      Component: () => <div>Step 1 Component</div>,
    },
    {
      name: "Step Name Two",
      helperName: "step2",
      Component: () => <div>Step 2 Component</div>,
    },
    {
      name: "Step Name Three",
      helperName: "step3",
      Component: () => <div>Step 3 Component</div>,
    },
    {
      name: "Step Name Four",
      helperName: "step4",
      Component: () => <div>Step 4 Component</div>,
    },
  ];

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="w-[50%] mx-auto">
      <Stepper
        stepsConfig={stepsConfig}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        isComplete={isComplete}
        setIsComplete={setIsComplete}
        position="vertical"
      />
      <section className="my-5 flex justify-end items-center gap-4">
        <Button
          variant="outlined"
          onClick={handlePrev}
          disabled={currentStep === 1}
        >
          Prev
        </Button>
        <Button variant="filled" onClick={handleNext}>
          {currentStep === stepsConfig.length ? "Finish" : "Next"}
        </Button>
      </section>
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

export default StepperExampleSection;
