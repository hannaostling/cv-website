// YYYY-MM
export type YearMonth =
  `${number}${number}${number}${number}-${number}${number}`;

// YYYY-MM-DD
export type YearMonthDay =
  `${number}${number}${number}${number}-${number}${number}-${number}${number}`;

export interface EducationItem {
  title: string;
  school: string;
  timeStart: YearMonth;
  timeEnd: YearMonth | null;
  location: string;
  description: string;
  image: string;
}

export interface Job {
  title: string;
  company: string;
  timeStart: YearMonth;
  timeEnd: YearMonth | null;
  location: string;
  details: string[];
  image: string;
}

export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  description: string;
  image: string;
}

export interface Recommendation {
  name: string;
  title: string;
  relation: string;
  text: string;
  image: string;
  date: YearMonthDay;
}

export type SkillLevel =
  | "beginner"
  | "basic"
  | "intermediate"
  | "proficient"
  | "advanced";

export interface Skill {
  translated: Translated;
  values: SkillValue[];
}

export interface SkillValue {
  translated: Translated;
  level?: SkillLevel;
}

export interface Translated {
  universal?: string;
  sv?: string;
  en?: string;
}
