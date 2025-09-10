"use client";

import { motion } from "framer-motion";

export default function LoadingContainer() {
  const srcLight = "/spinner-lm.svg";
  const srcDark = "/spinner-dm.svg";
  const imgSize = 40;

  return (
    <main
      aria-busy="true"
      aria-live="polite"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <picture>
        <source srcSet={srcDark} media="(prefers-color-scheme: dark)" />
        <source srcSet={srcLight} media="(prefers-color-scheme: light)" />
        <motion.img
          src={srcLight}
          alt="Laddar..."
          width={imgSize}
          height={imgSize}
          style={{ display: "block" }}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 1.2,
          }}
        />
      </picture>
    </main>
  );
}
