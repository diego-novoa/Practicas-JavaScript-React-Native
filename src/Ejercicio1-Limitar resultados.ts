interface User {
  id: number;
  name: string;
  email: string;
  [key: string]: any;
}

async function loadUsers(): Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await response.json(); // Guarda la data completa en const users

    const firstFive: User[] = users.slice(0, 5); // Crea const firstFive = users.slice(0, 5)

    renderUsers(firstFive); // Llama renderUsers(firstFive)
  } catch (error) {
    console.error('Error cargando usuarios:', error);
  }
}

function renderUsers(users: User[]): void {
  const container = document.getElementById('user-list');

  if (!container) return;

  container.innerHTML = users
    .map(user => `
      <div>
        <h3>${user.name}</h3>
        <p>${user.email}</p>
      </div>
    `)
    .join('');
}

// Llamada inicial
loadUsers();
