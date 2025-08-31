// 🇬🇧 English Home Page
export const metadata = {
  title: "Hanna Östling – CV (EN)",
};

import { experience } from "@/data/experience.en";
import { education } from "@/data/education.en";
import { profile } from "@/data/profile.en";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";

export default function Home() {
  return (
    <>
      <About profile={profile} />
      <main role="main">
        <Experience experience={experience} />
        <Education education={education} />
      </main>
    </>
  );
}
