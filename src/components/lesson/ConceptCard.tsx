"use client";

import { motion } from "motion/react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CodeTabs from "./CodeTabs";
import CompletionToggle from "./CompletionToggle";
import type { LessonSection } from "@/types";

interface ConceptCardProps {
  section: LessonSection;
  topicSlug: string;
  index: number;
}

export default function ConceptCard({ section, topicSlug, index }: ConceptCardProps) {
  return (
    <ScrollReveal delay={index * 0.05}>
      <motion.div
        className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 sm:p-8"
        whileHover={{ borderColor: "rgba(59, 130, 246, 0.3)" }}
        transition={{ duration: 0.2 }}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {section.title}
          </h3>
          <CompletionToggle topicSlug={topicSlug} sectionId={section.id} />
        </div>

        <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-400">
          {section.explanation}
        </p>

        <CodeTabs examples={section.codeExamples} />
      </motion.div>
    </ScrollReveal>
  );
}
