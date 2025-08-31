"use client";

import { usePathname } from "next/navigation";
import { EntryHeader } from "@/components/EntryHeader";
import type { YearMonth } from "@/data/schema";

type Job = {
  title: string;
  company: string;
  timeStart: YearMonth;
  timeEnd: YearMonth | null;
  location: string;
  details: string[];
  image: string;
};

type Props = {
  experience: Job[];
};

export function Experience({ experience }: Props) {
  const isEnglish = usePathname().startsWith("/en");

  return (
    <section>
      <h2>{isEnglish ? "Work Experience" : "Arbetslivserfarenhet"}</h2>
      {experience.map((job, index) => {
        return (
          <div key={index}>
            <EntryHeader
              title={`${job.title}, ${job.company}`}
              image={job.image}
              timeStart={job.timeStart}
              timeEnd={job.timeEnd}
              isEnglish={isEnglish}
              showDuration={true}
            />
            <p className="entry-location">{job.location}</p>
            <ul>
              {job.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
}
