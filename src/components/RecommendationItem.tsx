"use client";

import { useEffect, useRef, useState } from "react";
import type { Recommendation } from "@/data/schema";
import { formatYearMonthDay } from "@/lib/date";

export function RecommendationItem({
  rec,
  isEnglish,
}: {
  rec: Recommendation;
  isEnglish: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!pRef.current || isOpen) return;
    const el = pRef.current;

    const check = () => {
      const full = el.scrollHeight;
      const visible = el.clientHeight;
      setIsClamped(full > visible + 1);
    };

    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isOpen, rec.text, isEnglish]);

  return (
    <article>
      <div className="rec-header">
        <img src={rec.image} alt="" aria-hidden="true" className="rec-image" />
        <div>
          <h3 className="rec-name">{rec.name}</h3>
          <p className="rec-title">{rec.title}</p>
          <p className="rec-meta">
            <time dateTime={rec.date}>
              {formatYearMonthDay(rec.date, isEnglish)}
            </time>
            {" - "}
            {rec.relation}
          </p>
        </div>
      </div>

      <p ref={pRef} className={`rec-text ${isOpen ? "" : "rec-text-clamp"}`}>
        {rec.text}
      </p>

      {isClamped && !isOpen && (
        <button
          type="button"
          className="read-more-btn"
          onClick={() => setIsOpen(true)}
          aria-expanded={false}
        >
          {isEnglish ? "Read more" : "Läs mer"}
        </button>
      )}
    </article>
  );
}
