import Header from "@/components/common/header";
import About from "@/components/primary/about";
import BuildSection from "@/components/primary/BuildSection";
import DistributionSection from "@/components/primary/DistributionSection";
import Faq from "@/components/primary/faq";
import Footer from "@/components/primary/Footer";
import FutureSection from "@/components/primary/FutureSection";
import GroupSection from "@/components/primary/GroupSection";
import HeroComponents from "@/components/primary/hero";
import JourneySection from "@/components/primary/JourneySection";


export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#fdefef] w-dvw min-h-dvh px-0 ">
      {/* 🌐 Language Switcher - Fixed top right */}
      {/* <LanguageSwitcher /> */}
      <Header />
        <HeroComponents />
        <About />
        <JourneySection />
        <FutureSection />
        <DistributionSection />
        <BuildSection />
        <GroupSection />
        <Faq />
        <Footer />
    </main>
  );
}
