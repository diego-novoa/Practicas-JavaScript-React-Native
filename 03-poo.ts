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

// 1. Crear un objeto de la clase Persona con tus datos y mostrar su nombre.
const persona1 = new Persona(9887039,"diego perez",23,20000);
console.log(persona1.nombre);
//2. Crear un objeto de la clase Empleado y asignarle una tarea usando la propiedad tarea.
const empleado1 = new Empleado(9809889334,"luz torrez",21,23400);
empleado1.tarea ="atencion al cliente";
//3. Crear un objeto de la clase Gerente y calcular su sueldo usando sueldoGerente().
const gerente1 = new Gerente(76556744,"luna perez",33,45366);
console.log(gerente1.sueldoGerente());
//4. Intentar asignar un salario negativo a un Empleado y manejar la excepción.
const empleado2 =new Empleado(76545663,"luz alba",23,54000);
try{
  empleado2.salario = -34220;
}
catch(error){
  console.log("error al asignar salario:", error.message);
}
//5. Modificar el salario de una Persona usando setSalario() y mostrar el salario actualizado.
persona1.setSalario(40000);
console.log("salario actualizado:", persona1.salario);
//6. Crear un método en Empleado que muestre un mensaje con su tarea asignada.
Empleado.prototype.mostrarTarea = function(){
  console.log(`Hola, soy ${this.nombre} y mi tarea es ${this.tarea}`);
}
//7. Crear un arreglo de Persona que contenga Empleado y Gerente y mostrar los nombres de todos.
const personas: Persona[] = [persona1, empleado1, gerente1];
personas.forEach(p => console.log(p.nombre));
//8. Comparar los sueldos de un Empleado y un Gerente.
console.log('sueldo del empleado:', gerente1.sueldoGerente() > empleado1.sueldoEmpleado() ? gerente1.sueldoGerente() : empleado1.sueldoEmpleado());
//9. Crear un método en Gerente que reciba un Empleado y le asigne una tarea.
public asignarTareaEmpleado(empleado: Empleado, tarea: string) {
    empleado.tarea = tarea;
  }
//10. Crear un constructor en Empleado que reciba tarea como parámetro además de los datos de la persona.
class EmpleadoConTarea extends Empleado{
  constructor(documento: number, nombre: string, edad: number, salario: number, tarea: string) {
    super(documento, nombre, edad, salario);
    this.tarea = tarea;
  }
}
//11. Sobrescribir el método setSalario() en Gerente para que nunca pueda ser menor a 1000.
public setSalario(valor: number): void {
    if (valor < 1000){
      throw new Error("El salario del gerente debe ser al menos 1000");
    }
    this.salario = valor;
}
//12. Crear un método estático en Persona que devuelva la cantidad de personas creadas.
static cantidadPersonas: number = 0;
public static incrementarCantidad() {
    Persona.cantidadPersonas++;
}
//13. Usar instanceof para verificar si un objeto es Empleado o Gerente.
if (empleado1 instanceof Empleado){
    console.log('empleado1 es un empleado', empleado1.nombre);
}
//14. Crear un método que imprima todos los datos de una Persona (documento, nombre, edad, salario).
  public mosstrarDatos(): void {
    console.log(`Documento: ${this.documento}, Nombre: ${this.nombre}, Edad: ${this.edad}, Salario: ${this.salario}`);
  }
//15. Cambiar el nombre de un Empleado y mostrarlo antes y después del cambio.
console.log("nombre antes del cambio:", empleado1.nombre);
empleado1.nombre = "luz torrez perez";
console.log("nombre despues del cambio:", empleado1.nombre);  
//16. Crear un método en Gerente que aumente su salario en un porcentaje dado.
public aumentarSalario(porcentaje: number): void {
    const aumento = this.salario * (porcentaje / 100);
    this.setSalario(this.salario + aumento);
  } 
//17. Crear un Empleado con salario 0 y capturar la excepción lanzada por setSalario().
try {  const empleado3 = new Empleado(12345678, "juan perez", 30, 0);
}catch (error) {
  console.log("error al crear empleado con salario 0:", error.message);
} 
//18. Crear un arreglo de tareas (strings) y asignarlas a varios Empleado usando la propiedad tarea.
const tareas: string[] = ["atencion al cliente","administracion", "ventas"],
empleados: Empleado[] = [empleado1, empleado2];
empleados.forEach((empleado, index)=>{
  empleado.tarea = tareas[index % tareas.length];
  console.log('empleado:', empleado.nombre, 'tarea asignada:', empleado.tarea);
}
//19. Crear un método en Empleado que imprima "Hola, soy [nombre] y mi tarea es [tarea]".
  Empleado.prototype.mostrarSaludo = function (){
    console.log(`Hola, soy ${this.nombre} y mi tarea es ${this.tarea}`);
  } 
//20. Crear un Gerente, asignar un Empleado, darle tarea y mostrar el sueldo del gerente y del empleado.
gerente1.asignarTareaEmpleado(empleado1, "Preparar reunión");
console.log("tarea asignada:", empleado1.tarea);
console.log("sueldo gerente:", gerente1.sueldoGerente());
console.log("sueldo empleado:", empleado1.sueldoEmpleado());


// Notas rápidas:
// - Usa clases cuando quieres encapsular estado + comportamiento.
// - Herencia (`extends`) reutiliza código y permite especializar comportamiento.
// - Prefiere `private` para datos internos y `public`/métodos para exponer solo lo necesario.
// - Métodos estáticos son helpers/fábricas que no dependen de una instancia creada.
// - `readonly` protege propiedades que no deberían cambiar durante la vida del objeto.
