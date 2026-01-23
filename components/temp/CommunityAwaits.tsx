import Image from "next/image";
import React from "react";
import JoinImages from "@/public/assets/JoinImages.svg";
import Awaits from "@/public/assets/awaits.svg";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CommunityAwaits = () => {
  return (
    <div className="bg-[#19CC85] w-dvw  flex justify-center items-center">
      <div className="w-9/12 flex justify-between py-10 ">
        <div className="flex flex-col text-white max-w-lg space-y-6">
          <div className="">
            <div className="text-6xl flex flex-col items-start mt-3">
              <span>Your Community</span>
              <Image
                src={Awaits}
                alt="Awaits"
                className="inline-block ml-2 h-36 w-48 -mt-4"
              />
            </div>

          </div>
          <span className="text-lg font-body">
            Don&apos;t just hold WEALTH—live it! Join thousands of members who are already discovering extraordinary experiences and building lasting friendships.
          </span>
          <a href="#joinnow">
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
        <Image src={JoinImages} alt="Join Images" className="w-5/12" />
      </div>
    </div>
  );
};

export default CommunityAwaits;
