"use client";

import { topics } from "@/data/topics";
import { useProgress } from "@/hooks/useProgress";
import ProgressGrid from "@/components/progress/ProgressGrid";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ProgressPage() {
  const { totalCompleted, progress } = useProgress();

  const totalSections = topics.reduce((acc, t) => acc + t.totalSections, 0);
  const completedSections = Object.values(progress.completedSections).reduce(
    (acc, sections) => acc + sections.length,
    0
  );
  const overallPercentage =
    totalSections > 0 ? Math.round((completedSections / totalSections) * 100) : 0;

  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Mi Progreso
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Visualiza tu avance en cada tema y sección.
          </p>
        </div>

        <ScrollReveal>
          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-gray-900">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                <AnimatedCounter target={completedSections} />
                <span className="text-lg text-gray-400">/{totalSections}</span>
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Secciones completadas
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-gray-900">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                <AnimatedCounter target={totalCompleted} />
                <span className="text-lg text-gray-400">/{topics.length}</span>
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Temas completados
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-gray-900">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                <AnimatedCounter target={overallPercentage} suffix="%" />
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Progreso total
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ProgressGrid topics={topics} />
      </div>
    </PageTransition>
  );
}
