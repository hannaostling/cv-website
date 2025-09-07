"use client";

import type { Skill } from "@/data/schema";
import { SkillItem } from "@/components/SkillItem";
import { Section } from "./Section";
import { useTranslated } from "@/i18n/useTranslated";

type Props = { skills: Skill[] };

export function Skills({ skills }: Props) {
  return (
    <Section type="primary-no-seperator" id="skills" className="page-break" ariaHeading="skills-heading">
      <h2 id="skills-heading">{useTranslated("skills")}</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </div>
    </Section>
  );
}
