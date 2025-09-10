"use client";

import styles from "./Recommendations.module.css";
import type { Recommendation } from "@/data/schema";
import { RecommendationItem } from "@/components/RecommendationItem";
import { Section } from "./Section";
import { useTranslated } from "@/i18n/useTranslated";

type Props = { recommendations: Recommendation[] };

export function RecommendationSection({ recommendations }: Props) {
  return (
    <Section type="secondary" id="recommendations" ariaHeading="recommendations-heading" className="no-print">
      <h2 id="recommendations-heading">{useTranslated("recommendations")}</h2>

      <div className={styles.recommendationsGrid}>
        {recommendations.map((rec) => (
          <RecommendationItem key={rec.id} rec={rec} />
        ))}
      </div>
    </Section>
  );
}
