"use client";
import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { TintableIcon } from "@/components/primitives/TintableIcon";

type Props = {
  image?: string | null;
  imageFallback: string;
  size?: number;
  radius?: CSSProperties["borderRadius"];
  className?: string;
};

export function IconContainer({ image, imageFallback, size = 19, radius = "10%", className }: Props) {
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
        borderRadius: radius,
        overflow: "hidden",
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
          style={{ objectFit: "cover", display: "block" }}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}
