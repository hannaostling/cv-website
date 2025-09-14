"use client";

import type { Skill } from "@/data/schema";
import { useTranslatedData } from "@/i18n/useTranslated";

export function SkillRow({ skill }: { skill: Skill }) {
  const trData = useTranslatedData();
  const hideOnPrint = skill.hideOnPrint ?? false;

  return (
    <article className={hideOnPrint ? "no-print" : undefined}>
      <div>
        <h3 style={{ margin: 0 }}>{trData(skill.title)}</h3>
      </div>

      <ul>
        {skill.items.map((item, idx) => {
          const name = trData(item.value);
          const level = item.level ? trData(item.level) : null;

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
