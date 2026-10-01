import HeroForm from "@/components/HeroForm";
import SectionHeading from "@/components/SectionHeading";
import { MIN_DEPOSIT } from "@/components/data";
import { CheckIcon } from "@/components/icons";

const perks = [
  `Start with just ${MIN_DEPOSIT}`,
  "No account or withdrawal fees",
  "Withdraw anytime, most in 24 hours",
  "2FA + bank-grade encryption",
  "Australian support, 7 days a week",
];

export default function SignUpSection() {
  return (
    <section id="sign-up" className="border-t border-slate-200 bg-slate-50 py-16 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get Started"
          title="Open Your Pure Linemark Account Today"
          description="Join 28,000+ Australians already trading on autopilot. Two minutes to sign up, that's all it takes."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <ul className="mx-auto max-w-md space-y-4 lg:mx-0">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start justify-start gap-3 text-base font-medium text-slate-700">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon className="h-4 w-4 text-green-700" />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:text-left">
              <p className="flex items-center justify-center gap-3 text-sm text-slate-600 sm:justify-start">
                <span className="flex gap-0.5" aria-hidden="true">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i} className="text-amber-500">{s}</span>
                  ))}
                </span>
                <strong className="text-slate-900">4.8/5</strong> average member rating
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                &ldquo;The easiest money decision I&apos;ve made, deposit, activate, withdraw.
                That&apos;s it.&rdquo;, Sarah K., Sydney
              </p>
            </div>
          </div>

          <HeroForm />
        </div>
      </div>
    </section>
  );
}
