import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import BoldBrand from "@/components/BoldBrand";
import { EMAIL } from "@/components/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Pure Linemark privacy policy, how we collect, use and protect your personal information.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly to us, including your name, email address, phone number and country of residence when you register an account or contact our support team. We also collect technical information such as your IP address, browser type and pages visited to keep the platform secure and improve your experience.",
  },
  {
    title: "How We Use Your Information",
    body: "Your information is used to create and manage your account, process registrations and withdrawals, respond to your enquiries, and keep you informed about your account and our services. We do not sell your personal information to third parties.",
  },
  {
    title: "Cookies & Analytics",
    body: "We use cookies and similar technologies to remember your preferences and understand how the site is used. You can disable cookies in your browser settings, although some features of the platform may not work correctly without them.",
  },
  {
    title: "Data Security",
    body: "We protect your information with bank-grade encryption and strict access controls. All accounts are protected with mandatory two-factor authentication, and client data is stored on secure, access-controlled infrastructure.",
  },
  {
    title: "Third-Party Services",
    body: "To provide our services we work with trusted third parties such as payment processors and hosting providers. These partners only receive the information necessary to perform their function and are required to keep it confidential.",
  },
  {
    title: "Your Rights",
    body: "You may request access to, correction of, or deletion of your personal information at any time by contacting our support team. We will respond to all legitimate requests within a reasonable timeframe.",
  },
  {
    title: "Contact Us",
    body: `Questions about this privacy policy can be sent to ${EMAIL}. We review this policy regularly and will post any updates on this page.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Pure Linemark collects, uses and protects your personal information. Last updated: 29 September 2026."
      />

      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
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
