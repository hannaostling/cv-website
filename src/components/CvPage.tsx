import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { recommendations } from "@/data/recommendations";
import { courses } from "@/data/courses";
import { skills } from "@/data/skills";

import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { RecommendationSection } from "@/components/RecommendationSection";
import { SkillSection } from "@/components/SkillSection";
import { CourseSection } from "@/components/CourseSection";

export default function CvPage() {
  return (
    <main className="page">
      <AboutSection profile={profile} />
      <ExperienceSection experience={experience} />
      <EducationSection education={education} />
      <CourseSection courses={courses} />
      <RecommendationSection recommendations={recommendations} />
      <SkillSection skills={skills} />
    </main>
  );
}
