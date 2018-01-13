import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, App } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { WelcomePage } from '../welcome/welcome'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  })
export class HomePage {

 
  passedCategory: any;

  constructor(
    public navCtrl: NavController,
    private navParams:NavParams,
    public loadingController: LoadingController,
    public app: App
  )
  {
    //this.category = this.navParams.data;
    this.passedCategory = this.navParams.get('category');
  }

// ------------------------------------------------------------------------------------------
// FUNCTIONS
// ------------------------------------------------------------------------------------------
logout(){
  //Api Token Logout 
  const root = this.app.getRootNav();
  root.popToRoot();
}   

  CategoryTapped($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'Infraestructura'
    });
  }

  CategoryTapped_2($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'Salud'
    });
  }

  CategoryTapped_3($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'Seguridad'
    });
  }

  CategoryTapped_4($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'CulturayDeporte'
    });
  }

  CategoryTapped_5($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'Otros'
    });
  }

}
