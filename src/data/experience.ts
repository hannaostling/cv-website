import type { Job } from "@/data/schema";

export const experience: Job[] = [
  {
    id: "ostling-it-2025",
    title: {
      sv: "Apputvecklare",
      en: "App Developer",
    },
    company: "Östling IT",
    timeStart: "2025-01",
    timeEnd: null,
    location: {
      sv: "Göteborg, Sverige",
      en: "Gothenburg, Sweden",
    },
    details: [
      {
        sv: "Vidareutveckling av app för digital identitetsverifiering (iOS & Android)",
        en: "Further developed an iOS and Android app for digital identity verification and access to classified workplaces",
      },
      {
        sv: "Fortsatt utveckling av appen Hundvänligt",
        en: "Continued development of Hundvänligt (iOS & Android)",
      },
    ],
    image: "/companies/OstlingIT.png",
  },
  {
    id: "annevo-2023-2024",
    title: {
      sv: "Apputvecklare",
      en: "App Developer",
    },
    company: "Annevo twoday",
    timeStart: "2023-09",
    timeEnd: "2024-12",
    location: {
      sv: "Göteborg, Sverige",
      en: "Gothenburg, Sweden",
    },
    details: [
      {
        sv: "Projekt inom fordons-, utbildnings- och säkerhetsbranschen",
        en: "Projects in the automotive, education, and security industries",
      },
      {
        sv: "Fokus på säkerhet, CarPlay, prestandaoptimering och anpassning",
        en: "Focus on security, CarPlay integration, customization, and performance optimization",
      },
    ],
    image: "/companies/Annevo.png",
  },
  {
    id: "bokadirekt-2023",
    title: {
      sv: "iOS-Utvecklare",
      en: "iOS Developer",
    },
    company: "Bokadirekt",
    timeStart: "2023-03",
    timeEnd: "2023-07",
    location: {
      sv: "Remote (Stockholm, Sverige)",
      en: "Remote (Stockholm, Sweden)",
    },
    details: [
      {
        sv: "Redesign av iOS-appen med programmatisk UI",
        en: "Redesigned core components of the iOS app using programmatic UI",
      },
      {
        sv: "Förbättrad flexibilitet och prestanda",
        en: "Improved flexibility, performance, and maintainability",
      },
    ],
    image: "/companies/Bokadirekt.png",
  },
  {
    id: "knowit-2019-2023",
    title: {
      sv: "Apputvecklare",
      en: "App Developer",
    },
    company: "Knowit",
    timeStart: "2019-08",
    timeEnd: "2023-02",
    location: {
      sv: "Göteborg, Sverige",
      en: "Gothenburg, Sweden",
    },
    details: [
      {
        sv: "iOS- och Androidutveckling inom transport, hälsa och industri",
        en: "Developed and maintained iOS and Android apps in transport, health, and industrial sectors",
      },
      {
        sv: "Ansvar för tillgänglighet, API-optimering och UI/UX",
        en: "Led accessibility improvements, optimized APIs and UI/UX, managed data workflows",
      },
    ],
    image: "/companies/Knowit.png",
  },
];
