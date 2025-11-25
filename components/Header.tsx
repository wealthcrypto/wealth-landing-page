"use client"
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <div className="flex items-center">
                <Image src={Logo} alt="WEALTH Logo" width={50} height={50} />
            </div>

            {/* Navigation Links - Hidden on mobile, shown on md+ */}
            <nav className="hidden md:flex items-center gap-4">
                {[
                    "Home",
                    "Shop",
                    "About Us",
                    "Contact",
                ].map((link) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                        className="px-4 py-2 border-b border-red-300 text-sm font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                    >
                        {link}
                    </a>
                ))}
            </nav>

            {/* Action Buttons - Hidden on mobile, shown on md+ */}
            <div className="hidden md:flex items-center gap-4">
                <button className="text-sm font-medium">Sign In</button>
                <button className="ps-4 pe-1 py-1 border border-[#1dcb86] rounded-full inline-flex items-center gap-2">
                    Contact Us
                    <div className="-rotate-45 bg-[#1dcb86] rounded-full p-2">
                        <ArrowRight className="h-4 w-4" />
                    </div>
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
                    <nav className="flex flex-col items-center gap-4 py-4">
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
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link}
                            </a>
                        ))}
                        <div className="flex flex-col items-center gap-4 mt-4">
                            <button className="text-sm font-medium">Sign In</button>
                            <button className="ps-4 pe-1 py-1 border border-[#1dcb86] rounded-full inline-flex items-center gap-2">
                                Contact Us
                                <div className="-rotate-45 bg-[#1dcb86] rounded-full p-2">
                                    <ArrowRight className="h-4 w-4" />
                                </div>
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}