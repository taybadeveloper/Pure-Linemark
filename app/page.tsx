import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FeaturesGrid from "@/components/FeaturesGrid";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <FeaturesGrid />
      <Stats />
      <Testimonials />
      <CTABanner />
      <FAQ />
    </>
  );
}
