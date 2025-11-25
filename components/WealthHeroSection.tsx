"use client";

import React from "react";
import Flips from "@/public/flips.png";
import GoodLife from "@/public/good_life.png";
import Bounces from "@/public/bounces.png";
import Gtw from "@/public/gtw.png";
import Circle from "@/public/circle.png";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WealthHeroSection() {
  const list_head: string[] = ["Sports", "Music", "F&B", "Community"];

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
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <motion.div
        variants={fadeInUp}
        className="text-center space-y-6 max-w-full -mt-20 md:-mt-32"
      >
        {/* Headline */}
        <span className="text-md md:text-lg font-body font-normal text-wealth-navy">
          {list_head.map((word, index) => (
            <motion.span
              key={index}
              variants={fadeInUp}
              className="inline-block mx-2 md:mx-4 border px-4 py-1 rounded-full text-gray-800 border-[#1dcb86]"
            >
              {word}
            </motion.span>
          ))}
        </span>
        <motion.span
          variants={fadeInUp}
          className="text-4xl md:text-7xl font-body font-normal text-wealth-navy"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0">
            <span>Live the</span>
            <Image
              src={GoodLife}
              alt="good life"
              className="inline-block w-40 md:w-60 object-contain"
            />
          </div>
          <div className="mt-2 md:mt-0">
            powered by{" "}
            <span
              className="bg-gradient-to-r from-[#d59c19] -mt-4 to-[#b46f27] bg-clip-text text-transparent"
              style={{ WebkitTextStroke: "2px #b46f27" }}
            >
              $WEALTH
            </span>
          </div>
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
        <motion.a
          variants={fadeInUp}
          href=""
          className="mt-4 inline-block"
        >
          <button className="!bg-[#1dcb86] !text-white ps-4 md:ps-6 pe-2 font-body text-base md:text-lg py-2 rounded-full inline-flex items-center gap-2">
            Explore Wealth
            <div className="transform rotate-[-45deg] bg-white rounded-full ml-2 p-3 md:p-4 text-[#1dcb86]">
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
            </div>
          </button>
        </motion.a>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
            <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
              rotate: [0, 360],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.2 },
              scale: { duration: 0.2, delay: 0.2 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 10, repeat: Infinity, ease: "linear" },
            }}
            className="absolute top-1/4 left-[10%] md:left-[27%] w-20 h-20 md:w-32 md:h-32"
            >
            <Image
              src={Flips}
              alt="flips"
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
              opacity: { duration: 0.8, delay: 0.6 },
              scale: { duration: 0.8, delay: 0.6 },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute top-20 md:top-40 right-[10%] md:right-[27%] w-16 h-16 md:w-28 md:h-28"
          >
            <Image
              src={Gtw}
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