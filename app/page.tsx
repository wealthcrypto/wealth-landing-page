import WealthHeroSection from "@/components/WealthHeroSection";
import Header from "@/components/Header";
import WealthExperience from "@/components/WealthExperience";
import WealthAboutSection from "@/components/WealthAboutSection";
import JoinSection from "@/components/JoinSection";
import JourneySection from "@/components/JourneySection";
import FutureSection from "@/components/FutureSection";
import WealthEconomicSection from "@/components/WealthEconomicSection";
import DistributionSection from "@/components/DistributionSection";
import BuildSection from "@/components/BuildSection";
import CommunitySection from "@/components/CommunitySection";
import GroupSection from "@/components/GroupSection";
import ReviewSection from "@/components/ReviewSection";
import CommunityAwaits from "@/components/CommunityAwaits";

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
      <div className="h-dvh">
        <Header />
        {/* 🎪 Hero Section - Festival vibes with doodle illustration */}
        <WealthHeroSection />
      </div>
      <div className="flex items-center justify-center">
        <div className="h-[1px] w-3/4 bg-[#19CC85]" />
      </div>
      <WealthExperience />

      <WealthAboutSection />
      <JoinSection />
      <JourneySection />
      <FutureSection />
      <WealthEconomicSection />
      <DistributionSection />
       <div className="flex items-center justify-center">
        <div className="h-[1px] w-3/4 bg-[#19CC85]" />
      </div>
      <BuildSection />
      <CommunitySection />
      <GroupSection />
      <ReviewSection />
      <CommunityAwaits />
    </main>
  );
}
