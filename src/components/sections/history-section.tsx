"use client";

import { useState } from "react";
import { historyItems } from "@/data/site-data";

export function HistorySection() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section id="history" className="blue-pattern overflow-hidden py-14 text-white md:py-16">
      <div className="section-shell">
        <div className="text-center">
          <p className="section-kicker">Cultural context</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            <span className="text-[#d94141]">Tunisian</span> history
          </h2>
        </div>

        <div className="mt-12">
          <div className="relative mx-auto max-w-6xl">
            <div className="absolute left-0 right-0 top-7 h-[2px] bg-white/40" />

            <div className="relative grid grid-cols-3 gap-y-8 md:grid-cols-9">
              {historyItems.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={item.year}
                    type="button"
                    className="group relative flex flex-col items-center text-center"
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className="mb-3 text-[11px] font-semibold text-white/85 md:text-sm">
                      {item.year}
                    </span>

                    <span
                      className={`transition-all ${
                        isActive ? "h-12 bg-[#d94141]" : "h-5 bg-white"
                      } w-[2px]`}
                    />

                    <span
                      className={`mt-3 text-[11px] font-medium md:text-sm ${
                        isActive ? "text-white" : "text-white/65"
                      }`}
                    >
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-3xl text-center">
            <h3 className="text-xl font-extrabold md:text-3xl">
              {historyItems[activeIndex].title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-white/78 md:text-lg md:leading-8">
              {historyItems[activeIndex].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
