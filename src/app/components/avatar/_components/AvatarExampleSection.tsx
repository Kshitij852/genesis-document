import {
  Avatar,
  AvatarGroup,
  Tab,
  TabList,
  TabPanel,
  TabsContainer,
} from "@atomos_tech/genesis";
import {
  RiCheckLine,
  RiCircleFill,
  RiLogoutBoxRLine,
  RiTimeFill,
} from "@remixicon/react";
import React, { useState } from "react";

import CodeSnippet from "../../button/_components/CodeSnippet";

const AvatarExampleSection = () => {
  // tabs
  const [value, setValue] = useState("1");

  const handleTabChange = (newValue: string) => {
    setValue(newValue);
  };
  const ImageSrc =
    "https://m.media-amazon.com/images/I/712tQUrusKL._AC_UF894,1000_QL80_.jpg";
  const ImageSrc3 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQctq1xt7gJIlOAG90VKtVQ-LGIPx6jNWuWAg&s";
  const ImageSrc4 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQ30RFd35WEUeLj-mINsjsdqDVE4rMLnK2g&s";
  const ImageSrc5 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1juoQ3LY61pRYsvApuy9dT6dK4aAZEhh1w&s";

  const ImageSrc2 =
    "https://i.pinimg.com/736x/e9/f6/36/e9f63675fa85770c13c3d726f3313a37.jpg";

  return (
    <div>
      {/* Avatar */}
      <section className="my-10 space-y-2">
        <h1 className="text-display-sm text-primary-600">Avatar:</h1>
        <div className="flex items-center gap-5">
          <Avatar
            type="text"
            size="sm"
            className="border border-gray-300 rounded-full"
            text="RV"
          />
          <Avatar
            border
            borderColor="var(--primary-500)"
            className="bg-primary-50"
            borderWidth="2px"
            rounded
            type="text"
            size="md"
            disabled
            text="Riya Vishwakarma"
          />
          <Avatar border rounded type="text" size="lg" text="RV" />
          <Avatar
            border
            rounded
            type="icon"
            size="sm"
            className="text-gray-600"
            icon={<RiLogoutBoxRLine size={14} />}
          />
          <Avatar
            type="image"
            size="sm"
            src={ImageSrc3}
            alt="avatar"
            rounded
            statusIcon={
              <RiTimeFill
                size={14}
                className="text-warning-400 bg-white rounded-full"
              />
            }
            statusPosition="bottom-right"
          />
          <Avatar
            type="image"
            size="md"
            border
            rounded
            onClick={() => alert("clicked")}
            borderWidth="2px"
            src={ImageSrc3}
            className="cursor-pointer"
            borderColor="var(--success-500)"
            alt="avatar"
            statusIcon={
              <RiCheckLine
                size={16}
                className="bg-success-500 rounded-full text-white"
              />
            }
            statusPosition="bottom-right"
          />
          <Avatar
            src={ImageSrc3}
            type="image"
            size="lg"
            rounded
            border
            borderColor="var(--error-300)"
            borderWidth="2px"
            alt="avatar"
            statusIcon={
              <RiCircleFill size={18} className="text-error-500 rounded-full" />
            }
            statusPosition="bottom-right"
          />
        </div>
        <h1 className="text-display-sm text-primary-600">
          Avatar Positions/Size:
        </h1>
        <div className="flex items-center gap-5">
          <h2 className="text-display-sm text-primary-600">Avatar Small:</h2>
          <Avatar
            type="text"
            text="AV"
            border
            borderColor="var(--primary-500)"
            borderWidth="2px"
            size="sm"
            rounded
            statusIcon={
              <RiTimeFill
                size={14}
                className="text-warning-400 bg-white rounded-full"
              />
            }
            statusPosition="bottom-right"
          />
          <Avatar
            type="icon"
            size="sm"
            icon={<RiCheckLine />}
            border
            rounded
            onClick={() => alert("clicked")}
            borderWidth="2px"
            className="cursor-pointer"
            borderColor="var(--success-500)"
            statusIcon={
              <RiCheckLine
                size={14}
                className="bg-success-500 rounded-full text-white"
              />
            }
            statusPosition="top-right"
          />
          <Avatar
            type="text"
            text="AV"
            border
            borderColor="var(--primary-500)"
            borderWidth="2px"
            size="sm"
            rounded
            statusIcon={
              <RiTimeFill
                size={14}
                className="text-warning-400 bg-white rounded-full"
              />
            }
            statusPosition="bottom-left"
          />
          <Avatar
            type="text"
            text="AV"
            border
            borderColor="var(--primary-500)"
            borderWidth="2px"
            size="sm"
            rounded
            statusIcon={
              <RiTimeFill
                size={14}
                className="text-warning-400 bg-white rounded-full"
              />
            }
            statusPosition="top-left"
          />
          <Avatar
            src={ImageSrc4}
            type="image"
            size="sm"
            rounded
            border
            borderColor="var(--error-300)"
            borderWidth="2px"
            alt="avatar"
            statusIcon={
              <RiCircleFill size={14} className="text-error-500 rounded-full" />
            }
            statusPosition="bottom-left"
          />
          <Avatar
            src={ImageSrc4}
            type="image"
            size="sm"
            rounded
            border
            borderColor="var(--error-300)"
            borderWidth="2px"
            alt="avatar"
            statusIcon={
              <RiCircleFill size={14} className="text-error-500 rounded-full" />
            }
            statusPosition="top-left"
          />
          <Avatar
            src={ImageSrc4}
            type="image"
            size="sm"
            rounded
            border
            borderColor="var(--error-300)"
            borderWidth="2px"
            alt="avatar"
            statusIcon={
              <RiCircleFill size={14} className="text-error-500 rounded-full" />
            }
            statusPosition="bottom-right"
          />
          <Avatar
            src={ImageSrc4}
            type="image"
            size="sm"
            rounded
            border
            borderColor="var(--error-300)"
            borderWidth="2px"
            alt="avatar"
            statusIcon={
              <RiCircleFill size={14} className="text-error-500 rounded-full" />
            }
            statusPosition="top-right"
          />
        </div>
        <div className="flex items-center gap-5">
          <h2 className="text-display-sm text-primary-600">Avatar Medium:</h2>
          <Avatar
            type="text"
            text="AV"
            border
            borderColor="var(--primary-500)"
            borderWidth="2px"
            size="md"
            rounded
            statusIcon={
              <RiTimeFill
                size={16}
                className="text-warning-400 bg-white rounded-full"
              />
            }
            statusPosition="bottom-right"
          />
          <Avatar
            type="icon"
            size="md"
            icon={<RiCheckLine />}
            border
            rounded
            onClick={() => alert("clicked")}
            borderWidth="2px"
            className="cursor-pointer"
            borderColor="var(--success-500)"
            statusIcon={
              <RiCheckLine
                size={16}
                className="bg-success-500 rounded-full text-white"
              />
            }
            statusPosition="top-right"
          />
          <Avatar
            type="text"
            text="AV"
            border
            borderColor="var(--primary-500)"
            borderWidth="2px"
            size="md"
            rounded
            statusIcon={
              <RiTimeFill
                size={16}
                className="text-warning-400 bg-white rounded-full"
              />
            }
            statusPosition="bottom-left"
          />
          <Avatar
            type="text"
            text="AV"
            border
            borderColor="var(--primary-500)"
            borderWidth="2px"
            size="md"
            rounded
            statusIcon={
              <RiTimeFill
                size={16}
                className="text-warning-400 bg-white rounded-full"
              />
            }
            statusPosition="top-left"
          />
          <Avatar
            src={ImageSrc}
            type="image"
            size="md"
            rounded
            border
            borderColor="var(--error-300)"
            borderWidth="2px"
            alt="avatar"
            statusIcon={
              <RiCircleFill size={16} className="text-error-500 rounded-full" />
            }
            statusPosition="bottom-left"
          />
          <Avatar
            src={ImageSrc}
            type="image"
            size="md"
            rounded
            border
            borderColor="var(--error-300)"
            borderWidth="2px"
            alt="avatar"
            statusIcon={
              <RiCircleFill size={16} className="text-error-500 rounded-full" />
            }
            statusPosition="bottom-right"
          />
          <Avatar
            src={ImageSrc}
            type="image"
            size="md"
            rounded
            border
            borderColor="var(--error-300)"
            borderWidth="2px"
            alt="avatar"
            statusIcon={
              <RiCircleFill size={16} className="text-error-500 rounded-full" />
            }
            statusPosition="top-left"
          />
          <Avatar
            src={ImageSrc}
            type="image"
            size="md"
            rounded
            border
            borderColor="var(--error-300)"
            borderWidth="2px"
            alt="avatar"
            statusIcon={
              <RiCircleFill size={16} className="text-error-500 rounded-full" />
            }
            statusPosition="top-right"
          />
        </div>
        <div className="flex items-center gap-5">
          <h2 className="text-display-sm text-primary-600">Avatar Large:</h2>
          <Avatar
            type="icon"
            size="lg"
            icon={<RiCheckLine />}
            border
            rounded
            onClick={() => alert("clicked")}
            borderWidth="2px"
            className="cursor-pointer"
            borderColor="var(--success-500)"
            statusIcon={
              <RiCheckLine
                size={18}
                className="bg-success-500 rounded-full text-white"
              />
            }
            statusPosition="bottom-right"
          />
          <Avatar
            type="icon"
            size="lg"
            icon={<RiCheckLine />}
            border
            rounded
            onClick={() => alert("clicked")}
            borderWidth="2px"
            className="cursor-pointer"
            borderColor="var(--success-500)"
            statusIcon={
              <RiCheckLine
                size={18}
                className="bg-success-500 rounded-full text-white"
              />
            }
            statusPosition="top-right"
          />
          <Avatar
            type="text"
            text="AV"
            border
            borderColor="var(--primary-500)"
            borderWidth="2px"
            size="lg"
            rounded
            statusIcon={
              <RiTimeFill
                size={18}
                className="text-warning-400 bg-white rounded-full"
              />
            }
            statusPosition="bottom-left"
          />
          <Avatar
            type="text"
            text="AV"
            border
            borderColor="var(--primary-500)"
            borderWidth="2px"
            size="lg"
            rounded
            statusIcon={
              <RiTimeFill
                size={18}
                className="text-warning-400 bg-white rounded-full"
              />
            }
            statusPosition="top-left"
          />
          <Avatar
            src={ImageSrc5}
            type="image"
            size="lg"
            rounded
            border
            borderColor="var(--error-300)"
            borderWidth="2px"
            alt="avatar"
            statusIcon={
              <RiCircleFill size={18} className="text-error-500 rounded-full" />
            }
            statusPosition="bottom-left"
          />
          <Avatar
            src={ImageSrc5}
            type="image"
            size="lg"
            rounded
            border
            borderColor="var(--error-300)"
            borderWidth="2px"
            alt="avatar"
            statusIcon={
              <RiCircleFill size={18} className="text-error-500 rounded-full" />
            }
            statusPosition="bottom-right"
          />
          <Avatar
            src={ImageSrc5}
            type="image"
            size="lg"
            rounded
            border
            borderColor="var(--error-300)"
            borderWidth="2px"
            alt="avatar"
            statusIcon={
              <RiCircleFill size={18} className="text-error-500 rounded-full" />
            }
            statusPosition="top-left"
          />
          <Avatar
            src={ImageSrc5}
            type="image"
            size="lg"
            rounded
            border
            borderColor="var(--error-300)"
            borderWidth="2px"
            alt="avatar"
            statusIcon={
              <RiCircleFill size={18} className="text-error-500 rounded-full" />
            }
            statusPosition="top-right"
          />
        </div>
        <AvatarGroup
          avatars={[
            {
              type: "image",
              src: ImageSrc2,
              rounded: true,
              border: true,
              borderWidth: "2px",
              borderColor: "var(--primary-500)",
            },
            {
              type: "image",
              src: ImageSrc2,
              rounded: true,
              border: true,
              borderWidth: "2px",
              borderColor: "var(--primary-500)",
            },
            {
              type: "image",
              src: ImageSrc2,
              rounded: true,
              border: true,
              borderWidth: "2px",
              borderColor: "var(--primary-500)",
            },
            {
              type: "image",
              src: ImageSrc2,
              rounded: true,
              border: true,
              borderWidth: "2px",
              borderColor: "var(--primary-500)",
            },
            {
              type: "image",
              src: ImageSrc2,
              rounded: true,
              border: true,
              borderWidth: "2px",
              borderColor: "var(--primary-500)",
            },
            {
              type: "image",
              src: ImageSrc2,
              rounded: true,
              border: true,
              borderWidth: "2px",
              borderColor: "var(--primary-500)",
            },
          ]}
          size="md"
          max={4}
        />
      </section>

      <TabsContainer value={value}>
        <TabList
          onChange={handleTabChange}
          ariaLabel="React and Next tabs"
          className="border-b border-gray-200 mb-4"
          box
        >
          <Tab
            label="React"
            value="1"
            selectedTabValue={value}
            onChange={handleTabChange}
          />
          <Tab
            label="Next"
            value="2"
            selectedTabValue={value}
            onChange={handleTabChange}
          />
        </TabList>

        <TabPanel value="1" currentValue={value}>
          <CodeSnippet
            title="Avatar Example"
            code={`<h1 className="text-display-sm text-primary-600">Avatar:</h1>
<div className="flex items-center gap-5">
    <Avatar
        type="text"
        size="sm"
        className="border border-gray-300 rounded-full"
        text="RV"
    />
    <Avatar
        border
        borderColor="var(--primary-500)"
        className="bg-primary-50"
        borderWidth="2px"
        rounded
        type="text"
        size="md"
        disabled
        text="Riya Vishwakarma"
    />
    <Avatar border rounded type="text" size="lg" text="RV" />
    <Avatar
        border
        rounded
        type="icon"
        size="sm"
        className="text-gray-600"
        icon={<RiLogoutBoxRLine size={14} />}
    />
    <Avatar
        type="image"
        size="sm"
        src={ImageSrc}
        alt="avatar"
        rounded
        statusIcon={
            <RiTimeFill
            size={14}
            className="text-warning-400 bg-white rounded-full"
            />
        }
        statusPosition="bottom-right"
    />
    <Avatar
        type="image"
        size="md"
        border
        rounded
        onClick={() => alert("clicked")}
        borderWidth="2px"
        src={ImageSrc}
        className="cursor-pointer"
        borderColor="var(--success-500)"
        alt="avatar"
        statusIcon={
            <RiCheckLine
            size={16}
            className="bg-success-500 rounded-full text-white"
            />
        }
        statusPosition="bottom-right"
    />
    <Avatar
        src={ImageSrc}
        type="image"
        size="lg"
        rounded
        border
        borderColor="var(--error-300)"
        borderWidth="2px"
        alt="avatar"
        statusIcon={
            <RiCircleFill size={18} className="text-error-500 rounded-full" />
        }
        statusPosition="bottom-right"
    />
</div>


<h2 className="text-display-sm text-primary-600">Avatar Small:</h2>
    <Avatar
        type="text"
        text="AV"
        border
        borderColor="var(--primary-500)"
        borderWidth="2px"
        size="sm"
        rounded
        statusIcon={
            <RiTimeFill
            size={14}
            className="text-warning-400 bg-white rounded-full"
            />
        }
        statusPosition="bottom-right"
    />
    <Avatar
        type="icon"
        size="sm"
        icon={<RiCheckLine />}
        border
        rounded
        onClick={() => alert("clicked")}
        borderWidth="2px"
        className="cursor-pointer"
        borderColor="var(--success-500)"
        statusIcon={
            <RiCheckLine
            size={14}
            className="bg-success-500 rounded-full text-white"
            />
        }
        statusPosition="top-right"
    />
    <Avatar
        type="text"
        text="AV"
        border
        borderColor="var(--primary-500)"
        borderWidth="2px"
        size="sm"
        rounded
        statusIcon={
            <RiTimeFill
            size={14}
            className="text-warning-400 bg-white rounded-full"
            />
        }
        statusPosition="bottom-left"
    />
    <Avatar
        type="text"
        text="AV"
        border
        borderColor="var(--primary-500)"
        borderWidth="2px"
        size="sm"
        rounded
        statusIcon={
            <RiTimeFill
            size={14}
            className="text-warning-400 bg-white rounded-full"
            />
        }
        statusPosition="top-left"
    />
    <Avatar
        src={ImageSrc}
        type="image"
        size="sm"
        rounded
        border
        borderColor="var(--error-300)"
        borderWidth="2px"
        alt="avatar"
        statusIcon={
            <RiCircleFill size={14} className="text-error-500 rounded-full" />
        }
        statusPosition="bottom-left"
    />
    <Avatar
        src={ImageSrc}
        type="image"
        size="sm"
        rounded
        border
        borderColor="var(--error-300)"
        borderWidth="2px"
        alt="avatar"
        statusIcon={
            <RiCircleFill size={14} className="text-error-500 rounded-full" />
        }
        statusPosition="top-left"
    />
    <Avatar
        src={ImageSrc}
        type="image"
        size="sm"
        rounded
        border
        borderColor="var(--error-300)"
        borderWidth="2px"
        alt="avatar"
        statusIcon={
            <RiCircleFill size={14} className="text-error-500 rounded-full" />
        }
        statusPosition="bottom-right"
    />
    <Avatar
        src={ImageSrc}
        type="image"
        size="sm"
        rounded
        border
        borderColor="var(--error-300)"
        borderWidth="2px"
        alt="avatar"
        statusIcon={
            <RiCircleFill size={14} className="text-error-500 rounded-full" />
        }
        statusPosition="top-right"
    />


<div className="flex items-center gap-5">
<h2 className="text-display-sm text-primary-600">Avatar Medium:</h2>
    <Avatar
        type="text"
        text="AV"
        border
        borderColor="var(--primary-500)"
        borderWidth="2px"
        size="md"
        rounded
        statusIcon={
            <RiTimeFill
            size={16}
            className="text-warning-400 bg-white rounded-full"
            />
        }
        statusPosition="bottom-right"
    />
    <Avatar
        type="icon"
        size="md"
        icon={<RiCheckLine />}
        border
        rounded
        onClick={() => alert("clicked")}
        borderWidth="2px"
        className="cursor-pointer"
        borderColor="var(--success-500)"
        statusIcon={
            <RiCheckLine
            size={16}
            className="bg-success-500 rounded-full text-white"
            />
        }
        statusPosition="top-right"
    />
    <Avatar
        type="text"
        text="AV"
        border
        borderColor="var(--primary-500)"
        borderWidth="2px"
        size="md"
        rounded
        statusIcon={
            <RiTimeFill
            size={16}
            className="text-warning-400 bg-white rounded-full"
            />
        }
        statusPosition="bottom-left"
    />
    <Avatar
        type="text"
        text="AV"
        border
        borderColor="var(--primary-500)"
        borderWidth="2px"
        size="md"
        rounded
        statusIcon={
            <RiTimeFill
            size={16}
            className="text-warning-400 bg-white rounded-full"
            />
        }
        statusPosition="top-left"
    />
    <Avatar
        src={ImageSrc}
        type="image"
        size="md"
        rounded
        border
        borderColor="var(--error-300)"
        borderWidth="2px"
        alt="avatar"
        statusIcon={
            <RiCircleFill size={16} className="text-error-500 rounded-full" />
        }
        statusPosition="bottom-left"
    />
    <Avatar
        src={ImageSrc}
        type="image"
        size="md"
        rounded
        border
        borderColor="var(--error-300)"
        borderWidth="2px"
        alt="avatar"
        statusIcon={
            <RiCircleFill size={16} className="text-error-500 rounded-full" />
        }
        statusPosition="bottom-right"
    />
    <Avatar
        src={ImageSrc}
        type="image"
        size="md"
        rounded
        border
        borderColor="var(--error-300)"
        borderWidth="2px"
        alt="avatar"
        statusIcon={
            <RiCircleFill size={16} className="text-error-500 rounded-full" />
        }
        statusPosition="top-left"
    />
    <Avatar
        src={ImageSrc}
        type="image"
        size="md"
        rounded
        border
        borderColor="var(--error-300)"
        borderWidth="2px"
        alt="avatar"
        statusIcon={
            <RiCircleFill size={16} className="text-error-500 rounded-full" />
        }
        statusPosition="top-right"
    />
</div>


<div className="flex items-center gap-5">
<h2 className="text-display-sm text-primary-600">Avatar Large:</h2>
    <Avatar
        type="icon"
        size="lg"
        icon={<RiCheckLine />}
        border
        rounded
        onClick={() => alert("clicked")}
        borderWidth="2px"
        className="cursor-pointer"
        borderColor="var(--success-500)"
        statusIcon={
            <RiCheckLine
            size={18}
            className="bg-success-500 rounded-full text-white"
            />
        }
        statusPosition="bottom-right"
    />
    <Avatar
        type="icon"
        size="lg"
        icon={<RiCheckLine />}
        border
        rounded
        onClick={() => alert("clicked")}
        borderWidth="2px"
        className="cursor-pointer"
        borderColor="var(--success-500)"
        statusIcon={
            <RiCheckLine
            size={18}
            className="bg-success-500 rounded-full text-white"
            />
        }
        statusPosition="top-right"
    />
    <Avatar
        type="text"
        text="AV"
        border
        borderColor="var(--primary-500)"
        borderWidth="2px"
        size="lg"
        rounded
        statusIcon={
            <RiTimeFill
            size={18}
            className="text-warning-400 bg-white rounded-full"
            />
        }
        statusPosition="bottom-left"
    />
    <Avatar
        type="text"
        text="AV"
        border
        borderColor="var(--primary-500)"
        borderWidth="2px"
        size="lg"
        rounded
        statusIcon={
            <RiTimeFill
            size={18}
            className="text-warning-400 bg-white rounded-full"
            />
        }
        statusPosition="top-left"
    />
    <Avatar
        src={ImageSrc}
        type="image"
        size="lg"
        rounded
        border
        borderColor="var(--error-300)"
        borderWidth="2px"
        alt="avatar"
        statusIcon={
            <RiCircleFill size={18} className="text-error-500 rounded-full" />
        }
        statusPosition="bottom-left"
    />
    <Avatar
        src={ImageSrc}
        type="image"
        size="lg"
        rounded
        border
        borderColor="var(--error-300)"
        borderWidth="2px"
        alt="avatar"
        statusIcon={
            <RiCircleFill size={18} className="text-error-500 rounded-full" />
        }
        statusPosition="bottom-right"
    />
    <Avatar
        src={ImageSrc}
        type="image"
        size="lg"
        rounded
        border
        borderColor="var(--error-300)"
        borderWidth="2px"
        alt="avatar"
        statusIcon={
            <RiCircleFill size={18} className="text-error-500 rounded-full" />
        }
        statusPosition="top-left"
    />
    <Avatar
        src={ImageSrc}
        type="image"
        size="lg"
        rounded
        border
        borderColor="var(--error-300)"
        borderWidth="2px"
        alt="avatar"
        statusIcon={
            <RiCircleFill size={18} className="text-error-500 rounded-full" />
        }
        statusPosition="top-right"
    />
</div>

<AvatarGroup
    avatars={[
    {
        type: "image",
        src: ImageSrc2,
        rounded: true,
        border: true,
        borderWidth: "2px",
        borderColor: "var(--primary-500)",
    },
    {
        type: "image",
        src: ImageSrc2,
        rounded: true,
        border: true,
        borderWidth: "2px",
        borderColor: "var(--primary-500)",
    },
    {
        type: "image",
        src: ImageSrc2,
        rounded: true,
        border: true,
        borderWidth: "2px",
        borderColor: "var(--primary-500)",
    },
    {
        type: "image",
        src: ImageSrc2,
        rounded: true,
        border: true,
        borderWidth: "2px",
        borderColor: "var(--primary-500)",
    },
    {
        type: "image",
        src: ImageSrc2,
        rounded: true,
        border: true,
        borderWidth: "2px",
        borderColor: "var(--primary-500)",
    },
    {
        type: "image",
        src: ImageSrc2,
        rounded: true,
        border: true,
        borderWidth: "2px",
        borderColor: "var(--primary-500)",
    },
    ]}
    size="md"
    max={4}
/>
`}
          />
        </TabPanel>

        <TabPanel value="2" currentValue={value}>
          <CodeSnippet
            title="Accordion Single"
            code={`<h1 className="text-display-sm text-primary-600">Avatar:</h1>
<div className="flex items-center gap-5">
    <Avatar
        type="text"
        size="sm"
        className="border border-gray-300 rounded-full"
        text="RV"
    />
    <Avatar
        border
        borderColor="var(--primary-500)"
        className="bg-primary-50"
        borderWidth="2px"
        rounded
        type="text"
        size="md"
        disabled
        text="Riya Vishwakarma"
    />
    <Avatar border rounded type="text" size="lg" text="RV" />
    <Avatar
        border
        rounded
        type="icon"
        size="sm"
        className="text-gray-600"
        icon={<RiLogoutBoxRLine size={14} />}
    />
    <Avatar
        type="image"
        size="sm"
        src={ImageSrc}
        alt="avatar"
        rounded
        statusIcon={
            <RiTimeFill
            size={14}
            className="text-warning-400 bg-white rounded-full"
            />
        }
        statusPosition="bottom-right"
    />
    <Avatar
        type="image"
        size="md"
        border
        rounded
        onClick={() => alert("clicked")}
        borderWidth="2px"
        src={ImageSrc}
        className="cursor-pointer"
        borderColor="var(--success-500)"
        alt="avatar"
        statusIcon={
            <RiCheckLine
            size={16}
            className="bg-success-500 rounded-full text-white"
            />
        }
        statusPosition="bottom-right"
    />
    <Avatar
        src={ImageSrc}
        type="image"
        size="lg"
        rounded
        border
        borderColor="var(--error-300)"
        borderWidth="2px"
        alt="avatar"
        statusIcon={
            <RiCircleFill size={18} className="text-error-500 rounded-full" />
        }
        statusPosition="bottom-right"
    />
</div>


<h2 className="text-display-sm text-primary-600">Avatar Small:</h2>
    <Avatar
        type="text"
        text="AV"
        border
        borderColor="var(--primary-500)"
        borderWidth="2px"
        size="sm"
        rounded
        statusIcon={
            <RiTimeFill
            size={14}
            className="text-warning-400 bg-white rounded-full"
            />
        }
        statusPosition="bottom-right"
    />
    <Avatar
        type="icon"
        size="sm"
        icon={<RiCheckLine />}
        border
        rounded
        onClick={() => alert("clicked")}
        borderWidth="2px"
        className="cursor-pointer"
        borderColor="var(--success-500)"
        statusIcon={
            <RiCheckLine
            size={14}
            className="bg-success-500 rounded-full text-white"
            />
        }
        statusPosition="top-right"
    />
    <Avatar
        type="text"
        text="AV"
        border
        borderColor="var(--primary-500)"
        borderWidth="2px"
        size="sm"
        rounded
        statusIcon={
            <RiTimeFill
            size={14}
            className="text-warning-400 bg-white rounded-full"
            />
        }
        statusPosition="bottom-left"
    />
    <Avatar
        type="text"
        text="AV"
        border
        borderColor="var(--primary-500)"
        borderWidth="2px"
        size="sm"
        rounded
        statusIcon={
            <RiTimeFill
            size={14}
            className="text-warning-400 bg-white rounded-full"
            />
        }
        statusPosition="top-left"
    />
    <Avatar
        src={ImageSrc}
        type="image"
        size="sm"
        rounded
        border
        borderColor="var(--error-300)"
        borderWidth="2px"
        alt="avatar"
        statusIcon={
            <RiCircleFill size={14} className="text-error-500 rounded-full" />
        }
        statusPosition="bottom-left"
    />
    <Avatar
        src={ImageSrc}
        type="image"
        size="sm"
        rounded
        border
        borderColor="var(--error-300)"
        borderWidth="2px"
        alt="avatar"
        statusIcon={
            <RiCircleFill size={14} className="text-error-500 rounded-full" />
        }
        statusPosition="top-left"
    />
    <Avatar
        src={ImageSrc}
        type="image"
        size="sm"
        rounded
        border
        borderColor="var(--error-300)"
        borderWidth="2px"
        alt="avatar"
        statusIcon={
            <RiCircleFill size={14} className="text-error-500 rounded-full" />
        }
        statusPosition="bottom-right"
    />
    <Avatar
        src={ImageSrc}
        type="image"
        size="sm"
        rounded
        border
        borderColor="var(--error-300)"
        borderWidth="2px"
        alt="avatar"
        statusIcon={
            <RiCircleFill size={14} className="text-error-500 rounded-full" />
        }
        statusPosition="top-right"
    />


<div className="flex items-center gap-5">
<h2 className="text-display-sm text-primary-600">Avatar Medium:</h2>
    <Avatar
        type="text"
        text="AV"
        border
        borderColor="var(--primary-500)"
        borderWidth="2px"
        size="md"
        rounded
        statusIcon={
            <RiTimeFill
            size={16}
            className="text-warning-400 bg-white rounded-full"
            />
        }
        statusPosition="bottom-right"
    />
    <Avatar
        type="icon"
        size="md"
        icon={<RiCheckLine />}
        border
        rounded
        onClick={() => alert("clicked")}
        borderWidth="2px"
        className="cursor-pointer"
        borderColor="var(--success-500)"
        statusIcon={
            <RiCheckLine
            size={16}
            className="bg-success-500 rounded-full text-white"
            />
        }
        statusPosition="top-right"
    />
    <Avatar
        type="text"
        text="AV"
        border
        borderColor="var(--primary-500)"
        borderWidth="2px"
        size="md"
        rounded
        statusIcon={
            <RiTimeFill
            size={16}
            className="text-warning-400 bg-white rounded-full"
            />
        }
        statusPosition="bottom-left"
    />
    <Avatar
        type="text"
        text="AV"
        border
        borderColor="var(--primary-500)"
        borderWidth="2px"
        size="md"
        rounded
        statusIcon={
            <RiTimeFill
            size={16}
            className="text-warning-400 bg-white rounded-full"
            />
        }
        statusPosition="top-left"
    />
    <Avatar
        src={ImageSrc}
        type="image"
        size="md"
        rounded
        border
        borderColor="var(--error-300)"
        borderWidth="2px"
        alt="avatar"
        statusIcon={
            <RiCircleFill size={16} className="text-error-500 rounded-full" />
        }
        statusPosition="bottom-left"
    />
    <Avatar
        src={ImageSrc}
        type="image"
        size="md"
        rounded
        border
        borderColor="var(--error-300)"
        borderWidth="2px"
        alt="avatar"
        statusIcon={
            <RiCircleFill size={16} className="text-error-500 rounded-full" />
        }
        statusPosition="bottom-right"
    />
    <Avatar
        src={ImageSrc}
        type="image"
        size="md"
        rounded
        border
        borderColor="var(--error-300)"
        borderWidth="2px"
        alt="avatar"
        statusIcon={
            <RiCircleFill size={16} className="text-error-500 rounded-full" />
        }
        statusPosition="top-left"
    />
    <Avatar
        src={ImageSrc}
        type="image"
        size="md"
        rounded
        border
        borderColor="var(--error-300)"
        borderWidth="2px"
        alt="avatar"
        statusIcon={
            <RiCircleFill size={16} className="text-error-500 rounded-full" />
        }
        statusPosition="top-right"
    />
</div>


<div className="flex items-center gap-5">
<h2 className="text-display-sm text-primary-600">Avatar Large:</h2>
    <Avatar
        type="icon"
        size="lg"
        icon={<RiCheckLine />}
        border
        rounded
        onClick={() => alert("clicked")}
        borderWidth="2px"
        className="cursor-pointer"
        borderColor="var(--success-500)"
        statusIcon={
            <RiCheckLine
            size={18}
            className="bg-success-500 rounded-full text-white"
            />
        }
        statusPosition="bottom-right"
    />
    <Avatar
        type="icon"
        size="lg"
        icon={<RiCheckLine />}
        border
        rounded
        onClick={() => alert("clicked")}
        borderWidth="2px"
        className="cursor-pointer"
        borderColor="var(--success-500)"
        statusIcon={
            <RiCheckLine
            size={18}
            className="bg-success-500 rounded-full text-white"
            />
        }
        statusPosition="top-right"
    />
    <Avatar
        type="text"
        text="AV"
        border
        borderColor="var(--primary-500)"
        borderWidth="2px"
        size="lg"
        rounded
        statusIcon={
            <RiTimeFill
            size={18}
            className="text-warning-400 bg-white rounded-full"
            />
        }
        statusPosition="bottom-left"
    />
    <Avatar
        type="text"
        text="AV"
        border
        borderColor="var(--primary-500)"
        borderWidth="2px"
        size="lg"
        rounded
        statusIcon={
            <RiTimeFill
            size={18}
            className="text-warning-400 bg-white rounded-full"
            />
        }
        statusPosition="top-left"
    />
    <Avatar
        src={ImageSrc}
        type="image"
        size="lg"
        rounded
        border
        borderColor="var(--error-300)"
        borderWidth="2px"
        alt="avatar"
        statusIcon={
            <RiCircleFill size={18} className="text-error-500 rounded-full" />
        }
        statusPosition="bottom-left"
    />
    <Avatar
        src={ImageSrc}
        type="image"
        size="lg"
        rounded
        border
        borderColor="var(--error-300)"
        borderWidth="2px"
        alt="avatar"
        statusIcon={
            <RiCircleFill size={18} className="text-error-500 rounded-full" />
        }
        statusPosition="bottom-right"
    />
    <Avatar
        src={ImageSrc}
        type="image"
        size="lg"
        rounded
        border
        borderColor="var(--error-300)"
        borderWidth="2px"
        alt="avatar"
        statusIcon={
            <RiCircleFill size={18} className="text-error-500 rounded-full" />
        }
        statusPosition="top-left"
    />
    <Avatar
        src={ImageSrc}
        type="image"
        size="lg"
        rounded
        border
        borderColor="var(--error-300)"
        borderWidth="2px"
        alt="avatar"
        statusIcon={
            <RiCircleFill size={18} className="text-error-500 rounded-full" />
        }
        statusPosition="top-right"
    />
</div>

<AvatarGroup
    avatars={[
    {
        type: "image",
        src: ImageSrc2,
        rounded: true,
        border: true,
        borderWidth: "2px",
        borderColor: "var(--primary-500)",
    },
    {
        type: "image",
        src: ImageSrc2,
        rounded: true,
        border: true,
        borderWidth: "2px",
        borderColor: "var(--primary-500)",
    },
    {
        type: "image",
        src: ImageSrc2,
        rounded: true,
        border: true,
        borderWidth: "2px",
        borderColor: "var(--primary-500)",
    },
    {
        type: "image",
        src: ImageSrc2,
        rounded: true,
        border: true,
        borderWidth: "2px",
        borderColor: "var(--primary-500)",
    },
    {
        type: "image",
        src: ImageSrc2,
        rounded: true,
        border: true,
        borderWidth: "2px",
        borderColor: "var(--primary-500)",
    },
    {
        type: "image",
        src: ImageSrc2,
        rounded: true,
        border: true,
        borderWidth: "2px",
        borderColor: "var(--primary-500)",
    },
    ]}
    size="md"
    max={4}
/>
`}
          />
        </TabPanel>
      </TabsContainer>
    </div>
  );
};

export default AvatarExampleSection;
