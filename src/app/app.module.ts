import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent } from './home-page/signup/signup.component';
import { HomeComponent } from './home-page/home/home.component';
import { ExtraComponent } from './home-page/extra/extra.component';
import { MapComponent } from './home-page/map/map.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { EventpageComponent } from './eventpage/eventpage.component';
import { CreateeventComponent } from './createevent/createevent.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilepageComponent,
    HomePageComponent,
    SignupComponent,
    HomeComponent,
    ExtraComponent,
    MapComponent,
    LoginComponent,
    EventpageComponent,
    CreateeventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
