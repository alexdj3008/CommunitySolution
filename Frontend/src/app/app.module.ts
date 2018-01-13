import { NgModule, ErrorHandler } from '@angular/core';
import { SharedModule } from './shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PROVIDERS } from './app.imports';
// Http import
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../providers/auth-service/auth-service';
// Service imports
import { ItemApi } from '../services/item-api.service';

//pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import {ProfileSettingsPage} from '../pages/profile-settings/profile-settings';
import {ProfilePage} from '../pages/profile/profile';
import {EditarPage} from '../pages/editar/editar'; 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoryPage } from '../pages/category/category';
import { SingleItem } from '../pages/single-item/single-item';
import { ListPage } from '../pages/list/list';
import { ProyectosProvider } from '../providers/proyectos/proyectos';
import { ToastService } from '../providers/util/toast.service';
import { AlertService } from '../providers/util/alert.service';
import { AddproyectoPage } from '../pages/addproyecto/addproyecto';
import { ChatPage} from '../pages/chat/chat';
import { ServiciosProvider } from '../providers/servicios/servicios';
//import { MessagesPage} from '../pages/chat/messages/messages';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    WelcomePage,
    CategoryPage,
    SingleItem,
    ListPage,
    ProfilePage,
    ProfileSettingsPage,
    AddproyectoPage, 
    TabsPage,
    EditarPage,
    ChatPage
    //MessagesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    SharedModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    WelcomePage,
    CategoryPage,
    SingleItem,
    ListPage,
    ProfilePage,
    ProfileSettingsPage,
    AddproyectoPage,
    EditarPage,
    TabsPage,
    ChatPage
    //MessagesPage
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    ItemApi,
    HttpModule,
    PROVIDERS,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProyectosProvider,
    ToastService,
    AlertService,
    ServiciosProvider
  ]
})
export class AppModule {}
