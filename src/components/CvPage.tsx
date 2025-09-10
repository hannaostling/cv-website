import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { CourseSection } from "@/components/CourseSection";
import { RecommendationSection } from "@/components/RecommendationSection";
import { SkillSection } from "@/components/SkillSection";
import { Person } from "@/data/schema";

type Props = {
  person: Person;
};

export default function CvPage({ person }: Props) {
  return (
    <main className="page">
      <AboutSection profile={person.profile} />
      <ExperienceSection experience={person.experiences} />
      <EducationSection education={person.educations} />
      <CourseSection courses={person.courses} />
      <RecommendationSection recommendations={person.recommendations} />
      <SkillSection skills={person.skills} />
    </main>
  );
}
