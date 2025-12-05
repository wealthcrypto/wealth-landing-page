"use client";

import React from "react";
import DoneIcon from "@/public/assets/DoneIcon.svg";
import Image from "next/image";
import ActiveIcon from "@/public/assets/ActiveIcon.svg";
import PlannedIcon from "@/public/assets/PlannedIcon.svg";
import CircleGreen from "@/public/assets/CicleGreen.svg";
import CicleRed from "@/public/assets/CicleRed.svg";
import Euforia from "@/public/assets/Euforia.svg";
import { motion } from "framer-motion";
import GrowthPink from "./icons/GrowhPink";
import LineSpringGreen from "./icons/LineSpringGreen";

interface JourneyItem {
  id: number;
  title: string;
  description: string;
  quarter: string;
  status: "done" | "active" | "planned";
  features: string[];
}

const JourneySection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const journeyData: JourneyItem[] = [
    {
      id: 1,
      title: "Launch & Audit",
      description:
        "Initial funding rounds, securing token foundation with smart contract audit, and the first CEX listing.",
      quarter: "Q4 2025",
      status: "active",
      features: [
        "Presale and ICO",
        "Token listing on Coinstore",
        "Smart contract audit"
      ]
    },
    {
      id: 2,
      title: "Visibility & Development",
      description:
        "Visibility on aggregators, product and core brand partner development, and token listings.",
      quarter: "Q1 2026",
      status: "planned",
      features: [
        "Visibility on CMC and CoinGecko",
        "Token listing on INDODAX",
        "Brand partner collaboration",
        "Core product development"
      ]
    },
    {
      id: 3,
      title: "Activation & Brand Scaling",
      description:
        "Initial product features and pilot events, global campaigns, and token listings.",
      quarter: "Q2 2026",
      status: "planned",
      features: [
        "Pilot event activation with brand partners",
        "Initial product features launch",
        "Campaign in TOKEN2049 Dubai and Singapore",
        "Token listing on other local exchange"
      ]
    },
    {
      id: 4,
      title: "Utility & Global Expansion",
      description:
        "Further scaling of networks, new use cases, and major listings on global exchanges.",
      quarter: "Q3 2026",
      status: "planned",
      features: [
        "Brand and partner network expansion",
        "Use case expansion",
        "Token listing on global exchanges"
      ]
    }
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "done":
        return {
          icon: DoneIcon,
          bgColor: "bg-green-500",
          textColor: "text-white",
          badgeColor: "bg-[#19CC85]",
          cardColor: "bg-[#D1F5E7]",
          featureColor: "text-emerald-500"
        };
      case "active":
        return {
          icon: ActiveIcon,
          bgColor: "bg-[#F7004B]",
          textColor: "text-white",
          badgeColor: "bg-[#F7004B]/50",
          cardColor: "bg-[#FDCCDB]",
          featureColor: "text-pink-400"
        };
      case "planned":
        return {
          icon: PlannedIcon,
          bgColor: "bg-[#8BDBBB]",
          textColor: "text-teal-700",
          badgeColor: "bg-[#8BDBBB]",
          cardColor: "bg-[#D1F5E7]",
          featureColor: "text-teal-400"
        };
      default:
        return {
          icon: PlannedIcon,
          bgColor: "bg-gray-500",
          textColor: "text-white",
          badgeColor: "bg-gray-500",
          cardColor: "bg-gray-100",
          featureColor: "text-gray-500"
        };
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="w-full flex items-center justify-center py-20 font-body relative h-full min-h-dvh px-4"
    >
      
      <div className="w-10/12 md:w-9/12 relative z-20">
        <motion.div
          variants={fadeInUp}
          className="flex items-center mr-8 space-x-3 z-30 relative"
        >
          <span className="text-4xl">The Journey</span>
          <div className="bg-[#19CC85] mt-2 mb-6 flex items-center justify-center p-4 rounded-lg rotate-2">
            <span className="text-4xl text-white">Ahead</span>
          </div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="w-10/12 md:w-6/12 my-4 mb-24"
        >
          <span className="text-wealth-navy text-lg font-body text-center md:text-start">
            Our roadmap isn&apos;t just about features—it&apos;s about building a lifestyle ecosystem that grows with our community&apos;s dreams and aspirations.
          </span>
        </motion.div>

        <motion.div variants={fadeInUp} className="py-4">
          <div className="relative">
            {/* vertical line */}
            <div className="absolute md:left-6 left-1/2 top-12 bottom-24 w-0.5 bg-green-200 z-0" />

            <div className="space-y-12">
              {journeyData.map((item, index) => {
                const config = getStatusConfig(item.status);
                
                return (
                  <motion.div 
                    key={item.id}
                    variants={fadeInUp} 
                    className="flex flex-col md:flex-row items-center justify-center relative z-30"
                  >
                    {/* Timeline marker */}
                    <div className="w-full md:w-24 flex flex-col items-center relative z-20 mb-4 md:mb-0 md:-ml-6">
                      <div className={`flex items-center justify-center w-16 h-16 rounded-full ${config.bgColor} ${config.textColor} relative z-20`}>
                        <Image src={config.icon} alt={item.status} />
                      </div>
                      <div className="mt-2 text-sm text-gray-600">{item.quarter}</div>
                      <div className={`text-xs ${config.badgeColor} px-2 rounded-full capitalize`}>
                        {item.status}
                      </div>
                    </div>

                    {/* Card */}
                    <div className={`flex-1 ${config.cardColor} rounded-xl p-6 shadow-md relative z-50 overflow-visible mx-5 md:mx-0`}>
                      <h3 className="text-xl mb-1">{item.title}</h3>
                      <p className="text-md text-gray-700 mb-4">
                        {item.description}
                      </p>

                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-800">
                        {item.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <span className={`${config.featureColor} mr-2`}>✳</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
      <GrowthPink className="absolute top-16 right-2/4 w-24 h-24 md:w-24 md:h-24 pointer-events-none z-0" />
      <LineSpringGreen className="absolute top-28 left-2/4 w-24 h-24 md:w-32 md:h-32 pointer-events-none z-0" />

      {/* <div className="absolute bottom-0 z-10 pointer-events-none w-full h-1/3 md:h-1/2">
        <Image src={Euforia} alt="Euforia background" fill className="object-cover w-full" />
      </div> */}
    </motion.div>
  );
};

export default JourneySection;
