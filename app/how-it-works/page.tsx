import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import {
  ProcessSection,
  JourneyStepsSection,
} from "@/components/HomeSections";
import SignUpSection from "@/components/SignUpSection";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How does Pure Linemark work? Four stages, from live market data to trades executed for you. See your step by step journey.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        title="How Pure Linemark Works"
        description="Four stages, from live market data to trades executed on your behalf. Then five simple steps to get started."
      />

      <ProcessSection />
      <JourneyStepsSection />
      <SignUpSection />
    </>
  );
}
