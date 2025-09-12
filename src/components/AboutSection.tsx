"use client";

import type { Profile } from "@/data/schema";
import styles from "./About.module.css";
import { Section } from "./Section";
import { LinkIcon } from "@/icons/LinkIcon";
import { HomeIcon } from "@/icons/HomeIcon";
import { MailIcon } from "@/icons/MailIcon";
import { useTranslatedData } from "@/i18n/useTranslated";
import { useState, useMemo } from "react";

type Props = { profile: Profile };

export function AboutSection({ profile }: Props) {
  const tr = useTranslatedData();
  const light = profile.image;
  const dark = profile.imageDarkMode ?? light;
  const [loaded, setLoaded] = useState(false);
  const imgKey = useMemo(() => light + "|" + dark, [light, dark]);

  return (
    <Section type="secondary" id="about" ariaHeading="about-heading">
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutText}>
          <h1 id="about-heading">{profile.name}</h1>

          {tr(profile.title) && <h4>{tr(profile.title)}</h4>}
          {tr(profile.description) && <p>{tr(profile.description)}</p>}

          <div className={styles.aboutContactRow}>
            {profile.linkedin && (
              <div className={styles.iconTextWrapper}>
                <LinkIcon className={styles.aboutIcon} />
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            )}

            {profile.email && (
              <div className={styles.iconTextWrapper}>
                <MailIcon className={styles.aboutIcon} />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
            )}

            {tr(profile.location) && (
              <div className={styles.iconTextWrapper}>
                <HomeIcon className={styles.aboutIcon} /> {tr(profile.location)}
              </div>
            )}
          </div>
        </div>

        <picture className={styles.profileImg} style={{ display: loaded ? undefined : "none" }} key={imgKey}>
          <source srcSet={dark} media="(prefers-color-scheme: dark)" />
          <source srcSet={light} media="(prefers-color-scheme: light)" />
          <img
            src={light}
            alt={`Image of ${profile.name}`}
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(false)}
          />
        </picture>
      </div>
    </Section>
  );
}
