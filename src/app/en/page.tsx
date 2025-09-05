// 🇬🇧 English Home Page
export const metadata = {
  title: "Hanna Östling – CV (EN)",
};

import { profile } from "@/data/profile.en";
import { experience } from "@/data/experience.en";
import { education } from "@/data/education.en";
import { recommendations } from "@/data/recommendations.en";
import { skills } from "@/data/skills";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Recommendations } from "@/components/Recommendations";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <main role="main" className="page">
        <About profile={profile} />
        <Experience experience={experience} />
        <Education education={education} />
        <Recommendations recommendations={recommendations} />
        <Skills skills={skills} />
      </main>
    </>
  );
}
