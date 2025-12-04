import React from "react";
import Image from "next/image";
import Community from '@/public/assets/Community2.svg';
import Grow from '@/public/assets/Grow.svg';
import Shield from '@/public/assets/Shiled.svg';
import Team from '@/public/assets/Time.svg';
import LineSpringRed from "./icons/LineSpringRed";
import CircleGreen from "./icons/CircleGreen";
import GrowthPink from "./icons/GrowhPink";
import StarRed from "./icons/StarsRed";

const DistributionSection: React.FC = () => {
  const items = [
    {
      id: 1,
      title: "Private Sale & Presale",
      amount: "540K WEALTH",
      desc: "A strategic allocation for early supporters who believe in the foundation of the WEALTH ecosystem.",
      percent: 30,
      icon: Community,
    },
    {
      id: 2,
      title: "Exchange Listing",
      amount: "360K WEALTH",
      desc: "Reserved to strengthen liquidity and ensure smooth market access when WEALTH enters exchanges.",
      percent: 20,
      icon: Grow,
    },
    {
      id: 3,
      title: "Marketing & Operations",
      amount: "270K WEALTH",
      desc: "Allocated to expand reach, grow our presence, and support key operational needs.",
      percent: 15,
      icon: Shield,
    },
    {
      id: 4,
      title: "Team & Reserve",
      amount: "630K WEALTH",
      desc: "Dedicated to the builders behind the ecosystem and the long-term reserve ensuring continuity.",
      percent: 35,
      icon: Team,
    },
  ];

  return (
    <section className="py-10 md:py-16 lg:py-20 px-4 md:px-6 max-w-6xl mx-auto font-inter" aria-labelledby="distribution-heading">
      <div className="text-center md:text-right mb-8 md:mb-12 font-body">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-end space-y-3 md:space-y-0 md:space-x-3 font-body pt-10 md:pt-20 relative">
          <span className="text-2xl md:text-3xl lg:text-4xl">Token</span>
          <div className="bg-[#19CC85] flex items-center justify-center p-3 md:p-4 rounded-lg -rotate-1 z-10">
            <span className="text-2xl md:text-3xl lg:text-4xl text-white">Distribution</span>
          </div>
          <LineSpringRed className="absolute -right-10 md:-right-20 -top-20 md:-top-42 w-20 h-20 md:w-32 md:h-32 pointer-events-none select-none z-0" />
        </div>
        <p className="text-gray-600 text-sm md:text-base mt-4 max-w-full mx-auto md:mx-0 md:ml-auto">
          Total supply : 1.800.000 WEALTH
          <br />
          Our token distribution follows a simple principle: fairness, sustainability, and long-term commitment. Each bucket is crafted to support liquidity, strengthen the ecosystem, reward participation, and empower the people building WEALTH from day one.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:gap-6 my-16 md:my-24 lg:my-36 relative">
        <GrowthPink className="absolute -left-8 md:-left-16 -bottom-8 md:-bottom-16 w-20 h-20 md:w-32 md:h-32 pointer-events-none select-none z-0" />
        <CircleGreen className="absolute -left-8 md:-left-16 -top-8 md:-top-16 w-20 h-20 md:w-32 md:h-32 pointer-events-none select-none z-0" />
        <StarRed className="absolute -right-2 md:-right-4 top-1/2 w-16 h-16 md:w-24 md:h-24 pointer-events-none select-none z-30" />
        <LineSpringRed className="absolute -right-10 md:-right-20 bottom-6 md:bottom-12 w-20 h-20 md:w-32 md:h-32 pointer-events-none select-none z-0" />
        
        {items.map((it) => (
          <article key={it.id} className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start sm:items-center bg-[#8ee6c8] p-3 md:p-4 lg:p-6 rounded-3xl shadow-2xl z-10 relative my-6">
            <div className="min-w-[48px] md:min-w-[64px] min-h-[48px] md:min-h-[64px] rounded-full bg-[#00b37a] flex items-center justify-center shadow-inner mx-auto sm:mx-0">
              <Image
                src={it.icon}
                alt={it.title}
                width={24}
                height={24}
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </div>

            <div className="flex-1 w-full text-center sm:text-left">
              <h3 className="font-body text-xl md:text-2xl lg:text-3xl font-bold text-green-900 mb-2">{it.title}</h3>
              <p className="font-body text-base md:text-lg lg:text-xl font-bold text-green-900 opacity-90 mb-3">{it.amount}</p>
              <p className="text-sm md:text-base text-green-800 opacity-85 mb-4">{it.desc}</p>
              
              <div className="bg-white/55 h-3 md:h-4 rounded-full overflow-hidden mb-2">
                <div 
                  className="h-full bg-[#f43b6b] rounded-full transition-all duration-600 shadow-sm"
                  style={{ width: `${it.percent}%` }}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default DistributionSection;
