"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type SmartImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  seed?: string;
  sizes?: string;
};

export function SmartImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  priority = false,
  seed = "placeholder",
  sizes,
}: SmartImageProps) {
  const fallbackSrc = useMemo(() => {
    const w = width ?? 1200;
    const h = height ?? 800;
    return `https://picsum.photos/seed/${seed}/${w}/${h}?grayscale&blur=1`;
  }, [width, height, seed]);

  const [currentSrc, setCurrentSrc] = useState(src);

  if (fill) {
    return (
      <Image
        src={currentSrc}
        alt={alt}
        fill
        sizes={sizes ?? "100vw"}
        className={className}
        priority={priority}
        unoptimized={currentSrc.startsWith("https://picsum.photos")}
        onError={() => setCurrentSrc(fallbackSrc)}
      />
    );
  }

  if (!width || !height) {
    throw new Error("SmartImage requires width and height when fill is false.");
  }

  return (
    <Image
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      unoptimized={currentSrc.startsWith("https://picsum.photos")}
      onError={() => setCurrentSrc(fallbackSrc)}
    />
  );
}
