"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type FlowerProps = {
  src?: string;
  width?: number;
  height?: number;
  className?: string;
};

const Flower: React.FC<FlowerProps> = ({ src, width = 48, height = 48, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -180, scale: 0 }}
      whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
      whileHover={{ rotate: 360, scale: 1.2 }}
    >
      <Image
        src={src || "/images/Flower.svg"}
        alt="Flower Decoration"
        width={width}
        height={height}
        className={className}
      />
    </motion.div>
  );
};

export default Flower;
