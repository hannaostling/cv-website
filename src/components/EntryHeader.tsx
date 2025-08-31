"use client";

import { formatDate, calculateDuration } from "@/lib/date";
import type { YearMonth } from "@/data/schema";

type Props = {
  title: string;
  image: string;
  timeStart: YearMonth;
  timeEnd: YearMonth | null;
  isEnglish: boolean;
  showDuration?: boolean;
};

export function EntryHeader({
  title,
  image,
  timeStart,
  timeEnd,
  isEnglish,
  showDuration = false,
}: Props) {
  const dateStr = `${formatDate(timeStart, isEnglish)} – ${formatDate(
    timeEnd,
    isEnglish
  )}`;
  const duration = showDuration
    ? ` · ${calculateDuration(timeStart, timeEnd, isEnglish)}`
    : "";

  return (
    <div>
      <div className="entry-row">
        <img src={image} alt="" aria-hidden="true" className="entry-img" />
        <h3>{title}</h3>
      </div>
      <p className="entry-dates">{dateStr + duration}</p>
    </div>
  );
}
