type SectionBlendProps = {
  from: string;
  to: string;
  height?: string;
};

export function SectionBlend({
  from,
  to,
  height = "h-16 md:h-20",
}: SectionBlendProps) {
  return (
    <div
      className={`relative -mt-px w-full ${height}`}
      style={{
        background: `linear-gradient(to bottom, ${from} 0%, ${to} 100%)`,
      }}
      aria-hidden="true"
    />
  );
}
