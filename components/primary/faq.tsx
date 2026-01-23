"use client";

import React from "react";
import Button from "../common/button";
import { ArrowRight } from "lucide-react";
import Faq1Img from "@/public/images/faq1.png";
import Faq2Img from "@/public/images/faq2.png";
import Faq3Img from "@/public/images/faq3.png";
import Image from "next/image";
import GrowthGreen from "../temp/icons/GrowhGreen";
import { motion } from "framer-motion";
import Link from "next/link";

const Faq = () => {
  return (
    <motion.div 
      className="flex flex-col lg:flex-row w-11/12 mt-4 mx-auto min-h-64 justify-between font-dmsans text-white gap-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div 
        className="w-full lg:w-5/12 h-96"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <motion.div 
          className="bg-[#F7004B] rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between relative"
          whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(247, 0, 75, 0.3)" }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, rotate: -180, scale: 0 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 200 }}
            whileHover={{ rotate: 360, scale: 1.2 }}
          >
            <GrowthGreen className="absolute right-5 top-5 w-6 h-6 sm:w-7 sm:h-7" />
          </motion.div>
          <motion.div 
            className="mt-8 sm:mt-12 md:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="font-semibold text-3xl sm:text-4xl md:text-4xl">
              Still have a <span className="text-4xl sm:text-5xl md:text-5xl">Questions?</span>
            </p>
            <span className="text-sm sm:text-base">
              Our friendly community team is here to help! Get personalized
              support and connect with experienced WEALTH members who can guide
              you.
            </span>
          </motion.div>
          <motion.div 
            className="flex justify-end mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="#contact">
                <Button
                    label="Contact Us"
                    size="sm"
                    primaryColor="#FFFFFF"
                    secondaryColor="#F7004B"
                    icon={<ArrowRight className="-rotate-45" />}
                />
                </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div 
        className="w-full lg:w-7/12 flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <motion.div 
          className="w-full sm:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <Image
            src={Faq3Img}
            alt="Faq1"
            className="w-full h-48 sm:h-64 md:h-auto max-h-96 rounded-3xl object-cover"
          />
        </motion.div>
        <div className="w-full sm:w-1/2 flex flex-col justify-between gap-4 h-96">
            <Image
              src={Faq2Img}
              alt="Faq2"
              className="rounded-3xl object-cover flex-1 h-2/6"
            />
            <Image
              src={Faq1Img}
              alt="Faq3"
              className="rounded-3xl object-cover flex-1 h-2/6"
            />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Faq;
