import Image from "next/image";
import React from "react";
import JoinImages from "@/public/cards/FAQ.svg";
import { ArrowRight } from "lucide-react";
import CircleRed from "@/public/assets/CircleRed.svg";

const FaqContinue = () => {
  return (
    <div className="bg-[#19CC85] w-full flex justify-center items-center px-4">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-between items-center py-8 lg:py-10 gap-8 lg:gap-0">
        <div className="flex flex-col text-white w-full lg:max-w-lg space-y-4 lg:space-y-6 text-center lg:text-left">
          <div className="">
            <div className="text-3xl sm:text-4xl lg:text-6xl flex flex-col items-center lg:items-start mt-3">
              <span className="mb-2">Still Have</span>
              <div className="relative flex items-center justify-center lg:justify-start">
                <Image
                  src={CircleRed}
                  alt="Circle Red"
                  className="absolute z-10 w-full h-auto mt-3 sm:mt-4 lg:mt-6 -ml-2 sm:-ml-3 lg:-ml-4"
                />
                <span className="relative z-20 font-reflet text-4xl sm:text-5xl lg:text-8xl">Question ?</span>
              </div>
            </div>
          </div>
          
          <span className="text-base lg:text-lg font-body px-4 lg:px-0 leading-relaxed">
            Our friendly community team is here to help! Get personalized support and connect with experienced $WEALTH members who can guide you.
          </span>
          
          <div className="flex justify-center lg:justify-start">
            <a href="mailto:hi@wealthcrypto.fund" className="inline-block">
              <div className="mt-4 lg:mt-6 bg-transparent font-bold pr-2 pl-4 lg:pl-6 text-white py-2 lg:py-2 rounded-full border-2 border-white transition flex gap-2 lg:gap-3 items-center hover:bg-white hover:border-2 hover:border-[#1dcb86] hover:text-[#1dcb86] group">
                <span className="text-sm lg:text-base">Contact Us</span>
                <div className="transform rotate-[-45deg] bg-white rounded-full p-2 lg:p-3 xl:p-4 text-[#1dcb86] group-hover:bg-[#1dcb86] group-hover:text-white transition-colors">
                  <ArrowRight className="h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5" />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-6/12 flex justify-center">
          <Image 
            src={JoinImages} 
            alt="Join Images" 
            
            className="w-full h-full object-contain" 
          />
        </div>
      </div>
    </div>
  );
};

export default FaqContinue;
