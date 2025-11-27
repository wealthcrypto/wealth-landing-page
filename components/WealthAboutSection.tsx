import React from "react";
import CardAbout from "./common/CardAbout";
import BackgroundVector from "@/public/assets/BackgroundVector.svg";
import LineString from "@/public/assets/LineString.svg";
import Image from "next/image";

const WealthAboutSection = () => {
  return (
    <div className="">
      <div className="relative h-full">
        <div className="flex flex-col w-9/12 items-start justify-center mx-auto ">
          <div className="">
            <div className="flex items-center mr-8 space-x-3">
              <span className="text-4xl">What is</span>
              <div className="bg-[#19CC85] mt-2 mb-6 flex items-center justify-center p-4 rounded-lg -rotate-1">
                <span className="text-4xl text-white">Wealth Crypto ?</span>
              </div>
            </div>
            <div className="max-w-xl space-y-6 text-wealth-navy text-lg font-body">
              <span>
                More than a cryptocurrency, WEALTH Token is your key to a
                curated lifestyle. We believe that wealth isn't just about
                money—it's about rich experiences, meaningful connections, and
                living life to the fullest.
              </span>
            </div>
            <div className="flex justify-center">
              <CardAbout />
            </div>
          </div>
        </div>

        {/* Background vector positioned at the very bottom of this section */}
        <Image
          src={LineString}
          alt="Line String"
          className="absolute top-20 right-1/3 w-32 h-32 rotate-[150deg] pointer-events-none select-none z-[-10]"
        />
        <Image
          src={BackgroundVector}
          alt="Background Vector"
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-full pointer-events-none select-none z-[-10]"
        />
      </div>
    </div>
  );
};

export default WealthAboutSection;
