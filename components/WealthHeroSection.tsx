"use client";

import React from "react";
import GoodLife from "@/public/good_life.png";
import Bounces from "@/public/bounces.png";
import Circle from "@/public/circle.png";
import { ArrowRight, Percent } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import Growth from "@/public/Growth.svg";
import Stars from "@/public/Stars.svg";
import RedCircle from "@/public/Circle.svg";
import Ascend from "@/public/Ascend1.svg";
import Link from "next/link";


export default function WealthHeroSection() {

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
      {/* Background Elements - moved outside main content */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
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
          className="absolute top-36 left-[8%] md:left-1/4 w-20 h-20 md:w-32 md:h-32"
        >
          <Image
            src={Growth}
            alt="growth"
            className="w-full h-full"
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
          className="absolute top-24 right-[10%] md:right-1/4 w-20 h-20 md:w-32 md:h-32"
        >
          <Image
            src={Stars}
            alt="stars"
            className="w-full h-full"
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
            src={RedCircle}
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
          className="absolute bottom-32 md:bottom-56 right-8 md:right-72 h-32 w-32 md:w-32 md:h-32"
        >
          <Image
            src={Ascend}
            alt="ascend"
            className="w-full h-full"
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
          className="absolute top-2/4 right-5 md:right-44 w-20 h-20 md:w-32 md:h-32"
        >
          <div className="w-10 h-10 rounded-full bg-[#F7004B]"></div>
        </motion.div>
      </div>

      <motion.div
        variants={fadeInUp}
        className="text-center max-w-full -mt-20 md:-mt-32 relative z-10"
      >
        
        <motion.span
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-7xl font-body font-normal text-wealth-navy z-30"
        >
            <div className="relative z-50 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0">
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
          className="text-base md:text-lg text-wealth-gray-600 max-w-lg mx-auto px-4 z-10"
        >
          One currency for the life you love.
          From your morning coffee to nightlife, events, and travel.
          $WEALTH transforms daily experiences into long-term value.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={fadeInUp} className="mt-8 md:mt-12 inline-block z-50">
          <Link href="/presale" className="inline-flex focus-visible:outline-none">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="!bg-[#1dcb86] !text-white ps-4 md:ps-6 pe-2 font-body text-sm sm:text-base md:text-lg py-2 rounded-full inline-flex items-center gap-2"
              type="button"
            >
              Presale
              <motion.div
                whileHover={{ rotate: 0 }}
                initial={{ rotate: -45 }}
                transition={{ duration: 0.3 }}
                className="transform rotate-[-45deg] bg-white rounded-full ml-2 p-2 sm:p-3 md:p-4 text-[#1dcb86]"
              >
                <Percent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>

        {/* Background Elements
        <div className="absolute inset-0 -z-10 w-dvw h-dvh pointer-events-none overflow-hidden">
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
            className="absolute top-36 left-[8%] md:left-1/4 w-20 h-20 md:w-32 md:h-32 pointer-events-none"
          >
            <Image
              src={Growth}
              alt="growth"
              className="w-full h-full"
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
            className="absolute top-24 right-[10%] md:right-1/4 w-20 h-20 md:w-32 md:h-32 pointer-events-none"
          >
            <Image
              src={Stars}
              alt="stars"
              className="w-full h-full"
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
            className="absolute bottom-1/4 left-[10%] md:left-1/4 w-20 h-20 md:w-32 md:h-32 pointer-events-none"
          >
            <Image
              src={RedCircle}
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
            className="absolute bottom-32 md:bottom-56 right-8 md:right-72 h-32 w-32 md:w-32 md:h-32 pointer-events-none"
          >
            <Image
              src={Ascend}
              alt="ascend"
              className="w-full h-full"
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
            className="absolute top-2/4 right-5 md:right-44 w-20 h-20 md:w-32 md:h-32 pointer-events-none"
          >
            <div className="w-10 h-10 rounded-full bg-[#F7004B]"></div>
          </motion.div> */}
          
        {/* </div> */}
      </motion.div>
    </motion.section>
  );
}
