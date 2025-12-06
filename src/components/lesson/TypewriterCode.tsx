"use client";

import { Highlight, themes } from "prism-react-renderer";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useTheme } from "@/hooks/useTheme";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { Language } from "@/types";

interface TypewriterCodeProps {
  code: string;
  language: Language;
  speed?: number;
}

const prismLanguageMap: Record<Language, string> = {
  python: "python",
  javascript: "javascript",
  java: "java",
  cpp: "cpp",
};

export default function TypewriterCode({
  code,
  language,
  speed = 25,
}: TypewriterCodeProps) {
  const { theme } = useTheme();
  const { ref, isVisible } = useScrollAnimation({ triggerOnce: true });
  const { displayed, isComplete } = useTypewriter(
    isVisible ? code : "",
    speed,
    300
  );

  const displayCode = displayed || " ";

  return (
    <div ref={ref} className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
      <Highlight
        theme={theme === "dark" ? themes.nightOwl : themes.nightOwlLight}
        code={displayCode}
        language={prismLanguageMap[language]}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className="overflow-x-auto p-4 text-sm leading-relaxed"
            style={{ ...style, backgroundColor: "transparent" }}
          >
            <code>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
              {!isComplete && (
                <span className="inline-block h-4 w-2 animate-pulse bg-blue-500" />
              )}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  );
}
