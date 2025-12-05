"use client";
import Image from "next/image";
import React from "react";
import Future from "@/public/assets/Experience.svg";
import { ArrowRight } from "lucide-react";
import PadelBackground from "@/public/cards/Party.svg";
import AscendYellow from "@/components/icons/AscendYellow";
import CirclePink from "./icons/CirclePink";
import {motion} from "framer-motion";

const FutureSection = () => {
  return (
    <div className="bg-[#19CC85] w-full min-h-screen flex justify-center items-center px-4 py-8 md:px-8" style={{backgroundImage : `url(${PadelBackground.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
      <div className="w-full max-w-4xl flex flex-col justify-center bg-[#5EDCAA] rounded-2xl my-8 md:my-20 lg:my-40 p-6 md:p-8 lg:p-12 items-center relative">
        <AscendYellow className="absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 w-16 h-8 md:w-32 md:h-16 lg:w-40 lg:h-20 pointer-events-none" />
        <CirclePink className="absolute -top-6 md:-top-12 lg:-top-16 -left-6 md:-left-12 lg:-left-16 w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32 pointer-events-none " />
        
        <motion.div
          className="flex flex-col text-white w-full max-w-2xl space-y-4 md:space-y-6 z-20 text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.12, when: "beforeChildren", duration: 0.6 },
            },
          }}
        >
          <motion.div
            className="space-y-2"
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          >
            <motion.div
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl"
              variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
            >
              <span className="block">Shape Your Next</span>
            </motion.div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
              <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
              >
          <Image
            src={Future}
            alt="Future"
            className="h-16 w-24 sm:h-20 sm:w-32 md:h-28 md:w-48 lg:h-36 lg:w-56 object-contain"
          />
              </motion.div>

              <motion.span
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl"
          variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
              >
          With Us.
              </motion.span>
            </div>
          </motion.div>

          <motion.p
            className="text-sm sm:text-base md:text-lg font-body max-w-md sm:max-w-lg mx-auto leading-relaxed"
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          >
            Community is at the heart of $WEALTH. Connect with us and collectively build the future of $WEALTH today.
          </motion.p>

          <div className="flex justify-center pt-2 md:pt-4">
            <motion.a
              href="#joinnow"
              className="inline-block"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
            >
              <div className="bg-transparent font-bold pr-2 pl-4 md:pl-6 text-white py-2 md:py-3 rounded-full border-2 border-white transition flex gap-2 md:gap-3 items-center hover:bg-white hover:border-white hover:text-[#1dcb86] group">
          <span className="text-sm md:text-base lg:text-lg">Join Now</span>
          <div className="transform rotate-[-45deg] bg-white rounded-full p-2 md:p-3 lg:p-4 text-[#1dcb86] group-hover:bg-[#1dcb86] group-hover:text-white transition-colors">
            <ArrowRight className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
          </div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FutureSection;
