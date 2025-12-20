"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { topics } from "@/data/topics";
import { useProgress } from "@/hooks/useProgress";
import ProgressBar from "@/components/progress/ProgressBar";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TopicsPage() {
  const { getTopicProgress } = useProgress();

  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Temas de Estudio
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Elige un tema para comenzar a aprender. Cada uno incluye ejemplos en
            4 lenguajes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, i) => {
            const progress = getTopicProgress(topic.slug, topic.totalSections);

            return (
              <ScrollReveal key={topic.slug} delay={i * 0.08}>
                <Link href={`/topics/${topic.slug}`}>
                  <motion.div
                    className="group rounded-xl border border-gray-200 bg-white p-6 transition-colors hover:border-blue-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span
                        className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                        style={{ backgroundColor: `${topic.color}15` }}
                      >
                        {topic.icon}
                      </span>
                      <div>
                        <h2 className="font-bold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                          {topic.title}
                        </h2>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {topic.totalSections} secciones
                        </span>
                      </div>
                    </div>

                    <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {topic.description}
                    </p>

                    <ProgressBar
                      percentage={progress}
                      color={topic.color}
                      height={4}
                    />
                  </motion.div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
}
