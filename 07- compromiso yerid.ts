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
