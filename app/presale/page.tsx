"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Users, TrendingUp } from "lucide-react";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

const PresaleEndedPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Total Participants",
      value: "1000+",
      color: "text-wealth-navy"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Token Sold",
      value: "360K",
      color: "text-[#1dcb86]"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Success Rate",
      value: "100%",
      color: "text-wealth-coral"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Duration",
      value: "1 Day",
      color: "text-wealth-navy"
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="min-h-screen bg-gradient-to-br from-wealth-mint-wash via-white to-wealth-coral-soft"
    >
        <div className="flex justify-start px-10 py-5">
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full text-[#1dcb86] font-medium">
                <Link href="/">
                    <Image src={Logo} alt="WEALTH Logo" className="w-10 h-10"/>
                </Link>
          </div>
        </div>
      <div className="container mx-auto px-4 py-16">
        
        {/* Header Section */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#1dcb86] rounded-full mb-6">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-body text-wealth-navy mb-6">
            Presale{" "}
            <span className="bg-gradient-to-r from-[#1dcb86] to-[#157258] bg-clip-text text-transparent">
              Completed!
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-wealth-gray-600 max-w-2xl mx-auto mb-8">
            Thank you for being part of the WEALTH Token journey. Our presale has successfully ended, 
            and we&apos;re excited to move forward to the next phase.
          </p>

          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full border-2 border-[#1dcb86] text-[#1dcb86] font-medium">
            <div className="w-3 h-3 bg-[#1dcb86] rounded-full animate-pulse"></div>
            Presale Ended - December 4, 2025
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white p-6 rounded-3xl border border-wealth-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-wealth-mint-wash mb-4 ${stat.color}`}>
                {stat.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-body text-wealth-navy mb-2">
                {stat.value}
              </h3>
              <p className="text-wealth-gray-600 font-body">
                {stat.title}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* What's Next Section */}
        <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 md:p-12 border border-wealth-gray-200 shadow-lg mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-body text-wealth-navy mb-4">
              What&apos;s Next?
            </h2>
            <p className="text-lg text-wealth-gray-600 max-w-2xl mx-auto">
              The presale is just the beginning. Here&apos;s what comes next in our roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1dcb86] rounded-full mb-4">
                <span className="text-2xl font-body text-white">1</span>
              </div>
              <h3 className="text-xl font-body text-wealth-navy mb-3">
                Token Distribution
              </h3>
              <p className="text-wealth-gray-600">
                Tokens will be distributed to all presale participants within 1 day.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-wealth-coral rounded-full mb-4">
                <span className="text-2xl font-body text-white">2</span>
              </div>
              <h3 className="text-xl font-body text-wealth-navy mb-3">
                Exchange Listing
              </h3>
              <p className="text-wealth-gray-600">
                WEALTH Token will be listed on major exchanges for public trading.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-wealth-mint rounded-full mb-4">
                <span className="text-2xl font-body text-wealth-navy">3</span>
              </div>
              <h3 className="text-xl font-body text-wealth-navy mb-3">
                Platform Launch
              </h3>
              <p className="text-wealth-gray-600">
                Launch of the WEALTH ecosystem with sports, music, and lifestyle features.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default PresaleEndedPage;