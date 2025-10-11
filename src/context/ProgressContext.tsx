"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { STORAGE_KEYS } from "@/lib/constants";
import type { ProgressState } from "@/types";

interface ProgressContextType {
  progress: ProgressState;
  toggleSection: (topicSlug: string, sectionId: string) => void;
  toggleTopic: (topicSlug: string) => void;
  isSectionCompleted: (topicSlug: string, sectionId: string) => boolean;
  isTopicCompleted: (topicSlug: string) => boolean;
  getTopicProgress: (topicSlug: string, totalSections: number) => number;
  totalCompleted: number;
}

const defaultProgress: ProgressState = {
  completedTopics: [],
  completedSections: {},
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>(defaultProgress);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.PROGRESS);
      if (stored) {
        setProgress(JSON.parse(stored));
      }
    } catch {
      // ignore parse errors
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
    }
  }, [progress, mounted]);

  const toggleSection = useCallback((topicSlug: string, sectionId: string) => {
    setProgress((prev) => {
      const sections = prev.completedSections[topicSlug] || [];
      const isCompleted = sections.includes(sectionId);
      const updated = isCompleted
        ? sections.filter((s) => s !== sectionId)
        : [...sections, sectionId];
      return {
        ...prev,
        completedSections: {
          ...prev.completedSections,
          [topicSlug]: updated,
        },
      };
    });
  }, []);

  const toggleTopic = useCallback((topicSlug: string) => {
    setProgress((prev) => {
      const isCompleted = prev.completedTopics.includes(topicSlug);
      return {
        ...prev,
        completedTopics: isCompleted
          ? prev.completedTopics.filter((t) => t !== topicSlug)
          : [...prev.completedTopics, topicSlug],
      };
    });
  }, []);

  const isSectionCompleted = useCallback(
    (topicSlug: string, sectionId: string) => {
      return (progress.completedSections[topicSlug] || []).includes(sectionId);
    },
    [progress]
  );

  const isTopicCompleted = useCallback(
    (topicSlug: string) => {
      return progress.completedTopics.includes(topicSlug);
    },
    [progress]
  );

  const getTopicProgress = useCallback(
    (topicSlug: string, totalSections: number) => {
      if (totalSections === 0) return 0;
      const completed = (progress.completedSections[topicSlug] || []).length;
      return Math.round((completed / totalSections) * 100);
    },
    [progress]
  );

  const totalCompleted = progress.completedTopics.length;

  return (
    <ProgressContext.Provider
      value={{
        progress,
        toggleSection,
        toggleTopic,
        isSectionCompleted,
        isTopicCompleted,
        getTopicProgress,
        totalCompleted,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgressContext() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgressContext must be used within ProgressProvider");
  }
  return context;
}
