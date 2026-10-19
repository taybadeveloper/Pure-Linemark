import SectionHeading from "@/components/SectionHeading";
import BoldBrand from "@/components/BoldBrand";
import {
  intro,
  journeySteps,
  benefits,
  processSteps,
  aiTradingExplain,
  australiaSection,
} from "@/components/data";
import { CheckIcon } from "@/components/icons";

/** Home: "What Is Pure Linemark?" */
export function IntroSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-8 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={intro.title}
          description={intro.body.join(" ")}
        />
        <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
          {intro.points.map((point) => (
            <li
              key={point}
              className="flex items-start justify-start gap-2.5 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
            >
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Home: "How To Use Pure Linemark To Trade In Australia" (5 steps) */
export function JourneyStepsSection() {
  return (
    <section className="py-8 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How To Use Pure Linemark To Trade In Australia"
          description="Five simple steps take you from sign up to a portfolio the AI engine trades for you. No experience needed."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {journeySteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 font-display text-lg font-semibold text-amber-700">
                {index + 1}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold uppercase tracking-wide text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Home + AI Trading page: "Why Use AI Trading Tools?" */
export function BenefitsSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-8 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Use AI Trading Tools?"
          description="An AI engine brings speed, discipline and consistency to your trading. Here is what that means for you."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="font-display text-base font-semibold uppercase tracking-wide text-slate-900">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Home + How It Works page: "How Pure Linemark Works" (4 stages) */
export function ProcessSection() {
  return (
    <section className="py-8 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How Pure Linemark Works"
          description="Four stages, from live market data to trades executed on your behalf."
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-ink font-display text-xl font-semibold text-brand">
                {index + 1}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold uppercase tracking-wide text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Home + AI Trading page: "What Is AI Trading?" explainer */
export function AiTradingSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-8 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={aiTradingExplain.title}
          description={aiTradingExplain.body.join(" ")}
        />
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
          {aiTradingExplain.points.map((point) => (
            <div
              key={point.title}
              className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <h3 className="font-display text-base font-semibold uppercase tracking-wide text-amber-700">
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
  );
}

/** Home: "Built With Australian Investors In Mind" */
export function AustraliaSection() {
  return (
    <section className="py-8 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-ink px-6 py-12 text-center sm:px-12 lg:py-16">
          <h2 className="mx-auto max-w-2xl font-display text-2xl font-semibold uppercase leading-tight tracking-tight text-white md:text-3xl">
            <BoldBrand text={australiaSection.title} />
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-200">
            {australiaSection.body}
          </p>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {australiaSection.points.map((point) => (
              <li
                key={point}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-slate-100"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
