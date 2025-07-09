import HaldiramFestiveCamp from "@/app/public/assets/HaldiramFestiveCamp.png";
import shutterUp from "@/app/public/assets/shutterUp.png";
import tarang from "@/app/public/assets/tarang.jpeg";
import diwali from "@/app/public/assets/diwali.png";
import diageo from "@/app/public/assets/diageo.png";
import teej from "@/app/public/assets/teej.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div className="bg-[#f2f1f1]">
      <div className="sm:p-8 p-5 flex flex-col md:gap-20 sm:gap-16 gap-8">
        {/* <div className="flex flex-col sm:flex-row sm:gap-8 gap-6 items-end">
          <Link
            href="/tarang"
            className="w-full sm:w-[60%] md:w-[60%] lg:w-[65%] xl:w-[70%] cursor-pointer"
          >
            <div className="cursor-pointer">
              <div className="pb-4 flex flex-col gap-1">
                <p className="font-medium text-[18px] sm:text-[20px] md:text-[24px]">
                  Tarang - typography kit
                </p>
                <p className="text-gray-500 font-normal text-[14px] sm:text-[16px]">
                  Graduation Project
                </p>
              </div>
              <div className="overflow-hidden">
                <Image
                  src={tarang}
                  alt="Project"
                  className="w-full h-auto transition-transform duration-300 hover:scale-[1.05]"
                />
              </div>
            </div>
          </Link>

          <Link
            href="/haldiram-diwali"
            className="w-full sm:w-[40%] md:w-[40%] lg:w-[35%] xl:w-[30%] cursor-pointer"
          >
            <div className="cursor-pointer">
              <div className="pb-4 flex flex-col gap-1">
                <p className="font-medium text-[16px] sm:text-[20px] md:text-[24px]">
                  Haldiram&apos;s : Diwali Campaign
                </p>
                <p className="text-gray-500 font-normal text-[14px] sm:text-[18px]">
                  DVC, Campaign & Design Direction, Photography
                </p>
              </div>
              <div className="overflow-hidden">
                <Image
                  src={diwali}
                  alt="abcd"
                  className="w-full h-auto transition-transform duration-300 hover:scale-[1.05]"
                />
              </div>
            </div>
          </Link>
        </div> */}

        {/* next 2*/}
        <div className="flex flex-col sm:flex-row sm:space-y-0 space-y-6 sm:gap-8 gap-10 items-end">
          {/* Shuttrup Studios Section */}
          <Link
            href="/shuttrup"
            className="w-full sm:w-[40%] md:w-[40%] lg:w-[35%] xl:w-[30%] cursor-pointer"
          >
            <div className="cursor-pointer">
              <div className="pb-4 flex flex-col gap-1">
                <p className="font-medium text-[16px] sm:text-[20px] md:text-[24px]">
                  Shuttrup Studios (A Film Company)
                </p>
                <p className="text-gray-500 font-normal text-[14px] sm:text-[18px]">
                  Logo Design, Brand Identity
                </p>
              </div>
              <div className="overflow-hidden">
                <Image
                  src={shutterUp}
                  alt="Haldiram Project"
                  className="w-full h-auto transition-transform duration-300 hover:scale-[1.05]"
                />
              </div>
            </div>
          </Link>

          {/* Teej Campaign Section */}
          <Link
            href="/teej"
            className="w-full sm:w-[60%] md:w-[60%] lg:w-[65%] xl:w-[70%] cursor-pointer"
          >
            <div className="cursor-pointer">
              <div className="pb-4 flex flex-col gap-1">
                <p className="font-medium text-[16px] sm:text-[20px] md:text-[24px]">
                  {` Haldiram's Teej Campaign (2024 & 2025)`}
                </p>
                <p className="text-gray-500 font-normal text-[14px] sm:text-[18px]">
                  Art & Design Direction, Campaign Direction (India & Dubai)
                </p>
              </div>
              <div className="overflow-hidden">
                <Image
                  src={teej}
                  alt="Tarang Project"
                  className="w-full object-cover transition-transform duration-300 hover:scale-[1.05] 
            sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[650px]"
                />
              </div>
            </div>
          </Link>
        </div>

        {/* next 2*/}
        <div className="flex flex-col sm:flex-row sm:space-y-0 space-y-6 sm:mt-0 mt-8 sm:gap-8 gap-10 items-end">
          {/* Tarang Section */}
          <Link
            href="/tarang"
            className="w-full sm:w-[60%] md:w-[60%] lg:w-[65%] xl:w-[70%] cursor-pointer"
          >
            <div className="cursor-pointer">
              <div className="pb-4 flex flex-col gap-1">
                <p className="font-medium text-[16px] sm:text-[20px] md:text-[24px]">
                  Tarang - An experiential Type Specimen
                </p>
                <p className="text-gray-500 font-normal text-[14px] sm:text-[18px]">
                  Publication, Product & Web Design, Photography and Creative
                  Direction
                </p>
              </div>
              <div className="overflow-hidden">
                <Image
                  src={tarang}
                  alt="Project"
                  className="w-full h-auto transition-transform duration-300 hover:scale-[1.05]"
                />
              </div>
            </div>
          </Link>

          {/* Haldiram Diwali Section */}
          <Link
            href="/haldiram-diwali"
            className="w-full sm:w-[40%] md:w-[40%] lg:w-[35%] xl:w-[30%] cursor-pointer"
          >
            <div className="cursor-pointer">
              <div className="pb-4 flex flex-col gap-1">
                <p className="font-medium text-[16px] sm:text-[20px] md:text-[24px]">
                  Haldiram&apos;s : Diwali Campaign
                </p>
                <p className="text-gray-500 font-normal text-[14px] sm:text-[16px]">
                  DVC, Campaign & Design Direction, Photography
                </p>
              </div>
              <div className="overflow-hidden">
                <Image
                  src={diwali}
                  alt="abcd"
                  className="w-full h-auto transition-transform duration-300 hover:scale-[1.05]"
                />
              </div>
            </div>
          </Link>
        </div>

        {/* first 2*/}
        <div className="flex flex-col sm:flex-row sm:space-y-0 space-y-6 sm:gap-8 gap-10 sm:mt-0 mt-8 items-end">
          {/* Haldiram Section */}
          <Link
            href="/haldiram"
            className="w-full sm:w-[40%] md:w-[40%] lg:w-[35%] xl:w-[30%] cursor-pointer"
          >
            <div className="cursor-pointer">
              <div className="pb-4 flex flex-col gap-1">
                <p className="font-medium text-[16px] sm:text-[20px] md:text-[24px]">
                  Haldiram&apos;s : Festive Campaigns
                </p>
                <p className="text-gray-500 font-normal text-[14px] sm:text-[14px]">
                  Art Direction, Design Direction (India & Dubai)
                </p>
              </div>
              <div className="overflow-hidden">
                <Image
                  src={HaldiramFestiveCamp}
                  alt="Haldiram Festive campaign"
                  className="w-full h-auto transition-transform duration-300 hover:scale-[1.05]"
                />
              </div>
            </div>
          </Link>

          {/* Diageo Section */}
          <Link
            href="/diageo"
            className="w-full sm:w-[60%] md:w-[60%] lg:w-[65%] xl:w-[70%] cursor-pointer"
          >
            <div className="cursor-pointer">
              <div className="pb-4 flex flex-col gap-1">
                <p className="font-medium text-[16px] sm:text-[20px] md:text-[24px]">
                  DIAGEO (The Good Craft.Co)
                </p>
                <p className="text-gray-500 font-normal text-[14px] sm:text-[14px]">
                  Brand Identity, Experience Design, Digital design
                </p>
              </div>
              <div className="overflow-hidden">
                <Image
                  src={diageo}
                  alt="Tarang Project"
                  className="w-full object-contain transition-transform duration-300 hover:scale-[1.05] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[650px]"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
