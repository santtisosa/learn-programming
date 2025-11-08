"use client";

import { motion } from "motion/react";
import Button from "@/components/ui/Button";

const floatingSnippets = [
  { code: 'print("Hello!")', x: "10%", y: "20%", delay: 0 },
  { code: "const x = 42;", x: "75%", y: "15%", delay: 0.5 },
  { code: "for i in range(10):", x: "85%", y: "55%", delay: 1 },
  { code: "System.out.println()", x: "5%", y: "65%", delay: 1.5 },
  { code: "std::vector<int> v;", x: "70%", y: "75%", delay: 2 },
  { code: "if (x > 0) {}", x: "20%", y: "80%", delay: 0.8 },
];

const words = ["Aprende", "a", "programar", "de", "forma", "interactiva"];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4">
      {/* floating code snippets */}
      <div className="pointer-events-none absolute inset-0">
        {floatingSnippets.map((snippet, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xs text-blue-400/20 dark:text-blue-300/10 sm:text-sm"
            style={{ left: snippet.x, top: snippet.y }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 0.6, 0.6, 0],
              y: [20, 0, -10, -30],
            }}
            transition={{
              duration: 6,
              delay: snippet.delay,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            {snippet.code}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          className="mb-4 inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          4 lenguajes, 6 temas, 100% gratis
        </motion.div>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className={`mr-3 inline-block ${
                word === "programar" ? "text-blue-600 dark:text-blue-400" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.3 + i * 0.12,
                ease: "easeOut",
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400 sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          Domina los fundamentos de Python, JavaScript, Java y C++ con
          explicaciones claras y ejemplos de código que puedes explorar al
          instante.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Button href="/topics" size="lg">
            Empezar a aprender
          </Button>
          <Button href="/progress" variant="secondary" size="lg">
            Ver mi progreso
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
