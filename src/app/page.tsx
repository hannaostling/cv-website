// 🇸🇪 Swedish Home Page
export const metadata = {
  title: "Hanna Östling – CV (SV)",
};

import { profile } from "@/data/profile.sv";
import { experience } from "@/data/experience.sv";
import { education } from "@/data/education.sv";
import { recommendations } from "@/data/recommendations.sv";
import { skills } from "@/data/skills";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Recommendations } from "@/components/Recommendations";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <main className="page">
        <About profile={profile} />
        <Experience experience={experience} />
        <Education education={education} />
        <Recommendations recommendations={recommendations} />
        <Skills skills={skills} />
      </main>
    </>
  );
}
