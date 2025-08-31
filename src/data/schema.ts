// YYYY-MM
export type YearMonth =
  `${number}${number}${number}${number}-${number}${number}`;

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
