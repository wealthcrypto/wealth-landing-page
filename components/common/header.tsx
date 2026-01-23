"use client";

import React, { useState } from "react";
// Use static path for the logo svg so we don't require SVGR loader
const LOGO_SRC = "/assets/Logo.svg";
import { motion } from "framer-motion";
import Button from "./button";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const MENU = [
    {
      title: "home",
      href: "#home",
    },
    {
      title: "about",
      href: "#about",
    },
    {
      title: "whitepaper",
      href: "#whitepaper",
    },
  ];

  return (
    <>
      <motion.div
        className="flex justify-between items-center p-3 md:p-5 fixed top-0 left-0 w-full z-50 bg-[#fdefef]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Image src={LOGO_SRC} alt="Logo" width={128} height={48} className="w-32 h-auto cursor-pointer" />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {MENU.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              className="text-gray-700 hover:text-gray-900 bg-[#FFE2E2] rounded-full px-3 py-2 font-medium text-sm md:text-base"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#FFD1D1",
                color: "#000",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {item.title}
            </motion.a>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button
            label="Contact"
            size="sm"
            primaryColor="#00c77f"
            secondaryColor="#fff"
            icon={<ArrowRight className="-rotate-45" />}
            href="#contact"
          />
        </div>

        {/* Mobile Hamburger */}
        <motion.button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-[#fdefef] z-40 flex flex-col items-center justify-center space-y-6 md:hidden"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          {MENU.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              className="text-gray-700 hover:text-gray-900 bg-[#FFE2E2] rounded-full px-6 py-3 font-medium text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#FFD1D1",
                color: "#000",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {item.title}
            </motion.a>
          ))}
          <Button
            label="Contact"
            size="md"
            primaryColor="#00c77f"
            secondaryColor="#fff"
            icon={<ArrowRight className="-rotate-45" />}
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </motion.div>
      )}
    </>
  );
};

export default Header;
