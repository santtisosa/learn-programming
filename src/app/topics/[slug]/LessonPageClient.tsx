"use client";

import LessonContent from "@/components/lesson/LessonContent";
import type { Lesson } from "@/types";

interface LessonPageClientProps {
  lesson: Lesson;
  prev: Lesson | null;
  next: Lesson | null;
}

export default function LessonPageClient({ lesson, prev, next }: LessonPageClientProps) {
  return <LessonContent lesson={lesson} prev={prev} next={next} />;
}
