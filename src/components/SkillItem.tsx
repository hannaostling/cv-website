"use client";

import type { Skill } from "@/data/schema";
import { getString, levelLabel } from "@/lib/skills";

export function SkillItem({
  skill,
  isEnglish,
}: {
  skill: Skill;
  isEnglish: boolean;
}) {
  return (
    <article>
      <div>
        <h3 style={{ margin: 0 }}>{getString(skill.translated, isEnglish)}</h3>
      </div>

      <ul>
        {skill.values.map((v, idx) => {
          const name = getString(v.translated, isEnglish);
          const level = v.level ? levelLabel(v.level, isEnglish) : null;
          return (
            <li key={`${name || "value"}-${idx}`}>
              {name}
              {level ? <span> — {level}</span> : null}
            </li>
          );
        })}
      </ul>
    </article>
  );
}
