import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SignUpSection from "@/components/SignUpSection";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Open your Pure Linemark account in under 2 minutes. Start with just $250 and let the AI trading engine work the markets for you — 24/7.",
  alternates: { canonical: "/sign-up" },
};

export default function SignUpPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get Started"
        title="Open Your Account in 2 Minutes"
        description="Fill in the short form below and activate the AI engine with a minimum deposit of just $250. No account fees, no lock-ups, withdraw anytime."
      />
      <SignUpSection />
    </>
  );
}
