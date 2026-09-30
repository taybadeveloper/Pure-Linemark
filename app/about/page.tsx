import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Stats from "@/components/Stats";
import { BotIcon, ShieldIcon, HeadsetIcon, CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Pure Linemark — the Australian AI-powered trading platform built by traders and engineers to make automated trading simple, secure and accessible.",
  alternates: { canonical: "/about" },
};

const pillars = [
  {
    title: "The AI Engine",
    description:
      "Built by traders and engineers, our engine analyses dozens of indicators across crypto, forex and commodities in real time — and acts in milliseconds when opportunity strikes.",
    icon: BotIcon,
  },
  {
    title: "Security First",
    description:
      "256-bit encryption, mandatory two-factor authentication and segregated client accounts. Your funds are protected by the same standards used by major financial institutions.",
    icon: ShieldIcon,
  },
  {
    title: "Real Human Support",
    description:
      "Behind every account is a real Australian support team, on hand seven days a week for deposits, withdrawals and everything in between.",
    icon: HeadsetIcon,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Pure Linemark"
        title="AI Built for Australian Traders"
        description="Pure Linemark exists for one reason: to make world-class automated trading simple, secure and accessible for everyday Australians — no finance degree required."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700">
                Our Story
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight text-slate-900 sm:text-4xl">
                From a team that got tired of watching charts
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  <strong className="text-slate-900">Pure Linemark</strong> was founded by
                  Australian traders and software engineers who shared a simple frustration:
                  great trading opportunities don&apos;t wait for business hours, and most
                  people don&apos;t have time to watch markets around the clock.
                </p>
                <p>
                  So we built an AI engine that does the watching for you. It scans global
                  markets 24/7, applies disciplined risk rules on every position, and executes
                  trades in milliseconds — while you get on with your day.
                </p>
                <p>
                  Today, more than 28,000 Australians trust{" "}
                  <strong className="text-slate-900">Pure Linemark</strong> to trade on their
                  behalf — from first-time investors starting with $250 to experienced traders
                  who simply want their capital working harder.
                </p>
              </div>
              <ul className="mx-auto mt-8 grid max-w-lg gap-3 sm:grid-cols-2">
                {[
                  "Australian-owned & operated",
                  "28,000+ active members",
                  "24/7 automated trading",
                  "Australian-based support team",
                ].map((item) => (
                  <li key={item} className="flex items-start justify-start gap-2.5 text-sm font-medium text-slate-700">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl bg-ink-soft p-8 shadow-xl shadow-slate-900/20">
                <svg viewBox="0 0 520 380" className="h-auto w-full" role="img" aria-label="Illustration of the Pure Linemark AI trading engine analysing markets">
                  <defs>
                    <pattern id="about-trading-dots" width="26" height="26" patternUnits="userSpaceOnUse">
                      <circle cx="2.5" cy="2.5" r="1.2" fill="#1d2a45" />
                    </pattern>
                  </defs>
                  <rect width="520" height="380" rx="14" fill="#111b30" />
                  <rect width="520" height="380" rx="14" fill="url(#about-trading-dots)" />
                  {[80, 140, 200, 260].map((y) => (
                    <line key={y} x1="30" y1={y} x2="490" y2={y} stroke="#1d2a45" strokeWidth="1.5" />
                  ))}
                  {[
                    { x: 60, a: 100, b: 150, up: true },
                    { x: 110, a: 90, b: 140, up: true },
                    { x: 160, a: 60, b: 130, up: true },
                    { x: 210, a: 120, b: 90, up: false },
                    { x: 260, a: 70, b: 120, up: true },
                    { x: 310, a: 50, b: 105, up: true },
                    { x: 360, a: 40, b: 90, up: true },
                    { x: 410, a: 85, b: 60, up: false },
                    { x: 460, a: 30, b: 70, up: true },
                  ].map((c) => (
                    <g key={c.x}>
                      <line x1={c.x} y1={c.a - 22} x2={c.x} y2={c.b + 22} stroke={c.up ? "#22c55e" : "#ef4444"} strokeWidth="2.5" />
                      <rect x={c.x - 9} y={Math.min(c.a, c.b)} width="18" height={Math.abs(c.a - c.b)} rx="2" fill={c.up ? "#22c55e" : "#ef4444"} />
                    </g>
                  ))}
                  <path d="M60 125 L160 95 L260 88 L360 70 L460 42" fill="none" stroke="#f5b301" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="460" cy="42" r="6" fill="#f5b301" />
                  <g>
                    <rect x="180" y="290" width="160" height="52" rx="10" fill="#0f172a" stroke="#f5b301" strokeWidth="2" />
                    <circle cx="214" cy="316" r="10" fill="none" stroke="#f5b301" strokeWidth="2.5" />
                    <path d="M210 316h8M214 312v8" stroke="#f5b301" strokeWidth="2.5" />
                    <text x="234" y="312" fill="#ffffff" fontSize="14" fontWeight="700" fontFamily="Arial, sans-serif">AI ENGINE</text>
                    <text x="234" y="330" fill="#f5b301" fontSize="12" fontWeight="600" fontFamily="Arial, sans-serif">SCANNING 50+ INDICATORS</text>
                  </g>
                </svg>
              </div>
              <div className="absolute -bottom-5 left-6 rounded-lg border border-slate-200 bg-white px-5 py-4 shadow-xl">
                <p className="font-display text-3xl font-bold text-amber-600">28k+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Australian Members
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
                  <pillar.icon className="h-7 w-7 text-amber-600" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide text-slate-900">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
    </>
  );
}
