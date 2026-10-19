/** Realistic tablet mockup showing the Pure Linemark AI trading dashboard */
export default function TabletMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[320px]">
      {/* soft glow behind the tablet */}
      <div
        aria-hidden="true"
        className="absolute -inset-10 rounded-full bg-brand/20 blur-3xl"
      />

      <svg
        viewBox="0 0 400 520"
        className="relative h-auto w-full drop-shadow-2xl"
        role="img"
        aria-label="Pure Linemark tablet app showing an AI trading dashboard with a live chart"
      >
        <defs>
          <linearGradient id="tab-screen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#101c35" />
            <stop offset="1" stopColor="#0a1122" />
          </linearGradient>
          <linearGradient id="tab-chart-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f5b301" stopOpacity="0.25" />
            <stop offset="1" stopColor="#f5b301" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="tab-card" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1b2a4a" />
            <stop offset="1" stopColor="#131f38" />
          </linearGradient>
        </defs>

        {/* tablet body */}
        <rect x="12" y="8" width="376" height="504" rx="32" fill="#0b1220" />
        <rect x="16" y="12" width="368" height="496" rx="28" fill="none" stroke="#1e2a44" strokeWidth="1.5" />

        {/* camera dot */}
        <circle cx="200" cy="26" r="3" fill="#1e2a44" />

        {/* screen */}
        <rect x="24" y="18" width="352" height="484" rx="24" fill="url(#tab-screen)" />

        {/* status bar */}
        <text x="44" y="48" fill="#e2e8f0" fontSize="11" fontWeight="600" fontFamily="Poppins, Arial, sans-serif">Tue 10:42</text>
        <rect x="320" y="39" width="16" height="8" rx="3" fill="none" stroke="#64748b" strokeWidth="1.2" />
        <rect x="322" y="41" width="10" height="4" rx="1.5" fill="#22c55e" />
        <rect x="340" y="41" width="2" height="4" rx="1" fill="#64748b" />

        {/* app header */}
        <text x="44" y="84" fill="#ffffff" fontSize="15" fontWeight="700" fontFamily="Poppins, Arial, sans-serif">Pure Linemark</text>
        <circle cx="352" cy="79" r="12" fill="#16233f" />
        <path d="M348 83h8M352 79v8" stroke="#f5b301" strokeWidth="1.8" strokeLinecap="round" />

        {/* balance card */}
        <rect x="44" y="98" width="312" height="92" rx="16" fill="url(#tab-card)" />
        <text x="60" y="120" fill="#94a3b8" fontSize="9.5" fontWeight="600" letterSpacing="1" fontFamily="Poppins, Arial, sans-serif">PORTFOLIO VALUE</text>
        <text x="60" y="150" fill="#ffffff" fontSize="24" fontWeight="700" fontFamily="Poppins, Arial, sans-serif">$12,480.50</text>
        <rect x="60" y="160" width="92" height="19" rx="10" fill="rgba(34,197,94,0.14)" stroke="rgba(34,197,94,0.4)" strokeWidth="1" />
        <text x="106" y="173" textAnchor="middle" fill="#4ade80" fontSize="9.5" fontWeight="700" fontFamily="Poppins, Arial, sans-serif">+4.2% TODAY</text>

        {/* stats row */}
        {[
          { x: 56, value: "$850", label: "TODAY" },
          { x: 160, value: "42", label: "TRADES" },
          { x: 264, value: "87%", label: "WIN RATE" },
        ].map((stat) => (
          <g key={stat.x}>
            <text x={stat.x} y="212" fill="#ffffff" fontSize="14" fontWeight="700" fontFamily="Poppins, Arial, sans-serif">{stat.value}</text>
            <text x={stat.x} y="226" fill="#64748b" fontSize="8" letterSpacing="1" fontFamily="Poppins, Arial, sans-serif">{stat.label}</text>
          </g>
        ))}

        {/* chart */}
        {[262, 304, 346].map((y) => (
          <line key={y} x1="44" y1={y} x2="356" y2={y} stroke="#1b2740" strokeWidth="1" />
        ))}
        <path
          d="M44 334 C96 324 108 300 148 300 S200 258 236 264 S288 226 356 220 L356 360 L44 360 Z"
          fill="url(#tab-chart-area)"
        />
        <path
          d="M44 334 C96 324 108 300 148 300 S200 258 236 264 S288 226 356 220"
          fill="none"
          stroke="#f5b301"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="356" cy="220" r="8" fill="#f5b301" opacity="0.25" />
        <circle cx="356" cy="220" r="4" fill="#f5b301" />
        <circle cx="356" cy="220" r="1.6" fill="#fff" />
        {[
          { x: 44, label: "09:00" },
          { x: 148, label: "12:00" },
          { x: 252, label: "15:00" },
        ].map((t) => (
          <text key={t.x} x={t.x} y="378" fill="#64748b" fontSize="8.5" fontFamily="Poppins, Arial, sans-serif">{t.label}</text>
        ))}

        {/* AI engine status */}
        <rect x="44" y="394" width="312" height="36" rx="18" fill="#16233f" stroke="#f5b301" strokeWidth="1.2" />
        <circle cx="66" cy="412" r="7.5" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.45" />
        <circle cx="66" cy="412" r="3.8" fill="#22c55e" />
        <text x="82" y="408" fill="#ffffff" fontSize="10" fontWeight="700" letterSpacing="0.5" fontFamily="Poppins, Arial, sans-serif">AI ENGINE ACTIVE</text>
        <text x="82" y="421" fill="#f5b301" fontSize="7.5" fontWeight="600" fontFamily="Poppins, Arial, sans-serif">TRADING 24/7</text>

        {/* bottom nav */}
        <rect x="44" y="446" width="312" height="34" rx="17" fill="#121c33" />
        {[96, 200, 304].map((x, index) => (
          <circle key={x} cx={x} cy="463" r="3" fill={index === 0 ? "#f5b301" : "#475569"} />
        ))}
        <circle cx="348" cy="463" r="3" fill="#475569" />
      </svg>
    </div>
  );
}
