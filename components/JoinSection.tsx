import Image from "next/image";
import React from "react";
import JoinImages from "@/public/cards/Lifestyle.svg";
import Lifestyle from "@/public/assets/Lifestyle.svg";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const JoinSection = () => {
  return (
    <div className="bg-[#19CC85] w-full flex justify-center items-center px-4">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-between items-center py-8 lg:py-10 gap-8 lg:gap-0">
        <div className="flex flex-col text-white w-full lg:max-w-lg space-y-4 lg:space-y-6 text-center lg:text-left">
          <div className="">
            <span className="text-3xl sm:text-4xl lg:text-6xl block lg:inline">Ready to Elevate</span>
            <div className="text-3xl sm:text-4xl lg:text-6xl flex flex-col sm:flex-row items-center justify-center lg:justify-start -mt-1 lg:-mt-3">
              <span className="mr-0 sm:mr-2">Your</span>
              <Image
                src={Lifestyle}
                alt="Lifestyle"
                className="inline-block ml-0 sm:ml-2 h-20 w-28 sm:h-28 sm:w-36 lg:h-36 lg:w-48 mt-2 sm:mt-0"
              />
            </div>
          </div>
          <span className="text-base lg:text-lg font-body px-4 lg:px-0">
            Stop just living — start earning your future.
            <br/>
            Join the live-to-Earn movement today.
          </span>
          <div className="flex justify-center lg:justify-start">
            <a href="#joinnow">
              <div className="mt-4 lg:mt-6 max-w-fit bg-transparent font-bold pr-2 ps-4 lg:ps-6 text-white py-2 rounded-full border-2 border-white transition flex gap-2 lg:gap-3 items-center hover:bg-white hover:border-2 hover:border-[#1dcb86] hover:text-[#1dcb86]">
                <span className="text-base lg:text-lg">Join Now</span>
                <div className="transform rotate-[-45deg] bg-white rounded-full ml-1 lg:ml-2 p-2 lg:p-3 xl:p-4 text-[#1dcb86]">
                  <ArrowRight className="h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5" />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-auto flex justify-center">
          <Image 
            src={JoinImages} 
            alt="Join Images" 
            className="h-auto w-full max-w-sm lg:max-w-none lg:h-full object-contain" 
          />
        </div>
      </div>
    </div>
  );
};

export default JoinSection;
