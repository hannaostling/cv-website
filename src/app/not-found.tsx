"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./not-found.module.css";

export default function RootNotFound() {
  const [locale, setLocale] = useState<"sv" | "en">("sv");

  useEffect(() => {
    // Detect locale from URL path
    const path = window.location.pathname;
    if (path.startsWith("/en")) {
      setLocale("en");
    }
  }, []);

  const translations = {
    sv: {
      title: "Sidan hittades inte",
      description: "Sidan du letar efter finns inte.\nVill du gå till någon specifik del av CV-sidan?",
      sections: [
        { id: "about", label: "Om" },
        { id: "experience", label: "Arbete" },
        { id: "education", label: "Utbildning" },
        { id: "recommendations", label: "Rekommendationer" },
        { id: "skills", label: "Kompetenser" },
      ],
    },
    en: {
      title: "Page not found",
      description: "The page you are looking for does not exist.\nWant to return to a specific part of the CV website?",
      sections: [
        { id: "about", label: "About" },
        { id: "experience", label: "Work" },
        { id: "education", label: "Education" },
        { id: "recommendations", label: "Recommendations" },
        { id: "skills", label: "Skills" },
      ],
    },
  };

  const t = translations[locale];

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>404</h1>
          <h2 className={styles.subtitle}>{t.title}</h2>
          <p className={styles.description}>{t.description}</p>
          <div className={styles.links}>
            {t.sections.map((section) => (
              <Link
                key={section.id}
                href={`/${locale}#${section.id}`}
                className={styles.sectionLink}
              >
                {section.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <span className={styles.copyright}>
          © Östling IT {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
}
