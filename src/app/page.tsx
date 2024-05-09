import ComponentSection from "@/components/component-section";
import GetStarted from "@/components/get-started";
import HeroSection from "@/components/hero-section";
import TechnologiesSection from "@/components/technologies-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TechnologiesSection />
      <ComponentSection />
      <GetStarted />
    </main>
  );
}
