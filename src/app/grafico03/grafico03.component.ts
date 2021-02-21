import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { LocalidadService } from "../localidad.service";


@Component({
  selector: "app-grafico03",
  templateUrl: "./grafico03.component.html",
  styleUrls: ["./grafico03.component.css"]
})
export class Grafico03Component implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: "column"
    },
    title: {
        text: 'Habitantes por localidad'
    },
    subtitle: {
        text: 'Fuente: Ministerio de Sanidad'
    },
    xAxis: {
      categories: []
    },

    series: [
      {
        name:"Habitantes",
        type: "column",
        data: []
      }
    ],
     yAxis: {
        min: 0,
        title: {
            text: 'Poblacion'
        }
    },
    noData: {
      style: {
        fontWeight: "bold",
        fontSize: "15px",
        color: "#303030"
      }
    }
  };

  constructor(private localidadService: LocalidadService) {}

  ngOnInit() {
    this.getMisDatos()
  }

  getMisDatos() {
    this.localidadService.getLocalidadesApi().subscribe(
      result => {
        const misDatos: any = result;
        const dataSeries = misDatos.map((x: any) => x._poblacion);
        const dataCategorias = misDatos.map((x: any) => x._nombre);
        this.chartOptions.series[0]["data"] = dataSeries;
        this.chartOptions.xAxis["categories"] = dataCategorias;
        Highcharts.chart("grafico03", this.chartOptions);
      },
      error => console.log(error)
    );
  }
}