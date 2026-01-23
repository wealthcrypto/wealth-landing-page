"use client";
import Image from "next/image";
import React from "react";
import ConcertImg from "@/public/images/Concert.png";
import Elevate2 from "../common/Elevate2";
import { motion } from "framer-motion";

const FutureSection = () => {
  return (
    <motion.div 
      className="w-11/12 mx-auto mt-5"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div 
        className="w-full mx-auto relative"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.01 }}
      >
        <motion.div 
          className="absolute inset-0 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="w-full sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-auto">
            <Elevate2 />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={ConcertImg}
            alt="Concert"
            className="w-full h-auto rounded-3xl"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FutureSection;
