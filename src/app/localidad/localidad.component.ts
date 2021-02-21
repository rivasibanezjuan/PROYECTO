import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LocalidadService } from "../localidad.service";
import { Localidad } from "../Localidad";
import { Test } from "../Test";
import { Location } from "@angular/common";

@Component({
  selector: "app-localidad",
  templateUrl: "./localidad.component.html",
  styleUrls: ["./localidad.component.css"]
})
export class LocalidadComponent implements OnInit {
  localidad: Localidad;
  localidadApi = null;

  constructor(
    private route: ActivatedRoute,
    private localidadService: LocalidadService,
    private location: Location
  ) {}

  getLocalidad(): void {
    let id_loc = this.route.snapshot.paramMap.get("id_loc");
    this.localidadService.getLocalidad(id_loc).subscribe(l => {
      this.localidadApi = l;
      let tests: Array<Test> = new Array();
      for (let test of this.localidadApi[0].tests) {
        let t = new Test(
            test.id_test,
            test.nombre,
            test.dni,
            test.telefono,
            test.email,
            test.fecha_n,
            test.sintomas,
            test.sanidad,
            test.fecha_t,
            test.tipo_test,
            test.resultado,
            test.comunidad,
            test.provincia,
            test.localidad,
            test.calle,
            test.ingreso,
            test.activo,
        );
        tests.push(t);
      }
      this.localidad = new Localidad(
        this.localidadApi[0].nombre,
        this.localidadApi[0].id_loc,
        this.localidadApi[0].comunidad,
        this.localidadApi[0].provincia,
        this.localidadApi[0].poblacion,
        tests
      );
    });
  }

  add(
    id_test: string,
    nombre: string,
    dni: string,
    telefono: string,
    email: string,
    fecha_n: string,
    sintomas: string,
    sanidad: string,
    fecha_t: string,
    tipo_test: string,
    resultado: string,
    comunidad: string,
    provincia: string,
    localidad: string,
    calle: string,
    ingreso: string,
    activo: string
  ) {
    const id_testV = parseInt(id_test);
    const nombreV = nombre.trim();
    const dniV = dni.trim();
    const telefonoV = parseInt(telefono);
    const emailV = email.trim();
    const fecha_nV = fecha_n.trim();
    const sintomasV = sintomas.trim();
    const sanidadV = sanidad.trim();
    const fecha_tV = fecha_t.trim();
    const tipo_testV = tipo_test.trim();
    const resultadoV = true;
    const comunidadV = comunidad.trim();
    const provinciaV = provincia.trim();
    const localidadV = localidad.trim();
    const calleV = calle.trim();
    const ingresoV = true;
    const activoV = true;

    if (resultado == "F") {
      let resultadoV = false;
    } else if (resultado == "V") {
      let resultadoV = true;
    } else {
      return;
    }

    if (ingreso == "F") {
      let ingresoV = false;
    } else if (ingreso == "V") {
      let ingresoV = true;
    } else {
      return;
    }

    if (activo == "F") {
      let activoV = false;
    } else if (activo == "V") {
      let activoV = true;
    } else {
      return;
    }

    const newDoc: any = {
    id_test: id_testV,
    nombre: nombreV,
    dni: dniV,
    telefono: telefonoV,
    email: emailV,
    fecha_n: fecha_nV,
    sintomas: sintomasV,
    sanidad: sanidadV,
    fecha_t: fecha_tV,
    tipo_test: tipo_testV,
    resultado: resultadoV,
    comunidad: comunidadV,
    provincia: provinciaV,
    localidad: localidadV,
    calle: calleV,
    ingreso: ingresoV,
    activo: activoV
    };

    this.localidadService.addTest(newDoc).subscribe(t => {
      const testTmp: any = newDoc;
      this.localidad.tests.push(testTmp);
    });
  }

  save(
    nombre: string,
    id_loc: string,
    comunidad: string,
    provincia: string,
    poblacion: string
  ): void {
    const nombreV = nombre.trim();
    const id_locV = id_loc.trim();
    const comunidadV = comunidad.trim();
    const provinciaV = provincia.trim();
    const poblacionV = parseInt(poblacion);
    
    if (poblacionV < 0) {
      return;
    }
    const doc = {
      nombre: nombreV,
      id_loc: id_locV,
      comunidad: comunidadV,
      provincia: provinciaV,
      poblacion: poblacionV
    };
    this.localidadService.updateLocalidad(doc).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getLocalidad();
  }
}