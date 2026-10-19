import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import BoldBrand from "@/components/BoldBrand";
import SectionHeading from "@/components/SectionHeading";
import { benefits } from "@/components/data";
import FAQ from "@/components/FAQ";
import SignUpSection from "@/components/SignUpSection";

export const metadata: Metadata = {
  title: "AI Trading",
  description:
    "AI trading means software studies the markets and can trade on your behalf. See how Pure Linemark's AI engine works, what it can do and where its limits are.",
  alternates: { canonical: "/ai-trading" },
};

const whatIsAiTrading = [
  "AI trading means using artificial intelligence to research and trade financial markets. Instead of working through every chart and data point by hand, the AI processes market information in milliseconds and acts on the parts most likely to matter.",
  "The goal is simple: help you see patterns, trends and risks more clearly, then trade with discipline. With Pure Linemark, the AI engine executes trades on your behalf, following the risk rules you set.",
  "At its core, AI trading is about turning a large amount of market information into something clearer and easier to act on.",
];

const howAiTradingWorks = [
  {
    title: "Collect Market Data",
    description:
      "The engine pulls together live price history, market movements and other relevant information into one place.",
  },
  {
    title: "Analyse For Patterns And Trends",
    description:
      "The AI scans the data for repeating patterns, momentum shifts and possible signals.",
  },
  {
    title: "Present Clear Insights",
    description:
      "You get plain language summaries in your dashboard, so you can see what the engine is doing at a glance.",
  },
];

const aiTradingFeatures = [
  {
    title: "AI Market Analysis",
    description:
      "Review market information in one place. The AI brings the data together and presents it clearly, so you spend less time hunting and more time understanding.",
  },
  {
    title: "Pattern Recognition",
    description:
      "The AI scans price data for repeating shapes and structures that may signal a possible market setup. It helps you notice patterns you might otherwise miss.",
  },
  {
    title: "Trend Projection",
    description:
      "Trend tools help you understand the possible direction of a market based on recent price behaviour. Projections are informational, never guaranteed.",
  },
  {
    title: "Risk Management",
    description:
      "Good trading is as much about managing downside as chasing upside. Pure Linemark applies stop losses and position limits before every trade.",
  },
];

const limitations = [
  {
    title: "AI Can't Predict The Future",
    description:
      "No tool can tell you with certainty what a market will do next. Projections are estimates, not guarantees.",
  },
  {
    title: "Markets Are Unpredictable",
    description:
      "Unexpected events can move markets in ways no model can anticipate. Risk is always present.",
  },
  {
    title: "AI Insights Can Be Wrong",
    description:
      "Signals and patterns are possibilities, not facts. Always keep your risk settings where you're comfortable.",
  },
];

export default function AiTradingPage() {
  return (
    <>
      <PageHeader
        title="AI Trading"
        description="AI trading means software studies the markets and can trade on your behalf. Here is how it works, what it can do and where its limits are."
      />

      {/* What Is AI Trading? */}
      <section className="py-8 lg:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What Is AI Trading?" />
          <div className="mt-8 space-y-4 text-base leading-relaxed text-slate-600">
            {whatIsAiTrading.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>
                <BoldBrand text={paragraph} />
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* How AI Trading Works */}
      <section className="border-t border-slate-200 bg-slate-50 py-8 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How AI Trading Works"
            description="Most AI trading tools follow the same three stage process."
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
            {howAiTradingWorks.map((step, index) => (
              <div
                key={step.title}
                className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 font-display text-lg font-semibold text-amber-700">
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

      {/* AI Trading Benefits */}
      <section className="py-8 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="AI Trading Benefits"
            description="AI trading tools don't replace your judgement. They help you do your best thinking, faster."
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

      {/* AI Trading Features */}
      <section className="border-t border-slate-200 bg-slate-50 py-8 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="AI Trading Features"
            description="A focused set of tools built around patterns, trends, risk and clear analysis."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {aiTradingFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-display text-base font-semibold uppercase tracking-wide text-amber-700">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  <BoldBrand text={feature.description} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Trading Limitations */}
      <section className="py-8 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="AI Trading Limitations"
            description="AI trading tools are useful, but they are not magic. It's worth being clear about what they can't do."
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
            {limitations.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <h3 className="font-display text-base font-semibold uppercase tracking-wide text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is AI Trading Right For You? */}
      <section className="border-t border-slate-200 bg-slate-50 py-8 lg:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Is AI Trading Right For You?" />
          <p className="mt-8 text-center text-base leading-relaxed text-slate-600">
            <BoldBrand text="AI trading suits people who want market exposure without spending their days on charts. It works for complete beginners who have never traded, and for experienced investors who simply want their capital working harder. If you expect guaranteed profits, AI trading is not for you. If you're comfortable with risk and want a disciplined, always on approach, it might be." />
          </p>
        </div>
      </section>

      {/* AI Trading FAQs */}
      <FAQ />

      {/* Ready To Explore AI Trading? */}
      <SignUpSection />
    </>
  );
}
