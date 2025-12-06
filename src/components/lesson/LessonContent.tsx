"use client";

import ConceptCard from "./ConceptCard";
import LessonNav from "./LessonNav";
import PageTransition from "@/components/layout/PageTransition";
import type { Lesson } from "@/types";

interface LessonContentProps {
  lesson: Lesson;
  prev: Lesson | null;
  next: Lesson | null;
}

export default function LessonContent({ lesson, prev, next }: LessonContentProps) {
  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="mb-8">
          <span className="mb-2 block text-4xl">{lesson.icon}</span>
          <h1 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            {lesson.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {lesson.description}
          </p>
        </div>

        <div className="space-y-8">
          {lesson.sections.map((section, i) => (
            <ConceptCard
              key={section.id}
              section={section}
              topicSlug={lesson.slug}
              index={i}
            />
          ))}
        </div>

        <LessonNav prev={prev} next={next} />
      </div>
    </PageTransition>
  );
}
