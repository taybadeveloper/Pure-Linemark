import Link from "next/link";
import HeroForm from "@/components/HeroForm";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { MIN_DEPOSIT } from "@/components/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* background pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.35,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 420px at 15% 0%, rgba(245,179,1,0.12), transparent 60%), radial-gradient(600px 400px at 90% 100%, rgba(34,197,94,0.07), transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-800">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
            Australia&apos;s AI-Powered Trading Platform
          </p>

          <h1 className="mt-6 font-display text-3xl font-bold uppercase leading-[1.1] tracking-tight text-slate-900 sm:text-4xl xl:text-5xl">
            Earn Up To <span className="text-amber-600">$850 Daily</span>
            <br />
            With <span className="text-amber-600">Pure Linemark</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Our <strong className="text-slate-900">AI trading engine</strong> works the global
            markets around the clock — so your money works while you live your life. Join{" "}
            <strong className="text-slate-900">28,000+ Australian traders</strong> and start
            with just {MIN_DEPOSIT}.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-600">
            {["No hidden fees", "Withdraw anytime", "2FA secured"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-green-600" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 hidden items-center gap-6 lg:flex">
            <Link
              href="/sign-up"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-amber-700 transition-colors hover:text-amber-800"
            >
              Learn how the AI works
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <a href="#how-it-works" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-500 transition-colors hover:text-slate-900">
              View our features
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-8 text-xs leading-relaxed text-slate-400">
            Trading involves risk of loss. Past performance does not guarantee future results.
          </p>
        </div>

        <div className="relative animate-fade-up lg:pl-6" style={{ animationDelay: "0.15s" }}>
          {/* subtle glow behind the form */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-4 rounded-3xl opacity-60"
            style={{
              background:
                "radial-gradient(400px 300px at 60% 30%, rgba(245,179,1,0.15), transparent 70%)",
            }}
          />
          <HeroForm />
        </div>
      </div>
    </section>
  );
}
