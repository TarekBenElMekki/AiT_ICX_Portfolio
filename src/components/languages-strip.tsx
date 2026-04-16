const tunisiaWords = [
  "Tunisia",
  "Tunisie",
  "T\u00fanez",
  "Tun\u00edsia",
  "Tunesien",
  "Tun\u00e9sia",
  "Tun\u00edsia",
  "\u062a\u0648\u0646\u0633",
  "\u7a81\u5c3c\u65af",
  "\u7a81\u5c3c\u897f\u4e9e",
  "\u30c1\u30e5\u30cb\u30b8\u30a2",
  "\ud280\ud0c0\ub2c8\uc9c0\uc544",
  "\u0422\u0443\u043d\u0438\u0441",
  "\u0422\u0443\u043d\u0456\u0441",
  "\u0422\u0443\u043d\u0438\u0441",
  "\u0393\u03c4\u03bf\u03c5\u03bd\u03b7\u03c3\u03af\u03b1",
  "\u05ea\u05d5\u05e0\u05d9\u05e1\u05d9\u05d4",
  "\u0924\u094d\u092f\u0942\u0928\u0940\u0936\u093f\u092f\u093e",
  "\u09a4\u09bf\u0989\u09a8\u09bf\u09b8\u09bf\u09df\u09be",
  "\u0ba4\u0bc1\u0ba9\u0bbf\u0bb7\u0bbf\u0baf\u0bbe",
  "\u0c1f\u0c4d\u0c2f\u0c42\u0c28\u0c40\u0c37\u0c3f\u0c2f\u0c3e",
  "\u0da7\u0dd4\u0db1\u0dd2\u0dc3\u0dd2\u0dba\u0dcf",
  "Tunisya",
  "Tunesia",
  "Tunisas",
  "Tunisien",
];

const repeatedWords = [...tunisiaWords, ...tunisiaWords];

export function LanguagesStrip() {
  return (
    <section className="relative overflow-hidden bg-[#cf3b3b] py-4 md:py-5">
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "url('/assets/products/Textual_BG_Pattern.svg')",
            backgroundRepeat: "repeat",
            backgroundSize: "1100px",
            backgroundPosition: "center top",
          }}
        />
      </div>

      <div className="relative z-10 overflow-hidden">
        <div className="tunisia-marquee-track">
          {repeatedWords.map((word, index) => (
            <span
              key={`${word}-${index}`}
              className="mx-6 shrink-0 text-2xl font-medium tracking-[0.01em] text-white md:mx-8 md:text-4xl"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
