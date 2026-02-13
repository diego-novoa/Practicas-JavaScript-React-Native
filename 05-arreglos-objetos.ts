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


const cursosOrdenados = [...cursos].sort((a, b) => a.horas - b.horas);  
console.log('\nCursos ordenados por horas:', cursosOrdenados);



// - Usa `reduce` para agrupar por estado `publicado`.
const agrupados = cursos.reduce ((acc,c) =>{
  const key = c.publicado ? 'publicados' : 'no publicados'; 
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(c);
  return acc;
}, {} as Record<string, Curso[]>);

console.log('\nCursos agrupados por estado:', agrupados);

// - Añade un campo `categoria` y filtra por ella.

var titulosString = cursos.map((c) => c.titulo);

for (const c of cursos) {
  console.log(c.titulo);
}

cursos.push(
  { id: 4, titulo: 'Angular desde cero', horas: 12, publicado: true },
  { id: 5, titulo: 'Angular desde cero', horas: 12, publicado: true }
);

console.log(cursos);

const cursosConCategoria = cursos.map((c)=> ({...c, categoria: c.horas > 7 ? 'avanzado' : 'basico'}))
console.log('\nCursos con categoría:', cursosConCategoria);
const cursosAvanzados = cursosConCategoria.filter((c) => c.categoria === 'avanzado');
console.log('\nCursos avanzados:', cursosAvanzados);