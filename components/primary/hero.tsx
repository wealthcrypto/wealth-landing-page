"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../common/button";
// Use image paths (strings) so Next Image works correctly with `fill`
const ILLUSTRATION_1 = "/images/Wealth Website Illustration 1.svg";
const ILLUSTRATION_2 = "/images/Wealth Website Illustration 2.svg";
import { Percent } from "lucide-react";

const HeroComponents = () => {
  return (
    <div className="min-h-screen w-dvw flex items-center justify-center relative px-4 py-16 sm:py-20 md:py-0">
      <motion.div
        className="absolute left-0 sm:left-2 md:left-4 xl:left-10 top-1/4 -translate-y-1/2 z-10 pointer-events-none"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="relative w-[150px] sm:w-[200px] md:w-[260px] lg:w-[300px] xl:w-[500px] h-[150px] sm:h-[200px] md:h-[260px] lg:h-[300px] xl:h-[500px]">
          <Image
            src={ILLUSTRATION_1}
            alt="Illustration 1"
            fill
            className="object-contain opacity-80 sm:opacity-90 md:opacity-100"
            priority={false}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute right-0 sm:right-2 md:right-6 xl:right-10 top-1/4 -translate-y-1/2 z-10 pointer-events-none"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <div className="relative w-[150px] sm:w-[200px] md:w-[260px] lg:w-[300px] xl:w-[500px] h-[150px] sm:h-[200px] md:h-[260px] lg:h-[300px] xl:h-[500px]">
          <Image
            src={ILLUSTRATION_2}
            alt="Illustration 2"
            fill
            className="object-contain opacity-80 sm:opacity-90 md:opacity-100"
            priority={false}
          />
        </div>
      </motion.div>

      <div className="flex flex-col items-center justify-center text-center z-20 max-w-4xl mx-auto">
        <motion.p
          className="font-dm-sans font-medium text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl italic mb-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Live the Good Life
        </motion.p>

        <motion.p
          className="font-dm-sans font-medium text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl italic mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Powered by
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Image
            src="/images/Wealth Website Group.svg"
            alt="Wealth Text"
            width={500}
            height={200}
            className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto mx-auto mb-4 sm:mb-6"
          />
        </motion.div>

        <motion.div
          className="font-dm-sans font-medium text-xs sm:text-sm md:text-lg lg:text-xl space-y-1 mb-6 sm:mb-8 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p>One currency for the life you love.</p>
          <p>From your morning coffee to nightlife, events, and travel.</p>
          <p>$WEALTH transforms daily experiences into long-term value.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button
            label="Presale"
            size="lg"
            primaryColor="#00c77f"
            secondaryColor="#fff"
            icon={<Percent className="-rotate-45" />}
            href="/presale"
            className="mt-4"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroComponents;
