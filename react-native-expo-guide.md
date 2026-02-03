# Guía súper clara para aprender **React Native con Expo** (desde cero)

La idea: vas a crear una app real paso a paso, jugando con lo que ves en pantalla, entendiendo **estado (useState)**, y luego aprendiendo a conectar **APIs** y a organizar la app con **componentes, pantallas y reutilizables**.

---

## 1) Qué vas a necesitar (sin enredos)

**Lo mínimo:**
- Un computador (Windows/Mac/Linux)
- Internet
- Un celular (opcional, pero recomendado) para probar la app

**Herramientas:**
- **Node.js** (instala la versión LTS)
- **VS Code** (editor)
- **Expo Go** (app en tu celular, desde Play Store / App Store)

---

## 2) Crear tu primer proyecto con Expo

### Paso A — Instalar Expo (la forma sencilla)
```bash
npm create expo@latest
```
Responde:
- Nombre del proyecto: por ejemplo `mi-primera-app`
- Plantilla: elige “blank”

Luego:
```bash
cd mi-primera-app
npm install
```

### Paso B — Ejecutarlo
```bash
npm run start
```
Se abre el panel de Expo en el navegador.
- Con celular: abre **Expo Go** y escanea el QR.
- En PC: puedes usar emulador, pero el celular es más rápido.

---

## 3) Jugar con el contenido (aprende tocando y viendo cambios)

Edita `App.js` o `App.tsx` y cambia el texto:
```jsx
import { Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 24 }}>
      <Text>Hola, esta es mi primera app 🚀</Text>
    </View>
  );
}
```

Componentes básicos: `View`, `Text`, `Button`, `TextInput`, `ScrollView`, `Image`.

---

## 4) Hooks de estado: useState (lo más importante al inicio)

Contador:
```jsx
import { useState } from "react";
import { Text, View, Button } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={{ padding: 24, gap: 12 }}>
      <Text style={{ fontSize: 20 }}>Contador: {count}</Text>
      <Button title="Sumar" onPress={() => setCount(count + 1)} />
      <Button title="Restar" onPress={() => setCount(count - 1)} />
    </View>
  );
}
```

Input controlado:
```jsx
import { useState } from "react";
import { Text, View, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  return (
    <View style={{ padding: 24, gap: 12 }}>
      <Text>Tu nombre: {name}</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Escribe tu nombre"
        style={{ borderWidth: 1, padding: 10, borderRadius: 10 }}
      />
    </View>
  );
}
```

---

## 5) Componentes, pantallas y reutilizables

### 5.1 Componente reutilizable
`src/components/PrimaryButton.js`
```jsx
import { Pressable, Text } from "react-native";

export function PrimaryButton({ title, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        padding: 12,
        borderRadius: 12,
        borderWidth: 1,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 16 }}>{title}</Text>
    </Pressable>
  );
}
```

Uso:
```jsx
import { View, Text } from "react-native";
import { PrimaryButton } from "./src/components/PrimaryButton";

export default function App() {
  return (
    <View style={{ padding: 24, gap: 12 }}>
      <Text>Bienvenido</Text>
      <PrimaryButton title="Entrar" onPress={() => alert("Hola!")} />
    </View>
  );
}
```

### 5.2 Pantallas
Estructura recomendada:
- `src/screens/HomeScreen.js`
- `src/screens/ProfileScreen.js`
- `src/components/...`
- `src/services/...`

### 5.3 Navegación básica (React Navigation)
```bash
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
```
En `App.js`:
```jsx
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/HomeScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

---

## 6) Servicios e integración con APIs

`src/services/apiClient.js`
```js
const BASE_URL = "https://jsonplaceholder.typicode.com";
export async function apiGet(path) {
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
  return res.json();
}
```

`src/services/postsService.js`
```js
import { apiGet } from "./apiClient";
export function getPosts() {
  return apiGet("/posts");
}
```

Uso en una pantalla:
```jsx
import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { getPosts } from "./src/services/postsService";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch(console.log)
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ padding: 24 }}>
      {loading ? (
        <Text>Cargando...</Text>
      ) : (
        <ScrollView>
          {posts.slice(0, 10).map((p) => (
            <Text key={p.id} style={{ marginBottom: 10 }}>
              • {p.title}
            </Text>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
```

---

## 7) Ruta de aprendizaje sugerida
1. Crear proyecto y correrlo en Expo Go.
2. Dominar `View`, `Text`, `Button`, `TextInput`, `ScrollView`.
3. Dominar `useState`.
4. Aprender `useEffect` para cargar datos.
5. Crear componentes reutilizables.
6. Separar en carpetas: `screens`, `components`, `services`.
7. Agregar navegación con React Navigation.
8. Conectar tu propia API.

---

## 8) Mini proyecto final
- Pantalla Inicio: lista items desde una API.
- Pantalla Detalle: muestra el item seleccionado.
- Usa un componente `CardItem`.
- Usa un servicio `itemsService`.

Si quieres personalizar el proyecto (turismo, tareas, tienda, notas), dime y lo ajustamos.
