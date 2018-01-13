import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { ruta } from '../../app/ruta';
import { Proyecto } from '../servicios/proyecto';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';


@Injectable()
export class ServiciosProvider {

private options;
private url = 'http://127.0.0.1:8000/';

  constructor(public http: Http,public httpc:HttpClient) {
  	let headers = new Headers({
     'Content-Type': 'application/json'
     
    });
    this.options = new RequestOptions({ headers: headers });
   
    
  }


saveProyecto(data) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post(this.url+'proyecto/', JSON.stringify(data), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
});
}

getProyecto(){
  let url = `${this.url}`;
  return this.httpc.get(url+'proyecto/', this.options);
  }

  getId(pId: number){
    return this.httpc.get(this.url+'proyecto/1/', this.options);
  }

  putProyecto (proyecto: Proyecto) {
    return new Promise((resolve, reject) => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.put(this.url+'proyecto/', JSON.stringify(proyecto), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        console.log(err);
      });
});}  

getUsuario()
{
  let url = `${this.url}`;
  return this.httpc.get(url+'usuarios/',this.options);
}

savePublicacion(data)
{
  return new Promise((resolve, reject) => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post(this.url+'publicacion/', JSON.stringify(data), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
});
}

getPublicaciones(){
  let url = `${this.url+'publicacion/'}`;
  return this.httpc.get(url, this.options);
  }


}
