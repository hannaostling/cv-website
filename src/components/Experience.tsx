"use client";

import styles from "./EntryHeader.module.css";
import { useTranslated, useTranslatedData } from "@/i18n/useTranslated";
import { useYearMonthOrPresent, useCalculateDuration } from "@/lib/date";
import { EntryHeader } from "@/components/EntryHeader";
import type { Job } from "@/data/schema";
import { Section } from "./Section";

type Props = {
  experience: Job[];
};

export function Experience({ experience }: Props) {
  const heading = useTranslated("experience");
  const formatYM = useYearMonthOrPresent();
  const trData = useTranslatedData();
  const calcDuration = useCalculateDuration();

  return (
    <Section type="primary" id="experience" ariaHeading="experience-heading">
      <h2 id="experience-heading">{heading}</h2>
      {experience.map((job, index) => {
        const title = trData(job.title);
        const location = trData(job.location);
        const dateStr = `${formatYM(job.timeStart)} – ${formatYM(job.timeEnd)}`;
        const duration = ` · ${calcDuration(job.timeStart, job.timeEnd)}`;

        return (
          <div className={styles.entryRow} key={index}>
            <EntryHeader
              first={`${title}, ${job.company}`}
              second={`${dateStr} ${duration}`}
              third={location}
              image={job.image}
            />
            <ul>
              {job.details.map((item, i) => (
                <li key={i}>{trData(item)}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </Section>
  );
}
