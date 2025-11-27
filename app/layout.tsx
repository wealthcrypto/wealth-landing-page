import type { Metadata } from "next";
import { Concert_One, Varela_Round, Delius } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

/* 
  ═══════════════════════════════════════════════
  🏗️ ROOT LAYOUT - Next.js 15 App Router
  Premium Light Theme | WEALTH TOKEN Landing
  Festival Vibes + Clean Minimalism
  ═══════════════════════════════════════════════
*/

const concertOne = Concert_One({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-concert-one',
  weight: '400',
});

const varelaRound = Varela_Round({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-varela-round',
  weight: '400',
});

const delius = Delius({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-delius',
  weight: '400',
});

export const metadata: Metadata = {
  title: "WEALTH Crypto ($WEALTH) - Live the Good Life",
  description: "Unlock curated experiences across sports, music, dining, and community with WEALTH Crypto. Join the lifestyle revolution that's redefining everyday fun.",
  keywords: "wealth token, $WEALTH, lifestyle token, sports, music, food, community, experiences, premium lifestyle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${varelaRound.variable} ${concertOne.variable} ${delius.variable} font-body bg-coral-wash text-wealth-navy antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
