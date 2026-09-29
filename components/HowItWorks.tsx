import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { steps } from "@/components/data";
import { ArrowRightIcon } from "@/components/icons";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="Three Steps to AI-Powered Trading"
          description="No charts to watch, no experience required. You fund your account, switch the engine on, and let the AI do the rest."
        />

        <div className="relative mt-14 grid gap-10 sm:grid-cols-3 lg:gap-8">
          {/* connecting dashed line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden border-t-2 border-dashed border-amber-400/60 sm:block"
          />
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center sm:px-2">
              <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand bg-white font-display text-xl font-bold text-ink shadow-md shadow-amber-900/10">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-wide text-slate-900">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/sign-up"
            className="inline-flex items-center gap-2 rounded-md bg-ink px-8 py-3.5 font-display text-base font-bold uppercase tracking-wider text-white shadow-lg shadow-slate-900/15 transition-colors hover:bg-slate-800"
          >
            Start Trading in 2 Minutes
            <ArrowRightIcon className="h-5 w-5 text-brand" />
          </Link>
        </div>
      </div>
    </section>
  );
}
