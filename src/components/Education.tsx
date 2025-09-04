"use client";

import { usePathname } from "next/navigation";
import { EntryHeader } from "@/components/EntryHeader";
import type { EducationItem } from "@/data/schema";
import { formatDate } from "@/lib/date";
import { Section } from "./Section";

type Props = {
  education: EducationItem[];
};

export function Education({ education }: Props) {
  const isEnglish = usePathname().startsWith("/en");
  return (
    <Section type="primary" id="education" ariaHeading="education-heading">
      <h2 id="education-heading">{isEnglish ? "Education" : "Utbildning"}</h2>
      {education.map((edu, index) => {
        const dateStr = `${formatDate(edu.timeStart, isEnglish)} – ${formatDate(edu.timeEnd, isEnglish)}`;
        return (
          <div key={index}>
            <EntryHeader first={edu.title} second={edu.school} third={`${dateStr}`} image={edu.image} />
            <p>{edu.description}</p>
          </div>
        );
      })}
    </Section>
  );
}
