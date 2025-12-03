import React from "react";
import Image from "next/image";
import Ascend from "@/public/Ascend.svg";
import Circle from "@/public/Circle.svg";
import Growth from "@/public/Growth.svg";
import Stars from "@/public/Stars.svg";

interface FaqContent {
    title: string;
    description: string;
}

const FaqSection = () => {

    const ListContent: FaqContent[] = [
        {
            title: "What is WEALTH Token and how does it work?",
            description: `WEALTH Token is your digital key to premium lifestyle experiences. Think of it like a membership card that gives you access to curated sports, music, dining, and community events. The more WEALTH you hold, the more exclusive experiences become available to you.`
        },
        {
            title: "How do I get WEALTH Token?",
            description: `You can purchase WEALTH Tokens through our website or on supported cryptocurrency exchanges. We also offer ways to earn WEALTH through community participation, referrals, and attending experiences. Our team can guide you through the process if you're new to digital tokens.`
        },
        {
            title: "What kind of experiences can I access?",
            description: `WEALTH gives you access to premium padel courts, football events, exclusive concerts, fine dining experiences, wine tastings, and community meetups. We partner with top-tier venues and curate experiences that celebrate the good life. New experiences are added regularly based on community feedback.`
        },
        {
            title: "Do I need to be tech-savvy to use WEALTH?",
            description: `Not at all! Our platform is designed to be user-friendly, even if you've never used cryptocurrency before. We provide step-by-step guides, video tutorials, and personal support to help you get started—think of us as your lifestyle concierge, not a tech company.`
        },
        {
            title: "How much does it cost to get started?",
            description: `You can start exploring WEALTH experiences with as little as $50 worth of tokens. Different experiences have different token requirements, and we offer flexible pricing to make premium lifestyle accessbile. Many community events and meetups are free for WEALTH holders.`
        },
        {
            title: "Is WEALTH available in my city?",
            description: `We're currently active in 25+ major cities worldwide, with new locations added regularly. If we're not in your city yet, join our community to help us prioritize expansion. We often launch in new cities based on member demand and local partnerships.`
        },
        {
            title: "How do I redeem experiences with my tokens?",
            description: `Simply browse available experiences in our app or website, select what interests you, and use your WEALTH tokens to reserve your spot. You'll receive confirmation details and can connect with other attendees through our community platform. It's that simple!`
        },
        {
            title: "Can I earn more WEALTH tokens over time?",
            description: `Yes! We offer several ways to earn additional WEALTH: attending experiences, referring friends, participating in community events, providing venue reviews, and engaging with our social platforms. Active community members are often rewarded with bonus tokens.`
        },
        {
            title: "What if I can't attend an experience I reserved?",
            description: `We understand that plans change. Our flexible cancellation policy allows you to cancel most experiences up to 24 hours in advance for a full token refund. Some premium experiences may have different terms, which are clearly stated during booking.`
        },
        {
            title: "Is my investment in WEALTH safe?",
            description: `While all investments carry some risk, WEALTH is built for long-term value creation through real-world utility, not speculation. Our transparent tokenomics, growing partner network, and active community provide multiple value drivers. We recommend only investing what you're comfortable with.`
        }
    ]
    
  return (
    <div className="relative mt-10">
      {/* Randomly placed icons */}
      <div className="absolute top-10 left-5">
        <Image src={Ascend} alt="Ascend Icon" className="opacity-50 w-20 h-20" />
      </div>
      <div className="absolute top-20 right-10">
        <Image src={Circle} alt="Circle Icon" className="opacity-50 w-20 h-20" />
      </div>
      <div className="absolute top-96 left-56">
        <Image src={Growth} alt="Growth Icon" className="opacity-50 w-14 h-14" />
      </div>
      <div className="absolute bottom-5 right-5">
        <Image src={Stars} alt="Stars Icon" className="opacity-50 w-10 h-10" />
      </div>

      {/* Existing FAQ Section */}
      <div className="relative h-full">
        <div className="flex flex-col w-9/12 items-start justify-center mx-auto ">
          <div className="my-20">
            <div className="flex items-center mr-8 space-x-3">
              <span className="text-4xl">Frequently Ask</span>
              <div className="bg-[#19CC85] mt-2 mb-6 flex items-center justify-center p-4 rounded-lg -rotate-1">
                <span className="text-4xl text-white">Question</span>
              </div>
            </div>
            <p className="max-w-xl space-y-6 text-wealth-navy text-lg font-body">
              New to WEALTH? No problem! Here are answers to the most common
              questions about joining our lifestyle community and making the
              most of your experiences.
            </p>
          </div>
        </div>
      </div>
      {
        ListContent.map((item, index) => (
            <div key={index} className="max-w-4xl mx-auto my-6 bg-[#AEEBD8] rounded-[40px] shadow-lg px-8 py-8">
                <h3 className="text-3xl md:text-4xl font-medium text-wealth-navy mb-3">{item.title}</h3>
                <p className="text-lg md:text-xl text-wealth-navy/90 leading-relaxed">{item.description}</p>
            </div>
            ))
      }
    </div>
  );
};

export default FaqSection;
