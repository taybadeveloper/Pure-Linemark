import Hero from "@/components/Hero";
import FeaturesGrid from "@/components/FeaturesGrid";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import SignUpSection from "@/components/SignUpSection";
import {
  IntroSection,
  JourneyStepsSection,
  BenefitsSection,
  ProcessSection,
  AiTradingSection,
  AustraliaSection,
} from "@/components/HomeSections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <IntroSection />
      <JourneyStepsSection />
      <FeaturesGrid />
      <AiTradingSection />
      <BenefitsSection />
      <ProcessSection />
      <CTABanner />
      <AustraliaSection />
      <Testimonials />
      <FAQ />
      <SignUpSection />
    </>
  );
}
