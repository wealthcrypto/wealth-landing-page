import Image from "next/image";
import React from "react";
import JoinImages from "@/public/assets/JoinImages.svg";
import { ArrowRight } from "lucide-react";
import CircleRed from "@/public/assets/CircleRed.svg";

const FaqContinue = () => {
  return (
    <div className="bg-[#19CC85] w-dvw  flex justify-center items-center">
      <div className="w-9/12 flex justify-between py-10 ">
        <div className="flex flex-col text-white max-w-lg space-y-6">
          <div className="">
            <div className="text-6xl flex flex-col items-start mt-3">
              <span>Still Have</span>
              <div className="relative flex items-center ">
                <Image
                  src={CircleRed}
                  alt="Circle Red"
                  className="absolute z-10 w-full h-max  mt-6 -ml-4"
                />
                <span className="relative z-20 font-reflet text-8xl">Question ?</span>
              </div>
            </div>

          </div>
          <span className="text-lg font-body">
            Our friendly community team is here to help! Get personalized support and connect with experienced WEALTH members who can guide you.
          </span>
          <a href="">
            <div className="mt-6 max-w-fit bg-transparent  font-bold pr-2 ps-6 text-white py-2 rounded-full border-2 border-white  transition flex gap-3 items-center hover:bg-white hover:border-2 hover:border-[#1dcb86] hover:text-[#1dcb86]">
              Contact Us
              <div
                className="transform rotate-[-45deg] bg-white rounded-full ml-2 p-2 sm:p-3 md:p-4 text-[#1dcb86]"
              >
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
              </div>
            </div>
            </a>
        </div>
        <Image src={JoinImages} alt="Join Images" width={480} height={320} className="w-5/12" />
      </div>
    </div>
  );
};

export default FaqContinue;
