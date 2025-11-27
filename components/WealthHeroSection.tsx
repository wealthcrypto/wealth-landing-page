"use client";

import React from "react";
import GoodLife from "@/public/good_life.png";
import Bounces from "@/public/bounces.png";
import Circle from "@/public/circle.png";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import Community from "@/public/assets/community.svg";
import Fnb from "@/public/assets/fnb.svg";
import Music from "@/public/assets/music.svg";
import Sports from "@/public/assets/sport.svg";

type StaticImageData = typeof Sports;

export default function WealthHeroSection() {
  const list_head: string[] = ["Sports", "Music", "F&B", "Community"];

  const list_icons: StaticImageData[] = [Sports, Music, Fnb, Community];

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
    <motion.section
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="relative min-h-dvh flex items-center justify-center px-4"
    >
      <motion.div
        variants={fadeInUp}
        className="text-center max-w-full -mt-20 md:-mt-32"
      >
        {/* Headline */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-10 mb-10 md:mb-20">
          {list_icons.map((icon, index) => (
            <motion.div
              key={list_head[index]}
              variants={fadeInUp}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center"
            >
              <div className="mx-2 bg-[#CE910E] rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center mb-2">
                <Image
                  src={icon}
                  alt={list_head[index]}
                  className="w-full h-full object-contain p-1.5 sm:p-2 md:p-3"
                />
              </div>
              <span className="text-xs sm:text-sm md:text-base font-body text-wealth-navy">{list_head[index]}</span>
            </motion.div>
          ))}
        </div>
        <motion.span
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-7xl font-body font-normal text-wealth-navy"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0">
            <span>Live the</span>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Image
                src={GoodLife}
                alt="good life"
                className="inline-block w-32 sm:w-40 md:w-60 object-contain"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-2 md:mt-0"
          >
            powered by{" "}
            <span
              className="bg-gradient-to-r from-[#d59c19] -mt-4 to-[#b46f27] bg-clip-text text-transparent"
              style={{ WebkitTextStroke: "2px #b46f27" }}
            >
              $WEALTH
            </span>
          </motion.div>
        </motion.span>

        {/* Subheading */}
        <motion.p
          variants={fadeInUp}
          className="text-base md:text-lg text-wealth-gray-600 max-w-lg mx-auto px-4"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        </motion.p>

        {/* CTA Button */}
        <motion.a variants={fadeInUp} href="" className="mt-8 md:mt-12 inline-block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="!bg-[#1dcb86] !text-white ps-4 md:ps-6 pe-2 font-body text-sm sm:text-base md:text-lg py-2 rounded-full inline-flex items-center gap-2"
          >
            Explore Wealth
            <motion.div
              whileHover={{ rotate: 0 }}
              initial={{ rotate: -45 }}
              transition={{ duration: 0.3 }}
              className="transform rotate-[-45deg] bg-white rounded-full ml-2 p-2 sm:p-3 md:p-4 text-[#1dcb86]"
            >
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
            </motion.div>
          </motion.button>
        </motion.a>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.4 },
              scale: { duration: 0.8, delay: 0.4 },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute bottom-1/4 left-[10%] md:left-1/4 w-20 h-20 md:w-32 md:h-32"
          >
            <Image
              src={Circle}
              alt="circle"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.8 },
              scale: { duration: 0.8, delay: 0.8 },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute bottom-32 md:bottom-56 right-8 md:right-72 w-24 h-24 md:w-44 md:h-44"
          >
            <Image
              src={Bounces}
              alt="bounces"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
