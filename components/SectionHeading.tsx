interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <p
        className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-amber-700 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="inline-block h-px w-8 bg-amber-500/70" aria-hidden="true" />
        {eyebrow}
        {centered && <span className="inline-block h-px w-8 bg-amber-500/70" aria-hidden="true" />}
      </p>
      <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-600">{description}</p>
      )}
    </div>
  );
}
