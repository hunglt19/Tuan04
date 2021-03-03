import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Bai01Component } from './home/bai01/bai01.component';
import {FormsModule} from '@angular/forms';
import { Baiso2Component } from './home/baiso2/baiso2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Bai01Component,
    Baiso2Component
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
