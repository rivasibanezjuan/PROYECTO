import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HighchartsChartModule } from 'highcharts-angular';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from "./app.component";
import { LocalidadService } from "./localidad.service";
import { LocalidadesComponent } from './localidades/localidades.component';
import { AppRoutingModule } from "./app-routing.module";
import { LocalidadComponent } from './localidad/localidad.component';
import { Grafico01Component } from './grafico01/grafico01.component';
import { Grafico02Component } from './grafico02/grafico02.component';
import { Grafico03Component } from './grafico03/grafico03.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, HighchartsChartModule],
  declarations: [AppComponent, LocalidadesComponent,  LocalidadComponent, Grafico01Component, Grafico02Component, Grafico03Component],
  bootstrap: [AppComponent],
  providers: [ LocalidadService, {provide:
    APP_BASE_HREF, useValue: '/localidad'}]
})
export class AppModule {}
