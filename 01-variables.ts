// Clase 1: Variables y tipos en TypeScript.
// Ejecuta con: `npx ts-node 01-variables.ts`
// Objetivo: repasar declaraciones, tipos primitivos, enums y tipos personalizados.

const nombre: string = 'Ada';
let edad: number = 32;
const esActivo: boolean = true;

const hobbies: string[] = ['leer', 'tocar guitarra', 'correr'];
const tuplaEjemplo: [string, number] = ['nivel', 3];

enum Rol {
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  Viewer = 'VIEWER',
}
const rolActual: Rol = Rol.Editor;

type Punto = { x: number; y: number; etiqueta?: string };
const coordenada: Punto = { x: 10, y: 20, etiqueta: 'inicio' };

console.log('Estado actual:');
console.log({ nombre, edad, esActivo, hobbies, tuplaEjemplo, rolActual, coordenada });

// Variantes para practicar:
// - Cambia `edad` a readonly usando `const` y observa el error al reasignar.
// - Declara una variable `unknown` y fuerza un casting seguro.
// - Crea tu propio `enum` de estados de pedido y úsalo en un tipo personalizado.

