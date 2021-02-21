import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { Test } from "../Test";
import { LocalidadService } from "../localidad.service";

@Component({
  selector: "app-grafico02",
  templateUrl: "./grafico02.component.html",
  styleUrls: ["./grafico02.component.css"]
})
export class Grafico02Component implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  tests: Array<Test> = [];
  testsApi = null;
  testTmp: any;

  chartOptions: Highcharts.Options = {
    chart: {
      type: "line",
      backgroundColor: "#ddbeb6",
      borderRadius: 15,
      spacing:[20,20,20,20]
    },
    title: {
      text: "TESTS ANUALES",
      style: {
        fontFamily: "verdana",
        fontSize: "20px",
        color: "#512418"
      }
    },

    yAxis: {
      title: {
        text: "Número de tests"
      }
    },

    xAxis: {
      categories: []
    },

    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false
      }
    },

    series: [
      {
        type: "line",
        name: "Año",
        color: "#512418",
        data: []
      }
    ]
  };

  constructor(private localidadService: LocalidadService) {}

  ngOnInit() {
    this.getMisDatos();
  }

  getMisDatos() {
    this.localidadService.getTestsApi().subscribe(
      result => {
        const misDatos: Array<Test> = [];
        let api = null;
        api = result;
        for (let t of api) {
          let p = new Test(
            t.id_test,
            t.nombre,
            t.dni,
            t.telefono,
            t.email,
            t.fecha_n,
            t.sintomas,
            t.sanidad,
            t.fecha_t,
            t.tipo_test,
            t.resultado,
            t.comunidad,
            t.provincia,
            t.localidad,
            t.calle,
            t.ingreso,
            t.activo,
          );
          misDatos.push(p);
        }

        type tDoc = {
          ano: string;
          tests: number;
        };

        let tests: Array<tDoc> = [];

        for (let t of misDatos) {
          let i = false;
          for (let h of tests) {
            if (t.ano() == h.ano) {
              h.tests++;
              i = true;
            }
          }
          if (!i) {
            let a: tDoc = {
              ano: t.ano(),
              tests: 1
            };
            tests.push(a);
          }
        }
        tests.sort((a, b) => (a.ano > b.ano) ? 1 : -1)

        this.chartOptions.xAxis["categories"] = tests.map((x: tDoc) => x.ano);

        this.chartOptions.series[0]["data"] = tests.map((x: tDoc) => x.tests);

        Highcharts.chart("grafico02", this.chartOptions);
      },
      error => console.log(error)
    );
  }
}