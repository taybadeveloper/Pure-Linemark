import Link from "next/link";
import HeroForm from "@/components/HeroForm";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
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

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="animate-fade-up text-center lg:col-span-7 lg:text-left">
          <h1 className="font-display text-3xl font-semibold uppercase leading-[1.3] tracking-tight text-slate-900 sm:text-4xl md:text-5xl xl:text-5xl">
            <span className="text-amber-600">Pure Linemark</span> Makes Your Money
            <br />
            Work While You Sleep
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-600 lg:mx-0">
            Pure Linemark&apos;s AI engine trades global markets for you, 24 hours a day, 7
            days a week. You don&apos;t read charts. You don&apos;t watch screens. You just
            switch it on and get on with your life.
          </p>

          <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-600 lg:justify-start">
            {["Start With Just $250", "Withdraw Anytime", "2FA Secured"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-green-600" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 lg:justify-start">
            <Link
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-amber-700 transition-colors hover:text-amber-800"
            >
              Learn How The AI Works
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <a href="#features" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500 transition-colors hover:text-slate-900">
              View Our Features
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative animate-fade-up lg:col-span-5 lg:pl-6" style={{ animationDelay: "0.15s" }}>
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
