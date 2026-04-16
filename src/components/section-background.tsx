type SectionBackgroundProps = {
  imageSrc?: string;
  baseColor?: string;
  patternColor?: string;
  patternOpacity?: number;
  imageOpacity?: number;
  className?: string;
};

export function SectionBackground({
  imageSrc,
  baseColor = "#0d2a5c",
  patternColor = "rgba(255,255,255,0.10)",
  patternOpacity = 1,
  imageOpacity = 1,
  className = "",
}: SectionBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{ backgroundColor: baseColor }}
      />

      {imageSrc ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${imageSrc}')`,
            opacity: imageOpacity,
          }}
        />
      ) : null}

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/assets/products/Textual_BG_Pattern.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "1200px",
          backgroundPosition: "center top",
          opacity: patternOpacity,
          filter: "blur(0.2px)",
          mixBlendMode: "soft-light",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${baseColor}00 0%, ${baseColor}10 18%, ${baseColor}18 100%)`,
        }}
      />
    </div>
  );
}
