import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { ServiciosProvider } from './../../providers/servicios/servicios';
import { SingleItem } from '../single-item/single-item';

// Importar el proveedor de los proyectos
//import {ProyectosProvider} from '../../providers/proyectos/proyectos';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})

// The generic export class is created with the page name.
export class ListPage {

  //items: Observable<any>;
lista: any;


  // The navController and the ItemApi Service is injected into the constructor
  constructor(
              public navCtrl: NavController,
              public params:NavParams,
              //public proveedor:ProyectosProvider,
              public serviciosProvider: ServiciosProvider,
              public modalCtrl: ModalController
            ) {
            
  }

  leerProyecto() {
    this.serviciosProvider.getProyecto()
    .subscribe(
    data => this.lista = data,
    error => console.log(error)
    
  )
  }

  ionViewWillEnter()
  {
    this.leerProyecto();
  }

  ionViewDidLoad() {
    this.leerProyecto();
  }
  
     //Funcion que lleva a la pagina para ver un solo item
  itemTapped($event, item) {
    this.navCtrl.push(SingleItem, item);
  }
 
}
