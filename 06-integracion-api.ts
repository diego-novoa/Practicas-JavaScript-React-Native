// Clase 6: Integración simple con una API pública y recorrido de la respuesta.
// Ejecuta con: `npx ts-node 06-integracion-api.ts`
// Requiere Node 18+ (fetch disponible). En versiones previas instala `node-fetch`.

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function obtenerPosts(limit = 5): Promise<Post[]> {
  const url = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`;
  const respuesta = await fetch(url);

  if (!respuesta.ok) {
    throw new Error(`Error HTTP ${respuesta.status}: no se pudo obtener la API`);
  }

  return respuesta.json();
}

async function main() {
  try {
    const posts = await obtenerPosts(5);
    console.log(`Se recibieron ${posts.length} posts:\n`);

    posts.forEach((post, index) => {
      console.log(`#${index + 1} ${post.title.toUpperCase()}`);
      console.log(post.body.slice(0, 80) + '...');
      console.log('---------------------------');
    });
  } catch (error) {
    console.error('Ocurrió un problema al consumir la API:', error);
  }
}

main();

// Variantes:
// - Cambia el endpoint a `/users` y muestra nombre, correo y compañía.
// - Reemplaza `fetch` por Axios y tipa la respuesta con `axios.get<Post[]>`.
// - Encadena otro `fetch` usando el `userId` para obtener datos del autor.

