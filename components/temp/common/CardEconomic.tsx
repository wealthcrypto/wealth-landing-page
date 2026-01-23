"use client";

import React from "react";
import CicleGreen from "@/public/assets/CicleGreen.svg";
import BounceGreen from "@/public/assets/BounceGreen.svg";
import LoveIcons from "@/public/assets/LoveIcons.svg";
import DotsIcons from "@/public/assets/DotsIcons.svg";
import FlowerIcons from "@/public/assets/FlowerIcons.svg";
import LineString from "@/public/assets/LineString.svg";
import GearIcon from "@/public/assets/gear.svg";
import GearIcons from "@/public/assets/GearIcon.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const CardEconomic = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-16 md:my-24 lg:my-32 px-4 w-10/12 max-w-6xl mx-auto"
    >
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-[#8BDBBB] rounded-[15px] p-6 sm:p-8 md:p-12 w-full flex flex-col items-start space-y relative overflow-hidden"
      style={{ boxShadow: "8px 8px 24px rgba(0,0,0,0.55)" }}
    >
      <div
        className="absolute -bottom-4 -right-4 pointer-events-none z-0"
        aria-hidden="true"
      >
        <Image
        src={CicleGreen}
        alt="Circle Green"
        className="w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 object-contain"
        />
      </div>
      {/* <Image src={CicleGreen} alt="Circle Green" className="w-1/2 " /> */}
      <div className="border-2 border-white rounded-xl flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
        <Image src={LoveIcons} alt="Love Icons" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
      </div>
      <div className="space-y-2 text-black mt-6 sm:mt-8 md:mt-12">
        <p className="font-body text-3xl sm:text-4xl md:text-5xl">1 Billion</p>
        <p className="font-reflet text-4xl sm:text-5xl md:text-7xl">wealth</p>
        <p className="font-body text-2xl ">Token Supply</p>
        <p className="font-body text-xs sm:text-sm w-10/12">
        Fixed supply ensures scarcity and value preservation
        </p>
      </div>
    </motion.div>
      <motion.div
        variants={fadeInUp}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{ boxShadow: "8px 8px 24px rgba(0,0,0,0.55)" }}
        className="bg-[#19CC85] text-white shadow-slate-900/20 rounded-[15px] p-6 sm:p-8 md:p-12 w-full flex flex-col items-start space-y relative overflow-hidden"
      >
        <div
          className="absolute -bottom-4 -right-4 pointer-events-none z-0"
          aria-hidden="true"
        >
          <Image
            src={BounceGreen}
            alt="Circle Green"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 object-contain"
          />
        </div>
        {/* <Image src={CicleGreen} alt="Circle Green" className="w-1/2 " /> */}
        <div className="border-2 border-white rounded-xl flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
          <Image src={GearIcon} alt="Gear Icons" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        </div>
        <div className="space-y-2 text-white mt-6 sm:mt-8 md:mt-12">
          <p className="font-body text-3xl sm:text-4xl md:text-5xl">Utility</p>
          <p className="font-reflet text-4xl sm:text-5xl md:text-7xl">Lifestyle Access</p>
          <p className="font-body text-2xl ">Token Type</p>
          <p className="font-body text-xs sm:text-sm w-10/12">
            Designed for experiences, not speculation
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeInUp}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{ boxShadow: "8px 8px 24px rgba(0,0,0,0.55)" }}
        className="bg-[#F7004B] shadow-slate-900/20 rounded-[15px] p-6 sm:p-8 md:p-12 w-full flex flex-col items-start space-y relative overflow-hidden"
      >
        <div
          className="absolute bottom-4 -right-4 pointer-events-none z-0"
          aria-hidden="true"
        >
          <Image
            src={DotsIcons}
            alt="Circle Green"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 object-contain"
          />
        </div>
        {/* <Image src={CicleGreen} alt="Circle Green" className="w-1/2 " /> */}
        <div className="border-2 border-white rounded-xl flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
          <Image src={FlowerIcons} alt="Flower Icons" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        </div>
        <div className="space-y-2 text-white mt-6 sm:mt-8 md:mt-12">
          <p className="font-body text-3xl sm:text-4xl md:text-5xl">2.5%</p>
          <p className="font-reflet text-4xl sm:text-5xl md:text-7xl">quaterly</p>
          <p className="font-body text-2xl ">Burn Mechanism</p>

          <p className="font-body text-xs sm:text-sm w-10/12">
            Regular token burns to maintain healthy economics
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeInUp}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{ boxShadow: "8px 8px 24px rgba(0,0,0,0.55)" }}
        className="bg-[#F9FFC4] shadow-slate-900/20 rounded-[15px] p-6 sm:p-8 md:p-12 w-full flex flex-col items-start space-y relative overflow-hidden"
      >
        <div
          className="absolute -bottom-4 -right-4 pointer-events-none z-0"
          aria-hidden="true"
        >
          <Image
            src={LineString}
            alt="Line String"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 object-contain"
          />
        </div>
        {/* <Image src={CicleGreen} alt="Circle Green" className="w-1/2 " /> */}
        <div className="border-2 border-black rounded-xl flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
          <Image src={GearIcons} alt="Gear Icons" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        </div>
        <div className="space-y-2 text-black mt-6 sm:mt-8 md:mt-12">
          <p className="font-body text-3xl sm:text-4xl md:text-5xl">Up to 12%</p>
          <p className="font-reflet text-4xl sm:text-5xl md:text-7xl">APY</p>
          <p className="font-body text-2xl ">Staking Reward</p>
          <p className="font-body text-xs sm:text-sm w-10/12">
            Earn rewards for holding and participating
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CardEconomic;
