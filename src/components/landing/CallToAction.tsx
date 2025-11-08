"use client";

import { motion } from "motion/react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CallToAction() {
  return (
    <section className="px-4 py-24 sm:px-6">
      <ScrollReveal>
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-12 dark:border-gray-800 dark:from-blue-950/30 dark:to-indigo-950/30"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              Listo para empezar?
            </h2>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              6 temas fundamentales con ejemplos prácticos en 4 lenguajes te
              esperan. No necesitas experiencia previa.
            </p>
            <Button href="/topics" size="lg">
              Explorar los temas
            </Button>
          </motion.div>
        </div>
      </ScrollReveal>
    </section>
  );
}
