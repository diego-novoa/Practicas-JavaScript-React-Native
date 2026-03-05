/* Ejercicio 2: Filtrar por nombre
1. Agrega un `<input id="searchInput">` en `index.html`.
2. Escucha el evento `input` en `app.ts`.
3. Filtra con `filter` sobre un arreglo base de usuarios.*/

// Definimos la estructura de un usuario con todas sus propiedades

interface User {
	id: number;
	name: string;
	email: string;
	phone: string;
	website: string;
}

// Arreglo de ejemplo
const users: User[] = [
	{ id: 1, name: " ", email: " ", phone: " ", website: " " },
	{ id: 2, name: " ", email: " ", phone: " ", website: " " },
	{ id: 3, name: " ", email: " ", phone: " ", website: " " },
	{ id: 4, name: " ", email: " ", phone: " ", website: " " },
	{ id: 5, name: " ", email: " ", phone: " ", website: " " }
];

// Obtenemos del DOM el input donde el usuario escribirá para buscar
const searchInput = document.getElementById("searchInput") as HTMLInputElement;

// Obtenemos del DOM la lista (<ul>) donde vamos a mostrar los usuarios
const userList = document.getElementById("userList") as HTMLUListElement;

// Función para mostrar un arreglo de usuarios en la página
const displayUsers = (usersToShow: User[]) => {
	// Limpiamos la lista antes de agregar nuevos usuarios
	userList.innerHTML = "";

	// Recorremos cada usuario que queremos mostrar
	usersToShow.forEach(user => {
		// Creamos un elemento <li> para cada usuario
		const li = document.createElement("li");

		// Insertamos la información del usuario dentro del <li>
		li.innerHTML = `
			<strong>${user.name}</strong><br>
			Email: ${user.email}<br>
			Phone: ${user.phone}<br>
			Website: ${user.website}
		`;

		// Agregamos el <li> al <ul> del DOM
		userList.appendChild(li);
	});
};

// Mostrar todos los usuarios al cargar la página (antes de filtrar)
displayUsers(users);

// Agregamos un evento que se ejecuta cada vez que el usuario escribe en el input
searchInput.addEventListener("input", () => {
	// Tomamos el texto escrito y lo convertimos a minúsculas
	const searchTerm = searchInput.value.toLowerCase();

	// Filtramos el arreglo de usuarios para que solo queden los que contienen el texto escrito
	const filteredUsers = users.filter(user =>
		user.name.toLowerCase().includes(searchTerm) // compara sin importar mayúsculas
	);

	// Mostramos solo los usuarios filtrados
	displayUsers(filteredUsers);
});