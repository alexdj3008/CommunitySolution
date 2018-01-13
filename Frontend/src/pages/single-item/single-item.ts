import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Proyecto } from '../../providers/servicios/proyecto';
import { ServiciosProvider } from '../../providers/servicios/servicios';
import { EditarPage } from '../editar/editar';

@Component({
  selector: 'page-single-item',
  templateUrl: 'single-item.html',
})
export class SingleItem {

  //item: any;
  item:any;
  proyecto:Proyecto = {nombre: '', categoria:'', descripcion: '', lugar: ''};

  constructor(
              public navCtrl: NavController,
              private navParams:NavParams,
              private servicios : ServiciosProvider
              )
            { 
              this.item = this.navParams.data;
              //this.cargarDetalle(this.id);
            }

/*cargarDetalle(id){
    this.servicios.getProyId(id)
        .subscribe(
          data => this.id = data,
          error => console.log (error)
          //rs => this.proyecto = rs[1],
          //er => console.log(er),
          //() => console.log('ok')
        )
  }*/
/*
  onEditar() {
    this.navCtrl.push(EditarPage, {
      id: this.id
    });
  }*/
/*
  ionViewDidLoad() {
    this.servicios.getId(this.navParams.get('pId'))
    .subscribe(proyecto => this.proyecto = proyecto);
  }*/

}
