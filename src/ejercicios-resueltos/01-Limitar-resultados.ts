/* Ejercicio 1: Limitar resultados
1. En `loadUsers`, guarda la data completa en `const users`.
2. Crea `const firstFive = users.slice(0, 5)`.
3. Llama `renderUsers(firstFive)`.*/

import { renderUsers } from './01-Limitar-resultdos';

const loadUsers = async () => {
	// Hace una petición a la API y espera la respuesta.
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	// Convierte la respuesta a JSON y obtiene todos los usuarios.
	const user = await response.json()
	// Toma solo los primeros 5 usuarios del arreglo.
	const firstFive = user.slice(0, 5);
	// Envíar esos 5 usuarios a renderUsers para mostrarlos.
	renderUsers(firstFive);
}
// Ejecutar la función.
loadUsers();


//2-  segunda version Creando un tipo 

// Creamos un tipo
type user = {

	id: number;
	name: string;
	username: string;
	string: string;
}

const loadUsers1 = async (): Promise<void> => {
	// Hace una petición a la API y espera la respuesta.
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	// Convierte la respuesta a JSON y obtiene todos los usuarios.
	const user = await response.json();
	// Toma solo los primeros 5 usuarios del arreglo.
	const firstFive = user.slice(0, 5);
	// Envíar esos 5 usuarios a renderUsers para mostrarlos.
	renderUsers(firstFive);
}
// Ejecutar la función.
loadUsers1();

