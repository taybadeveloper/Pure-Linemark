import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import BoldBrand from "@/components/BoldBrand";
import { EMAIL } from "@/components/data";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Pure Linemark risk disclaimer — trading involves significant risk of loss. Read this before using the platform.",
  alternates: { canonical: "/disclaimer" },
};

interface Section {
  title: string;
  body: string;
  emailLink?: boolean;
}

const sections: Section[] = [
  {
    title: "General Information",
    body: "The information provided on this website is for general informational purposes only and does not constitute financial, investment, legal or tax advice. You should not rely on any information on this website as a substitute for professional advice tailored to your personal circumstances.",
  },
  {
    title: "Trading Risks",
    body: "Trading in financial markets involves significant risk of loss and is not suitable for all investors. The value of investments can go down as well as up, and you may lose some or all of your invested capital. You should never trade with money you cannot afford to lose.",
  },
  {
    title: "Automated Trading",
    body: "The Pure Linemark AI engine is an automated trading tool. Automated trading carries additional risks, including system errors, connectivity failures and market conditions that differ from back-tested scenarios. The AI engine does not guarantee profits, and no automated system can eliminate trading risk.",
  },
  {
    title: "Past Performance",
    body: "Past performance — including that of any automated trading system — is not a guarantee or indicator of future results. Hypothetical or simulated performance results have inherent limitations and may differ materially from actual trading results.",
  },
  {
    title: "No Financial Advice",
    body: "Pure Linemark does not provide personal financial advice and is not a licensed financial adviser. Nothing on this website constitutes a recommendation to buy or sell any financial instrument. You should consider seeking advice from a licensed professional before making any investment decision.",
  },
  {
    title: "Limitation of Liability",
    body: "To the maximum extent permitted by law, Pure Linemark accepts no liability for any loss or damage arising from your use of this website or the trading platform, including trading losses, system downtime, or reliance on any information provided.",
  },
  {
    title: "Contact",
    body: `Questions about this disclaimer can be sent to ${EMAIL}.`,
    emailLink: true,
  },
];

export default function DisclaimerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Disclaimer"
        description="Please read this disclaimer carefully before using the Pure Linemark platform. Last updated: 29 September 2026."
      />

      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
          {sections.map((section, index) => (
            <div key={section.title}>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-slate-900">
                {index + 1}. {section.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {section.emailLink ? (
                  <>
                    {section.body.split(EMAIL)[0]}
                    <a
                      href={`mailto:${EMAIL}`}
                      className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-2 transition-colors hover:text-amber-600"
                    >
                      {EMAIL}
                    </a>
                    {section.body.split(EMAIL)[1]}
                  </>
                ) : (
                  <BoldBrand text={section.body} />
                )}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
