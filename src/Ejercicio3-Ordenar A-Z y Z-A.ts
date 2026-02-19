interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

// Arreglo base de usuarios
const usuarios: Usuario[] = [
  { id: 1, nombre: "Juan Pérez", email: "juan@email.com" },
  { id: 2, nombre: "María López", email: "maria@email.com" },
  { id: 3, nombre: "Carlos Sánchez", email: "carlos@email.com" },
  { id: 4, nombre: "Ana Torres", email: "ana@email.com" }
];

// Referencias al DOM
const searchInput = document.getElementById("searchInput") as HTMLInputElement;
const userList = document.getElementById("userList") as HTMLUListElement;
const btnAZ = document.getElementById("btnAZ") as HTMLButtonElement;
const btnZA = document.getElementById("btnZA") as HTMLButtonElement;

// Variable para mantener el estado actual
let listaActual: Usuario[] = [...usuarios];

// Función para renderizar usuarios
function renderUsuarios(lista: Usuario[]): void {
  userList.innerHTML = "";

  lista.forEach(usuario => {
    const li = document.createElement("li");
    li.textContent = `${usuario.nombre} - ${usuario.email}`;
    userList.appendChild(li);
  });
}

// Mostrar todos al inicio
renderUsuarios(listaActual);

// 🔎 Filtro de búsqueda
searchInput.addEventListener("input", () => {
  const texto = searchInput.value.toLowerCase();

  listaActual = usuarios.filter(usuario =>
    usuario.nombre.toLowerCase().includes(texto)
  );

  renderUsuarios(listaActual);
});

// 🔤 Ordenar A-Z
btnAZ.addEventListener("click", () => {
  listaActual = [...listaActual].sort((a, b) =>
    a.nombre.localeCompare(b.nombre)
  );

  renderUsuarios(listaActual);
});

// 🔠 Ordenar Z-A
btnZA.addEventListener("click", () => {
  listaActual = [...listaActual].sort((a, b) =>
    b.nombre.localeCompare(a.nombre)
  );

  renderUsuarios(listaActual);
});
