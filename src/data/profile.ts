import type { Profile } from "@/data/schema";

export const profile: Profile = {
  id: "hanna-ostling",
  name: "Hanna Östling",
  title: {
    sv: "Apputvecklare",
    en: "App Developer",
  },
  email: "hanna@example.se",
  phone: "0700-00 00 00",
  location: {
    sv: "Mölndal, Sverige",
    en: "Mölndal, Sweden",
  },
  linkedin: "https://linkedin.com/in/example",
  description: {
    sv: "Jag är en erfaren apputvecklare med stark bakgrund inom iOS och Android. Jag bygger skalbara appar med fokus på prestanda, användbarhet och långsiktig underhållbarhet.",
    en: "Experienced app developer with a strong background in iOS and Android. I build scalable, high-quality apps with a focus on performance, usability, and long-term maintainability.",
  },
  image: "/people/profile-light.png",
  imageDarkMode: "/people/profile-dark.png",
};
