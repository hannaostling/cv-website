"use client";

import styles from "./Recommendations.module.css";
import { useRef, useState } from "react";
import type { Recommendation } from "@/data/schema";
import { useClampDetection } from "@/hooks/useClampDetection";
import { useTranslated, useTranslatedData } from "@/i18n/useTranslated";
import { useYearMonthDay } from "@/lib/date";
import Image from "next/image";

export function RecommendationItem({ rec }: { rec: Recommendation }) {
  const [isOpen, setIsOpen] = useState(false);
  const pRef = useRef<HTMLParagraphElement>(null);
  const langCode = useTranslated("languageCode");
  const isClamped = useClampDetection(pRef, isOpen, [rec.text, langCode]);
  const readMore = useTranslated("readMore");
  const formatYMD = useYearMonthDay();
  const trData = useTranslatedData();

  return (
    <article>
      <div className={styles.recHeader}>
        <Image src={rec.image} alt="" aria-hidden="true" width={40} height={40} className={styles.recImage} />
        <div>
          <h3 className={styles.recName}>{rec.name}</h3>
          <p className={styles.recTitle}>{trData(rec.title)}</p>
          <p className={styles.recMeta}>
            <time dateTime={rec.date}>{formatYMD(rec.date)}</time>
            {" - "}
            {trData(rec.relation)}
          </p>
        </div>
      </div>

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
