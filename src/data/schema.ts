// YYYY-MM
export type YearMonth = `${number}${number}${number}${number}-${number}${number}`;

// YYYY-MM-DD
export type YearMonthDay = `${number}${number}${number}${number}-${number}${number}-${number}${number}`;

export interface Person {
  id: string;
  profile: Profile;
  experiences: Job[];
  educations: EducationItem[];
  courses: Course[];
  recommendations: Recommendation[];
  skills: Skill[];
}

export interface EducationItem {
  id: string;
  title: Translated;
  school: string;
  timeStart: YearMonth;
  timeEnd: YearMonth | null;
  location: Translated;
  description: Translated;
  image: string;
}

export interface Job {
  id: string;
  title: Translated;
  company: string;
  timeStart: YearMonth;
  timeEnd: YearMonth | null;
  location: Translated;
  details: Translated[];
  image: string;
}

export interface Profile {
  name: string;
  title: Translated;
  email: string;
  phone: string;
  location: Translated;
  linkedin: string;
  description: Translated;
  image: string;
  imageDarkMode: string | null;
}

export interface Recommendation {
  id: string;
  name: string;
  title: Translated;
  relation: Translated;
  text: Translated;
  image: string;
  date: YearMonthDay;
}

export interface Skill {
  id: string;
  order: number;
  hideOnPrint?: boolean;
  title: Translated;
  items: SkillItem[];
}

export interface SkillItem {
  id?: string;
  order?: number;
  value: Translated;
  level?: Translated;
}

export interface Course {
  id: string;
  title: Translated;
  school: string;
  timeStart?: YearMonthDay;
  timeEnd?: YearMonthDay;
  description?: Translated;
  image: string;
  certificate?: string;
}

/**
 * OBS: If you add another language, also update the type handling
 * in `useTranslatedData` (src/i18n/useTranslated.tsx).
 */
export interface Translated {
  sv: string;
  en: string;
}
