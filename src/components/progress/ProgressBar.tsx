"use client";

import { motion } from "motion/react";

interface ProgressBarProps {
  percentage: number;
  color?: string;
  height?: number;
  showLabel?: boolean;
  className?: string;
}

export default function ProgressBar({
  percentage,
  color = "#3B82F6",
  height = 8,
  showLabel = true,
  className = "",
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, percentage));

  return (
    <div className={className}>
      {showLabel && (
        <div className="mb-1.5 flex justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">Progreso</span>
          <span className="font-medium text-gray-700 dark:text-gray-300">
            {clamped}%
          </span>
        </div>
      )}
      <div
        className="w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700"
        style={{ height }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${clamped}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
