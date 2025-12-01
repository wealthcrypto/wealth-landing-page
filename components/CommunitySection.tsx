import React from "react";
import CommunityFrame from "@/public/assets/CommunityFrame.svg";
import Image from "next/image";

const CommunitySection = () => {
  return (
    <div className="flex w-full text-black font-body text-3xl md:text-5xl justify-center items-center mt-5 space-x-5 bg-[#FDCFD9] py-12">
      <div className="w-4/12 flex flex-col items-start space-y-4">
        <div className="bg-[#F9FFC4] rounded-full flex flex-col w-8/12 px-8 py-4">
          <p className="text-lg font-semibold ">Weekly Meetups</p>
          <span className="text-base">Local gatherings across cities</span>
          <span className="text-lg">50+ cities</span>
        </div>
        <div className="bg-[#77FFC1] rounded-full flex flex-col w-10/12 px-8 py-4">
          <p className="text-lg font-semibold ">Member Events</p>
          <span className="text-base">Local gatherings across cities</span>
          <span className="text-lg">50+ cities</span>
        </div>
        <div className="bg-[#F7004B] rounded-full flex flex-col w-full px-8 py-4 text-white">
          <p className="text-lg font-semibold ">Community Support</p>
          <span className="text-base">24/7 help from fellow members</span>
          <span className="text-lg">24/7 Community Support</span>
        </div>
      </div>
      <div className="w-6/12 space-y-5">
        <div className="flex items-end gap-3 justify-start">
          <span>Join Our</span>
          <Image
            src={CommunityFrame}
            alt="Community Frame"
            className="w-56 h-auto mt-4"
          />
        </div>
        <p className="w-3/4 font-body text-base">Connect with like-minded individuals who share your passion for extraordinary experiences. Our community is the heart of everything we do.</p>
      </div>
    </div>
  );
};

export default CommunitySection;
