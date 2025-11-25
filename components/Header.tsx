import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 ">
      {/* Logo */}
      <div className="flex items-center">
        <Image src={Logo} alt="WEALTH Logo" width={50} height={50} />
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center gap-4">
        {[
          "Home",
          "Shop",
          "About Us",
          "Contact",
        ].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
            className="px-4 py-2 border border-red-300 rounded-full text-sm font-medium hover:bg-gray-100"
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <button className="text-sm font-medium">Sign In</button>
        <button className="ps-4 pe-1 py-1 border border-[#1dcb86] rounded-full inline-flex items-center gap-2">
          Contact Us
          <div className="-rotate-45 bg-[#1dcb86] rounded-full p-2">
            <ArrowRight className="h-4 w-4" />
          </div>
        </button>
      </div>
    </header>
  );
}