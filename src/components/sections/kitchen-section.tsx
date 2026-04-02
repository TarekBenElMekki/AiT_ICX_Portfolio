"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { kitchenItems } from "@/data/site-data";
import { SmartImage } from "@/components/smart-image";
import { SectionBackground } from "@/components/section-background";

export function KitchenSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  const active = kitchenItems[activeIndex];
  const prev = kitchenItems[(activeIndex - 1 + kitchenItems.length) % kitchenItems.length];
  const next = kitchenItems[(activeIndex + 1) % kitchenItems.length];

  const shift = (direction: "prev" | "next") => {
    setActiveIndex((current) =>
      direction === "prev"
        ? (current - 1 + kitchenItems.length) % kitchenItems.length
        : (current + 1) % kitchenItems.length
    );
  };

  const sideCardClass = useMemo(
    () => "hidden lg:block rounded-[24px] border-[6px] border-[#163a78] bg-white shadow-xl",
    []
  );

  return (
    <section id="kitchen" className="relative overflow-hidden py-14 md:py-16">
      <SectionBackground
        baseColor="#eef2f7"
        patternColor="rgba(13,42,92,0.06)"
        patternOpacity={1}
      />

      <div className="section-shell relative z-10">
        <div className="text-center">
          <p className="eyebrow-dark">Cuisine</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            <span className="text-[#d94141]">Tunisian</span>{" "}
            <span className="text-[#163a78]">Kitchen</span>
          </h2>
        </div>

        <div className="mt-10 flex items-center justify-between gap-3 md:gap-4">
          <button
            type="button"
            onClick={() => shift("prev")}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#163a78] text-white shadow-lg transition hover:-translate-y-0.5 md:h-14 md:w-14"
            aria-label="Previous kitchen item"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="grid flex-1 items-end gap-5 lg:grid-cols-[0.72fr_1fr_0.72fr]">
            <div className={sideCardClass}>
              <SmartImage
                src={prev.image}
                alt={prev.name}
                width={280}
                height={210}
                className="h-[190px] w-full rounded-[18px] object-cover"
                seed={`kitchen-prev-${prev.name}`}
              />
            </div>

            <div className="overflow-hidden rounded-[28px] border-[8px] border-[#163a78] bg-[#163a78] shadow-[0_18px_40px_rgba(2,6,23,0.16)]">
              <SmartImage
                src={active.image}
                alt={active.name}
                width={700}
                height={460}
                className="h-[240px] w-full object-cover md:h-[360px]"
                seed={`kitchen-active-${active.name}`}
              />
              <div className="px-5 py-4 text-center text-2xl font-medium text-white md:text-4xl">
                {active.name}
              </div>
            </div>

            <div className={sideCardClass}>
              <SmartImage
                src={next.image}
                alt={next.name}
                width={280}
                height={210}
                className="h-[190px] w-full rounded-[18px] object-cover"
                seed={`kitchen-next-${next.name}`}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => shift("next")}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#163a78] text-white shadow-lg transition hover:-translate-y-0.5 md:h-14 md:w-14"
            aria-label="Next kitchen item"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
