"use client";

import React, { useState } from "react";
import { TabsContainer, TabList, Tab, TabPanel } from "@atomos_tech/genesis";
import NormalInput from "./NormalInput";
import TextInputLabel from "./TextInputLabel";
import OtpInputComponent from "./OtpInputField";

const InputExampleSection = () => {
  const [value, setValue] = useState("1");

  const handleTabChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabsContainer value={value}>
      <TabList
        onChange={handleTabChange}
        ariaLabel="Input component examples"
        box={false}
      >
        <Tab
          label="Normal Input"
          value="1"
          onChange={handleTabChange}
          selectedTabValue={value}
        />
        <Tab
          label="Text Input with Label"
          value="2"
          onChange={handleTabChange}
          selectedTabValue={value}
        />
        <Tab
          label="OTP Input"
          value="3"
          onChange={handleTabChange}
          selectedTabValue={value}
        />
      </TabList>

      <TabPanel value="1" currentValue={value}>
        <NormalInput />
      </TabPanel>

      <TabPanel value="2" currentValue={value}>
        <TextInputLabel />
      </TabPanel>

      <TabPanel value="3" currentValue={value}>
        <OtpInputComponent />
      </TabPanel>
    </TabsContainer>
  );
};

export default InputExampleSection;
