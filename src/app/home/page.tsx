import { Button } from "@atomos_tech/genesis";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      {" "}
      <div className="text-[56px] max-w-[450px] leading-[60px] font-semibold">
        Start building your app now
      </div>
      <p className="text-md text-gray-500 max-w-[400px]">
        An open source component library optimized for fast development, easy
        maintenance, and accessibility. Just import and go—no configuration
        required.
      </p>
      <Button size={"sm"}>
        <Link href="/components/overview">Get Started</Link>
      </Button>
    </div>
  );
};

export default Home;
