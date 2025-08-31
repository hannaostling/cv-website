"use client";

import { formatDate, calculateDuration } from "@/lib/date";

type Props = {
  title: string;
  image: string;
  timeStart: string;
  timeEnd: string | null;
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
        <img src={image} alt="" role="presentation" className="entry-img" />
        <h3>{title}</h3>
      </div>
      <p className="entry-dates">{dateStr + duration}</p>
    </div>
  );
}
