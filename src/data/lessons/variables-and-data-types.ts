import type { Lesson } from "@/types";

export const variablesAndDataTypes: Lesson = {
  slug: "variables-and-data-types",
  title: "Variables y Tipos de Datos",
  description: "Aprende a declarar variables y conoce los tipos de datos fundamentales en cada lenguaje.",
  icon: "📦",
  color: "#8B5CF6",
  sections: [
    {
      id: "declaring-variables",
      title: "Declaración de Variables",
      explanation: "Una variable es un espacio en memoria donde almacenamos un valor. Cada lenguaje tiene su propia forma de declararlas. Python no requiere especificar el tipo, JavaScript usa let y const, Java exige el tipo, y C++ también necesita el tipo explícito.",
      codeExamples: [
        { language: "python", code: `# declarar variables en python\nnombre = "Santiago"\nedad = 21\naltura = 1.75\nes_estudiante = True\n\nprint(nombre)\nprint(edad)` },
        { language: "javascript", code: `// declarar variables en javascript\nlet nombre = "Santiago";\nconst edad = 21;\nlet altura = 1.75;\nlet esEstudiante = true;\n\nconsole.log(nombre);\nconsole.log(edad);` },
        { language: "java", code: `// declarar variables en java\npublic class Main {\n  public static void main(String[] args) {\n    String nombre = "Santiago";\n    int edad = 21;\n    double altura = 1.75;\n    boolean esEstudiante = true;\n\n    System.out.println(nombre);\n    System.out.println(edad);\n  }\n}` },
        { language: "cpp", code: `// declarar variables en c++\n#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n  string nombre = "Santiago";\n  int edad = 21;\n  double altura = 1.75;\n  bool esEstudiante = true;\n\n  cout << nombre << endl;\n  cout << edad << endl;\n  return 0;\n}` },
      ],
    },
    {
      id: "numeric-types",
      title: "Tipos Numéricos",
      explanation: "Los números se dividen generalmente en enteros (int) y decimales (float/double). Python maneja esto automáticamente, mientras que Java y C++ distinguen entre int, float, double y long entre otros.",
      codeExamples: [
        { language: "python", code: `# tipos numericos\nentero = 42\ndecimal = 3.14\nnegativo = -10\ngrande = 1_000_000  # separador visual\n\n# python maneja numeros grandes sin problemas\nenorme = 10 ** 100\nprint(type(entero))   # <class 'int'>\nprint(type(decimal))  # <class 'float'>` },
        { language: "javascript", code: `// tipos numericos\nlet entero = 42;\nlet decimal = 3.14;\nlet negativo = -10;\nlet grande = 1_000_000;\n\n// todo es "number" en javascript\nconsole.log(typeof entero);   // "number"\nconsole.log(typeof decimal);  // "number"\n\n// BigInt para numeros muy grandes\nlet enorme = 9007199254740991n;` },
        { language: "java", code: `// tipos numericos\nint entero = 42;\ndouble decimal = 3.14;\nfloat otroDecimal = 2.5f;\nlong grande = 1_000_000L;\nshort pequeno = 100;\nbyte muyPequeno = 127;\n\nSystem.out.println(entero);\nSystem.out.println(decimal);` },
        { language: "cpp", code: `// tipos numericos\nint entero = 42;\ndouble decimal = 3.14;\nfloat otroDecimal = 2.5f;\nlong grande = 1000000L;\nlong long muyGrande = 9000000000LL;\nshort pequeno = 100;\n\ncout << entero << endl;\ncout << decimal << endl;` },
      ],
    },
    {
      id: "strings",
      title: "Cadenas de Texto (Strings)",
      explanation: "Los strings son secuencias de caracteres. Todos los lenguajes ofrecen formas de crear, concatenar y manipular texto, aunque la sintaxis varía bastante.",
      codeExamples: [
        { language: "python", code: `# strings en python\nnombre = "Santiago"\napellido = 'Sosa'\n\n# concatenacion\ncompleto = nombre + " " + apellido\n\n# f-strings (interpolacion)\nsaludo = f"Hola, {nombre}!"\n\n# metodos utiles\nprint(nombre.upper())       # SANTIAGO\nprint(nombre.lower())       # santiago\nprint(len(nombre))          # 8\nprint(nombre[0])            # S` },
        { language: "javascript", code: `// strings en javascript\nlet nombre = "Santiago";\nlet apellido = 'Sosa';\n\n// concatenacion\nlet completo = nombre + " " + apellido;\n\n// template literals (interpolacion)\nlet saludo = \`Hola, \${nombre}!\`;\n\n// metodos utiles\nconsole.log(nombre.toUpperCase()); // SANTIAGO\nconsole.log(nombre.toLowerCase()); // santiago\nconsole.log(nombre.length);        // 8\nconsole.log(nombre[0]);            // S` },
        { language: "java", code: `// strings en java\nString nombre = "Santiago";\nString apellido = "Sosa";\n\n// concatenacion\nString completo = nombre + " " + apellido;\n\n// metodos utiles\nSystem.out.println(nombre.toUpperCase()); // SANTIAGO\nSystem.out.println(nombre.toLowerCase()); // santiago\nSystem.out.println(nombre.length());      // 8\nSystem.out.println(nombre.charAt(0));     // S\n\n// comparar strings (NO usar ==)\nboolean iguales = nombre.equals("Santiago");` },
        { language: "cpp", code: `// strings en c++\n#include <string>\nusing namespace std;\n\nstring nombre = "Santiago";\nstring apellido = "Sosa";\n\n// concatenacion\nstring completo = nombre + " " + apellido;\n\n// metodos utiles\ncout << nombre.length() << endl;   // 8\ncout << nombre[0] << endl;         // S\ncout << nombre.substr(0, 4) << endl; // Sant\n\n// comparar strings (se puede usar ==)\nbool iguales = (nombre == "Santiago");` },
      ],
    },
    {
      id: "booleans-and-null",
      title: "Booleanos y Valores Nulos",
      explanation: "Los booleanos representan verdadero o falso. Los valores nulos indican la ausencia de valor. Cada lenguaje tiene su propia forma de representarlos.",
      codeExamples: [
        { language: "python", code: `# booleanos\nverdadero = True\nfalso = False\n\n# None es el valor nulo en python\nvalor = None\n\nif valor is None:\n    print("No hay valor")\n\n# valores falsy\nprint(bool(0))      # False\nprint(bool(""))     # False\nprint(bool([]))     # False\nprint(bool(None))   # False` },
        { language: "javascript", code: `// booleanos\nlet verdadero = true;\nlet falso = false;\n\n// null y undefined\nlet sinValor = null;\nlet noDefinido = undefined;\n\nif (sinValor === null) {\n  console.log("No hay valor");\n}\n\n// valores falsy\nconsole.log(Boolean(0));         // false\nconsole.log(Boolean(""));        // false\nconsole.log(Boolean(null));      // false\nconsole.log(Boolean(undefined)); // false` },
        { language: "java", code: `// booleanos\nboolean verdadero = true;\nboolean falso = false;\n\n// null solo para objetos, no primitivos\nString texto = null;\n\nif (texto == null) {\n  System.out.println("No hay valor");\n}\n\n// Integer vs int (wrapper vs primitivo)\nInteger numero = null;  // esto es valido\n// int otro = null;     // esto NO compila` },
        { language: "cpp", code: `// booleanos\nbool verdadero = true;\nbool falso = false;\n\n// nullptr en c++ moderno\nint* puntero = nullptr;\n\nif (puntero == nullptr) {\n  cout << "No hay valor" << endl;\n}\n\n// 0 se evalua como false, cualquier otro como true\nif (0) { /* no se ejecuta */ }\nif (1) { cout << "Verdadero" << endl; }` },
      ],
    },
  ],
};
