"use client";

import { ExportButton } from "@/components/ExportButton";
import type { Profile } from "@/data/schema";
import styles from "./About.module.css";

type Props = {
  profile: Profile;
};

export function About({ profile }: Props) {
  return (
    <section id="about" aria-labelledby="about-heading">
      <header>
        <div className={styles.aboutWrapper}>
          <div className={styles.aboutSection}>
            <img
              src={profile.image}
              alt={`Image of ${profile.name}`}
              className={styles.profileImg}
            />
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
              <ExportButton />
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}
