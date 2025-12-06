"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Lesson } from "@/types";

interface LessonNavProps {
  prev: Lesson | null;
  next: Lesson | null;
}

export default function LessonNav({ prev, next }: LessonNavProps) {
  return (
    <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-between">
      {prev ? (
        <motion.div whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
          <Link
            href={`/topics/${prev.slug}`}
            className="flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 12L6 8L10 4" />
            </svg>
            <span>
              <span className="block text-xs text-gray-400">Anterior</span>
              {prev.title}
            </span>
          </Link>
        </motion.div>
      ) : (
        <div />
      )}

      {next ? (
        <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
          <Link
            href={`/topics/${next.slug}`}
            className="flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <span className="text-right">
              <span className="block text-xs text-gray-400">Siguiente</span>
              {next.title}
            </span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 4L10 8L6 12" />
            </svg>
          </Link>
        </motion.div>
      ) : (
        <div />
      )}
    </div>
  );
}
