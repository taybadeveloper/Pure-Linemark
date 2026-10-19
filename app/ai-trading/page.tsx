import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { AiTradingSection, BenefitsSection } from "@/components/HomeSections";
import { processSteps } from "@/components/data";
import SectionHeading from "@/components/SectionHeading";
import FAQ from "@/components/FAQ";
import SignUpSection from "@/components/SignUpSection";

export const metadata: Metadata = {
  title: "AI Trading",
  description:
    "What is AI trading? Learn how Pure Linemark's AI engine analyses markets, follows strict rules and trades for you around the clock.",
  alternates: { canonical: "/ai-trading" },
};

export default function AiTradingPage() {
  return (
    <>
      <PageHeader
        title="AI Trading"
        description="AI trading means software studies the markets and makes trades for you. Here is how it works and why thousands of Australians trust Pure Linemark."
      />

      <AiTradingSection />

      <section className="py-8 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How AI Trading Works"
            description="Three stages stand between live market data and a trade executed on your behalf."
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
            {processSteps.slice(0, 3).map((step, index) => (
              <div
                key={step.title}
                className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <h3 className="font-display text-base font-semibold uppercase tracking-wide text-slate-900">
                  {index + 1}. {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BenefitsSection />
      <FAQ limit={4} />
      <SignUpSection />
    </>
  );
}
