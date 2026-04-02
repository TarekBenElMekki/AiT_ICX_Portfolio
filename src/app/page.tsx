import { Navbar } from "@/components/navbar";
import { SectionBackground } from "@/components/section-background";
import { LanguagesStrip } from "@/components/languages-strip";
import { SectionBlend } from "@/components/section-blend";
import { CultureHeroSection } from "@/components/sections/culture-hero-section";
import { PromoSection } from "@/components/sections/promo-section";
import { HistorySection } from "@/components/sections/history-section";
import { KitchenSection } from "@/components/sections/kitchen-section";
import { DestinationsSection } from "@/components/sections/destinations-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProductsSection } from "@/components/sections/products-section";
import { Footer } from "@/components/footer";

function IntroSection() {
  return (
    <section className="relative overflow-hidden pt-14 pb-10 text-white md:pt-16 md:pb-14">
      <SectionBackground
        baseColor="#0d2a5c"
        patternColor="rgba(255,255,255,0.06)"
        patternOpacity={1}
      />

      <div className="section-shell relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="section-kicker">About AIESEC</p>

<div className="mt-4 flex justify-center">
  <img
    src="/assets/products/Logo_HereTunisia.svg"
    alt="Here Tunisia"
    className="h-12 md:h-16 w-auto opacity-95"
  />
</div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            AIESEC is the world's largest youth-led organization
          </h2>

          <p className="mx-auto mt-6 max-w-5xl text-base leading-8 text-white/88 md:text-[1.15rem] md:leading-9">
            Present in over 100 countries and territories, AIESEC has empowered young people since 1948
            to become value-driven leaders through international exchanges, real-world experiences,
            and impactful projects.
          </p>

          <p className="mx-auto mt-4 max-w-5xl text-base leading-8 text-white/74 md:text-[1.05rem] md:leading-9">
            By connecting with diverse cultures, taking initiative, and working on meaningful challenges,
            members grow into responsible, globally-minded changemakers ready to create lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
}



export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />

      <CultureHeroSection />
      <IntroSection />

      <PromoSection />

      <HistorySection />
      <SectionBlend from="#113470" to="#cf3b3b" height="h-10 md:h-12" />

      <LanguagesStrip />
      <SectionBlend from="#cf3b3b" to="#eef2f7" height="h-10 md:h-12" />

      <KitchenSection />
      <DestinationsSection />
      <AboutSection />
      <ProductsSection />
      <Footer />
    </main>
  );
}


