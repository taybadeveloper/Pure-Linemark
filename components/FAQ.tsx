"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import BoldBrand from "@/components/BoldBrand";
import { faqs } from "@/components/data";
import { PlusIcon } from "@/components/icons";

export default function FAQ({ limit }: { limit?: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQs"
          title="Frequently Asked Questions"
          description="Straight answers to the questions we hear most from Australian businesses and councils."
        />

        <div className="mt-12 space-y-4">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-xl border bg-white shadow-sm transition-colors ${
                  isOpen ? "border-amber-300 shadow-md shadow-amber-900/5" : "border-slate-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-bold uppercase tracking-wide text-slate-900 sm:text-lg">
                    {faq.question}
                  </span>
                  <PlusIcon
                    className={`h-5 w-5 shrink-0 text-amber-600 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
                      <BoldBrand text={faq.answer} />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
