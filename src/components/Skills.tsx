"use client";

import { usePathname } from "next/navigation";
import type { Skill } from "@/data/schema";
import { SkillItem } from "@/components/SkillItem";
import { getString } from "@/lib/skills";

type Props = { skills: Skill[] };

export function Skills({ skills }: Props) {
  const isEnglish = usePathname().startsWith("/en");

  return (
    <section>
      <div className="common-padding">
        <h2>{isEnglish ? "Skills" : "Kompetenser"}</h2>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <SkillItem
              key={getString(skill.translated, isEnglish) || `skill-${i}`}
              skill={skill}
              isEnglish={isEnglish}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
