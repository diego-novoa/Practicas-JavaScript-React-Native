// 1- defino la interfaz del usuario
interface user {
    id: number;
    name: string;
    email: string;
    [key: string]: any
}
    // 2- defino la funcion loadUsers
async function loadUsers(): Promise<void>{
    // 3- hago la peticion a la api
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // 4- convierto la respuesta a json
    const users: user[] = await response.json();
    // 5- Obtener los primeros cinco usuarios
    const firstFiveUsers = users.slice(0, 5);
    // 6- llamar renderUsers 
    renderUsers(firstFiveUsers);
    // 7- funcion renderUsers
    function renderUsers(users: user[]): void {
    // 8- Buscar el contenedor en el HTML
        const container = document.getElementById('user-container');
        //Busca un elemento con id "user-list" en el HTML.
        if (!container) return;
    // 9- Renderizar los usuarios
        container.innerHTML = users
          .map(user => `
           <div>
            <h3>${user.name}</h3>
            <p>${user.email}</p>
           </div>`)
          .join('');

    }
    // 10- llamada inicial
    loadUsers();

}