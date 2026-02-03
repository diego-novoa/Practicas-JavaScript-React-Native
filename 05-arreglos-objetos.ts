// Clase 5: Arreglos de objetos y cómo "pintar" (imprimir) su información.
// Ejecuta con: `npx ts-node 05-arreglos-objetos.ts`

type Curso = { id: number; titulo: string; horas: number; publicado: boolean };

const cursos: Curso[] = [
  { id: 1, titulo: 'TypeScript desde cero', horas: 6, publicado: true },
  { id: 2, titulo: 'Node.js práctico', horas: 8, publicado: true },
  { id: 3, titulo: 'React para principiantes', horas: 10, publicado: false },
];

console.log('Listado formateado:');
for (const curso of cursos) {
  console.log(`- [${curso.id}] ${curso.titulo} (${curso.horas}h) - publicado: ${curso.publicado}`);
}

const titulos = cursos.map((c) => c.titulo);
console.log('\nSolo títulos:', titulos);

const publicados = cursos.filter((c) => c.publicado);
console.log('\nCursos publicados:', publicados);

const totalHoras = cursos.reduce((acc, c) => acc + c.horas, 0);
console.log('\nHoras totales:', totalHoras);

const encontrado = cursos.find((c) => c.id === 2);
console.log('\nCurso con id=2:', encontrado);

// Variantes:
// - Ordena los cursos por horas usando `sort`.
// - Usa `reduce` para agrupar por estado `publicado`.
// - Añade un campo `categoria` y filtra por ella.

