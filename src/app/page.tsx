// 🇸🇪 Swedish Home Page
export const metadata = {
  title: "Hanna Östling – CV (SV)",
};

import { profile } from "@/data/profile.sv";
import { experience } from "@/data/experience.sv";
import { education } from "@/data/education.sv";
import { recommendations } from "@/data/recommendations.sv";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Recommendations } from "@/components/Recommendations";

export default function Home() {
  return (
    <>
      <About profile={profile} />
      <main>
        <Experience experience={experience} />
        <Education education={education} />
        <Recommendations recommendations={recommendations} />
      </main>
    </>
  );
}
