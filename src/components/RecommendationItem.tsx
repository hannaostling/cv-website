"use client";

import styles from "./Recommendations.module.css";
import { useRef, useState } from "react";
import type { Recommendation } from "@/data/schema";
import { useClampDetection } from "@/hooks/useClampDetection";
import { useTranslated, useTranslatedData } from "@/i18n/useTranslated";
import { useYearMonthDay } from "@/lib/date";
import { GridRow } from "./GridRow";

export function RecommendationItem({ rec }: { rec: Recommendation }) {
  const [isOpen, setIsOpen] = useState(false);
  const pRef = useRef<HTMLParagraphElement>(null);
  const langCode = useTranslated("languageCode");
  const isClamped = useClampDetection(pRef, isOpen, [rec.text, langCode]);
  const readMore = useTranslated("readMore");
  const formatYMD = useYearMonthDay();
  const trData = useTranslatedData();
  const dateText = `${formatYMD(rec.date)} - ${trData(rec.relation)}`;
  const imageFallback = "/icons/Person.svg";

  return (
    <article>
      <GridRow
        title={rec.name}
        subtitle={trData(rec.title)}
        dateText={dateText}
        image={rec.image}
        imageFallback={imageFallback}
        roundImage={true}
      ></GridRow>

      <p ref={pRef} className={`${styles.recText} ${isOpen ? "" : styles.recTextClamp}`}>
        {trData(rec.text)}
      </p>

      {isClamped && !isOpen && (
        <button
          type="button"
          className={styles.readMoreBtn}
          onClick={() => setIsOpen(true)}
          aria-expanded={false}
        >
          {readMore}
        </button>
      )}
    </article>
  );
}
