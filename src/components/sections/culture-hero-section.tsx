import { SmartImage } from "@/components/smart-image";

export function CultureHeroSection() {
  return (
    <section className="relative h-screen min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <SmartImage
          src="/assets/products/Hero_IMG.png"
          alt="Here Tunisia hero"
          fill
          sizes="100vw"
          className="object-cover"
          seed="hero-image"
          priority
        />
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-40 md:h-56"
        style={{
          background: "linear-gradient(to bottom, rgba(13,42,92,0) 0%, #0d2a5c 100%)",
        }}
      />
    </section>
  );
}
