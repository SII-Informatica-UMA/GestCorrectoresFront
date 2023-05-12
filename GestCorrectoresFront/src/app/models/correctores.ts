export class Corrector {
  id: number;
  asignacionMateria: any;
  nombre: string;
  apellido1: string;
  apellido2: string;
  email: string;
  examenes: number;
  telefono: number;

  constructor(
    id: number,
    asignacionMateria: any,
    nombre: string,
    apellido1: string,
    apellido2: string,
    email: string,
    examenes: number,
    telefono: number
  ) {
    this.id = id;
    this.asignacionMateria = asignacionMateria;
    this.nombre = nombre;
    this.apellido1 = apellido1;
    this.apellido2 = apellido2;
    this.email = email;
    this.examenes = examenes;
    this.telefono = telefono;
  }
}
