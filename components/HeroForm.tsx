"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MIN_DEPOSIT, EMAIL, MAIL_ACTION } from "@/components/data";
import { CheckIcon } from "@/components/icons";

interface Country {
  code: string;
  name: string;
  dial: string;
  example: string;
  digits: number;
  format: number[];
}

const countries: Country[] = [
  { code: "au", name: "Australia", dial: "+61", example: "0400 000 000", digits: 10, format: [4, 3, 3] },
  { code: "nz", name: "New Zealand", dial: "+64", example: "021 234 5678", digits: 10, format: [3, 3, 4] },
  { code: "us", name: "United States", dial: "+1", example: "555 123 4567", digits: 10, format: [3, 3, 4] },
  { code: "ca", name: "Canada", dial: "+1", example: "416 555 0123", digits: 10, format: [3, 3, 4] },
  { code: "gb", name: "United Kingdom", dial: "+44", example: "07700 900123", digits: 11, format: [5, 6] },
  { code: "ie", name: "Ireland", dial: "+353", example: "087 123 4567", digits: 10, format: [3, 3, 4] },
  { code: "sg", name: "Singapore", dial: "+65", example: "8123 4567", digits: 8, format: [4, 4] },
  { code: "my", name: "Malaysia", dial: "+60", example: "012 345 6789", digits: 11, format: [3, 4, 4] },
  { code: "in", name: "India", dial: "+91", example: "98765 43210", digits: 10, format: [5, 5] },
  { code: "pk", name: "Pakistan", dial: "+92", example: "0300 1234567", digits: 11, format: [4, 7] },
  { code: "ph", name: "Philippines", dial: "+63", example: "0917 123 4567", digits: 11, format: [4, 3, 4] },
  { code: "ae", name: "United Arab Emirates", dial: "+971", example: "050 123 4567", digits: 10, format: [3, 3, 4] },
  { code: "de", name: "Germany", dial: "+49", example: "0151 23456789", digits: 11, format: [4, 3, 4] },
  { code: "fr", name: "France", dial: "+33", example: "06 12 34 56 78", digits: 10, format: [2, 2, 2, 2, 2] },
];

/** Insert spaces between digit groups, e.g. [4,7] + "03001234567" -> "0300 1234567" */
function formatPhone(digits: string, groups: number[]): string {
  let out = "";
  let index = 0;
  for (const group of groups) {
    if (index >= digits.length) break;
    if (out) out += " ";
    out += digits.slice(index, index + group);
    index += group;
  }
  return out;
}

interface Errors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}

const inputClasses =
  "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-amber-500 focus:ring-2 focus:ring-amber-200";

const errorInputClasses =
  "border-red-400 bg-red-50/50 focus:border-red-500 focus:ring-red-200";

function ErrorText({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-red-600" role="alert">
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4m0 4h.01" />
      </svg>
      {message}
    </p>
  );
}

