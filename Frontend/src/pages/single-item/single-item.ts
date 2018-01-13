import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Proyecto } from '../../providers/servicios/proyecto';


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
              private navParams:NavParams
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
