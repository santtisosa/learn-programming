import { lessons, getLessonBySlug, getAdjacentLessons } from "@/data/topics";
import { notFound } from "next/navigation";
import LessonPageClient from "./LessonPageClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return lessons.map((lesson) => ({
    slug: lesson.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  if (!lesson) return { title: "No encontrado" };

  return {
    title: `${lesson.title} - LearnProgramming`,
    description: lesson.description,
  };
}

export default async function LessonPage({ params }: PageProps) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) {
    notFound();
  }

  const { prev, next } = getAdjacentLessons(slug);

  return <LessonPageClient lesson={lesson} prev={prev} next={next} />;
}
