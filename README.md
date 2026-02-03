# Ruta rápida de práctica TypeScript + Node

Archivos creados (ejecuta con `npx ts-node <archivo>`):
- `01-variables.ts`: variables, enums y tipos personalizados.
- `02-funciones.ts`: funciones tipadas, parámetros opcionales y callbacks.
- `03-poo.ts`: clases, herencia, métodos estáticos y encapsulación.
- `04-arreglos.ts`: recorridos y transformaciones con `for`, `forEach`, `map`, `filter`, `reduce`.
- `05-arreglos-objetos.ts`: operaciones comunes sobre arreglos de objetos.
- `06-integracion-api.ts`: consumo de una API REST y pintado de resultados en consola.

## Requisitos mínimos
- Node 18+ (para tener `fetch` nativo). Verifica con `node -v`.
- Dependencias de ejecución en TypeScript:
  ```bash
  npm init -y
  npm install typescript ts-node @types/node
  npx tsc --init
  ```

## Cómo usar cada archivo
1. Instala dependencias (solo una vez): `npm install typescript ts-node @types/node`.
2. Ejecuta el ejercicio que quieras, por ejemplo: `npx ts-node 04-arreglos.ts`.
3. Prueba las variantes sugeridas en los comentarios para afianzar los conceptos.

## Próximo nivel: da el salto a React Native
- Con lo aprendido (tipado, funciones, POO, manejo de arreglos y fetch), ya tienes la base de JavaScript/TypeScript moderna.
- Sigue este camino recomendado:
  1) Instala Expo CLI: `npm install -g create-expo-app`.
  2) Crea un proyecto: `npx create-expo-app mi-primer-app`.
  3) Ejecuta en el simulador o en tu teléfono: `cd mi-primer-app && npx expo start`.
  4) Enfócate primero en: componentes básicos (`View`, `Text`, `Image`, `ScrollView`), estilos con `StyleSheet`, y manejo de estado con hooks.
- Practica consumiendo la misma API de `06-integracion-api.ts` dentro de React Native para reforzar el flujo completo.

¡Listo! Con estos ejercicios ya puedes explorar React Native con confianza.
