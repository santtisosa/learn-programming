import type { Lesson } from "@/types";

export const loops: Lesson = {
  slug: "loops",
  title: "Bucles",
  description: "Aprende a repetir acciones con bucles for y while en cada lenguaje.",
  icon: "🔄",
  color: "#F59E0B",
  sections: [
    {
      id: "for-loop",
      title: "Bucle For",
      explanation: "El bucle for repite un bloque de código un número determinado de veces. Python usa range(), JavaScript tiene varias formas, y Java/C++ usan la sintaxis clásica con contador.",
      codeExamples: [
        { language: "python", code: `# bucle for con range\nfor i in range(5):\n    print(i)  # 0, 1, 2, 3, 4\n\n# range con inicio y fin\nfor i in range(2, 8):\n    print(i)  # 2, 3, 4, 5, 6, 7\n\n# range con paso\nfor i in range(0, 10, 2):\n    print(i)  # 0, 2, 4, 6, 8\n\n# iterar sobre una lista\nfrutas = ["manzana", "banana", "naranja"]\nfor fruta in frutas:\n    print(fruta)` },
        { language: "javascript", code: `// bucle for clasico\nfor (let i = 0; i < 5; i++) {\n  console.log(i);  // 0, 1, 2, 3, 4\n}\n\n// for...of (iterar valores)\nconst frutas = ["manzana", "banana", "naranja"];\nfor (const fruta of frutas) {\n  console.log(fruta);\n}\n\n// for...in (iterar indices/keys)\nfor (const index in frutas) {\n  console.log(index, frutas[index]);\n}\n\n// forEach (metodo de array)\nfrutas.forEach((fruta, i) => {\n  console.log(i, fruta);\n});` },
        { language: "java", code: `// bucle for clasico\nfor (int i = 0; i < 5; i++) {\n  System.out.println(i);  // 0, 1, 2, 3, 4\n}\n\n// for con paso\nfor (int i = 0; i < 10; i += 2) {\n  System.out.println(i);  // 0, 2, 4, 6, 8\n}\n\n// for-each (enhanced for)\nString[] frutas = {"manzana", "banana", "naranja"};\nfor (String fruta : frutas) {\n  System.out.println(fruta);\n}` },
        { language: "cpp", code: `// bucle for clasico\nfor (int i = 0; i < 5; i++) {\n  cout << i << endl;  // 0, 1, 2, 3, 4\n}\n\n// for con paso\nfor (int i = 0; i < 10; i += 2) {\n  cout << i << endl;  // 0, 2, 4, 6, 8\n}\n\n// range-based for (c++11)\nvector<string> frutas = {"manzana", "banana", "naranja"};\nfor (const string& fruta : frutas) {\n  cout << fruta << endl;\n}` },
      ],
    },
    {
      id: "while-loop",
      title: "Bucle While",
      explanation: "El bucle while repite un bloque mientras una condición sea verdadera. Es útil cuando no sabemos de antemano cuántas iteraciones necesitamos.",
      codeExamples: [
        { language: "python", code: `# bucle while\ncontador = 0\nwhile contador < 5:\n    print(contador)\n    contador += 1\n\n# while con condicion compleja\npassword = ""\nwhile password != "secreto":\n    password = input("Contraseña: ")\nprint("Acceso concedido")\n\n# while True con break\nwhile True:\n    texto = input("Escribe algo (q para salir): ")\n    if texto == "q":\n        break\n    print(f"Dijiste: {texto}")` },
        { language: "javascript", code: `// bucle while\nlet contador = 0;\nwhile (contador < 5) {\n  console.log(contador);\n  contador++;\n}\n\n// while con condicion\nlet intentos = 3;\nwhile (intentos > 0) {\n  console.log(\`Te quedan \${intentos} intentos\`);\n  intentos--;\n}\n\n// while true con break\nlet suma = 0;\nlet num = 1;\nwhile (true) {\n  suma += num;\n  if (suma > 100) break;\n  num++;\n}\nconsole.log(\`Suma: \${suma}\`);` },
        { language: "java", code: `// bucle while\nint contador = 0;\nwhile (contador < 5) {\n  System.out.println(contador);\n  contador++;\n}\n\n// while con condicion\nint intentos = 3;\nwhile (intentos > 0) {\n  System.out.println("Intentos: " + intentos);\n  intentos--;\n}\n\n// while true con break\nint suma = 0;\nint num = 1;\nwhile (true) {\n  suma += num;\n  if (suma > 100) break;\n  num++;\n}\nSystem.out.println("Suma: " + suma);` },
        { language: "cpp", code: `// bucle while\nint contador = 0;\nwhile (contador < 5) {\n  cout << contador << endl;\n  contador++;\n}\n\n// while con condicion\nint intentos = 3;\nwhile (intentos > 0) {\n  cout << "Intentos: " << intentos << endl;\n  intentos--;\n}\n\n// while true con break\nint suma = 0;\nint num = 1;\nwhile (true) {\n  suma += num;\n  if (suma > 100) break;\n  num++;\n}\ncout << "Suma: " << suma << endl;` },
      ],
    },
    {
      id: "do-while",
      title: "Bucle Do-While",
      explanation: "El bucle do-while ejecuta el bloque al menos una vez antes de verificar la condición. Python no tiene do-while nativo, pero se puede simular.",
      codeExamples: [
        { language: "python", code: `# python no tiene do-while\n# pero se puede simular con while True\n\n# simulacion de do-while\nwhile True:\n    numero = int(input("Ingresa un positivo: "))\n    if numero > 0:\n        break\n    print("Debe ser positivo!")\n\nprint(f"Ingresaste: {numero}")\n\n# otra forma\nnumero = -1  # valor inicial que no cumple\nwhile numero <= 0:\n    numero = int(input("Ingresa un positivo: "))\nprint(f"Ingresaste: {numero}")` },
        { language: "javascript", code: `// do-while en javascript\nlet numero;\ndo {\n  numero = parseInt(prompt("Ingresa un positivo:"));\n} while (isNaN(numero) || numero <= 0);\n\nconsole.log(\`Ingresaste: \${numero}\`);\n\n// ejemplo: menu interactivo\nlet opcion;\ndo {\n  console.log("1. Jugar");\n  console.log("2. Opciones");\n  console.log("3. Salir");\n  opcion = 3; // simulado\n} while (opcion !== 3);` },
        { language: "java", code: `// do-while en java\nimport java.util.Scanner;\nScanner sc = new Scanner(System.in);\n\nint numero;\ndo {\n  System.out.print("Ingresa un positivo: ");\n  numero = sc.nextInt();\n} while (numero <= 0);\n\nSystem.out.println("Ingresaste: " + numero);\n\n// ejemplo: validar entrada\nint opcion;\ndo {\n  System.out.println("1. Jugar");\n  System.out.println("2. Salir");\n  opcion = sc.nextInt();\n} while (opcion != 1 && opcion != 2);` },
        { language: "cpp", code: `// do-while en c++\nint numero;\ndo {\n  cout << "Ingresa un positivo: ";\n  cin >> numero;\n} while (numero <= 0);\n\ncout << "Ingresaste: " << numero << endl;\n\n// ejemplo: menu\nint opcion;\ndo {\n  cout << "1. Jugar" << endl;\n  cout << "2. Opciones" << endl;\n  cout << "3. Salir" << endl;\n  cin >> opcion;\n} while (opcion != 3);` },
      ],
    },
    {
      id: "break-continue",
      title: "Break y Continue",
      explanation: "Break sale del bucle completamente, mientras que continue salta a la siguiente iteración. Son herramientas útiles para controlar el flujo dentro de bucles.",
      codeExamples: [
        { language: "python", code: `# break - salir del bucle\nfor i in range(10):\n    if i == 5:\n        break\n    print(i)  # 0, 1, 2, 3, 4\n\n# continue - saltar iteracion\nfor i in range(10):\n    if i % 2 == 0:\n        continue\n    print(i)  # 1, 3, 5, 7, 9\n\n# buscar un elemento\nnumeros = [4, 7, 2, 9, 1, 5]\nfor num in numeros:\n    if num == 9:\n        print("Encontrado!")\n        break` },
        { language: "javascript", code: `// break - salir del bucle\nfor (let i = 0; i < 10; i++) {\n  if (i === 5) break;\n  console.log(i);  // 0, 1, 2, 3, 4\n}\n\n// continue - saltar iteracion\nfor (let i = 0; i < 10; i++) {\n  if (i % 2 === 0) continue;\n  console.log(i);  // 1, 3, 5, 7, 9\n}\n\n// etiquetas para bucles anidados\nouter: for (let i = 0; i < 3; i++) {\n  for (let j = 0; j < 3; j++) {\n    if (i === 1 && j === 1) break outer;\n    console.log(i, j);\n  }\n}` },
        { language: "java", code: `// break - salir del bucle\nfor (int i = 0; i < 10; i++) {\n  if (i == 5) break;\n  System.out.println(i);  // 0, 1, 2, 3, 4\n}\n\n// continue - saltar iteracion\nfor (int i = 0; i < 10; i++) {\n  if (i % 2 == 0) continue;\n  System.out.println(i);  // 1, 3, 5, 7, 9\n}\n\n// etiquetas para bucles anidados\nouter:\nfor (int i = 0; i < 3; i++) {\n  for (int j = 0; j < 3; j++) {\n    if (i == 1 && j == 1) break outer;\n    System.out.println(i + " " + j);\n  }\n}` },
        { language: "cpp", code: `// break - salir del bucle\nfor (int i = 0; i < 10; i++) {\n  if (i == 5) break;\n  cout << i << endl;  // 0, 1, 2, 3, 4\n}\n\n// continue - saltar iteracion\nfor (int i = 0; i < 10; i++) {\n  if (i % 2 == 0) continue;\n  cout << i << endl;  // 1, 3, 5, 7, 9\n}\n\n// c++ no tiene etiquetas como java\n// para salir de bucles anidados usar una flag\nbool encontrado = false;\nfor (int i = 0; i < 3 && !encontrado; i++) {\n  for (int j = 0; j < 3; j++) {\n    if (i == 1 && j == 1) {\n      encontrado = true;\n      break;\n    }\n  }\n}` },
      ],
    },
  ],
};
