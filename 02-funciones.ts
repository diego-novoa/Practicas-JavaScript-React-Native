// Clase 2: Funciones y parámetros en TypeScript.
// Ejecuta con: `npx ts-node 02-funciones.ts`
// Tip: tipar parámetros y retornos evita sorpresas cuando cambias la implementación.

function saludar(persona: string, saludo: string = 'Hola'): string {
  return `${saludo}, ${persona}!`;
}

const sumar = (a: number, b: number): number => a + b;

function imprimirOpcional(mensaje?: string): void {
  console.log(mensaje ?? 'Mensaje por defecto');
}

function procesarLista(valores: number[], transformador: (n: number) => number): number[] {
  return valores.map(transformador);
}

console.log(saludar('Ada Lovelace'));
console.log('4 + 6 =', sumar(4, 6));
imprimirOpcional();
imprimirOpcional('Hola desde imprimirOpcional');

const alCuadrado = procesarLista([1, 2, 3, 4], (n) => n * n);
console.log('Cuadrados:', alCuadrado);

// Variantes:

// - Agrega un parámetro rest `...extras` y suma todos los argumentos.

function sumar(a: number, b: number, ...extras: number[]): number {
  let total = a + b;

  for (const num of extras) {
    total += num;
  }
  return total;
}
// Ejemplo
console.log(sumar(2, 3, 4, 5)); // 14


// - Implementa sobrecarga para una función `formatear(valor: string | number)`.

function formatear(valor: string): string;
function formatear(valor: number): string;

function formatear(valor: string | number): string {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  } else {
    return valor.toFixed(2);
  }
}
// Ejemplos
console.log(formatear("hola")); // HOLA
console.log(formatear(12.5));   // 12.50

// - Cambia `procesarLista` para recibir `Promise<number>[]` y usar `Promise.all`.

async function procesarLista(lista: Promise<number>[]): Promise<number[]> {
  const valores = await Promise.all(lista);
  return valores.map(num => num * 2);
}

const p1 = Promise.resolve(2);
const p2 = Promise.resolve(4);
const p3 = Promise.resolve(6);

procesarLista([p1, p2, p3])
  .then(resultado => console.log(resultado)); // [4, 8, 12]


// Notas rápidas:
// - Parámetro con valor por defecto: `saludo = 'Hola'` evita pasar siempre ese arg.
// - Función flecha con tipo explícito en retorno: `(): number =>`.
// - Parámetro opcional `mensaje?: string` puede ser `undefined`; por eso usamos `??`.
// - Función de orden superior: `procesarLista` recibe otra función (`transformador`) y la aplica con `map`.
