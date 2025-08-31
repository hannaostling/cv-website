// 🇸🇪 Swedish Home Page
export const metadata = {
  title: "Hanna Östling – CV (SV)",
};

import { experience } from "@/data/experience.sv";
import { education } from "@/data/education.sv";
import { profile } from "@/data/profile.sv";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";

export default function Home() {
  return (
    <>
      <About profile={profile} />
      <main>
        <Experience experience={experience} />
        <Education education={education} />
      </main>
    </>
  );
}
