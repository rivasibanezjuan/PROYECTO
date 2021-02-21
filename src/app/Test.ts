export class Test {
private _id_test:string;
private _nombre:string;
private _dni:string;
private _telefono:number;
private _email:string;
private _fecha_n:Date;
private _sintomas:Array<string>;
private _sanidad: string;
private _fecha_t:Date;
private _tipo_test:string;
private _resultado:boolean;
private _comunidad:string;
private _provincia:string;
private _localidad:string;
private _calle:string;
private _ingreso:boolean;
private _activo:boolean;

 constructor(
id_test: string,
nombre: string,
dni: string,
telefono: number,
email: string,
fecha_n: Date,
sintomas: Array<string>,
sanidad: string,
fecha_t: Date,
tipo_test: string,
resultado: boolean,
comunidad: string,
provincia: string,
localidad: string,
calle: string,
ingreso: boolean,
activo: boolean
  ) {
    this._id_test = id_test;
    this._nombre = nombre;
    this._dni = dni;
    this._telefono = telefono;
    this._email = email;
    this._fecha_n = fecha_n;
    this._sintomas = sintomas;
    this._sanidad = sanidad;
    this._fecha_t = fecha_t;
    this._tipo_test = tipo_test;
    this._resultado = resultado;
    this._comunidad = comunidad;
    this._provincia = provincia;
    this._localidad = localidad;
    this._calle = calle;
    this._ingreso = ingreso;    
    this._activo = activo;
  }

  get id_test() {
    return this._id_test;
  }
  get nombre() {
    return this._nombre;
  }
  get dni() {
    return this._dni;
  }
  get telefono() {
    return this._telefono;
  }
  get email() {
    return this._email;
  }
  get fecha_n() {
    return this._fecha_n;
  }
  get sintomas() {
    return this._sintomas;
  }
  get sanidad() {
    return this._sanidad;
  }
  get fecha_t() {
    return this._fecha_t;
  }
  get tipo_test() {
    return this._tipo_test;
  }
  get resultado() {
    return this._resultado;
  }
    get comunidad() {
    return this._comunidad;
  }
    get provincia() {
    return this._provincia;
  }
    get localidad() {
    return this._localidad;
  }
    get calle() {
    return this._calle;
  }
    get ingreso() {
    return this._ingreso;
  }
    get activo() {
    return this._activo;
  }

// DINERO QUE INGRESA EL ESTADO POR CADA TEST REALIZADO EN UNA CLÍNICA PRIVADA

iva() {
if (this._sanidad == "Privada"){ 
  if (this._tipo_test == "PCR"){ 
    let res: number = 125;
    let res2 = res * 0.21;
    return trunc(res2, 2);
    } else if (this._tipo_test == "Rápido"){ 
      let res: number = 30;
      let res2 = res * 0.21;
      return trunc(res2, 2);
      } else if (this._tipo_test == "Serológico") {
        let res: number = 45;
        let res2 = res * 0.21;
        return trunc(res2, 2);
      }
  }
}

/*
tasa(){
if (this._activo == true){
  let casos: number = +1;
  let tasa:number = (casos / this._poblacion) * 1000000
  return trunc(casos, 2);
  }
}
*/

// DINERO QUE INGRESA LA CLÍNICA PRIVADA POR CADA TEST

precio() {
if (this._sanidad = "Privada"){ 
  if (this._tipo_test = "PCR"){ 
    let res: number = 125;
    let res2 = res * 0.79;
    return trunc(res2, 2);
    } else if (this._tipo_test = "Rápido"){ 
      let res: number = 30;
      let res2 = res * 0.79;
      return trunc(res2, 2);
      } else if (this._tipo_test = "Serológico") {
        let res: number = 45;
        let res2 = res * 0.79;
        return trunc(res2, 2);
        }
  }
}

// TESTS REALIZADOS CADA AÑO

  ano() {
    let a = new Date(this.fecha_t);
    let res = a.getFullYear().toString();
    return res;
  }
}

function trunc(x, posiciones = 0) {
  var s = x.toString();
  var decimalLength = s.indexOf(".") + 1;
  var numStr = s.substr(0, decimalLength + posiciones);
  return Number(numStr);
}
