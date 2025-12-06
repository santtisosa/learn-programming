"use client";

import { motion } from "motion/react";
import { useProgress } from "@/hooks/useProgress";

interface CompletionToggleProps {
  topicSlug: string;
  sectionId: string;
}

export default function CompletionToggle({ topicSlug, sectionId }: CompletionToggleProps) {
  const { isSectionCompleted, toggleSection } = useProgress();
  const completed = isSectionCompleted(topicSlug, sectionId);

  return (
    <button
      onClick={() => toggleSection(topicSlug, sectionId)}
      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
        completed
          ? "border-green-500 bg-green-500 text-white"
          : "border-gray-300 text-transparent hover:border-green-400 dark:border-gray-600"
      }`}
      aria-label={completed ? "Marcar como no completado" : "Marcar como completado"}
    >
      <motion.svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={false}
        animate={completed ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.path
          d="M2 7L5.5 10.5L12 3.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: completed ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </motion.svg>
    </button>
  );
}
