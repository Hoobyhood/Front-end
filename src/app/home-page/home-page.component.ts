import { Component, OnInit } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ExtraComponent } from './extra/extra.component';
import { MapComponent } from './map/map.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
