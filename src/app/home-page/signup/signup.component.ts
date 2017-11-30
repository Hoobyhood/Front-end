import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    username :'AwesomeUser',
    password :'',
    dateofbirth :'',
    email : 'something@email.com',
    phonenumber : ''
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(this.user);
  }

}
