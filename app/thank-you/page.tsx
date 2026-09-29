import type { Metadata } from "next";
import Link from "next/link";
import { EMAIL } from "@/components/data";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your Pure Linemark registration has been received.",
  robots: { index: false, follow: false },
};

const nextSteps = [
  {
    title: "We Review Your Details",
    description:
      "Our Australian team checks your registration and prepares your new trading account.",
  },
  {
    title: "Activation Email Arrives",
    description:
      "Within one business day you'll receive your account activation email with everything you need.",
  },
  {
    title: "Fund & Activate the AI",
    description:
      "Deposit from $250, switch the engine on, and let the AI trade around the clock for you.",
  },
];

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ name?: string }>;
}) {
  const { name } = await searchParams;

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 420px at 50% 0%, rgba(34,197,94,0.1), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        {/* success check */}
        <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 shadow-lg shadow-green-900/10">
          <svg
            viewBox="0 0 24 24"
            className="h-10 w-10 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m5 13 4 4L19 7" />
          </svg>
        </span>

        <h1 className="mt-8 font-display text-4xl font-bold uppercase tracking-tight text-slate-900 sm:text-5xl">
          Thank You{name ? `, ${name}` : ""}!
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
          Your registration has been <strong className="text-slate-900">received successfully</strong>.
          Our team will contact you within one business day to activate your account.
        </p>

        {/* what happens next */}
        <div className="mt-14 grid gap-6 text-left sm:grid-cols-3">
          {nextSteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand bg-amber-50 font-display text-lg font-bold text-amber-700">
                {index + 1}
              </span>
              <h2 className="mt-4 font-display text-base font-bold uppercase tracking-wide text-slate-900">
                {step.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-ink px-7 py-3.5 font-display text-base font-bold uppercase tracking-wider text-white shadow-lg shadow-slate-900/15 transition-colors hover:bg-slate-800"
          >
            Back to Home
            <ArrowRightIcon className="h-5 w-5 text-brand" />
          </Link>
          <p className="text-sm text-slate-500">
            Questions? Email us at{" "}
            <a href={`mailto:${EMAIL}`} className="font-semibold text-amber-700 hover:underline">
              {EMAIL}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
