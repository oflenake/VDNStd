import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Form, FormGroup } from '@angular/forms';
//import { Users } from './register/models/Users';
//import { UserService } from './Services/app.UserRegistration.Service';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent implements OnInit {
  // Field Properties
  registerForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
