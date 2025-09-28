export const SITE_NAME = "LearnProgramming";
export const SITE_DESCRIPTION = "Aprende los fundamentos de la programación con ejemplos interactivos en Python, JavaScript, Java y C++";
export const BASE_PATH = "/learn-programming";

export const NAVIGATION_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/topics", label: "Temas" },
  { href: "/progress", label: "Progreso" },
];

export const STORAGE_KEYS = {
  THEME: "lp-theme",
  PROGRESS: "lp-progress",
} as const;
