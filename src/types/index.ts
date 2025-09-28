export type Language = "python" | "javascript" | "java" | "cpp";

export interface CodeExample {
  language: Language;
  code: string;
}

export interface LessonSection {
  id: string;
  title: string;
  explanation: string;
  codeExamples: CodeExample[];
}

export interface Lesson {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  sections: LessonSection[];
}

export interface Topic {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  totalSections: number;
}

export interface ProgressState {
  completedTopics: string[];
  completedSections: Record<string, string[]>;
}

export const languageLabels: Record<Language, string> = {
  python: "Python",
  javascript: "JavaScript",
  java: "Java",
  cpp: "C++",
};

export const languageColors: Record<Language, string> = {
  python: "#3572A5",
  javascript: "#F7DF1E",
  java: "#B07219",
  cpp: "#00599C",
};
