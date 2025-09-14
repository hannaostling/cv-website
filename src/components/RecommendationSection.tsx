"use client";

import styles from "./RecommendationSection.module.css";
import type { Recommendation } from "@/data/schema";
import { RecommendationRow } from "@/components/RecommendationRow";
import { Section } from "./Section";
import { useTranslated } from "@/i18n/useTranslated";

type Props = { recommendations: Recommendation[] };

export function RecommendationSection({ recommendations }: Props) {
  const heading = useTranslated("recommendations");

  if (!recommendations || recommendations.length === 0) return null;

  return (
    <Section type="secondary" id="recommendations" ariaHeading="recommendations-heading" className="no-print">
      <h2 id="recommendations-heading">{heading}</h2>

      <div className={styles.recommendationsGrid}>
        {recommendations.map((rec) => (
          <RecommendationRow key={rec.id} rec={rec} />
        ))}
      </div>
    </Section>
  );
}
