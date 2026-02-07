class Persona{

  //atributos//
  documento:number = 80547597;
  nombre: string = "diego novoa";
  edad: number = 44;
   
  
  //constructor sin parametros//

  public Persona(){}

  //constructor con parametros//
  
  public constructor(documento: number, nombre: string, edad: number){
    this.documento = documento;
    this.nombre = nombre;
    this.edad = edad;
}
  // metodos especiales GETTERS y SETTERS
  // son metodos especiales que nos permite 
  // traer todos los valores de los 
  // atriutos que tengamosde una clase//

  // los getters y setters por defecto van antes de los 
  // metodos por defecto o luego de los metodos constructor//
  
  //GETTER son los que se encargan de devolver un 
  // valor, traer, mostrar, tienen la estructra de una funcion//
  public get Id():number{
    return this.documento;
  }
  // SETTER significa colocar, setear o estableser 
  // no retorna ningun valor pero recie un dato por 
  // parametro que se encarga de setear al objeto 
  // de la clase que estemos trabajando//
  // tambien me sirve para modificar un valor en un ojeto//

  public set Id(nuevoId:number){
    if(nuevoId <= 0)
    throw new Error("el nuevo documento dee ser mayor que 0");
  }
  //metodos //

  public pagoSueldo(){}
  public cargoGerete(){}
  public cargoEmpleado(){}
  public sueldoGerete(){}
  public sueldoEmpleado(){}
}
class Gerente extends Persona{}
class Empleado extends Persona{}