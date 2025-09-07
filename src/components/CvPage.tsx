import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { recommendations } from "@/data/recommendations";
import { skills } from "@/data/skills";

import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Recommendations } from "@/components/Recommendations";
import { Skills } from "@/components/Skills";

export default function CvPage() {
  return (
    <main className="page">
      <About profile={profile} />
      <Experience experience={experience} />
      <Education education={education} />
      <Recommendations recommendations={recommendations} />
      <Skills skills={skills} />
    </main>
  );
}
