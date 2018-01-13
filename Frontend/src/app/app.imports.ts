// Global state (used for theming)
import { AppState } from './app.global';

// Modules
//import { SwingModule } from 'angular2-swing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

export const MODULES = [
  //SwingModule,
  BrowserModule,
  HttpModule,
];

export const PROVIDERS = [
   AppState
  ];

export const DIRECTIVES = [
  
];
