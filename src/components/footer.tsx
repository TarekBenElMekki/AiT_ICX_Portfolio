import { SectionBackground } from "@/components/section-background";

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      <SectionBackground
        baseColor="#0d2a5c"
        patternColor="rgba(255,255,255,0.05)"
        patternOpacity={1}
      />

      <div className="section-shell relative z-10 py-6 md:py-7">
        <div className="border-t border-white/10 pt-4 text-sm text-white/60 md:flex md:items-center md:justify-between">
          <p>© 2026 Here Tunisia. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Tunis, Tunisia</p>
        </div>
      </div>
    </footer>
  );
}
