import React from "react";
import Term from "@/public/assets/Term.svg";
import Image from "next/image";
import GrowthGreen from "./icons/GrowhGreen";
import LinesRed from "@/public/assets/CircleRed.svg";
import StarsGreen from "./icons/StarsGreen";
import LineSpringRed from "./icons/LineSpringRed";

const BuildSection = () => {
  const data = [
    "Utility Driven Demand",
    "Loyalty Fueled Perks",
    "Deflationary Pressure",
    "Future-Proof Blockchain Foundation",
  ];
  return (
    <div className="py-10 md:py-16 lg:py-20 relative px-4">
      <GrowthGreen className="absolute top-10 left-1/4 w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 pointer-events-none select-none z-0" />
      <StarsGreen className="absolute top-15 right-6 md:right-12 w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 pointer-events-none select-none z-0" />
      <LineSpringRed className="absolute top-1/2 left-4 md:left-8 w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 pointer-events-none select-none z-0" />

      <div className="flex flex-col md:flex-row text-black font-body text-2xl md:text-3xl lg:text-5xl justify-center items-center mt-5 z-20 gap-2 md:gap-4 ">
        <span className="text-center md:text-left  z-20">Build for the</span>
        <div className="relative">
          <span className="relative z-10 font-reflet text-3xl md:text-4xl lg:text-7xl">
            Long Term
          </span>
          <Image
            src={LinesRed}
            alt="Lines Red"
            className="absolute inset-0 pointer-events-none"
          />
        </div>
      </div>

      <span className="text-black font-body text-sm md:text-base lg:text-lg mt-4 block w-full md:w-3/4 lg:w-1/2 text-center mx-auto z-20 px-4">
        WEALTH Token isn&apos;t designed for quick flips or speculation.
        It&apos;s built to grow in value as our community and ecosystem expand,
        creating sustainable value for everyone involved.
      </span>

      <div className="flex flex-wrap gap-2 md:gap-4 justify-center mt-6 md:mt-8 z-20 px-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="text-black bg-[#19CC85]/50 rounded-full py-2 md:py-3 px-3 md:px-6 font-body text-xs md:text-sm lg:text-base text-center whitespace-nowrap"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuildSection;
