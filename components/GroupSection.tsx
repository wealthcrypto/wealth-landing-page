import React from "react";
import DiscordIcons from "@/public/assets/DiscordIconGreen.svg";
import TelegramIcons from "@/public/assets/TelegramRed.svg";
import Image from "next/image";
import { ArrowRight, Circle } from "lucide-react";
import StarsGreen from "./icons/StarsGreen";
import Euforia from "@/public/assets/Euforia.svg";
import CircleRed from "./icons/CircleRed";

const GroupSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 py-16 md:py-16 w-11/12 md:w-10/12 lg:w-9/12 mx-auto px-4 relative">
      {/* Decorative icons: on small screens placed top-left of the cards, on md+ keep original positions */}
      <StarsGreen className="absolute top-1/2 left-0 md:top-0 md:left-1/2 w-24 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 pointer-events-none select-none z-30" />
      <CircleRed className="absolute top-0 left-0 md:top-0 md:-left-10 w-24 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 pointer-events-none select-none z-0" />
      <div className="bg-[#8BDBBB] relative overflow-hidden w-full md:w-1/2 rounded-2xl shadow-xl shadow-black/50 z-20">
        <Image
          src={DiscordIcons}
          alt="Discord Icon"
          className="absolute -top-3 md:-top-5 -right-6 md:-right-10 w-20 h-20 md:w-24 md:h-24 lg:w-auto lg:h-auto pointer-events-none"
        />
        <div className="relative z-10 p-4 md:p-6 pt-28 md:pt-32 lg:pt-40 flex flex-col">
          <span className="text-2xl md:text-3xl font-semibold">Discord</span>
          <span className="text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
            Join daily discussions, get exclusive updates, and connect with
            fellow WEALTH members
          </span>
          <a href="https://discord.gg/yhvExNh7PK" target="_blank" rel="noopener noreferrer" className="inline-block w-fit">
            <div className="bg-transparent font-bold pr-2 pl-4 md:pl-6 text-white py-2 md:py-2 rounded-full border-2 border-white transition flex gap-2 md:gap-3 items-center hover:bg-white hover:border-2 hover:border-[#1dcb86] hover:text-[#1dcb86] group">
              <span className="text-sm md:text-base">Join Us</span>
              <div className="transform rotate-[-45deg] bg-white rounded-full p-2 md:p-3 lg:p-4 text-[#1dcb86] group-hover:bg-[#1dcb86] group-hover:text-white transition-colors">
                <ArrowRight className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="bg-[#FDCCDB] relative overflow-hidden shadow-xl shadow-black/50 w-full md:w-1/2 rounded-2xl z-20">
        <Image
          src={TelegramIcons}
          alt="Telegram Icon"
          className="absolute -top-3 md:-top-5 -right-3 md:-right-5 w-20 h-20 md:w-24 md:h-24 lg:w-auto lg:h-auto pointer-events-none"
        />
        <div className="relative z-10 p-4 md:p-6 pt-28 md:pt-32 lg:pt-40 flex flex-col">
          <span className="text-2xl md:text-3xl font-semibold">Telegram</span>
          <span className="text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
            Get instant updates, participate in community polls, and stay
            connected on the go
          </span>
          <a href="https://t.me/thewealthcrypto_community" className="inline-block w-fit">
            <div className="bg-transparent font-bold pr-2 pl-4 md:pl-6 text-black py-2 md:py-2 rounded-full border-2 border-black transition flex gap-2 md:gap-3 items-center hover:bg-white hover:border-2 hover:border-[#1dcb86] hover:text-[#1dcb86] group">
              <span className="text-sm md:text-base">Join Us</span>
              <div className="transform rotate-[-45deg] bg-[#F95A8A] rounded-full p-2 md:p-3 lg:p-4 text-white group-hover:bg-white group-hover:text-[#1dcb86] transition-colors">
                <ArrowRight className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 z-0 pointer-events-none w-dvw h-full">
              <Image src={Euforia} alt="Euforia background" fill className="object-cover w-full" />
            </div>
    </div>
  );
};

export default GroupSection;
