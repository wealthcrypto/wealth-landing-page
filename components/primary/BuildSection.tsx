"use client";

import React from "react";
import Image from "next/image";
import FlowerPink from "@/public/images/Flower.svg";
import Button from "../common/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import Com1 from "@/public/images/com1.png";
import Com2 from "@/public/images/com2.png";
import Com3 from "@/public/images/com3.png";
import Link from "next/link";

const BuildSection = () => {
  const data = [
    "Utility Driven Demand",
    "Loyalty Fueled Perks",
    "Community Based",
    "Future-Proof Blockchain Foundation",
  ];
  return (
    <div className="py-10 md:py-16 lg:py-20 relative w-11/12 mx-auto font-dmsans">
      <motion.div 
        className=" bg-gradient-to-r to-[#00EA8D] from-[#18B870] rounded-3xl text-white p-6 md:p-8 lg:p-10 flex flex-col space-y-4 md:space-y-6 lg:space-y-8 text-center z-20 relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        whileHover={{ scale: 1.01, boxShadow: "0 25px 50px rgba(0, 234, 141, 0.3)" }}
      >
        <motion.div
          initial={{ opacity: 0, rotate: -180, scale: 0 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 200 }}
          whileHover={{ rotate: 360, scale: 1.2 }}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 w-6 h-6 sm:w-8 sm:h-8 z-20"
        >
          <Image
            src={FlowerPink}
            alt="Flower Pink"
            className="w-full h-full"
          />
        </motion.div>
        <motion.p 
          className="text-3xl sm:text-4xl md:text-5xl tracking-[-0.06em] font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Build for the <span className="font-extrabold">Long Term</span>
        </motion.p>
        <motion.span 
          className="text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          WEALTH Token isn&apos;t designed for quick flips or speculation. It&apos;s built
          to grow in value as our community and ecosystem expand, creating
          sustainable value for everyone involved.
        </motion.span>
      </motion.div>

      <motion.div 
        className="flex flex-wrap gap-2 md:gap-4 justify-center mt-6 md:mt-8 z-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="text-black bg-[#FFE2E2] rounded-full py-2 md:py-3 w-full flex-1 font-body text-xs md:text-sm lg:text-base text-center whitespace-nowrap"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.05, backgroundColor: "#ffd1d1" }}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="flex flex-col lg:flex-row justify-between mt-10 gap-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <motion.div 
            className="w-full h-full relative flex flex-col justify-between rounded-3xl overflow-hidden p-4 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-bl from-[#01EB8E] to-[#18B870]"
            whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(1, 235, 142, 0.3)" }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="z-10 space-y-1 font-dmsans font-semibold text-white rounded-3xl pb-8 sm:pb-10 md:pb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                <p>Global Network</p>
                <p>
                  Real{" "}
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                    Connections
                  </span>
                </p>
              </div>
              <p className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl pt-3 sm:pt-5 pb-3 sm:pb-5 text-justify">
                The value of WEALTH extends far beyond the digital wallet; it is
                defined by the strength and accessibility of its global
                community.
              </p>
              <p className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-justify">
                We are building the largest, most active decentralized social
                network for the Experience Economy, ensuring you can find
                connection, support, and engagement wherever your lifestyle
                takes you.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: -180, scale: 0 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 200 }}
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
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Link href="#contact" className="w-full flex justify-end">
                <Button
                  label="Contact Us"
                  size="lg"
                  primaryColor="#F7004B"
                  icon={<ArrowRight className="-rotate-45" />}
                  secondaryColor="#FFFFFF"
                  className="w-7/12 ps-10"
                />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="flex flex-col justify-between flex-1 space-y-3"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <p className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-6 md:left-10 z-10 font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Community Meetups
            </p>
            <Image
              src={Com1}
              alt="Com1"
              className="max-h-64 rounded-3xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 rounded-3xl bg-black/10 z-10 pointer-events-none" />
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileHover={{ scale: 1.05, rotate: -1 }}
          >
            <p className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-6 md:left-10 z-10 font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Real-Life Events
            </p>
            <Image
              src={Com2}
              alt="Com2"
              className="max-h-64 rounded-3xl shadow-lg object-cover blur-0"
            />
            <div className="absolute inset-0 rounded-3xl bg-black/10 z-10 pointer-events-none" />
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <p className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-6 md:left-10 z-20 font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Community Support
            </p>
            <Image
              src={Com3}
              alt="Com3"
              className="max-h-64 rounded-3xl shadow-lg object-cover w-full h-auto"
            />
            <div className="absolute inset-0 rounded-3xl bg-black/10 z-10 pointer-events-none" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BuildSection;
