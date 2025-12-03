import React from 'react'
import DiscordIcons from '@/public/assets/DiscordIconGreen.svg';
import TelegramIcons from '@/public/assets/TelegramRed.svg';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const GroupSection = () => {
  return (
    <div className='flex justify-center space-x-6 py-10 w-9/12 mx-auto'>
        <div className="bg-[#8BDBBB] relative overflow-hidden w-2/4 rounded-2xl shadow-xl shadow-black/50">
          <Image src={DiscordIcons} alt="Discord Icon" className="absolute -top-5 -right-10 pointer-events-none" />
          <div className="relative z-10 p-6 pt-40 flex flex-col ">
            <span className="text-3xl">Discord</span>
            <span className="text-xl">8,500+ members</span>
            <span className="text-base">Join daily discussions, get exclusive updates, and connect with fellow WEALTH members</span>
            <a href="">
              <div className="mt-6 max-w-fit bg-transparent  font-bold pr-2 ps-6 text-white py-2 rounded-full border-2 border-white  transition flex gap-3 items-center hover:bg-white hover:border-2 hover:border-[#1dcb86] hover:text-[#1dcb86]">
            Join Us
            <div
              className="transform rotate-[-45deg] bg-white rounded-full ml-2 p-2 sm:p-3 md:p-4 text-[#1dcb86]"
            >
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
            </div>
              </div>
            </a>
          </div>
        </div>
        <div className="bg-[#F9FFC4] relative overflow-hidden  shadow-xl shadow-black/50 w-2/4 rounded-2xl">
          <Image src={TelegramIcons} alt="Telegram Icon" className="absolute -top-5 -right-5 pointer-events-none" />
          <div className="relative z-10 p-6 pt-40 flex flex-col ">
            <span className="text-3xl">Telegram</span>
            <span className="text-xl">12,000+ members</span>
            <span className="text-base">Get instant updates, participate in community polls, and stay connected on the go</span>
            <a href="">
              <div className="mt-6 max-w-fit bg-transparent  font-bold pr-2 ps-6 text-black py-2 rounded-full border-2 border-black  transition flex gap-3 items-center hover:bg-white hover:border-2 hover:border-[#1dcb86] hover:text-[#1dcb86]">
            Join Us
            <div
              className="transform rotate-[-45deg] bg-[#1dcb86] rounded-full ml-2 p-2 sm:p-3 md:p-4 text-white"
            >
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
            </div>
              </div>
            </a>
          </div>
        </div>
    </div>
  )
}

export default GroupSection