import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import HeroForm from "@/components/HeroForm";
import { EMAIL } from "@/components/data";
import { MailIcon, ClockIcon, MapPinIcon } from "@/components/icons";

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
        eyebrow="Contact Pure Linemark"
        title="We're Here to Help, 7 Days a Week"
        description="Questions about your account, deposits or withdrawals? Our Australian support team responds fast, usually within one business day."
      />

      <section className="border-t border-slate-200 bg-slate-50 py-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-11 lg:px-8">
          {/* Contact info cards, left side */}
          <div className="space-y-6 lg:col-span-5">
          <a
            href={`mailto:${EMAIL}`}
            className="group flex flex-col items-center justify-center gap-5 rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-colors hover:border-amber-300 lg:flex-row lg:justify-start lg:text-left"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-100">
              <MailIcon className="h-6 w-6 text-amber-700" />
            </span>
            <span>
              <span className="block text-sm font-bold uppercase tracking-widest text-slate-500">
                Email Us
              </span>
              <span className="mt-1 block break-all font-display text-xl font-bold text-slate-900 transition-colors group-hover:text-amber-700">{EMAIL}</span>
            </span>
          </a>

          <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm lg:text-left">
            <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:justify-start">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-100">
                <ClockIcon className="h-6 w-6 text-amber-700" />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
                  Support Hours
                </p>
                <p className="mt-1.5 font-display text-lg font-bold text-slate-900">7 days: 8am to 10pm AEST</p>
                <p className="mt-0.5 text-sm text-slate-500">Trading engine runs 24/7, 365 days</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm lg:text-left">
            <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:justify-start">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-100">
                <MapPinIcon className="h-6 w-6 text-amber-700" />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
                  Availability
                </p>
                <p className="mt-1.5 font-display text-lg font-bold text-slate-900">All Australian states</p>
                <p className="mt-0.5 text-sm text-slate-500">Open to Australian residents nationwide</p>
              </div>
            </div>
          </div>
          </div>

          {/* Registration form, right side */}
          <div className="lg:col-span-6">
            <HeroForm />
          </div>
        </div>
      </section>
    </>
  );
}
