"use client";

import Image from "next/image";
import { useState } from "react";
import { TintableIcon } from "./TintableIcon";

type Props = {
  image?: string | null;
  imageFallback: string;
  size?: number;
  className?: string;
};

export function IconContainer({ image, imageFallback, size = 19, className }: Props) {
  const [error, setError] = useState(false);
  const showPlaceholder = !image || error;

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: showPlaceholder ? "var(--icon-background)" : "transparent",
      }}
    >
      {showPlaceholder ? (
        <TintableIcon src={imageFallback} size={size * 0.7} />
      ) : (
        <Image
          src={image!}
          alt=""
          aria-hidden="true"
          width={size}
          height={size}
          style={{ objectFit: "contain", display: "block" }}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}
