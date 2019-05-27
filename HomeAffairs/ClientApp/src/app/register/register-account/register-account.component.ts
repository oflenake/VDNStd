import { Component, OnInit } from '@angular/core';
//import { Users, UsersProfile } from './entities';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent implements OnInit {
  accPassword = '123456';
  accConfirmPassword = '123456';

  users = { userID: 1, userEmail: 'gupilenake@gmail.com', userPassword: '' };

  usersProfile = {
    usersProfileID: 1, userID: 1, email: '',
    firstName: 'Onkgopotse', lastName: 'Lenake'
  };

  usersAccountForm: FormGroup;

  constructor() { }

  ngOnInit() {
    //this.questionsForm = new FormGroup({
    //  'name': new FormControl(this.hero.name, [
    //    Validators.required,
    //    Validators.minLength(4),
    //    forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
    //  ]),
    //  'alterEgo': new FormControl(this.hero.alterEgo),
    //  'power': new FormControl(this.hero.power, Validators.required)
    //});
  }

}
