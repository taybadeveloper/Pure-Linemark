interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 300px at 50% -10%, rgba(245,179,1,0.15), transparent 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.3,
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-amber-700 sm:text-left">
          {eyebrow}
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-center font-display text-4xl font-bold uppercase leading-[1.3] tracking-tight text-slate-900 sm:mx-0 sm:text-left sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-relaxed text-slate-600 sm:mx-0 sm:text-left">{description}</p>
      </div>
    </section>
  );
}
