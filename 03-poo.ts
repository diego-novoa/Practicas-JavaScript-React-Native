// Clase 3: Programación Orientada a Objetos (POO) en TypeScript.
// Ejecuta con: `npx ts-node 03-poo.ts`

class Persona {
  constructor(private nombre: string, protected edad: number) {}

  presentarse(): string {
    return `Soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}

class Empleado extends Persona {
  readonly id: string;

  constructor(nombre: string, edad: number, private cargo: string, private salario: number) {
    super(nombre, edad);
    this.id = crypto.randomUUID();
  }

  describirTrabajo(): string {
    return `${this.presentarse()} Trabajo como ${this.cargo} y gano $${this.salario}.`;
  }

  aplicarAumento(porcentaje: number): void {
    this.salario += this.salario * (porcentaje / 100);
  }

  static desdeObjeto(data: { nombre: string; edad: number; cargo: string; salario: number }): Empleado {
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

