import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import BoldBrand from "@/components/BoldBrand";
import { EMAIL } from "@/components/data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Pure Linemark terms and conditions — the rules that govern your use of the platform and trading accounts.",
  alternates: { canonical: "/terms-and-conditions" },
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By creating an account or using the Pure Linemark platform, you agree to these terms and conditions. If you do not agree with any part of these terms, you must not use the platform.",
  },
  {
    title: "Eligibility",
    body: "You must be at least 18 years old and an Australian resident to open an account. By registering, you confirm that all information you provide is accurate, current and complete.",
  },
  {
    title: "Account Registration",
    body: "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Notify us immediately if you suspect unauthorised access. Mandatory two-factor authentication must remain enabled at all times.",
  },
  {
    title: "Deposits & Withdrawals",
    body: "The minimum deposit to activate the AI engine is $250. Withdrawals are processed on request and most are completed within 24 hours. We do not charge account or withdrawal fees, however third-party processing fees may apply.",
  },
  {
    title: "Trading Risks",
    body: "Trading in financial markets involves significant risk of loss and is not suitable for everyone. The AI engine does not guarantee profits — past performance is not an indicator of future results. You should never trade with money you cannot afford to lose, and you remain solely responsible for the trades executed on your account.",
  },
  {
    title: "No Financial Advice",
    body: "Pure Linemark provides an automated trading service and does not provide personal financial advice. Nothing on this website constitutes a recommendation to buy or sell any financial instrument. Consider seeking advice from a licensed professional before trading.",
  },
  {
    title: "Prohibited Activities",
    body: "You must not use the platform for any unlawful purpose, attempt to manipulate or interfere with the AI engine, provide false information, or access the platform through unauthorised means. We may suspend or terminate accounts that violate these terms.",
  },
  {
    title: "Limitation of Liability",
    body: "To the maximum extent permitted by law, Pure Linemark is not liable for any loss arising from market movements, system downtime, third-party services, or your use of the platform. Trading losses are a normal part of market participation.",
  },
  {
    title: "Changes to These Terms",
    body: "We may update these terms from time to time. Material changes will be communicated via email or a notice on this page. Continued use of the platform after changes take effect constitutes acceptance of the updated terms.",
  },
  {
    title: "Governing Law",
    body: "These terms are governed by the laws of Australia. Any disputes will be resolved under the jurisdiction of the Australian courts.",
  },
  {
    title: "Contact",
    body: `Questions about these terms can be sent to ${EMAIL}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        description="The rules that govern your use of the Pure Linemark platform. Last updated: 29 September 2026."
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6 lg:px-8">
          {sections.map((section, index) => (
            <div key={section.title}>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-slate-900">
                {index + 1}. {section.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                <BoldBrand text={section.body} />
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