export default function HeroForm() {
  const [submitted, setSubmitted] = useState(false);
  const [country, setCountry] = useState<Country>(countries[0]);
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // Close the country dropdown when clicking anywhere outside it
  useEffect(() => {
    function handleClickOutside() {
      setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    if (name === "phone") {
      // Only digits allowed, capped at the country's exact digit count,
      // and auto-formatted into the country's number groups.
      const digits = value.replace(/\D/g, "").slice(0, country.digits);
      setForm((prev) => ({ ...prev, phone: formatPhone(digits, country.format) }));
    } else {
      setForm({ ...form, [name]: value });
    }
    // clear the error for this field as the user types
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function validate(): Errors {
    const errs: Errors = {};
    if (!form.firstName.trim()) errs.firstName = "First name is required.";
    if (!form.lastName.trim()) errs.lastName = "Last name is required.";
    if (!form.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    const digitsOnly = form.phone.replace(/\D/g, "");
    if (!form.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (digitsOnly.length !== country.digits) {
      errs.phone = `Phone number must be exactly ${country.digits} digits for ${country.name}.`;
    }
    return errs;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate();
    if (Object.values(errs).some(Boolean)) {
      setErrors(errs);
      return;
    }

    const payload: Record<string, string> = {
      [MAIL_ACTION.fields.firstName]: form.firstName.trim(),
      [MAIL_ACTION.fields.lastName]: form.lastName.trim(),
      [MAIL_ACTION.fields.email]: form.email.trim(),
      [MAIL_ACTION.fields.phone]: form.phone.trim(),
      [MAIL_ACTION.fields.dialCode]: country.dial,
      [MAIL_ACTION.fields.country]: country.name,
      [MAIL_ACTION.fields.fullPhone]: `${country.dial}${form.phone.replace(/\s/g, "")}`,
    };
    const body = new URLSearchParams(payload).toString();

    try {
      await fetch(MAIL_ACTION.url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
    } catch {
      // Retry with no-cors so the data still reaches the PHP endpoint
      // even if the server doesn't send CORS headers.
      try {
        await fetch(MAIL_ACTION.url, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body,
        });
      } catch {
        // Last resort: open the user's email app with the details pre-filled
        const subject = "Account Registration – Pure Linemark";
        const mailBody = [
          `First name: ${form.firstName}`,
          `Last name: ${form.lastName}`,
          `Email: ${form.email}`,
          `Phone: ${country.dial} ${form.phone} (${country.name})`,
          "",
          "I would like to open a Pure Linemark trading account.",
        ].join("\n");
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;
      }
    }

    setSubmitted(true);
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-2xl shadow-slate-900/15 sm:p-8">
      <h2 className="text-center font-display text-2xl font-bold uppercase tracking-wide text-slate-900 sm:text-left">
        Create Your Account
      </h2>
      <p className="mt-2 text-center text-sm text-slate-500 sm:text-left">
        Free to join. Start with just {MIN_DEPOSIT} — takes under 2 minutes.
      </p>

      {submitted && (
        <div className="mt-5 rounded-lg border border-green-300 bg-green-50 p-4 text-sm text-slate-700">
          <p className="flex items-center gap-2 font-bold text-green-800">
            <CheckIcon className="h-4 w-4" />
            Thanks, {form.firstName || "there"}!
          </p>
          <p className="mt-1.5">
            Your registration has been submitted — our team will contact you within one
            business day.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="mt-5 grid gap-4">
        {/* First name + Last name in one row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">
              First Name *
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={form.firstName}
              onChange={handleChange}
              placeholder="John"
              aria-invalid={!!errors.firstName}
              className={`${inputClasses} ${errors.firstName ? errorInputClasses : ""}`}
            />
            <ErrorText message={errors.firstName} />
          </div>
          <div>
            <label htmlFor="lastName" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">
              Last Name *
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Smith"
              aria-invalid={!!errors.lastName}
              className={`${inputClasses} ${errors.lastName ? errorInputClasses : ""}`}
            />
            <ErrorText message={errors.lastName} />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@email.com.au"
            aria-invalid={!!errors.email}
            className={`${inputClasses} ${errors.email ? errorInputClasses : ""}`}
          />
          <ErrorText message={errors.email} />
        </div>

        {/* Phone with country flag dropdown */}
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">
            Phone Number *
          </label>
          <div className="flex">
            {/* stopPropagation keeps clicks inside the dropdown from reaching the
                document-level close handler, so selection always registers first */}
            <div className="relative shrink-0" onMouseDown={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-haspopup="listbox"
                className="flex h-full items-center gap-2 rounded-l-md border border-r-0 border-slate-300 bg-white px-3 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
              >
                <Image
                  key={`flag-${country.code}`}
                  src={`https://flagcdn.com/w40/${country.code}.png`}
                  alt={`${country.name} flag`}
                  width={22}
                  height={15}
                  className="h-[15px] w-[22px] rounded-[2px] object-cover shadow-sm"
                />
                <span key={`dial-${country.code}`} className="w-11 text-left">{country.dial}</span>
                <svg
                  viewBox="0 0 24 24"
                  className={`h-4 w-4 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {open && (
                <ul
                  role="listbox"
                  aria-label="Select country"
                  className="absolute left-0 top-full z-30 mt-1 max-h-60 w-64 overflow-auto rounded-md border border-slate-200 bg-white py-1 shadow-xl"
                >
                  {countries.map((c) => (
                    <li key={c.code}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={c.code === country.code}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setCountry(c);
                          setForm((prev) => ({ ...prev, phone: "" }));
                          setErrors((prev) => ({ ...prev, phone: undefined }));
                          setOpen(false);
                        }}
                        className={`flex w-full items-center gap-2.5 px-3 py-2 text-sm transition-colors hover:bg-slate-50 ${
                          c.code === country.code
                            ? "bg-amber-50 font-semibold text-amber-800"
                            : "text-slate-700"
                        }`}
                      >
                        <Image
                          src={`https://flagcdn.com/w40/${c.code}.png`}
                          alt={`${c.name} flag`}
                          width={22}
                          height={15}
                          className="h-[15px] w-[22px] rounded-[2px] object-cover shadow-sm"
                        />
                        <span className="flex-1 text-left">{c.name}</span>
                        <span className="text-slate-400">{c.dial}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              maxLength={country.digits + country.format.length - 1}
              value={form.phone}
              onChange={handleChange}
              placeholder={country.example}
              aria-invalid={!!errors.phone}
              className={`${inputClasses} rounded-l-none ${errors.phone ? errorInputClasses : ""}`}
            />
          </div>
          <ErrorText message={errors.phone} />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-ink px-7 py-3.5 font-display text-base font-bold uppercase tracking-wider text-white shadow-md shadow-slate-900/15 transition-colors hover:bg-slate-800"
        >
          Sign Up Now
        </button>

        <p className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckIcon className="h-3.5 w-3.5 text-green-600" /> No hidden fees
          </span>
          <span className="flex items-center gap-1.5">
            <CheckIcon className="h-3.5 w-3.5 text-green-600" /> Withdraw anytime
          </span>
          <span className="flex items-center gap-1.5">
            <CheckIcon className="h-3.5 w-3.5 text-green-600" /> 2FA secured
          </span>
        </p>
      </form>
    </div>
  );
}
