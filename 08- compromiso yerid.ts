//ejercicio 1 varibles

// Variantes para practicar:
// - Cambia `edad` a readonly usando `const` y observa el error al reasignar.
// - Declara una variable `unknown` y fuerza un casting seguro.
// - Crea tu propio `enum` de estados de pedido y úsalo en un tipo personalizado.

// ejercicio 2 funsiones 

// Variantes:
// - Agrega un parámetro rest `...extras` y suma todos los argumentos.
// - Implementa sobrecarga para una función `formatear(valor: string | number)`.
// - Cambia `procesarLista` para recibir `Promise<number>[]` y usar `Promise.all`.

// ejercicio 3 poo

// Variantes:
// - Implementa una interfaz `Trabajable` con `asignarTarea()` y haz que Empleado la implemente.
// - Crea una clase `Gerente` que extienda Empleado y sobreescriba `describirTrabajo`.
// - Añade getters/setters para salario con validaciones.

interface AsignarTarea {
  tarea: string;
}

class Persona {

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

class Gerente extends Persona {
  public sueldoGerente(): number {
    return this.salario * 1.5;
  }
}

class Empleado extends Persona implements AsignarTarea {

  tarea: string = "";

  public sueldoEmpleado(): number {
    return this.salario;
  }
}
