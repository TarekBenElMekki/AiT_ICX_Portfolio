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
    <section
      id="products"
      className="relative overflow-hidden py-12 text-white sm:py-14 md:py-16 lg:py-20"
    >
      <SectionBackground
        baseColor="#163f8c"
        patternColor="rgba(255,255,255,0.07)"
        patternOpacity={1}
      />

      <div className="section-shell relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Experiences</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-5xl">
            Our Products
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/72 sm:text-base sm:leading-7">
            Discover the pathway that best fits the experience you want to present.
          </p>
        </div>

        <div className="mt-10 grid items-center gap-8 lg:mt-12 lg:grid-cols-[0.95fr_72px_1.05fr] lg:gap-10">
          <div className="order-1 flex items-center justify-center">
            <div className="relative flex w-full max-w-[280px] items-center justify-center rounded-[22px] bg-white/5 p-3 sm:max-w-[340px] sm:p-4 md:max-w-[420px] md:rounded-[24px] md:p-5 lg:max-w-[460px] lg:p-6">
              <SmartImage
                key={activeProduct.id}
                src={activeProduct.image}
                alt={activeProduct.name}
                width={560}
                height={760}
                className="h-auto max-h-[240px] w-full object-contain sm:max-h-[300px] md:max-h-[360px] lg:max-h-[460px]"
                seed={`product-main-${activeProduct.id}`}
                priority
              />
            </div>
          </div>

          <div className="order-2 mx-auto flex w-full items-center justify-center lg:h-full lg:w-auto">
            <div className="relative flex w-full max-w-[280px] items-center justify-between px-2 sm:max-w-[340px] sm:px-4 lg:h-[300px] lg:w-16 lg:max-w-none lg:flex-col lg:px-0">
              <div className="absolute left-4 right-4 top-1/2 h-[2px] -translate-y-1/2 bg-white/25 lg:left-1/2 lg:right-auto lg:top-4 lg:h-[calc(100%-32px)] lg:w-[2px] lg:-translate-x-1/2 lg:translate-y-0" />

              {products.map((item) => {
                const isActive = item.id === activeId;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white transition duration-200 hover:scale-110 sm:h-9 sm:w-9"
                    style={{
                      backgroundColor: item.accent,
                      boxShadow: isActive ? "0 0 0 6px rgba(255,255,255,0.14)" : "none",
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
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white/65 sm:text-xs lg:text-left">
              Selected pathway
            </p>

            <div className="mt-4 flex justify-center lg:justify-start">
  <div className="flex h-[56px] w-full max-w-[140px] items-center justify-center rounded-[14px] bg-white px-2 sm:h-[68px] sm:max-w-[170px] md:h-[82px] md:max-w-[200px] lg:h-[96px] lg:max-w-[230px]">
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

            <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-white/92 sm:text-base sm:leading-8 md:mt-6 md:text-lg md:leading-9 lg:mx-0 lg:text-left">
              {activeProduct.description}
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-white/72 sm:leading-7 md:text-base md:leading-8 lg:mx-0 lg:text-left">
              {activeProduct.extra}
            </p>

            <div className="mt-7 flex justify-center lg:justify-start">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
