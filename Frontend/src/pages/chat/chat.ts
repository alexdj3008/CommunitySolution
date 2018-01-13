import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  chats = [{
    imageUrl: 'assets/imgs/avatar/marty-avatar.png',
    title: 'McFly',
    lastMessage: 'intentando esto?',
    timestamp: new Date()
  },
  {
    imageUrl: 'assets/imgs/avatar/ian-avatar.png',
    title: 'Venkman',
    lastMessage: 'Sup, dude',
    timestamp: new Date()
  }
  ,
  {
    imageUrl: 'assets/imgs/avatar/sarah-avatar.jpg',
    title: 'Sarah Mcconnor',
    lastMessage: 'You still ow me that pizza.',
    timestamp: new Date()
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 ionViewDidLoad() {
   console.log('ionViewDidLoad ChatPage');
  }
  
  viewMessages(chat) {
    this.navCtrl.push('MessagesPage', { chatId: chat.id });
  }
}
