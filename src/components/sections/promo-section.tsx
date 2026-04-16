"use client";

import { Play, X } from "lucide-react";
import { useState } from "react";
import { SmartImage } from "@/components/smart-image";
import { SectionBackground } from "@/components/section-background";

export function PromoSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="promotional" className="relative overflow-hidden pt-6 pb-14 text-white md:pt-8 md:pb-16">
        <SectionBackground
          baseColor="#0d2a5c"
          patternColor="rgba(255,255,255,0.06)"
          patternOpacity={1}
        />

        <div className="section-shell relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <p className="section-kicker">Featured media</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
              Promotional video
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
              A short cinematic introduction to Tunisia&apos;s identity, atmosphere, and cultural richness.
            </p>

            <div className="relative mx-auto mt-10 flex max-w-5xl items-center justify-center">
              <div className="absolute left-6 hidden -rotate-8 xl:block">
                <div className="overflow-hidden rounded-[24px] border-6 border-white shadow-2xl">
                  <SmartImage
                    src="/assets/promo/polaroid-left.jpg"
                    alt="Tunisia left"
                    width={260}
                    height={170}
                    className="h-[170px] w-[260px] object-cover"
                    seed="promo-left"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="group relative z-10 overflow-hidden rounded-[28px] border-[6px] border-white bg-white shadow-2xl"
              >
                <SmartImage
                  src="/assets/promo/video-cover.jpg"
                  alt="Promotional video"
                  width={860}
                  height={480}
                  className="h-auto w-full max-w-[860px] object-cover"
                  seed="promo-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/20">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/88 shadow-2xl md:h-24 md:w-24">
                    <Play className="ml-1 h-8 w-8 fill-slate-900 text-slate-900 md:h-10 md:w-10" />
                  </div>
                </div>
              </button>

              <div className="absolute right-6 hidden rotate-8 xl:block">
                <div className="overflow-hidden rounded-[24px] border-6 border-white shadow-2xl">
                  <SmartImage
                    src="/assets/promo/polaroid-right.jpg"
                    alt="Tunisia right"
                    width={260}
                    height={170}
                    className="h-[170px] w-[260px] object-cover"
                    seed="promo-right"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-6">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[24px] bg-black shadow-2xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-slate-900"
              aria-label="Close video modal"
            >
              <X size={18} />
            </button>

            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                
                title="Promotional video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
