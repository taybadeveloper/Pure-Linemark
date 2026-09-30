"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { MIN_DEPOSIT, EMAIL, MAIL_ACTION } from "@/components/data";
import { countries, type Country, formatPhone } from "@/components/countries";

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
  const router = useRouter();
  const [country, setCountry] = useState<Country>(countries[0]);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close the country dropdown only when the click is OUTSIDE it —
  // typing/searching inside never closes it
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
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
    setSubmitError(null);
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

    const digitsOnly = form.phone.replace(/\D/g, "");
    const payload: Record<string, string> = {
      [MAIL_ACTION.fields.firstName]: form.firstName.trim(),
      [MAIL_ACTION.fields.lastName]: form.lastName.trim(),
      [MAIL_ACTION.fields.email]: form.email.trim(),
      [MAIL_ACTION.fields.phone]: `${country.dial}${digitsOnly}`,
      [MAIL_ACTION.fields.dialCode]: country.dial,
      [MAIL_ACTION.fields.country]: country.name,
      offerName: MAIL_ACTION.offerName,
    };

    try {
      // The PHP endpoint expects a JSON body and answers with
      // { status: "success", redirectUrl: "..." } on success.
      const res = await fetch(MAIL_ACTION.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => null)) as {
        status?: string;
        message?: string;
        redirectUrl?: string;
      } | null;

      if (data?.status === "success" && data.redirectUrl) {
        // Hand off to the broker signup flow the backend prepared for this lead
        window.location.href = data.redirectUrl;
        return;
      }

      if (data?.status === "error") {
        // The client's backend rejected this registration (geo block,
        // duplicate, rate limit…) — show the real reason instead of a fake success.
        setSubmitError(
          data.message || "We cannot register you at this time. Please try again later."
        );
        return;
      }

      router.push(`/thank-you?name=${encodeURIComponent(form.firstName.trim())}`);
    } catch {
      // Retry with no-cors so the data still reaches the PHP endpoint
      // even if CORS headers are ever missing.
      try {
        await fetch(MAIL_ACTION.url, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        router.push(`/thank-you?name=${encodeURIComponent(form.firstName.trim())}`);
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
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-2xl shadow-slate-900/15 sm:p-8">
      <h2 className="text-center font-display text-2xl font-bold uppercase tracking-wide text-slate-900 sm:text-left">
        Create Your Account
      </h2>
      <p className="mt-2 text-center text-sm text-slate-500 sm:text-left">
        Free to join. Start with just {MIN_DEPOSIT} — takes under 2 minutes.
      </p>

      {submitError && (
        <div className="mt-5 rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-slate-700" role="alert">
          <p className="flex items-center gap-2 font-bold text-red-700">
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v4m0 4h.01" />
            </svg>
            Submission Failed
          </p>
          <p className="mt-1.5">{submitError}</p>
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
            <div ref={dropdownRef} className="relative shrink-0">
              <button
                type="button"
                onClick={() => {
                  setOpen(!open);
                  setQuery("");
                }}
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
                <div className="absolute left-0 top-full z-30 mt-1 w-64 rounded-md border border-slate-200 bg-white shadow-xl">
                  {/* search */}
                  <div className="border-b border-slate-100 p-2">
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search country…"
                      aria-label="Search country"
                      autoFocus
                      className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-amber-500"
                    />
                  </div>

                  <ul role="listbox" aria-label="Select country" className="max-h-60 overflow-auto py-1">
                    {countries
                      .filter((c) => c.name.toLowerCase().includes(query.trim().toLowerCase()))
                      .map((c) => (
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
                          setQuery("");
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
                </div>
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
      </form>
    </div>
  );
}
