"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/site-data";
import { SmartImage } from "@/components/smart-image";
import { SectionBackground } from "@/components/section-background";

export function ProductsSection() {
  const [activeId, setActiveId] = useState(products[0].id);

  const activeProduct = useMemo(
    () => products.find((item) => item.id === activeId) ?? products[0],
    [activeId]
  );

  return (
    <section id="products" className="relative overflow-hidden py-14 text-white md:py-16">
      <SectionBackground
        baseColor="#163f8c"
        patternColor="rgba(255,255,255,0.07)"
        patternOpacity={1}
      />

      <div className="section-shell relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Experiences</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            Our Products
          </h2>
          <p className="mt-4 text-sm text-white/72 md:text-base">
            Discover the pathway that best fits the experience you want to present.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[0.95fr_72px_1.05fr] lg:gap-10">
          <div className="order-1 flex items-center justify-center">
            <div className="relative flex w-full max-w-[420px] items-center justify-center rounded-[24px] bg-white/4 p-4 md:max-w-[460px] md:p-6">
              <SmartImage
                key={activeProduct.id}
                src={activeProduct.image}
                alt={activeProduct.name}
                width={560}
                height={760}
                className="h-auto max-h-[360px] w-full object-contain md:max-h-[460px]"
                seed={`product-main-${activeProduct.id}`}
                priority
              />
            </div>
          </div>

          <div className="order-2 mx-auto flex items-center justify-center lg:h-full">
            <div className="relative flex h-[220px] w-16 flex-row items-center justify-between lg:h-[300px] lg:w-16 lg:flex-col">
              <div className="absolute left-4 right-4 top-1/2 h-[2px] -translate-y-1/2 bg-white/25 lg:left-1/2 lg:right-auto lg:top-4 lg:h-[calc(100%-32px)] lg:w-[2px] lg:-translate-x-1/2 lg:translate-y-0" />

              {products.map((item) => {
                const isActive = item.id === activeId;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white transition-transform duration-200 hover:scale-110 md:h-8 md:w-8"
                    style={{
                      backgroundColor: item.accent,
                      boxShadow: isActive ? "0 0 0 6px rgba(255,255,255,0.12)" : "none",
                    }}
                    aria-label={item.name}
                    title={item.name}
                  >
                    <span className="sr-only">{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="order-3">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-white/65 lg:text-left">
              Selected pathway
            </p>

            <div className="mt-4 flex justify-center lg:justify-start">
              <div className="flex h-[72px] w-full max-w-[160px] items-center md:h-[88px] md:max-w-[200px] lg:h-[100px] lg:max-w-[240px]">
                <SmartImage
                  key={`${activeProduct.id}-title`}
                  src={activeProduct.titleImage}
                  alt={`${activeProduct.name} title`}
                  width={900}
                  height={320}
                  className="max-h-full w-full object-contain object-center lg:object-left"
                  seed={`product-title-${activeProduct.id}`}
                />
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-center text-base leading-8 text-white/92 md:text-lg md:leading-9 lg:text-left">
              {activeProduct.description}
            </p>

            <p className="mt-4 max-w-2xl text-center text-sm leading-7 text-white/72 md:text-base md:leading-8 lg:text-left">
              {activeProduct.extra}
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <button
                type="button"
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-xl transition hover:-translate-y-0.5"
              >
                Explore more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
