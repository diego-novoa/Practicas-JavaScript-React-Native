// Clase 2: Funciones y parámetros en TypeScript.
// Ejecuta con: `npx ts-node 02-funciones.ts`

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
// - Implementa sobrecarga para una función `formatear(valor: string | number)`.
// - Cambia `procesarLista` para recibir `Promise<number>[]` y usar `Promise.all`.

