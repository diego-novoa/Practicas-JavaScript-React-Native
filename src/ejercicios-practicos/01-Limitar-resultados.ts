/* Ejercicio 1: Limitar resultados
1. En `loadUsers`, guarda la data completa en `const users`.
2. Crea `const firstFive = users.slice(0, 5)`.
3. Llama `renderUsers(firstFive)`.*/

import { renderUsers } from './01-Limitar-resultados';

const loadUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    const firstFive = users.slice(0, 5);
    renderUsers(firstFive);
};

loadUsers();