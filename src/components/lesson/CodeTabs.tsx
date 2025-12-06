"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import CodeBlock from "./CodeBlock";
import { languageLabels, type Language, type CodeExample } from "@/types";

interface CodeTabsProps {
  examples: CodeExample[];
}

const tabOrder: Language[] = ["python", "javascript", "java", "cpp"];

export default function CodeTabs({ examples }: CodeTabsProps) {
  const [active, setActive] = useState<Language>(examples[0]?.language || "python");

  const sortedExamples = tabOrder.filter((lang) =>
    examples.some((e) => e.language === lang)
  );

  const currentExample = examples.find((e) => e.language === active);

  return (
    <div className="my-4">
      <div className="relative flex border-b border-gray-200 dark:border-gray-700">
        {sortedExamples.map((lang) => (
          <button
            key={lang}
            onClick={() => setActive(lang)}
            className={`relative px-4 py-2.5 text-sm font-medium transition-colors ${
              active === lang
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
          >
            {languageLabels[lang]}
            {active === lang && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                layoutId="code-tab-indicator"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {currentExample && (
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mt-3"
          >
            <CodeBlock code={currentExample.code} language={active} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
