import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      {/* subtle background pattern, matching the home hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.35,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700">
          Error 404
        </p>

        <p className="mt-4 font-display text-7xl font-bold leading-none text-amber-500 sm:text-8xl">
          404
        </p>

        <h1 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-bold uppercase leading-[1.3] tracking-tight text-slate-900 md:text-4xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Check the link and try again.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-ink px-7 py-3.5 font-display text-base font-bold uppercase tracking-wider text-white shadow-md shadow-slate-900/15 transition-colors hover:bg-brand hover:text-ink"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
