import type { EducationItem } from "@/data/schema";

export const education: EducationItem[] = [
  {
    id: "funka-accessibility-documents",
    title: {
      sv: "Digital tillgänglighet",
      en: "Digital Accessibility",
    },
    school: "Funka Academy",
    timeStart: "2025-09",
    timeEnd: null,
    location: {
      sv: "Distans",
      en: "Remote",
    },
    description: {
      sv: "Jag läser Tillgänglighetssäkring av dokument och Inkluderande kommunikation och publicering. Två utbildningar på 40 YH-poäng vardera med delvis överlappande innehåll. Kurserna ger kunskap om tillgänglighet och inkludering, lagkrav, klarspråk samt praktisk publicering av tillgängliga dokument och digitalt innehåll.",
      en: "I am studying Document Accessibility and Inclusive Communication and Publishing. Two programs of 40 higher vocational credits each with some overlapping content. The courses provide knowledge of accessibility and inclusion, legal requirements, plain language, and practical publishing of accessible documents and digital content.",
    },
    image: "/companies/Funka.png",
  },
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
