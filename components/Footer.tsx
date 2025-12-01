"use client";

import { motion } from "framer-motion";
import {
  Twitter,
  Send,
  Github,
  MessageCircle,
  ArrowUpRight,
  Heart,
} from "lucide-react";
import { slideUp, rotateContinuous } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import Connected from "@/public/assets/Connected.svg";
import Logo from "@/public/assets/Logo.svg";

/*
  Updated Footer to match provided design:
  - Top links row (Experience / Learn / Community / Support)
  - Large "Stay connected" hero with newsletter input and rounded subscribe button
  - Decorative shapes / subtle background
  - Bottom bar with social icons and legal links
*/

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Send, label: "Telegram", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: MessageCircle, label: "Discord", href: "#" },
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
    copyright: "© 2025 WEALTH Token. All rights reserved.",
    bottomLinks: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookies",
    },
  };

  // Flatten possible link groups used in the design image
  const linkGroups = [
    {
      title: "Experience",
      items: [
        { name: "Sports", href: "#sports" },
        { name: "Music & Events", href: "#music-events" },
        { name: "Food & Beverage", href: "#food-beverage" },
        { name: "Community Meetups", href: "#community-meetups" },
      ],
    },
    {
      title: "Learn",
      items: [
        { name: "What is WEALTH?", href: "#what-is-wealth" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Tokenomics", href: "#tokenomics" },
        { name: "Roadmap", href: "#roadmap" },
      ],
    },
    {
      title: "Community",
      items: [
        { name: "Discord", href: "https://discord.gg/K2kBy5Nr" },
        { name: "Telegram", href: "https://t.me/thewealthcrypto" },
        { name: "Telegram Community", href: "https://t.me/thewealthcrypto_community" },
        { name: "Twitter", href: "https://x.com/thewealthcrypto" },
        { name: "Instagram", href: "https://www.instagram.com/thewealthcrypto/" },
      ],
    },
    {
      title: "Support",
      items: [
        { name: "FAQ", href: "#faq" },
        { name: "Help Center", href: "#help-center" },
        { name: "Contact Us", href: "#contact-us" },
        { name: "Partner with Us", href: "#partner-with-us" },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#e6fff5] border-t border-green-100 overflow-hidden">
      {/* subtle decorative shapes */}
      <div className="absolute left-0 top-0 -translate-y-10 opacity-10 pointer-events-none">
        <div className="w-96 h-96 bg-green-200 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Top simple brand + email (left) and link groups (center/right) */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-12">
          <div className="flex-1 flex items-start gap-4">
            
              {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="space-y-4">
              <Image src={Logo} alt="WEALTH Logo" className="" />
              <p className="text-sm text-[#0b4f3b]/80 max-w-xs leading-relaxed">
                {footer.description}
              </p>
              <a href="mailto:hi@wealthcrypto.fund" className="inline-flex items-center gap-3 bg-[#00b67a] text-white pl-4 pr-1 py-1 rounded-full shadow-md font-semibold hover:bg-[#019f68] transition">
                hi@wealthcrypto.fund
                <div className="bg-white p-4 rounded-full">
                <ArrowUpRight className="w-3 h-3 text-[#00b67a]" />
              </div>
              </a>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
            {linkGroups.map((group) => (
              <motion.div
                key={group.title}
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="min-w-0"
              >
                <h4 className="text-sm font-heading bg-[#19CC85] text-white rounded-2xl px-3 py-1 mb-3">
                  {group.title}
                </h4>
                <ul className="space-y-2">
                  {group.items.map((item: any) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-[#07563f]/80 hover:text-[#00b67a] transition-colors"
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
          className="text-center mb-12"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-6">
            <span className="text-4xl md:text-5xl font-body text-[#063b2e]">
              Stay
            </span>
            <Image src={Connected} alt="Connected" className="h-16 md:h-20 w-auto" />
          </div>

          <p className="mt-4 text-[#064235]/80 max-w-2xl mx-auto">
            {footer.newsletter?.subtitle}
          </p>

          <form className="mt-8 flex items-center justify-center gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder={footer.newsletter?.placeholder}
              aria-label="Email"
              className="flex-1 min-w-0 px-6 py-3 rounded-full bg-white border border-green-100 shadow-sm placeholder:text-[#94cdb6] text-[#063b2e] focus:outline-none focus:ring-2 focus:ring-[#00b67a]/30"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-[#00b67a] text-white pl-4 pr-1 py-1 rounded-full shadow-md font-semibold"
            >
              <span>{footer.newsletter?.button}</span>
              <div className="bg-white p-4 rounded-full">
                <ArrowUpRight className="w-3 h-3 text-[#00b67a]" />
              </div>
            </button>
          </form>
        </motion.div>
         {/* Divider */}
         <div className="flex items-center justify-center my-10">
        <div className="h-[1px] w-3/4 bg-[#19CC85]" />
      </div>

        {/* Bottom bar */}
        <div className="border-t border-green-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-[#07563f]/80">
            <span>{footer.copyright}</span>
            <span className="hidden md:inline">• Built with</span>
            <Heart className="w-4 h-4 text-pink-500" />
            <span className="hidden md:inline">for the community.</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-3">
              {socialLinks.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 bg-white border border-green-50 rounded-full flex items-center justify-center text-[#07563f]/90 shadow-sm hover:bg-[#e6fff5] transition"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <div className="flex gap-4 text-sm text-[#07563f]/80">
              <a href="#" className="hover:text-[#00b67a] transition">
                {footer.bottomLinks?.privacy}
              </a>
              <a href="#" className="hover:text-[#00b67a] transition">
                {footer.bottomLinks?.terms}
              </a>
              <a href="#" className="hover:text-[#00b67a] transition">
                {footer.bottomLinks?.cookies}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
