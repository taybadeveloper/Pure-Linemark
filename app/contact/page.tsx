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
              Fill The Form In 4 Simple Steps
            </h2>
            <ol className="mt-6 space-y-4 text-left">
              {[
                {
                  title: "Enter Your Name",
                  description: "Type your first and last name.",
                },
                {
                  title: "Add Your Email",
                  description:
                    "Use an email you check often. That's where we'll reply.",
                },
                {
                  title: "Pick Your Country And Phone",
                  description:
                    "Choose your country from the list and add your phone number.",
                },
                {
                  title: "Hit Sign Up Now",
                  description: "That's it. Our team takes it from there.",
                },
              ].map((step, index) => (
                <li key={step.title} className="flex items-start gap-3.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 font-display text-sm font-semibold text-amber-700">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-display text-base font-semibold uppercase tracking-wide text-slate-900">
                      {step.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
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
