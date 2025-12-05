import Image from "next/image";
import React from "react";
import JoinImages from "@/public/cards/Lifestyle.svg";
import Lifestyle from "@/public/assets/Lifestyle.svg";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const JoinSection = () => {
  return (
    <div className="bg-[#19CC85] w-full flex justify-center items-center pl-2">
      <div className="w-full flex flex-col lg:flex-row justify-end items-center ">
        <div className="flex flex-col text-white min-w-6/12 space-y-4 lg:space-y-6 text-center lg:text-left">
          <div className="">
            <span className="text-4xl sm:text-5xl lg:text-7xl block lg:inline">Ready to Elevate</span>
            <div className="text-4xl sm:text-5xl lg:text-7xl flex flex-col sm:flex-row items-center justify-center lg:justify-start -mt-1 lg:-mt-3">
              <span className="mr-0 sm:mr-2">Your</span>
              <Image
                src={Lifestyle}
                alt="Lifestyle"
                className="inline-block ml-0 sm:ml-2 h-24 w-32 sm:h-32 sm:w-40 lg:h-40 lg:w-52 mt-2 sm:mt-0"
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
                <div className="transform rotate-[-45deg] bg-white rounded-full ml-1 lg:ml-2 p-4 text-[#1dcb86]">
                  <ArrowRight className="h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5" />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex justify-end w-6/12 ">
          <div className="w-full overflow-hidden">
            <Image
              src={JoinImages}
              alt="Join Images"
              className="-m-2 w-[calc(100%+20px)] ml-1 h-[calc(100%+20px)] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinSection;
