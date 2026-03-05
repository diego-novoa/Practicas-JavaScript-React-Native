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

const searchInput = document.getElementById("searchInput") as HTMLInputElement;
const userList = document.getElementById("userList") as HTMLUListElement;

function renderUsuarios(lista: Usuario[]): void {
  userList.innerHTML = "";

  lista.forEach(usuario => {
    const li = document.createElement("li");
    li.textContent = `${usuario.nombre} - ${usuario.email}`;
    userList.appendChild(li);
  });
}

renderUsuarios(usuarios);

searchInput.addEventListener("input", () => {
  const texto = searchInput.value.toLowerCase();

  const usuariosFiltrados = usuarios.filter(usuario =>
    usuario.nombre.toLowerCase().includes(texto)
  );

  renderUsuarios(usuariosFiltrados);
});
