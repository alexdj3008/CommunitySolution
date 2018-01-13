import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ItemApi {

  constructor(private http: Http) {}

  getItems(){
    return new Promise(resolve => {
        this.http.get('http://127.0.0.1:8000/proyecto/')
          .subscribe(res => resolve(res.json()));
    });
  }

}
