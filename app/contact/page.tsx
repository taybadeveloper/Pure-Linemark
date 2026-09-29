import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import HeroForm from "@/components/HeroForm";
import { EMAIL } from "@/components/data";
import { MailIcon, ClockIcon, MapPinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact the Pure Linemark Australian support team — email us or use the contact details below. We're here 7 days a week.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Pure Linemark"
        title="We're Here to Help, 7 Days a Week"
        description="Questions about your account, deposits or withdrawals? Our Australian support team responds fast — usually within one business day."
      />

      <section className="border-t border-slate-200 bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          {/* Contact info cards — left side */}
          <div className="space-y-6 lg:col-span-2">
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-amber-300"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-100">
              <MailIcon className="h-6 w-6 text-amber-700" />
            </span>
            <span>
              <span className="block text-xs font-bold uppercase tracking-widest text-slate-500">
                Email Us
              </span>
              <span className="font-display text-xl font-bold text-slate-900 break-all">{EMAIL}</span>
            </span>
          </a>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-100">
                <ClockIcon className="h-6 w-6 text-amber-700" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Support Hours
                </p>
                <p className="font-display text-lg font-bold text-slate-900">7 days: 8am – 10pm AEST</p>
                <p className="text-sm text-slate-500">Trading engine runs 24/7, 365 days</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-100">
                <MapPinIcon className="h-6 w-6 text-amber-700" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Availability
                </p>
                <p className="font-display text-lg font-bold text-slate-900">All Australian states</p>
                <p className="text-sm text-slate-500">Open to Australian residents nationwide</p>
              </div>
            </div>
          </div>
          </div>

          {/* Registration form — right side */}
          <div className="lg:col-span-3">
            <HeroForm />
          </div>
        </div>
      </section>
    </>
  );
}
