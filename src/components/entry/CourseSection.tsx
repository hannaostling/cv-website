"use client";

import styles from "./EntryHeader.module.css";
import { Section } from "../primitives/Section";
import type { Course } from "@/data/schema";
import { useTranslated } from "@/i18n/useTranslated";
import { CourseRow } from "./CourseRow";

type Props = { courses: Course[] };

export function CourseSection({ courses }: Props) {
  const heading = useTranslated("certificates");
  const sorted = sortCourses(courses ?? []);

  if (!courses || courses.length === 0) return null;

  return (
    <Section type="primary-no-seperator" id="certificates" ariaHeading="certificates-heading">
      <h2 id="certificates-heading">{heading}</h2>

      <div className={styles.courseGrid}>
        {sorted.map((c) => (
          <CourseRow key={c.id} course={c} />
        ))}
      </div>
    </Section>
  );
}

function sortCourses(courses: Course[]): Course[] {
  return [...courses].sort((a, b) => {
    // If one course has no timeEnd → it's ongoing → should be placed at the top
    if (!a.timeEnd && b.timeEnd) return -1;
    if (a.timeEnd && !b.timeEnd) return 1;

    // If both have timeEnd → compare by date (latest first)
    if (a.timeEnd && b.timeEnd) {
      return b.timeEnd.localeCompare(a.timeEnd);
    }

    // If both are ongoing or both have no valid dates → keep order
    return 0;
  });
}
