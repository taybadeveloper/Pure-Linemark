import Link from "next/link";
import { Logo } from "@/components/Navbar";
import { markets, navLinks, PHONE, PHONE_HREF, EMAIL, riskDisclaimer } from "@/components/data";
import { PhoneIcon, MailIcon, MapPinIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-ink-soft">
      <div className="hazard h-2 w-full" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-slate-200">
              Pure Linemark is an AI-powered trading platform for Australians. Our engine
              trades global markets around the clock — while you live your life.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a href={PHONE_HREF} className="flex items-center gap-2.5 text-slate-100 transition-colors hover:text-brand">
                <PhoneIcon className="h-4 w-4 text-brand" />
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 text-slate-100 transition-colors hover:text-brand">
                <MailIcon className="h-4 w-4 text-brand" />
                {EMAIL}
              </a>
              <p className="flex items-center gap-2.5 text-slate-300">
                <MapPinIcon className="h-4 w-4 text-brand" />
                Australia-wide
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-200 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Popular Markets
            </h3>
            <ul className="mt-5 grid grid-cols-1 gap-2.5">
              {markets.map((market) => (
                <li key={market} className="text-sm text-slate-200">
                  {market}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Platform Highlights
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-slate-200">
              <li>24/7 AI trading engine</li>
              <li>Minimum deposit $250</li>
              <li>Instant withdrawals</li>
              <li>2FA secured accounts</li>
              <li>Australian support team</li>
            </ul>
          </div>
        </div>

        {/* Risk disclosure */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <h3 className="font-display text-xs font-bold uppercase tracking-widest text-slate-300">
            Risk Disclosure
          </h3>
          <p className="mt-2.5 text-xs leading-relaxed text-slate-300">{riskDisclaimer}</p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-300">
            © {new Date().getFullYear()} Pure Linemark. All rights reserved.
          </p>
          <p className="text-xs text-slate-300">
            Trading involves risk of loss. Not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
