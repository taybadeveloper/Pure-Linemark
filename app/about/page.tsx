import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Stats from "@/components/Stats";
import { BotIcon, ShieldIcon, HeadsetIcon, CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Pure Linemark, the Australian AI-powered trading platform built by traders and engineers to make automated trading simple, secure and accessible.",
  alternates: { canonical: "/about" },
};

const pillars = [
  {
    title: "The AI Engine",
    description:
      "Built by traders and engineers, our engine analyses dozens of indicators across crypto, forex and commodities in real time, and acts in milliseconds when opportunity strikes.",
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
        description="Pure Linemark exists for one reason: to make world-class automated trading simple, secure and accessible for everyday Australians, no finance degree required."
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
                  trades in milliseconds, while you get on with your day.
                </p>
                <p>
                  Today, more than 28,000 Australians trust{" "}
                  <strong className="text-slate-900">Pure Linemark</strong> to trade on their
                  behalf, from first-time investors starting with $250 to experienced traders
                  who simply want their capital working harder.
                </p>
              </div>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
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
              <div className="overflow-hidden rounded-2xl bg-ink-soft p-4 shadow-xl shadow-slate-900/20">
                <svg viewBox="0 0 520 380" className="h-auto w-full" role="img" aria-label="Illustration of the Pure Linemark AI trading dashboard with a live market chart">
                  <defs>
                    <linearGradient id="about-chart-bg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#101c35" />
                      <stop offset="1" stopColor="#0a1122" />
                    </linearGradient>
                    <linearGradient id="about-chart-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#f5b301" stopOpacity="0.22" />
                      <stop offset="1" stopColor="#f5b301" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* card */}
                  <rect width="520" height="380" rx="14" fill="url(#about-chart-bg)" />

                  {/* window chrome */}
                  <circle cx="26" cy="26" r="5" fill="#ff5f57" />
                  <circle cx="44" cy="26" r="5" fill="#febc2e" />
                  <circle cx="62" cy="26" r="5" fill="#28c840" />
                  <text x="260" y="31" textAnchor="middle" fill="#64748b" fontSize="10.5" fontWeight="600" letterSpacing="2" fontFamily="Arial, sans-serif">
                    PURE LINEMARK, AI TRADING DASHBOARD
                  </text>
                  <line x1="20" y1="50" x2="500" y2="50" stroke="#1b2740" strokeWidth="1" />

                  {/* grid */}
                  {[70, 125, 180, 235, 290].map((y) => (
                    <line key={`h${y}`} x1="52" y1={y} x2="500" y2={y} stroke="#1b2740" strokeWidth="1" />
                  ))}
                  {[78, 131, 184, 237, 290, 343, 396, 450].map((x) => (
                    <line key={`v${x}`} x1={x} y1="70" x2={x} y2="290" stroke="#141e33" strokeWidth="1" />
                  ))}
                  <line x1="52" y1="70" x2="52" y2="290" stroke="#1b2740" strokeWidth="1" />

                  {/* y-axis price labels */}
                  {[
                    { y: 73, label: "2.478" },
                    { y: 128, label: "2.432" },
                    { y: 183, label: "2.386" },
                    { y: 238, label: "2.340" },
                    { y: 293, label: "2.294" },
                  ].map((t) => (
                    <text key={t.y} x="46" y={t.y} textAnchor="end" fill="#64748b" fontSize="10" fontFamily="Arial, sans-serif">
                      {t.label}
                    </text>
                  ))}

                  {/* x-axis time labels */}
                  {[
                    { x: 78, label: "09:00" },
                    { x: 131, label: "10:00" },
                    { x: 184, label: "11:00" },
                    { x: 237, label: "12:00" },
                    { x: 290, label: "13:00" },
                    { x: 343, label: "14:00" },
                    { x: 396, label: "15:00" },
                  ].map((t) => (
                    <text key={t.x} x={t.x} y="310" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="Arial, sans-serif">
                      {t.label}
                    </text>
                  ))}

                  {/* candlesticks */}
                  {[
                    { x: 78, top: 190, bot: 234, up: true },
                    { x: 131, top: 172, bot: 214, up: true },
                    { x: 184, top: 118, bot: 166, up: false },
                    { x: 237, top: 150, bot: 182, up: false },
                    { x: 290, top: 120, bot: 152, up: true },
                    { x: 343, top: 104, bot: 136, up: true },
                    { x: 396, top: 88, bot: 118, up: true },
                  ].map((c) => {
                    const color = c.up ? "#22c55e" : "#ef4444";
                    return (
                      <g key={c.x}>
                        <line x1={c.x} y1={c.top - 16} x2={c.x} y2={c.bot + 16} stroke={color} strokeWidth="2" />
                        <rect x={c.x - 10} y={Math.min(c.top, c.bot)} width="20" height={Math.abs(c.top - c.bot)} rx="3" fill={color} />
                      </g>
                    );
                  })}

                  {/* AI profit curve */}
                  <path
                    d="M78 190 C104 190 104 172 131 172 S158 118 184 118 S210 182 237 182 S270 120 290 120 S322 104 343 104 S370 88 396 88 S423 84 474 84 L474 290 L78 290 Z"
                    fill="url(#about-chart-area)"
                  />
                  <path
                    d="M78 190 C104 190 104 172 131 172 S158 118 184 118 S210 182 237 182 S270 120 290 120 S322 104 343 104 S370 88 396 88 S423 84 474 84"
                    fill="none"
                    stroke="#f5b301"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="474" cy="84" r="11" fill="#f5b301" opacity="0.2" />
                  <circle cx="474" cy="84" r="5.5" fill="#f5b301" />
                  <circle cx="474" cy="84" r="2" fill="#fff" />

                  {/* stat chip */}
                  <rect x="52" y="62" width="110" height="26" rx="13" fill="rgba(34,197,94,0.12)" stroke="rgba(34,197,94,0.35)" strokeWidth="1" />
                  <text x="107" y="79" textAnchor="middle" fill="#4ade80" fontSize="11" fontWeight="700" letterSpacing="1" fontFamily="Arial, sans-serif">
                    +4.2% TODAY
                  </text>

                  {/* last-price tooltip */}
                  <rect x="330" y="42" width="112" height="38" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                  <text x="386" y="60" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">
                    $2,478.50
                  </text>
                  <text x="386" y="74" textAnchor="middle" fill="#4ade80" fontSize="9.5" fontWeight="600" fontFamily="Arial, sans-serif">
                    +$850 PROFIT
                  </text>

                  {/* AI engine badge */}
                  <rect x="348" y="236" width="140" height="40" rx="20" fill="#0f172a" stroke="#f5b301" strokeWidth="1.5" />
                  <circle cx="364" cy="256" r="7.5" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.4" />
                  <circle cx="364" cy="256" r="4" fill="#22c55e" />
                  <text x="380" y="251" fill="#ffffff" fontSize="10.5" fontWeight="700" letterSpacing="0.5" fontFamily="Arial, sans-serif">
                    AI ENGINE
                  </text>
                  <text x="380" y="265" fill="#f5b301" fontSize="8" fontWeight="600" letterSpacing="0.5" fontFamily="Arial, sans-serif">
                    50+ INDICATORS • LIVE
                  </text>

                  {/* footer note */}
                  <line x1="20" y1="332" x2="500" y2="332" stroke="#1b2740" strokeWidth="1" />
                  <text x="260" y="356" textAnchor="middle" fill="#475569" fontSize="9" letterSpacing="1.5" fontFamily="Arial, sans-serif">
                    MARKET DATA DELAYED • FOR ILLUSTRATION ONLY
                  </text>
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
