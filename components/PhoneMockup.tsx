/** Realistic phone mockup showing the Pure Linemark AI trading dashboard */
export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[300px]">
      {/* soft glow behind the phone */}
      <div
        aria-hidden="true"
        className="absolute -inset-10 rounded-full bg-brand/20 blur-3xl"
      />

      <svg
        viewBox="0 0 320 660"
        className="relative h-auto w-full drop-shadow-2xl"
        role="img"
        aria-label="Pure Linemark mobile app showing an AI trading dashboard with a live chart"
      >
        <defs>
          <linearGradient id="phone-screen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#101c35" />
            <stop offset="1" stopColor="#0a1122" />
          </linearGradient>
          <linearGradient id="phone-chart-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f5b301" stopOpacity="0.25" />
            <stop offset="1" stopColor="#f5b301" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="phone-card" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1b2a4a" />
            <stop offset="1" stopColor="#131f38" />
          </linearGradient>
        </defs>

        {/* phone body */}
        <rect x="10" y="6" width="300" height="648" rx="46" fill="#0b1220" />
        <rect x="14" y="10" width="292" height="640" rx="42" fill="none" stroke="#1e2a44" strokeWidth="1.5" />

        {/* notch */}
        <rect x="118" y="20" width="84" height="22" rx="11" fill="#05080f" />

        {/* screen */}
        <rect x="20" y="18" width="280" height="624" rx="38" fill="url(#phone-screen)" />

        {/* status bar */}
        <text x="44" y="52" fill="#e2e8f0" fontSize="12" fontWeight="600" fontFamily="Poppins, Arial, sans-serif">9:41</text>
        <rect x="236" y="42" width="18" height="9" rx="3" fill="none" stroke="#64748b" strokeWidth="1.2" />
        <rect x="238" y="44" width="12" height="5" rx="1.5" fill="#22c55e" />
        <rect x="258" y="45" width="2" height="4" rx="1" fill="#64748b" />

        {/* app header */}
        <text x="44" y="92" fill="#ffffff" fontSize="16" fontWeight="700" fontFamily="Poppins, Arial, sans-serif">Pure Linemark</text>
        <circle cx="268" cy="87" r="13" fill="#16233f" />
        <path d="M264 91h8M268 87v8" stroke="#f5b301" strokeWidth="1.8" strokeLinecap="round" />

        {/* balance card */}
        <rect x="40" y="108" width="240" height="100" rx="16" fill="url(#phone-card)" />
        <text x="56" y="132" fill="#94a3b8" fontSize="10" fontWeight="600" letterSpacing="1" fontFamily="Poppins, Arial, sans-serif">PORTFOLIO VALUE</text>
        <text x="56" y="164" fill="#ffffff" fontSize="26" fontWeight="700" fontFamily="Poppins, Arial, sans-serif">$12,480.50</text>
        <rect x="56" y="176" width="96" height="20" rx="10" fill="rgba(34,197,94,0.14)" stroke="rgba(34,197,94,0.4)" strokeWidth="1" />
        <text x="104" y="190" textAnchor="middle" fill="#4ade80" fontSize="10" fontWeight="700" fontFamily="Poppins, Arial, sans-serif">+4.2% TODAY</text>

        {/* chart */}
        {[250, 300, 350].map((y) => (
          <line key={y} x1="40" y1={y} x2="280" y2={y} stroke="#1b2740" strokeWidth="1" />
        ))}
        <path
          d="M40 330 C80 322 90 300 125 300 S165 262 195 268 S240 228 280 222 L280 360 L40 360 Z"
          fill="url(#phone-chart-area)"
        />
        <path
          d="M40 330 C80 322 90 300 125 300 S165 262 195 268 S240 228 280 222"
          fill="none"
          stroke="#f5b301"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="280" cy="222" r="8" fill="#f5b301" opacity="0.25" />
        <circle cx="280" cy="222" r="4" fill="#f5b301" />
        <circle cx="280" cy="222" r="1.6" fill="#fff" />
        {[
          { x: 40, label: "09:00" },
          { x: 120, label: "12:00" },
          { x: 200, label: "15:00" },
        ].map((t) => (
          <text key={t.x} x={t.x} y="380" fill="#64748b" fontSize="9" fontFamily="Poppins, Arial, sans-serif">{t.label}</text>
        ))}

        {/* AI engine status */}
        <rect x="40" y="396" width="240" height="38" rx="19" fill="#16233f" stroke="#f5b301" strokeWidth="1.2" />
        <circle cx="62" cy="415" r="8" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.45" />
        <circle cx="62" cy="415" r="4" fill="#22c55e" />
        <text x="78" y="411" fill="#ffffff" fontSize="10.5" fontWeight="700" letterSpacing="0.5" fontFamily="Poppins, Arial, sans-serif">AI ENGINE ACTIVE</text>
        <text x="78" y="425" fill="#f5b301" fontSize="8" fontWeight="600" fontFamily="Poppins, Arial, sans-serif">TRADING 24/7</text>

        {/* trades */}
        {[
          { name: "BTC / USD", time: "14:32", amount: "+$42.50", up: true },
          { name: "ETH / USD", time: "13:18", amount: "+$18.20", up: true },
          { name: "XAU / USD", time: "11:05", amount: "$9.80", up: false },
        ].map((trade, index) => (
          <g key={trade.name}>
            <rect x="40" y={446 + index * 48} width="240" height="40" rx="12" fill="#121c33" />
            <circle cx="60" cy={466 + index * 48} r="11" fill="#1b2a4a" />
            <text x="60" y={470 + index * 48} textAnchor="middle" fontSize="8" fontWeight="700" fill="#f5b301" fontFamily="Poppins, Arial, sans-serif">
              {trade.name.slice(0, 1)}
            </text>
            <text x="80" y={462 + index * 48} fill="#e2e8f0" fontSize="10.5" fontWeight="600" fontFamily="Poppins, Arial, sans-serif">{trade.name}</text>
            <text x="80" y={476 + index * 48} fill="#64748b" fontSize="8.5" fontFamily="Poppins, Arial, sans-serif">{trade.time}</text>
            <text x="266" y={471 + index * 48} textAnchor="end" fill={trade.up ? "#4ade80" : "#f87171"} fontSize="11" fontWeight="700" fontFamily="Poppins, Arial, sans-serif">
              {trade.up ? "+" : ""}{trade.amount}
            </text>
          </g>
        ))}

        {/* bottom nav */}
        <rect x="40" y="600" width="240" height="34" rx="17" fill="#121c33" />
        {[70, 140, 210].map((x, index) => (
          <circle key={x} cx={x} cy="617" r="3" fill={index === 0 ? "#f5b301" : "#475569"} />
        ))}
        <circle cx="278" cy="617" r="3" fill="#475569" />
      </svg>
    </div>
  );
}
