// data/challenges.ts

import { Challenge } from "@/types/challenge";

export const challenges: Challenge[] = [
  {
    id: 0,
    title: "Concatenar cadenas",
    description: "Escribe una función que concatene dos cadenas de texto.",
    difficulty: "Fácil",
    template: "function concatenar(a, b) {\n  // Tu código aquí\n}",
    test: "(a, b) => a + b",
    testCases: [
      ["Hola", " Mundo"],
      ["Buenos", " días"],
      ["Suma", " de números"],
    ],
    help: "La concatenación de cadenas se realiza uniendo ambas cadenas con el operador '+' en JavaScript.",
  },
  {
    id: 1,
    title: "Verificar par o impar",
    description:
      "Escribe una función que verifique si un número es par o impar.",
    difficulty: "Fácil",
    template: "function esParImpar(n) {\n  // Tu código aquí\n}",
    test: "(n) => n % 2 === 0 ? 'Par' : 'Impar'",
    testCases: [2, 5, 8],
    help: "Un número es par si se puede dividir entre 2 sin dejar residuo, de lo contrario es impar.",
  },
  {
    id: 2,
    title: "Multiplicación de dos números",
    description: "Escribe una función que multiplique dos números.",
    difficulty: "Fácil",
    template: "function multiplicar(a, b) {\n  // Tu código aquí\n}",
    test: "(a, b) => a * b",
    testCases: [
      [2, 3],
      [5, 6],
      [10, 4],
    ],
    help: "La multiplicación es la operación de aumentar un número por una cantidad determinada de veces.",
  },
  {
    id: 3,
    title: "Longitud de una cadena",
    description: "Escribe una función que devuelva la longitud de una cadena.",
    difficulty: "Fácil",
    template: "function longitud(str) {\n  // Tu código aquí\n}",
    test: "(str) => str.length",
    testCases: ["Hola", "Mundo", "JavaScript"],
    help: "La longitud de una cadena es el número de caracteres que contiene.",
  },
  {
    id: 4,
    title: "Suma de números negativos",
    description: "Escribe una función que sume dos números negativos.",
    difficulty: "Fácil",
    template: "function sumaNegativos(a, b) {\n  // Tu código aquí\n}",
    test: "(a, b) => a + b",
    testCases: [
      [-1, -2],
      [-5, -7],
      [-10, -15],
    ],
    help: "Recuerda que los números negativos se suman como los positivos, pero manteniendo el signo negativo.",
  },
];
