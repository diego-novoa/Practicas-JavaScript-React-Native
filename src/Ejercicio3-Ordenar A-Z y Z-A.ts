interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

const usuarios: Usuario[] = [
  { id: 1, nombre: "Juan Pérez", email: "juan@email.com" },
  { id: 2, nombre: "María López", email: "maria@email.com" },
  { id: 3, nombre: "Carlos Sánchez", email: "carlos@email.com" },
  { id: 4, nombre: "Ana Torres", email: "ana@email.com" }
];

const searchInput = document.getElementById("searchInput");
const userList = document.getElementById("userList");
const btnAZ = document.getElementById("btnAZ");
const btnZA = document.getElementById("btnZA");

if (
  !searchInput ||
  !userList ||
  !btnAZ ||
  !btnZA
) {
  throw new Error("No se encontraron los elementos del DOM");
}

let listaActual: Usuario[] = [...usuarios];

function renderUsuarios(lista: Usuario[]): void {
  userList.innerHTML = "";

  lista.forEach(usuario => {
    const li = document.createElement("li");
    li.textContent = `${usuario.nombre} - ${usuario.email}`;
    userList.appendChild(li);
  });
}

renderUsuarios(listaActual);

searchInput.addEventListener("input", () => {
  const texto = (searchInput as HTMLInputElement).value.toLowerCase();

  listaActual = usuarios.filter(usuario =>
    usuario.nombre.toLowerCase().includes(texto)
  );

  renderUsuarios(listaActual);
});

btnAZ.addEventListener("click", () => {
  listaActual = [...listaActual].sort((a, b) =>
    a.nombre.localeCompare(b.nombre)
  );

  renderUsuarios(listaActual);
});

btnZA.addEventListener("click", () => {
  listaActual = [...listaActual].sort((a, b) =>
    b.nombre.localeCompare(a.nombre)
  );

  renderUsuarios(listaActual);
});