"use client";

import { ExportButton } from "@/components/ExportButton";
import type { Profile } from "@/data/schema";

type Props = {
  profile: Profile;
};

export function About({ profile }: Props) {
  return (
    <header>
      <div className="about-wrapper">
        <div className="about-section">
          <img
            src={profile.image}
            alt={`Image of ${profile.name}`}
            className="profile-img"
          />
          <div className="about-text">
            <h1>{profile.name}</h1>
            <h4>{profile.title}</h4>
            <p>{profile.description}</p>
            <p className="about-contact-row">
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
  );
}
