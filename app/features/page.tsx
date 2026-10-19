import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FeaturesGrid from "@/components/FeaturesGrid";
import { BenefitsSection } from "@/components/HomeSections";
import SignUpSection from "@/components/SignUpSection";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Pure Linemark's features: a 24/7 AI trading engine, instant withdrawals, bank grade security and automatic risk management.",
  alternates: { canonical: "/features" },
};

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        title="AI Trading Features"
        description="Every Pure Linemark feature is built around one goal: making automated trading simple and safe for Australians."
      />

      <FeaturesGrid />
      <BenefitsSection />
      <SignUpSection />
    </>
  );
}
