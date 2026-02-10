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

//const users{
  //nombre: string;
  //correo: string;
  //compania: string;

  //async function obtenerNombres(nombre: string = "default"): Promise<string[]> {
    //return [nombre];
  //}//
  //async function obtenerCorreo(correo: string = "default"): Promise<string[]> {
    //return [correo];
  //}//
  //async function obtenerCompañia(compania: string = "default"): Promise<string[]> {
    //return [compania];
  //}//

//}//

interface Company {
  name: string;
}

interface User {
  name: string;
  email: string;
  company?: Company;
}

async function getUsers() {
  const response = await fetch('/users');
  const users: User[] = await response.json();

  return users.map(user => ({
    nombre: user.name,
    correo: user.email,
    compania: user.company?.name ?? ''
  }));
}


// - Reemplaza `fetch` por Axios y tipa la respuesta con `axios.get<Post[]>`.

import axios from 'axios';

interface Company {
  name: string;
}
interface User {
  name: string;
  email: string;
  company?: Company;
}
async function getUsers(): {
  const { data } = await axios.get<User[]>('/users');

  return data.map(user => ({
    nombre: user.name,
    correo: user.email,
    compania: user.company?.name ?? ''
  }));
}

// - Encadena otro `fetch` usando el `userId` para obtener datos del autor.

interface Company {
  name: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  company?: Company;
}

interface Author {
  id: number;
  username: string;
  bio: string;
}

async function getUsersWithAuthor() {
  const usersResponse = await fetch('/users');
  const users: User[] = await usersResponse.json();

  const result = await Promise.all(
    users.map(async (user) => {
      const authorResponse = await fetch(`/authors/${user.id}`);
      const author: Author = await authorResponse.json();

      return {
        nombre: user.name,
        correo: user.email,
        compania: user.company?.name ?? '',
        autor: {
          username: author.username,
          bio: author.bio
        }
      };
    })
  );

  return result;
}
 
getUsersWithAuthor()
  .then(data => console.log(data))
  .catch(err => console.error(err));


