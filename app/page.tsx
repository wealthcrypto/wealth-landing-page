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
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import FaqContinue from "@/components/FaqContinue";
import FaqSec from "@/public/assets/FaqSection.svg";
import Image from "next/image";


export default function Home() {
  return (
    <main className="relative overflow-hidden !bg-[#fdefef] px-0">
      {/* 🌐 Language Switcher - Fixed top right */}
      {/* <LanguageSwitcher /> */}
      <div className="min-h-screen flex flex-col">
        <Header />
        {/* 🎪 Hero Section - Festival vibes with doodle illustration */}
        <div className="flex-1">
          <WealthHeroSection />
        </div>
      </div>
      <div className="flex items-center justify-center py-8 md:py-12">
        <div className="h-[1px] w-3/4 bg-[#19CC85]" />
      </div>
      {/* <WealthExperience /> */}

      <div className="py-8 md:py-16">
        <WealthAboutSection />
      </div>
      
      <div className="py-8 md:py-16">
        <JourneySection />
      </div>
      <div className="py-8 md:py-16">
        <FutureSection />
      </div>
      {/* <WealthEconomicSection /> */}
      <div className="py-8 md:py-16">
        <DistributionSection />
      </div>
      <div className="flex items-center justify-center py-8 md:py-12">
        <div className="h-[1px] w-3/4 bg-[#19CC85]" />
      </div>
      <div className="py-8 md:py-16">
        <BuildSection />
      </div>
      
      {/* <CommunitySection /> */}
      <GroupSection />
      <ReviewSection />
      <div className="overflow-hidden">
        <Image src={FaqSec} alt="FAQ Section" className="w-full -mt-2 md:-mt-5 mb-6 md:mb-10" />
      </div>
      {/* <CommunityAwaits /> */}
      <FaqSection />
      <FaqContinue />
      <Footer />
    </main>
  );
}
