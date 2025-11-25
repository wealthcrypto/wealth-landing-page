import WealthHeroSection from "@/components/WealthHeroSection";
import WhatIsWealthSection from "@/components/WhatIsWealthSection";
import LifestyleSportsSection from "@/components/LifestyleSportsSection";
import WealthRoadmapSection from "@/components/WealthRoadmapSection";
import WealthTokenomicsSection from "@/components/WealthTokenomicsSection";
import WealthPartnersSection from "@/components/WealthPartnersSection";
import WealthCommunitySection from "@/components/WealthCommunitySection";
import WealthFAQSection from "@/components/WealthFAQSection";
import WealthFooter from "@/components/WealthFooter";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Header from "@/components/Header";

/* 
  ═══════════════════════════════════════════════
  🎪 WEALTH TOKEN LANDING PAGE
  
  Premium Lifestyle Token Landing Page
  Theme: Clean Light Mode + Festival Vibes
  Style: Minimalist with doodle illustrations
  Colors: Mint Pastel + Coral + Navy Ink
  
  Tech Stack:
  - Next.js 15 (App Router)
  - Tailwind CSS (WEALTH brand colors)
  - Framer Motion (Subtle animations)
  - Lucide React (Icons + doodles)
  
  Sections:
  1. Hero - Split layout with doodle festival illustration
  2. What is WEALTH - Lifestyle token explanation
  3. Lifestyle & Sports - Padel, Football, Music, F&B
  4. Roadmap - Clean timeline with mint/coral indicators
  5. Tokenomics - Beginner-friendly, no meme charts
  6. Partners - Premium venue showcase
  7. Community - Discord/Telegram CTAs
  8. FAQ - Accordion, beginner-friendly
  9. Footer - Clean navy ink styling
  
  Brand Colors:
  - Mint Pastel: #A7F3D0 (Primary)
  - Coral Pastel: #FB7185 (Secondary)  
  - Navy Ink: #111827 (Text)
  - White: #FFFFFF (Background)
  - Mint Wash: rgba(167, 243, 208, 0.1) (Subtle bg)
  
  Fonts:
  - Heading: Concert One
  - Body: Dosis
  - Accent: Delius
  
  ═══════════════════════════════════════════════
*/

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* 🌐 Language Switcher - Fixed top right */}
      {/* <LanguageSwitcher /> */}
      <Header />
      {/* 🎪 Hero Section - Festival vibes with doodle illustration */}
      <WealthHeroSection />
      
      {/* 🎯 What is WEALTH - Lifestyle token explanation */}
      <WhatIsWealthSection />
      
      {/* 🏓 Lifestyle & Sports - Core experience categories */}
      {/* <LifestyleSportsSection /> */}
      
      {/* 🗺️ Roadmap - Development timeline */}
      <WealthRoadmapSection />
      
      {/* 📊 Tokenomics - Economics breakdown */}
      <WealthTokenomicsSection />
      
      {/* 🤝 Partners - Premium venue showcase */}
      {/* <WealthPartnersSection /> */}
      
      {/* 👥 Community - Discord/Telegram CTAs */}
      <WealthCommunitySection />
      
      {/* ❓ FAQ - Beginner-friendly questions */}
      <WealthFAQSection />
      
      {/* 🦶 Footer - Clean minimal design */}
      <WealthFooter />
    </main>
  );
}
