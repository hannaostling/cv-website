"use client";

import { useRef, useState } from "react";
import type { Recommendation } from "@/data/schema";
import { formatYearMonthDay } from "@/lib/date";
import styles from "./Recommendations.module.css";
import { useClampDetection } from "@/hooks/useClampDetection";

export function RecommendationItem({ rec, isEnglish }: { rec: Recommendation; isEnglish: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const pRef = useRef<HTMLParagraphElement>(null);
  const isClamped = useClampDetection(pRef, isOpen, [rec.text, isEnglish]);

  return (
    <article>
      <div className={styles.recHeader}>
        <img src={rec.image} alt="" aria-hidden="true" className={styles.recImage} />
        <div>
          <h3 className={styles.recName}>{rec.name}</h3>
          <p className={styles.recTitle}>{rec.title}</p>
          <p className={styles.recMeta}>
            <time dateTime={rec.date}>{formatYearMonthDay(rec.date, isEnglish)}</time>
            {" - "}
            {rec.relation}
          </p>
        </div>
      </div>

      <p ref={pRef} className={`${styles.recText} ${isOpen ? "" : styles.recTextClamp}`}>
        {rec.text}
      </p>

      {isClamped && !isOpen && (
        <button
          type="button"
          className={styles.readMoreBtn}
          onClick={() => setIsOpen(true)}
          aria-expanded={false}
        >
          {isEnglish ? "Read more" : "Läs mer"}
        </button>
      )}
    </article>
  );
}
