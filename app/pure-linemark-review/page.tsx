import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import BoldBrand from "@/components/BoldBrand";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Review",
  description:
    "A straightforward Pure Linemark review for Australian users. What the platform does, how it works, who it's for and the things worth considering.",
  alternates: { canonical: "/pure-linemark-review" },
};

const keyFeatures = [
  {
    title: "AI Trading Engine",
    description:
      "Scans global markets 24/7 and trades on your behalf, following the risk rules you set.",
  },
  {
    title: "Pattern Recognition",
    description:
      "Finds repeating shapes and structures in price data that may signal a market setup.",
  },
  {
    title: "Risk Management",
    description:
      "Applies stop losses and position limits before every trade.",
  },
  {
    title: "Instant Withdrawals",
    description:
      "Most payouts reach your Australian bank account within 24 hours.",
  },
];

const benefits = [
  {
    title: "Plain Language",
    description:
      "Clear dashboard summaries that explain what the engine is doing, without walls of jargon.",
  },
  {
    title: "Always On Trading",
    description:
      "The engine watches patterns and trends around the clock, so you never miss a move while you sleep.",
  },
  {
    title: "Risk Awareness",
    description:
      "Risk rules are built into every trade, before it happens.",
  },
];

const pros = [
  "Minimum deposit just $250",
  "No account or withdrawal fees",
  "2FA and bank level encryption",
  "Withdrawals within 24 hours in most cases",
  "Australian support, 7 days a week",
];

const considerations = [
  "Trading always involves risk of loss",
  "No profits are ever guaranteed",
  "AI projections are estimates, not facts",
  "Never invest money you can't afford to lose",
];

export default function ReviewPage() {
  return (
    <>
      <PageHeader
        title="Pure Linemark Review Australia"
        description="A straightforward look at Pure Linemark for Australian users. What the platform does, how it works, who it's for, and the things worth thinking about before you start."
      />

      {/* What Is Pure Linemark? */}
      <section className="py-8 lg:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What Is Pure Linemark?" />
          <div className="mt-8 space-y-4 text-center text-base leading-relaxed text-slate-600">
            <p>
              Pure Linemark is an AI powered trading platform designed for
              Australians. You fund your account, switch on the AI engine and it
              trades global markets on your behalf, around the clock.
            </p>
            <p>
              It is not a broker and it does not give financial advice. It is an
              automated trading service. Your risk settings, and the control
              over your account, stay with you.
            </p>
          </div>
        </div>
      </section>

      {/* How Pure Linemark Works */}
      <section className="border-t border-slate-200 bg-slate-50 py-8 lg:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How Pure Linemark Works"
            description="The platform follows a simple flow. It gathers market data, runs AI analysis on it, finds high probability opportunities and executes trades under your risk settings."
          />
          <p className="mt-6 text-center text-base leading-relaxed text-slate-600">
            In short: markets in, discipline out, and you stay in charge the
            whole way.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-8 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Key Features" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {keyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-display text-base font-semibold uppercase tracking-wide text-amber-700">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is Pure Linemark For? */}
      <section className="border-t border-slate-200 bg-slate-50 py-8 lg:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Who Is Pure Linemark For?"
            description="Pure Linemark is built for people who want market exposure without spending their days on charts. It suits complete beginners who have never traded, and experienced investors who want their capital working harder."
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Benefits" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
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

      {/* Things To Consider */}
      <section className="border-t border-slate-200 bg-slate-50 py-8 lg:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Things To Consider"
            description="Before you get started, it's worth keeping a few things in mind."
          />
          <div className="mt-8 space-y-4 text-base leading-relaxed text-slate-600">
            <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-slate-900">
              AI Trading And Risk
            </h3>
            <p>
              <BoldBrand text="AI can help you trade with discipline, but it can't remove the risk that comes with trading. Markets move on events no model can predict, and the value of any investment can fall." />
            </p>
            <p>
              Treat the AI as a tool, not a guarantee. The more clearly you
              understand the risk, the better your experience will be.
            </p>
          </div>
        </div>
      </section>

      {/* Pros And Considerations */}
      <section className="py-8 lg:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Pros And Considerations" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="font-display text-base font-semibold uppercase tracking-wide text-green-700">
                Pros
              </h3>
              <ul className="mt-4 space-y-2.5">
                {pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2.5 text-sm font-medium text-slate-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="font-display text-base font-semibold uppercase tracking-wide text-amber-700">
                Considerations
              </h3>
              <ul className="mt-4 space-y-2.5">
                {considerations.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-slate-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}

      {/* Ready To See It For Yourself? */}
      <section className="border-t border-slate-200 bg-slate-50 py-8 lg:py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-slate-900 md:text-[2rem] lg:text-4xl">
            Ready To See It For Yourself?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Explore the platform and decide whether Pure Linemark is a good fit
            for the way you like to trade.
          </p>
        </div>
      </section>

    </>
  );
}
