import { Component, OnInit } from "@angular/core";
import { LocalidadService } from "../localidad.service";
import { Localidad } from "../Localidad";
import { Test } from "../Test";
@Component({
  selector: "app-localidades",
  templateUrl: "./localidades.component.html",
  styleUrls: ["./localidades.component.css"]
})
export class LocalidadesComponent implements OnInit {
  localidades: Array<Localidad> = [];
  localidadesApi = null;
  localidadTmp: any;
  constructor(private localidadService: LocalidadService) {}

  getLocalidadesApi() {
    this.localidadService.getLocalidadesApi().subscribe(localidades => {
      this.localidadesApi = localidades;
      for (let localidad of this.localidadesApi) {
        let tests: Array<Test> = new Array();
        for (let test of localidad.tests) {
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
        let l = new Localidad(
          localidad.nombre,
          localidad.id_loc,
          localidad.comunidad,
          localidad.provincia,
          localidad.poblacion,
          tests
        );
        this.localidades.push(l);
      }
    });
  }

  add(
    nombre: string,
    id_loc: string,
    comunidad: string,
    provincia: string,
    poblacion: string
  ) {
    const nombreV = nombre;
    const id_locV = id_loc.trim();
    const comunidadV = comunidad;
    const provinciaV = provincia;
    const poblacionV = parseInt(poblacion);

    if (poblacionV < 0) {
      return;
    }

    const newDoc: any = {
      nombre: nombreV,
      id_loc: id_locV,
      comunidad: comunidadV,
      provincia: provinciaV,
      poblacion: poblacionV
    };

    this.localidadService.addLocalidad(newDoc).subscribe(t => {
      this.localidadTmp = newDoc;
      this.localidades.push(this.localidadTmp);
    });
  }

  ngOnInit() {
    this.getLocalidadesApi();
  }
}