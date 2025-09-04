"use client";

import type { Profile } from "@/data/schema";
import styles from "./About.module.css";
import { Section } from "./Section";

type Props = {
  profile: Profile;
};

export function About({ profile }: Props) {
  const lightModeImage = "/people/profile-light.png";
  const darkModeImage = "/people/profile-dark.png";

  return (
    <Section type="secondary" id="about" ariaHeading="about-heading">
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutText}>
          <h1 id="about-heading">{profile.name}</h1>
          <h4>{profile.title}</h4>
          <p>{profile.description}</p>
          <p className={styles.aboutContactRow}>
            <span>
              🔗{" "}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </span>
            <span>
              ✉️ <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </span>
            <span>🏡 {profile.location}</span>
          </p>
        </div>
        <picture className={styles.profileImg}>
          <source srcSet={darkModeImage} media="(prefers-color-scheme: dark)" />
          <source
            srcSet={lightModeImage}
            media="(prefers-color-scheme: light)"
          />
          <img src={`${lightModeImage}`} alt={`Image of ${profile.name}`} />
        </picture>
      </div>
    </Section>
  );
}
