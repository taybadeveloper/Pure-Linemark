import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import HeroForm from "@/components/HeroForm";
import TabletMockup from "@/components/TabletMockup";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact the Pure Linemark Australian support team, email us or use the contact details below. We're here 7 days a week.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="We're Here to Help, 7 Days a Week"
        description="Questions about your account, deposits or withdrawals? Our Australian support team responds fast, usually within one business day."
      />

      <section className="border-t border-slate-200 bg-slate-50 py-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-11 lg:px-8">
          {/* Contact text + form, left side */}
          <div className="space-y-8 lg:col-span-6">
          <div className="text-center lg:text-left">
            <h2 className="font-display text-2xl font-semibold uppercase leading-tight tracking-tight text-slate-900 md:text-3xl">
              Questions? We&apos;re Ready To Help
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Need help with your account, a deposit or a withdrawal? Our
              Australian team answers fast, 7 days a week from 8am to 10pm
              AEST. Drop your details in the form and we&apos;ll come back to
              you, usually within one business day.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              While you wait, the AI engine keeps working. It trades global
              markets 24/7, so your portfolio never takes a day off.
            </p>
          </div>

          {/* Registration form, below the text */}
          <HeroForm />
          </div>

          {/* Tablet mockup, right side */}
          <div className="lg:col-span-5">
            <TabletMockup />
          </div>
        </div>
      </section>
    </>
  );
}
