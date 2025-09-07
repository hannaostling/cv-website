import type { EducationItem } from "@/data/schema";

export const education: EducationItem[] = [
  {
    id: "iths-app-dev-yh-2017-2019",
    title: {
      sv: "YH Apputveckling",
      en: "Higher Vocational Diploma in Application Development",
    },
    school: "IT-Högskolan",
    timeStart: "2017-08",
    timeEnd: "2019-06",
    location: {
      sv: "Göteborg, Sverige",
      en: "Gothenburg, Sweden",
    },
    description: {
      sv: "Yrkeshögskoleexamen i applikationsutveckling med fokus på programmering, agila metoder, databashantering, Git, UX-design och projektledning. Under praktiken arbetade jag med testdriven utveckling och kvalitetsinriktad kodning.",
      en: "Higher vocational diploma in application development, with focus on programming, agile methods, databases, Git, UX design and project management. During the internship I worked with test-driven development and quality-focused coding.",
    },
    image: "/companies/IT-Hogskolan.png",
  },
  {
    id: "iths-intro-java-2016",
    title: {
      sv: "Grundläggande Java",
      en: "Intro to Java Programming",
    },
    school: "IT-Högskolan",
    timeStart: "2016-01",
    timeEnd: "2016-06",
    location: {
      sv: "Distans",
      en: "Remote",
    },
    description: {
      sv: "Lärde mig grunderna i Java-programmering, inklusive sekventiell programmering, datatyper, klasser och metoder.",
      en: "Learned the fundamentals of Java programming, including sequential programming, data types, classes, and methods.",
    },
    image: "/companies/IT-Hogskolan.png",
  },
];
