"use client";

import type { Skill } from "@/data/schema";
import { SkillRow } from "./SkillRow";
import { Section } from "../primitives/Section";
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
          <SkillRow key={skill.id} skill={skill} />
        ))}
      </div>
    </Section>
  );
}
