/** Renders a text with every occurrence of the brand name in bold */
export default function BoldBrand({
  text,
  brand = "Pure Linemark",
}: {
  text: string;
  brand?: string;
}) {
  const parts = text.split(brand);
  return (
    <>
      {parts.map((part, index) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 && <strong>{brand}</strong>}
        </span>
      ))}
    </>
  );
}
