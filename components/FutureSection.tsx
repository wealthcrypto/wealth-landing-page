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
    <div className="bg-[#19CC85] w-full min-h-screen flex justify-center items-center px-4 py-8 md:px-8" style={{backgroundImage : `url(${PadelBackground.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
      <div className="w-full max-w-4xl flex flex-col justify-center bg-[#5EDCAA] rounded-2xl my-8 md:my-20 lg:my-40 p-6 md:p-8 lg:p-12 items-center relative overflow-hidden">
        <AscendYellow className="absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 w-16 h-8 md:w-32 md:h-16 lg:w-40 lg:h-20 pointer-events-none z-10" />
        <CirclePink className="absolute -top-6 md:-top-12 lg:-top-16 -left-6 md:-left-12 lg:-left-16 w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32 pointer-events-none z-10" />
        
        <div className="flex flex-col text-white w-full max-w-2xl space-y-4 md:space-y-6 z-20 text-center">
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
              <span className="block">Shape Your Next</span>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
              <Image
                src={Future}
                alt="Future"
                className="h-16 w-24 sm:h-20 sm:w-32 md:h-28 md:w-48 lg:h-36 lg:w-56 object-contain"
              />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl">With Us.</span>
            </div>
          </div>
          
          <p className="text-sm sm:text-base md:text-lg font-body max-w-md sm:max-w-lg mx-auto leading-relaxed">
            Community is at the heart of $WEALTH. Connect with us and collectively build the future of $WEALTH today.
          </p>
          
          <div className="flex justify-center pt-2 md:pt-4">
            <a href="" className="inline-block">
              <div className="bg-transparent font-bold pr-2 pl-4 md:pl-6 text-white py-2 md:py-3 rounded-full border-2 border-white transition flex gap-2 md:gap-3 items-center hover:bg-white hover:border-white hover:text-[#1dcb86] group">
                <span className="text-sm md:text-base lg:text-lg">Join Now</span>
                <div className="transform rotate-[-45deg] bg-white rounded-full p-2 md:p-3 lg:p-4 text-[#1dcb86] group-hover:bg-[#1dcb86] group-hover:text-white transition-colors">
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureSection;
