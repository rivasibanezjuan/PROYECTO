import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Test } from "./Test";

@Injectable({ providedIn: "root" })
export class LocalidadService {
  private url = "https://restapi-proyecto.herokuapp.com/";
  constructor(private http: HttpClient) {}
  getLocalidadesApi() {
    const urlget = `${this.url}testslocalidades`;
    return this.http.get(urlget);
  }

  getTestsApi() {
    const urlget = `${this.url}getTests`;
    return this.http.get(urlget);
  }

  addLocalidad(doc: any) {
    const url = "https://restapi-proyecto.herokuapp.com/postLocalidad";
    return this.http.post(url, doc);
  }

  getTest(id_test: string) {
    const url = `https://restapi-proyecto.herokuapp.com/getTest/${id_test}`;
    return this.http.get(url);
  }

  getLocalidad(id_loc: string) {
    const url = `https://restapi-proyecto.herokuapp.com/getLocalidad/${id_loc}`;
    return this.http.get(url);
  }

  addTest(doc: any) {
    const url = "https://restapi-proyecto.herokuapp.com/postTest";
    return this.http.post(url, doc);
  }

  updateLocalidad(doc: any) {
    const url = `https://restapi-proyecto.herokuapp.com/actualizaLocalidad/${doc.id_loc}`;
    return this.http.post(url, doc);
  }

  updateTest(doc: any) {
    const url = `https://restapi-proyecto.herokuapp.com/actualizaTest/${doc.id_test}`;
    return this.http.post(url, doc);
  }
}
