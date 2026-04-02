import { SmartImage } from "@/components/smart-image";
import { destinations } from "@/data/site-data";
import { SectionBackground } from "@/components/section-background";

export function DestinationsSection() {
  return (
    <section id="destinations" className="relative overflow-hidden py-14 md:py-16">
      <SectionBackground
        baseColor="#f7f8fa"
        patternColor="rgba(13,42,92,0.05)"
        patternOpacity={1}
      />

      <div className="section-shell relative z-10">
        <div className="text-center">
          <p className="eyebrow-dark">Places to discover</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            <span className="text-[#d94141]">Tunisian</span>{" "}
            <span className="text-[#163a78]">Destinations</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {destinations.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_12px_30px_rgba(2,6,23,0.06)] transition hover:-translate-y-1"
            >
              <div className="px-5 pt-5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                {item.city}
              </div>

              <div className="px-5 pt-3">
                <SmartImage
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={320}
                  className="h-[220px] w-full rounded-[18px] object-cover"
                  seed={`destination-${item.title}`}
                />
              </div>

              <div className="px-5 pb-5 pt-4">
                <h3 className="text-2xl font-semibold text-slate-800">{item.title}</h3>
                <button
                  type="button"
                  className="mt-3 text-sm font-bold text-[#d94141] transition group-hover:translate-x-1"
                >
                  Explore
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
