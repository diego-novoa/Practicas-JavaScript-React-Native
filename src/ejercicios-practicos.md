# Ejercicios practicos (HTML + TS + API)

## Ejercicio 1: Limitar resultados
1. En `loadUsers`, guarda la data completa en `const users`.
2. Crea `const firstFive = users.slice(0, 5)`.
3. Llama `renderUsers(firstFive)`.

Objetivo: practicar `slice` y verificar que renderizas menos tarjetas.

## Ejercicio 2: Filtrar por nombre
1. Agrega un `<input id="searchInput">` en `index.html`.
2. Escucha el evento `input` en `app.ts`.
3. Filtra con `filter` sobre un arreglo base de usuarios.

Objetivo: usar `filter` + `includes` para busqueda en tiempo real.

## Ejercicio 3: Ordenar A-Z y Z-A
1. Agrega dos botones: "Ordenar A-Z" y "Ordenar Z-A".
2. Clona el arreglo con `[...users]`.
3. Ordena con `localeCompare`.

Objetivo: evitar mutar el arreglo original y controlar orden.

## Ejercicio 4: Manejo visual de errores
1. Simula error cambiando la URL a una ruta incorrecta.
2. Muestra un mensaje claro para el usuario.
3. Restablece la URL correcta y vuelve a probar.

Objetivo: fortalecer manejo de errores de red.

## Ejercicio 5: Pagina de detalle
1. Al hacer click en una tarjeta, guarda el `id`.
2. Consulta `https://jsonplaceholder.typicode.com/users/{id}`.
3. Muestra los datos en un panel lateral.

Objetivo: practicar rutas dinamicas de API y flujo maestro-detalle.
