"use client";

import { usePathname } from "next/navigation";
import type { Recommendation } from "@/data/schema";
import { RecommendationItem } from "@/components/RecommendationItem";

type Props = { recommendations: Recommendation[] };

export function Recommendations({ recommendations }: Props) {
  const isEnglish = usePathname().startsWith("/en");

  return (
    <section className="recommendations-section">
      <div className="common-padding">
        <h2>{isEnglish ? "Recommendations" : "Rekommendationer"}</h2>

        <div className="recommendations-grid">
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
