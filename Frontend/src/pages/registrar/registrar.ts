import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, ToastController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service/auth-service'; 
@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  public backgroundImage = 'assets/imgs/background/background-5.jpg';
  loading: any;
  regData = {"password2":'', "username":'', "password1":'',"email":'' };

  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    public authService: AuthService, 
    public loadingCtrl: LoadingController, 
    private toastCtrl: ToastController) {}

  ionViewDidLoad() {
    console.log('Pagina de registo');
  }
  
  registrar() {
    this.showLoader();
    this.authService.register(this.regData).then((result) => {
      this.presentToast('Registro exitoso');
      this.loading.dismiss();
      this.navCtrl.pop();
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Authenticating...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
