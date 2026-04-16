import { SmartImage } from "@/components/smart-image";
import { stats } from "@/data/site-data";
import { SectionBackground } from "@/components/section-background";

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-14 md:py-16">
      <SectionBackground
        baseColor="#0d2a5c"
        patternColor="rgba(13,42,92,0.05)"
        patternOpacity={1}
      />

      <div className="section-shell relative z-10 grid gap-6 xl:grid-cols-[1.8fr_0.78fr]">
        <div className="soft-card p-6 md:p-8 xl:p-10">
          <p className="eyebrow-dark">About the organization</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            AIESEC in Tunisia
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-700 md:text-lg md:leading-9">
            AIESEC is structured into national entities, each representing a country.
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-800 md:text-[1.2rem] md:leading-9">
            We are proudly part of <span className="font-bold text-slate-950">AIESEC in Tunisia</span>, one of the
            <span className="font-bold text-slate-950"> most vibrant entities in the global network</span>,
            leading impactful initiatives across the country.
          </p>

          <div className="relative mt-7 overflow-hidden rounded-[24px]">
            <SmartImage
              src="/assets/about/group-photo.jpg"
              alt="AIESEC Tunisia group"
              width={1200}
              height={700}
              className="h-auto w-full object-cover"
              seed="about-group"
            />

            <div className="absolute left-4 top-4 rounded-full bg-white p-2 shadow-lg">
              <SmartImage
                src="/assets/about/flag-badge.png"
                alt="Tunisia flag badge"
                width={72}
                height={72}
                className="h-14 w-14 md:h-[72px] md:w-[72px]"
                seed="about-flag"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
          {stats.map((item) => (
            <div
              key={item.label}
              className="glass-shadow rounded-[24px] border border-slate-200 bg-white px-6 py-6 text-center"
            >
              <div className="text-3xl font-extrabold text-slate-950 md:text-5xl">{item.value}</div>
              <div className="mt-2 text-lg font-semibold text-slate-700 md:text-2xl">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
