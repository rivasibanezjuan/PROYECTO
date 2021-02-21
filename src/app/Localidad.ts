import { Test } from "./Test";

export class Localidad {

private _nombre: string;
private _id_loc: string;
private _comunidad: string;
private _provincia: string;
private _poblacion: number;
private _tests: Array<Test>;

 constructor(
nombre: string,
id_loc: string,
comunidad: string,
provincia: string,
poblacion: number,
tests: Array<Test>
  ) {
    this._nombre = nombre;
    this._id_loc = id_loc;
    this._comunidad = comunidad;
    this._provincia = provincia;
    this._poblacion = poblacion;
    (this._tests = tests);
  }

  get nombre() {
    return this._nombre;
  }

  get id_loc() {
    return this._id_loc;
  }

  get comunidad() {
    return this._comunidad;
  }

  get provincia() {
    return this._provincia;
  }

  get poblacion() {
    return this._poblacion;
  }

  get tests() {
    return this._tests;
  }

  set nombre(nombre: string) {
    this.nombre = nombre;
  }

  set comunidad(comunidad: string) {
    this.comunidad = comunidad;
  }

  set provincia(provincia: string) {
    this.provincia = provincia;
  }

  set poblacion(poblacion: number) {
    this.poblacion = poblacion;
  }
}