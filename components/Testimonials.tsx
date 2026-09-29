import SectionHeading from "@/components/SectionHeading";
import { reviews } from "@/components/data";
import { QuoteIcon, StarIcon } from "@/components/icons";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Member Reviews"
          title="4.8/5 From Thousands of Australian Traders"
          description="Here's what members across Australia say about trading with the Pure Linemark AI engine."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <QuoteIcon className="h-8 w-8 text-amber-300" />
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-amber-500" />
                  ))}
                </div>
              </div>
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-slate-600">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-200 pt-4">
                <p className="font-display font-bold uppercase tracking-wide text-slate-900">
                  {review.name}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-amber-700">
                  {review.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
