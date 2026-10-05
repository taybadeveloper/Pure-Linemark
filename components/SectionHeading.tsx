import BoldBrand from "@/components/BoldBrand";

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
        className={`text-xs font-bold uppercase tracking-[0.25em] text-amber-700 ${
          centered ? "text-center" : ""
        }`}
      >
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-slate-900 md:text-[2.25rem] lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          <BoldBrand text={description} />
        </p>
      )}
    </div>
  );
}
