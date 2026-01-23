"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ElevateCard from "../common/card-button";
import Flower from "../common/Flower";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      // slower stagger so entrance feels deliberate
      staggerChildren: 0.18,
      when: "beforeChildren",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  const ASSET_A = "/images/sport1.png";
  const ASSET_B = "/images/sport2.png";
  const ASSET_C = "/images/sport3.png";
  const ASSET_D = "/images/sport4.png";
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="w-11/12 mx-auto my-16 md:my-24 lg:my-32 pb-8 md:pb-12 lg:pb-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mx-auto !font-dm-sans">
        <div className="flex flex-col space-y-2 flex-1 ">
          <motion.div
            variants={item}
            className="bg-gradient-to-bl from-[#00EA8D] to-[#18B870] rounded-3xl p-8 shadow-lg text-white min-h-[300px] md:min-h-[506px]"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl sm:text-3xl md:text-4xl font-semibold mr-2">
                What is{" "}
                <span className="font-bold text-3xl sm:text-4xl md:text-5xl">Wealth Crypto?</span>
              </span>
              <Flower src="/images/Flower.svg" className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <p className="mb-6 mt-6 text-base md:text-lg font-medium leading-relaxed text-justify">
              WEALTH Token (<span className="font-semibold">$WEALTH</span>)
              transforms your everyday activities – from your favorite cafe
              visits to crucial event tickets – from simple expenditures into
              tangible, digital assets. It connects your favorite places and
              communities into one seamless, rewarding experience.
            </p>
            <p className="text-base md:text-lg leading-relaxed mt-4 text-justify">
              WEALTH operates as an ERC-20 utility token on the Ethereum
              blockchain, giving you a secure, verifiable way to build wealth
              just by living the life you love.
            </p>
          </motion.div>
          <div className="flex flex-col md:flex-row mt-2 gap-2">
            <motion.div
              variants={item}
              className="w-full h-[120px] sm:h-[156px] md:h-[200px] relative"
            >
              <Image
                src={ASSET_C}
                alt="Sport 3"
                fill
                className="object-cover rounded-[37px] shadow-md"
                priority
              />
            </motion.div>
            <motion.div
              variants={item}
              className="w-full h-[120px] sm:h-[156px] md:h-[200px] relative"
            >
              <Image
                src={ASSET_D}
                alt="Sport 4"
                fill
                className="object-cover rounded-[37px] shadow-md"
                priority
              />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 flex-1">
          <div className="flex flex-col md:flex-row mt-2 gap-2 flex-1 h-auto md:h-2/5">
            <motion.div
              variants={item}
              className="w-full h-[200px] md:h-full relative"
            >
              <Image
                src={ASSET_A}
                alt="Sport 3"
                fill
                className="object-cover rounded-[37px] shadow-md"
                priority
              />
            </motion.div>
            <motion.div
              variants={item}
              className="w-full h-full relative"
            >
              <Image
                src={ASSET_B}
                alt="Sport 4"
                fill
                className="object-cover rounded-[37px] shadow-md"
                priority
              />
            </motion.div>
          </div>
          <div className="mt-4 md:mt-2 h-auto md:h-3/5 rounded-3xl">
            <ElevateCard />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
