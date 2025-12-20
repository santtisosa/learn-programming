"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useProgress } from "@/hooks/useProgress";
import ProgressBar from "./ProgressBar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Topic } from "@/types";

interface ProgressGridProps {
  topics: Topic[];
}

export default function ProgressGrid({ topics }: ProgressGridProps) {
  const { isTopicCompleted, getTopicProgress } = useProgress();

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {topics.map((topic, i) => {
        const progress = getTopicProgress(topic.slug, topic.totalSections);
        const completed = isTopicCompleted(topic.slug);

        return (
          <ScrollReveal key={topic.slug} delay={i * 0.08}>
            <Link href={`/topics/${topic.slug}`}>
              <motion.div
                className={`rounded-xl border p-5 transition-colors ${
                  completed
                    ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30"
                    : "border-gray-200 bg-white hover:border-blue-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800"
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-2xl">{topic.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {topic.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {topic.totalSections} secciones
                    </p>
                  </div>
                  {completed && (
                    <motion.span
                      className="ml-auto text-green-500"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      ✓
                    </motion.span>
                  )}
                </div>
                <ProgressBar
                  percentage={progress}
                  color={topic.color}
                  height={6}
                  showLabel={false}
                />
                <p className="mt-2 text-right text-xs text-gray-400">
                  {progress}% completado
                </p>
              </motion.div>
            </Link>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
