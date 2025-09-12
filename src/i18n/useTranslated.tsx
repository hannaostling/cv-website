"use client";

import { useCallback } from "react";
import { useTranslations } from "next-intl";
import type { StringKey } from "./keys";
import type { Translated } from "@/data/schema";

/** For static translation keys (locale files) */
export function useTranslated(key: StringKey): string {
  const t = useTranslations();
  return t(key);
}

/** For dynamic data objects with { sv, en } */
export function useTranslatedData() {
  const lang = useTranslated("languageCode") as "sv" | "en";

  return useCallback(
    (t?: Translated): string => {
      if (!t) return "";
      if (t[lang]) return t[lang];
      if (lang === "sv" && t.en) return t.en;
      if (lang === "en" && t.sv) return t.sv;
      return "";
    },
    [lang]
  );
}
