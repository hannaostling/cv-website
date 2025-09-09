"use client";

import styles from "./EntryHeader.module.css";
import type { Course } from "@/data/schema";
import { useTranslated, useTranslatedData } from "@/i18n/useTranslated";
import { useYearMonthDay } from "@/lib/date";
import { GridRow } from "./GridRow";

export function CourseRow({ course }: { course: Course }) {
  const showCredential = useTranslated("showCredential");
  const trData = useTranslatedData();
  const issued = useTranslated("issued");
  const ongoing = useTranslated("ongoing");
  const formatYM = useYearMonthDay();
  const issuedStr = course.timeEnd ? `${issued} ${formatYM(course.timeEnd)}` : ongoing;
  const desc = course.description ? `${trData(course.description)}` : "";

  return (
    <article>
      <GridRow
        title={trData(course.title)}
        subtitle={course.school}
        dateText={issuedStr}
        image={course.image}
      ></GridRow>

      {course.certificate && (
        <a
          href={course.certificate}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
          aria-label={`${showCredential}: ${trData(course.title)}`}
        >
          {showCredential}
        </a>
      )}
    </article>
  );
}
