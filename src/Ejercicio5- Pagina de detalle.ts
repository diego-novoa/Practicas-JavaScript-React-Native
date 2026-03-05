// html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Tarjetas con Panel Lateral</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>

  <div class="container" id="cardsContainer"></div>

  <div class="sidebar" id="sidebar">
    <button id="closeBtn">Cerrar</button>
    <div id="userData"></div>
  </div>

  <!-- El JS generado por TypeScript -->
  <script src="app.js"></script>
</body>
</html>

// css// 
body {
  font-family: Arial, sans-serif;
  margin: 0;
  display: flex;
}

.container {
  width: 70%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
}

.card {
  background: #f4f4f4;
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  border: 1px solid #ddd;
}

.card:hover {
  background: #e0e0e0;
  transform: scale(1.03);
}

.sidebar {
  width: 30%;
  background: #222;
  color: white;
  padding: 20px;
  position: fixed;
  right: -100%;
  top: 0;
  height: 100%;
  transition: right 0.3s ease;
  overflow-y: auto;
}

.sidebar.active {
  right: 0;
}

// TypeScript// 

// Interface para tipar la respuesta de la API
interface Address {
  street: string;
  suite: string;
  city: string;
}

interface Company {
  name: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}

// Referencias al DOM con tipado
const container = document.getElementById("cardsContainer") as HTMLDivElement;
const sidebar = document.getElementById("sidebar") as HTMLDivElement;
const userDataDiv = document.getElementById("userData") as HTMLDivElement;
const closeBtn = document.getElementById("closeBtn") as HTMLButtonElement;

let selectedId: number | null = null;

// Crear tarjetas dinámicamente
for (let i = 1; i <= 10; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = `Usuario ${i}`;
  card.dataset.id = i.toString();

  card.addEventListener("click", () => {
    selectedId = Number(card.dataset.id);
    fetchUser(selectedId);
  });

  container.appendChild(card);
}

// Fetch con async/await
async function fetchUser(id: number): Promise<void> {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (!response.ok) {
      throw new Error("Error en la petición");
    }

    const user: User = await response.json();
    showSidebar(user);

  } catch (error) {
    userDataDiv.innerHTML = "<p>Error al cargar datos</p>";
    sidebar.classList.add("active");
  }
}

function showSidebar(user: User): void {
  userDataDiv.innerHTML = `
    <h2>${user.name}</h2>
    <p><strong>Username:</strong> ${user.username}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Teléfono:</strong> ${user.phone}</p>
    <p><strong>Website:</strong> ${user.website}</p>
    <h3>Dirección</h3>
    <p>${user.address.street}, ${user.address.suite}</p>
    <p>${user.address.city}</p>
    <h3>Compañía</h3>
    <p>${user.company.name}</p>
  `;

  sidebar.classList.add("active");
}

// Cerrar panel
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});