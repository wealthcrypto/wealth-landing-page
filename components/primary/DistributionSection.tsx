"use client";

import React from "react";
import Image from "next/image";
import Community from "@/public/assets/Community2.svg";
import Grow from "@/public/assets/Grow.svg";
import Shield from "@/public/assets/Shiled.svg";
import Team from "@/public/assets/Time.svg";
import { motion } from "framer-motion";

import FlowerPink from "@/public/images/Flower.svg";

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
    <motion.section
      className="w-11/12 mx-auto font-inter mt-4"
      aria-labelledby="distribution-heading"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div 
        className="bg-[#F7004B] rounded-3xl font-dmsans relative my-2"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.01, boxShadow: "0 25px 50px rgba(247, 0, 75, 0.3)" }}
      >
        <div className="relative p-6 md:p-8 lg:p-10 text-white overflow-hidden rounded-3xl flex flex-col text-center space-y-2">
          <motion.p 
            className="font-extrabold text-3xl sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Token Distribution
          </motion.p>
          <motion.span 
            className="font-extrabold text-xl sm:text-2xl md:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Total supply : 1.800.000 WEALTH
          </motion.span>
          <motion.span 
            className="text-sm sm:text-base md:text-lg w-full sm:w-11/12 md:w-10/12 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Our token distribution follows a simple principle: fairness, sustainability, and long-term commitment. Each bucket is crafted to support liquidity, strengthen the ecosystem, reward participation, and empower the people building WEALTH from day one.
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0, rotate: -180, scale: 0 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 200 }}
          whileHover={{ rotate: 360, scale: 1.2 }}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 w-6 h-6 sm:w-8 sm:h-8 z-20"
        >
          <Image
            src={FlowerPink}
            alt="Flower Pink"
            className="w-full h-full"
          />
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1  relative">
        {items.map((it, index) => (
          <motion.article
            key={it.id}
            className="flex flex-col sm:flex-row gap-4 md:gap-10 items-start sm:items-center bg-[#00ea8c64] p-3 md:p-4 lg:p-6 lg:ps-10 rounded-3xl shadow-2xl z-10 relative my-2"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.02, backgroundColor: "#00ea8c88", boxShadow: "0 15px 30px rgba(0, 234, 140, 0.3)" }}
          >
            <motion.div 
              className="min-w-[48px] md:min-w-[64px] min-h-[48px] md:min-h-[64px] rounded-full bg-[#00b37a] flex items-center justify-center shadow-inner mx-auto sm:mx-0"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 360 }}
            >
              <Image
                src={it.icon}
                alt={it.title}
                width={24}
                height={24}
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </motion.div>

            <div className="flex-1 w-full text-center sm:text-left">
              <motion.h3 
                className="font-body text-xl md:text-2xl lg:text-3xl font-bold text-green-900 mb-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                {it.title}
              </motion.h3>
              <motion.p 
                className="font-body text-base md:text-lg lg:text-xl font-bold text-green-900 opacity-90 mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                {it.amount}
              </motion.p>
              <motion.p 
                className="text-sm md:text-base text-green-800 opacity-85 mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                {it.desc}
              </motion.p>

              <div className="bg-white/55 h-3 md:h-4 rounded-full overflow-hidden mb-2">
                <motion.div
                  className="h-full bg-[#f43b6b] rounded-full transition-all duration-600 shadow-sm"
                  style={{ width: `${it.percent}%` }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${it.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 + index * 0.1, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default DistributionSection;
