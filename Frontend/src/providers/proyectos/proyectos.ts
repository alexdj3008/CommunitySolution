import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProyectosProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProyectosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProyectosProvider Provider');
  }

  obtenerProyectos()
  {
    return this.http.get('assets/data.json');
  }

}