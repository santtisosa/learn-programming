# LearnProgramming

Plataforma web interactiva para aprender los fundamentos de la programación con ejemplos en Python, JavaScript, Java y C++.

## Sobre el proyecto

Construí esta web como proyecto personal para practicar Next.js y para tener un recurso de referencia rápida cuando estudio diferentes lenguajes de programación. La idea es poder comparar la sintaxis de un mismo concepto entre 4 lenguajes populares.

## Funcionalidades

- 6 temas fundamentales con explicaciones claras
- Ejemplos de código en 4 lenguajes (Python, JS, Java, C++)
- Syntax highlighting con Prism
- Modo oscuro/claro persistente
- Seguimiento de progreso con localStorage
- Animaciones fluidas con Framer Motion
- Totalmente responsive

## Temas cubiertos

1. Variables y Tipos de Datos
2. Operadores
3. Flujo de Control (if/else, switch)
4. Bucles (for, while)
5. Funciones
6. Arrays y Listas

## Tech stack

- Next.js 16 con App Router
- TypeScript
- Tailwind CSS v4
- Motion (Framer Motion)
- prism-react-renderer
- Deploy en GitHub Pages

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000/learn-programming](http://localhost:3000/learn-programming) en el navegador.

## Build

```bash
npm run build
npx serve out
```

## Deploy

El deploy es automático a GitHub Pages con GitHub Actions al hacer push a `main`.
