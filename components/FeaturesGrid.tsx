import SectionHeading from "@/components/SectionHeading";
import { features } from "@/components/data";
import { serviceIcons } from "@/components/icons";

export default function FeaturesGrid() {
  return (
    <section id="features" className="border-y border-slate-200 bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Platform Features"
          title="Everything You Need to Trade on Autopilot"
          description="Pure Linemark was built for Australians who want exposure to global markets without staring at charts all day."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = serviceIcons[feature.icon];
            return (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-900/5"
              >
                <span className="flex h-13 w-13 items-center justify-center rounded-lg bg-amber-100">
                  <Icon className="h-6.5 w-6.5 text-amber-700" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
