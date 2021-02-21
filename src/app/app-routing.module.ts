import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LocalidadesComponent } from "./localidades/localidades.component";
import { RouterModule, Routes } from "@angular/router";
import { LocalidadComponent } from "./localidad/localidad.component";
import { Grafico01Component } from './grafico01/grafico01.component';
import { Grafico02Component } from './grafico02/grafico02.component';
import { Grafico03Component } from './grafico03/grafico03.component';


const routes: Routes = [
  { path: "lista", component: LocalidadesComponent },
  {path: 'grafico01', component: Grafico01Component },
  {path: 'grafico02', component: Grafico02Component },
  {path: 'grafico03', component: Grafico03Component },
  { path: "localidad/:id_loc", component: LocalidadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}