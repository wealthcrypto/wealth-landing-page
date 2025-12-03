import Image from "next/image";
import React from "react";
import JoinImages from "@/public/assets/JoinImages.svg";
import Lifestyle from "@/public/assets/Lifestyle.svg";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const JoinSection = () => {
  return (
    <div className="bg-[#19CC85] w-dvw  flex justify-center items-center">
      <div className="w-9/12 flex justify-between py-10 ">
        <div className="flex flex-col text-white max-w-lg space-y-6">
          <div className="">
            <span className="text-6xl">Ready to Elevate</span>
            <div className="text-6xl flex items-center -mt-3">
              <span>Your</span>
              <Image
                src={Lifestyle}
                alt="Lifestyle"
                className="inline-block ml-2 h-36 w-48"
              />
            </div>
          </div>
          <span className="text-lg font-body">
            Join our community and start unlocking experiences that transform
            ordinary moments into extraordinary memories.
          </span>
          <a href="">
            <div className="mt-6 max-w-fit bg-transparent  font-bold pr-2 ps-6 text-white py-2 rounded-full border-2 border-white  transition flex gap-3 items-center hover:bg-white hover:border-2 hover:border-[#1dcb86] hover:text-[#1dcb86]">
              Join Now
              <div
                className="transform rotate-[-45deg] bg-white rounded-full ml-2 p-2 sm:p-3 md:p-4 text-[#1dcb86]"
              >
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
              </div>
            </div>
          </a>
        </div>
        <Image src={JoinImages} alt="Join Images" className="h-full" />
      </div>
    </div>
  );
};

export default JoinSection;
