import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { ProfilePage } from '../profile/profile';
import { ChatPage } from '../chat/chat';
import {AddproyectoPage } from '../addproyecto/addproyecto';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListPage;
  tab3Root = AddproyectoPage;
  tab4Root = ChatPage;
  tab5Root = ProfilePage;
  myIndex: number;
  
    constructor(navParams: NavParams) {
      
      this.myIndex = navParams.data.tabIndex || 0;
    }
  }
  
