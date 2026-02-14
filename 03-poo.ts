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
// - Crea una clase `Gerente` que extienda Empleado y sobreescriba `describirTrabajo`.
// - Añade getters/setters para salario con validaciones.

interface AsignarTarea {
  tarea: string;
}

class Persona1 {

  documento: number = 80547597;
  nombre: string = "diego novoa";
  edad: number = 44;
  salario: number = 50000;

  public constructor(documento: number, nombre: string, edad: number, salario: number) {
    this.documento = documento;
    this.nombre = nombre;
    this.edad = edad;
    this.setSalario(salario);
  }

  public setSalario(valor: number): void {
    if (valor <= 0) {
      throw new Error("El salario debe ser mayor que 0");
    }
    this.salario = valor;
  }
}

class Gerente1 extends Persona1 {
  public sueldoGerente1(): number {
    return this.salario * 1.5;
  }
}

class Empleado1 extends Persona1 implements AsignarTarea {

  tarea: string = "";

  public sueldoEmpleado1(): number {
    return this.salario;
  }
}



// Notas rápidas:
// - Usa clases cuando quieres encapsular estado + comportamiento.
// - Herencia (`extends`) reutiliza código y permite especializar comportamiento.
// - Prefiere `private` para datos internos y `public`/métodos para exponer solo lo necesario.
// - Métodos estáticos son helpers/fábricas que no dependen de una instancia creada.
// - `readonly` protege propiedades que no deberían cambiar durante la vida del objeto.
