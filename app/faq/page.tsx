import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to the most common questions about Pure Linemark — how the AI works, deposits, withdrawals, security and getting started in Australia.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="Help Centre"
        title="Frequently Asked Questions"
        description="Everything you need to know about the Pure Linemark AI engine, deposits, withdrawals and account security — answered in plain English."
      />
      <FAQ />
    </>
  );
}
