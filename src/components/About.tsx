"use client";

import type { Profile } from "@/data/schema";
import styles from "./About.module.css";
import { Section } from "./Section";
import { LinkIcon } from "@/icons/LinkIcon";
import { HomeIcon } from "@/icons/HomeIcon";
import { MailIcon } from "@/icons/MailIcon";
import { useTranslatedData } from "@/i18n/useTranslated";

type Props = {
  profile: Profile;
};

export function About({ profile }: Props) {
  const lightModeImage = profile.image;
  const darkModeImage = profile.imageDarkMode ?? lightModeImage;
  const trData = useTranslatedData();

  return (
    <Section type="secondary" id="about" ariaHeading="about-heading">
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutText}>
          <h1 id="about-heading">{profile.name}</h1>
          <h4>{trData(profile.title)}</h4>
          <p>{trData(profile.description)}</p>
          <div className={styles.aboutContactRow}>
            <div className={styles.iconTextWrapper}>
              <LinkIcon />
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
            <div className={styles.iconTextWrapper}>
              <MailIcon />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className={styles.iconTextWrapper}>
              <HomeIcon /> {trData(profile.location)}
            </div>
          </div>
        </div>
        <picture className={styles.profileImg}>
          <source srcSet={darkModeImage} media="(prefers-color-scheme: dark)" />
          <source srcSet={lightModeImage} media="(prefers-color-scheme: light)" />
          <img src={lightModeImage} alt={`Image of ${profile.name}`} />
        </picture>
      </div>
    </Section>
  );
}
