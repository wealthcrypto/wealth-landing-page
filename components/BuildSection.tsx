import React from "react";
import Term from "@/public/assets/Term.svg";
import Image from "next/image";

const BuildSection = () => {
    const data = [
        "Utility Focused",
        "Community First",
        "Sustainable Growth",
        "Transparent"
    ]
  return (
    <div className="py-10">
      <div className="flex text-black font-body text-3xl md:text-5xl justify-center items-center mt-5">
        <span>Build for the long</span>
        <Image src={Term} alt="Term Icon" className="h-28 w-32 ml-2 mt-1" />
      </div>
      <span className="text-black font-body text-md md:text-lg mt-4 block w-1/2 text-center mx-auto">
        WEALTH Token isn&apos;t designed for quick flips or speculation. It&apos;s built to grow in value as our community and ecosystem expand, creating sustainable value for everyone involved.
      </span>
      <div className="flex space-x-4 justify-center mt-8">
        {
            data.map((item, index) => (
                <div key={index} className="text-black bg-[#19CC85]/50 rounded-full py-2 px-6 font-body text-md md:text-lg mt-2 text-center">
                    {item}
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default BuildSection;
