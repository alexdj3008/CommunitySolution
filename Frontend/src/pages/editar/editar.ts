import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Proyecto } from '../../providers/servicios/proyecto';
import { ServiciosProvider } from '../../providers/servicios/servicios';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the EditarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html',
})
export class EditarPage {

	id: number;
	proyecto: Proyecto;

regData ={
    "lugar": '',
    "categoria": '',
    "nombre": '',
    "descripcion": ''
};

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	private servicio: ServiciosProvider) {
  	
  }

  ionViewDidLoad() {
     }

  onGuardar() {
      this.servicio.putProyecto(this.regData)
      this.navCtrl.setRoot(TabsPage);     
  }
    onCancelar() {
    this.navCtrl.popToRoot();
  }

}
