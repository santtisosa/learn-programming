import type { Lesson } from "@/types";

export const controlFlow: Lesson = {
  slug: "control-flow",
  title: "Flujo de Control",
  description: "Aprende a tomar decisiones en tu código con condicionales if/else y switch.",
  icon: "🔀",
  color: "#10B981",
  sections: [
    {
      id: "if-else",
      title: "Condicional If / Else",
      explanation: "La estructura if/else permite ejecutar código diferente según una condición. Python usa indentación en lugar de llaves, lo que lo hace visualmente limpio.",
      codeExamples: [
        { language: "python", code: `# condicional if/else\nedad = 18\n\nif edad >= 18:\n    print("Eres mayor de edad")\nelse:\n    print("Eres menor de edad")\n\n# if/elif/else\nnota = 85\n\nif nota >= 90:\n    print("Sobresaliente")\nelif nota >= 80:\n    print("Notable")\nelif nota >= 70:\n    print("Aprobado")\nelse:\n    print("Suspendido")` },
        { language: "javascript", code: `// condicional if/else\nlet edad = 18;\n\nif (edad >= 18) {\n  console.log("Eres mayor de edad");\n} else {\n  console.log("Eres menor de edad");\n}\n\n// if/else if/else\nlet nota = 85;\n\nif (nota >= 90) {\n  console.log("Sobresaliente");\n} else if (nota >= 80) {\n  console.log("Notable");\n} else if (nota >= 70) {\n  console.log("Aprobado");\n} else {\n  console.log("Suspendido");\n}` },
        { language: "java", code: `// condicional if/else\nint edad = 18;\n\nif (edad >= 18) {\n  System.out.println("Eres mayor de edad");\n} else {\n  System.out.println("Eres menor de edad");\n}\n\n// if/else if/else\nint nota = 85;\n\nif (nota >= 90) {\n  System.out.println("Sobresaliente");\n} else if (nota >= 80) {\n  System.out.println("Notable");\n} else if (nota >= 70) {\n  System.out.println("Aprobado");\n} else {\n  System.out.println("Suspendido");\n}` },
        { language: "cpp", code: `// condicional if/else\nint edad = 18;\n\nif (edad >= 18) {\n  cout << "Eres mayor de edad" << endl;\n} else {\n  cout << "Eres menor de edad" << endl;\n}\n\n// if/else if/else\nint nota = 85;\n\nif (nota >= 90) {\n  cout << "Sobresaliente" << endl;\n} else if (nota >= 80) {\n  cout << "Notable" << endl;\n} else if (nota >= 70) {\n  cout << "Aprobado" << endl;\n} else {\n  cout << "Suspendido" << endl;\n}` },
      ],
    },
    {
      id: "ternary",
      title: "Operador Ternario",
      explanation: "El operador ternario es una forma compacta de escribir un if/else simple en una sola línea. Es ideal para asignar valores condicionalmente.",
      codeExamples: [
        { language: "python", code: `# operador ternario en python\nedad = 20\nestatus = "adulto" if edad >= 18 else "menor"\nprint(estatus)  # adulto\n\n# se puede usar en expresiones\nprint("Par" if 10 % 2 == 0 else "Impar")\n\n# ternario anidado (no recomendado)\nnota = 85\nresultado = "A" if nota >= 90 else "B" if nota >= 80 else "C"` },
        { language: "javascript", code: `// operador ternario en javascript\nlet edad = 20;\nlet estatus = edad >= 18 ? "adulto" : "menor";\nconsole.log(estatus);  // adulto\n\n// se puede usar en expresiones\nconsole.log(10 % 2 === 0 ? "Par" : "Impar");\n\n// en JSX es muy comun\n// <p>{isLoggedIn ? "Bienvenido" : "Inicia sesion"}</p>` },
        { language: "java", code: `// operador ternario en java\nint edad = 20;\nString estatus = edad >= 18 ? "adulto" : "menor";\nSystem.out.println(estatus);  // adulto\n\n// util para asignaciones\nint a = 10, b = 20;\nint mayor = a > b ? a : b;\nSystem.out.println(mayor);  // 20` },
        { language: "cpp", code: `// operador ternario en c++\nint edad = 20;\nstring estatus = edad >= 18 ? "adulto" : "menor";\ncout << estatus << endl;  // adulto\n\n// util para asignaciones\nint a = 10, b = 20;\nint mayor = a > b ? a : b;\ncout << mayor << endl;  // 20` },
      ],
    },
    {
      id: "switch",
      title: "Switch / Match",
      explanation: "Switch permite comparar un valor contra múltiples opciones de forma más limpia que una cadena de if/else. Python introdujo match/case en la versión 3.10.",
      codeExamples: [
        { language: "python", code: `# match/case (python 3.10+)\ndia = "lunes"\n\nmatch dia:\n    case "lunes":\n        print("Inicio de semana")\n    case "viernes":\n        print("Casi fin de semana")\n    case "sabado" | "domingo":\n        print("Fin de semana!")\n    case _:\n        print("Dia normal")\n\n# antes de python 3.10 se usaba if/elif\n# o un diccionario como alternativa` },
        { language: "javascript", code: `// switch en javascript\nlet dia = "lunes";\n\nswitch (dia) {\n  case "lunes":\n    console.log("Inicio de semana");\n    break;\n  case "viernes":\n    console.log("Casi fin de semana");\n    break;\n  case "sabado":\n  case "domingo":\n    console.log("Fin de semana!");\n    break;\n  default:\n    console.log("Dia normal");\n}\n// no olvidar el break!` },
        { language: "java", code: `// switch en java\nString dia = "lunes";\n\nswitch (dia) {\n  case "lunes":\n    System.out.println("Inicio de semana");\n    break;\n  case "viernes":\n    System.out.println("Casi fin de semana");\n    break;\n  case "sabado":\n  case "domingo":\n    System.out.println("Fin de semana!");\n    break;\n  default:\n    System.out.println("Dia normal");\n}\n\n// switch expression (java 14+)\n// String msg = switch (dia) { case "lunes" -> "Inicio"; };` },
        { language: "cpp", code: `// switch en c++ (solo con enteros/chars)\nint dia = 1; // 1=lunes, 7=domingo\n\nswitch (dia) {\n  case 1:\n    cout << "Inicio de semana" << endl;\n    break;\n  case 5:\n    cout << "Casi fin de semana" << endl;\n    break;\n  case 6:\n  case 7:\n    cout << "Fin de semana!" << endl;\n    break;\n  default:\n    cout << "Dia normal" << endl;\n}\n// switch en c++ no soporta strings` },
      ],
    },
    {
      id: "nested-conditions",
      title: "Condiciones Anidadas",
      explanation: "Puedes anidar condicionales dentro de otros, aunque es recomendable no exceder 2-3 niveles de profundidad para mantener el código legible.",
      codeExamples: [
        { language: "python", code: `# condiciones anidadas\nedad = 25\ntiene_licencia = True\ntiene_multas = False\n\nif edad >= 18:\n    if tiene_licencia:\n        if not tiene_multas:\n            print("Puede conducir")\n        else:\n            print("Tiene multas pendientes")\n    else:\n        print("Necesita licencia")\nelse:\n    print("Es menor de edad")\n\n# mejor: combinar condiciones\nif edad >= 18 and tiene_licencia and not tiene_multas:\n    print("Puede conducir")` },
        { language: "javascript", code: `// condiciones anidadas\nlet edad = 25;\nlet tieneLicencia = true;\nlet tieneMultas = false;\n\nif (edad >= 18) {\n  if (tieneLicencia) {\n    if (!tieneMultas) {\n      console.log("Puede conducir");\n    } else {\n      console.log("Tiene multas pendientes");\n    }\n  } else {\n    console.log("Necesita licencia");\n  }\n} else {\n  console.log("Es menor de edad");\n}\n\n// mejor: early return o combinar\nif (edad >= 18 && tieneLicencia && !tieneMultas) {\n  console.log("Puede conducir");\n}` },
        { language: "java", code: `// condiciones anidadas\nint edad = 25;\nboolean tieneLicencia = true;\nboolean tieneMultas = false;\n\nif (edad >= 18) {\n  if (tieneLicencia) {\n    if (!tieneMultas) {\n      System.out.println("Puede conducir");\n    } else {\n      System.out.println("Tiene multas");\n    }\n  } else {\n    System.out.println("Necesita licencia");\n  }\n} else {\n  System.out.println("Es menor de edad");\n}\n\n// mejor: combinar condiciones\nif (edad >= 18 && tieneLicencia && !tieneMultas) {\n  System.out.println("Puede conducir");\n}` },
        { language: "cpp", code: `// condiciones anidadas\nint edad = 25;\nbool tieneLicencia = true;\nbool tieneMultas = false;\n\nif (edad >= 18) {\n  if (tieneLicencia) {\n    if (!tieneMultas) {\n      cout << "Puede conducir" << endl;\n    } else {\n      cout << "Tiene multas" << endl;\n    }\n  } else {\n    cout << "Necesita licencia" << endl;\n  }\n} else {\n  cout << "Es menor de edad" << endl;\n}\n\n// mejor: combinar condiciones\nif (edad >= 18 && tieneLicencia && !tieneMultas) {\n  cout << "Puede conducir" << endl;\n}` },
      ],
    },
  ],
};
