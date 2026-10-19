import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import BoldBrand from "@/components/BoldBrand";

export const metadata: Metadata = {
  title: "Features",
  description:
    "A focused set of AI trading tools built around patterns, trends, risk and clear analysis. See what each Pure Linemark feature does.",
  alternates: { canonical: "/features" },
};

const features = [
  {
    title: "AI Trading Engine",
    body: [
      "The AI trading engine is the heart of Pure Linemark. It scans global markets 24 hours a day and executes trades on your behalf, following the risk rules you set.",
      "You decide the risk level. The engine does the watching, the analysis and the execution.",
    ],
    why: "You get market exposure without watching charts all day. The engine never sleeps, never panics and never misses a market move.",
  },
  {
    title: "Pattern Recognition",
    body: [
      "The AI scans large amounts of price data and picks out repeating shapes and structures that might signal a possible market setup.",
      "Instead of manually studying every chart, the engine spots the patterns worth acting on and trades them in milliseconds.",
    ],
    why: "You notice patterns you would otherwise miss, and the engine acts on them faster than any human could.",
  },
  {
    title: "Risk Management",
    body: [
      "Good trading is as much about protecting your capital as it is about growing it. Pure Linemark applies stop losses, position sizing and drawdown limits before every trade.",
      "Risk is brought into every decision early, so the downside is considered before the upside.",
    ],
    why: "Your downside is controlled automatically. Every trade follows the rules you set, even while you sleep.",
  },
  {
    title: "Instant Withdrawals",
    body: [
      "Request a payout from your dashboard and most withdrawals are completed within 24 hours, straight to your Australian bank account.",
      "There are no withdrawal fees and no lock up periods. Your money stays yours.",
    ],
    why: "Your money stays accessible whenever you need it, without hidden fees or delays.",
  },
  {
    title: "Market Insights",
    body: [
      "Market insights bring together what's happening across crypto, forex and commodities into clear, digestible summaries.",
      "Instead of reading endless headlines, you get the key points in one place, in plain English.",
    ],
    why: "You see the bigger picture and understand how different markets are moving, without the noise.",
  },
  {
    title: "Bank Grade Security",
    body: [
      "Every account is protected with mandatory two factor authentication and bank level encryption. Client data sits behind strict access controls.",
      "Security is not an extra. It is built into every part of the platform.",
    ],
    why: "Your account and your funds are protected at all times, so you can trade with peace of mind.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        title="AI Trading Features"
        description="A focused set of tools built around patterns, trends, risk and clear analysis. Here's what each one does, and how it can help you trade."
      />

      <section className="py-8 lg:py-14">
        <div className="mx-auto max-w-5xl space-y-14 px-4 sm:px-6 lg:px-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="grid items-start gap-6 lg:grid-cols-2 lg:gap-12"
            >
              <div>
                <h2 className="font-display text-2xl font-semibold uppercase tracking-wide text-slate-900 lg:text-[1.75rem]">
                  {feature.title}
                </h2>
                {feature.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="mt-3 text-base leading-relaxed text-slate-600"
                  >
                    <BoldBrand text={paragraph} />
                  </p>
                ))}
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
                <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-amber-700">
                  Why It Helps
                </h3>
                <p className="mt-2.5 text-base leading-relaxed text-slate-700">
                  {feature.why}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-8 lg:py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-slate-900 md:text-[2rem] lg:text-4xl">
            Ready To Try These Tools?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            See how Pure Linemark brings patterns, trends and risk together into
            one clear, organised view.
          </p>
        </div>
      </section>

    </>
  );
}
