"use client";

import { usePathname } from "next/navigation";
import { EntryHeader } from "@/components/EntryHeader";

type EducationItem = {
  title: string;
  school: string;
  timeStart: string;
  timeEnd: string | null;
  location: string;
  description: string;
  image: string;
};

type Props = {
  education: EducationItem[];
};

export function Education({ education }: Props) {
  const isEnglish = usePathname().startsWith("/en");
  return (
    <section>
      <h2>{isEnglish ? "Education" : "Utbildning"}</h2>
      {education.map((edu, index) => {
        return (
          <div key={index}>
            <EntryHeader
              title={`${edu.title}, ${edu.school}`}
              image={edu.image}
              timeStart={edu.timeStart}
              timeEnd={edu.timeEnd}
              isEnglish={isEnglish}
            />
            <p>{edu.description}</p>
          </div>
        );
      })}
    </section>
  );
}
