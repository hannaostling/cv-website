"use client";

import { usePathname } from "next/navigation";
import type { Recommendation } from "@/data/schema";
import { RecommendationItem } from "@/components/RecommendationItem";
import styles from "./Recommendations.module.css";
import { Section } from "./Section";

type Props = { recommendations: Recommendation[] };

export function Recommendations({ recommendations }: Props) {
  const isEnglish = usePathname().startsWith("/en");

  return (
    <Section
      type="secondary"
      id="recommendations"
      ariaHeading="recommendations-heading"
      className={`${styles.recommendationsSection} no-print`}
    >
      <h2 id="recommendations-heading">{isEnglish ? "Recommendations" : "Rekommendationer"}</h2>

      <div className={styles.recommendationsGrid}>
        {recommendations.map((rec) => (
          <RecommendationItem key={`${rec.name}-${rec.date}`} rec={rec} isEnglish={isEnglish} />
        ))}
      </div>
    </Section>
  );
}
