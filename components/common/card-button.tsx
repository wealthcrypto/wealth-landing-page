"use client";

import React from "react";
import Button from "./button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import FlowerPink from "@/public/images/FlowerPink.svg";
import { motion } from "framer-motion";
import Link from "next/link";

const ElevateCard = () => {
  return (
    <motion.div 
      className="w-full h-full bg-[#f7004b] relative flex flex-col justify-between rounded-3xl overflow-hidden p-4 sm:p-6 md:p-8 lg:p-10"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(247, 0, 75, 0.3)" }}
    >
      <motion.div 
        className="z-10 space-y-1 font-dmsans font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white rounded-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Ready to Elevate
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Your{" "}
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Lifestyle?
          </span>
        </motion.p>
        <motion.p 
          className="font-medium text-base sm:text-lg md:text-xl pt-3 sm:pt-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Stop just living— start earning your future.
        </motion.p>
        <motion.p 
          className="font-medium text-base sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Join the Live-to-Earn movement today.
        </motion.p>
      </motion.div>
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
      <motion.div 
        className="flex justify-end mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <Link href="#contact" className="w-full flex justify-end">
        <Button
          label="Join Us"
          size="lg"
          primaryColor="#FFBAFD"
          icon={<ArrowRight className="-rotate-45" />}
          secondaryColor="#F7004B"
          className="w-full sm:w-7/12 md:w-6/12 lg:w-7/12 ps-10"
        />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ElevateCard;

//
