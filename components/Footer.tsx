import Link from "next/link";
import { Logo } from "@/components/Navbar";
import BoldBrand from "@/components/BoldBrand";
import { navLinks, EMAIL } from "@/components/data";
import { MailIcon, MapPinIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-ink-soft">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-3 lg:gap-10">
          <div className="text-center md:col-span-2 md:text-left lg:col-span-1">
            <div className="flex justify-center md:justify-start">
              <Logo />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-200">
              <BoldBrand text="Pure Linemark is an AI-powered trading platform for Australians. Our engine trades global markets around the clock, while you live your life." />
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a href={`mailto:${EMAIL}`} className="flex items-center justify-center gap-2.5 text-slate-100 transition-colors hover:text-brand md:justify-start">
                <MailIcon className="h-4 w-4 text-brand" />
                {EMAIL}
              </a>
              <p className="flex items-center justify-center gap-2.5 text-slate-300 md:justify-start">
                <MapPinIcon className="h-4 w-4 text-brand" />
                Australia-wide
              </p>
            </div>
          </div>

          <div className="text-center md:text-left">
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

          <div className="text-center md:text-left">
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Legal
            </h3>
            <ul className="mt-5 grid grid-cols-1 gap-2.5">
              <li>
                <Link href="/privacy-policy" className="text-sm text-slate-200 transition-colors hover:text-brand">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-sm text-slate-200 transition-colors hover:text-brand">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-sm text-slate-200 transition-colors hover:text-brand">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
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
