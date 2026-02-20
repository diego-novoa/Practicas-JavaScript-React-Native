interface Usuario {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function obtenerUsuarios(url: string): Promise<void> {
  const mensaje = document.getElementById("mensaje") as HTMLParagraphElement;

  try {
    mensaje.textContent = "Cargando datos...";

    const respuesta: Response = await fetch(url);

    if (!respuesta.ok) {
      throw new Error(`Error en la solicitud: ${respuesta.status}`);
    }

    const datos: Usuario[] = await respuesta.json();

    mensaje.textContent = "Datos cargados correctamente ✅";
    console.log("Usuarios:", datos);

  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Detalle técnico:", error.message);
    }

    mensaje.textContent =
      "❌ Ocurrió un error al obtener los datos. Intenta nuevamente más tarde.";
  }
}

const urlIncorrecta: string =
  "https://jsonplaceholder.typicode.com/usuarios"; // ruta incorrecta

obtenerUsuarios(urlIncorrecta);