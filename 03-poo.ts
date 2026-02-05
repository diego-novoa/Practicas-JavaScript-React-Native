// Clase 3: Programación Orientada a Objetos (POO) en TypeScript.
// Ejecuta con: `npx ts-node 03-poo.ts`
// Conceptos clave: clases, herencia, modificadores de acceso (`public`, `private`, `protected`), métodos estáticos y `readonly`.

class Persona {
  // `private` oculta la propiedad fuera de la clase; `protected` permite uso en clases hijas.
  constructor(private nombre: string, protected edad: number) {}

  presentarse(): string {
    return `Soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}

class Empleado extends Persona {
  // `readonly` solo se asigna en el constructor; después no puede mutar.
  readonly id: string;

  constructor(nombre: string, edad: number, private cargo: string, private salario: number) {
    super(nombre, edad); // llama al constructor de Persona
    this.id = crypto.randomUUID(); // genera un identificador único
  }

  describirTrabajo(): string {
    return `${this.presentarse()} Trabajo como ${this.cargo} y gano $${this.salario}.`;
  }

  aplicarAumento(porcentaje: number): void {
    this.salario += this.salario * (porcentaje / 100);
  }

  static desdeObjeto(data: { nombre: string; edad: number; cargo: string; salario: number }): Empleado {
    // Método estático: se invoca sobre la clase (Empleado.desdeObjeto), no sobre una instancia.
    return new Empleado(data.nombre, data.edad, data.cargo, data.salario);
  }
}

const persona = new Persona('Alan Turing', 41);
console.log(persona.presentarse());

const dev = new Empleado('Grace Hopper', 47, 'Backend Developer', 95000);
console.log(dev.describirTrabajo());
dev.aplicarAumento(10);
console.log('Tras aumento:', dev.describirTrabajo());

const desdeJson = Empleado.desdeObjeto({
  nombre: 'Katherine Johnson',
  edad: 50,
  cargo: 'Data Scientist',
  salario: 120000,
});
console.log('Creado con método estático ->', desdeJson.describirTrabajo());

// Variantes:
// - Implementa una interfaz `Trabajable` con `asignarTarea()` y haz que Empleado la implemente.

https://www.youtube.com/watch?v=I4o7fvSQvBA&list=PLQxX2eiEaqbwNP20GMMCjRslRq2lOLWlg&index=10
https://www.youtube.com/watch?v=hfwtzjOhvKk&list=PLQxX2eiEaqbwNP20GMMCjRslRq2lOLWlg&index=11



// - Crea una clase `Gerente` que extienda Empleado y sobreescriba `describirTrabajo`.

https://www.youtube.com/watch?v=tcza2FEz4u4&list=PLQxX2eiEaqbwNP20GMMCjRslRq2lOLWlg
https://www.youtube.com/watch?v=q9gZ9fjKIC0&list=PLQxX2eiEaqbwNP20GMMCjRslRq2lOLWlg&index=2
https://www.youtube.com/watch?v=pXX3c8BloY0&list=PLQxX2eiEaqbwNP20GMMCjRslRq2lOLWlg&index=3
https://www.youtube.com/watch?v=fdfXkiuVHp4&list=PLQxX2eiEaqbwNP20GMMCjRslRq2lOLWlg&index=4

// - Añade getters/setters para salario con validaciones.

https://www.youtube.com/watch?v=fdfXkiuVHp4&list=PLQxX2eiEaqbwNP20GMMCjRslRq2lOLWlg&index=4
https://www.youtube.com/watch?v=ZHK0t5gocjA&list=PLQxX2eiEaqbwNP20GMMCjRslRq2lOLWlg&index=5


// Notas rápidas:
// - Usa clases cuando quieres encapsular estado + comportamiento.
// - Herencia (`extends`) reutiliza código y permite especializar comportamiento.
// - Prefiere `private` para datos internos y `public`/métodos para exponer solo lo necesario.
// - Métodos estáticos son helpers/fábricas que no dependen de una instancia creada.
// - `readonly` protege propiedades que no deberían cambiar durante la vida del objeto.
