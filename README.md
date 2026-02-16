# Ruta rápida de práctica TypeScript + Node

<img width="1004" height="250" alt="ts-lettermark-blue" src="https://github.com/user-attachments/assets/aaac637b-dd78-4342-92f0-0f041775eda3" />


Archivos creados (ejecuta con `npx ts-node <archivo>`):
- `01-variables.ts`: variables, enums y tipos personalizados.
- `02-funciones.ts`: funciones tipadas, parámetros opcionales y callbacks.
- `03-poo.ts`: clases, herencia, métodos estáticos y encapsulación.
- `04-arreglos.ts`: recorridos y transformaciones con `for`, `forEach`, `map`, `filter`, `reduce`.
- `05-arreglos-objetos.ts`: operaciones comunes sobre arreglos de objetos.
- `06-integracion-api.ts`: consumo de una API REST y pintado de resultados en consola.
- `src/index.html`, `src/app.ts`, `src/styles.css`: practica web con TypeScript + API + `map`.

## Requisitos mínimos
- Node 18+ (para tener `fetch` nativo). Verifica con `node -v`.
- Dependencias de ejecución en TypeScript:
  ```bash
  npm init -y
  npm install typescript ts-node @types/node
  npx tsc --init
  ```

## Comandos para levantar el proyecto
Ejecuta todo desde la raiz del repo:

```bash
npm install
npm run build:web
npm run serve:web
# Abrir: http://localhost:5500/src/index.html
```

Modo desarrollo (2 terminales):

```bash
# Terminal 1
npm run watch:web

# Terminal 2
npm run serve:web
```

Ejecutar un ejercicio TS en consola:

```bash
npm run ts -- 06-integracion-api.ts
```

## Rutas web y navegacion
El sitio ahora tiene menu de navegacion y paginas separadas:

- `http://localhost:5500/src/index.html`: inicio + integracion API.
- `http://localhost:5500/src/studio.html`: cards de estudio.
- `http://localhost:5500/src/terminal.html`: terminal TypeScript embebida.

## Cómo usar cada archivo
1. Instala dependencias (solo una vez): `npm install typescript ts-node @types/node`.
2. Ejecuta el ejercicio que quieras, por ejemplo: `npx ts-node 04-arreglos.ts`.
3. Prueba las variantes sugeridas en los comentarios para afianzar los conceptos.

## Practica web paso a paso (HTML + TS + CSS + API)
1. Compila el TypeScript de `src`: `npm run build:web`
2. Levanta un servidor local: `npm run serve:web`
3. Abre en el navegador: `http://localhost:5500/src/index.html`
4. Si quieres recompilar automatico mientras editas:
   - Terminal 1: `npm run watch:web`
   - Terminal 2: `npm run serve:web`

Archivos clave:
- `src/index.html`: estructura de la pagina.
- `src/styles.css`: estilos visuales.
- `src/app.ts`: fetch a API + render con `map`.
- `src/ejercicios-practicos.md`: ejercicios para que practiques.

## Próximo nivel: da el salto a React Native
- Con lo aprendido (tipado, funciones, POO, manejo de arreglos y fetch), ya tienes la base de JavaScript/TypeScript moderna.
- Sigue este camino recomendado:
  1) Instala Expo CLI: `npm install -g create-expo-app`.
  2) Crea un proyecto: `npx create-expo-app mi-primer-app`.
  3) Ejecuta en el simulador o en tu teléfono: `cd mi-primer-app && npx expo start`.
  4) Enfócate primero en: componentes básicos (`View`, `Text`, `Image`, `ScrollView`), estilos con `StyleSheet`, y manejo de estado con hooks.
- Practica consumiendo la misma API de `06-integracion-api.ts` dentro de React Native para reforzar el flujo completo.

¡Listo! Con estos ejercicios ya puedes explorar React Native con confianza.
