// Clase 4: Recorrido y transformación de arreglos.
// Ejecuta con: `npx ts-node 04-arreglos.ts`

// 0, 1, 2, 3, 4
const numeros = [1, 2, 3, 4, 5];

console.log('Recorrido clásico:');
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 2) {
      console.log(`índice ${i}:`, numeros[i]);
  }
}

numeros.push(6);

console.log('\nfor...of:');
for (const n of numeros) {
  console.log('valor:', n);
}

console.log('\nforEach:');
numeros.forEach((n, i) => console.log(`pos ${i} => ${n}`));

console.log('\nmap (transforma):');
const dobles = numeros.map((n) => n * 2);
console.log(dobles);

console.log('\nfilter (filtra pares):');
const pares = numeros.filter((n) => n % 2 === 0);
console.log(pares);

console.log('\nreduce (suma total):');
const total = numeros.reduce((acc, n) => acc + n, 0);
console.log(total);

// Variantes:
// - Usa `some` y `every` para validar condiciones.
// - Combina `map` + `filter` en una sola cadena para mantener inmutabilidad.
// - Cambia `reduce` para calcular el promedio.

