import Link from "next/link";
import { SITE_NAME, NAVIGATION_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div>
            <Link
              href="/"
              className="text-lg font-bold text-gray-900 dark:text-white"
            >
              <span className="text-blue-600 dark:text-blue-400">&lt;</span>
              {SITE_NAME}
              <span className="text-blue-600 dark:text-blue-400">/&gt;</span>
            </Link>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Aprende programación de forma interactiva
            </p>
          </div>

          <div className="flex gap-6">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6 text-center dark:border-gray-800">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            {new Date().getFullYear()} {SITE_NAME}. Hecho con fines educativos.
          </p>
        </div>
      </div>
    </footer>
  );
}
