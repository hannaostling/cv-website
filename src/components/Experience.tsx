"use client";

import { usePathname } from "next/navigation";
import { EntryHeader } from "@/components/EntryHeader";
import type { Job } from "@/data/schema";
import { formatDate, calculateDuration } from "@/lib/date";
import { Section } from "./Section";

type Props = {
  experience: Job[];
};

export function Experience({ experience }: Props) {
  const isEnglish = usePathname().startsWith("/en");

  return (
    <Section type="primary" id="experience" ariaHeading="experience-heading">
      <h2 id="experience-heading">{isEnglish ? "Work Experience" : "Arbetslivserfarenhet"}</h2>
      {experience.map((job, index) => {
        const dateStr = `${formatDate(job.timeStart, isEnglish)} – ${formatDate(job.timeEnd, isEnglish)}`;
        const duration = ` · ${calculateDuration(job.timeStart, job.timeEnd, isEnglish)}`;

        return (
          <div key={index}>
            <EntryHeader
              first={`${job.title}, ${job.company}`}
              second={`${dateStr} ${duration}`}
              third={`${job.location}`}
              image={job.image}
            />
            <ul>
              {job.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </Section>
  );
}
