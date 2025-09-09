import type { Course } from "@/data/schema";

export const courses: Course[] = [
  {
    id: "linkedin-github-cicd",
    title: {
      sv: "GitHub Actions for CI/CD",
      en: "GitHub Actions for CI/CD",
    },
    school: "LinkedIn Learning",
    timeEnd: "2025-08-27",
    description: {
      sv: "Praktisk introduktion till GitHub Actions med fokus på automatisering av bygg, test och deployment inom CI/CD.",
      en: "Hands-on introduction to GitHub Actions, focusing on automating build, test, and deployment in CI/CD pipelines.",
    },
    image: "/companies/Linkedin.png",
    certificate: "/certificates/Linkedin-CICD.jpeg",
  },
  {
    id: "linkedin-react",
    title: {
      sv: "React Essential Training",
      en: "React Essential Training",
    },
    school: "LinkedIn Learning",
    timeEnd: "2025-08-26",
    description: {
      sv: "Grundläggande introduktion till React – komponenter, props, state och byggstenar för front-end-utveckling.",
      en: "Essential introduction to React – components, props, state, and core concepts for front-end development.",
    },
    image: "/companies/Linkedin.png",
    certificate: "/certificates/Linkedin-React.jpeg",
  },
  {
    id: "google-dm-2017",
    title: {
      sv: "Digital marknadsföring",
      en: "Digital Marketing",
    },
    school: "Google Digitalakademin",
    timeEnd: "2017-06-29",
    description: {
      sv: "Grundläggande kunskaper i digital marknadsföring – SEO, SEM, sociala medier och webbanalys.",
      en: "Fundamentals of digital marketing – SEO, SEM, social media, and web analytics.",
    },
    image: "/companies/Google.svg",
    certificate: "/certificates/Google-Digital-Marketing.pdf",
  },
  {
    id: "linkedin-ios-wcag",
    title: {
      sv: "iOS App Development: Accessibility",
      en: "iOS App Development: Accessibility",
    },
    school: "LinkedIn Learning",
    timeEnd: "2023-12-01",
    description: {
      sv: "Fördjupning i tillgänglighet för iOS-appar – verktyg, riktlinjer och bästa praxis för att skapa inkluderande användarupplevelser.",
      en: "In-depth training in iOS app accessibility – tools, guidelines, and best practices for creating inclusive user experiences.",
    },
    image: "/companies/Linkedin.png",
    certificate: "/certificates/Linkedin-iOS-Wcag.jpeg",
  },
];
