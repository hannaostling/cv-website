"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase-client";
import { doc, getDoc } from "firebase/firestore";
import { hanna } from "@/data/person";
import { motion } from "framer-motion";
import type { Person } from "@/data/schema";

import Header from "../header/Header";
import Footer from "../footer/Footer";

import { AboutSection } from "../about/AboutSection";
import { ExperienceSection } from "../entry/ExperienceSection";
import { EducationSection } from "../entry/EducationSection";
import { CourseSection } from "../entry/CourseSection";
import { RecommendationSection } from "../recommendations/RecommendationSection";
import { SkillSection } from "../skills/SkillSection";

const COLLECTION = "persons";
const DOC_ID = "hanna";
const FADE_IN_DURATION = 1;

export default function CvPage() {
  const [person, setPerson] = useState<Person | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        console.log("🔍 Fetching ", `${COLLECTION}/${DOC_ID}...`);
        const snap = await getDoc(doc(db, COLLECTION, DOC_ID));

        if (!mounted) return;

        if (!snap.exists()) {
          console.warn("⚠️ Person not found in Firestore, using local fallback.");
          setPerson(hanna);
          return;
        }

        const data = snap.data() as Person;
        setPerson(data);
        console.log("✅ Person loaded from Firestore.");
      } catch (err) {
        console.error(`❌ Failed to fetch ${DOC_ID}:`, err);
        if (mounted) setPerson(hanna);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return;
  }

  const p = person ?? hanna;

  return (
    <main className="page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: FADE_IN_DURATION }}
      >
        <Header profile={p.profile} />
        <AboutSection profile={p.profile} />
        <ExperienceSection experience={p.experiences} />
        <EducationSection education={p.educations} />
        <CourseSection courses={p.courses} />
        <RecommendationSection recommendations={p.recommendations} />
        <SkillSection skills={p.skills} />
        <Footer />
      </motion.div>
    </main>
  );
}
