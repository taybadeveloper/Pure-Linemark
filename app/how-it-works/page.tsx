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
    "How does Pure Linemark work? Live market data becomes trades executed on your behalf. See the full journey, from your first deposit to your final decision.",
  alternates: { canonical: "/how-it-works" },
};

const honestPoints = [
  {
    title: "No Guaranteed Outcomes",
    description:
      "We don't promise profits or certain results. You'll always get an honest view of what AI can and can't do.",
  },
  {
    title: "You Stay In Control",
    description:
      "You set the risk level and you can stop the engine anytime. Your account always follows your rules.",
  },
  {
    title: "Built Around Your Lifestyle",
    description:
      "Every feature is designed to make trading easier around your life, not to take over your thinking.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        title="How Pure Linemark Works"
        description="Pure Linemark turns live market data into trades executed on your behalf. Here's the full journey, from your first look to your final decision."
      />

      {/* Four Stages, From Data To Decision */}
      <ProcessSection />

      {/* Your Step By Step Journey */}
      <section className="border-t border-slate-200 bg-slate-50 py-8 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <JourneyStepsSection />
        </div>
      </section>

      {/* A Clear, Honest Experience */}
      <section className="py-8 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-slate-900 md:text-[2rem] lg:text-4xl">
              A Clear, Honest Experience
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
            {honestPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <h3 className="font-display text-base font-semibold uppercase tracking-wide text-slate-900">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* See The Process In Action */}
      <section className="border-t border-slate-200 bg-slate-50 py-8 lg:py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-slate-900 md:text-[2rem] lg:text-4xl">
            See The Process In Action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Explore the features that power the Pure Linemark journey and decide
            if it's right for you.
          </p>
        </div>
      </section>

      <SignUpSection />
    </>
  );
}
