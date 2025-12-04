import React from "react";
import CommunityFrame from "@/public/assets/Connections.svg";
import AscendGreen from "@/public/AscendGreen.svg";
import CircleGreen from "@/public/assets/CicleGreen.svg";
import GrowthPink from "@/public/GrowthPink.svg"
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const CommunitySection = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full text-black font-body text-2xl sm:text-3xl md:text-5xl justify-center items-center mt-5 lg:space-x-5 bg-[#FDCFD9] py-8 lg:py-12 px-4">
      <div className="w-full lg:w-4/12 relative mb-8 lg:mb-0">
        {/* Decorative images from public folder - hidden on mobile for cleaner look */}
        <Image
          src={GrowthPink}
          alt="flower"
          width={84}
          height={84}
          className="hidden md:block absolute -right-6 top-1/4 z-20"
        />
        <Image
          src={AscendGreen}
          alt="squiggle"
          width={120}
          height={60}
          className="hidden md:block absolute -left-8 -top-12 z-20"
        />
        <Image
          src={CircleGreen}
          alt="target"
          width={140}
          height={140}
          className="hidden md:block absolute -left-10 bottom-10"
        />

        {/* Cards (staggered, rounded) - responsive layout */}
        <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-6">
          <div className="">
            <div className="transform -rotate-3 -translate-y-3 bg-[#F9FFC4] min-h-24 sm:min-h-32 lg:min-h-36 rounded-[18px] px-4 py-3 sm:px-6 sm:py-5 w-56 sm:w-64 shadow-md flex items-center">
              <p className="text-lg sm:text-xl lg:text-2xl">Community Meetups</p>
            </div>
          </div>

          <div className="w-full flex justify-center lg:justify-end">
            <div className="transform rotate-1 translate-x-0 lg:translate-x-6 bg-[#77FFC1] min-h-24 sm:min-h-32 lg:min-h-36 rounded-[18px] px-4 py-3 sm:px-6 sm:py-5 w-60 sm:w-72 shadow-md">
              <p className="text-lg sm:text-xl lg:text-2xl">Real-life Events</p>
              {/* <span className="text-sm sm:text-base block mt-1">
                Exclusive experiences for the community
              </span>
              <span className="text-base sm:text-lg block mt-2">200+ monthly</span> */}
            </div>
          </div>

          <div className="transform -rotate-2 -translate-y-1 translate-x-0 lg:translate-x-3 min-h-24 sm:min-h-32 lg:min-h-36 bg-[#ff5e8f] text-white rounded-[18px] px-4 py-4 sm:px-6 sm:py-6 w-60 sm:w-72 shadow-lg">
            <p className="text-lg sm:text-xl lg:text-2xl">Community Support</p>
            {/* <span className="text-sm sm:text-base block mt-1">
              24/7 help from fellow members
            </span>
            <span className="text-base sm:text-lg block mt-2">&lt; 1hr response</span> */}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-6/12 space-y-3 lg:space-y-5">
        <div className="flex flex-col items-center lg:items-end gap-3 justify-start text-center lg:text-right">
          <span className="text-2xl sm:text-4xl lg:text-5xl">Global Network,</span>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end">
            <span className="text-xl sm:text-2xl lg:text-5xl">Real</span>
            <Image
              src={CommunityFrame}
              alt="Community Frame"
              className="w-40 sm:w-48 lg:w-56 h-auto mt-2 lg:mt-4"
            />
          </div>
          <p className="w-full lg:w-3/4 font-body text-sm sm:text-base text-center lg:text-end px-4 lg:px-0">
            The value of $WEALTH extends far beyond the digital wallet; it is
            defined by the strength and accessibility of its global community.
            <br className="hidden lg:block" />
            We are building the largest, most active decentralized social
            network for the Experience Economy, ensuring you can find
            connection, support, and engagement wherever your lifestyle takes
            you.
          </p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <a href="">
            <div className="mt-4 lg:mt-6 max-w-fit bg-transparent pr-2 ps-4 lg:ps-6 text-[#1dcb86] py-2 rounded-full border-2 border-[#1dcb86] transition flex gap-2 lg:gap-3 items-center hover:bg-white hover:border-2 hover:border-[#1dcb86] hover:text-[#1dcb86]">
              <span className="text-base lg:text-lg">Join Us</span>
              <div className="transform rotate-[-45deg] bg-[#1dcb86] rounded-full ml-1 p-2 lg:p-3 xl:p-4 text-white">
                <ArrowRight className="h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
