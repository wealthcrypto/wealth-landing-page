"use client";

import React from "react";
import DiscordIcons from "@/public/images/dc.svg";
import TelegramIcons from "@/public/images/tele.svg";
import Image from "next/image";
import Button from "../common/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const GroupSection = () => {
  return (
    <motion.div 
      className="bg-[#ffe2e2] rounded-3xl w-11/12 mx-auto font-dmsans flex flex-col lg:flex-row justify-between gap-6 p-6 sm:p-8 md:p-10 lg:p-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 justify-center flex-1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div 
          className="bg-[#00EA8D] rounded-[40px] flex items-center justify-center p-8 sm:p-10 md:p-12"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image src={DiscordIcons} alt="Discord" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
        </motion.div>
        <motion.div 
          className="flex flex-col justify-center items-start space-y-2 w-full sm:w-7/12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.p 
            className="font-extrabold text-2xl sm:text-3xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Discord
          </motion.p>
          <motion.span 
            className="text-sm sm:text-base"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Join daily discussions, get exclusive updates, and connect with
            fellow WEALTH members
          </motion.span>
          <Button
            label="Join Us"
            size="sm"
            primaryColor="#DEFFF2"
            href="https://discord.gg/yhvExNh7PK"
            secondaryColor="#02E98D"
            icon={<ArrowRight className="-rotate-45" />}
            className="mt-2"
          />
        </motion.div>
      </motion.div>
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 justify-center flex-1"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div 
          className="bg-[#FFBAFD] rounded-[40px] flex items-center justify-center p-8 sm:p-10 md:p-12"
          whileHover={{ scale: 1.1, rotate: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image src={TelegramIcons} alt="Telegram" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
        </motion.div>
        <motion.div 
          className="flex flex-col justify-center items-start space-y-2 w-full sm:w-7/12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.p 
            className="font-extrabold text-2xl sm:text-3xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Telegram
          </motion.p>
          <motion.span 
            className="text-sm sm:text-base"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Get instant updates, participate in community polls, and stay connected on the go
          </motion.span>
          <Button
            label="Join Us"
            size="sm"
            href="https://t.me/thewealthcrypto"
            primaryColor="#F7004B"
            secondaryColor="#FFFFFF"
            icon={<ArrowRight className="-rotate-45" />}
            className="mt-2"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default GroupSection;
