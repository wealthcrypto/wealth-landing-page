"use client";

import React from "react";
import Button from "./button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import FlowerPink from "@/public/images/Flower.svg";
import { motion } from "framer-motion";
import Link from "next/link";

const Elevate2 = () => {
  return (
    <motion.div 
      className="w-full h-full relative flex flex-col justify-between rounded-3xl overflow-hidden p-4 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-bl from-[#01EB8E] to-[#18B870]"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(1, 235, 142, 0.3)" }}
    >
      <motion.div 
        className="z-10 space-y-1 font-dmsans font-semibold text-white rounded-3xl pb-8 sm:pb-12 md:pb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Shape Your Next
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Experience{" "}
            </span>
            With Us.
          </motion.p>
        </div>
        <motion.p 
          className="font-medium text-base sm:text-lg md:text-xl pt-3 sm:pt-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Community is at the heart of WEALTH. Connect with us and
        </motion.p>
        <motion.p 
          className="font-medium text-base sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          collectively build the future of WEALTH today.
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
        className="flex justify-end"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <Link href="#contact" className="w-full flex justify-end">
        <Button
          label="Join Us"
          size="lg"
          primaryColor="#DEFFF2"
          icon={<ArrowRight className="-rotate-45" />}
          secondaryColor="#02E98D"
          className="w-full sm:w-7/12 md:w-6/12 lg:w-7/12 ps-10"
        />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Elevate2;
