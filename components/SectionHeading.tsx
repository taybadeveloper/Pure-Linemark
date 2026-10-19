import BoldBrand from "@/components/BoldBrand";

interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-slate-900 md:text-[2rem] lg:text-4xl">
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
