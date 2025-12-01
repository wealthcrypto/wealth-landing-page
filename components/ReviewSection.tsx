import React from "react";
import Image from "next/image";
import CircleText from "@/public/assets/CircleText.svg";
import CircleTextDark from "@/public/assets/CircleTextDark.svg";
import CommaDark from "@/public/assets/CommaDark.svg";
import Euforia from '@/public/assets/Euforia.svg';
import Comma from "@/public/assets/Comma.svg";

const ReviewSection = () => {
  return (
    <div className="relative flex items-center space-x-3 flex-col mt-20 h-max justify-center overflow-hidden">
      <Image
        src={Euforia}
        alt="Euforia Background"
        className="absolute bottom-0 left-0 right-0 w-dvw h-auto z-0"
        width={800}
        height={400}
      />
      <div className="relative z-10 flex flex-col items-center space-y-6 py-10">
        <div className="bg-[#8BDBBB] mt-2 mb-6 flex items-center justify-center p-4 rounded-lg -rotate-1 w-fit">
          <span className="text-4xl text-white">What Our Community Says</span>
        </div>
        <div className="flex space-x-4 w-10/12 ">
          <div className=" w-full h-full rounded-3xl bg-[#9EEFCC] p-8 shadow-2xl">
            <div className="flex">
              <Image
                src={CommaDark}
                alt="Comma Dark"
                width={48}
                height={48}
                className=""
              />
              <Image
                src={CommaDark}
                alt="Comma"
                width={48}
                height={48}
                className=""
              />
            </div>
            <div className="flex flex-col h-full  space-y-6">
              <p className="max-w-[70%] text-black text-lg leading-7 font-medium mt-6">
                WEALTH has transformed how I discover and enjoy experiences. The
                community is incredibly welcoming!
              </p>

              <div className="relative ">
                <Image
                  src={CircleTextDark}
                  alt="Circle Text Dark"
                  className="absolute bottom-0 right-1  z-0 object-contain h-full"
                />
                <div className="relative z-10 text-right">
                  <div className="text-xl font-semibold">Sarah M.</div>
                  <div className="text-xl font-medium">Padel Enthusiast</div>
                  <div className="text-xl font-medium">Barcelona</div>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full h-full rounded-3xl bg-[#19CC85] p-8 shadow-2xl">
            <div className="flex">
              <Image
                src={Comma}
                alt="Comma Dark"
                width={48}
                height={48}
                className=""
              />
              <Image
                src={Comma}
                alt="Comma"
                width={48}
                height={48}
                className=""
              />
            </div>
            <div className="flex flex-col h-full  space-y-6">
              <p className="max-w-[70%] text-white text-lg leading-7 font-medium mt-6">
                From food tours to concerts, every WEALTH experience exceeds expectations. Love this community!
              </p>

              <div className="relative ">
                <Image
                  src={CircleText}
                  alt="Circle Text Dark"
                  className="absolute bottom-0 right-1  z-0 object-contain h-full"
                />
                <div className="relative z-10 text-right text-white">
                  <div className="text-xl font-semibold">Alex K.</div>
                  <div className="text-xl font-medium">Music Lover</div>
                  <div className="text-xl font-medium">London</div>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full h-full rounded-3xl bg-[#F7004B] p-8 shadow-2xl text-white">
            <div className="flex">
              <Image
                src={Comma}
                alt="Comma Dark"
                width={48}
                height={48}
                className=""
              />
              <Image
                src={Comma}
                alt="Comma"
                width={48}
                height={48}
                className=""
              />
            </div>
            <div className="flex flex-col h-full  space-y-6">
              <p className="max-w-[70%]  text-lg leading-7 font-medium mt-6">
                Finally found my people! The WEALTH community shares my passion for premium lifestyle experiences.
              </p>

              <div className="relative ">
                <Image
                  src={CircleText}
                  alt="Circle Text Dark"
                  className="absolute bottom-0 right-1  z-0 object-contain h-full"
                />
                <div className="relative z-10 text-right">
                  <div className="text-xl font-semibold">Sarah M.</div>
                  <div className="text-xl font-medium">Padel Enthusiast</div>
                  <div className="text-xl font-medium">Barcelona</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
