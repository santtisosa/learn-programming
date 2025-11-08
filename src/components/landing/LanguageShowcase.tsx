"use client";

import Image from "next/image";
import { motion } from "motion/react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { BASE_PATH } from "@/lib/constants";

const languages = [
  {
    name: "Python",
    icon: `${BASE_PATH}/images/icons/python.svg`,
    color: "#3572A5",
    description: "Simple y legible, ideal para principiantes",
  },
  {
    name: "JavaScript",
    icon: `${BASE_PATH}/images/icons/javascript.svg`,
    color: "#F7DF1E",
    description: "El lenguaje de la web, versátil y dinámico",
  },
  {
    name: "Java",
    icon: `${BASE_PATH}/images/icons/java.svg`,
    color: "#B07219",
    description: "Robusto y multiplataforma, usado en empresas",
  },
  {
    name: "C++",
    icon: `${BASE_PATH}/images/icons/cpp.svg`,
    color: "#00599C",
    description: "Potente y eficiente, control total del hardware",
  },
];

export default function LanguageShowcase() {
  return (
    <section className="bg-gray-50 px-4 py-20 dark:bg-gray-900/50 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Aprende en 4 lenguajes
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-gray-600 dark:text-gray-400">
            Cada concepto viene con ejemplos en los 4 lenguajes para que puedas
            comparar y elegir el que más te guste.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {languages.map((lang, i) => (
            <ScrollReveal key={lang.name} delay={i * 0.1}>
              <motion.div
                className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-8 text-center dark:border-gray-800 dark:bg-gray-900"
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <div
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: `${lang.color}15` }}
                >
                  <Image
                    src={lang.icon}
                    alt={lang.name}
                    width={40}
                    height={40}
                  />
                </div>
                <h3
                  className="mb-2 text-lg font-bold"
                  style={{ color: lang.color }}
                >
                  {lang.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {lang.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
