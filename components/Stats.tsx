import { stats } from "@/components/data";

export default function Stats() {
  return (
    <section className="bg-brand py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl lg:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs font-bold uppercase tracking-widest text-ink/70 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
