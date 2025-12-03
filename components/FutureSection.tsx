import Image from "next/image";
import React from "react";
import JoinImages from "@/public/assets/JoinImages.svg";
import Future from "@/public/assets/Experience.svg";
import { ArrowRight } from "lucide-react";
import PadelBackground from "@/public/assets/PadelBackground.svg";
import AscendYellow from "@/components/icons/AscendYellow";
import CirclePink from "./icons/CirclePink";

const FutureSection = () => {
  return (
    <div className="bg-[#19CC85] w-full min-h-screen flex justify-center items-center px-4 md:px-8" style={{backgroundImage : `url(${PadelBackground.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <div className="w-full max-w-4xl flex flex-col lg:flex-row justify-between bg-[#5EDCAA] rounded-2xl my-20 md:my-40 p-6 md:p-8 lg:p-12 items-center relative">
        <AscendYellow className="absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 w-20 h-10 md:w-40 md:h-20 lg:w-40 lg:h-20 pointer-events-none z-10" />
        <CirclePink className="absolute -top-8 md:-top-16 -left-8 md:-left-16 w-16 h-16 md:w-32 md:h-32 pointer-events-none z-10" />
        <div className="flex flex-col text-white w-full lg:max-w-lg space-y-4 md:space-y-6 z-20 text-center lg:text-left">
          <div className="">
            <div className="text-3xl md:text-4xl lg:text-6xl flex flex-col lg:flex-row lg:items-center -mt-3">
              <span className="mb-2 lg:mb-0">Shape Your Next</span>
              
            </div>
            <div className="flex justify-center lg:justify-start items-center">
            <Image
                src={Future}
                alt="Future"
                className="inline-block mx-auto lg:ml-2 h-20 w-28 md:h-32 md:w-60 lg:h-40 lg:w-64"
              />
            <span className="text-3xl md:text-4xl lg:text-6xl block mt-2 lg:mt-0">With Us.</span>
</div>
          </div>
          <span className="text-base md:text-lg font-body max-w-md mx-auto lg:mx-0">
            Community is at the heart of WEALTH. Connect with us and collectively build the future of WEALTH today.
          </span>
          <a href="">
            <div className="mt-6 max-w-fit bg-transparent font-bold pr-2 ps-4 md:ps-6 text-white py-2 md:py-2 rounded-full border-2 border-white transition flex gap-2 md:gap-3 items-center hover:bg-white hover:border-2 hover:border-[#1dcb86] hover:text-[#1dcb86] mx-auto lg:mx-0">
              Join Now
              <div
                className="transform rotate-[-45deg] bg-white rounded-full ml-2 p-2 md:p-3 lg:p-4 text-[#1dcb86]"
              >
                <ArrowRight className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FutureSection;
