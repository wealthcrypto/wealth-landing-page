import React from "react";
import BackgroundVector from "@/public/assets/BackgroundVector.svg";
import LineString from "@/public/assets/LineString.svg";
import Growth from "@/public/Stars.svg";
import Image from "next/image";
import JoinSection from "./JoinSection";

const WealthAboutSection = () => {
  return (
    <div className="">
      <div className="relative h-full py-12 sm:py-16 md:py-24 lg:py-40 xl:py-60">
        {/* Background div covering only 60% from top */}
        {/* <div
          className="absolute bottom-0 left-0 right-0 h-[80%] bg-top bg-cover z-0"
          style={{ backgroundImage: `url(${BackgroundVector.src})` }}
        ></div> */}
        <div className="flex flex-col w-11/12 md:w-10/12 lg:w-9/12 items-start justify-center mx-auto z-50 relative px-4 lg:px-0">
          <div className="w-full">
            <div className="flex flex-col sm:flex-row sm:items-center mr-2 sm:mr-4 md:mr-8 space-y-2 sm:space-y-0 sm:space-x-3 mb-6">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">What is</span>
              <div className="bg-[#19CC85] flex items-center justify-center p-2 sm:p-3 md:p-4 rounded-lg -rotate-1 w-fit">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white whitespace-nowrap">Wealth Crypto ?</span>
              </div>
            </div>
            <div className="w-full sm:w-5/6 md:w-4/5 lg:w-3/5 space-y-4 sm:space-y-6 text-wealth-navy text-sm sm:text-base md:text-lg font-body leading-relaxed">
              <span className="block">
                WealthCrypto ($WEALTH) transforms your everyday activities - from your favorite cafe visits to crucial event tickets - from simple expenditures into tangible, digital assets. It connects your favorite places and communities into one seamless, rewarding experience. $WEALTH operates as an ERC-20 utility token on the Ethereum blockchain, giving you a secure, verifiable way to build wealth just by living the life you love.
              </span>
            </div>
          </div>
        </div>

        {/* Background vector positioned at the very bottom of this section - responsive positioning */}
        <Image
          src={LineString}
          alt="Line String"
          className="absolute top-1/4 sm:top-1/3 right-1/4 sm:right-1/3 md:right-1/3 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rotate-[150deg] pointer-events-none select-none z-10 opacity-80"
        />
        <Image
          src={Growth}
          alt="Growth"
          className="absolute bottom-1/4 sm:bottom-1/3 right-1/6 sm:right-1/5 md:right-1/4 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 pointer-events-none select-none z-10 opacity-80"
        />

      </div>
      <JoinSection />
    </div>
  );
};

export default WealthAboutSection;
