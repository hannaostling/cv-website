"use client";

import styles from "./EntryHeader.module.css";
import { useTranslated, useTranslatedData } from "@/i18n/useTranslated";
import { useYearMonthOrPresent } from "@/lib/date";
import { EntryHeader } from "@/components/EntryHeader";
import type { EducationItem } from "@/data/schema";
import { Section } from "./Section";

type Props = {
  education: EducationItem[];
};

export function Education({ education }: Props) {
  const heading = useTranslated("education");
  const formatYM = useYearMonthOrPresent();
  const trData = useTranslatedData();

  return (
    <Section type="primary" id="education" ariaHeading="education-heading">
      <h2 id="education-heading">{heading}</h2>
      {education.map((edu, index) => {
        const title = trData(edu.title);
        const description = trData(edu.description);
        const dateStr = `${formatYM(edu.timeStart)} – ${formatYM(edu.timeEnd)}`;

        return (
          <div className={styles.entryRow} key={index}>
            <EntryHeader first={title} second={edu.school} third={dateStr} image={edu.image} />
            <p>{description}</p>
          </div>
        );
      })}
    </Section>
  );
}
