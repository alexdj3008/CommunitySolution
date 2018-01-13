import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { Camera } from '@ionic-native/camera';

import { Proyecto } from '../../providers/servicios/proyecto';
import { ServiciosProvider } from '../../providers/servicios/servicios';
import { NavController } from 'ionic-angular/navigation/nav-controller';

import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-addproyecto',
  templateUrl: 'addproyecto.html',
})
export class AddproyectoPage {
	//@ViewChild('fileInput') fileInput;

  //isReadyToSave: boolean;
  //item: any;
  regData ={
    "lugar": '',
    "categoria": '',
    "nombre": '',
    "descripcion": ''
};

  form: FormGroup;

  proyecto: Proyecto = {
    categoria: null,
    nombre: null,
    descripcion: null,
    lugar: null
  };

  constructor(
    public viewCtrl: ViewController,
    private service: ServiciosProvider,
    public camera: Camera,
    public navCtrl:NavController) {
    
  }

  saveProyecto() {
      this.service.saveProyecto(this.regData)
      this.navCtrl.setRoot(TabsPage);
    
    
        
  }
/*
  crearFormulario(){
    this.form = this.formBuilder.group({
      id_categoria: [''],
      nombre: [''],
      descripcion: [''],
      lugar: ['']
    });
  }

  guardarProyecto(){
    this.service.addProyecto(this.form.value)
        .subscribe(
          rs => this.showAlert(),
          er => console.log(er),
          () => console.log('ok')
        )
  }

  showAlert() {
    let alert = this.alertCotrl.create({
      title: 'Agregar Proyecto',
      subTitle: 'Los datos fueron guardados!',
      buttons: ['Ok']
    });
    alert.present();
    this.form.reset();
  }*/

  ionViewDidLoad() { }

  /**
  getPicture() {
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 96,
        targetHeight: 96
      }).then((data) => {
        this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
      }, (err) => {
        alert('Unable to take photo');
      })
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.form.patchValue({ 'profilePic': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['profilePic'].value + ')'
  }
     */

  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }
   */

}
