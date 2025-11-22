import type { Lesson } from "@/types";

export const operators: Lesson = {
  slug: "operators",
  title: "Operadores",
  description: "Conoce los operadores aritméticos, de comparación, lógicos y de asignación.",
  icon: "🔧",
  color: "#EC4899",
  sections: [
    {
      id: "arithmetic",
      title: "Operadores Aritméticos",
      explanation: "Los operadores aritméticos realizan operaciones matemáticas básicas. La mayoría son iguales en todos los lenguajes, pero hay diferencias importantes como la división entera.",
      codeExamples: [
        { language: "python", code: `# operadores aritmeticos\na = 10\nb = 3\n\nprint(a + b)   # 13 (suma)\nprint(a - b)   # 7  (resta)\nprint(a * b)   # 30 (multiplicacion)\nprint(a / b)   # 3.333... (division real)\nprint(a // b)  # 3  (division entera)\nprint(a % b)   # 1  (modulo/resto)\nprint(a ** b)  # 1000 (potencia)` },
        { language: "javascript", code: `// operadores aritmeticos\nlet a = 10;\nlet b = 3;\n\nconsole.log(a + b);  // 13\nconsole.log(a - b);  // 7\nconsole.log(a * b);  // 30\nconsole.log(a / b);  // 3.333...\nconsole.log(Math.floor(a / b)); // 3 (division entera)\nconsole.log(a % b);  // 1 (modulo)\nconsole.log(a ** b); // 1000 (potencia)` },
        { language: "java", code: `// operadores aritmeticos\nint a = 10;\nint b = 3;\n\nSystem.out.println(a + b);  // 13\nSystem.out.println(a - b);  // 7\nSystem.out.println(a * b);  // 30\nSystem.out.println(a / b);  // 3 (division entera!)\nSystem.out.println(a % b);  // 1\nSystem.out.println(Math.pow(a, b)); // 1000.0\n\n// para division real, usar double\ndouble resultado = (double) a / b;  // 3.333...` },
        { language: "cpp", code: `// operadores aritmeticos\nint a = 10;\nint b = 3;\n\ncout << a + b << endl;  // 13\ncout << a - b << endl;  // 7\ncout << a * b << endl;  // 30\ncout << a / b << endl;  // 3 (division entera!)\ncout << a % b << endl;  // 1\ncout << pow(a, b) << endl; // 1000\n\n// para division real\ndouble resultado = (double)a / b;  // 3.333...` },
      ],
    },
    {
      id: "comparison",
      title: "Operadores de Comparación",
      explanation: "Los operadores de comparación comparan dos valores y devuelven un booleano. JavaScript tiene una peculiaridad con == vs === que los otros lenguajes no tienen.",
      codeExamples: [
        { language: "python", code: `# operadores de comparacion\na = 10\nb = 5\n\nprint(a == b)   # False (igual a)\nprint(a != b)   # True  (distinto de)\nprint(a > b)    # True  (mayor que)\nprint(a < b)    # False (menor que)\nprint(a >= b)   # True  (mayor o igual)\nprint(a <= b)   # False (menor o igual)\n\n# comparar strings\nprint("hola" == "hola")  # True\nprint("abc" < "abd")     # True (lexicografico)` },
        { language: "javascript", code: `// operadores de comparacion\nlet a = 10;\nlet b = 5;\n\nconsole.log(a == b);   // false\nconsole.log(a != b);   // true\nconsole.log(a > b);    // true\nconsole.log(a < b);    // false\nconsole.log(a >= b);   // true\nconsole.log(a <= b);   // false\n\n// == vs === (importante!)\nconsole.log(5 == "5");   // true  (convierte tipos)\nconsole.log(5 === "5");  // false (compara tipo tambien)\n// siempre usar === en javascript` },
        { language: "java", code: `// operadores de comparacion\nint a = 10;\nint b = 5;\n\nSystem.out.println(a == b);  // false\nSystem.out.println(a != b);  // true\nSystem.out.println(a > b);   // true\nSystem.out.println(a < b);   // false\nSystem.out.println(a >= b);  // true\nSystem.out.println(a <= b);  // false\n\n// para Strings usar .equals()\nString s1 = "hola";\nString s2 = "hola";\nSystem.out.println(s1.equals(s2)); // true` },
        { language: "cpp", code: `// operadores de comparacion\nint a = 10;\nint b = 5;\n\ncout << (a == b) << endl;  // 0 (false)\ncout << (a != b) << endl;  // 1 (true)\ncout << (a > b) << endl;   // 1\ncout << (a < b) << endl;   // 0\ncout << (a >= b) << endl;  // 1\ncout << (a <= b) << endl;  // 0\n\n// strings se pueden comparar con ==\nstring s1 = "hola";\nstring s2 = "hola";\ncout << (s1 == s2) << endl;  // 1 (true)` },
      ],
    },
    {
      id: "logical",
      title: "Operadores Lógicos",
      explanation: "Los operadores lógicos combinan expresiones booleanas. Python usa palabras (and, or, not), mientras que los demás usan símbolos (&&, ||, !).",
      codeExamples: [
        { language: "python", code: `# operadores logicos\na = True\nb = False\n\nprint(a and b)  # False\nprint(a or b)   # True\nprint(not a)    # False\n\n# ejemplo practico\nedad = 20\ntiene_id = True\n\nif edad >= 18 and tiene_id:\n    print("Puede entrar")\n\n# evaluacion de cortocircuito\nnombre = "" or "anonimo"  # "anonimo"` },
        { language: "javascript", code: `// operadores logicos\nlet a = true;\nlet b = false;\n\nconsole.log(a && b);  // false\nconsole.log(a || b);  // true\nconsole.log(!a);      // false\n\n// ejemplo practico\nlet edad = 20;\nlet tieneId = true;\n\nif (edad >= 18 && tieneId) {\n  console.log("Puede entrar");\n}\n\n// operador nullish coalescing\nlet nombre = null ?? "anonimo"; // "anonimo"` },
        { language: "java", code: `// operadores logicos\nboolean a = true;\nboolean b = false;\n\nSystem.out.println(a && b);  // false\nSystem.out.println(a || b);  // true\nSystem.out.println(!a);      // false\n\n// ejemplo practico\nint edad = 20;\nboolean tieneId = true;\n\nif (edad >= 18 && tieneId) {\n  System.out.println("Puede entrar");\n}\n\n// & y | evaluan ambos lados siempre\n// && y || tienen cortocircuito` },
        { language: "cpp", code: `// operadores logicos\nbool a = true;\nbool b = false;\n\ncout << (a && b) << endl;  // 0 (false)\ncout << (a || b) << endl;  // 1 (true)\ncout << (!a) << endl;      // 0 (false)\n\n// ejemplo practico\nint edad = 20;\nbool tieneId = true;\n\nif (edad >= 18 && tieneId) {\n  cout << "Puede entrar" << endl;\n}\n\n// tambien se pueden usar: and, or, not\nif (edad >= 18 and tieneId) { /* valido */ }` },
      ],
    },
    {
      id: "assignment",
      title: "Operadores de Asignación",
      explanation: "Los operadores de asignación combinan una operación con la asignación del resultado. Son atajos que hacen el código más conciso.",
      codeExamples: [
        { language: "python", code: `# operadores de asignacion\nx = 10\n\nx += 5   # x = x + 5  -> 15\nx -= 3   # x = x - 3  -> 12\nx *= 2   # x = x * 2  -> 24\nx /= 4   # x = x / 4  -> 6.0\nx //= 2  # x = x // 2 -> 3.0\nx %= 2   # x = x % 2  -> 1.0\nx **= 3  # x = x ** 3 -> 1.0\n\nprint(x)` },
        { language: "javascript", code: `// operadores de asignacion\nlet x = 10;\n\nx += 5;   // x = x + 5  -> 15\nx -= 3;   // x = x - 3  -> 12\nx *= 2;   // x = x * 2  -> 24\nx /= 4;   // x = x / 4  -> 6\nx %= 4;   // x = x % 4  -> 2\nx **= 3;  // x = x ** 3 -> 8\n\n// incremento y decremento\nlet y = 5;\ny++;  // y = 6\ny--;  // y = 5\n\nconsole.log(x, y);` },
        { language: "java", code: `// operadores de asignacion\nint x = 10;\n\nx += 5;   // x = x + 5  -> 15\nx -= 3;   // x = x - 3  -> 12\nx *= 2;   // x = x * 2  -> 24\nx /= 4;   // x = x / 4  -> 6\nx %= 4;   // x = x % 4  -> 2\n\n// incremento y decremento\nint y = 5;\ny++;  // y = 6\ny--;  // y = 5\n\nSystem.out.println(x);\nSystem.out.println(y);` },
        { language: "cpp", code: `// operadores de asignacion\nint x = 10;\n\nx += 5;   // x = x + 5  -> 15\nx -= 3;   // x = x - 3  -> 12\nx *= 2;   // x = x * 2  -> 24\nx /= 4;   // x = x / 4  -> 6\nx %= 4;   // x = x % 4  -> 2\n\n// incremento y decremento\nint y = 5;\ny++;  // y = 6 (post-incremento)\n++y;  // y = 7 (pre-incremento)\ny--;  // y = 6\n\ncout << x << endl;\ncout << y << endl;` },
      ],
    },
  ],
};
