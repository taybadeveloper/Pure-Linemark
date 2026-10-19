import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import BoldBrand from "@/components/BoldBrand";
import { reviewSections, features, benefits } from "@/components/data";
import FAQ from "@/components/FAQ";
import SignUpSection from "@/components/SignUpSection";

export const metadata: Metadata = {
  title: "Review",
  description:
    "Pure Linemark review for Australians. What it is, how the AI engine works, key features, who it suits and the benefits at a glance.",
  alternates: { canonical: "/pure-linemark-review" },
};

export default function ReviewPage() {
  return (
    <>
      <PageHeader
        title="Pure Linemark Review"
        description="An honest look at what Pure Linemark does, how the AI engine works and who it suits best."
      />

      <section className="py-8 lg:py-14">
        <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
          {reviewSections.map((section, index) => (
            <div key={section.title}>
              <h2 className="font-display text-2xl font-semibold uppercase tracking-wide text-slate-900 lg:text-[1.75rem]">
                {index + 1}. {section.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                <BoldBrand text={section.body} />
              </p>
            </div>
          ))}

          <div>
            <h2 className="font-display text-2xl font-semibold uppercase tracking-wide text-slate-900 lg:text-[1.75rem]">
              5. Key Features
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {features.slice(0, 6).map((feature) => (
                <li
                  key={feature.title}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {feature.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold uppercase tracking-wide text-slate-900 lg:text-[1.75rem]">
              6. Benefits
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li
                  key={benefit.title}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {benefit.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FAQ limit={4} />
      <SignUpSection />
    </>
  );
}
