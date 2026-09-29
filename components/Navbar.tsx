"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/components/data";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Pure Linemark — Home">
      <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0" aria-hidden="true">
        <rect width="40" height="40" rx="9" className="fill-brand" />
        {/* PL monogram */}
        <path
          d="M11 28 V12 h7.5 a4.5 4.5 0 0 1 0 9 H11"
          fill="none"
          stroke="#0f172a"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 12 V28 H30"
          fill="none"
          stroke="#0f172a"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={`font-display text-xl font-bold uppercase leading-none tracking-wider ${
          light ? "text-ink" : "text-white"
        }`}
      >
        Pure <span className={light ? "text-amber-600" : "text-brand"}>Linemark</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo light />

        <div className="hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => {
              const target = link.href.split("#")[0];
              const active =
                target === "/" ? pathname === "/" : pathname.startsWith(target);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-semibold uppercase tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-brand after:transition-all ${
                    active
                      ? "text-amber-700 after:w-full"
                      : "text-slate-600 after:w-0 hover:text-slate-900 hover:after:w-full"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/sign-up"
            className="rounded-md bg-ink px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-slate-800"
          >
            Sign Up
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-800 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-slate-200 bg-white px-4 pb-6 pt-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 font-display text-lg font-semibold uppercase tracking-wide text-slate-800 hover:bg-slate-50 hover:text-amber-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 px-3">
            <Link
              href="/sign-up"
              onClick={() => setOpen(false)}
              className="block rounded-md bg-ink px-5 py-3 text-center font-display font-bold uppercase tracking-wider text-white"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
