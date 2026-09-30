import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export default function CTABanner() {
  return (
    <section className="bg-brand py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:text-left">
        <div>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
            Your AI Trading Engine Is Ready
          </h2>
          <p className="mt-3 max-w-xl text-base font-medium text-ink/70">
            Join 28,000+ Australians and put the markets to work for you, sign up now and
            start trading on autopilot today.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/sign-up"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-ink px-7 py-3.5 font-display text-base font-bold uppercase tracking-wider text-white shadow-lg shadow-amber-900/20 transition-colors hover:bg-slate-800"
          >
            Sign Up Now
            <ArrowRightIcon className="h-5 w-5 text-brand" />
          </Link>
        </div>
      </div>
    </section>
  );
}
