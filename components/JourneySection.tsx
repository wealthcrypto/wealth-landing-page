"use client";

import React from "react";
import DoneIcon from "@/public/assets/DoneIcon.svg";
import Image from "next/image";
import ActiveIcon from "@/public/assets/ActiveIcon.svg";
import PlannedIcon from "@/public/assets/PlannedIcon.svg";
import CircleGreen from "@/public/assets/CicleGreen.svg";
import CicleRed from "@/public/assets/CicleRed.svg";
import Euforia from "@/public/assets/Euforia.svg";
import { motion } from "framer-motion";

const JourneySection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="w-full flex items-center justify-center my-20 font-body"
    >
        <div className="absolute bottom-0 left-0 w-full -z-10 pointer-events-none">
            <Image src="/assets/Euforia.svg" alt="Euforia background" fill className="object-contain" />
        </div>
      <div className="w-10/12 md:w-9/12">
        <motion.div
          variants={fadeInUp}
          className="flex items-center mr-8 space-x-3"
        >
          <span className="text-4xl">The Journey</span>
          <div className="bg-[#19CC85] mt-2 mb-6 flex items-center justify-center p-4 rounded-lg rotate-2">
            <span className="text-4xl text-white">Ahead</span>
          </div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="w-10/12 md:w-6/12 my-4 mb-24"
        >
          <span className="text-wealth-navy text-lg font-body text-center md:text-start">
            Our roadmap isn&apos;t just about features—it&apos;s about building a lifestyle ecosystem that grows with our community&apos;s dreams and aspirations.
          </span>
        </motion.div>

        <motion.div variants={fadeInUp} className="my-4">
          <div className="relative">
            {/* vertical line */}
            <div className="absolute md:left-6 left-1/2 top-12 bottom-24 w-0.5 bg-green-200 z-0" />

                <div className="space-y-12">
                    {/* Item */}
                    <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-center">
                    {/* Timeline marker */}
                    <div className="w-full md:w-24 flex flex-col items-center relative z-20 mb-4 md:mb-0 md:-ml-6">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white relative z-20">
                        <Image src={DoneIcon} alt="Done" />
                        </div>
                        <div className="mt-2 text-sm text-gray-600">Q1 2025</div>
                        <div className="text-xs bg-[#19CC85] px-2 rounded-full ">Done</div>
                    </div>

                    {/* Card */}
                    <div className="flex-1 bg-yellow-50 rounded-xl p-6 shadow-lg relative z-20 overflow-visible mx-5 md:mx-2 ">
                        <h3 className="text-xl mb-1">Foundation & Community</h3>
                        <p className="text-md text-gray-700 mb-4">
                        Token launch, community building, and initial partnerships
                        established.
                        </p>

                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-800">
                        <div className="flex items-start">
                            <span className="text-emerald-500 mr-2">✳</span>
                            <span>WEALTH Token Launch</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-emerald-500 mr-2">✳</span>
                            <span>Community of 10,000+ members</span>
                        </div>

                        <div className="flex items-start">
                            <span className="text-emerald-500 mr-2">✳</span>
                            <span>Initial partner venues secured</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-emerald-500 mr-2">✳</span>
                            <span>Beta testing platform</span>
                        </div>
                        </div>

                        {/* decorative circle - slightly overflowing bottom-right */}
                        <Image
                          src={CircleGreen}
                          alt="decorative circle"
                          width={80}
                          height={80}
                          className="absolute -right-4 -bottom-4 object-contain pointer-events-none"
                        />
                    </div>
                    </motion.div>

                    {/* Item */}
                    <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-center">
                    <div className="w-full md:w-24 flex flex-col items-center relative z-20 mb-4 md:mb-0 md:-ml-6">
                       <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white relative z-20">
                        <Image src={DoneIcon} alt="Done" />
                        </div>
                        <div className="mt-2 text-sm text-gray-600">Q2 2025</div>
                        <div className="text-xs bg-[#19CC85] px-2 rounded-full ">Done</div>
                    </div>

                    <div className="flex-1 bg-yellow-50 rounded-xl p-6 shadow-md relative z-20 overflow-visible mx-5 md:mx-0">
                        <h3 className="text-xl mb-1">Platform Launch</h3>
                        <p className="text-md text-gray-700 mb-4">
                        Full platform rollout with core lifestyle experiences across
                        major cities.
                        </p>

                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-800">
                        <div className="flex items-start">
                            <span className="text-emerald-500 mr-2">✳</span>
                            <span>Web & mobile platform launch</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-emerald-500 mr-2">✳</span>
                            <span>50+ venue partnerships</span>
                        </div>

                        <div className="flex items-start">
                            <span className="text-emerald-500 mr-2">✳</span>
                            <span>First community events hosted</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-emerald-500 mr-2">✳</span>
                            <span>Membership tiers introduced</span>
                        </div>
                        </div>

                        <Image
                          src={CircleGreen}
                          alt="decorative circle"
                          width={80}
                          height={80}
                          className="absolute -right-4 -bottom-4 object-contain pointer-events-none"
                        />
                    </div>
                    </motion.div>

                    {/* Item - Active */}
                    <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-center">
                    <div className="w-full md:w-24 flex flex-col items-center relative z-20 mb-4 md:mb-0 md:-ml-6">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#F7004B] text-white relative z-20">
                        <Image src={ActiveIcon} alt="Active" />
                        </div>
                        <div className="mt-2 text-sm text-gray-600">Q3 2025</div>
                        <div className="text-xs bg-[#F7004B]/50 px-2 rounded-full ">Active</div>
                    </div>

                    <div className="flex-1 bg-yellow-50 rounded-xl p-6 shadow-md relative z-20 overflow-visible mx-5 md:mx-0">
                        <h3 className="text-xl">Experience Expansion</h3>
                        <p className="text-md text-gray-700 mb-4">
                        Scaling experiences across sports, music, and premium dining
                        categories.
                        </p>

                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-800">
                        <div className="flex items-start">
                            <span className="text-pink-400 mr-2">✳</span>
                            <span>Sports facility partnerships</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-pink-400 mr-2">✳</span>
                            <span>Music venue collaborations</span>
                        </div>

                        <div className="flex items-start">
                            <span className="text-pink-400 mr-2">✳</span>
                            <span>Premium dining experiences</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-pink-400 mr-2">✳</span>
                            <span>Member rewards program</span>
                        </div>
                        </div>

                        <Image
                          src={CircleGreen}
                          alt="decorative circle"
                          width={80}
                          height={80}
                          className="absolute -right-4 -bottom-4 object-contain pointer-events-none"
                        />
                    </div>
                    </motion.div>

                    {/* Item */}
                    <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-center">
                    <div className="w-full md:w-24 flex flex-col items-center relative z-20 mb-4 md:mb-0 md:-ml-6">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#8BDBBB] text-teal-700 relative z-20">
                        <Image src={PlannedIcon} alt="Planned" />
                        </div>
                        <div className="mt-2 text-sm text-gray-600">Q4 2025</div>
                        <div className="text-xs bg-[#8BDBBB] px-2 rounded-full ">Planned</div>
                    </div>

                    <div className="flex-1 bg-yellow-50 rounded-xl p-6 shadow-md relative z-20 overflow-visible mx-5 md:mx-0">
                        <h3 className="text-xl mb-1">Global Presence</h3>
                        <p className="text-md text-gray-700 mb-4">
                        International expansion and exclusive high-end experience
                        partnerships.
                        </p>

                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-800">
                        <div className="flex items-start">
                            <span className="text-teal-400 mr-2">✳</span>
                            <span>International city launches</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-teal-400 mr-2">✳</span>
                            <span>Luxury brand partnerships</span>
                        </div>

                        <div className="flex items-start">
                            <span className="text-teal-400 mr-2">✳</span>
                            <span>VIP experience tier</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-teal-400 mr-2">✳</span>
                            <span>Member governance launch</span>
                        </div>
                        </div>

                        <Image
                          src={CicleRed}
                          alt="decorative circle"
                          width={80}
                          height={80}
                          className="absolute -right-4 -bottom-4 object-contain pointer-events-none"
                        />
                    </div>
                    </motion.div>

                    {/* Item */}
                    <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-center">
                    <div className="w-full md:w-24 flex flex-col items-center relative z-20 mb-4 md:mb-0 md:-ml-6">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#8BDBBB] text-teal-700 relative z-20">
                        <Image src={PlannedIcon} alt="Planned" />
                        </div>
                        <div className="mt-2 text-sm text-gray-600">Q1 2026</div>
                        <div className="text-xs bg-[#8BDBBB] px-2 rounded-full ">Planned</div>
                    </div>

                    <div className="flex-1 bg-yellow-50 rounded-xl p-6 shadow-md relative z-20 overflow-visible mx-5 md:mx-0">
                        <h3 className="text-xl mb-1">Innovation Hub</h3>
                        <p className="text-md text-gray-700 mb-4">
                        Advanced features, AI-powered recommendations, and lifestyle
                        analytics.
                        </p>

                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-800">
                        <div className="flex items-start">
                            <span className="text-teal-400 mr-2">✳</span>
                            <span>AI experience matching</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-teal-400 mr-2">✳</span>
                            <span>Lifestyle analytics dashboard</span>
                        </div>

                        <div className="flex items-start">
                            <span className="text-teal-400 mr-2">✳</span>
                            <span>Advanced community features</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-teal-400 mr-2">✳</span>
                            <span>Partnership marketplace</span>
                        </div>
                        </div>

                        <Image
                          src={CicleRed}
                          alt="decorative circle"
                          width={80}
                          height={80}
                          className="absolute -right-4 -bottom-4 object-contain pointer-events-none"
                        />
                    </div>
                    </motion.div>
                </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default JourneySection;
