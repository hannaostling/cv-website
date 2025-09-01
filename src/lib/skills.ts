import type { Translated, SkillLevel } from "@/data/schema";

export function getString(tr: Translated, isEnglish: boolean): string {
  return (isEnglish ? tr.en : tr.sv) ?? tr.universal ?? "";
}

export const levelLabels = {
  sv: {
    beginner: "Nybörjare",
    basic: "Grundläggande",
    intermediate: "Mellanliggande",
    proficient: "Skicklig",
    advanced: "Avancerad",
  },
  en: {
    beginner: "Beginner",
    basic: "Basic",
    intermediate: "Intermediate",
    proficient: "Proficient",
    advanced: "Advanced",
  },
} as const;

export function levelLabel(level: SkillLevel, isEnglish: boolean): string {
  return (isEnglish ? levelLabels.en : levelLabels.sv)[level];
}
