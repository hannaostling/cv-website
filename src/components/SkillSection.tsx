"use client";

import type { Skill } from "@/data/schema";
import { SkillItem } from "@/components/SkillItem";
import { Section } from "./Section";
import { useTranslated } from "@/i18n/useTranslated";

type Props = { skills: Skill[] };

export function SkillSection({ skills }: Props) {
  const heading = useTranslated("skills");

  if (!skills || skills.length === 0) return null;

  return (
    <Section type="primary-no-seperator" id="skills" ariaHeading="skills-heading">
      <h2 id="skills-heading">{heading}</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </div>
    </Section>
  );
}
