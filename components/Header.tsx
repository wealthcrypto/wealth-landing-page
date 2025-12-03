"use client"
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex items-center justify-between px-4 md:px-8 lg:px-16 py-4 md:py-6 lg:py-10 relative">
            {/* Logo */}
            <div className="flex items-center">
                <Image src={Logo} alt="WEALTH Logo" width={50} height={50} />
            </div>

            {/* Navigation Links - Hidden on mobile, shown on md+ */}
            <nav className="hidden md:flex items-center gap-4">
                {[
                    "Home",
                    "Music",
                    "F & B",
                    "Community",
                ].map((link) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                        className="px-4 py-1 border rounded-full border-black text-sm font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                    >
                        {link}
                    </a>
                ))}
            </nav>

            {/* Action Buttons - Hidden on mobile, shown on md+ */}
            <div className="hidden md:flex items-center gap-4">
                <button className="ps-4 pe-1 py-1 border border-[#1dcb86] rounded-full inline-flex items-center gap-2">
                    Contact Us
                    <div className="-rotate-45 bg-[#1dcb86] rounded-full p-2">
                        <ArrowRight className="h-4 w-4" />
                    </div>
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-50 border-t">
                    <nav className="flex flex-col items-center gap-4 py-4">
                        {[
                            "Home",
                            "Music",
                            "F & B",
                            "Community",
                        ].map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                                className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
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