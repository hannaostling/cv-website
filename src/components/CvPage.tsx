import { hanna } from "@/data/person";

import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { RecommendationSection } from "@/components/RecommendationSection";
import { SkillSection } from "@/components/SkillSection";
import { CourseSection } from "@/components/CourseSection";

export default function CvPage() {
  return (
    <main className="page">
      <AboutSection profile={hanna.profile} />
      <ExperienceSection experience={hanna.experiences} />
      <EducationSection education={hanna.educations} />
      <CourseSection courses={hanna.courses} />
      <RecommendationSection recommendations={hanna.recommendations} />
      <SkillSection skills={hanna.skills} />
    </main>
  );
}
