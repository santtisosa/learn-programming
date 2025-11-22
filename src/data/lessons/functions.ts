import type { Lesson } from "@/types";

export const functions: Lesson = {
  slug: "functions",
  title: "Funciones",
  description: "Aprende a crear funciones reutilizables, parámetros, valores de retorno y scope.",
  icon: "⚡",
  color: "#6366F1",
  sections: [
    {
      id: "basic-functions",
      title: "Funciones Básicas",
      explanation: "Las funciones son bloques de código reutilizables que realizan una tarea específica. Se definen una vez y se pueden llamar múltiples veces.",
      codeExamples: [
        { language: "python", code: `# definir una funcion\ndef saludar():\n    print("Hola mundo!")\n\n# llamar la funcion\nsaludar()\nsaludar()\n\n# funcion con parametros\ndef saludar_a(nombre):\n    print(f"Hola, {nombre}!")\n\nsaludar_a("Santiago")\nsaludar_a("Maria")` },
        { language: "javascript", code: `// definir una funcion\nfunction saludar() {\n  console.log("Hola mundo!");\n}\n\n// llamar la funcion\nsaludar();\nsaludar();\n\n// funcion con parametros\nfunction saludarA(nombre) {\n  console.log(\`Hola, \${nombre}!\`);\n}\n\nsaludarA("Santiago");\nsaludarA("Maria");\n\n// arrow function\nconst saludo = (nombre) => {\n  console.log(\`Hey, \${nombre}!\`);\n};` },
        { language: "java", code: `// funciones en java son metodos dentro de una clase\npublic class Main {\n  // metodo basico\n  static void saludar() {\n    System.out.println("Hola mundo!");\n  }\n\n  // metodo con parametro\n  static void saludarA(String nombre) {\n    System.out.println("Hola, " + nombre + "!");\n  }\n\n  public static void main(String[] args) {\n    saludar();\n    saludarA("Santiago");\n    saludarA("Maria");\n  }\n}` },
        { language: "cpp", code: `// definir una funcion\nvoid saludar() {\n  cout << "Hola mundo!" << endl;\n}\n\n// funcion con parametro\nvoid saludarA(string nombre) {\n  cout << "Hola, " << nombre << "!" << endl;\n}\n\nint main() {\n  saludar();\n  saludarA("Santiago");\n  saludarA("Maria");\n  return 0;\n}` },
      ],
    },
    {
      id: "return-values",
      title: "Valores de Retorno",
      explanation: "Las funciones pueden devolver valores usando return. En lenguajes tipados (Java, C++) debes especificar el tipo de retorno.",
      codeExamples: [
        { language: "python", code: `# funcion con retorno\ndef sumar(a, b):\n    return a + b\n\nresultado = sumar(3, 5)\nprint(resultado)  # 8\n\n# retornar multiples valores\ndef dividir(a, b):\n    cociente = a // b\n    resto = a % b\n    return cociente, resto\n\nc, r = dividir(17, 5)\nprint(f"Cociente: {c}, Resto: {r}")\n\n# retorno temprano\ndef es_par(n):\n    if n % 2 == 0:\n        return True\n    return False` },
        { language: "javascript", code: `// funcion con retorno\nfunction sumar(a, b) {\n  return a + b;\n}\n\nlet resultado = sumar(3, 5);\nconsole.log(resultado);  // 8\n\n// retornar un objeto\nfunction dividir(a, b) {\n  return {\n    cociente: Math.floor(a / b),\n    resto: a % b,\n  };\n}\n\nconst { cociente, resto } = dividir(17, 5);\nconsole.log(\`Cociente: \${cociente}, Resto: \${resto}\`);\n\n// arrow function con retorno implicito\nconst doble = (n) => n * 2;\nconsole.log(doble(4));  // 8` },
        { language: "java", code: `// funcion con retorno (especificar tipo)\nstatic int sumar(int a, int b) {\n  return a + b;\n}\n\n// retornar un arreglo\nstatic int[] dividir(int a, int b) {\n  int[] resultado = new int[2];\n  resultado[0] = a / b;    // cociente\n  resultado[1] = a % b;    // resto\n  return resultado;\n}\n\npublic static void main(String[] args) {\n  int suma = sumar(3, 5);\n  System.out.println(suma);  // 8\n\n  int[] div = dividir(17, 5);\n  System.out.println("Cociente: " + div[0]);\n  System.out.println("Resto: " + div[1]);\n}` },
        { language: "cpp", code: `// funcion con retorno (especificar tipo)\nint sumar(int a, int b) {\n  return a + b;\n}\n\n// retornar con pair\npair<int, int> dividir(int a, int b) {\n  return {a / b, a % b};\n}\n\nint main() {\n  int suma = sumar(3, 5);\n  cout << suma << endl;  // 8\n\n  auto [cociente, resto] = dividir(17, 5);\n  cout << "Cociente: " << cociente << endl;\n  cout << "Resto: " << resto << endl;\n  return 0;\n}` },
      ],
    },
    {
      id: "default-params",
      title: "Parámetros por Defecto",
      explanation: "Los parámetros por defecto permiten que una función se llame sin proporcionar todos los argumentos. El valor por defecto se usa cuando no se pasa el argumento.",
      codeExamples: [
        { language: "python", code: `# parametros por defecto\ndef saludar(nombre, saludo="Hola"):\n    print(f"{saludo}, {nombre}!")\n\nsaludar("Santiago")          # Hola, Santiago!\nsaludar("Maria", "Buenos dias")  # Buenos dias, Maria!\n\n# argumentos con nombre (keyword args)\ndef crear_perfil(nombre, edad, ciudad="Madrid"):\n    return f"{nombre}, {edad} años, {ciudad}"\n\nprint(crear_perfil("Ana", 25))\nprint(crear_perfil("Luis", 30, ciudad="Barcelona"))\n\n# *args y **kwargs\ndef sumar_todo(*numeros):\n    return sum(numeros)\n\nprint(sumar_todo(1, 2, 3, 4))  # 10` },
        { language: "javascript", code: `// parametros por defecto\nfunction saludar(nombre, saludo = "Hola") {\n  console.log(\`\${saludo}, \${nombre}!\`);\n}\n\nsaludar("Santiago");           // Hola, Santiago!\nsaludar("Maria", "Buenos dias"); // Buenos dias, Maria!\n\n// rest parameters (...args)\nfunction sumarTodo(...numeros) {\n  return numeros.reduce((a, b) => a + b, 0);\n}\n\nconsole.log(sumarTodo(1, 2, 3, 4));  // 10\n\n// desestructuracion en parametros\nfunction crearPerfil({ nombre, edad, ciudad = "Madrid" }) {\n  return \`\${nombre}, \${edad}, \${ciudad}\`;\n}\n\nconsole.log(crearPerfil({ nombre: "Ana", edad: 25 }));` },
        { language: "java", code: `// java no tiene parametros por defecto\n// se usa sobrecarga de metodos\n\nstatic void saludar(String nombre) {\n  saludar(nombre, "Hola");\n}\n\nstatic void saludar(String nombre, String saludo) {\n  System.out.println(saludo + ", " + nombre + "!");\n}\n\n// llamadas\nsaludar("Santiago");            // Hola, Santiago!\nsaludar("Maria", "Buenos dias"); // Buenos dias, Maria!\n\n// varargs (argumentos variables)\nstatic int sumarTodo(int... numeros) {\n  int suma = 0;\n  for (int n : numeros) suma += n;\n  return suma;\n}\n// sumarTodo(1, 2, 3, 4) -> 10` },
        { language: "cpp", code: `// parametros por defecto\nvoid saludar(string nombre, string saludo = "Hola") {\n  cout << saludo << ", " << nombre << "!" << endl;\n}\n\nint main() {\n  saludar("Santiago");            // Hola, Santiago!\n  saludar("Maria", "Buenos dias"); // Buenos dias, Maria!\n  return 0;\n}\n\n// los parametros por defecto van al final\nint calcular(int a, int b, int c = 0) {\n  return a + b + c;\n}\n// calcular(1, 2)    -> 3\n// calcular(1, 2, 3) -> 6` },
      ],
    },
    {
      id: "scope",
      title: "Alcance (Scope)",
      explanation: "El scope determina dónde son accesibles las variables. Entender el alcance es fundamental para evitar bugs y escribir código limpio.",
      codeExamples: [
        { language: "python", code: `# scope en python\nx = "global"\n\ndef mi_funcion():\n    y = "local"\n    print(x)  # puede acceder a x (global)\n    print(y)  # puede acceder a y (local)\n\nmi_funcion()\nprint(x)  # ok\n# print(y)  # error! y no existe aqui\n\n# modificar variable global\ncontador = 0\n\ndef incrementar():\n    global contador\n    contador += 1\n\nincrementar()\nprint(contador)  # 1` },
        { language: "javascript", code: `// scope en javascript\nlet x = "global";\n\nfunction miFuncion() {\n  let y = "local";\n  console.log(x);  // puede acceder a x\n  console.log(y);  // puede acceder a y\n}\n\nmiFuncion();\nconsole.log(x);  // ok\n// console.log(y);  // error!\n\n// block scope con let/const\nif (true) {\n  let dentroIf = "solo aqui";\n  const otraVar = "tambien aqui";\n}\n// console.log(dentroIf);  // error!\n\n// closures\nfunction crearContador() {\n  let count = 0;\n  return () => ++count;\n}\nconst contador = crearContador();\nconsole.log(contador());  // 1\nconsole.log(contador());  // 2` },
        { language: "java", code: `// scope en java\npublic class Main {\n  // variable de clase (global)\n  static int global = 10;\n\n  static void miFuncion() {\n    int local = 20;\n    System.out.println(global); // ok\n    System.out.println(local);  // ok\n  }\n\n  public static void main(String[] args) {\n    miFuncion();\n    System.out.println(global); // ok\n    // System.out.println(local); // error!\n\n    // block scope\n    if (true) {\n      int dentroIf = 5;\n    }\n    // System.out.println(dentroIf); // error!\n\n    // scope en for\n    for (int i = 0; i < 3; i++) { }\n    // System.out.println(i); // error!\n  }\n}` },
        { language: "cpp", code: `// scope en c++\nint global = 10;  // variable global\n\nvoid miFuncion() {\n  int local = 20;\n  cout << global << endl;  // ok\n  cout << local << endl;   // ok\n}\n\nint main() {\n  miFuncion();\n  cout << global << endl;  // ok\n  // cout << local << endl;  // error!\n\n  // block scope\n  if (true) {\n    int dentroIf = 5;\n  }\n  // cout << dentroIf << endl;  // error!\n\n  // scope en for\n  for (int i = 0; i < 3; i++) { }\n  // cout << i << endl;  // error!\n\n  return 0;\n}` },
      ],
    },
  ],
};
