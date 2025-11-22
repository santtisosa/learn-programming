import type { Lesson } from "@/types";

export const arraysAndLists: Lesson = {
  slug: "arrays-and-lists",
  title: "Arrays y Listas",
  description: "Aprende a trabajar con colecciones de datos: crear, acceder, modificar y recorrer arrays.",
  icon: "📋",
  color: "#EF4444",
  sections: [
    {
      id: "creating-arrays",
      title: "Crear Arrays/Listas",
      explanation: "Los arrays (o listas) almacenan múltiples valores en una sola variable. Python usa listas dinámicas, JavaScript tiene arrays flexibles, y Java/C++ requieren especificar el tamaño o tipo.",
      codeExamples: [
        { language: "python", code: `# listas en python (dinamicas)\nnumeros = [1, 2, 3, 4, 5]\nnombres = ["Ana", "Luis", "Maria"]\nmixta = [1, "hola", True, 3.14]\nvacia = []\n\n# crear con range\npares = list(range(0, 10, 2))  # [0, 2, 4, 6, 8]\n\n# list comprehension\ncuadrados = [x**2 for x in range(5)]  # [0, 1, 4, 9, 16]\n\nprint(numeros)\nprint(len(numeros))  # 5` },
        { language: "javascript", code: `// arrays en javascript (dinamicos)\nlet numeros = [1, 2, 3, 4, 5];\nlet nombres = ["Ana", "Luis", "Maria"];\nlet mixto = [1, "hola", true, 3.14];\nlet vacio = [];\n\n// crear con Array.from\nlet pares = Array.from({length: 5}, (_, i) => i * 2);\n// [0, 2, 4, 6, 8]\n\n// crear con fill\nlet ceros = new Array(5).fill(0);  // [0, 0, 0, 0, 0]\n\nconsole.log(numeros);\nconsole.log(numeros.length);  // 5` },
        { language: "java", code: `// arrays en java (tamaño fijo)\nint[] numeros = {1, 2, 3, 4, 5};\nString[] nombres = {"Ana", "Luis", "Maria"};\nint[] vacio = new int[10]; // 10 posiciones en 0\n\nSystem.out.println(numeros.length);  // 5\n\n// ArrayList (tamaño dinamico)\nimport java.util.ArrayList;\n\nArrayList<String> lista = new ArrayList<>();\nlista.add("Ana");\nlista.add("Luis");\nlista.add("Maria");\n\nSystem.out.println(lista);       // [Ana, Luis, Maria]\nSystem.out.println(lista.size()); // 3` },
        { language: "cpp", code: `// arrays clasicos (tamaño fijo)\nint numeros[] = {1, 2, 3, 4, 5};\nstring nombres[] = {"Ana", "Luis", "Maria"};\n\ncout << sizeof(numeros) / sizeof(int) << endl; // 5\n\n// vector (tamaño dinamico, recomendado)\n#include <vector>\n\nvector<int> nums = {1, 2, 3, 4, 5};\nvector<string> noms = {"Ana", "Luis", "Maria"};\nvector<int> vacio;\nvector<int> ceros(10, 0); // 10 ceros\n\ncout << nums.size() << endl;  // 5` },
      ],
    },
    {
      id: "accessing-elements",
      title: "Acceder a Elementos",
      explanation: "Se accede a los elementos por su índice, que empieza en 0 en todos los lenguajes. Python permite índices negativos para contar desde el final.",
      codeExamples: [
        { language: "python", code: `# acceder por indice\nfrutas = ["manzana", "banana", "naranja", "uva"]\n\nprint(frutas[0])   # manzana (primero)\nprint(frutas[2])   # naranja (tercero)\nprint(frutas[-1])  # uva (ultimo)\nprint(frutas[-2])  # naranja (penultimo)\n\n# slicing (rebanado)\nprint(frutas[1:3])   # ["banana", "naranja"]\nprint(frutas[:2])    # ["manzana", "banana"]\nprint(frutas[2:])    # ["naranja", "uva"]\nprint(frutas[::2])   # ["manzana", "naranja"]\n\n# modificar elemento\nfrutas[1] = "pera"\nprint(frutas)  # ["manzana", "pera", "naranja", "uva"]` },
        { language: "javascript", code: `// acceder por indice\nlet frutas = ["manzana", "banana", "naranja", "uva"];\n\nconsole.log(frutas[0]);   // manzana\nconsole.log(frutas[2]);   // naranja\nconsole.log(frutas.at(-1)); // uva (metodo at)\n\n// slice (no modifica el original)\nconsole.log(frutas.slice(1, 3)); // ["banana", "naranja"]\nconsole.log(frutas.slice(2));    // ["naranja", "uva"]\n\n// modificar elemento\nfrutas[1] = "pera";\nconsole.log(frutas);\n\n// desestructuracion\nlet [primera, segunda, ...resto] = frutas;\nconsole.log(primera); // manzana\nconsole.log(resto);   // ["naranja", "uva"]` },
        { language: "java", code: `// acceder por indice\nString[] frutas = {"manzana", "banana", "naranja", "uva"};\n\nSystem.out.println(frutas[0]);  // manzana\nSystem.out.println(frutas[2]);  // naranja\n// frutas[-1] NO funciona en java\n\n// ultimo elemento\nSystem.out.println(frutas[frutas.length - 1]); // uva\n\n// modificar elemento\nfrutas[1] = "pera";\n\n// con ArrayList\nArrayList<String> lista = new ArrayList<>(Arrays.asList(\n  "manzana", "banana", "naranja"\n));\nSystem.out.println(lista.get(0));  // manzana\nlista.set(1, "pera");` },
        { language: "cpp", code: `// acceder por indice\nvector<string> frutas = {"manzana", "banana", "naranja", "uva"};\n\ncout << frutas[0] << endl;     // manzana\ncout << frutas[2] << endl;     // naranja\ncout << frutas.at(0) << endl;  // manzana (con bounds check)\n\n// ultimo elemento\ncout << frutas.back() << endl;  // uva\ncout << frutas.front() << endl; // manzana\n\n// modificar elemento\nfrutas[1] = "pera";\n\n// acceso seguro con .at() lanza excepcion si\n// el indice esta fuera de rango\ntry {\n  cout << frutas.at(10) << endl;\n} catch (out_of_range& e) {\n  cout << "Indice invalido" << endl;\n}` },
      ],
    },
    {
      id: "modifying-arrays",
      title: "Modificar Arrays",
      explanation: "Agregar, eliminar y modificar elementos son operaciones fundamentales. Cada lenguaje ofrece diferentes métodos para estas operaciones.",
      codeExamples: [
        { language: "python", code: `# modificar listas\nfrutas = ["manzana", "banana"]\n\n# agregar al final\nfrutas.append("naranja")\nprint(frutas)  # ["manzana", "banana", "naranja"]\n\n# insertar en posicion\nfrutas.insert(1, "pera")\nprint(frutas)  # ["manzana", "pera", "banana", "naranja"]\n\n# eliminar por valor\nfrutas.remove("banana")\n\n# eliminar por indice\ndel frutas[0]\neliminado = frutas.pop()  # elimina y retorna el ultimo\n\n# extender con otra lista\nfrutas.extend(["uva", "kiwi"])\n\n# ordenar\nnumeros = [3, 1, 4, 1, 5]\nnumeros.sort()\nprint(numeros)  # [1, 1, 3, 4, 5]` },
        { language: "javascript", code: `// modificar arrays\nlet frutas = ["manzana", "banana"];\n\n// agregar al final\nfrutas.push("naranja");\n\n// agregar al inicio\nfrutas.unshift("pera");\n\n// eliminar del final\nlet ultimo = frutas.pop();\n\n// eliminar del inicio\nlet primero = frutas.shift();\n\n// splice: eliminar/insertar en posicion\nfrutas.splice(1, 1);          // eliminar 1 en indice 1\nfrutas.splice(0, 0, "uva");   // insertar sin eliminar\n\n// concatenar\nlet todas = frutas.concat(["kiwi", "mango"]);\n\n// ordenar\nlet nums = [3, 1, 4, 1, 5];\nnums.sort((a, b) => a - b);\nconsole.log(nums);  // [1, 1, 3, 4, 5]` },
        { language: "java", code: `// modificar ArrayList\nArrayList<String> frutas = new ArrayList<>();\n\n// agregar al final\nfrutas.add("manzana");\nfrutas.add("banana");\n\n// insertar en posicion\nfrutas.add(1, "pera");\n\n// eliminar por indice\nfrutas.remove(0);\n\n// eliminar por valor\nfrutas.remove("banana");\n\n// verificar si contiene\nboolean tiene = frutas.contains("pera"); // true\n\n// ordenar\nCollections.sort(frutas);\n\n// tamaño\nSystem.out.println(frutas.size());\n\n// limpiar\nfrutas.clear();` },
        { language: "cpp", code: `// modificar vectores\nvector<string> frutas;\n\n// agregar al final\nfrutas.push_back("manzana");\nfrutas.push_back("banana");\n\n// insertar en posicion\nfrutas.insert(frutas.begin() + 1, "pera");\n\n// eliminar del final\nfrutas.pop_back();\n\n// eliminar por posicion\nfrutas.erase(frutas.begin());\n\n// verificar si esta vacio\nif (frutas.empty()) {\n  cout << "Vacio" << endl;\n}\n\n// ordenar\nvector<int> nums = {3, 1, 4, 1, 5};\nsort(nums.begin(), nums.end());\n// [1, 1, 3, 4, 5]\n\n// tamaño\ncout << frutas.size() << endl;` },
      ],
    },
    {
      id: "array-methods",
      title: "Métodos Útiles de Arrays",
      explanation: "Los lenguajes modernos ofrecen métodos poderosos para transformar y filtrar arrays. Map, filter y reduce son especialmente importantes en programación funcional.",
      codeExamples: [
        { language: "python", code: `# metodos utiles\nnumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\n# map: transformar cada elemento\ndobles = list(map(lambda x: x * 2, numeros))\n# o con list comprehension (mas pythonico)\ndobles = [x * 2 for x in numeros]\n\n# filter: filtrar elementos\npares = list(filter(lambda x: x % 2 == 0, numeros))\npares = [x for x in numeros if x % 2 == 0]\n\n# reduce: acumular\nfrom functools import reduce\nsuma = reduce(lambda a, b: a + b, numeros)\n\n# otros\nprint(sum(numeros))     # 55\nprint(max(numeros))     # 10\nprint(min(numeros))     # 1\nprint(sorted(numeros, reverse=True))` },
        { language: "javascript", code: `// metodos utiles\nconst numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\n// map: transformar cada elemento\nconst dobles = numeros.map(x => x * 2);\n// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]\n\n// filter: filtrar elementos\nconst pares = numeros.filter(x => x % 2 === 0);\n// [2, 4, 6, 8, 10]\n\n// reduce: acumular\nconst suma = numeros.reduce((acc, x) => acc + x, 0);\n// 55\n\n// find: encontrar el primero que cumple\nconst primero = numeros.find(x => x > 5);  // 6\n\n// some / every\nconst hayPares = numeros.some(x => x % 2 === 0); // true\nconst todosPares = numeros.every(x => x % 2 === 0); // false\n\n// includes\nconsole.log(numeros.includes(5));  // true` },
        { language: "java", code: `// metodos utiles con Streams (Java 8+)\nimport java.util.stream.*;\nimport java.util.*;\n\nList<Integer> numeros = Arrays.asList(1,2,3,4,5,6,7,8,9,10);\n\n// map: transformar\nList<Integer> dobles = numeros.stream()\n  .map(x -> x * 2)\n  .collect(Collectors.toList());\n\n// filter: filtrar\nList<Integer> pares = numeros.stream()\n  .filter(x -> x % 2 == 0)\n  .collect(Collectors.toList());\n\n// reduce: acumular\nint suma = numeros.stream()\n  .reduce(0, Integer::sum);\n\n// min, max\nint maximo = Collections.max(numeros);\nint minimo = Collections.min(numeros);\n\n// contains\nboolean tiene5 = numeros.contains(5); // true` },
        { language: "cpp", code: `// metodos utiles con <algorithm>\n#include <algorithm>\n#include <numeric>\n\nvector<int> numeros = {1,2,3,4,5,6,7,8,9,10};\n\n// transform (como map)\nvector<int> dobles(numeros.size());\ntransform(numeros.begin(), numeros.end(),\n  dobles.begin(), [](int x) { return x * 2; });\n\n// copy_if (como filter)\nvector<int> pares;\ncopy_if(numeros.begin(), numeros.end(),\n  back_inserter(pares),\n  [](int x) { return x % 2 == 0; });\n\n// accumulate (como reduce)\nint suma = accumulate(numeros.begin(),\n  numeros.end(), 0);\n\n// min/max\nint maximo = *max_element(numeros.begin(), numeros.end());\nint minimo = *min_element(numeros.begin(), numeros.end());\n\n// find\nauto it = find(numeros.begin(), numeros.end(), 5);` },
      ],
    },
  ],
};
