"use client";

import { usePathname } from "next/navigation";
import type { Recommendation } from "@/data/schema";
import { RecommendationItem } from "@/components/RecommendationItem";
import styles from "./Recommendations.module.css";

type Props = { recommendations: Recommendation[] };

export function Recommendations({ recommendations }: Props) {
  const isEnglish = usePathname().startsWith("/en");

  return (
    <section
      id="recommendations"
      aria-labelledby="recommendations-heading"
      className={`${styles.recommendationsSection} no-print`}
    >
      <div className="common-padding">
        <h2 id="recommendations-heading">
          {isEnglish ? "Recommendations" : "Rekommendationer"}
        </h2>

        <div className={styles.recommendationsGrid}>
          {recommendations.map((rec) => (
            <RecommendationItem
              key={`${rec.name}-${rec.date}`}
              rec={rec}
              isEnglish={isEnglish}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
