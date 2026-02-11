// Clase 1: Variables y tipos en TypeScript.
// Ejecuta con: `npx ts-node 01-variables.ts`
// Objetivo: repasar declaraciones, tipos primitivos, enums y tipos personalizados.
// Tip: en TS no existe `var`; usa `const` cuando no reasignas y `let` cuando planeas cambiar el valor.

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
const persona: Readonly<{ edad: number }> = { edad: 32 };
persona.edad = 33; // Error: no se puede reasignar a una propiedad readonly.

// - Declara una variable `unknown` y fuerza un casting seguro.

let valor: unknown = '¡Hola, mundo!';
if (typeof valor === 'string') {
  const texto = valor as string; 
  console.log(texto.toUpperCase());
}
// - Crea tu propio `enum` de estados de pedido y úsalo en un tipo personalizado.
let estadoPedido: EstadoPedido = EstadoPedido.Enviado;
enum EstadoPedido {
  Pendiente = 'PENDIENTE',
  Enviado = 'ENVIADO',    
  Entregado = 'ENTREGADO',
  Cancelado = 'CANCELADO',
}

type Pedido = {
  id: number;
  estado: EstadoPedido;
};
const nuevoPedido: Pedido = { id: 123, estado: EstadoPedido.Pendiente };
  
// Notas rápidas:
// - string/number/boolean: tipos primitivos base.
// - Array tipado: `string[]` asegura que todos los elementos sean texto.
// - Tupla: `[string, number]` define cantidad y tipo exactos por posición.
// - enum: colección de constantes con nombre; evita "magic strings" al representar roles/estados.
// - type alias: `type Punto = ...` te permite dar nombre a un shape de objeto y reutilizarlo.
