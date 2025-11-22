import type { Topic } from "@/types";
import { variablesAndDataTypes } from "./lessons/variables-and-data-types";
import { operators } from "./lessons/operators";
import { controlFlow } from "./lessons/control-flow";
import { loops } from "./lessons/loops";
import { functions } from "./lessons/functions";
import { arraysAndLists } from "./lessons/arrays-and-lists";

export const lessons = [
  variablesAndDataTypes,
  operators,
  controlFlow,
  loops,
  functions,
  arraysAndLists,
];

export const topics: Topic[] = lessons.map((lesson) => ({
  slug: lesson.slug,
  title: lesson.title,
  description: lesson.description,
  icon: lesson.icon,
  color: lesson.color,
  totalSections: lesson.sections.length,
}));

export function getLessonBySlug(slug: string) {
  return lessons.find((l) => l.slug === slug);
}

export function getAdjacentLessons(slug: string) {
  const index = lessons.findIndex((l) => l.slug === slug);
  return {
    prev: index > 0 ? lessons[index - 1] : null,
    next: index < lessons.length - 1 ? lessons[index + 1] : null,
  };
}
