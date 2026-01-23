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
import GrowthPink from "../temp/icons/GrowhPink";
import LineSpringGreen from "../temp/icons/LineSpringGreen";

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
          cardColor: "bg-[#F7004B]",
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
      className="flex items-center justify-center font-body w-11/12 mx-auto p-6 sm:p-8 md:p-10 bg-[#FFE2E2] rounded-3xl"
    >
      <div className="w-full md:w-10/12 lg:w-9/12 relative z-20">
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center space-x-3 z-30 relative"
        >
          <span className="text-3xl sm:text-4xl md:text-5xl font-dmsans text-center font-semibold">The Journey Ahead</span>
          
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="w-full sm:w-10/12 md:w-8/12 lg:w-7/12 mx-auto mt-6 sm:mt-8 md:mt-10 mb-8 sm:mb-10 md:mb-12"
        >
          <span className="text-wealth-navy text-base sm:text-lg font-body text-center">
            Our roadmap isn&apos;t just about features—it&apos;s about building a lifestyle ecosystem that grows with our community&apos;s dreams and aspirations.
          </span>
        </motion.div>

        <motion.div variants={fadeInUp} className="py-4">
          <div className="relative">
            <div className="absolute left-1/2 md:left-6 top-12 bottom-24 w-0.5 bg-green-200 z-0 -translate-x-1/2 md:translate-x-0" />

            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {journeyData.map((item, index) => {
                const config = getStatusConfig(item.status);
                
                return (
                  <motion.div 
                    key={item.id}
                    variants={fadeInUp} 
                    className="flex flex-col md:flex-row items-center justify-center relative z-30"
                  >
                    <div className="w-full md:w-24 flex flex-col items-center relative z-20 mb-4 md:mb-0 md:-ml-6">
                      <div className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full ${config.bgColor} ${config.textColor} relative z-20`}>
                        <Image src={config.icon} alt={item.status} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                      </div>
                      <div className="mt-2 text-xs sm:text-sm text-gray-600">{item.quarter}</div>
                      <div className={`text-xs ${config.badgeColor} px-2 py-0.5 rounded-full capitalize`}>
                        {item.status}
                      </div>
                    </div>

                    <div className={`flex-1 ${config.cardColor} ${config.textColor} rounded-xl p-4 sm:p-5 md:p-6 shadow-md relative z-50 overflow-visible mx-0 md:mx-5`}>
                      <h3 className={`text-lg sm:text-xl mb-1 ${config.textColor} font-semibold`}>{item.title}</h3>
                      <p className="text-sm sm:text-base mb-3 sm:mb-4">
                        {item.description}
                      </p>

                      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm ${config.textColor}`}>
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

      {/* <div className="absolute bottom-0 z-10 pointer-events-none w-full h-1/3 md:h-1/2">
        <Image src={Euforia} alt="Euforia background" fill className="object-cover w-full" />
      </div> */}
    </motion.div>
  );
};

export default JourneySection;
