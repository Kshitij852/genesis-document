"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Intro = ({
  setIntroActive,
}: {
  setIntroActive: (active: boolean) => void;
}) => {
  const introRef = useRef<HTMLDivElement>(null);
  const animationTriggered = useRef(false);

  useEffect(() => {
    const element = introRef.current;
    if (!element) return;

    const lines = gsap.utils.toArray<HTMLElement>(".intro-line");

    // Reset line visibility
    gsap.set(lines, { opacity: 0, y: 40 });

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationTriggered.current) {
            animationTriggered.current = true;

            // Animate lines only when intro is visible
            lines.forEach((line, i) => {
              gsap.to(line, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
                delay: 0.5 + i * 0.2,
              });
            });
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the intro is visible
      }
    );

    observer.observe(element);

    // Track Intro visibility for header toggle logic
    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top 75%",
      end: "bottom top",
      onEnter: () => setIntroActive(true),
      onLeave: () => setIntroActive(false),
      onEnterBack: () => setIntroActive(true),
      onLeaveBack: () => setIntroActive(false),
    });

    return () => {
      observer.disconnect();
      trigger.kill();
    };
  }, [setIntroActive]);

  const introLines = [
    <>
      A <span className="font-semibold">Visual Communication Designer</span>{" "}
      currently
    </>,
    <>at Please See, building brands and campaigns.</>,
    <>
      I’m drawn to films, art, and ideas — the kind <br /> that have potential,
      or simply make me <br /> pause and rethink.
    </>,
  ];

  return (
    <div className="bg-[#f2f1f1] text-center flex justify-center">
      <div
        ref={introRef}
        className="intro-text lg:w-[65%] md:w-[75%] sm:w-[86%] w-[92%] text-center sm:space-y-4 lg:leading-[26px] md:leading-[24px] sm:leading-[20px] leading-[24px] md:pt-[250px] sm:pt-[200px] pt-[200px] sm:pb-[50px]"
      >
        {introLines.map((line, idx) => (
          <div
            key={idx}
            className={`intro-line ${
              idx === 2
                ? "text-gray-600 font-normal lg:leading-[40px] md:leading-[34px] sm:leading-[30px] leading-[24px] sm:mt-8 lg:text-[28px] md:text-[25px] sm:text-[24px] text-[14px]"
                : "text-gray-900 lg:text-[28px] md:text-[25px] sm:text-[24px] text-[14px]"
            }`}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Intro;
