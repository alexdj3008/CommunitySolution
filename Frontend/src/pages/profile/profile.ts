import { Component } from '@angular/core';

import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { ProfileSettingsPage } from '../profile-settings/profile-settings';
import {ToastService} from '../../providers/util/toast.service';
import { ServiciosProvider } from '../../providers/servicios/servicios';

//
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  usuario :any;
  lista:any;
  regData ={
    descripcion: '',
    id_usuario: localStorage.getItem('id') };
  following = false;
  user = {
    name: 'Alexis Goyo',
    profileImage: 'assets/imgs/avatar/marty-avatar.png',
    coverImage: 'assets/imgs/background/background-5.jpg',
    occupation: 'Developer',
    location: 'Ciudad de Saltadilla',
    description: 'They try to shut me down on MTV but it feels son empty without me',
    followers: 456,
    following: 1052,
    posts: 35
  };

  

  constructor(public serviciosProvider: ServiciosProvider,
              public navCtrl: NavController,
              public toastCtrl:ToastService,
              public navParams: NavParams) { }

  ionViewDidLoad() {
    this.leerPublicacion()
  }


  leerPublicacion() {
    this.serviciosProvider.getPublicaciones()
    .subscribe(
    data => this.lista = data,
    error => console.log(error)
    )

  }

  savePublicacion()
  {
    this.serviciosProvider.savePublicacion(this.regData)
    this.ionViewDidLoad()
    
  }

  follow() {
    this.following = !this.following;
    this.toastCtrl.create('Follow user clicked');
  }

  imageTapped(post) {
    this.toastCtrl.create('Post image clicked');
  }

  comment(post) {
    this.toastCtrl.create('Comments clicked');
  }

  like(post) {
    this.toastCtrl.create('Like clicked');
  }

  config(){
    //Api connections
    this.navCtrl.push(ProfileSettingsPage);
    }

}
