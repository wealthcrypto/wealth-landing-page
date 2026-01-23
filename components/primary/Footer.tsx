"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Heart } from "lucide-react";
import { slideUp, rotateContinuous } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import Connected from "@/public/assets/Connected.svg";
import Logo from "@/public/assets/Logo.svg";
import { FaDiscord, FaTelegram, FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import Love from "@/public/assets/Love.svg";


/*
  Updated Footer to match provided design:
  - Top links row (Experience / Learn / Community / Support)
  - Large "Stay connected" hero with newsletter input and rounded subscribe button
  - Decorative shapes / subtle background
  - Bottom bar with social icons and legal links
*/

const socialLinks = [
  { icon: FaDiscord, label: "Discord", href: "https://discord.gg/yhvExNh7PK" },
  {
    icon: FaTelegramPlane,
    label: "Telegram",
    href: "https://t.me/thewealthcrypto",
  },
  { icon: FaTwitter, label: "Twitter", href: "https://x.com/thewealthcrypto" },
];

export default function Footer() {
  const { t } = useLanguage();

  // Fallback safe accesses in case translations don't have exact keys
  const footer = t?.footer ?? {
    links: {},
    description: "Connecting you to premium lifestyle experiences.",
    newsletter: {
      title: "Stay connected",
      subtitle:
        "Get exclusive updates, early access to experiences, and community highlights.",
      placeholder: "Enter Your Email",
      button: "Subscribe",
    },
    copyright: "© 2025 WealthCrypto. All rights reserved.",
    bottomLinks: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookies",
    },
  };

  // Flatten possible link groups used in the design image
  const linkGroups = [
    // {
    //   title: "Experience",
    //   items: [
    //     { name: "Sports", href: "#sports" },
    //     { name: "Music & Events", href: "#music-events" },
    //     { name: "Food & Beverage", href: "#food-beverage" },
    //     { name: "Community Meetups", href: "#community-meetups" },
    //   ],
    // },
    {
      title: "Learn",
      items: [
        { name: "What is WEALTH?", href: "https://wealth-crypto.gitbook.io/whitepaper.wealth.crypto/introduction/what-is-wealth-crypto" },
        { name: "How It Works", href: "https://wealth-crypto.gitbook.io/whitepaper.wealth.crypto/wealth-ecosystem-and-utility/proof-of-experience-pox-mechanism" },
        { name: "Tokenomics", href: "https://wealth-crypto.gitbook.io/whitepaper.wealth.crypto/tokenomics" },
        { name: "Roadmap", href: "https://wealth-crypto.gitbook.io/whitepaper.wealth.crypto/technical-architecture/product-roadmap" },
      ],
    },
    {
      title: "Community",
      items: [
        { name: "Discord", href: "https://discord.gg/yhvExNh7PK" },
        { name: "Telegram", href: "https://t.me/thewealthcrypto" },
        {
          name: "Telegram Community",
          href: "https://t.me/thewealthcrypto_community",
        },
        { name: "Twitter", href: "https://x.com/thewealthcrypto" },
        {
          name: "Instagram",
          href: "https://www.instagram.com/thewealthcrypto/",
        },
      ],
    },
    {
      title: "Support",
      items: [
        // { name: "FAQ", href: "#faq" },
        // { name: "Help Center", href: "#help-center" },
        { name: "Contact Us", href: "mailto:hi@wealthcrypto.fund" },
        // { name: "Partner with Us", href: "#partner-with-us" },
      ],
    },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden font-dmsans">
      {/* subtle decorative shapes */}
      <div  className="absolute left-0 top-0 -translate-y-10 opacity-10 pointer-events-none">
        <div className="w-96 h-96 bg-green-200 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-11/12 md:w-10/12 mx-auto py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 mb-12">
          <div className="flex-1 flex items-start gap-4 w-full lg:w-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="space-y-4">
              <Image src={Logo} alt="WEALTH Logo" className="" />
              <p className="text-sm text-black max-w-xs leading-relaxed">
                {footer.description}
              </p>
              <a
                href="mailto:hi@wealthcrypto.fund"
                className="inline-flex items-center gap-2 sm:gap-3 border-[#00b67a] border text-black hover:text-white pl-3 sm:pl-4 pr-1 py-1 rounded-full shadow-md text-sm sm:text-base font-semibold hover:bg-[#019f68] transition"
              >
                hi@wealthcrypto.fund
                <div className="bg-white p-1.5 sm:p-2 rounded-full">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#00b67a]" />
                </div>
              </a>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-8 w-full lg:flex lg:justify-end xl:gap-16">
            {linkGroups.map((group) => (
              <motion.div
                key={group.title}
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="min-w-0"
              >
                <h4 className="text-lg font-semibold text-black rounded-2xl py-1 mb-3">
                  {group.title}
                </h4>
                <ul className="space-y-2">
                  {group.items.map((item: any) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-black hover:text-[#00b67a] transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-10">
          <div className="h-[1px] w-3/4 bg-[#19CC85]" />
        </div>

        {/* Stay connected hero */}
        <motion.div
          className="text-center my-16 md:my-24 relative"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-start justify-center gap-2">
            <span className="text-3xl sm:text-4xl md:text-5xl font-body text-[#063b2e]">
              Stay
            </span>
            <Image
              src={Connected}
              alt="Connected"
              className="h-12 sm:h-16 md:h-20 w-auto"
            />
          </div>

          <p className="mt-4 text-sm sm:text-base text-[#064235]/80 max-w-2xl mx-auto px-4">
            Get exclusive updates, early access to experiences, and community highlights.
          </p>

          <form className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto px-4">
            <input
              type="email"
              placeholder={footer.newsletter?.placeholder}
              aria-label="Email"
              className="w-full sm:flex-1 min-w-0 px-4 sm:px-6 py-3 rounded-full bg-white border border-green-100 shadow-sm z-10 placeholder:text-[#94cdb6] text-[#063b2e] focus:outline-none focus:ring-2 focus:ring-[#00b67a]/30 text-sm sm:text-base"
            />
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center gap-3 bg-[#00b67a] text-white pl-4 pr-1 py-1 rounded-full shadow-md font-semibold text-sm sm:text-base"
            >
              <span>{footer.newsletter?.button}</span>
              <div className="bg-white p-3 sm:p-4 rounded-full">
                <ArrowUpRight className="w-3 h-3 text-[#00b67a]" />
              </div>
            </button>
          </form>

        </motion.div>
        {/* Divider */}
        <div className="flex items-center justify-center my-10">
          <div className="h-[1px] w-3/4 bg-[#19CC85]" />
        </div>

        <div className="border-t border-green-100 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#07563f]/80 text-center sm:text-left">
            <span>{footer.copyright}</span>
            <span className="hidden sm:inline">• Built with{" "}<Image src={Love} alt="Love" className="inline w-3 h-3 sm:w-4 sm:h-4" />{" "}for the community.</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex gap-3">
              {socialLinks.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    aria-label={s.label}
                    className="w-8 h-8 sm:w-9 sm:h-9 border border-[#19CC85] rounded-full flex items-center justify-center text-[#19CC85]/90 shadow-sm hover:bg-[#e6fff5] transition"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                );
              })}
            </div>

            <div className="flex gap-3 sm:gap-4 text-xs sm:text-sm text-[#07563f]/80">
              <a href="https://wealth-crypto.gitbook.io/whitepaper.wealth.crypto/legal-and-compliance/privacy-policy" className="hover:text-[#00b67a] transition">
                {footer.bottomLinks?.privacy}
              </a>
              <a href="https://wealth-crypto.gitbook.io/whitepaper.wealth.crypto/legal-and-compliance/terms-of-use" className="hover:text-[#00b67a] transition">
                {footer.bottomLinks?.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
