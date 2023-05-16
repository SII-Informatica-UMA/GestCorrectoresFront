export class Corrector {
  nombre: string;
  apellido1: string;
  apellido2: string;
  email: string;
  examenes: number;
  telefono: string;
  id?: number;

  constructor(
    nombre: string,
    apellido1: string,
    apellido2: string,
    email: string,
    examenes: number,
    telefono: string
  ) {
    this.nombre = nombre;
    this.apellido1 = apellido1;
    this.apellido2 = apellido2;
    this.email = email;
    this.examenes = examenes;
    this.telefono = telefono;
  }
}
